'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { login } from '@/lib/api';
import { useAuthStore } from '@/store/auth';
import Input from '@/components/common/Input';
import Button from '@/components/common/Button';

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
    <div className="min-h-screen flex flex-col justify-center px-6">
      <div className="text-center mb-8">
        <div className="text-5xl mb-3">🍼</div>
        <h1 className="text-2xl font-bold text-gray-800">아기 케어</h1>
        <p className="text-gray-500 mt-1">수유·이유식 관리 앱</p>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-sm space-y-4">
        <Input
          label="이메일"
          type="email"
          value={form.email}
          onChange={(v) => setForm({ ...form, email: v })}
          placeholder="user@example.com"
          required
        />
        <Input
          label="비밀번호"
          type="password"
          value={form.password}
          onChange={(v) => setForm({ ...form, password: v })}
          placeholder="••••••"
          required
        />

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <Button onClick={handleSubmit} fullWidth loading={loading}>
          로그인
        </Button>
        <Button onClick={() => router.push('/register')} variant="secondary" fullWidth>
          회원가입
        </Button>
      </div>
    </div>
  );
}