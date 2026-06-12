'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { register } from '@/lib/api';
import { useAuthStore } from '@/store/auth';
import styles from './auth.module.css';

export default function RegisterPage() {
  const router = useRouter();
  const { setAuth } = useAuthStore();
  const [form, setForm] = useState({ email: '', password: '', name: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await register(form);
      setAuth(res.data.access_token, res.data.user);
      router.push('/');
    } catch {
      setError('이미 사용 중인 이메일이에요.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ background: 'var(--color-bg)', minHeight: '100vh', padding: '40px 24px' }}>
      <div className="profile-icon-lg">🐣</div>

      <div style={{ textAlign: 'center', marginTop: 20 }}>
        <h1 className="title-lg">우리 아기 알러지 세이프 & 케어</h1>
        <p className="subtitle">
          엄마의 마음으로 우리 아기의 건강한 내일을
          <br />
          기록하고 관리합니다.
        </p>
      </div>

      <div className="card-lg" style={{ marginTop: 28 }}>
        <div className={styles.tabTrack}>
          <button onClick={() => router.push('/login')} className={styles.tabBtn}>로그인</button>
          <button className={`${styles.tabBtn} ${styles.active}`}>회원가입</button>
        </div>

        <div style={{ marginTop: 24 }}>
          <label className="label-sm">이름</label>
          <div className="input-box">
            <span className="input-icon">👤</span>
            <input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="홍길동"
            />
          </div>
        </div>

        <div style={{ marginTop: 16 }}>
          <label className="label-sm">이메일 주소</label>
          <div className="input-box">
            <span className="input-icon">✉️</span>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="example@email.com"
            />
          </div>
        </div>

        <div style={{ marginTop: 16 }}>
          <label className="label-sm">비밀번호</label>
          <div className="input-box">
            <span className="input-icon">🔒</span>
            <input
              type="password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              placeholder="6자 이상 입력하세요"
            />
          </div>
        </div>

        {error && <p className="error-text">{error}</p>}

        <button onClick={handleSubmit} disabled={loading} className="btn-primary" style={{ marginTop: 20 }}>
          {loading ? '가입 중...' : '회원가입'}
        </button>
      </div>

      <p className="bottom-text">
        이미 계정이 있으신가요?{' '}
        <span onClick={() => router.push('/login')} className="bottom-link">로그인하기</span>
      </p>
    </div>
  );
}