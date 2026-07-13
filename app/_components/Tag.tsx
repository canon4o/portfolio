export default function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-sm border border-zinc-200/80 border-l-2 border-l-accent/50 bg-zinc-50 px-2.5 py-0.5 font-mono text-xs text-zinc-500 transition-[color,border-color,background-color] hover:border-zinc-200 hover:border-l-accent hover:bg-white hover:text-zinc-700">
      {children}
    </span>
  );
}
