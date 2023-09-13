import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "./ui/card";

const CardContainer = ({ title, description, children }) => {
  return (
    <div className="flex justify-center pt-2">
      <Card className="w-[600px] h-fit">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>{children}</CardContent>
      </Card>
    </div>
  );
};

export default CardContainer;
