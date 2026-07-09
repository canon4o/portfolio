type ProjectPathProps = {
  slug: string;
  className?: string;
};

export default function ProjectPath({ slug, className }: ProjectPathProps) {
  return (
    <span className={className ?? "font-mono text-sm text-zinc-500"}>
      <span className="text-accent">/</span>projects/{slug}
    </span>
  );
}
