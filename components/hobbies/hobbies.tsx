import {
  ContentBlock,
  TitleSectionReverse,
} from "@/components/genericComponents";
import { HobbyItem } from "@/components/hobbies/HobbyItem";
import { hobbiesList } from "@/public/data/Hobbies";

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
            {hobbiesList.map((hobby) => (
              <HobbyItem
                key={hobby.icon}
                icon={hobby.icon}
                link={hobby.link}
                linkText={hobby.linkText}
                text={hobby.text}
              />
            ))}
          </div>
        </ContentBlock>
      </div>
    </div>
  );
};
