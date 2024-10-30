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

export const Projects = () => {
  return (
    <>
      <TitleSection
        color={"blue"}
        textColor={"Some"}
        textNoColor={"projects 👩🏻‍💻"}
      />
      <div className="flex flex-col items-center gap-8">
        Here will be some of the projects I have worked on
      </div>
    </>
  );
};
