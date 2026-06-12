interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function Card({ children, className, onClick }: CardProps) {
  return (
    <div
      onClick={onClick}
      className={`bg-white rounded-2xl p-4 border border-[#F0E4D0] ${onClick ? 'cursor-pointer active:scale-[0.98] transition-transform' : ''} ${className ?? ''}`}
    >
      {children}
    </div>
  );
}