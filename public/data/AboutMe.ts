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

function ageFrom(birth: Date): number {
  const today = new Date();
  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  return age;
}

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
    cardText: `I was born on May 7, 1996, in Barcelona, and I am the eldest of three siblings. I am currently a PhD student at the Universitat Politècnica de Catalunya (UPC), where I am part of the GESSI research group. Alongside my research, I work as an adjunct professor at both UPC and ESADE. <br/> <br/> I am also a Software Engineer, holding a Master’s degree in Informatics Engineering from UPC (FIB). In addition, I am part of the Major League Hacking Coach program, going to hackathons all over the world to help the organizers run the event smoothly and hackers to create amazing projects.`,
    items: [
      {
        icon: faBirthdayCake,
        targetNumber: ageFrom(new Date(1996, 4, 7)),
        text: "years old",
      },
      {
        icon: faGraduationCap,
        text: "Master's",
      },
      {
        icon: faLaptopCode,
        targetNumber: ageFrom(new Date(2017, 7, 11)),
        text: "years working",
      },
      {
        icon: faPersonChalkboard,
        targetNumber: ageFrom(new Date(2021, 2, 24)),
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
        targetNumber: ageFrom(new Date(2001, 10, 1)),
        text: "years dancing",
      },
      {
        icon: faTerminal,
        targetNumber: 21,
        text: "hackathons",
        link: "https://myhacks.carlotacb.dev/",
      },
      {
        icon: faPeopleGroup,
        targetNumber: 11,
        text: "org. hackathons",
        link: "https://myhacks.carlotacb.dev/",
      },
    ],
  },
];
