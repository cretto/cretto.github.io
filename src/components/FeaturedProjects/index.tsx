import Link from "@docusaurus/Link";
import styles from "./styles.module.css";

const projects = [
  {
    title: "Event Commerce",
    description: "Scalable event-driven ecommerce platform.",
    link: "/docs/projects/event-commerce",
  },
];

export default function FeaturedProjects() {
  return (
    <section className={styles.projects}>
      <div className="container">
        <h2>Featured Projects</h2>

        <div className={styles.grid}>
          {projects.map((project) => (
            <Link key={project.title} to={project.link} className={styles.card}>
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <span>Read documentation →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
