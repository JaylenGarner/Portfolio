import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "./ui/card";

const CardContainer = ({ title, description, children }) => {
  return (
    <Card className="break-1:w-[600px] h-fit max-break-1:w-[500px] max-break-2:[400px]">
      <CardHeader className="max-break-2:[400px]">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent >
        {children}
      </CardContent>
    </Card>
  );
};

export default CardContainer;
