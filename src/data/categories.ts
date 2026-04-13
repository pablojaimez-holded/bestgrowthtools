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
    name: 'ERP',
    slug: 'erp',
    description: 'Planificación de recursos empresariales',
    icon: '🏢',
    gradient: 'gradient-erp',
    count: 8,
  },
  {
    name: 'Facturación',
    slug: 'facturacion',
    description: 'Software de facturación y contabilidad',
    icon: '🧾',
    gradient: 'gradient-facturacion',
    count: 10,
  },
  {
    name: 'Marketing',
    slug: 'marketing',
    description: 'Herramientas de marketing digital',
    icon: '📣',
    gradient: 'gradient-marketing',
    count: 15,
  },
  {
    name: 'RRHH',
    slug: 'rrhh',
    description: 'Recursos humanos y nóminas',
    icon: '🧑‍💼',
    gradient: 'gradient-rrhh',
    count: 7,
  },
  {
    name: 'Productividad',
    slug: 'productividad',
    description: 'Gestión de proyectos y tareas',
    icon: '⚡',
    gradient: 'gradient-productividad',
    count: 11,
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
    name: 'Soporte',
    slug: 'soporte',
    description: 'Atención al cliente y helpdesk',
    icon: '🎧',
    gradient: 'gradient-soporte',
    count: 6,
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find(c => c.slug === slug);
}
