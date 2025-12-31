
import { Feature, Testimonial, Service } from './types';

export const COLORS = {
  primary: '#004d5e',
  secondary: '#4ecdc4',
  accent: '#ccfbf1',
};

export const BRANCHES = [
  {
    id: 'b1',
    name: 'Nelamangala Branch',
    address: 'Near Town Hall, Nelamangala, Bangalore - 562123',
    plusCode: '3CW2+RQ Bengaluru, Karnataka',
    phone: '+91 95359 67333',
    mapUrl: 'https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=3CW2%2BRQ+Bengaluru+Karnataka&zoom=17',
    directionsUrl: 'https://maps.app.goo.gl/f2fxTY4sXgArxKKN6?g_st=iw'
  },
  {
    id: 'b2',
    name: 'Bagalagunte Branch',
    address: 'Main Road, Bagalagunte, Dasarahalli, Bangalore - 560073',
    plusCode: '3G54+3Q Bengaluru, Karnataka',
    phone: '+91 95359 67333',
    mapUrl: 'https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=3G54%2B3Q+Bengaluru+Karnataka&zoom=17',
    directionsUrl: 'https://maps.app.goo.gl/kxUWHT9S21Bt9MV5A?g_st=iw'
  }
];

export const FEATURES: Feature[] = [
  {
    id: '1',
    title: 'Trusted Legacy',
    description: 'Serving Nelamangala and Bagalagunte for over 35 years with genuine healthcare.',
    icon: 'verified',
    color: 'bg-teal-100 text-teal-700',
  },
  {
    id: '2',
    title: 'Instant Delivery',
    description: 'Get your medicines at your doorstep within 30 minutes in our local zones.',
    icon: 'delivery_dining',
    color: 'bg-emerald-100 text-emerald-700',
  },
  {
    id: '3',
    title: 'Expert Support',
    description: 'Direct access to experienced pharmacists via WhatsApp for your queries.',
    icon: 'chat',
    color: 'bg-cyan-100 text-cyan-700',
  },
];

export const SERVICES: Service[] = [
  {
    id: 's1',
    title: 'WhatsApp Ordering',
    description: 'Just send a photo of your list or prescription on WhatsApp to order.',
    link: 'https://wa.me/919535967333',
    icon: 'whatsapp',
  },
  {
    id: 's2',
    title: 'Download Our App',
    description: 'Get our mobile app for easy ordering and exclusive offers.',
    link: '#/download-app',
    icon: 'smartphone',
  },
  {
    id: 's3',
    title: 'Home Delivery',
    description: 'Free home delivery for orders above ₹500 in Nelamangala & Dasarahalli.',
    link: '#/',
    icon: 'two_wheeler',
  },
  {
    id: 's4',
    title: 'Find Our Stores',
    description: 'Visit our branches in Nelamangala and Bagalagunte.',
    link: '#/store-locator',
    icon: 'storefront',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Suresh Gowda',
    role: 'Nelamangala Local',
    content: "The best pharmacy in Nelamangala. They are very reliable and the WhatsApp service is incredibly fast.",
    rating: 5,
    image: 'https://picsum.photos/seed/suresh/100/100',
  },
  {
    id: 't2',
    name: 'Meena Reddy',
    role: 'Dasarahalli Resident',
    content: "Madhu Medicals Bagalagunte is my go-to for all family medicines. Their pharmacists are very knowledgeable.",
    rating: 5,
    image: 'https://picsum.photos/seed/meena/100/100',
  },
];

export const PRODUCTS = [
  { id: 1, name: 'Vitamin C 1000mg', category: 'Supplements', price: 450, image: 'https://images.unsplash.com/photo-1616671285410-672906338e55?auto=format&fit=crop&q=80&w=300' },
  { id: 2, name: 'First Aid Kit Pro', category: 'Equipment', price: 1200, image: 'https://images.unsplash.com/photo-1603398938378-e54eab446f91?auto=format&fit=crop&q=80&w=300' },
  { id: 3, name: 'Digital Thermometer', category: 'Electronics', price: 299, image: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&q=80&w=300' },
  { id: 4, name: 'Omega-3 Capsules', category: 'Supplements', price: 850, image: 'https://images.unsplash.com/photo-1550572017-ed200f545dec?auto=format&fit=crop&q=80&w=300' },
  { id: 5, name: 'Hand Sanitizer 500ml', category: 'Hygiene', price: 150, image: 'https://images.unsplash.com/photo-1584515933487-759f2429f654?auto=format&fit=crop&q=80&w=300' },
  { id: 6, name: 'Face Mask N95', category: 'Hygiene', price: 45, image: 'https://images.unsplash.com/photo-1586942593568-29361efcd571?auto=format&fit=crop&q=80&w=300' },
];
