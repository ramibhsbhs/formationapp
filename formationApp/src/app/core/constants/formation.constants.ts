export const FORMATION_CATEGORIES = [
    'Technical Training',
    'Soft Skills',
    'Leadership',
    'Compliance',
    'Project Management',
    'Customer Service',
    'Sales Training',
    'Safety Training'
] as const;

export type FormationCategory = typeof FORMATION_CATEGORIES[number]; 