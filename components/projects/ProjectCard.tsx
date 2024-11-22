import {
  Button,
  Card,
  CardFooter,
  CardHeader,
  Chip,
  Image,
} from "@nextui-org/react";
import {
  faArrowUpRightFromSquare,
  faGamepad,
  faGlobe,
  faLaptopCode,
  faMobileScreenButton,
  faTabletScreenButton,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { IconWithTooltip } from "@/components/projects/IconWithTooltip";

function getTypeChip(type: "Game" | "WebApp" | "Website" | "App" | "Other") {
  let colorVar = "";
  let iconVar = faLaptopCode;

  if (type === "Website") {
    iconVar = faGlobe;
    colorVar = "bg-green-400";
  } else if (type === "App") {
    colorVar = "bg-orange-400";
    iconVar = faMobileScreenButton;
  } else if (type === "Game") {
    iconVar = faGamepad;
    colorVar = "bg-red-400";
  } else if (type === "WebApp") {
    colorVar = "bg-blue-400";
    iconVar = faTabletScreenButton;
  }

  return (
    <Chip
      classNames={{ base: colorVar }}
      radius="sm"
      size="sm"
      startContent={<FontAwesomeIcon className="mr-2 ml-1" icon={iconVar} />}
      variant="shadow"
    >
      {type}
    </Chip>
  );
}

export function ProjectCard(props: {
  type: "Game" | "WebApp" | "Website" | "App" | "Other";
  projectName: string;
  Languages: {
    icon: string;
    tooltip: string;
  }[];
  img: string;
  description: string;
  GHLink: string;
}) {
  const { type, projectName, Languages, img, description, GHLink } = props;

  return (
    <Card isFooterBlurred className="w-[350px] h-auto">
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        <div className="flex gap-2">
          {getTypeChip(type)}
          {Languages.map((lang) => (
            <IconWithTooltip
              key={lang.tooltip}
              iconPath={lang.icon}
              tooltipText={lang.tooltip}
            />
          ))}
        </div>
        <h4 className="text-white/90 font-medium text-xl mt-1">
          {projectName}
        </h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Relaxing app background"
        className="z-0 w-full h-full object-cover"
        src={`/imgs/projects/${img}`}
      />
      <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
        <p className="text-tiny text-white/60 ml-2">{description}</p>
        <div>
          <a href={GHLink} rel="noreferrer" target="_blank">
            <Button
              className="px-4 ml-2"
              size="sm"
              startContent={
                <img
                  alt="git"
                  className={"size-5"}
                  src="/icons/misc/github.svg"
                />
              }
              variant="shadow"
            >
              Code <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xs" />
            </Button>
          </a>
        </div>
      </CardFooter>
    </Card>
  );
}
