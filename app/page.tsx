import DirectoryPath from "./_components/DirectoryPath";
import ProjectEntry from "./_components/ProjectEntry";
import Tag from "./_components/Tag";
import {
  EmailIcon,
  GitHubIcon,
  LinkedInIcon,
} from "./_components/ContactIcons";

const contactLinks = [
  { label: "email", href: "mailto:plamen91@gmail.com", icon: EmailIcon },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/plamen-georgiev-07337894",
    icon: LinkedInIcon,
  },
  { label: "GitHub", href: "https://github.com/canon4o", icon: GitHubIcon },
];

export default function Home() {
  return (
    <>
      <section id="me" className="scroll-mt-20">
        <h1 className="mb-2 font-mono text-2xl">
          <DirectoryPath path="me" />
        </h1>
        <p className="mb-8 font-medium text-zinc-900">Plamen Georgiev</p>

        <div className="space-y-6 leading-7 text-zinc-700">
          <p className="border-l-2 border-accent pl-4 text-lg leading-8 text-zinc-800">
            I&apos;m a{" "}
            <span className="font-medium text-accent">
              Senior Software Engineer
            </span>{" "}
            focused on building scalable backend systems and cloud-native
            applications.
          </p>

          <div className="space-y-3">
            <p>
              I specialize in Python, backend architecture, distributed
              systems, and cloud infrastructure (AWS, GCP). Likewise, I care
              about designing systems that are simple, reliable, and easy to
              evolve in applying the principles like{" "}
              <span className="font-mono text-sm text-accent">SOLID</span>,{" "}
              <span className="font-mono text-sm text-accent">DRY</span>, and{" "}
              <span className="font-mono text-sm text-accent">
                clean architecture
              </span>{" "}
              where they actually matter.
            </p>
            <div className="flex flex-wrap gap-2">
              <Tag>Python</Tag>
              <Tag>distributed systems</Tag>
              <Tag>AWS</Tag>
              <Tag>GCP</Tag>
              <Tag>Kubernetes</Tag>
              <Tag>Docker</Tag>
              <Tag>Terraform</Tag>
            </div>
          </div>

          <p>
            Outside my main stack, I build end-to-end products. One example
            is{" "}
            <span className="rounded bg-accent/8 px-1.5 py-0.5 font-medium text-accent">
              WalletHistory
            </span>
            - a personal finance platform with a PHP 7 + MariaDB backend and
            a native Android app built in Java and Kotlin.
          </p>

          <p>
            I work across the stack when needed, but my focus is always on
            backend systems,{" "}
            <span className="font-medium text-zinc-900">API design</span>,
            and{" "}
            <span className="font-medium text-zinc-900">
              long-term system maintainability
            </span>
            .
          </p>

          <p>
          When I&apos;m not engineering software, I&apos;m usually playing
          chess, traveling, or playing board games with friends.
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            <Tag>chess</Tag>
            <Tag>traveling</Tag>
            <Tag>board games</Tag>
          </div>
        </div>
      </section>

      <hr className="my-12 border-zinc-200" />

      <section id="projects" className="scroll-mt-20">
        <h2 className="mb-2 font-mono text-2xl">
          <DirectoryPath path="projects" />
        </h2>
        <p className="mb-10 text-zinc-500">Selected work, newest first.</p>

        <div className="space-y-10">
          <ProjectEntry
            slug="wallethistory"
            name="WalletHistory"
            tagline="Personal finance platform"
            role="Founder & Full-stack Developer"
            duration="2020 - present"
            status="active"
            thumbnail="/projects/wallethistory-thumbnail.png"
            order={1}
          />
          <ProjectEntry
            slug="kings-crosswords"
            name="Kings Crosswords"
            tagline="Puzzle creation & solving platform"
            role="Full-stack Developer"
            duration="2010 - 2011"
            status="archived"
            thumbnail="/projects/kingscrosswords.png"
            order={0}
            readmore={false}
          />
        </div>
      </section>

      <hr className="my-12 border-zinc-200" />

      <section id="contact-me" className="scroll-mt-20">
        <h2 className="mb-8 font-mono text-2xl">
          <DirectoryPath path="contact-me" />
        </h2>

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
            <span className="font-medium text-zinc-900">WordPress</span> or{" "}
            <span className="font-medium text-zinc-900">WooCommerce</span>{" "}
            site, a business website, a{" "}
            <span className="font-medium text-zinc-900">
              mobile application
            </span>
            , or simply want to connect with a fellow developer, I&apos;d be
            happy to hear from you.
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
      </section>
    </>
  );
}
