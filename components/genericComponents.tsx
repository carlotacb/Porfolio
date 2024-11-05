import {
  Card,
  CardBody,
  CardHeader,
  Tooltip,
  CardFooter,
  Image,
  Chip,
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
} from "@nextui-org/react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef } from "react";
import {
  faArrowUpRightFromSquare,
  faGamepad,
  faGlobe,
  faInfoCircle,
  faLaptopCode,
  faMobileScreenButton,
  faTabletScreenButton,
} from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import { title } from "@/components/primitives";
import { TimelineItem } from "@/public/data/Timeline";

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

  return <div className="max-w-3xl">{children}</div>;
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
              iconPath={`/icons/${lang.icon}.svg`}
              size={"size-6"}
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
          <Button
            className="px-4 ml-2"
            endContent={<img alt="git" src="/icons/misc/github.svg" />}
            href={GHLink}
            rel="noreferrer"
            size="sm"
            target="_blank"
            variant="shadow"
          >
            Code
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}

export function TimelineIcon(props: { logoFileName: string }) {
  const { logoFileName } = props;

  return (
    <div
      className={`flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-400 group-[.is-active]:bg-sky-200 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2`}
    >
      <img
        alt={logoFileName}
        className={"w-[60%]"}
        src={`/imgs/timeline/${logoFileName}.webp`}
      />
    </div>
  );
}

export function TimelinePoint(props: TimelineItem) {
  const {
    active,
    company,
    position,
    startDate,
    endDate,
    description,
    icon,
    website,
    instagram,
    linkedin,
  } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <div
        className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group ${active ? "is-active" : null}`}
      >
        <TimelineIcon logoFileName={icon} />
        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-default group-[.is-active]:dark:bg-sky-950 group-[.is-active]:bg-sky-200 p-4 rounded shadow">
          <div className={"flex justify-end"}>
            <time className="font-caveat font-medium text-sm italic">
              {startDate} - {endDate ? endDate : "Present"}
            </time>
          </div>
          <div className="flex items-center justify-between space-x-2 mt-[-14px]">
            <div className={"flex flex-col"}>
              <div className={"font-bold text-sky-600 text-lg"}>{company}</div>
              <p className="text-sm">{position}</p>
            </div>
          </div>
          <div className="flex justify-end items-center">
            <Button
              isIconOnly
              color={"primary"}
              variant={"solid"}
              onPress={onOpen}
            >
              <FontAwesomeIcon icon={faInfoCircle} />
            </Button>
          </div>
        </div>
      </div>

      <Modal backdrop={"blur"} isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          <div className="py-4 px-1">
            <ModalHeader className="flex gap-3 items-center">
              <img
                alt={icon}
                className={"w-12"}
                src={`/imgs/timeline/${icon}.webp`}
              />
              <div className={"flex flex-col"}>
                <p className="text-xl">{company}</p>
                <p className="text-sm font-light italic text-gray-700 dark:text-gray-400">
                  {position}
                </p>
              </div>
            </ModalHeader>
            <ModalBody>
              <p dangerouslySetInnerHTML={{ __html: description }} />
              <div className="flex justify-end gap-4">
                {website ? (
                  <a
                    className="cursor-pointer"
                    href={website}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faGlobe} size="xl" />
                  </a>
                ) : null}
                {instagram ? (
                  <a
                    className="cursor-pointer"
                    href={instagram}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faInstagram} size="xl" />
                  </a>
                ) : null}
                {linkedin ? (
                  <a
                    className="cursor-pointer"
                    href={linkedin}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faLinkedin} size="xl" />
                  </a>
                ) : null}
              </div>
            </ModalBody>
          </div>
        </ModalContent>
      </Modal>
    </>
  );
}
