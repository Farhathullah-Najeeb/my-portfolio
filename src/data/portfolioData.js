export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

export const heroData = {
  name: 'Farhathullah Najeeb',
  role: 'Flutter Developer · 3+ Years',
  intro:
    'Building high-performance cross-platform apps with 5 published apps on App Store & Google Play. Specialized in fintech, payment gateways & real-time systems.',
  ctas: [
    { label: 'View Work', href: '#projects', variant: 'primary' },
    { label: "Let's Talk", href: '#contact', variant: 'ghost' },
  ],
  stats: [
    { label: 'Years Experience', value: '3+' },
    { label: 'Published Apps', value: '5' },
    { label: 'Gateways', value: '5+' },
    { label: 'Average Rating', value: '4.5★' },
  ],
  socialLinks: [
    { label: 'GitHub', href: 'https://github.com/Farhathullah-Najeeb' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/farhathullah-najeeb-954a0b238' },
    { label: 'Instagram', href: 'https://www.instagram.com/farhathullah_najeeb' },
    { label: 'Email', href: 'mailto:farhathullahmn@gmail.com' },
  ],
};

export const aboutData = {
  image: '/myimage.jpeg',
  intro: [
    'Flutter developer with 3+ years of experience and 5 apps published on iOS & Android. I bring deep expertise in fintech, payment integrations (Stripe, NomuPay, HyperPay), and Clean Architecture using BLoC/Riverpod.',
    "I've built end-to-end encrypted payment flows, reduced transaction failures by 30%, and optimized performance cutting load times by 40%.",
  ],
  quote: 'Crafting reliable, scalable apps used by thousands of users daily.',
  chips: ['Flutter', 'Payments', 'Firebase', 'Clean Architecture', 'Kotlin / Swift'],
  stats: [
    { label: 'Years', value: '3+' },
    { label: 'Apps', value: '5' },
    { label: 'Gateways', value: '5+' },
  ],
};

export const skillsData = [
  { category: 'Mobile Development', skill: 'Flutter & Dart', value: 95 },
  { category: 'Architecture', skill: 'Clean Arch / BLoC', value: 92 },
  { category: 'Payments', skill: 'Payment Gateways', value: 88 },
  { category: 'Backend Integration', skill: 'Firebase / REST', value: 90 },
  { category: 'Native Extensions', skill: 'Kotlin / Swift Bridges', value: 85 },
  { category: 'Realtime Systems', skill: 'WebRTC / Socket.IO', value: 86 },
];

export const experienceData = [
  {
    title: 'Senior Flutter Developer',
    company: 'Pips Technologies · Kochi',
    period: 'Jun 2025 – Present',
    current: true,
    points: [
      'Architected GoldVault+ fintech app (digital gold, SIP, wallet) — 4.5★ rating.',
      'Integrated NomuPay, HyperPay & Network Pay with PCI encryption reducing failures by 30%.',
      'Built native bridges (Kotlin/Swift) + real-time pipelines reducing latency by 35%.',
    ],
  },
  {
    title: 'Senior Flutter Developer',
    company: 'Crudops · Ernakulam',
    period: 'Jun 2024 – Jun 2025',
    points: [
      'Developed RingMe with WebRTC calls, Socket.IO chat, QR/NFC pairing, and in-app purchases.',
      'Implemented Swift native features and managed full release cycle on App Store.',
    ],
  },
  {
    title: 'Flutter Developer',
    company: 'LucidPlus · Thrissur',
    period: 'Jan 2023 – Jun 2024',
    points: [
      'Built 3 cross-platform apps with Stripe/Razorpay and improved app load time by 40%.',
      'Established CI/CD pipelines for App Store & Play Store releases.',
    ],
  },
];

export const projectsData = [
  {
    name: 'GoldVault+',
    category: 'FinTech · Gold Investment',
    description:
      'Next-gen hybrid investment platform bridging traditional and digital gold with SIP plans, real-time WebSocket feeds, biometric authentication, and portfolio analytics.',
    tags: ['Flutter', 'NomuPay', 'Network Pay', 'HyperPay', 'WebSocket', 'BLoC'],
    image: '/e-wallet.png',
    links: [
      { label: 'Live Demo', href: '#' },
      { label: 'GitHub', href: '#' },
    ],
  },
  {
    name: 'RingMe',
    category: 'Communication · Real-Time',
    description:
      'Revolutionized communication with QR & NFC pairing, WebRTC P2P audio/video, Socket.IO group chats, and subscription monetization.',
    tags: ['Flutter', 'WebRTC', 'Socket.IO', 'QR / NFC', 'In-App Purchase', 'Swift'],
    image: '/appLogo.png',
    links: [
      { label: 'Live Demo', href: '#' },
      { label: 'GitHub', href: '#' },
    ],
  },
  {
    name: 'Urbanaana',
    category: 'Web Platform · Urban Commerce',
    description:
      'A modern full-stack urban commerce platform with responsive frontend and robust backend APIs for shopping and discovery.',
    tags: ['JavaScript', 'Python', 'React.js', 'REST API', 'Responsive UI'],
    image: '/lOGO-01-01.png',
    links: [
      { label: 'Live Demo', href: '#' },
      { label: 'GitHub', href: '#' },
    ],
  },
  {
    name: 'VILA',
    category: 'Enterprise · Billing Platform',
    description:
      'Smart billing and invoice management platform with automated invoicing, payment reminders, analytics, and Stripe/Razorpay integration.',
    tags: ['Flutter', 'Stripe', 'Razorpay', 'Firebase', 'Riverpod'],
    image: '/e-wallet.png',
    links: [
      { label: 'Live Demo', href: '#' },
      { label: 'GitHub', href: '#' },
    ],
  },
  {
    name: 'Zealosh',
    category: 'EdTech · Learning Platform',
    description:
      'Education app with live quizzes, score dashboards, video modules, and smart reminders to improve student outcomes.',
    tags: ['Flutter', 'Firebase', 'Riverpod', 'Video Player', 'Push Notifications'],
    image: '/zealosh.png',
    links: [
      { label: 'Live Demo', href: '#' },
      { label: 'GitHub', href: '#' },
    ],
  },
];

export const achievements = [
  { value: '30%', label: 'Lower payment failure rate' },
  { value: '40%', label: 'Faster app load time' },
  { value: '5', label: 'Production gateways integrated' },
  { value: 'B.Sc Psychology', label: 'MG University · Flutter Certified' },
];

export const techCloud = ['Flutter', 'Dart', 'Kotlin', 'Swift', 'Firebase', 'WebRTC', 'Stripe', 'NomuPay', 'Git'];

export const contactData = {
  email: 'farhathullahmn@gmail.com',
  phone: '+91 9188044462',
  socials: [
    { label: 'GitHub', href: 'https://github.com/Farhathullah-Najeeb' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/farhathullah-najeeb-954a0b238' },
    { label: 'Instagram', href: 'https://www.instagram.com/farhathullah_najeeb' },
  ],
};
