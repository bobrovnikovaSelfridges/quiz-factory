import { useState } from "react";
import { Button, OverlayTrigger, Popover } from "react-bootstrap";
import { configurations } from "../../dev/config";
import { Tip as TipType } from "../../store/types";
import s from "./tip.module.css";

type Props = {
  tip: [string, TipType];
};

export const Tip = (props: Props): JSX.Element => {
  return (
    <OverlayTrigger
      trigger="click"
      placement="right"
      overlay={renderPopover(props.tip[1].desc)}
    >
      <Button
        className={s.root}
        style={{
          backgroundColor: configurations.colours.tip,
        }}
        variant="success"
      >
        {configurations.uiText.titles.tip}
      </Button>
    </OverlayTrigger>
  );
};

const renderPopover = (text: string): React.ReactElement => {
  return (
    <Popover id="popover-basic">
      {/* <Popover.Header as="h3">Popover right</Popover.Header> */}
      <Popover.Body>{text}</Popover.Body>
    </Popover>
  );
};

// render(<Example />);

// export const Tip = (props: Props): JSX.Element => {
//   const colour = configurations.colours.tip;
//   const [isOpen, setOpen] = useState(false);
//   return (
//     <Btn
//       text={props.tip[1].text}
//       onClick={() => setOpen(!isOpen)}
//       settings={{ colour }}
//     >
//       <TipPopover text={props.tip[1].desc} />
//     </Btn>
//   );
// };
