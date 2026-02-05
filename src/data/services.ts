/**
 * Services Data - Single source of truth for all services
 * Used by both the homepage preview and the full services page
 */
import type { ImageMetadata } from 'astro';

// Import service images for Astro optimization
import invoxImage from '../assets/services/invox.png';
import pdfImage from '../assets/services/pdf.png';

export interface Service {
    title: string;
    description: string;
    category: string;
    image: ImageMetadata;
    link?: string;
    slug?: string;
}

export const services: Service[] = [
    {
        title: "Invox",
        description:
            "A mobile invoicing app for freelancers and small businesses. Create professional invoices, manage clients, and keep your data backed up in the cloud securely.",
        category: "Mobile App",
        image: invoxImage,
        link: "https://youssef.tn/invox/",
        slug: "invox",
    },
    {
        title: "PDF Tools",
        description:
            "Free online PDF tools to convert, compress, and edit your PDF files. Convert PDFs to images, extract text, merge documents, and more — fast, secure, and completely free.",
        category: "Web Platform",
        image: pdfImage,
        link: "https://pdf-tools.youssef.tn/",
        slug: "pdf-tools",
    },
];

// Maximum services to show on homepage
export const MAX_HOMEPAGE_SERVICES = 6;
