import DirectoryPath from "../_components/DirectoryPath";
import ProjectEntry from "../_components/ProjectEntry";

export default function ProjectsPage() {
  return (
    <>
      <h1 className="mb-2 font-mono text-2xl">
        <DirectoryPath path="projects" />
      </h1>
      <p className="mb-10 text-zinc-500">Selected work, newest first.</p>

      <div className="space-y-10">
        <ProjectEntry
          slug="chicahermosa"
          name="ChicaHermosa"
          tagline="E-Commerce store"
          role="Wordpress Developer"
          duration="2025 - present"
          status="active"
          order={2}
        />
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
    </>
  );
}
