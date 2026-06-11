import { useRouter } from 'next/navigation';

interface HeaderProps {
  title: string;
  showBack?: boolean;
  right?: React.ReactNode;
}

export default function Header({ title, showBack, right }: HeaderProps) {
  const router = useRouter();

  return (
    <div className="flex items-center justify-between px-6 pt-12 pb-4 bg-white sticky top-0 z-10">
      <div className="flex items-center gap-3">
        {showBack && (
          <button onClick={() => router.back()} className="text-gray-500 text-xl">
            ‹
          </button>
        )}
        <h1 className="text-lg font-bold text-gray-800">{title}</h1>
      </div>
      {right && <div>{right}</div>}
    </div>
  );
}