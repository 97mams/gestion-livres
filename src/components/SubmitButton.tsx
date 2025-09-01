import { Loader2 } from "lucide-react";
import { Button } from "./ui/button";

export const SubmitButton = (props: {
  text: string;
  pending: boolean;
  classname?: string;
}) => {
  return (
    <Button className={props.classname} type="submit">
      {props.pending ? <Loader2 className="animate-spin m-auto" /> : props.text}
    </Button>
  );
};
