import { Chip } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export function HobbyItem(props: {
  icon: string;
  text: string;
  link?: string;
  linkText?: string;
}) {
  const { icon, text, link, linkText } = props;

  return (
    <div className="flex flex-col items-center">
      <img
        alt={icon}
        className="size-16 fill-current dark:invert"
        src={`/icons/hobbies/${icon}.svg`}
      />
      <Chip className="mt-2" radius="sm" size="md" variant="solid">
        {text}{" "}
        {link ? (
          <a
            className="text-base hover:font-bold hover:text-blue-400"
            href={link}
            rel="noreferrer"
            target="_blank"
          >
            {linkText}
            <FontAwesomeIcon
              className="ml-2"
              icon={faArrowUpRightFromSquare}
              size="xs"
            />
          </a>
        ) : null}
      </Chip>
    </div>
  );
}
