import Link from "next/link";
import ContactLinks from "./_components/ContactLinks";
import DirectoryPath from "./_components/DirectoryPath";
import ProjectEntry from "./_components/ProjectEntry";
import Tag from "./_components/Tag";

export default function Home() {
  return (
    <>
      <section id="me" className="scroll-mt-20">
        <p className="mb-3 font-mono text-sm text-zinc-500">
          <DirectoryPath path="me" />
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl">
          Plamen Georgiev
        </h1>
        <p className="mt-3 text-lg text-zinc-600">
          Senior Software Engineer · backend systems &amp; cloud
        </p>

        <div className="mt-8 space-y-4 leading-7 text-zinc-700">
          <p>
            I build scalable backend systems and cloud-native applications
            with Python, AWS and GCP. My focus is on{" "}
            <span className="font-medium text-zinc-900">API design</span>,
            distributed systems and{" "}
            <span className="font-medium text-zinc-900">
              long-term maintainability
            </span>
            : systems that are simple, reliable and easy to evolve, applying
            SOLID, DRY and clean architecture where they actually matter.
          </p>
          <p>
            Outside my main stack, I build end-to-end products like{" "}
            <Link
              href="/projects/wallethistory"
              className="font-medium text-accent underline decoration-accent/40 underline-offset-4 transition-colors hover:decoration-accent"
            >
              WalletHistory
            </Link>
            , a personal finance platform I first built in 2020 with PHP and
            Android, and later rewrote as a self-hostable Next.js and
            PostgreSQL app. Away from the keyboard, I play chess, travel and
            play board games with friends.
          </p>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          <Tag>Python</Tag>
          <Tag>distributed systems</Tag>
          <Tag>AWS</Tag>
          <Tag>GCP</Tag>
          <Tag>Kubernetes</Tag>
          <Tag>Docker</Tag>
          <Tag>Terraform</Tag>
        </div>

        <div className="mt-8">
          <ContactLinks />
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
            summary="Source-available finance tracker for budgets, goals and reports, hosted or self-hosted with Docker."
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
            summary="Platform for creating, managing and solving crossword puzzles."
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
            <span className="font-medium text-zinc-900">
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

          <ContactLinks />
        </div>
      </section>
    </>
  );
}
