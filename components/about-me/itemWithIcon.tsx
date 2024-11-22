import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { IconItem } from "@/public/data/AboutMe";

export function ItemWithIcon(props: IconItem) {
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
