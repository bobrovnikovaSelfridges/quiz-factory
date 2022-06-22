import classNames from "classnames";
import { Button } from "react-bootstrap";
import { configurations } from "../../dev/config";
import s from "./btn.module.css";

type Props = {
  text: string;
  onClick: () => void;
  isSelected?: boolean;
  children?: any;
  disabled?: boolean;
  settings?: { width?: number; height?: number; colour?: string };
};

export const Btn = ({
  text,
  onClick,
  children,
  settings,
  disabled,
  isSelected,
}: Props): JSX.Element => {
  return (
    <Button
      style={{
        width: `${settings?.width}px`,
        height: `${settings?.height}px`,
        backgroundColor: configurations.colours.mainBtn,
      }}
      className={classNames(s.root, isSelected && s.selected)}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
      {children}
    </Button>
  );
};
