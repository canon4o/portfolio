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
    status === "active" ? "text-accent" : "text-zinc-400 capitalize";

  return <span className={className}>{status}</span>;
}

export default function ProjectEntry({
  slug,
  name,
  tagline,
  role,
  duration,
  status,
  thumbnail,
  order,
  readmore = true,
}: ProjectListingEntry) {
  const index = String(order).padStart(2, "0");

  return (
    <article className="border-b border-zinc-100 pb-10 last:border-b-0 last:pb-0">
      <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
        <div className="relative aspect-video w-full shrink-0 overflow-hidden rounded-md border border-zinc-200 bg-white sm:h-[90px] sm:w-[160px] sm:aspect-auto">
          <Image
            src={thumbnail ?? DEFAULT_PROJECT_THUMBNAIL}
            alt={`${name} preview`}
            fill
            className="object-cover"
          />
        </div>

        <div className="min-w-0 flex-1 space-y-3">
          <div className="space-y-1">
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <span className="font-mono text-xs text-zinc-400">{index}</span>
              <h2 className="font-semibold text-zinc-900">{name}</h2>
              <ProjectPath slug={slug} />
            </div>
            <p className="font-medium text-accent">{tagline}</p>
            <p className="font-mono text-xs text-zinc-500">
              {role} · {duration}
            </p>
          </div>

          {readmore ? (
            <Link
              href={`/projects/${slug}`}
              className="inline-block font-mono text-sm text-accent underline decoration-accent/40 underline-offset-4 transition-colors hover:decoration-accent"
            >
              View project &rarr;
            </Link>
          ) : (
            <>
              <p className="font-mono text-xs text-zinc-500">
                <StatusLabel status={status} />
              </p>
            </>
          )} 
        </div>
      </div>
    </article>
  );
}
