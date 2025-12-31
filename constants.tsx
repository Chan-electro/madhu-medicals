
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
    phone: '+91 98765 43211',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m12!1m12!1m3!1d3885.123456789!2d77.39!3d13.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zTmVsYW1hbmdhbGE!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin'
  },
  {
    id: 'b2',
    name: 'Bagalagunte Branch',
    address: 'Main Road, Bagalagunte, Dasarahalli, Bangalore - 560073',
    phone: '+91 98765 43212',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m12!1m12!1m3!1d3886.9158!2d77.5!3d13.04!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zQmFnYWxhZ3VudGU!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin'
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
    link: 'https://wa.me/919876543210',
    icon: 'whatsapp',
  },
  {
    id: 's2',
    title: 'OTC Essentials',
    description: 'Wide range of daily health essentials and wellness products.',
    link: '#/products',
    icon: 'medication',
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
    title: 'AI Health Chat',
    description: 'Ask our smart assistant for wellness tips and medication info.',
    link: '#/health-assistant',
    icon: 'smart_toy',
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
