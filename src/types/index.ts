export interface User {
  id: number;
  email: string;
  name: string;
}

export interface Baby {
  id: number;
  userId: number;
  name: string;
  birthDate: string;
  gender?: string;
  createdAt: string;
  ageMonths?: number;
}

export interface Feeding {
  id: number;
  babyId: number;
  type: 'breast' | 'formula' | 'mixed';
  amountMl?: number;
  durationMin?: number;
  fedAt: string;
  createdAt: string;
}

export interface Meal {
  id: number;
  babyId: number;
  menu: string;
  amountG?: number;
  reaction?: 'good' | 'normal' | 'bad';
  memo?: string;
  eatenAt: string;
  createdAt: string;
}

export interface FeedingStats {
  date: string;
  totalCount: number;
  totalAmountMl: number;
  totalDurationMin: number;
  byType: Record<string, number>;
}

export interface MealStats {
  date: string;
  totalCount: number;
  totalAmountG: number;
  byReaction: Record<string, number>;
  menus: string[];
}

export interface FoodGuide {
  ageMonths: number;
  allowed: string[];
  notAllowed: string[];
  notes: string;
}