import React from "react";
import { QuizValues, QuizValueType } from "../../store/types";
import { Description } from "../description/description";
import { QuestionOptions } from "../question-options/question-options";
import "./quiz-element.css";

type Props = {
  questionUnits: [string, QuizValueType];
};

export const QuizElement = ({ questionUnits }: Props) => {
  const options = questionUnits[1].options;
  return (
    <div className="headerRoot">
      <img src={questionUnits[1].img} />
      <Description classname="=" description={questionUnits[1].question} />
      {options.map((option: { option: string; point: number }) => {
        return (
          <QuestionOptions
            option={option}
            questionNumber={parseFloat(questionUnits[0])}
          />
        );
      })}

      <div className="container" />
    </div>
  );
};
