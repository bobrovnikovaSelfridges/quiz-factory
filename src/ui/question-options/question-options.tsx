import React, { useContext } from "react";
import {
  DataOfItem,
  OptionType,
  SchemaUnit,
  StatesContextType,
} from "../../store/types";
import { Btn } from "../btn/btn";
import { QuizContext } from "../../services/quizContext";
import s from "./question-options.module.css";
import { exclusions } from "../../assets/keywords_example";

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
              // updateCardsSelection(option, states, dataset);
              updateOptionsSelection(option, states);
              states.pageNumber.onChange(states.pageNumber.value + 1);
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
  //  turn to lambda
  selectedOption: OptionType,
  states: StatesContextType,
  dataset: { [key: string]: SchemaUnit[] }
): void => {
  const newCards = {
    ...states.currentCardsSelection.values,
    ...getCardsFromSelectedOption(dataset, selectedOption),
  };
  states.currentCardsSelection.onChange(newCards);
};

const getCardsFromSelectedOption = (
  dataset: { [key: string]: SchemaUnit[] },
  selectedOption: OptionType
): { [key: string]: SchemaUnit } => {
  let keyWordsFromCards: any = [];
  let newCards: { [key: string]: SchemaUnit } = {};
  const descriptions: string[] = [];
  Object.entries(dataset).forEach((dataUnit: [string, SchemaUnit[]]) => {
    dataUnit[1].forEach((cardData: SchemaUnit) => {
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
            if (!descriptions.includes(cardData.brandName)) {
              newCards[cardData.brandName] = cardData;
              descriptions.push(cardData.brandName);
            }
          }
        }
      }
    });
  });

  return newCards;
};

const splitKeyWords = (cardData: SchemaUnit): string[] => {
  const allWords =
    cardData.brandName + " " + cardData.name + " " + cardData.name;
  return allWords.split(" ");
};
