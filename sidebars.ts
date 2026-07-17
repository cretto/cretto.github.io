import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  docs: [
    "about/index",
    {
      type: "category",
      label: "Projects",
      link: {
        type: "doc",
        id: "projects/index",
      },
      items: ["projects/event-commerce"],
    },
    {
      type: "category",
      label: "Engineering",
      link: {
        type: "doc",
        id: "engineering/index",
      },
      items: ["engineering/architecture"],
    },
    {
      type: "category",
      label: "Articles",
      link: {
        type: "doc",
        id: "articles/index",
      },
      items: [],
    },
    "resume/index",
  ],
};

export default sidebars;
