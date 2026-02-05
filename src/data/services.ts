/**
 * Services Data - Single source of truth for all services
 * Used by both the homepage preview and the full services page
 */

export interface Service {
    title: string;
    description: string;
    category: string;
    icon: string;
    slug?: string;
}

export const services: Service[] = [
    {
        title: "Web Applications",
        description:
            "Full-stack web platforms built with modern frameworks. Responsive, fast, and scalable solutions for your business needs.",
        category: "Development",
        icon: "code",
        slug: "web-applications",
    },
    {
        title: "Mobile Apps",
        description:
            "Native and cross-platform mobile applications for iOS and Android. Seamless user experiences on any device.",
        category: "Mobile",
        icon: "mobile",
        slug: "mobile-apps",
    },
    {
        title: "API Development",
        description:
            "Robust RESTful and GraphQL APIs. Secure, documented, and built for high performance and scalability.",
        category: "Backend",
        icon: "api",
        slug: "api-development",
    },
    {
        title: "AI Integration",
        description:
            "Custom AI-powered solutions including chatbots, automation, and machine learning integrations.",
        category: "AI / ML",
        icon: "ai",
        slug: "ai-integration",
    },
    {
        title: "Automation Tools",
        description:
            "Streamline your workflows with custom automation scripts, bots, and integration pipelines.",
        category: "Automation",
        icon: "automation",
        slug: "automation-tools",
    },
    {
        title: "Cloud Solutions",
        description:
            "Cloud architecture, deployment, and DevOps services. AWS, GCP, and Azure expertise.",
        category: "Infrastructure",
        icon: "cloud",
        slug: "cloud-solutions",
    },
];

// Maximum services to show on homepage
export const MAX_HOMEPAGE_SERVICES = 6;
