export default function Badge({ children, className = '', color = 'violet' }) {
  const colors = {
    violet: 'bg-[#8B5CF6] text-white shadow-[0_0_8px_#8B5CF6]',
    red: 'bg-[#EF4444] text-white shadow-[0_0_8px_#EF4444]',
    indigo: 'bg-[#4F46E5] text-white shadow-[0_0_8px_#4F46E5]',
    cyan: 'bg-[#22D3EE] text-black shadow-[0_0_8px_#22D3EE]',
  };

  return (
    <span
      className={`inline-block px-3 py-1 rounded-full font-semibold text-sm transition-all duration-300 cursor-default
                  ${colors[color] || colors.violet} ${className}`}
    >
      {children}
    </span>
  );
}
