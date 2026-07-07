import DirectoryPath from "../_components/DirectoryPath";
import { EmailIcon, GitHubIcon, LinkedInIcon } from "../_components/ContactIcons";

const contactLinks = [
  { label: "email", href: "mailto:hello@example.com", icon: EmailIcon },
  { label: "LinkedIn", href: "https://linkedin.com", icon: LinkedInIcon },
  { label: "GitHub", href: "https://github.com", icon: GitHubIcon },
];

export default function ContactPage() {
  return (
    <>
      <h1 className="mb-8 font-mono text-2xl">
        <DirectoryPath path="contact-me" />
      </h1>

      <div className="space-y-6 leading-7 text-zinc-700">
        <p className="border-l-2 border-accent pl-4 text-lg leading-8 text-zinc-800">
          I&apos;m always interested in discussing new opportunities,
          challenging engineering problems, and innovative ideas.
        </p>

        <p>
          Whether you&apos;re looking for a{" "}
          <span className="font-medium text-accent">
            Senior Software Engineer
          </span>
          , want to talk about{" "}
          <span className="font-medium text-zinc-900">
            backend architecture and distributed systems
          </span>
          , need help with a{" "}
          <span className="font-medium text-zinc-900">
            WordPress
          </span>{" "}
          or{" "}
          <span className="font-medium text-zinc-900">
            WooCommerce
          </span>{" "}
          site, a business website, a{" "}
          <span className="font-medium text-zinc-900">mobile application</span>,
          or simply want to connect with a fellow developer, I&apos;d be happy
          to hear from you.
        </p>

        <p>
          Feel free to reach out through email, LinkedIn, or GitHub, and
          I&apos;ll get back to you as soon as possible.
        </p>

        <p className="pt-2 font-medium">
          Let&apos;s build something great together.
        </p>

        <div className="flex flex-wrap gap-4 font-mono text-sm">
          {contactLinks.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              className="inline-flex items-center gap-1.5 text-accent underline decoration-accent/40 underline-offset-4 transition-colors hover:decoration-accent"
              {...(href.startsWith("http") && {
                target: "_blank",
                rel: "noopener noreferrer",
              })}
            >
              <Icon />
              {label}
            </a>
          ))}
        </div>

      </div>
    </>
  );
}
