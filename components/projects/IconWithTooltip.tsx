import { Tooltip } from "@nextui-org/react";

import { iconInformation } from "@/public/data/Skills";

export function IconWithTooltip(props: iconInformation) {
  const { iconPath, tooltipText } = props;

  return (
    <Tooltip
      color={"foreground"}
      content={tooltipText}
      offset={10}
      showArrow={true}
    >
      <img
        alt={tooltipText}
        className={"size-6"}
        src={`/icons/${iconPath}.svg`}
      />
    </Tooltip>
  );
}
