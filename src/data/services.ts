import { Service } from '../types'

const commonBenefits = [
  'Tailored to your business needs',
  'Quality-focused delivery',
  'Clear communication at every stage',
  'Support after launch',
]

export const services: Service[] = [
  {
    slug: 'erp-development',
    title: 'ERP Development',
    icon: 'Layers',
    enquiryValue: 'ERP Development',
    short:
      'Customized ERP systems that automate operations, centralize business data and improve productivity across departments.',
    heroHeading: 'Smart ERP Solutions for Smarter Business Management.',
    intro:
      'We design ERP systems around the way your organization actually works. By connecting inventory, sales, purchasing, HR, finance and customer data in one platform, we help reduce manual work, improve accuracy and give management better visibility.',
    cardFeatures: [
      'Inventory Management',
      'HR and Payroll',
      'Finance and Accounting',
      'Sales and Purchase',
      'CRM',
      'Reports and Analytics',
    ],
    features: [
      'Inventory and Warehouse Management',
      'Sales and Quotation Management',
      'Purchase and Supplier Management',
      'HR, Attendance and Payroll',
      'Finance, Billing and Accounting',
      'Customer Relationship Management',
      'Role-Based User Access',
      'Reports, Dashboards and Analytics',
      'Multi-Branch and Multi-User Support',
      'Data Import and Migration',
    ],
    benefits: [
      'Automate repetitive manual work',
      'One source of truth for business data',
      'Better visibility through reports',
      'Reduce errors in billing, stock and payroll',
      'Improve coordination between departments',
      ...commonBenefits.slice(0, 1),
    ],
    technologies: ['React', 'TypeScript', 'PHP', 'Laravel', 'MySQL', 'Python'],
    faqs: [
      {
        q: 'Can the ERP be customized for our industry?',
        a: 'Yes. We begin with a requirement analysis, understand your workflows and design modules around your industry, team structure and reporting needs.',
      },
      {
        q: 'Can we start with only a few modules?',
        a: 'Yes. You can start with high-priority modules such as inventory, billing or HR, then add sales, purchasing, CRM and analytics in later phases.',
      },
      {
        q: 'Can existing data be migrated into the new ERP?',
        a: 'Yes. We can review your existing spreadsheets or software data and migrate the required records into the new system.',
      },
      {
        q: 'Do you provide user training?',
        a: 'Yes. We can provide training sessions and documentation so your team can use the system confidently after launch.',
      },
      {
        q: 'Do you provide support after delivery?',
        a: 'Support and maintenance options can be discussed as part of your project scope.',
      },
    ],
  },
  {
    slug: 'mobile-app-development',
    title: 'Mobile App Development',
    icon: 'Smartphone',
    enquiryValue: 'Mobile App Development',
    short:
      'Build powerful Android and iOS applications with modern interfaces, smooth performance and scalable backend integration.',
    heroHeading: 'Powerful Mobile Applications for Your Business.',
    intro:
      'From concept and interface design to API integration, testing and maintenance, we build mobile apps that are easy to use, reliable and ready to grow with your business.',
    cardFeatures: [
      'Android Applications',
      'iOS Applications',
      'Cross-Platform Apps',
      'UI/UX Design',
      'API Integration',
      'App Maintenance',
    ],
    features: [
      'Android App Development',
      'iOS App Development',
      'Cross-Platform Development with Flutter',
      'UI/UX and App Prototyping',
      'REST API and Third-Party Integration',
      'Payment Gateway Integration',
      'Push Notifications',
      'Authentication and Secure Login',
      'Offline Support and Data Sync',
      'App Testing and Maintenance',
    ],
    benefits: [
      'Reach customers directly on their phones',
      'Smooth, intuitive interfaces',
      'Single codebase option with Flutter',
      'Faster updates across Android and iOS',
      'Ongoing maintenance and improvement options',
    ],
    technologies: ['Flutter', 'Java', 'Figma', 'JavaScript', 'MySQL'],
    faqs: [
      {
        q: 'Do you build for both Android and iOS?',
        a: 'Yes. We can build native or cross-platform apps depending on your requirements, timeline and budget.',
      },
      {
        q: 'Can the app connect to our existing systems?',
        a: 'Yes. We can integrate your app with existing websites, ERPs, CRMs and third-party services through APIs.',
      },
      {
        q: 'Can the app include payments?',
        a: 'Yes. Payment gateway integration can be included for e-commerce, bookings, subscriptions or in-app purchases.',
      },
      {
        q: 'Will you help publish the app?',
        a: 'Publishing guidance for the Google Play Store and Apple App Store can be included in the project scope.',
      },
    ],
  },
  {
    slug: 'desktop-application-development',
    title: 'Desktop Application Development',
    icon: 'Monitor',
    enquiryValue: 'Desktop Application',
    short:
      'Develop reliable desktop applications that simplify billing, inventory, reporting and daily business operations.',
    heroHeading: 'Reliable Desktop Software for Better Business Operations.',
    intro:
      'We build dependable desktop software for billing, inventory, customer management and daily operations. Applications are designed to be fast, stable and simple for your team to use, with secure data storage and optional offline capability.',
    cardFeatures: [
      'Business Applications',
      'Billing Software',
      'Inventory Applications',
      'Database Integration',
      'Custom Software',
    ],
    features: [
      'Billing and Invoice Management',
      'Inventory and Stock Management',
      'Customer and Supplier Management',
      'Sales and Purchase Tracking',
      'Database Design and Integration',
      'Data Backup and Recovery',
      'User Roles and Permissions',
      'Reports and Printing',
      'Offline-First Functionality',
      'Custom Desktop Software',
    ],
    benefits: [
      'Fast, stable day-to-day performance',
      'Designed around your workflow',
      'Reliable local or networked data storage',
      'Simple for staff to learn and use',
      'Can replace manual spreadsheets and paperwork',
    ],
    technologies: ['Java', 'Python', 'MySQL', 'JavaScript'],
    faqs: [
      {
        q: 'Can the software work offline?',
        a: 'Yes. Desktop applications can be designed to work offline and synchronize data when an internet connection is available.',
      },
      {
        q: 'Can you replace our spreadsheets?',
        a: 'Yes. We can convert spreadsheet-based processes into structured software with validation, reporting and user access controls.',
      },
      {
        q: 'Can data be migrated?',
        a: 'Yes. Existing data can be reviewed, cleaned where required and migrated into the new application.',
      },
      {
        q: 'Can multiple users use the same application?',
        a: 'Yes. We can build multi-user desktop systems with role-based access and shared database support.',
      },
    ],
  },
  {
    slug: 'digital-marketing',
    title: 'Digital Marketing',
    icon: 'Megaphone',
    enquiryValue: 'Digital Marketing',
    short:
      'Grow your online presence through strategic SEO, social media, paid campaigns, content and performance tracking.',
    heroHeading: 'Grow Your Brand. Reach Your Audience.',
    intro:
      'Strategy-led digital marketing that helps the right audience find your business. We combine search visibility, social media, paid advertising and content to build awareness, generate enquiries and measure results.',
    cardFeatures: [
      'SEO',
      'Social Media Marketing',
      'Google Ads',
      'Content Marketing',
      'Campaign Analytics',
    ],
    features: [
      'Search Engine Optimization',
      'Local SEO and Google Business Profile',
      'Social Media Strategy and Management',
      'Google Ads and Paid Campaigns',
      'Content Planning and Creation',
      'Landing Page Optimization',
      'Keyword Research',
      'Campaign Tracking and Analytics',
      'Monthly Performance Reports',
    ],
    benefits: [
      'Improve online visibility',
      'Reach targeted audiences',
      'Generate qualified enquiries and leads',
      'Measure what works and improve campaigns',
      'Maintain consistent brand messaging',
    ],
    technologies: ['Google Ads', 'Analytics', 'Figma', 'SEO Tools'],
    faqs: [
      {
        q: 'How soon will we see results?',
        a: 'Timelines vary by channel and goals. Paid campaigns can start producing results faster, while SEO typically builds gradually over time.',
      },
      {
        q: 'Do you create the content too?',
        a: 'Yes. Content, creatives and campaign assets can be planned and produced as part of the marketing service.',
      },
      {
        q: 'Will we get reports?',
        a: 'Yes. Campaign analytics and regular reporting can be included so you can track reach, engagement, leads and spend.',
      },
      {
        q: 'Can you manage our social media pages?',
        a: 'Yes. We can plan, design and schedule posts, respond to basic engagement needs and monitor performance.',
      },
    ],
  },
  {
    slug: 'web-design',
    title: 'Web Design',
    icon: 'PenTool',
    enquiryValue: 'Web Design',
    short:
      'Create visually attractive, responsive and user-friendly website experiences that reflect your brand.',
    heroHeading: 'Designing Digital Experiences That Inspire.',
    intro:
      'Thoughtful UI/UX design that balances brand personality with usability. From first wireframe to polished responsive layouts, we design websites that look professional and guide visitors toward action.',
    cardFeatures: [
      'UI/UX Design',
      'Landing Pages',
      'Corporate Websites',
      'Website Redesign',
      'Wireframes and Prototypes',
    ],
    features: [
      'UI/UX Research and Wireframes',
      'Interactive Prototypes',
      'Landing Page Design',
      'Corporate Website Design',
      'Dashboard and Admin Panel Design',
      'E-commerce UI Design',
      'Responsive Mobile and Tablet Design',
      'Design System and Style Guide',
      'Website Redesign',
    ],
    benefits: [
      'Clear, modern visual identity',
      'Easy navigation for visitors',
      'Works on every screen size',
      'Design ready for development',
      'Better first impressions and user engagement',
    ],
    technologies: ['Figma', 'HTML5', 'CSS3', 'React'],
    faqs: [
      {
        q: 'Do you provide prototypes before development?',
        a: 'Yes. Wireframes and prototypes help you review the structure and design before development starts.',
      },
      {
        q: 'Can you redesign an existing website?',
        a: 'Yes. We can refresh the design while preserving your content, brand identity and important SEO elements.',
      },
      {
        q: 'Is the design responsive?',
        a: 'Yes. All designs are created to work across mobile, tablet and desktop.',
      },
      {
        q: 'Do you provide design files?',
        a: 'Yes. Final design files and assets can be delivered for development or future updates.',
      },
    ],
  },
  {
    slug: 'web-development',
    title: 'Web Development',
    icon: 'Code2',
    enquiryValue: 'Web Development',
    short:
      'Build scalable, secure and high-performance websites and web applications with clean, maintainable code.',
    heroHeading: 'Build Powerful Websites for the Digital World.',
    intro:
      'Modern websites and web applications built with clean code, sensible architecture and attention to performance, security and future growth. We develop everything from corporate websites to custom business platforms.',
    cardFeatures: [
      'Frontend Development',
      'Backend Development',
      'API Integration',
      'Database Integration',
      'Custom Web Applications',
    ],
    features: [
      'Corporate and Business Websites',
      'Custom Web Applications',
      'Frontend Development',
      'Backend Development',
      'Database Design and Integration',
      'REST API Development',
      'Third-Party API Integration',
      'Authentication and User Management',
      'Admin Dashboards',
      'Performance and Security Best Practices',
      'Website Maintenance and Support',
    ],
    benefits: [
      'Fast, responsive user experiences',
      'Maintainable and scalable code',
      'Secure-by-design development practices',
      'Ready for future features and integrations',
      'Easy content and system management',
    ],
    technologies: [
      'React',
      'TypeScript',
      'JavaScript',
      'PHP',
      'Laravel',
      'Python',
      'MySQL',
      'HTML5',
      'CSS3',
    ],
    faqs: [
      {
        q: 'Which technologies do you use?',
        a: 'We commonly use React, TypeScript, PHP/Laravel and Python with MySQL, choosing the stack that best suits each project.',
      },
      {
        q: 'Can you add features to an existing site?',
        a: 'Yes. We can extend, improve or rebuild existing websites and web applications.',
      },
      {
        q: 'Will the site be easy to update?',
        a: 'Yes. We can structure the site with an admin panel or CMS so content is straightforward to maintain.',
      },
      {
        q: 'Do you provide hosting and deployment support?',
        a: 'Yes. Deployment, hosting setup and ongoing maintenance options can be included in the project scope.',
      },
    ],
  },
  {
    slug: 'ecommerce-development',
    title: 'E-commerce Development',
    icon: 'ShoppingCart',
    enquiryValue: 'E-commerce',
    short:
      'Launch your online store with product management, secure checkout, payments, orders and customer dashboards.',
    heroHeading: 'Your Business. Your Online Store. Your Growth.',
    intro:
      'Complete online stores with product catalogues, carts, checkout and order management. We build e-commerce platforms that make buying simple for customers and selling easier for your team.',
    cardFeatures: [
      'Product Catalogue',
      'Shopping Cart',
      'Secure Checkout',
      'Payment Gateway',
      'Order Management',
    ],
    features: [
      'Product and Category Management',
      'Shopping Cart and Wishlist',
      'Secure Checkout',
      'Payment Gateway Integration',
      'Order and Shipping Management',
      'Discount Coupons and Offers',
      'Customer Accounts and Dashboards',
      'Admin Dashboard',
      'Inventory and Stock Tracking',
      'Sales Reports and Analytics',
      'Mobile-Friendly Storefront',
    ],
    benefits: [
      'Sell online around the clock',
      'Easy product and order management',
      'Smooth checkout experience',
      'Mobile-friendly storefront',
      'Better control over stock, pricing and promotions',
    ],
    technologies: ['React', 'TypeScript', 'PHP', 'Laravel', 'MySQL'],
    faqs: [
      {
        q: 'Can you integrate payment gateways?',
        a: 'Yes. Payment gateway integration is part of the e-commerce scope and can support online payments for your store.',
      },
      {
        q: 'Can I manage products myself?',
        a: 'Yes. An admin dashboard lets you manage products, categories, orders, customers and offers.',
      },
      {
        q: 'Will it work on mobile?',
        a: 'Yes. Storefronts are designed mobile-first so customers can shop easily from phones and tablets.',
      },
      {
        q: 'Can you migrate products from an existing store?',
        a: 'Yes. Product, customer and order data can be reviewed and migrated where technically possible.',
      },
    ],
  },
  {
    slug: 'branding-solutions',
    title: 'Branding Solutions',
    icon: 'Palette',
    enquiryValue: 'Branding',
    short:
      'Create a professional and consistent business identity across logos, print materials and digital creatives.',
    heroHeading: 'Make Your Brand Unforgettable.',
    intro:
      'A strong brand helps customers recognize and trust your business. We create consistent visual identities across every touchpoint, from your logo and colour palette to brochures, posters and social media creatives.',
    cardFeatures: [
      'Logo Design',
      'Brand Identity',
      'Business Cards',
      'Brochure Design',
      'Poster Design',
      'Social Media Creatives',
    ],
    features: [
      'Logo Design',
      'Brand Identity Development',
      'Colour Palette and Typography',
      'Business Card Design',
      'Letterhead and Stationery Design',
      'Brochure and Catalogue Design',
      'Poster and Flyer Design',
      'Social Media Creative Design',
      'Brand Guidelines',
      'Print-Ready and Digital Files',
    ],
    benefits: [
      'Memorable and consistent identity',
      'Professional first impressions',
      'Print and digital ready files',
      'Clear guidelines for future use',
      'Stronger recognition across channels',
    ],
    technologies: ['Figma', 'Illustrator', 'Photoshop'],
    faqs: [
      {
        q: 'Do you design logos from scratch?',
        a: 'Yes. We create logos and identities based on your business, audience, values and preferred style.',
      },
      {
        q: 'Will I get print-ready files?',
        a: 'Yes. Print and digital formats can be delivered with the final designs.',
      },
      {
        q: 'Can you create brand guidelines?',
        a: 'Yes. Guidelines can document your colours, typography, logo usage and visual style.',
      },
      {
        q: 'Can you design ongoing social media creatives?',
        a: 'Yes. We can create regular social media designs as a separate or ongoing service.',
      },
    ],
  },
]

export const getService = (slug?: string) => services.find((s) => s.slug === slug)