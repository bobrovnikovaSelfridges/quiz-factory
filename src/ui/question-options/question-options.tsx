import React, { useContext } from "react";
import { DataOfItem, OptionType, StatesContextType } from "../../store/types";
import { Btn } from "../btn/btn";
import { QuizContext } from "../../services/quizContext";

import s from "./question-options.module.css";
import { exclusions } from "../../assets 1/keywords_example";

export const QuestionOptions = (): React.ReactElement => {
  const { states, configurations, dataset } = useContext(QuizContext);
  const options =
    configurations.quizValues[states.pageNumber.value + 1].options;
  return (
    <div className={s.root}>
      {options.map((option: OptionType) => {
        const isSelected = Boolean(
          Object.entries(states.selectedOptions.values).find(
            (value: [string, OptionType]) => value[1].option === option.option
          )
        );

        return (
          <Btn
            isSelected={isSelected}
            key={option.option}
            onClick={() => {
              updateCardsSelection(option, states, dataset);
              updateOptionsSelection(option, states);
            }}
            text={option.option}
          />
        );
      })}
    </div>
  );
};

const updateOptionsSelection = (
  selectedOption: OptionType,
  states: StatesContextType
): void => {
  const currPage = states.pageNumber.value;
  const oldOptions = { ...states.selectedOptions.values };
  oldOptions[currPage] = selectedOption;

  states.selectedOptions.onChange(oldOptions);
};

// todo make helpers
const updateCardsSelection = (
  selectedOption: OptionType,
  states: StatesContextType,
  dataset: { [key: string]: DataOfItem[] }
): void => {
  const newSelection = {
    ...states.currentCardsSelection.values,
    ...getCardsFromSelectedOption(dataset, selectedOption),
  };
  states.currentCardsSelection.onChange(newSelection);
};

const getCardsFromSelectedOption = (
  dataset: { [key: string]: DataOfItem[] },
  selectedOption: OptionType
): { [key: string]: DataOfItem } => {
  let keyWordsFromCards: any = [];
  let newSelection: { [key: string]: DataOfItem } = {};

  Object.entries(dataset).forEach((dataUnit: [string, DataOfItem[]]) => {
    dataUnit[1].forEach((cardData: DataOfItem) => {
      const keyWordsFromCard = splitKeyWords(cardData);
      keyWordsFromCard.forEach((wordVal: string) => {
        const word = wordVal.trim().toLowerCase();
        const isNumber = parseFloat(word) > 0;
        const isNotAWord =
          word.includes("£") || word.includes("#") || word.includes("_");

        if (
          !keyWordsFromCards.includes(word) &&
          word.length > 1 &&
          !isNumber &&
          !isNotAWord
        ) {
          keyWordsFromCards.push(word);
        }
      });

      const selectedKeyWords = (
        selectedOption.keyWords +
        " " +
        selectedOption.option
      )
        .split(" ")
        .join(", ")
        .split(",");

      let hasForbiddenWord = false;

      for (const exclusionWord of exclusions) {
        hasForbiddenWord = keyWordsFromCard.includes(exclusionWord);
        if (hasForbiddenWord) break;
      }

      if (!hasForbiddenWord) {
        for (const keyWord of selectedKeyWords) {
          if (keyWordsFromCard.includes(keyWord.trim())) {
            newSelection[cardData.id] = cardData;
          }
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
