'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { register } from '@/lib/api';
import { useAuthStore } from '@/store/auth';
import Input from '@/components/common/Input';
import Button from '@/components/common/Button';

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
    <div className="min-h-screen flex flex-col justify-center px-6">
      <div className="text-center mb-8">
        <div className="text-5xl mb-3">🍼</div>
        <h1 className="text-2xl font-bold text-gray-800">회원가입</h1>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-sm space-y-4">
        <Input
          label="이름"
          value={form.name}
          onChange={(v) => setForm({ ...form, name: v })}
          placeholder="홍길동"
          required
        />
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
          placeholder="6자 이상"
          required
        />

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <Button onClick={handleSubmit} fullWidth loading={loading}>
          회원가입
        </Button>
        <Button onClick={() => router.push('/login')} variant="secondary" fullWidth>
          로그인으로 돌아가기
        </Button>
      </div>
    </div>
  );
}