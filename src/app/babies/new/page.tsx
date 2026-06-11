'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useBabies } from '@/hooks/useBaby';
import Header from '@/components/common/Header';
import Input from '@/components/common/Input';
import Button from '@/components/common/Button';

export default function NewBabyPage() {
  const router = useRouter();
  const { addBaby } = useBabies();
  const [form, setForm] = useState({
    name: '',
    birthDate: '',
    gender: '' as 'male' | 'female' | '',  // ← 타입 명시!
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    if (!form.name || !form.birthDate) {
      setError('이름과 생년월일을 입력해주세요.');
      return;
    }
    setLoading(true);
    try {
      await addBaby({
        name: form.name,
        birthDate: form.birthDate,
        gender: form.gender || undefined,  // ← 빈 문자열이면 undefined
      });
      router.push('/');
    } catch {
      setError('아기 등록에 실패했어요.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header title="아기 등록" />

      <div className="px-6 mt-4 space-y-4">
        <div className="text-center py-6">
          <div className="text-6xl mb-2">🐣</div>
          <p className="text-gray-500">아기 정보를 입력해주세요</p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm space-y-4">
          <Input
            label="아기 이름"
            value={form.name}
            onChange={(v) => setForm({ ...form, name: v })}
            placeholder="하준"
            required
          />
          <Input
            label="생년월일"
            type="date"
            value={form.birthDate}
            onChange={(v) => setForm({ ...form, birthDate: v })}
            required
          />
          <div>
            <label className="text-sm text-gray-600 font-medium">성별</label>
            <div className="flex gap-3 mt-2">
              {[
                { value: 'male' as const, label: '👦 남자아이' },
                { value: 'female' as const, label: '👧 여자아이' },
              ].map((g) => (
                <button
                  key={g.value}
                  onClick={() => setForm({ ...form, gender: g.value })}
                  className={`flex-1 py-3 rounded-xl border text-sm font-medium transition-all ${
                    form.gender === g.value
                      ? 'border-indigo-500 bg-indigo-50 text-indigo-600'
                      : 'border-gray-200 text-gray-500'
                  }`}
                >
                  {g.label}
                </button>
              ))}
            </div>
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <Button onClick={handleSubmit} fullWidth loading={loading}>
            등록하기
          </Button>
        </div>
      </div>
    </div>
  );
}