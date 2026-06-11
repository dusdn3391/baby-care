import { FeedingStats as FeedingStatsType } from '@/types';

interface FeedingStatsProps {
  stats: FeedingStatsType;
}

export default function FeedingStats({ stats }: FeedingStatsProps) {
  return (
    <div className="bg-indigo-50 rounded-2xl p-4">
      <p className="text-indigo-600 font-bold text-lg">오늘 총 {stats.totalCount}회</p>
      <p className="text-indigo-400 text-sm mt-1">총 {stats.totalAmountMl}ml</p>
      <div className="flex gap-2 mt-2">
        {Object.entries(stats.byType).map(([type, count]) => (
          <span key={type} className="bg-indigo-100 text-indigo-600 text-xs px-2 py-1 rounded-full">
            {type === 'breast' ? '모유' : type === 'formula' ? '분유' : '혼합'} {count}회
          </span>
        ))}
      </div>
    </div>
  );
}