import classNames from "classnames";
import { useState } from "react";
import { configurations } from "../../dev/config";
import { Tip as TipType } from "../../store/types";
import { Btn } from "../btn/btn";
import { TipPopover } from "../tip-popover/tip-popover";
import s from "./tip.module.css";

type Props = {
  tip: [string, TipType];
};
export const Tip = (props: Props): JSX.Element => {
  const colour = configurations.colours.tip;
  const [isOpen, setOpen] = useState(false);
  return (
    <Btn
      text={props.tip[1].text}
      onClick={() => setOpen(!isOpen)}
      settings={{ colour }}
    >
      <TipPopover text={props.tip[1].desc} />
    </Btn>
  );
};
