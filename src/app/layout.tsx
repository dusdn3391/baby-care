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
      <body className="bg-[#E5DED0] flex justify-center min-h-screen">
        <div className="w-full max-w-[420px] min-h-screen bg-[#FDF8EF] shadow-xl relative">
          {children}
        </div>
      </body>
    </html>
  );
}