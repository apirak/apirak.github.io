export interface Project {
  title: string;
  description: string;
  link: string;
  image: string;
  color: 'blue' | 'gray' | 'green' | 'pink' | 'cream' | 'yellow';
}

export const figmaPlugins: Project[] = [
  {
    title: 'Visible Property #2',
    description: 'The second version of a Figma plugin designed to streamline your design system documentation updates. <a href="https://www.figma.com/community/plugin/1090193516013501637/visible-property-2">(1k Users)</a>',
    link: 'https://www.figma.com/community/plugin/1090193516013501637/visible-property-2',
    image: 'p_visible_property.png',
    color: 'blue'
  },
  {
    title: 'Visible Property #1',
    description: 'The initial iteration of a Figma plugin that simplifies annotation management within your designs. <a href="https://www.figma.com/community/plugin/821936177363215072/visible-property">(1.2k Users)</a>',
    link: 'https://www.figma.com/community/plugin/821936177363215072/visible-property',
    image: 'p_visible_property_1.png',
    color: 'gray'
  },
  {
    title: 'Swap Themes',
    description: 'A Figma plugin for testing color themes with style (without mode) switching. <a href="https://www.figma.com/community/plugin/1184882309602509318/swap-themes">(11k Users)</a>',
    link: 'https://www.figma.com/community/plugin/1184882309602509318/swap-themes',
    image: 'p_swap_theme.png',
    color: 'green'
  },
  {
    title: 'RSCSS (TH)',
    description: 'The way to use large scale SCSS without cracy (Translate from <a href="https://ricostacruz.com/rscss/">Ricstacruz</a>)',
    link: 'https://rscss.apirak.com/',
    image: 'p_rscss.png',
    color: 'pink'
  },
  {
    title: 'Sushi Design System',
    description: 'Backend components for the Stock Exchange of Thailand. Available on GitHub in <a href="https://github.com/sushiui/sushi?tab=readme-ov-file">HTML</a> and <a href="https://github.com/sushiui/sushi-react?tab=readme-ov-file">React</a>.',
    link: 'https://sushiui.github.io/sushi/',
    image: 'p_sushi.png',
    color: 'cream'
  },
  {
    title: 'Online Course',
    description: 'Collaborated with Skooldio to create comprehensive courses covering <a href="https://www.skooldio.com/courses/intro-to-ux-design">UX</a>, <a href="https://www.skooldio.com/courses/ui-fundamentals">UI</a>, <a href="https://www.skooldio.com/courses/information-architecture">IA</a>, and <a href="https://www.skooldio.com/courses/intro-to-web-accessibility">A11Y.</a>',
    link: 'https://www.skooldio.com/instructors/apirak-panatkool',
    image: 'p_online_course.png',
    color: 'blue'
  },
  {
    title: 'UX Thailand',
    description: 'Thailand\'s largest UX Design community. Join our <a href="https://www.facebook.com/groups/uxthailand">Facebook group</a> and explore resources on our <a href="https://uxth.co">Website</a>.',
    link: 'https://www.facebook.com/groups/uxthailand',
    image: 'p_uxth.png',
    color: 'blue'
  },
  {
    title: 'Design Mobile App Book',
    description: 'A guide for mobile app designers covering UX/UI essentials, usability, and project planning.',
    link: 'https://www.marketingoops.com/pr-news/book-design-mobile-app/',
    image: 'p_design_moble_app.png',
    color: 'gray'
  },
  {
    title: 'DealDroid',
    description: 'AI chatbot for online sellers. Handles customer inquiries 24/7 and drives sales. No coding required - train AI like train human admin.',
    link: 'https://dealdroid.net',
    image: 'p_dealdroid.png',
    color: 'green'
  },
  {
    title: 'NinjaLingo',
    description: 'Smart language learning app using spaced repetition and AI. Learn efficiently by practicing words at the perfect moment when memory fades.',
    link: 'https://ninjalingo.com/home',
    image: 'p_ninjalingo.png',
    color: 'pink'
  }
];

export const miniProjects: Project[] = [
  {
    title: 'URL to QR Code',
    description: 'A simple tool to generate QR codes from URLs with customizable foreground and background colors. Download as PNG or SVG.',
    link: 'https://happy.dealdroid.net/url2qrcode',
    image: 'mini_url2qrcode.jpeg',
    color: 'blue'
  },
  {
    title: 'Motion Art',
    description: 'A reflection on modern existence and identity through sharing. "I share, therefore I am."',
    link: 'https://chathead.dealdroid.net/',
    image: 'mini_chathead.jpeg',
    color: 'pink'
  },
  {
    title: 'Design Conversation Trainer',
    description: 'An interactive tool for learning conversation design through prompt engineering. Practice writing prompts to shape bot responses and understand why prompt skills are essential for conversation designers.',
    link: 'https://happy.dealdroid.net/design-conversation',
    image: 'mini_design_conversation.jpeg',
    color: 'green'
  }
];
