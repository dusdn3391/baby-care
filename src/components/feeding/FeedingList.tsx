import { Feeding } from '@/types';
import FeedingCard from './FeedingCard';

interface FeedingListProps {
  feedings: Feeding[];
}

export default function FeedingList({ feedings }: FeedingListProps) {
  if (feedings.length === 0) {
    return (
      <div className="text-center py-8 text-gray-400">
        <p className="text-3xl mb-2">🍼</p>
        <p>오늘 수유 기록이 없어요</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {feedings.map((feeding) => (
        <FeedingCard key={feeding.id} feeding={feeding} />
      ))}
    </div>
  );
}