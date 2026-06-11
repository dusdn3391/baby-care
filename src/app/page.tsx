'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/store/auth';
import { useBabies } from '@/hooks/useBaby';
import { useFeeding } from '@/hooks/useFeeding';
import { useMeal } from '@/hooks/useMeal';
import Loading from '@/components/common/Loading';
import BottomNav from '@/components/common/BottomNav';
import BabyProfile from '@/components/dashboard/BabyProfile';
import StatsCard from '@/components/dashboard/StatsCard';
import QuickAction from '@/components/dashboard/QuickAction';

export default function DashboardPage() {
  const router = useRouter();
  const { user, logout } = useAuthStore();
  const { babies, loading: babiesLoading } = useBabies();
  const baby = babies[0] ?? null;
  const { stats: feedingStats } = useFeeding(baby?.id ?? 0);
  const { stats: mealStats } = useMeal(baby?.id ?? 0);

  useEffect(() => {
    if (!user) { router.push('/login'); return; }
  }, [user]);

  useEffect(() => {
    if (!babiesLoading && babies.length === 0) {
      router.push('/babies/new');
    }
  }, [babiesLoading, babies]);

  if (babiesLoading) return <Loading />;

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* 헤더 */}
      <div className="bg-indigo-500 text-white px-6 pt-12 pb-8 rounded-b-3xl">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-indigo-200 text-sm">안녕하세요 👋</p>
            <h1 className="text-2xl font-bold mt-1">{user?.name}님</h1>
          </div>
          <button onClick={logout} className="text-indigo-200 text-sm">
            로그아웃
          </button>
        </div>
        {baby && <BabyProfile baby={baby} />}
      </div>

      <div className="px-6 mt-6 space-y-4">
        {/* 오늘 통계 */}
        <h2 className="text-lg font-bold text-gray-800">오늘의 기록</h2>
        <div className="grid grid-cols-2 gap-4">
          <StatsCard
            icon="🍼"
            label="수유 횟수"
            count={feedingStats?.totalCount ?? 0}
            unit="회"
            sub={`${feedingStats?.totalAmountMl ?? 0}ml`}
            color="text-indigo-600"
          />
          <StatsCard
            icon="🥕"
            label="이유식 횟수"
            count={mealStats?.totalCount ?? 0}
            unit="회"
            sub={`${mealStats?.totalAmountG ?? 0}g`}
            color="text-orange-500"
          />
        </div>

        {/* 빠른 기록 */}
        <h2 className="text-lg font-bold text-gray-800 mt-6">빠른 기록</h2>
        <div className="space-y-3">
          <QuickAction
            href="/feeding/new"
            icon="🍼"
            bgColor="bg-indigo-100"
            title="수유 기록하기"
            desc="모유 · 분유 · 혼합"
          />
          <QuickAction
            href="/meal/new"
            icon="🥕"
            bgColor="bg-orange-100"
            title="이유식 기록하기"
            desc="메뉴 · 양 · 반응"
          />
          <QuickAction
            href="/food-guide"
            icon="📋"
            bgColor="bg-green-100"
            title="식품 가이드"
            desc="개월수별 먹을 수 있는 식품"
          />
        </div>
      </div>

      <BottomNav />
    </div>
  );
}