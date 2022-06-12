import { OptionType } from "../../store/types";
import { Btn } from "../btn/btn";
import { QuizContext } from "../../services/quizContext";
import "./question-options.css";
import { useContext } from "react";

export const QuestionOptions = () => {
  const { states, configurations } = useContext(QuizContext);

  const options = configurations.quizValues[states.pageNumber.value].options;

  return options.map((option: OptionType) => {
    return (
      <Btn
        onClick={states.currentSelection.onChange(states.option, questionId)}
        text={option.option}
      />
    );
  });
};
