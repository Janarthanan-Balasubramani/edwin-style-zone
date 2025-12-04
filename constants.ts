import { ServiceCategory } from './types';

export const SERVICES_DATA: ServiceCategory[] = [
  {
    category: "Hair Styling",
    items: [
      { name: "Premium Haircut", price: "₹800", description: "Precision cut, wash, and style." },
      { name: "Beard Sculpting", price: "₹400", description: "Hot towel shave and trim." },
      { name: "Hair Coloring", price: "₹2500+", description: "Global color, highlights, or balayage." },
    ]
  },
  {
    category: "Wellness",
    items: [
      { name: "Relaxation Massage", price: "₹500", description: "30-min head and shoulder stress relief." },
      { name: "Deep Tissue Massage", price: "₹1200", description: "60-min full body therapy." },
    ]
  },
  {
    category: "Special Occasions",
    items: [
      { name: "Bridal Makeup", price: "₹5000", description: "Complete bridal package with trial." },
      { name: "Groom's Package", price: "₹3500", description: "Haircut, facial, and styling." },
    ]
  }
];

export const GALLERY_IMAGES = [
  "https://picsum.photos/600/800?random=1",
  "https://picsum.photos/600/800?random=2",
  "https://picsum.photos/800/600?random=3",
  "https://picsum.photos/600/800?random=4",
  "https://picsum.photos/800/600?random=5",
  "https://picsum.photos/600/800?random=6",
];
