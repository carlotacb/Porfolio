import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
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
  subtitle?: string;
}) {
  const { textColor, textNoColor, color, subtitle } = props;

  return (
    <div className={"mb-10"}>
      <div className="flex justify-center">
        <span className={title({ color: color, size: "md" })}>
          {textColor}&nbsp;
        </span>
        <span className={title({ size: "md" })}>{textNoColor}</span>
      </div>
      {subtitle ? (
        <p className={"italic text-center text-gray-400 mt-2"}>{subtitle}</p>
      ) : null}
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

export function ContentBlock(props: { children: any }) {
  const { children } = props;

  return <div className="max-w-3xl">{children}</div>;
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
        <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2.5rem)] bg-default group-[.is-active]:dark:bg-sky-950 group-[.is-active]:bg-sky-200 p-4 rounded shadow">
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

      <Modal
        backdrop={"blur"}
        isOpen={isOpen}
        scrollBehavior={"outside"}
        onClose={onClose}
      >
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
