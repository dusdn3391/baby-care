'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useBabies } from '@/hooks/useBaby';
import { useFeeding } from '@/hooks/useFeeding';
import Header from '@/components/common/Header';
import Input from '@/components/common/Input';
import Button from '@/components/common/Button';

const feedingTypes = [
  { value: 'breast' as const, label: '🤱 모유' },
  { value: 'formula' as const, label: '🍼 분유' },
  { value: 'mixed' as const, label: '🔀 혼합' },
];

export default function NewFeedingPage() {
  const router = useRouter();
  const { babies } = useBabies();
  const baby = babies[0];
  const { addFeeding } = useFeeding(baby?.id ?? 0);
const [type, setType] = useState<'breast' | 'formula' | 'mixed'>('formula'); // ← 타입 추가!
  const [amount, setAmount] = useState('');
  const [duration, setDuration] = useState('');
  const [time, setTime] = useState(new Date().toISOString().slice(0, 16));
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    if (!baby) return;
    setLoading(true);
    try {
      await addFeeding({
        babyId: baby.id,
        type,
        amountMl: amount ? Number(amount) : undefined,
        durationMin: duration ? Number(duration) : undefined,
        fedAt: new Date(time).toISOString(),
      });
      router.push('/feeding');
    } catch {
      setError('수유 기록에 실패했어요.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header title="수유 기록" showBack />

      <div className="px-6 mt-4 space-y-4">
        <div className="bg-white rounded-2xl p-6 shadow-sm space-y-4">
          {/* 수유 타입 */}
          <div>
            <label className="text-sm text-gray-600 font-medium">수유 방법</label>
            <div className="flex gap-2 mt-2">
              {feedingTypes.map((t) => (
                <button
                  key={t.value}
                  onClick={() => setType(t.value)}
                  className={`flex-1 py-3 rounded-xl border text-sm font-medium transition-all ${
                    type === t.value
                      ? 'border-indigo-500 bg-indigo-50 text-indigo-600'
                      : 'border-gray-200 text-gray-500'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          {/* 분유/혼합: 양 입력 */}
          {(type === 'formula' || type === 'mixed') && (
            <Input
              label="양 (ml)"
              type="number"
              value={amount}
              onChange={setAmount}
              placeholder="120"
            />
          )}

          {/* 모유/혼합: 시간 입력 */}
          {(type === 'breast' || type === 'mixed') && (
            <Input
              label="수유 시간 (분)"
              type="number"
              value={duration}
              onChange={setDuration}
              placeholder="10"
            />
          )}

          <Input
            label="수유 시간"
            type="datetime-local"
            value={time}
            onChange={setTime}
            required
          />

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <Button onClick={handleSubmit} fullWidth loading={loading}>
            기록하기
          </Button>
        </div>
      </div>
    </div>
  );
}