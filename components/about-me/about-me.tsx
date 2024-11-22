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

import { ContentBlock, TitleSection } from "@/components/genericComponents";
import { CardWithText } from "@/components/about-me/cardWithText";
import { ItemWithIcon } from "@/components/about-me/itemWithIcon";
import {
  age,
  ageLabel,
  countriesVisited,
  countriesVisitedLabel,
  countriesVisitedLink,
  firstCard,
  hackathonsOrganized,
  hackathonsOrganizedLabel,
  hackathonsParticipated,
  hackathonsParticipatedLabel,
  secondCard,
  studies,
  yearsDancing,
  yearsDancingLabel,
  yearsTeaching,
  yearsTeachingLabel,
  yearsWorking,
  yearsWorkingLabel,
} from "@/components/about-me/data";

export const AboutMe = () => {
  return (
    <>
      <TitleSection color={"blue"} textColor={"About"} textNoColor={"me 🙋🏽‍♀️"} />
      <div className="flex flex-col items-center gap-8 container px-6">
        <ContentBlock>
          <CardWithText text={firstCard} />
          <div className="grid gap-6 grid-cols-2 sm:grid-cols-4">
            <ItemWithIcon
              icon={faBirthdayCake}
              targetNumber={age}
              text={ageLabel}
            />
            <ItemWithIcon icon={faGraduationCap} text={studies} />
            <ItemWithIcon
              icon={faLaptopCode}
              targetNumber={yearsWorking}
              text={yearsWorkingLabel}
            />
            <ItemWithIcon
              icon={faPersonChalkboard}
              targetNumber={yearsTeaching}
              text={yearsTeachingLabel}
            />
          </div>
        </ContentBlock>
        <ContentBlock>
          <CardWithText text={secondCard} />
          <div className="grid gap-6 grid-cols-2 sm:grid-cols-4">
            <ItemWithIcon
              icon={faMap}
              link={countriesVisitedLink}
              targetNumber={countriesVisited}
              text={countriesVisitedLabel}
            />
            <ItemWithIcon
              icon={faMusic}
              targetNumber={yearsDancing}
              text={yearsDancingLabel}
            />
            <ItemWithIcon
              icon={faTerminal}
              targetNumber={hackathonsParticipated}
              text={hackathonsParticipatedLabel}
            />
            <ItemWithIcon
              icon={faPeopleGroup}
              targetNumber={hackathonsOrganized}
              text={hackathonsOrganizedLabel}
            />
          </div>
        </ContentBlock>
      </div>
    </>
  );
};
