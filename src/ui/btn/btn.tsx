import s from "./btn.module.css";

type Props = {
  text: string;
  onClick: () => void;
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
      className={s.root}
    >
      {text}
      {children}
    </button>
  );
};
