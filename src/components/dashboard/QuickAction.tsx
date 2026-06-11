import Link from 'next/link';

interface QuickActionProps {
  href: string;
  icon: string;
  bgColor: string;
  title: string;
  desc: string;
}

export default function QuickAction({ href, icon, bgColor, title, desc }: QuickActionProps) {
  return (
    <Link href={href} className="flex items-center bg-white rounded-2xl p-4 shadow-sm">
      <div className={`w-12 h-12 ${bgColor} rounded-xl flex items-center justify-center text-2xl mr-4`}>
        {icon}
      </div>
      <div>
        <p className="font-medium text-gray-800">{title}</p>
        <p className="text-gray-400 text-sm">{desc}</p>
      </div>
      <span className="ml-auto text-gray-300 text-xl">›</span>
    </Link>
  );
}