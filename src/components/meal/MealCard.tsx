import { Meal } from '@/types';

const reactionEmoji: Record<string, string> = {
  good: '😋',
  normal: '😐',
  bad: '😢',
};

interface MealCardProps {
  meal: Meal;
}

export default function MealCard({ meal }: MealCardProps) {
  const time = new Date(meal.eatenAt).toLocaleTimeString('ko-KR', {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <div className="flex items-center bg-white rounded-2xl p-4 shadow-sm">
      <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center text-xl mr-3">
        🥕
      </div>
      <div className="flex-1">
        <p className="font-medium text-gray-800">{meal.menu}</p>
        <p className="text-gray-400 text-sm">
          {meal.amountG ? `${meal.amountG}g` : ''}
          {meal.reaction ? ` ${reactionEmoji[meal.reaction]}` : ''}
        </p>
      </div>
      <p className="text-gray-400 text-sm">{time}</p>
    </div>
  );
}