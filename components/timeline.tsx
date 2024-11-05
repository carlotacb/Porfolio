import { Tab, Tabs } from "@nextui-org/react";
import React from "react";

import { TimelinePoint, TitleSection } from "@/components/genericComponents";
import {
  EducationTimeline,
  ExtraCurricularTimeline,
  ProfessionalTimeline,
} from "@/public/data/Timeline";

export const Timeline = () => {
  const [selected, setSelected] = React.useState("professional");

  return (
    <>
      <TitleSection
        color={"blue"}
        textColor={"My"}
        textNoColor={"timeline ⏳"}
      />

      <div className={"flex flex-col items-center gap-5"}>
        <Tabs
          selectedKey={selected}
          variant={"bordered"}
          onSelectionChange={setSelected}
        >
          <Tab key="professional" title="Working">
            <div className="max-w-7xl px-4 md:min-w-[50rem] lg:min-w-[60rem]">
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
                {ProfessionalTimeline.map((item) => (
                  <TimelinePoint key={item.company} color={"cyan"} {...item} />
                ))}
              </div>
            </div>
          </Tab>
          <Tab key="education" title="Education">
            <div className="max-w-7xl px-4 md:min-w-[50rem] lg:min-w-[60rem]">
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
                {EducationTimeline.map((item) => (
                  <TimelinePoint key={item.company} color={"teal"} {...item} />
                ))}
              </div>
            </div>
          </Tab>
          <Tab key="extra" title="ExtraCurricular">
            <div className="max-w-7xl px-4 md:min-w-[50rem] lg:min-w-[60rem]">
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
                {ExtraCurricularTimeline.map((item) => (
                  <TimelinePoint
                    key={item.company}
                    color={"violet"}
                    {...item}
                  />
                ))}
              </div>
            </div>
          </Tab>
        </Tabs>
      </div>
    </>
  );
};
