import { Dispatch, SetStateAction } from "react";
import s from "./select-btn.module.css";

export type Props = {
  selectionSettings: {
    isSelected: boolean;
    setSelection: Dispatch<SetStateAction<boolean>>;
  };
};

export const Selection = (props: Props) => {
  return <div></div>;
};
