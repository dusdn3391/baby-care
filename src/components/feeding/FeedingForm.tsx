'use client';
import { useState } from 'react';
import Input from '@/components/common/Input';
import Button from '@/components/common/Button';
import { CreateFeedingInput } from '@/types/feeding';

const feedingTypes = [
  { value: 'breast', label: '🤱 모유' },
  { value: 'formula', label: '🍼 분유' },
  { value: 'mixed', label: '🔀 혼합' },
];

interface FeedingFormProps {
  babyId: number;
  onSubmit: (data: CreateFeedingInput) => Promise<void>;
}

export default function FeedingForm({ babyId, onSubmit }: FeedingFormProps) {
  const [type, setType] = useState('formula');
  const [amount, setAmount] = useState('');
  const [duration, setDuration] = useState('');
  const [time, setTime] = useState(new Date().toISOString().slice(0, 16));
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    setLoading(true);
    setError('');
    try {
      await onSubmit({
        babyId,
        type,
        amountMl: amount ? Number(amount) : undefined,
        durationMin: duration ? Number(duration) : undefined,
        fedAt: new Date(time).toISOString(),
      });
    } catch {
      setError('수유 기록에 실패했어요.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm space-y-4">
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

      {(type === 'formula' || type === 'mixed') && (
        <Input
          label="양 (ml)"
          type="number"
          value={amount}
          onChange={setAmount}
          placeholder="120"
        />
      )}

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
  );
}