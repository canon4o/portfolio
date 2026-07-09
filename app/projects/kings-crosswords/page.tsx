import type { Metadata } from "next";
import ProjectDetail from "../../_components/ProjectDetail";

export const metadata: Metadata = {
  title: "Kings Crosswords",
  description:
    "Platform supporting puzzle creation, management, and solving.",
};

export default function KingsCrosswordsPage() {
  return (
    <ProjectDetail
      slug="kings-crosswords"
      name="Kings Crosswords"
      tagline="Puzzle creation & solving platform"
      description="Platform supporting puzzle creation, management, and solving."
      role="Full-stack Developer"
      duration="TBD"
      status="archived"
    />
  );
}
