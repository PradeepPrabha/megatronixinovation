export interface Service {
  slug: string; title: string; icon: string; short: string; heroHeading: string; intro: string;
  cardFeatures: string[]; features: string[]; benefits: string[]; technologies: string[];
  faqs: { q: string; a: string }[]; enquiryValue: string;
}
export interface Project {
  slug: string; title: string; category: string; description: string; details: string; technologies: string[]; image: string; features: string[];
}
export interface Testimonial { name: string; role: string; review: string; rating: number }
export interface NavItem { label: string; to: string; children?: { label: string; to: string; icon?: string }[] }
