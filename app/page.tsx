import DirectoryPath from "./_components/DirectoryPath";

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-zinc-200 bg-white px-2.5 py-0.5 font-mono text-xs text-zinc-600 transition-colors hover:border-accent/40 hover:text-accent">
      {children}
    </span>
  );
}

export default function Home() {
  return (
    <>
      <h1 className="mb-2 font-mono text-2xl">
        <DirectoryPath path="me" />
      </h1>
      <p className="mb-8 font-medium text-zinc-900">Plamen Georgiev</p>

      <div className="space-y-6 leading-7 text-zinc-700">
        <p className="border-l-2 border-accent pl-4 text-lg leading-8 text-zinc-800">
          I'm a{" "}
          <span className="font-medium text-accent">
            Senior Software Engineer
          </span>{" "}
          focused on building scalable backend systems and cloud-native
          applications.
        </p>

        <div className="space-y-3">
          <p>
            I specialize in Python, backend architecture, distributed systems,
            and cloud infrastructure (AWS, GCP). Likewise, I care about
            designing systems that are simple, reliable, and easy to
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
          Outside my main stack, I build end-to-end products. One example is{" "}
          <span className="rounded bg-accent/8 px-1.5 py-0.5 font-medium text-accent">
            WalletHistory
          </span>
          - a personal finance platform with a PHP 7 + MariaDB backend and a
          native Android app built in Java and Kotlin.
        </p>

        <p>
          I work across the stack when needed, but my focus is always on backend systems,{" "}
          <span className="font-medium text-zinc-900">API design</span>, and{" "}
          <span className="font-medium text-zinc-900">
            long-term system maintainability
          </span>
          .
        </p>

        <p>
          When I'm not engineering software, I'm usually playing
          chess, traveling, or playing board games with friends.
        </p>
        <div className="flex flex-wrap gap-2 pt-1">
          <Tag>chess</Tag>
          <Tag>traveling</Tag>
          <Tag>board games</Tag>
        </div>
      </div>
    </>
  );
}
