import { useState, useEffect } from 'react';
import { getBabies, getBaby, createBaby } from '@/lib/api';
import { Baby } from '@/types';
import { CreateBabyInput } from '@/types/baby';

export function useBabies() {
  const [babies, setBabies] = useState<Baby[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchBabies = async () => {
    try {
      const res = await getBabies();
      setBabies(res.data);
    } catch {
      setError('아기 목록을 불러오지 못했어요.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchBabies(); }, []);

  const addBaby = async (data: CreateBabyInput) => {
    const res = await createBaby(data);
    setBabies((prev) => [...prev, res.data]);
    return res.data;
  };

  return { babies, loading, error, addBaby, refetch: fetchBabies };
}

export function useBaby(id: number) {
  const [baby, setBaby] = useState<Baby | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    getBaby(id)
      .then((res) => setBaby(res.data))
      .finally(() => setLoading(false));
  }, [id]);

  return { baby, loading };
}