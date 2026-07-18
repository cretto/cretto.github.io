import Heading from "@theme/Heading";
import Link from "@docusaurus/Link";

import styles from "./styles.module.css";

export default function Hero() {
  return (
    <header className={styles.hero}>
      <div className="container">
        <p className={styles.badge}>Engineering Manager • Software Engineer</p>

        <Heading as="h1" className={styles.title}>
          Henrique Anacretto Pereira
        </Heading>

        <p className={styles.subtitle}>
          Building scalable cloud-native systems with
          <strong> TypeScript</strong>,<strong> Node.js</strong>,
          <strong> React</strong> and
          <strong> AWS</strong>.
        </p>

        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="/docs/projects"
          >
            View Projects
          </Link>

          <Link
            className="button button--secondary button--lg"
            to="/docs/resume"
          >
            Resume
          </Link>
        </div>
      </div>
    </header>
  );
}
