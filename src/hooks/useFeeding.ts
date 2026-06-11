import { useState, useEffect } from 'react';
import { createFeeding, getTodayFeedings, getFeedingStats } from '@/lib/api';
import { Feeding, FeedingStats } from '@/types';
import { CreateFeedingInput } from '@/types/feeding';

export function useFeeding(babyId: number) {
  const [feedings, setFeedings] = useState<Feeding[]>([]);
  const [stats, setStats] = useState<FeedingStats | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    if (!babyId) return;
    try {
      const [feedingsRes, statsRes] = await Promise.all([
        getTodayFeedings(babyId),
        getFeedingStats(babyId),
      ]);
      setFeedings(feedingsRes.data);
      setStats(statsRes.data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchData(); }, [babyId]);

  const addFeeding = async (data: CreateFeedingInput) => {
    const res = await createFeeding(data);
    await fetchData(); // 통계 갱신
    return res.data;
  };

  return { feedings, stats, loading, addFeeding, refetch: fetchData };
}