import classNames from "classnames";
import { Button } from "react-bootstrap";
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
        backgroundColor: settings?.colour,
      }}
      className={classNames(s.root, isSelected && s.selected)}
      onClick={onClick}
      href="#"
      disabled={disabled}
    >
      {text}
      {children}
    </Button>
  );
};
