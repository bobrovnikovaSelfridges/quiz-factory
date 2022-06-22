import { Popover } from "react-bootstrap";
import { Description } from "../description/description";

type Props = {
  text: string;
};

export const TipPopover = (props: Props): JSX.Element => {
  return (
    <Popover id="popover-basic">
      <Description description={props.text} classname={""} />
    </Popover>
  );
};
