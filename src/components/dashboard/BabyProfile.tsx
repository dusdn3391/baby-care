import { Baby } from '@/types';

interface BabyProfileProps {
  baby: Baby;
}

export default function BabyProfile({ baby }: BabyProfileProps) {
  return (
    <div className="mt-4 bg-white/20 rounded-2xl p-4">
      <p className="text-indigo-100 text-sm">우리 아기</p>
      <p className="text-xl font-bold text-white">{baby.name} 🐣</p>
      {baby.ageMonths !== undefined && (
        <p className="text-indigo-200 text-sm mt-1">{baby.ageMonths}개월</p>
      )}
    </div>
  );
}