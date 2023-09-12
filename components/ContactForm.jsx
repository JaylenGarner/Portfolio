import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import CardContainer from "./CardContainer";

const ContactForm = () => {
  return (
    <CardContainer title={"Contact Me"} description={"Let's get in touch!"}>
      <form className="space-y-4 text-center">
        <div className="flex space-x-4">
          <Input
            type="text"
            placeholder="Name"
            className="h-12"
            required
          ></Input>
          <Input type="email" placeholder="Email" className="h-12" required />
        </div>
        <Textarea
          placeholder="Message..."
          className="h-[200px] resize-none"
          required
        ></Textarea>
        <Button type="submit" variant="secondary" className="h-12 w-40">
          Send
        </Button>
      </form>
    </CardContainer>
  );
};

export default ContactForm;
