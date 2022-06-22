import React, { useContext } from "react";
import { Btn } from "../btn/btn";
import { QuizContext } from "../../services/quizContext";
import s from "./page-switcher.module.css";

export const PageSwitcher = () => {
  const { states } = useContext(QuizContext);
  const isBlocked = false;
  const isFirstPage = states.pageNumber.value === 0;

  return (
    <div className={s.root}>
      <Btn
        disabled={isFirstPage}
        text={"←"}
        onClick={() => {
          switchPage(states.pageNumber, true);
        }}
      />

      <Btn
        disabled={isBlocked}
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
