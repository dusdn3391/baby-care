'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useBabies } from '@/hooks/useBaby';
import { useFeeding } from '@/hooks/useFeeding';
import BottomNav from '@/components/common/BottomNav';
import styles from '@/styles/record-form.module.css';

const feedingTypes = [
  { value: 'breast' as const, label: '모유' },
  { value: 'formula' as const, label: '분유' },
  { value: 'mixed' as const, label: '혼합' },
];

export default function NewFeedingPage() {
  const router = useRouter();
  const { babies } = useBabies();
  const baby = babies[0];
  const { addFeeding } = useFeeding(baby?.id ?? 0);
  const [type, setType] = useState<'breast' | 'formula' | 'mixed'>('formula');
  const [amount, setAmount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    if (!baby) return;
    setLoading(true);
    setError('');
    try {
      await addFeeding({
        babyId: baby.id,
        type,
        amountMl: amount || undefined,
        durationMin: type === 'breast' ? amount || undefined : undefined,
        fedAt: new Date().toISOString(),
      });
      router.push('/feeding');
    } catch {
      setError('수유 기록에 실패했어요.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page">
      <div className="page-header">
        <div className="profile-icon">🐣</div>
        <h1 className="app-title">AllergySafe Baby</h1>
      </div>

      <div className="page-content">
        <h2 className="title-md">식사 기록하기</h2>
        <p className="subtitle">아이의 영양 상태와 알레르기 반응을 기록하세요.</p>

        <div style={{ marginTop: 20 }}>
          <label className="label">수유 종류</label>
          <div className={styles.toggleRow}>
            {feedingTypes.map((t) => (
              <button
                key={t.value}
                onClick={() => setType(t.value)}
                className={`${styles.toggleBtn} ${type === t.value ? styles.active : ''}`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 20 }}>
          <label className="label">양 (ml{type !== 'formula' ? ' / 분' : ''})</label>
          <div className={styles.stepper}>
            <span className={styles.stepperValue}>
              {amount} <span className={styles.stepperUnit}>{type === 'formula' ? 'ml' : '분'}</span>
            </span>
            <div className={styles.stepperButtons}>
              <button onClick={() => setAmount((v) => Math.max(0, v - 10))} className={styles.stepperBtn}>−</button>
              <button onClick={() => setAmount((v) => v + 10)} className={styles.stepperBtn}>+</button>
            </div>
          </div>
        </div>

        {error && <p className="error-text">{error}</p>}

        <button onClick={handleSubmit} disabled={loading} className="btn-primary" style={{ marginTop: 24 }}>
          {loading ? '저장 중...' : '기록 완료하기'}
        </button>
      </div>

      <BottomNav />
    </div>
  );
}