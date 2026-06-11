interface StatsCardProps {
  icon: string;
  label: string;
  count: number;
  unit: string;
  sub: string;
  color: string;
}

export default function StatsCard({ icon, label, count, unit, sub, color }: StatsCardProps) {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm">
      <div className="text-3xl mb-2">{icon}</div>
      <p className="text-gray-500 text-sm">{label}</p>
      <p className={`text-2xl font-bold ${color}`}>{count}{unit}</p>
      <p className="text-gray-400 text-xs mt-1">{sub}</p>
    </div>
  );
}