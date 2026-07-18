import type { ReactNode } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import Hero from "../components/Hero";
import Skills from "../components/Skills";
import FeaturedProjects from "../components/FeaturedProjects";

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`${siteConfig.title}`} description="Engineering Portfolio">
      <Hero />
      <main>
        <Skills />
        <FeaturedProjects />
      </main>
    </Layout>
  );
}
