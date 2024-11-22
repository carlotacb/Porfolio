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
        iconPath: "/icons/langs/python.svg",
        tooltipText: "Python",
      },
      {
        iconPath: "/icons/langs/js.svg",
        tooltipText: "JavaScript",
      },
      {
        iconPath: "/icons/langs/ts.svg",
        tooltipText: "TypeScript",
      },
      {
        iconPath: "/icons/langs/java.svg",
        tooltipText: "Java",
      },
      {
        iconPath: "/icons/langs/sql.svg",
        tooltipText: "SQL",
      },
      {
        iconPath: "/icons/langs/cplusplus.svg",
        tooltipText: "C++",
      },
      {
        iconPath: "/icons/langs/go.svg",
        tooltipText: "Golang",
      },
    ],
  },
  {
    title: "Frameworks",
    icons: [
      {
        iconPath: "/icons/frameworks/django.svg",
        tooltipText: "Django",
      },
      {
        iconPath: "/icons/frameworks/nextjs.svg",
        tooltipText: "Next.js",
      },
      {
        iconPath: "/icons/frameworks/vuejs.svg",
        tooltipText: "Vue",
      },
    ],
  },
  {
    title: "Miscellaneous",
    icons: [
      {
        iconPath: "/icons/misc/git.svg",
        tooltipText: "Git",
      },
      {
        iconPath: "/icons/misc/html.svg",
        tooltipText: "HTML",
      },
      {
        iconPath: "/icons/misc/css.svg",
        tooltipText: "CSS",
      },
      {
        iconPath: "/icons/misc/styledcomponents.svg",
        tooltipText: "Styled Components",
      },
      {
        iconPath: "/icons/misc/figma.svg",
        tooltipText: "Figma",
      },
      {
        iconPath: "/icons/misc/markdown.svg",
        tooltipText: "Markdown",
      },
      {
        iconPath: "/icons/misc/latex.svg",
        tooltipText: "LaTex",
      },
    ],
  },
  {
    title: "DevOps",
    icons: [
      {
        iconPath: "/icons/devops/aws.svg",
        tooltipText: "Amazon Web Services",
      },
      {
        iconPath: "/icons/devops/gcloud.svg",
        tooltipText: "Google Cloud",
      },
      {
        iconPath: "/icons/devops/docker.svg",
        tooltipText: "Docker",
      },
    ],
  },
  {
    title: "Languages",
    icons: [
      {
        iconPath: "/icons/flags/cat.svg",
        tooltipText: "Catalan",
        chipText: "Native",
      },
      {
        iconPath: "/icons/flags/sp.svg",
        tooltipText: "Spanish",
        chipText: "Native",
      },
      {
        iconPath: "/icons/flags/uk.svg",
        tooltipText: "English",
        chipText: "B2/C1",
      },
      {
        iconPath: "/icons/flags/ger.svg",
        tooltipText: "German",
        chipText: "Basic",
      },
    ],
  },
];
