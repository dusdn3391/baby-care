import { MealStats as MealStatsType } from '@/types';

interface MealStatsProps {
  stats: MealStatsType;
}

export default function MealStats({ stats }: MealStatsProps) {
  return (
    <div className="bg-orange-50 rounded-2xl p-4">
      <p className="text-orange-600 font-bold text-lg">오늘 총 {stats.totalCount}회</p>
      <p className="text-orange-400 text-sm mt-1">총 {stats.totalAmountG}g</p>
      {stats.menus.length > 0 && (
        <div className="flex gap-2 mt-2 flex-wrap">
          {stats.menus.map((menu, i) => (
            <span key={i} className="bg-orange-100 text-orange-600 text-xs px-2 py-1 rounded-full">
              {menu}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}