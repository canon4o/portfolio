export default function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-zinc-200 bg-white px-2.5 py-0.5 font-mono text-xs text-zinc-600 transition-colors hover:border-accent/40 hover:text-accent">
      {children}
    </span>
  );
}
