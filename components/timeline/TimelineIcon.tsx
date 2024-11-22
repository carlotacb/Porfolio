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
