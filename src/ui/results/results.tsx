import React, { useContext } from "react";
import { Btn } from "../btn/btn";
import { QuizContext } from "../../services/quizContext";
import s from "./results.module.css";

export const Results = () => {
  const { states } = useContext(QuizContext);

  return (
    <div className={s.root}>
      <Btn
        disabled={states.pageNumber.value === 0}
        text={"←"}
        settings={{ width: 50 }}
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