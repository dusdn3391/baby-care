'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { login } from '@/lib/api';
import { useAuthStore } from '@/store/auth';
import styles from './login.module.css';

export default function LoginPage() {
  const router = useRouter();
  const { setAuth } = useAuthStore();
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await login(form);
      setAuth(res.data.access_token, res.data.user);
      router.push('/');
    } catch {
      setError('이메일 또는 비밀번호가 틀렸어요.');
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
          <button className={`${styles.tabBtn} ${styles.active}`}>로그인</button>
          <button onClick={() => router.push('/register')} className={styles.tabBtn}>회원가입</button>
        </div>

        <div style={{ marginTop: 24 }}>
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
              placeholder="비밀번호를 입력하세요"
            />
          </div>
        </div>

        <div className={styles.optionsRow}>
          <label className={styles.checkboxLabel}>
            <input type="checkbox" style={{ accentColor: 'var(--color-primary)', width: 14, height: 14 }} />
            로그인 상태 유지
          </label>
        </div>

        {error && <p className="error-text">{error}</p>}

        <button onClick={handleSubmit} disabled={loading} className="btn-primary" style={{ marginTop: 20 }}>
          {loading ? '로그인 중...' : '로그인'}
        </button>
{/* 
        <div className={styles.divider}>
          <div className={styles.dividerLine} />
          <span className={styles.dividerText}>간편 로그인</span>
          <div className={styles.dividerLine} />
        </div> */}

        {/* <div className={styles.socialRow}>
          <div className={styles.socialIcon} style={{ background: '#FEE500' }}>💬</div>
          <div className={styles.socialIcon} style={{ background: '#03C75A', color: '#fff' }}>N</div>
          <div className={styles.socialIcon} style={{ background: 'var(--color-card)', border: '1px solid var(--color-border)', color: 'var(--color-text-muted)' }}>＋</div>
        </div> */}
      </div>

      {/* <p className="bottom-text">
        도움이 필요하신가요?{' '}
        <span className="bottom-link">고객센터 문의</span>
      </p> */}
    </div>
  );
}