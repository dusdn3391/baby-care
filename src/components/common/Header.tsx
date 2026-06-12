import { useRouter } from 'next/navigation';

interface HeaderProps {
  title: string;
  showBack?: boolean;
  right?: React.ReactNode;
}

export default function Header({ title, showBack, right }: HeaderProps) {
  const router = useRouter();

  return (
    <div className="flex items-center justify-between px-5 pt-12 pb-4 bg-[#FDF8EF] sticky top-0 z-10">
      <div className="flex items-center gap-2">
        {showBack && (
          <button onClick={() => router.back()} className="text-[#9B8F82] text-2xl mr-1">
            ‹
          </button>
        )}
        <span className="text-xl">🍼</span>
        <h1 className="text-base font-bold text-[#4A3F35]">{title}</h1>
      </div>
      {right && <div>{right}</div>}
    </div>
  );
}