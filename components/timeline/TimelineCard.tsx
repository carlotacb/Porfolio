import { Button, useDisclosure } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

import { TimelineItem } from "@/public/data/Timeline";
import { ModalInformation } from "@/components/timeline/ModalInformation";
import { TimelineIcon } from "@/components/timeline/TimelineIcon";

export function TimelineCard(props: TimelineItem) {
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

      <ModalInformation
        company={company}
        description={description}
        icon={icon}
        instagram={instagram}
        isOpen={isOpen}
        linkedin={linkedin}
        position={position}
        website={website}
        onClose={onClose}
      />
    </>
  );
}
