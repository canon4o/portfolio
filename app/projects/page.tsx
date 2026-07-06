import DirectoryPath from "../_components/DirectoryPath";

export default function ProjectsPage() {
  return (
    <>
      <h1 className="mb-6 font-mono text-2xl">
        <DirectoryPath path="projects" />
      </h1>
      <p className="leading-7 text-zinc-700">
        Projects will be listed here. Add your work as you build it out.
      </p>
    </>
  );
}
