export default function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-sm border border-zinc-200 bg-zinc-100/60 px-2.5 py-0.5 font-mono text-xs text-zinc-600">
      {children}
    </span>
  );
}
