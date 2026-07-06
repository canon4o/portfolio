import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="group font-mono text-base tracking-tight transition-opacity hover:opacity-80"
      aria-label="Plamen Georgiev — devgeorgiev.com"
    >
      <span className="text-accent select-none">&gt; </span>
      <span className="font-semibold text-accent">dev</span>
      <span className="font-semibold text-zinc-900">georgiev</span>
      <span className="text-zinc-400">.com</span>
    </Link>
  );
}
