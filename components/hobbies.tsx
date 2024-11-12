import { Chip } from "@nextui-org/react";

import {
  ContentBlock,
  HobbieItem,
  TitleSectionReverse,
} from "@/components/genericComponents";

export const Hobbies = () => {
  return (
    <div>
      <TitleSectionReverse
        color={"cyan"}
        textColor={"& Interests"}
        textNoColor={"Hobbies"}
      />
      <div className="flex flex-col items-center gap-8 container px-6">
        <ContentBlock>
          <div className="flex flex-wrap gap-10 justify-center mt-4 mb-9">
            <HobbieItem icon={"map"} text={"Travelling"} />
            <HobbieItem
              icon={"boat"}
              link={
                "https://www.transportes.gob.es/marina-mercante/titulaciones/titulaciones-de-recreo/titulos/patron-de-embarcaciones-recreo/patron-de-embarcaciones-de-recreo-per"
              }
              linkText={"PER title"}
              text={"Sailing - "}
            />
            <HobbieItem icon={"car"} text={"Car driving"} />
            <HobbieItem icon={"motorbike"} text={"Motorbike driving"} />
            <HobbieItem icon={"camara"} text={"Photography"} />
            <HobbieItem icon={"dancer"} text={"Dancing"} />
            <HobbieItem icon={"skiing"} text={"Skiing"} />
            <HobbieItem icon={"piano"} text={"Piano"} />
            <HobbieItem icon={"guitar"} text={"Guitar"} />
            <HobbieItem icon={"soccer"} text={"Soccer"} />
            <HobbieItem icon={"events"} text={"Organize events"} />
          </div>
        </ContentBlock>
      </div>
    </div>
  );
};