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
      thumbnail="/projects/placeholder.png "
      body={[
        "ChicaHermosa is an e-commerce store that sells a variety of products. It is built on WordPress and WooCommerce and is hosted on a shared hosting provider.",
        "I was responsible for the development of the store, including the creation of the product pages, the checkout process and the entire front-end of the store."
      ]} 
      technologyGroups={[
        { label: "Backend", items: ["WordPress", "WooCommerce", "PHP"] },
      ] as const}
      links={{
        website: "https://chicahermosa.bg",
      }}
    />
  );
}
