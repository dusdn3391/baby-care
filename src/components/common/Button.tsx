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
  const base = 'py-3 px-6 rounded-xl font-medium transition-all disabled:opacity-50';
  const variants = {
    primary: 'bg-indigo-500 text-white hover:bg-indigo-600',
    secondary: 'border border-gray-200 text-gray-600 hover:bg-gray-50',
    danger: 'bg-red-500 text-white hover:bg-red-600',
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