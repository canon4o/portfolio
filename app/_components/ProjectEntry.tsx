import Image from "next/image";
import Link from "next/link";
import {
  DEFAULT_PROJECT_THUMBNAIL,
  type ProjectListingEntry,
  type ProjectStatus,
} from "../_types/project";
import ProjectPath from "./ProjectPath";

function StatusLabel({ status }: { status: ProjectStatus }) {
  const className =
    status === "active" ? "text-accent" : "text-zinc-500 capitalize";

  return <span className={className}>{status}</span>;
}

export default function ProjectEntry({
  slug,
  name,
  tagline,
  role,
  duration,
  status,
  summary,
  thumbnail,
  order,
  readmore = true,
}: ProjectListingEntry) {
  const index = String(order).padStart(2, "0");

  const content = (
    <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
      <div className="relative aspect-video w-full shrink-0 overflow-hidden rounded-md border border-zinc-200 bg-surface sm:w-60">
        <Image
          src={thumbnail ?? DEFAULT_PROJECT_THUMBNAIL}
          alt={`${name} preview`}
          fill
          sizes="(min-width: 640px) 240px, 100vw"
          className={
            status === "archived"
              ? "object-cover opacity-70 grayscale"
              : "object-cover object-left-top transition-transform duration-300 group-hover:scale-[1.03]"
          }
        />
      </div>

      <div className="min-w-0 flex-1 space-y-2">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <span className="font-mono text-xs text-zinc-500">{index}</span>
          <h3 className="text-lg font-semibold text-zinc-900 transition-colors group-hover:text-accent">
            {name}
          </h3>
        </div>
        <p className="font-medium text-zinc-700">{tagline}</p>
        {summary && <p className="text-sm leading-6 text-zinc-600">{summary}</p>}
        <p className="font-mono text-xs text-zinc-500">
          {role} · {duration} · <StatusLabel status={status} />
        </p>
        {readmore ? (
          <p className="pt-1 font-mono text-sm text-accent">
            <ProjectPath slug={slug} className="text-accent" />{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1">
              &rarr;
            </span>
          </p>
        ) : null}
      </div>
    </div>
  );

  return (
    <article className="border-b border-zinc-200 pb-10 last:border-b-0 last:pb-0">
      {readmore ? (
        <Link
          href={`/projects/${slug}`}
          className="group -m-3 block rounded-lg p-3 transition-colors hover:bg-zinc-100"
        >
          {content}
        </Link>
      ) : (
        content
      )}
    </article>
  );
}
