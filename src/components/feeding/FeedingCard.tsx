import { Feeding } from '@/types';

const typeLabel: Record<string, string> = {
  breast: '모유',
  formula: '분유',
  mixed: '혼합',
};

interface FeedingCardProps {
  feeding: Feeding;
}

export default function FeedingCard({ feeding }: FeedingCardProps) {
  const time = new Date(feeding.fedAt).toLocaleTimeString('ko-KR', {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <div className="flex items-center bg-white rounded-2xl p-4 shadow-sm">
      <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center text-xl mr-3">
        🍼
      </div>
      <div className="flex-1">
        <p className="font-medium text-gray-800">{typeLabel[feeding.type]}</p>
        <p className="text-gray-400 text-sm">
          {feeding.amountMl ? `${feeding.amountMl}ml` : `${feeding.durationMin}분`}
        </p>
      </div>
      <p className="text-gray-400 text-sm">{time}</p>
    </div>
  );
}