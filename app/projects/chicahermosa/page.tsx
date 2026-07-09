import type { Metadata } from "next";
import ProjectDetail from "../../_components/ProjectDetail";

export const metadata: Metadata = {
  title: "ChicaHermosa",
  description:
    "WordPress and WooCommerce e-commerce platform for online retail.",
};

export default function ChicaHermosaPage() {
  return (
    <ProjectDetail
      slug="chicahermosa"
      name="ChicaHermosa"
      tagline="E-Commerce store"
      description="WordPress and WooCommerce e-commerce platform for online retail."
      role="Wordpress Developer"
      duration="2025 to now"
      status="active"
      stack={["WordPress", "WooCommerce", "PHP"]}
    />
  );
}
