import React, { useContext } from "react";
import { OptionType, StatesContextType } from "../../store/types";
import { Btn } from "../btn/btn";
import { QuizContext } from "../../services/quizContext";
import s from "./question-options.module.css";

export const QuestionOptions = (): React.ReactElement => {
  const { states, configurations } = useContext(QuizContext);
  const options =
    configurations.quizValues[states.pageNumber.value + 1].options;

  return (
    <div className={s.root}>
      {options.map((option: OptionType) => {
        const currPageSelectedValue =
          states.currentSelection.value[states.pageNumber.value.toString()];

        return (
          <Btn
            isSelected={Boolean(
              currPageSelectedValue &&
                currPageSelectedValue.option === option.option
            )}
            key={option.option}
            onClick={() => {
              updateSelection(option, states);
            }}
            text={option.option}
          />
        );
      })}
    </div>
  );
};

const updateSelection = (
  selectedOption: OptionType,
  states: StatesContextType
) => {
  const newSelection = { ...states.currentSelection.value };
  newSelection[states.pageNumber.value] = selectedOption;
  states.currentSelection.onChange(newSelection);
};
