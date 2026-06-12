interface InputProps {
  label: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
}

export default function Input({
  label,
  type = 'text',
  value,
  onChange,
  placeholder,
  required,
}: InputProps) {
  return (
    <div>
      <label className="text-sm text-[#9B8F82] font-medium">
        {label} {required && <span className="text-[#E76F6F]">*</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full mt-1.5 px-4 py-3 border border-[#F0E4D0] rounded-xl focus:outline-none focus:border-[#F5A623] bg-[#FDFBF6] text-[#4A3F35] placeholder:text-[#C9BEAF]"
      />
    </div>
  );
}