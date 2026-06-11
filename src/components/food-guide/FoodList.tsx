interface FoodListProps {
  foods: string[];
  type: 'allowed' | 'notAllowed';
}

export default function FoodList({ foods, type }: FoodListProps) {
  const isAllowed = type === 'allowed';

  return (
    <div className={`rounded-2xl p-4 ${isAllowed ? 'bg-green-50' : 'bg-red-50'}`}>
      <p className={`font-bold mb-2 ${isAllowed ? 'text-green-600' : 'text-red-600'}`}>
        {isAllowed ? '✅ 먹을 수 있어요' : '❌ 아직 안 돼요'}
      </p>
      <div className="flex flex-wrap gap-2">
        {foods.map((food, i) => (
          <span
            key={i}
            className={`text-sm px-3 py-1 rounded-full ${
              isAllowed ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
            }`}
          >
            {food}
          </span>
        ))}
      </div>
    </div>
  );
}