import { PropsWithChildren, useState } from 'react';
import { Popup } from "@zonia/ui/components/Popup";

export interface FailureProps {
  /**
   * Prop comment
   */
  text?: string;
}

/**
 * Element comment
 */
function Failure({ text, children }: PropsWithChildren<FailureProps>) {
  const [isOpen, setOpen] = useState(false);

  return <Popup type={"failure"} onReject={() => console.log("REJECT")} rejectText={"CHUJ"}
                onConfirm={() => console.log("BRAWO")} confirmText={"Potwierdzxam"} message={"LOREM IPSUM SIT DOLOR AMET"}
                isOpen={true} onClose={() => console.log("CLOSE")}/>;
}

export default Failure;

Failure.defaultProps = {
  text: "default",
};
Failure.defaultName = 'ZUIFailure';
