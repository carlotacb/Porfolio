import { ContentBlock, TitleSection } from "@/components/genericComponents";
import { CardWithText } from "@/components/about-me/cardWithText";
import { ItemWithIcon } from "@/components/about-me/itemWithIcon";
import { aboutBlocks } from "@/public/data/AboutMe";

export const AboutMe = () => {
  return (
    <>
      <TitleSection color={"cyan"} textColor={"About"} textNoColor={"me 🙋🏽‍♀️"} />
      <div className="flex flex-col items-center gap-8 container px-6">
        {aboutBlocks.map((block) => (
          <ContentBlock key={block.index}>
            <CardWithText text={block.cardText} />
            <div className="grid gap-6 grid-cols-2 sm:grid-cols-4">
              {block.items.map((item) => (
                <ItemWithIcon
                  key={item.text}
                  icon={item.icon}
                  link={item.link ? item.link : undefined}
                  targetNumber={
                    item.targetNumber ? item.targetNumber : undefined
                  }
                  text={item.text}
                />
              ))}
            </div>
          </ContentBlock>
        ))}
      </div>
    </>
  );
};
