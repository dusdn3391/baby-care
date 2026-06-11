import { Meal } from '@/types';
import MealCard from './MealCard';

interface MealListProps {
  meals: Meal[];
}

export default function MealList({ meals }: MealListProps) {
  if (meals.length === 0) {
    return (
      <div className="text-center py-8 text-gray-400">
        <p className="text-3xl mb-2">🥕</p>
        <p>오늘 이유식 기록이 없어요</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {meals.map((meal) => (
        <MealCard key={meal.id} meal={meal} />
      ))}
    </div>
  );
}