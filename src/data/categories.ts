export interface Category {
  name: string;
  slug: string;
  description: string;
  icon: string;
  gradient: string;
  count: number;
}

export const categories: Category[] = [
  {
    name: 'CRM',
    slug: 'crm',
    description: 'Gestión de relaciones con clientes',
    icon: '👥',
    gradient: 'gradient-crm',
    count: 12,
  },
  {
    name: 'Email Marketing',
    slug: 'email-marketing',
    description: 'Automatización y campañas de email',
    icon: '📧',
    gradient: 'gradient-email',
    count: 12,
  },
  {
    name: 'E-commerce',
    slug: 'ecommerce',
    description: 'Plataformas de comercio electrónico',
    icon: '🛒',
    gradient: 'gradient-ecommerce',
    count: 13,
  },
  {
    name: 'Productividad',
    slug: 'productividad',
    description: 'Gestión de proyectos y tareas',
    icon: '⚡',
    gradient: 'gradient-productividad',
    count: 10,
  },
  {
    name: 'Analytics',
    slug: 'analytics',
    description: 'Analítica y business intelligence',
    icon: '📊',
    gradient: 'gradient-analytics',
    count: 10,
  },
  {
    name: 'Soporte',
    slug: 'soporte',
    description: 'Atención al cliente y helpdesk',
    icon: '🎧',
    gradient: 'gradient-soporte',
    count: 10,
  },
  {
    name: 'RRHH',
    slug: 'rrhh',
    description: 'Recursos humanos y gestión de personal',
    icon: '🧑‍💼',
    gradient: 'gradient-rrhh',
    count: 10,
  },
  {
    name: 'Web Builder',
    slug: 'web-builder',
    description: 'Creación de sitios web y landing pages',
    icon: '🌐',
    gradient: 'gradient-web',
    count: 8,
  },
  {
    name: 'Comunicación',
    slug: 'comunicacion',
    description: 'Telefonía y comunicación empresarial',
    icon: '📞',
    gradient: 'gradient-comm',
    count: 8,
  },
  {
    name: 'Ciberseguridad',
    slug: 'ciberseguridad',
    description: 'Seguridad informática y protección de datos',
    icon: '🔒',
    gradient: 'gradient-security',
    count: 10,
  },
  {
    name: 'IA & Automatización',
    slug: 'ia-automatizacion',
    description: 'Herramientas de inteligencia artificial',
    icon: '🤖',
    gradient: 'gradient-ai',
    count: 10,
  },
  {
    name: 'SEO & Contenido',
    slug: 'seo-contenido',
    description: 'Optimización para buscadores y contenido',
    icon: '🔍',
    gradient: 'gradient-seo',
    count: 8,
  },
  {
    name: 'Social Media',
    slug: 'social-media',
    description: 'Gestión de redes sociales',
    icon: '📱',
    gradient: 'gradient-social',
    count: 8,
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find(c => c.slug === slug);
}
