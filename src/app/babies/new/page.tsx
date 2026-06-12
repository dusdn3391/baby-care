'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useBabies } from '@/hooks/useBaby';
import styles from './babies-new.module.css';

export default function NewBabyPage() {
  const router = useRouter();
  const { addBaby } = useBabies();
  const [form, setForm] = useState({
    name: '',
    birthDate: '',
    gender: '' as 'male' | 'female' | '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    if (!form.name || !form.birthDate) {
      setError('이름과 생년월일을 입력해주세요.');
      return;
    }
    setLoading(true);
    setError('');
    try {
      await addBaby({
        name: form.name,
        birthDate: form.birthDate,
        gender: form.gender || undefined,
      });
      router.push('/');
    } catch {
      setError('아기 등록에 실패했어요.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ background: 'var(--color-bg)', minHeight: '100vh', padding: '40px 24px' }}>
      <div className="profile-icon-lg">🐣</div>

      <div style={{ textAlign: 'center', marginTop: 20 }}>
        <h1 className="title-lg">아기 정보를 알려주세요</h1>
        <p className="subtitle">
          등록한 정보로 맞춤 이유식 가이드와
          <br />
          알레르기 케어를 시작할게요.
        </p>
      </div>

      <div className="card-lg" style={{ marginTop: 28 }}>
        <div>
          <label className="label-sm">아기 이름</label>
          <div className="input-box">
            <span className="input-icon">🐣</span>
            <input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="하준"
            />
          </div>
        </div>

        <div style={{ marginTop: 16 }}>
          <label className="label-sm">생년월일</label>
          <div className="input-box">
            <span className="input-icon">📅</span>
            <input
              type="date"
              value={form.birthDate}
              onChange={(e) => setForm({ ...form, birthDate: e.target.value })}
            />
          </div>
        </div>

        <div style={{ marginTop: 16 }}>
          <label className="label-sm">성별</label>
          <div className={styles.genderRow}>
            {[
              { value: 'male' as const, label: '👦 남자아이' },
              { value: 'female' as const, label: '👧 여자아이' },
            ].map((g) => (
              <button
                key={g.value}
                onClick={() => setForm({ ...form, gender: g.value })}
                className={`choice-btn ${form.gender === g.value ? 'active' : ''}`}
              >
                {g.label}
              </button>
            ))}
          </div>
        </div>

        {error && <p className="error-text">{error}</p>}

        <button onClick={handleSubmit} disabled={loading} className="btn-primary" style={{ marginTop: 20 }}>
          {loading ? '등록 중...' : '등록하고 시작하기'}
        </button>
      </div>
    </div>
  );
}