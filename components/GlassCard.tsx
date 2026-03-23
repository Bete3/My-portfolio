export const GlassCard = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={`card-cyan-glow relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-linear-to-br from-white/10 to-transparent p-8 shadow-[0_22px_55px_rgba(2,6,23,0.72),0_0_36px_rgba(34,211,238,0.26)] backdrop-blur-2xl ${className}`}>
    {/* Subtle Inner Glow */}
    <div className="absolute -top-20 -left-20 w-40 h-40 bg-blue-500/10 blur-[80px] rounded-full" />
    <div className="relative z-10 font-light">{children}</div>
  </div>
);