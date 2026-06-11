'use client';
import { useBabies } from '@/hooks/useBaby';
import { useFeeding } from '@/hooks/useFeeding';
import Header from '@/components/common/Header';
import BottomNav from '@/components/common/BottomNav';
import FeedingStats from '@/components/feeding/FeedingStats';
import FeedingList from '@/components/feeding/FeedingList';
import Loading from '@/components/common/Loading';
import Link from 'next/link';

export default function FeedingPage() {
  const { babies } = useBabies();
  const baby = babies[0];
  const { feedings, stats, loading } = useFeeding(baby?.id ?? 0);

  if (loading) return <Loading />;

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <Header
        title="수유 기록"
        right={
          <Link
            href="/feeding/new"
            className="bg-indigo-500 text-white text-sm px-4 py-2 rounded-xl"
          >
            + 기록
          </Link>
        }
      />

      <div className="px-6 mt-4 space-y-4">
        {stats && <FeedingStats stats={stats} />}
        <h2 className="text-lg font-bold text-gray-800">오늘 수유 기록</h2>
        <FeedingList feedings={feedings} />
      </div>

      <BottomNav />
    </div>
  );
}