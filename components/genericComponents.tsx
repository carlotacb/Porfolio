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
        <p className={"italic text-center text-gray-400 mt-2 px-6"}>
          {subtitle}
        </p>
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
