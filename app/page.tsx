import DirectoryPath from "./_components/DirectoryPath";

export default function Home() {
  return (
    <>
      <h1 className="mb-6 font-mono text-2xl">
        <DirectoryPath path="me" />
      </h1>
      <p className="leading-7 text-zinc-700">
        Hi, I&apos;m <span className="font-medium text-zinc-900">Plamen Georgiev</span>
        . I build software — this is my corner of the web at{" "}
        <span className="font-mono text-sm">
          <span className="text-accent">dev</span>
          <span className="text-zinc-900">georgiev</span>
          <span className="text-zinc-400">.com</span>
        </span>
        .
      </p>
    </>
  );
}
