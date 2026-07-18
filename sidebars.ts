import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  docs: [
    "about/index",
    // {
    //   type: "category",
    //   label: "Projects",
    //   link: {
    //     type: "doc",
    //     id: "projects/index",
    //   },
    //   items: ["projects/event-commerce"],
    // },
    {
      type: "category",
      label: "Engineering",
      link: {
        type: "doc",
        id: "engineering/index",
      },
      items: [
        "engineering/1-philosophy",
        "engineering/2-decision-framework",
        "engineering/3-design-principles",
        // "engineering/2-software-design",
        // "engineering/3-architecture",
        // "engineering/4-quality",
        // "engineering/5-delivery",
        // "engineering/6-cloud",
        // "engineering/7-observability",
        // "engineering/8-security",
        // "engineering/9-ai-assisted-development",
        // "engineering/10-leadership",
      ],
    },
    // {
    //   type: "category",
    //   label: "Articles",
    //   link: {
    //     type: "doc",
    //     id: "articles/index",
    //   },
    //   items: [],
    // },
  ],
};

export default sidebars;
