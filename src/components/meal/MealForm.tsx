'use client';
import { useState } from 'react';
import Input from '@/components/common/Input';
import Button from '@/components/common/Button';

const reactions = [
  { value: 'good', label: '😋 잘 먹었어요' },
  { value: 'normal', label: '😐 보통이에요' },
  { value: 'bad', label: '😢 안 먹었어요' },
];

interface MealFormData {
  babyId: number;
  menu: string;
  amountG?: number;
  reaction?: string;
  memo?: string;
  eatenAt: string;
}

interface MealFormProps {
  babyId: number;
  onSubmit: (data: MealFormData) => Promise<void>;
}

export default function MealForm({ babyId, onSubmit }: MealFormProps) {
  const [menu, setMenu] = useState('');
  const [amount, setAmount] = useState('');
  const [reaction, setReaction] = useState('good');
  const [memo, setMemo] = useState('');
  const [time, setTime] = useState(new Date().toISOString().slice(0, 16));
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    if (!menu) {
      setError('메뉴를 입력해주세요.');
      return;
    }
    setLoading(true);
    setError('');
    try {
      await onSubmit({
        babyId,
        menu,
        amountG: amount ? Number(amount) : undefined,
        reaction,
        memo: memo || undefined,
        eatenAt: new Date(time).toISOString(),
      });
    } catch {
      setError('이유식 기록에 실패했어요.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm space-y-4">
      <Input
        label="메뉴"
        value={menu}
        onChange={setMenu}
        placeholder="고구마 퓨레"
        required
      />
      <Input
        label="양 (g)"
        type="number"
        value={amount}
        onChange={setAmount}
        placeholder="80"
      />

      <div>
        <label className="text-sm text-gray-600 font-medium">반응</label>
        <div className="flex gap-2 mt-2">
          {reactions.map((r) => (
            <button
              key={r.value}
              onClick={() => setReaction(r.value)}
              className={`flex-1 py-2 rounded-xl border text-xs font-medium transition-all ${
                reaction === r.value
                  ? 'border-orange-400 bg-orange-50 text-orange-600'
                  : 'border-gray-200 text-gray-500'
              }`}
            >
              {r.label}
            </button>
          ))}
        </div>
      </div>

      <Input
        label="메모"
        value={memo}
        onChange={setMemo}
        placeholder="특이사항 입력"
      />
      <Input
        label="식사 시간"
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