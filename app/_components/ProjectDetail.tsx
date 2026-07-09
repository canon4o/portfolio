import Image from "next/image";
import Link from "next/link";
import {
  DEFAULT_PROJECT_THUMBNAIL,
  type ProjectDetailContent,
  type ProjectStatus,
} from "../_types/project";
import { GitHubIcon, WebsiteIcon } from "./ContactIcons";
import ProjectPath from "./ProjectPath";
import Tag from "./Tag";

const linkClassName =
  "inline-flex items-center gap-1.5 text-accent underline decoration-accent/40 underline-offset-4 transition-colors hover:decoration-accent";

function StatusLabel({ status }: { status: ProjectStatus }) {
  const className =
    status === "active" ? "text-accent" : "text-zinc-400 capitalize";

  return <span className={className}>{status}</span>;
}

export default function ProjectDetail({
  slug,
  name,
  tagline,
  description,
  role,
  duration,
  status,
  stack = [],
  body,
  highlights,
  technologyGroups,
  closing,
  links,
  thumbnail,
}: ProjectDetailContent) {
  const hasExtendedContent =
    body?.length || highlights?.length || technologyGroups?.length || closing;

  return (
    <div className="space-y-6">
      <Link
        href="/projects"
        className="inline-block font-mono text-sm text-zinc-500 transition-colors hover:text-accent"
      >
        <span className="text-accent">←</span> /projects
      </Link>

      <div className="relative aspect-video w-full overflow-hidden rounded-md border border-zinc-200 bg-white">
        <Image
          src={thumbnail ?? DEFAULT_PROJECT_THUMBNAIL}
          alt={`${name} preview`}
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="space-y-3">
        <h1 className="font-mono text-2xl text-zinc-900">
          <ProjectPath
            slug={slug}
            className="font-mono text-2xl text-zinc-900"
          />
        </h1>
        <p className="font-semibold text-zinc-900">{name}</p>
        <p className="font-medium text-accent">{tagline}</p>
        <p className="font-mono text-xs text-zinc-500">
          {role} · {duration} · <StatusLabel status={status} />
        </p>
      </div>

      <div className="space-y-6 leading-7 text-zinc-700">
        <p
          className={
            hasExtendedContent
              ? "border-l-2 border-accent pl-4 text-lg leading-8 text-zinc-800"
              : undefined
          }
        >
          {description}
        </p>

        {body?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}

        {highlights && highlights.length > 0 && (
          <section className="space-y-3">
            <h2 className="font-mono text-sm font-medium text-zinc-900">
              Key Highlights
            </h2>
            <ul className="list-disc space-y-2 pl-5">
              {highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        )}

        {technologyGroups && technologyGroups.length > 0 ? (
          <section className="space-y-4">
            <h2 className="font-mono text-sm font-medium text-zinc-900">
              Details
            </h2>
            {technologyGroups.map((group) => (
              <div key={group.label} className="space-y-2">
                <h3 className="font-mono text-xs text-zinc-500">
                  {group.label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Tag key={item}>{item}</Tag>
                  ))}
                </div>
              </div>
            ))}
          </section>
        ) : (
          stack.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {stack.map((item) => (
                <Tag key={item}>{item}</Tag>
              ))}
            </div>
          )
        )}

        {closing && <p>{closing}</p>}
      </div>

      {links && (links.website || links.github) && (
        <div className="flex flex-col gap-3 font-mono text-sm">
          {links.website && (
            <a
              href={links.website}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClassName}
            >
              <WebsiteIcon />
              {links.website}
            </a>
          )}
          {links.github && (
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClassName}
            >
              <GitHubIcon />
              GitHub
            </a>
          )}
        </div>
      )}
    </div>
  );
}
