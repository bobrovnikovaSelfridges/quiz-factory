import s from "./btn.module.css";

type Props = {
  text: string;
  onClick: () => void;
  children?: any;
  settings?: { width?: number; height?: number; colour?: string };
};

export const Btn = ({
  text,
  onClick,
  children,
  settings,
}: Props): JSX.Element => {
  return (
    <button
      style={{
        width: `${settings?.width}px`,
        height: `${settings?.height}px`,
        backgroundColor: settings?.colour,
      }}
      onClick={onClick}
      className={s.mainButtonTheme}
    >
      {text}
      {children}
    </button>
  );
};
