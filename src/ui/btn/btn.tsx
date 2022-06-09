import "./btn.css";

type Props = {
  text: string;
  children?: any;
  onClick: () => void;
};

export const Btn = ({ text, onClick, children }: Props): JSX.Element => {
  return (
    <button onClick={onClick} className={"mainButtonTheme"}>
      {text}
      {children}
    </button>
  );
};
