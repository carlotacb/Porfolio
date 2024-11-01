import {
  Card,
  CardBody,
  CardHeader,
  Tooltip,
  CardFooter,
  Image,
  Chip,
} from "@nextui-org/react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef } from "react";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

import { title } from "@/components/primitives";

export function TitleSection(props: {
  color:
    | "violet"
    | "yellow"
    | "blue"
    | "cyan"
    | "green"
    | "pink"
    | "foreground";
  textColor: string;
  textNoColor: string;
}) {
  const { textColor, textNoColor, color } = props;

  return (
    <div className="flex justify-center mb-10">
      <span className={title({ color: color, size: "md" })}>
        {textColor}&nbsp;
      </span>
      <span className={title({ size: "md" })}>{textNoColor}</span>
    </div>
  );
}

export function TitleSectionReverse(props: {
  color:
    | "violet"
    | "yellow"
    | "blue"
    | "cyan"
    | "green"
    | "pink"
    | "foreground";
  textColor: string;
  textNoColor: string;
}) {
  const { textColor, textNoColor, color } = props;

  return (
    <div className="flex justify-center mb-10">
      <span className={title({ size: "sm" })}>{textNoColor}&nbsp;</span>
      <span className={title({ color: color, size: "sm" })}>{textColor}</span>
    </div>
  );
}

export function CardWithText(props: { text: string }) {
  const { text } = props;

  return (
    <Card className="mb-10">
      <CardBody className="p-8">
        <div
          dangerouslySetInnerHTML={{ __html: text }}
          className="leading-7 text-justify"
        />
      </CardBody>
    </Card>
  );
}

export function ContentBlock(props: { children: any }) {
  const { children } = props;

  return <div className="max-w-2xl">{children}</div>;
}

export function ItemWithIcon(props: {
  icon: IconProp;
  text: string;
  targetNumber?: number;
  link?: string;
}) {
  const { icon, text, targetNumber, link } = props;
  const counterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (counterRef.current && targetNumber) {
      // Set the CSS variable to the target number
      counterRef.current.style.setProperty(
        "--countNum",
        targetNumber.toString(),
      );
    }
  }, [targetNumber]);

  return (
    <div className="flex-1 h-full flex flex-col justify-center gap-4 max-w-md">
      <div className="flex justify-center items-center">
        <FontAwesomeIcon icon={icon} size="2x" />
        {targetNumber ? (
          <span
            ref={counterRef}
            className="ml-5 text-3xl animate-[counter_10s_ease-out_forwards] tabular-nums [counter-set:_num_var(--countNum)] before:content-[counter(num)]"
          >
            <span className="sr-only">{targetNumber}</span>
          </span>
        ) : null}
      </div>
      {link ? (
        <div className="text-center">
          <a
            className="text-base hover:font-bold hover:text-blue-400"
            href={link}
            rel="noreferrer"
            target="_blank"
          >
            {text}
            <FontAwesomeIcon
              className="ml-2"
              icon={faArrowUpRightFromSquare}
              size="xs"
            />
          </a>
        </div>
      ) : (
        <div className="text-center">
          <div className="text-base">{text}</div>
        </div>
      )}
    </div>
  );
}

export function IconWithTooltip(props: {
  iconPath: string;
  tooltipText: string;
  size?: string;
}) {
  const { iconPath, tooltipText, size = "size-14" } = props;

  return (
    <Tooltip
      closeDelay={1000}
      color={"foreground"}
      content={tooltipText}
      offset={10}
      showArrow={true}
    >
      <img alt={tooltipText} className={size} src={iconPath} />
    </Tooltip>
  );
}

export function ProjectCard(props: {
  type: "Game" | "WebApp" | "Website" | "App" | "Other";
  projectName: string;
  LanguagesIcons: string[];
  img: string;
  description: string;
  GHLink: string;
}) {
  const { type, projectName, LanguagesIcons, img, description, GHLink } = props;

  return (
    <Card isFooterBlurred className="w-[350px] h-auto">
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        <div className="flex gap-2">
          <Chip radius="sm" size="sm" variant="solid">
            {type}
          </Chip>
          {LanguagesIcons.map((icon) => (
            <IconWithTooltip
              key={icon}
              iconPath={`/icons/${icon}.svg`}
              size={"size-6"}
              tooltipText={icon}
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
        <div className="flex justify-between gap-4">
          <p className="text-tiny text-white/60 ml-2">{description}</p>
          <a
            className="cursor-pointer"
            href={GHLink}
            rel="noreferrer"
            target="_blank"
          >
            <img alt="git" className="size-14" src="/icons/misc/github.svg" />
          </a>
        </div>
      </CardFooter>
    </Card>
  );
}
