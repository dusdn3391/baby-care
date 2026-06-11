'use client';
import { useBabies } from '@/hooks/useBaby';
import { useMeal } from '@/hooks/useMeal';
import Header from '@/components/common/Header';
import BottomNav from '@/components/common/BottomNav';
import MealStatsComponent from '@/components/meal/MealStats';  // ← 이름 변경!
import MealList from '@/components/meal/MealList';
import Loading from '@/components/common/Loading';
import Link from 'next/link';

export default function MealPage() {
  const { babies } = useBabies();
  const baby = babies[0];
  const { meals, stats, loading } = useMeal(baby?.id ?? 0);

  if (loading) return <Loading />;

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <Header
        title="이유식 기록"
        right={
          <Link
            href="/meal/new"
            className="bg-orange-500 text-white text-sm px-4 py-2 rounded-xl"
          >
            + 기록
          </Link>
        }
      />

      <div className="px-6 mt-4 space-y-4">
        {stats && <MealStatsComponent stats={stats} />}  {/* ← 변경! */}
        <h2 className="text-lg font-bold text-gray-800">오늘 이유식 기록</h2>
        <MealList meals={meals} />
      </div>

      <BottomNav />
    </div>
  );
}