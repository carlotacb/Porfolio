import {
  faBirthdayCake,
  faGraduationCap,
  faLaptopCode,
  faMap,
  faMusic,
  faPeopleGroup,
  faPersonChalkboard,
  faPizzaSlice,
} from "@fortawesome/free-solid-svg-icons";

import {
  CardWithText,
  ContentBlock,
  ItemWithIcon,
  TitleSection,
} from "@/components/genericComponents";

export const Timeline = () => {
  return (
    <>
      <TitleSection
        color={"blue"}
        textColor={"My"}
        textNoColor={"timeline ⏳"}
      />
      <div className="flex flex-col items-center gap-8">
        Here will be my timeline
      </div>
    </>
  );
};
