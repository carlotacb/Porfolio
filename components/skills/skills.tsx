import { Chip } from "@nextui-org/react";

import {
  ContentBlock,
  TitleSectionReverse,
} from "@/components/genericComponents";
import { skills } from "@/public/data/Skills";
import { IconWithTooltipWithChip } from "@/components/skills/IconWithTooltipWithChip";

export const Skills = () => {
  return (
    <div>
      <TitleSectionReverse
        color={"cyan"}
        textColor={"Skills"}
        textNoColor={"My"}
      />
      <div className="flex flex-col items-center gap-8 container px-6">
        <ContentBlock>
          {skills.map((skill) => (
            <div key={skill.title}>
              <Chip color="default" radius={"sm"} size={"lg"} variant="flat">
                {skill.title}
              </Chip>
              <div className="flex flex-wrap gap-8 justify-start mt-4 mb-9">
                {skill.icons.map((icon) => (
                  <IconWithTooltipWithChip
                    key={icon.tooltipText}
                    chipText={icon.chipText}
                    iconPath={icon.iconPath}
                    tooltipText={icon.tooltipText}
                  />
                ))}
              </div>
            </div>
          ))}
        </ContentBlock>
      </div>
    </div>
  );
};
