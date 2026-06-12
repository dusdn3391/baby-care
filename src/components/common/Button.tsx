interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit';
  variant?: 'primary' | 'secondary' | 'danger';
  disabled?: boolean;
  fullWidth?: boolean;
  loading?: boolean;
}

export default function Button({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  disabled,
  fullWidth,
  loading,
}: ButtonProps) {
  const base = 'py-3.5 px-6 rounded-2xl font-bold text-sm transition-all disabled:opacity-50 active:scale-[0.98]';
  const variants = {
    primary: 'bg-[#F5A623] text-white shadow-sm shadow-[#F5A623]/30',
    secondary: 'border-2 border-[#F0E4D0] text-[#4A3F35] bg-white',
    danger: 'bg-[#E76F6F] text-white',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`${base} ${variants[variant]} ${fullWidth ? 'w-full' : ''}`}
    >
      {loading ? '처리 중...' : children}
    </button>
  );
}