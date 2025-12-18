export default function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="container mx-auto mb-10 px-4 text-center md:text-left">
      {eyebrow && (
        <span className="inline-block bg-[#8B5CF6]/20 text-[#8B5CF6] px-3 py-1 rounded-full text-sm font-semibold mb-2 shadow-md">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-extrabold text-white drop-shadow-[0_0_8px_rgba(139,92,246,0.6)] mb-2">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-300 text-sm md:text-base max-w-xl mx-auto md:mx-0">
          {subtitle}
        </p>
      )}
    </div>
  );
}
