'use client'
import { useEffect, useRef } from 'react'

export function BgCanvas() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const cv = ref.current
    if (!cv) return
    const hasMM = typeof window.matchMedia === 'function'
    const lowPower =
      (hasMM && matchMedia('(prefers-reduced-motion: reduce)').matches) ||
      (hasMM && matchMedia('(max-width: 900px)').matches)
    if (lowPower) { cv.style.display = 'none'; return }

    const cx = cv.getContext('2d', { alpha: true })
    if (!cx) { cv.style.display = 'none'; return }

    // Preserve the non-null types inside the nested animation helpers.
    const canvas = cv
    const context = cx

    let W = 0, H = 0, frame = 0, active = true, rafId = 0
    type P = { x:number;y:number;r:number;tw:number;a:number }
    type V = { x:number;y:number;h:number;spd:number;a:number;w:number }
    type S = { y:number;spd:number;a:number }
    type Pt = { x:number;y:number;vx:number;vy:number;r:number;a:number;life:number }
    let stars:P[]=[], verts:V[]=[], scans:S[]=[], parts:Pt[]=[]
    let ar=[61,127,255], sr=[100,180,255], co='rgba(0,0,0,0)'
    let shoot: {sx:number;sy:number;t:number}|null = null

    function rgb(s:string){const m=s.match(/[\d.]+/g);return m&&m.length>=3?[+m[0],+m[1],+m[2]]:[100,160,255]}
    function refreshColors(){
      const st=getComputedStyle(document.documentElement)
      ar=rgb(st.getPropertyValue('--ptcl').trim())
      sr=rgb(st.getPropertyValue('--star').trim())
      co=st.getPropertyValue('--canvas-overlay').trim()||'rgba(0,0,0,0)'
    }
    refreshColors()
    const mo=new MutationObserver(refreshColors)
    mo.observe(document.documentElement,{attributes:true,attributeFilter:['class']})

    const star = ():P => ({x:Math.random()*W,y:Math.random()*H,r:Math.random()*1.4+.3,tw:Math.random()*6.28,a:Math.random()*.5+.15})
    const vert = ():V => ({x:Math.random()*W,y:-Math.random()*H*.6,h:Math.random()*110+40,spd:Math.random()*.7+.28,a:Math.random()*.14+.04,w:Math.random()<.3?2:1})
    const scan = ():S => ({y:Math.random()*H,spd:Math.random()*.36+.14,a:Math.random()*.05+.02})
    const part = ():Pt => ({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.3,vy:-Math.random()*.44-.1,r:Math.random()*.9+.2,a:Math.random()*.44+.1,life:1})

    function init(){
      W=canvas.width=innerWidth; H=canvas.height=innerHeight
      const mob=W<768,tab=W<1024
      stars=Array.from({length:mob?60:tab?100:160},star)
      verts=Array.from({length:mob?8:tab?14:24},vert)
      scans=Array.from({length:mob?2:5},scan)
      parts=Array.from({length:mob?18:tab?30:50},part)
    }

    function draw(){
      context.clearRect(0,0,W,H)
      if(co!=='rgba(0,0,0,0)'&&co!==''){context.fillStyle=co;context.fillRect(0,0,W,H)}
      frame++
      stars.forEach(s=>{
        s.tw+=.011
        const al=Math.max(0,s.a+Math.sin(s.tw)*.10)
        context.beginPath();context.arc(s.x,s.y,s.r,0,6.28)
        context.fillStyle=`rgba(${sr[0]},${sr[1]},${sr[2]},${al})`;context.fill()
        if(s.r>1.1){context.beginPath();context.arc(s.x,s.y,s.r*3.5,0,6.28);context.fillStyle=`rgba(${sr[0]},${sr[1]},${sr[2]},${al*.09})`;context.fill()}
      })
      verts.forEach(v=>{
        v.y+=v.spd
        if(v.y>H+v.h){v.y=-v.h;v.x=Math.random()*W}
        const g=context.createLinearGradient(0,v.y,0,v.y+v.h)
        g.addColorStop(0,`rgba(${ar[0]},${ar[1]},${ar[2]},0)`)
        g.addColorStop(.35,`rgba(${ar[0]},${ar[1]},${ar[2]},${v.a})`)
        g.addColorStop(1,`rgba(${ar[0]},${ar[1]},${ar[2]},0)`)
        context.fillStyle=g;context.fillRect(v.x-v.w/2,v.y,v.w,v.h)
      })
      scans.forEach(l=>{
        l.y+=l.spd;if(l.y>H)l.y=0
        const g=context.createLinearGradient(0,0,W,0)
        g.addColorStop(0,'transparent')
        g.addColorStop(.2,`rgba(${ar[0]},${ar[1]},${ar[2]},${l.a})`)
        g.addColorStop(.8,`rgba(${ar[0]},${ar[1]},${ar[2]},${l.a})`)
        g.addColorStop(1,'transparent')
        context.fillStyle=g;context.fillRect(0,l.y,W,1)
      })
      parts.forEach((p,i)=>{
        p.x+=p.vx;p.y+=p.vy;p.life-=.003
        if(p.life<=0||p.y<-10){parts[i]=part();return}
        context.beginPath();context.arc(p.x,p.y,p.r,0,6.28)
        context.fillStyle=`rgba(${ar[0]},${ar[1]},${ar[2]},${p.a*p.life})`;context.fill()
      })
      if(frame%320===0&&!shoot) shoot={sx:Math.random()*W,sy:Math.random()*H*.35,t:0}
      if(shoot){
        const s=shoot,dx=s.t*180,dy=s.t*68
        const g=context.createLinearGradient(s.sx+dx,s.sy+dy,s.sx+dx-80,s.sy+dy-28)
        g.addColorStop(0,`rgba(${sr[0]},${sr[1]},${sr[2]},.88)`)
        g.addColorStop(1,`rgba(${sr[0]},${sr[1]},${sr[2]},0)`)
        context.beginPath();context.moveTo(s.sx+dx,s.sy+dy);context.lineTo(s.sx+dx-80,s.sy+dy-28)
        context.strokeStyle=g;context.lineWidth=1.5;context.stroke()
        shoot.t+=.065;if(shoot.t>1)shoot=null
      }
    }
    function loop(){if(!active)return;draw();rafId=requestAnimationFrame(loop)}

    let rt:ReturnType<typeof setTimeout>
    const onResize=()=>{clearTimeout(rt);rt=setTimeout(()=>{init();refreshColors()},150)}
    const onVis=()=>{
      active=!document.hidden
      if(active&&rafId===0)loop()
      if(!active&&rafId){cancelAnimationFrame(rafId);rafId=0}
    }
    window.addEventListener('resize',onResize)
    document.addEventListener('visibilitychange',onVis)
    init();loop()

    return () => {
      active=false
      if(rafId) cancelAnimationFrame(rafId)
      window.removeEventListener('resize',onResize)
      document.removeEventListener('visibilitychange',onVis)
      mo.disconnect()
    }
  }, [])

  return <canvas id="bg-canvas" ref={ref} />
}
