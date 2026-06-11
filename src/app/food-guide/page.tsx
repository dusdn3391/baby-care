'use client';
import { useState, useEffect } from 'react';
import { useBabies } from '@/hooks/useBaby';
import { getFoodGuide } from '@/lib/api';
import { FoodGuide } from '@/types';
import Header from '@/components/common/Header';
import BottomNav from '@/components/common/BottomNav';
import FoodGuideCard from '@/components/food-guide/FoodGuideCard';
import Loading from '@/components/common/Loading';

export default function FoodGuidePage() {
  const { babies } = useBabies();
  const baby = babies[0];
  const [guide, setGuide] = useState<FoodGuide | null>(null);
  const [ageMonths, setAgeMonths] = useState(6);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (baby?.ageMonths !== undefined) {
      setAgeMonths(baby.ageMonths);
    }
  }, [baby]);

  useEffect(() => {
    setLoading(true);
    getFoodGuide(ageMonths)
      .then((res) => setGuide(res.data))
      .finally(() => setLoading(false));
  }, [ageMonths]);

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <Header title="식품 가이드" />

      <div className="px-6 mt-4 space-y-4">
        {/* 개월수 선택 */}
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-gray-600 font-medium">개월수</p>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setAgeMonths((v) => Math.max(4, v - 1))}
                className="w-8 h-8 bg-gray-100 rounded-full text-gray-600 font-bold"
              >
                -
              </button>
              <span className="text-xl font-bold text-indigo-600 w-12 text-center">
                {ageMonths}개월
              </span>
              <button
                onClick={() => setAgeMonths((v) => Math.min(24, v + 1))}
                className="w-8 h-8 bg-gray-100 rounded-full text-gray-600 font-bold"
              >
                +
              </button>
            </div>
          </div>
        </div>

        {loading ? <Loading /> : guide && <FoodGuideCard guide={guide} />}
      </div>

      <BottomNav />
    </div>
  );
}