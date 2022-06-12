import classNames from "classnames";
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
    <button
      disabled={disabled}
      style={{
        width: `${settings?.width}px`,
        height: `${settings?.height}px`,
        backgroundColor: settings?.colour,
      }}
      onClick={onClick}
      className={classNames(s.root, isSelected && s.selected)}
    >
      {text}
      {children}
    </button>
  );
};
