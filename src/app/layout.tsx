import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '아기 케어',
  description: '아기 수유·이유식 관리 앱',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: '아기 케어',
  },
};

export const viewport: Viewport = {
  themeColor: '#6366f1',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="bg-gray-50 max-w-md mx-auto min-h-screen">
        {children}
      </body>
    </html>
  );
}