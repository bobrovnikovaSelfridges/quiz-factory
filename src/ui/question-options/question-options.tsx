import React, { useContext } from "react";
import { DataOfItem, OptionType, StatesContextType } from "../../store/types";
import { Btn } from "../btn/btn";
import { QuizContext } from "../../services/quizContext";
import s from "./question-options.module.css";

export const QuestionOptions = (): React.ReactElement => {
  const { states, configurations, dataset } = useContext(QuizContext);
  const options =
    configurations.quizValues[states.pageNumber.value + 1].options;

  return (
    <div className={s.root}>
      {options.map((option: OptionType) => {
        const currPageSelectedValue =
          states.currentSelection.values[states.pageNumber.value.toString()];

        return (
          <Btn
            isSelected={Boolean(
              currPageSelectedValue &&
                currPageSelectedValue.option === option.option
            )}
            key={option.option}
            onClick={() => {
              updateSelection(option, states, dataset);
            }}
            text={option.option}
          />
        );
      })}
    </div>
  );
};

// todo make helpers
const updateSelection = (
  selectedOption: OptionType,
  states: StatesContextType,
  dataset: { [key: string]: DataOfItem[] }
) => {
  const newSelection = {
    ...states.currentSelection.values,
    ...getNewOptions(dataset, selectedOption),
  };

  console.log({ newSelection });
  // newSelection[states.pageNumber.value] = selectedOption;
  states.currentSelection.onChange(newSelection);
};

const getNewOptions = (
  dataset: { [key: string]: DataOfItem[] },
  selectedOption: OptionType
): { [key: string]: DataOfItem } => {
  let newSelection: { [key: string]: DataOfItem } = {};
  Object.entries(dataset).forEach((dataUnit: [string, DataOfItem[]]) => {
    dataUnit[1].forEach((cardData: DataOfItem) => {
      const keyWordsFromCard = splitKeyWords(cardData);
      const selectedKeyWords = (
        selectedOption.keyWords +
        " " +
        selectedOption.option
      ).split(" ");
      for (const keyWord of selectedKeyWords) {
        if (keyWordsFromCard.includes(keyWord)) {
          // return true;
          newSelection[cardData.id] = cardData;
        }
      }
    });
  });
  return newSelection;
};

const splitKeyWords = (cardData: DataOfItem): string[] => {
  const allWords =
    cardData.description + " " + cardData.id + " " + cardData.title;
  return allWords.split(" ");
};
