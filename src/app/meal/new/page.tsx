'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useBabies } from '@/hooks/useBaby';
import { useMeal } from '@/hooks/useMeal';
import BottomNav from '@/components/common/BottomNav';
import styles from '@/styles/record-form.module.css';

const reactions = [
  { value: 'good', emoji: '😋', label: '좋아요' },
  { value: 'normal', emoji: '😐', label: '보통이에요' },
  { value: 'bad', emoji: '😢', label: '나빠요' },
];

export default function NewMealPage() {
  const router = useRouter();
  const { babies } = useBabies();
  const baby = babies[0];
  const { addMeal } = useMeal(baby?.id ?? 0);
  const [menu, setMenu] = useState('');
  const [amount, setAmount] = useState(0);
  const [reaction, setReaction] = useState('normal');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    if (!baby) return;
    if (!menu) {
      setError('메뉴를 입력해주세요.');
      return;
    }
    setLoading(true);
    setError('');
    try {
      await addMeal({
        babyId: baby.id,
        menu,
        amountG: amount || undefined,
        reaction,
        eatenAt: new Date().toISOString(),
      });
      router.push('/meal');
    } catch {
      setError('이유식 기록에 실패했어요.');
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
          <label className="label">메뉴</label>
          <div className="input-box">
            <span className="input-icon">🍽️</span>
            <input
              value={menu}
              onChange={(e) => setMenu(e.target.value)}
              placeholder="고구마 퓨레"
            />
          </div>
        </div>

        <div style={{ marginTop: 20 }}>
          <label className="label">양 (g)</label>
          <div className={styles.stepper}>
            <span className={styles.stepperValue}>
              {amount} <span className={styles.stepperUnit}>g</span>
            </span>
            <div className={styles.stepperButtons}>
              <button onClick={() => setAmount((v) => Math.max(0, v - 10))} className={styles.stepperBtn}>−</button>
              <button onClick={() => setAmount((v) => v + 10)} className={styles.stepperBtn}>+</button>
            </div>
          </div>
        </div>

        <div style={{ marginTop: 20 }}>
          <label className="label">아이의 반응</label>
          <div className={styles.reactionRow}>
            {reactions.map((r) => (
              <button
                key={r.value}
                onClick={() => setReaction(r.value)}
                className={`${styles.reactionBtn} ${reaction === r.value ? styles.active : ''}`}
              >
                <span className={styles.reactionEmoji}>{r.emoji}</span>
                <span className={`${styles.reactionLabel} ${reaction === r.value ? styles.active : ''}`}>{r.label}</span>
              </button>
            ))}
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