export interface iconInformation {
  iconPath: string;
  tooltipText: string;
  chipText?: string;
}

interface SkillBlock {
  title: string;
  icons: iconInformation[];
}

export const skills: SkillBlock[] = [
  {
    title: "Programming Languages",
    icons: [
      {
        iconPath: "/langs/python",
        tooltipText: "Python",
      },
      {
        iconPath: "/langs/js",
        tooltipText: "JavaScript",
      },
      {
        iconPath: "/langs/ts",
        tooltipText: "TypeScript",
      },
      {
        iconPath: "/langs/java",
        tooltipText: "Java",
      },
      {
        iconPath: "/langs/sql",
        tooltipText: "SQL",
      },
      {
        iconPath: "/langs/cplusplus",
        tooltipText: "C++",
      },
      {
        iconPath: "/langs/go",
        tooltipText: "Golang",
      },
    ],
  },
  {
    title: "Frameworks",
    icons: [
      {
        iconPath: "/frameworks/django",
        tooltipText: "Django",
      },
      {
        iconPath: "/frameworks/nextjs",
        tooltipText: "Next.js",
      },
      {
        iconPath: "/frameworks/vuejs",
        tooltipText: "Vue",
      },
    ],
  },
  {
    title: "Miscellaneous",
    icons: [
      {
        iconPath: "/misc/git",
        tooltipText: "Git",
      },
      {
        iconPath: "/misc/html",
        tooltipText: "HTML",
      },
      {
        iconPath: "/misc/css",
        tooltipText: "CSS",
      },
      {
        iconPath: "/misc/styledcomponents",
        tooltipText: "Styled Components",
      },
      {
        iconPath: "/misc/figma",
        tooltipText: "Figma",
      },
      {
        iconPath: "/misc/markdown",
        tooltipText: "Markdown",
      },
      {
        iconPath: "/misc/latex",
        tooltipText: "LaTex",
      },
    ],
  },
  {
    title: "DevOps",
    icons: [
      {
        iconPath: "/devops/aws",
        tooltipText: "Amazon Web Services",
      },
      {
        iconPath: "/devops/gcloud",
        tooltipText: "Google Cloud",
      },
      {
        iconPath: "/devops/docker",
        tooltipText: "Docker",
      },
    ],
  },
  {
    title: "Languages",
    icons: [
      {
        iconPath: "/flags/cat",
        tooltipText: "Catalan",
        chipText: "Native",
      },
      {
        iconPath: "/flags/sp",
        tooltipText: "Spanish",
        chipText: "Native",
      },
      {
        iconPath: "/flags/uk",
        tooltipText: "English",
        chipText: "B2/C1",
      },
      {
        iconPath: "/flags/ger",
        tooltipText: "German",
        chipText: "Basic",
      },
    ],
  },
];
