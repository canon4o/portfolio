import DirectoryPath from "../_components/DirectoryPath";

export default function ContactPage() {
  return (
    <>
      <h1 className="mb-6 font-mono text-2xl">
        <DirectoryPath path="contact-me" />
      </h1>
      <p className="leading-7 text-zinc-700">
        Reach out at{" "}
        <a
          href="mailto:hello@example.com"
          className="text-zinc-900 underline hover:text-zinc-600"
        >
          hello@example.com
        </a>
        .
      </p>
    </>
  );
}
