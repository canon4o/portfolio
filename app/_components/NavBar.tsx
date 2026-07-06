"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import DirectoryPath from "./DirectoryPath";
import Logo from "./Logo";

const links = [
  { path: "me", href: "/" },
  { path: "projects", href: "/projects" },
  { path: "contact-me", href: "/contact-me" },
];

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="border-b border-zinc-200">
      <div className="mx-auto flex max-w-2xl flex-wrap items-center justify-between gap-x-6 gap-y-3 px-6 py-4">
        <Logo />
        <div className="flex gap-6 font-mono text-sm">
          {links.map(({ path, href }) => {
            const isActive =
              href === "/" ? pathname === "/" : pathname.startsWith(href);

            return (
              <Link
                key={href}
                href={href}
                className={
                  isActive
                    ? "font-semibold text-zinc-900 underline"
                    : "text-zinc-500 hover:text-zinc-900"
                }
              >
                <DirectoryPath path={path} />
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
