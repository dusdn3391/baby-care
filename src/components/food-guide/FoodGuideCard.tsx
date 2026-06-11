import { FoodGuide } from '@/types';

interface FoodGuideCardProps {
  guide: FoodGuide;
}

export default function FoodGuideCard({ guide }: FoodGuideCardProps) {
  return (
    <div className="space-y-4">
      <div className="bg-green-50 rounded-2xl p-4">
        <p className="text-green-600 font-bold mb-2">✅ 먹을 수 있어요</p>
        <div className="flex flex-wrap gap-2">
          {guide.allowed.map((food, i) => (
            <span key={i} className="bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full">
              {food}
            </span>
          ))}
        </div>
      </div>

      <div className="bg-red-50 rounded-2xl p-4">
        <p className="text-red-600 font-bold mb-2">❌ 아직 안 돼요</p>
        <div className="flex flex-wrap gap-2">
          {guide.notAllowed.map((food, i) => (
            <span key={i} className="bg-red-100 text-red-700 text-sm px-3 py-1 rounded-full">
              {food}
            </span>
          ))}
        </div>
      </div>

      <div className="bg-yellow-50 rounded-2xl p-4">
        <p className="text-yellow-700 text-sm">💡 {guide.notes}</p>
      </div>
    </div>
  );
}