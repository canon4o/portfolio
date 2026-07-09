"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import DirectoryPath from "./DirectoryPath";
import Logo from "./Logo";

const links = [
  { path: "me", href: "/#me" },
  { path: "projects", href: "/#projects" },
  { path: "contact-me", href: "/#contact-me" },
];

export default function NavBar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [activeSection, setActiveSection] = useState("me");

  useEffect(() => {
    if (!isHome) return;

    const sections = links
      .map(({ path }) => document.getElementById(path))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: "-20% 0px -70% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [isHome]);

  return (
    <nav className="border-b border-zinc-200">
      <div className="mx-auto flex max-w-2xl flex-wrap items-center justify-between gap-x-6 gap-y-3 px-6 py-4">
        <Logo />
        <div className="flex gap-6 font-mono text-sm">
          {links.map(({ path, href }) => {
            const isActive = isHome
              ? activeSection === path
              : path === "projects" && pathname.startsWith("/projects");

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
