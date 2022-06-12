import React from "react";
import { OptionType, QuizValueType } from "../../store/types";
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

      {/* options selection */}
      <QuestionOptions />
      {/* {options.map((option: OptionType) => {
        return <QuestionOptions />;
      })} */}

      <div className="container" />
    </div>
  );
};
