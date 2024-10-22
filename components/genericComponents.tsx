import { Card, CardBody } from "@nextui-org/react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef } from "react";

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
      <span className={title({ color: color, size: "sm" })}>
        {textColor}&nbsp;
      </span>
      <span className={title({ size: "sm" })}>{textNoColor}</span>
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
}) {
  const { icon, text, targetNumber } = props;
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
      <div className="text-center">
        <div className="text-base">{text}</div>
      </div>
    </div>
  );
}