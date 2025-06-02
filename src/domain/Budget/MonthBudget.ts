export interface ExpenseItem {
  name: string;
  amount: number;
}

export interface ExpenseSubcategory {
  name: string;
  items: ExpenseItem[];
}

export interface ExpenseCategory {
  name: string;
  suggestedPercent: number;
  maxAmount: number;
  spentPercent: number;
  spentAmount: number;
  color: string;
  subcategories: ExpenseSubcategory[];
}

export interface MonthBudget {
  id: number;
  name: string;
  shortName: string;
  income: number;
  expensesTotal: number;
  categories: ExpenseCategory[];
}

export const monthNames = [
  { id: 1, name: 'Enero', shortName: 'Ene' },
  { id: 2, name: 'Febrero', shortName: 'Feb' },
  { id: 3, name: 'Marzo', shortName: 'Mar' },
  { id: 4, name: 'Abril', shortName: 'Abr' },
  { id: 5, name: 'Mayo', shortName: 'May' },
  { id: 6, name: 'Junio', shortName: 'Jun' },
  { id: 7, name: 'Julio', shortName: 'Jul' },
  { id: 8, name: 'Agosto', shortName: 'Ago' },
  { id: 9, name: 'Septiembre', shortName: 'Sep' },
  { id: 10, name: 'Octubre', shortName: 'Oct' },
  { id: 11, name: 'Noviembre', shortName: 'Nov' },
  { id: 12, name: 'Diciembre', shortName: 'Dic' },
];

export const budgets: MonthBudget[] = monthNames.map((month) => ({
  ...month,
  income: 1000,
  expensesTotal: 998,
  categories: [
    {
      name: 'OBLIGACIONES',
      suggestedPercent: 50,
      maxAmount: 500,
      spentPercent: 68,
      spentAmount: 340,
      color: '#B0E57C',
      subcategories: [
        {
          name: 'Tarjetas crédito',
          items: [
            { name: 'Master', amount: 8 },
            { name: 'Visa', amount: 10 },
          ],
        },
        {
          name: 'Hogar',
          items: [
            { name: 'Alimentación', amount: 100 },
            { name: 'Servicios', amount: 30 },
            { name: 'Arriendo', amount: 200 },
          ],
        },
        {
          name: 'Transporte',
          items: [
            { name: 'Transporte público', amount: 50 },
          ],
        },
        {
          name: 'Prestaciones',
          items: [
            { name: 'Prestaciones sociales', amount: 100 },
          ],
        },
        {
          name: 'Otros',
          items: [
            { name: 'Varios', amount: 32 },
          ],
        },
      ],
    },
    {
      name: 'DIVERSIÓN',
      suggestedPercent: 10,
      maxAmount: 100,
      spentPercent: 1,
      spentAmount: 10,
      color: '#F7B7A3',
      subcategories: [
        {
          name: 'Entretenimiento',
          items: [
            { name: 'Cine', amount: 5 },
            { name: 'Restaurantes', amount: 5 },
          ],
        },
      ],
    },
    {
      name: 'AHORRO',
      suggestedPercent: 10,
      maxAmount: 100,
      spentPercent: 0,
      spentAmount: 0,
      color: '#A3C4F7',
      subcategories: [],
    },
    {
      name: 'FORMACIÓN',
      suggestedPercent: 10,
      maxAmount: 100,
      spentPercent: 1,
      spentAmount: 10,
      color: '#F7E6A3',
      subcategories: [
        {
          name: 'Cursos',
          items: [
            { name: 'Curso online', amount: 10 },
          ],
        },
      ],
    },
    {
      name: 'INVERSIONES',
      suggestedPercent: 10,
      maxAmount: 100,
      spentPercent: 25,
      spentAmount: 25,
      color: '#A3F7B7',
      subcategories: [
        {
          name: 'Acciones',
          items: [
            { name: 'Bolsa', amount: 25 },
          ],
        },
      ],
    },
    {
      name: 'DONACIONES',
      suggestedPercent: 10,
      maxAmount: 100,
      spentPercent: 1,
      spentAmount: 1,
      color: '#F7A3C4',
      subcategories: [
        {
          name: 'ONG',
          items: [
            { name: 'Cruz Roja', amount: 1 },
          ],
        },
      ],
    },
  ],
}));
