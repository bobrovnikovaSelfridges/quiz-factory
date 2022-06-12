import React, { useContext } from "react";
import { Btn } from "../btn/btn";
import { QuizContext } from "../../services/quizContext";
import s from "./page-switcher.module.css";

export const PageSwitcher = () => {
  const { states, configurations } = useContext(QuizContext);

  return (
    <div className={s.root}>
      <Btn
        text={"<="}
        onClick={() => {
          switchPage(states.pageNumber, true);
        }}
      />

      <Btn
        text={"next question"}
        onClick={() => {
          switchPage(states.pageNumber);
        }}
      />
    </div>
  );
};

const switchPage = (
  pageNumberData: {
    value: number;
    onChange: React.Dispatch<React.SetStateAction<number>>;
  },
  toPrev = false
) => {
  const newPageNumber = toPrev
    ? pageNumberData.value - 1
    : pageNumberData.value + 1;
  pageNumberData.onChange(newPageNumber);
};
