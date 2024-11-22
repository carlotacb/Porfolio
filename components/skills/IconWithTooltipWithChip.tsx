import { Chip, Tooltip } from "@nextui-org/react";

import { iconInformation } from "@/public/data/Skills";

export function IconWithTooltipWithChip(props: iconInformation) {
  const { iconPath, tooltipText, chipText } = props;

  return (
    <div className="flex flex-col items-center">
      <Tooltip
        color={"foreground"}
        content={tooltipText}
        offset={10}
        showArrow={true}
      >
        <img
          alt={tooltipText}
          className={"size-14"}
          src={`/icons/${iconPath}.svg`}
        />
      </Tooltip>
      {chipText ? (
        <Chip className={"mt-2"} radius="sm" size="sm" variant="bordered">
          {chipText}
        </Chip>
      ) : null}
    </div>
  );
}
