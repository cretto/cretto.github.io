import styles from "./styles.module.css";

const skills = [
  "TypeScript",
  "Node.js",
  "React",
  "AWS",
  "Terraform",
  "Docker",
  "Kubernetes",
  "PostgreSQL",
  "Serverless",
  "Distributed Systems",
  "Event-Driven",
  "Engineering Leadership",
];

export default function Skills() {
  return (
    <section className={styles.skills}>
      <div className="container">
        <h2>Core Expertise</h2>

        <div className={styles.grid}>
          {skills.map((skill) => (
            <span key={skill} className={styles.card}>
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
