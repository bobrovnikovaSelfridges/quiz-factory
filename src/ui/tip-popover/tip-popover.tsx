import { useState } from "react";
import { Popover } from "react-bootstrap";
import { configurations } from "../../dev/config";
import { Tip as TipType } from "../../store/types";
import { Description } from "../description/description";
// import s from "./tip-popover.module.css";

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
