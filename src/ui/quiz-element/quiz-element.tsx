import React from "react";
import { OptionType, QuizValueType } from "../../store/types";
import { Description } from "../description/description";
import { QuestionOptions } from "../question-options/question-options";
import s from "./quiz-element.module.css";

type Props = {
  questionUnits: QuizValueType;
};

export const QuizElement = ({ questionUnits }: Props) => {
  return (
    <div className={s.root}>
      <img className={s.img} src={questionUnits.img} />
      <Description
        classname={s.description}
        description={questionUnits.question}
      />

      {/* options selection */}
      <QuestionOptions />

      <div className={s.container} />
    </div>
  );
};
