import { Icon } from "@iconify/react";

import styles from "./styles.module.css";

type Skill = {
  name: string;
  icon?: React.ReactNode;
};

const skills: Skill[] = [
  {
    name: "TypeScript",
    icon: <Icon icon="simple-icons:typescript" width={28} />,
  },
  {
    name: "Node.js",
    icon: <Icon icon="simple-icons:nodedotjs" width={28} />,
  },
  {
    name: "React",
    icon: <Icon icon="simple-icons:react" width={28} />,
  },
  {
    name: "AWS",
    icon: <Icon icon="simple-icons:amazonwebservices" width={28} />,
  },
  {
    name: "Terraform",
    icon: <Icon icon="simple-icons:terraform" width={28} />,
  },
  {
    name: "Docker",
    icon: <Icon icon="simple-icons:docker" width={28} />,
  },
  {
    name: "Pulumi",
    icon: <Icon icon="simple-icons:pulumi" width={28} />,
  },
  {
    name: "PostgreSQL",
    icon: <Icon icon="simple-icons:postgresql" width={28} />,
  },
  {
    name: "Serverless",
    icon: <Icon icon="simple-icons:serverless" width={28} />,
  },
  {
    name: "Python",
    icon: <Icon icon="simple-icons:python" width={28} />,
  },
  {
    name: "Distributed Systems",
  },
  {
    name: "Event-Driven",
  },
  {
    name: "Engineering Leadership",
  },
];

export default function Skills() {
  return (
    <section className={styles.skills}>
      <div className="container">
        <h2>Core Expertise</h2>

        <div className={styles.grid}>
          {skills.map((skill) => (
            <div key={skill.name} className={styles.card}>
              {skill.icon}
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
