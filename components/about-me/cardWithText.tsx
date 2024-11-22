import { Card, CardBody } from "@nextui-org/react";

export function CardWithText(props: { text: string }) {
  const { text } = props;

  return (
    <Card className="mb-10">
      <CardBody className="p-8">
        <div
          dangerouslySetInnerHTML={{ __html: text }}
          className="leading-7 text-left"
        />
      </CardBody>
    </Card>
  );
}
