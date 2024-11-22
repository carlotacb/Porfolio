import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faBirthdayCake,
  faGraduationCap,
  faLaptopCode,
  faMap,
  faMusic,
  faPeopleGroup,
  faPersonChalkboard,
  faTerminal,
} from "@fortawesome/free-solid-svg-icons";

export interface IconItem {
  icon: IconProp;
  text: string;
  targetNumber?: number;
  link?: string;
}

interface AboutBlock {
  index: number;
  cardText: string;
  items: IconItem[];
}

export const aboutBlocks: AboutBlock[] = [
  {
    index: 0,
    cardText: `I was born on May 7, 1996, in Barcelona, the eldest of three siblings. I'm a Software Engineer with a <b>Master’s in Informatics Engineering</b> at UPC (FIB). Currently, I'm working as an associate professor. Since I left my last job, I've been traveling around the world to learn more about different cultures, improve my English, and find a way to grow my career by building projects on my own. In my university life, I've been part of the HackUPC organizing team with a lot of roles, the most important one was co-directing for two years, and now in my last year, helping the new team with leadership and finances.`,
    items: [
      {
        icon: faBirthdayCake,
        targetNumber: new Date().getFullYear() - 1996,
        text: "years old",
      },
      {
        icon: faGraduationCap,
        text: "Master's",
      },
      {
        icon: faLaptopCode,
        targetNumber: new Date().getFullYear() - 2017 + 1,
        text: "years working",
      },
      {
        icon: faPersonChalkboard,
        targetNumber: new Date().getFullYear() - 2021 + 1,
        text: "years teaching",
      },
    ],
  },
  {
    index: 1,
    cardText: `I describe myself as a <b>fast learner and a good problem solver</b>, and I enjoy learning new things and taking on new challenges. I’m keen to assume responsibilities and lead tasks, as I consider myself a good leader from various experiences, like working in big teams, leading with stakeholders, and leading a 20+ member team at HackUPC. <br /><br /> In my free time, I have many hobbies: I love dancing (especially ballet), playing the piano and the guitar, working on my projects, creating and editing videos, taking photos, and creating social media stuff. I also love traveling and spending time with my family and friends.`,
    items: [
      {
        icon: faMap,
        link: "https://share.skratch.world/GH1ElhRyyg/visited",
        targetNumber: 34,
        text: "countries",
      },
      {
        icon: faMusic,
        targetNumber: new Date().getFullYear() - 2001,
        text: "years dancing",
      },
      {
        icon: faTerminal,
        targetNumber: 20,
        text: "hackathons",
      },
      {
        icon: faPeopleGroup,
        targetNumber: 12,
        text: "organized hackathons",
      },
    ],
  },
];
