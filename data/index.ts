// ─── Projects ────────────────────────────────────────────────────────────────
export type ProjectType = 'wordpress' | 'webflow'

export interface Project {
  img: string
  alt: string
  category: string
  title: string
  excerpt: string
  tags: string[]
  url: string
  type: ProjectType
}

export const projects: Project[] = [
  {
    img: '/corevist.webp',
    alt: 'Corevist B2B customer portal and SAP eCommerce platform',
    category: 'WordPress · Enterprise B2B · Redevelopment',
    title: 'Corevist',
    excerpt: 'Redevelopment project built on the Sway theme and WPBakery — delivered custom sections, code reviews, responsive bug fixes, client communication, and production deployment.',
    tags: ['WordPress', 'Sway Theme', 'WPBakery', 'Redevelopment', 'Deployment'],
    url: 'https://www.corevist.com',
    type: 'wordpress',
  },
  {
    img: '/sppropperties.webp',
    alt: 'Shah & Patel Properties website homepage',
    category: 'WordPress · Real Estate',
    title: 'Shah & Patel Properties',
    excerpt: "Custom WordPress theme engineered with custom post types (CPTs), dynamic property filters, third-party CRM API integration, and responsive lead capture forms.",
    tags: ['WordPress', 'Custom Theme', 'API Integration'],
    url: 'https://spproperties.com.au',
    type: 'wordpress',
  },
  {
    img: '/Devamrita-Swami_home.webp',
    alt: 'Devamrita Swami website homepage',
    category: 'WordPress · Personal Brand',
    title: 'Devamrita Swami',
    excerpt: 'Media-rich publishing platform built with custom Elementor templates, multimedia streaming API integration, advanced content taxonomies, and performance optimization.',
    tags: ['WordPress', 'Elementor', 'API Integration'],
    url: 'https://devamritaswami.media',
    type: 'wordpress',
  },
  {
    img: '/Peppy-Cow_home.webp',
    alt: 'Peppycow website homepage',
    category: 'WordPress · Dairy Brand',
    title: 'Peppycow',
    excerpt: 'Brand and catalog platform built with Elementor, featuring custom product showcase components, third-party supply API syncing, and mobile-first responsive optimization.',
    tags: ['WordPress', 'Elementor', 'API Integration'],
    url: 'https://peppycow.com',
    type: 'wordpress',
  },
  {
    img: '/Kasha.webp',
    alt: 'Kasha Real Estate website homepage',
    category: 'WordPress · Real Estate',
    title: 'Kasha Properties',
    excerpt: 'Bespoke WordPress build powered by custom Gutenberg block layouts, modular ACF architecture, lightweight CSS/JS, and property consultation enquiry funnels.',
    tags: ['WordPress', 'Gutenberg', 'Custom Code'],
    url: 'https://kasha.com.au',
    type: 'wordpress',
  },
  {
    img: '/julia-ai.webp',
    alt: 'Julia AI website homepage',
    category: 'WordPress · AI Assistant',
    title: 'Julia AI',
    excerpt: 'SaaS landing platform developed with custom Elementor sections, third-party AI chat widget integration, lead conversion flows, and Core Web Vitals tuning.',
    tags: ['WordPress', 'Elementor', 'Frontend'],
    url: 'https://juliaai.org',
    type: 'wordpress',
  },
  {
    img: '/caa.webp',
    alt: 'Childrens Author Alliance website homepage',
    category: 'WordPress · Membership . Author',
    title: 'Childrens Author Alliance',
    excerpt: 'Community membership website developed with custom Elementor templates, custom CSS/JS styling, author directory architecture, and registration onboarding.',
    tags: ['WordPress', 'Elementor', 'Custom Code'],
    url: 'https://childrensauthoralliance.org',
    type: 'wordpress',
  },
  {
    img: '/Bite-Buddy.webp',
    alt: 'BiteBuddy Webflow template homepage',
    category: 'Webflow · Template',
    title: 'BiteBuddy',
    excerpt: 'Responsive food-delivery Webflow template engineered with custom CMS collections, interactive menu components, and conversion-focused ordering UI.',
    tags: ['Webflow', 'Template', 'Food Delivery'],
    url: 'https://bite-buddy.webflow.io/',
    type: 'webflow',
  },
  {
    img: '/TastiQuest.webp',
    alt: 'TastiQuest Webflow template homepage',
    category: 'Webflow · Template',
    title: 'TastiQuest',
    excerpt: 'Restaurant & landing Webflow template built with fluid interactions, CMS-driven dishes catalog, and reusable component structure.',
    tags: ['Webflow', 'Template', 'Responsive'],
    url: 'https://tastiquest.webflow.io/',
    type: 'webflow',
  },
  {
    img: '/Novitrax.webp',
    alt: 'Novitrax Webflow template homepage',
    category: 'Webflow · Template',
    title: 'Novitrax',
    excerpt: 'B2B IT consulting Webflow template built with multi-page CMS case studies, interactive UI components, and accessible responsive layouts.',
    tags: ['Webflow', 'Template', 'IT Consulting'],
    url: 'https://novitrax-itconsulting.webflow.io/',
    type: 'webflow',
  },
]

