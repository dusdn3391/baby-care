'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/',           icon: '🏠', label: 'Home' },
  { href: '/feeding',    icon: '🍼', label: 'Records' },
  { href: '/meal',       icon: '🍽️', label: 'Meals' },
  { href: '/food-guide', icon: '🍴', label: 'Food Guide' },
  { href: '/mypage',     icon: '👤', label: 'My Page' },

];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <div
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        background: '#FFFFFF',
        borderTop: '1px solid #F0E4D0',
        padding: '10px 16px',
        display: 'flex',
        justifyContent: 'space-around',
        borderRadius: '20px 20px 0 0',
      }}
    >
      {navItems.map((item) => {
        const active = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 2,
              padding: active ? '6px 16px' : '6px 0',
              borderRadius: 14,
              background: active ? '#FDF1D9' : 'transparent',
              textDecoration: 'none',
              color: active ? '#F5A623' : '#C9BEAF',
              transition: 'all 0.15s',
            }}
          >
            <span style={{ fontSize: 16 }}>{item.icon}</span>
            <span style={{ fontSize: 10, fontWeight: active ? 700 : 500 }}>{item.label}</span>
          </Link>
        );
      })}
    </div>
  );
}