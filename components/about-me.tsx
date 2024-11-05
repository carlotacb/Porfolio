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

import {
  CardWithText,
  ContentBlock,
  ItemWithIcon,
  TitleSection,
} from "@/components/genericComponents";

export const AboutMe = () => {
  return (
    <>
      <TitleSection color={"blue"} textColor={"About"} textNoColor={"me 🙋🏽‍♀️"} />
      <div className="flex flex-col items-center gap-8 container px-6">
        <ContentBlock>
          <CardWithText
            text={`I was born on May 7, 1996, in Barcelona, the eldest of 3 siblings. I'm a Software Engineer graduated with a Master’s degree in Informatics Engineering at UPC, UPC‑FIB associate professor of Web Services and Applications. Extracurricular had been the HackUPC director for 2 years, currently helping out with the development leadership and the finances. Since I left my last job I've been travelling around to learn more about culture, English and finding a way to improve my career by building something my own.`}
          />
          <div className="grid gap-6 grid-cols-2 sm:grid-cols-4">
            <ItemWithIcon
              icon={faBirthdayCake}
              targetNumber={new Date().getFullYear() - 1996}
              text={`years old`}
            />
            <ItemWithIcon icon={faGraduationCap} text={`Master's`} />
            <ItemWithIcon
              icon={faLaptopCode}
              targetNumber={new Date().getFullYear() - 2017 + 1}
              text={`years working`}
            />
            <ItemWithIcon
              icon={faPersonChalkboard}
              targetNumber={new Date().getFullYear() - 2021 + 1}
              text={`years teaching`}
            />
          </div>
        </ContentBlock>
        <ContentBlock>
          <CardWithText
            text={`I describe myself as a fast learner and a good problem solver, and I enjoy learning new things and taking on new challenges. I’m keen to assume responsibilities and lead tasks, as I consider myself a good leader from various experiences, like working in big teams, leading with stakeholders, and leading a 20+ member team at HackUPC. <br /><br /> In my free time have many hobbies: I love dancing (especially ballet), playing the piano and the guitar, working on my projects, and creating and editing videos, taking photos or creating social media stuff. I also love travelling and spending time with my family and friends.`}
          />
          <div className="grid gap-6 grid-cols-2 sm:grid-cols-4">
            <ItemWithIcon
              icon={faMap}
              link={"https://share.skratch.world/GH1ElhRyyg/visited"}
              targetNumber={33}
              text={`countries`}
            />
            <ItemWithIcon
              icon={faMusic}
              targetNumber={new Date().getFullYear() - 2001}
              text={`years dancing`}
            />
            <ItemWithIcon
              icon={faTerminal}
              targetNumber={20}
              text={`hackathons`}
            />
            <ItemWithIcon
              icon={faPeopleGroup}
              targetNumber={12}
              text={`organized hacks`}
            />
          </div>
        </ContentBlock>
      </div>
    </>
  );
};