// ─── Services ─────────────────────────────────────────────────────────────────
export const services = [
  { icon: '🎨', title: 'Custom Theme Development', desc: 'Pixel-perfect WordPress themes from Figma designs — clean, semantic, fully ACF-integrated.' },
  { icon: '🔌', title: 'Custom Plugin Development', desc: 'Custom plugins using proper APIs, hooks, shortcodes, and CPTs — maintainable and scalable.' },
  { icon: '🛒', title: 'WooCommerce Customization', desc: 'Custom product types, checkout flows, payment integrations, and performance tuning.' },
  { icon: '⚡', title: 'Performance Optimization', desc: 'Core Web Vitals, caching, image optimization, and database tuning for blazing speed.' },
  { icon: '🏗️', title: 'ACF & Content Architecture', desc: 'Scalable content structures editors can manage without developer help.' },
  { icon: '🤖', title: 'AI-Assisted Development', desc: 'Faster delivery, smarter debugging, higher-quality output through AI workflows.' },
]

// ─── Skills ───────────────────────────────────────────────────────────────────
export const skills = [
  { title: 'Backend', desc: 'Core WordPress development and backend feature implementation.', tools: 'PHP, MySQL, ACF, WP-CLI, Git, VS Code' },
  { title: 'Frontend', desc: 'Responsive UI builds and visual implementation from design to live site.', tools: 'Elementor, WPBakery, HTML, CSS, JavaScript, jQuery, Bootstrap' },
  { title: 'SEO & Analytics', desc: 'Search optimization and reporting for better visibility and growth.', tools: 'Yoast SEO, Rank Math SEO, Google Search Console, Google Analytics 4, PageSpeed Insights' },
  { title: 'Optimization & Security', desc: 'Load speed and Core Web Vitals performance optimization for production sites.', tools: 'WP Rocket, LiteSpeed Cache, All-in-one Migration, Jetpack, Wordfence' },
  { title: 'AI Tools', desc: 'AI-assisted debugging, drafting, and faster implementation workflow.', tools: 'Codex, Claude, ChatGPT, Gemini' },
  { title: 'Server & Hosting', desc: 'Domain, hosting and deployment operations for live websites.', tools: 'GoDaddy, Cloudflare, Bluehost, FTP, cPanel, WPEngine'},
]

// ─── Experience ───────────────────────────────────────────────────────────────
export const experience = [
  {
    date: '07/2026 — Present',
    company: 'ManekTech Solutions Pvt. Ltd. · Ahmedabad',
    title: 'WordPress Developer',
    current: true,
    skills: ['Custom Plugins', 'WooCommerce', 'Performance', 'Deployment', 'Client Communication'],
  },
  {
    date: '03/2025 — 06/2026',
    company: 'iCoderz Solutions Pvt. Ltd. · Ahmedabad',
    title: 'WordPress Developer',
    current: false,
    skills: ['Custom Themes', 'API Integration', 'ACF', 'Production Releases', 'Webflow', 'Client Communication'],
  },
  {
    date: '03/2024 — 02/2025',
    company: 'Metizsoft Solutions Pvt. Ltd. · Ahmedabad',
    title: 'WordPress Developer',
    current: false,
    skills: ['Custom Themes', 'ACF', 'Custom Post Types', 'Responsive Layouts'],
  },
  {
    date: '08/2022 — 02/2024',
    company: 'Shreeji Software · Ahmedabad',
    title: 'WordPress Developer',
    current: false,
    skills: ['Elementor', 'WordPress Pages', 'WooCommerce', 'Bug Fixing', 'HTML', 'CSS', 'JavaScript'],
  },
]

// ─── Process steps ────────────────────────────────────────────────────────────
export const processSteps = [
  {
    num: '01', icon: '🎯', title: 'Discovery',
    tagline: '"Scope locked before a single file opens."',
    outcomes: ['Goals documented', 'Requirements agreed', 'Timeline set'],
    tags: ['Requirements', 'Scope Lock', 'Timeline'],
    position: 'hi' as const,
  },
  {
    num: '02', icon: '🏗️', title: 'Architecture',
    tagline: '"Structure before code — always."',
    outcomes: ['CPT hierarchy mapped', 'ACF fields planned', 'Plugin strategy set'],
    tags: ['CPT Design', 'ACF Fields', 'Plugin Plan'],
    position: 'lo' as const,
  },
  {
    num: '03', icon: '💻', title: 'Build',
    tagline: '"Written so any dev can maintain it, not just me."',
    outcomes: ['Clean hooks & filters', 'No hardcoded shortcuts', 'Editor-friendly structure'],
    tags: ['PHP', 'Custom Hooks', 'WP APIs'],
    position: 'hi' as const,
  },
  {
    num: '04', icon: '🔍', title: 'QA & Testing',
    tagline: '"Nothing ships without passing the checklist."',
    outcomes: ['Cross-browser tested', 'Core Web Vitals checked', 'Security headers verified'],
    tags: ['Cross-browser', 'Core Web Vitals', 'Security'],
    position: 'lo' as const,
  },
  {
    num: '05', icon: '🚀', title: 'Deploy & Handover',
    tagline: '"You leave with docs — not dependency on me."',
    outcomes: ['Zero-downtime launch', 'Full backup taken', 'Handover docs included'],
    tags: ['Zero Downtime', 'Backup', 'Handover Docs'],
    position: 'hi' as const,
    final: true,
  },
]

// ─── Tech stack tags ──────────────────────────────────────────────────────────
export const stackTags = [
  'WordPress','PHP','MySQL','ACF','CPT','Elementor',
  'WooCommerce','JavaScript','jQuery','CSS','HTML',
  'Bootstrap','Webflow','REST API','AI Workflows',
]
