import { useState, useEffect } from 'react';
import { createMeal, getTodayMeals, getMealStats } from '@/lib/api';
import { Meal, MealStats } from '@/types';

interface CreateMealInput {
  babyId: number;
  menu: string;
  amountG?: number;
  reaction?: string;
  memo?: string;
  eatenAt: string;
}

export function useMeal(babyId: number) {
  const [meals, setMeals] = useState<Meal[]>([]);
  const [stats, setStats] = useState<MealStats | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    if (!babyId) return;
    try {
      const [mealsRes, statsRes] = await Promise.all([
        getTodayMeals(babyId),
        getMealStats(babyId),
      ]);
      setMeals(mealsRes.data);
      setStats(statsRes.data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchData(); }, [babyId]);

  const addMeal = async (data: CreateMealInput) => {
    const res = await createMeal(data);
    await fetchData();
    return res.data;
  };

  return { meals, stats, loading, addMeal, refetch: fetchData };
}