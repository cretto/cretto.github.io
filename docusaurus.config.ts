import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Henrique Anacretto Pereira",
  tagline: "Engineering Portfolio",
  favicon: "img/favicon.ico",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: "https://cretto.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "cretto", // Usually your GitHub org/user name.
  projectName: "cretto.github.io", // Usually your repo name.

  deploymentBranch: "gh-pages",

  onBrokenLinks: "throw",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    logo: {
      alt: "Logo",
      src: "img/logo.svg",
    },
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "Henrique Anacretto Pereira",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "doc",
          docId: "about/index",
          label: "About",
          position: "left",
        },
        // {
        //   type: "doc",
        //   docId: "projects/index",
        //   label: "Projects",
        //   position: "left",
        // },
        {
          type: "doc",
          docId: "engineering/index",
          label: "Engineering",
          position: "left",
        },
        // {
        //   type: "doc",
        //   docId: "articles/index",
        //   label: "Articles",
        //   position: "left",
        // },
        {
          href: "https://github.com/cretto",
          label: "GitHub",
          position: "right",
        },
        {
          href: "https://www.linkedin.com/in/henrique-anacretto-pereira",
          label: "LinkedIn",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Projects",
          items: [
            {
              label: "Engineering Portfolio",
              to: "/docs/projects",
            },
          ],
        },
        {
          title: "Professional",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/cretto",
            },
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/in/henrique-anacretto-pereira/",
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Henrique Anacretto Pereira`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,

  markdown: {
    mermaid: true,
  },

  themes: ["@docusaurus/theme-mermaid"],
};

export default config;
