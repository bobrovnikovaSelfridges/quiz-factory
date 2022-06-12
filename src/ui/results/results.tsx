import React, { useContext } from "react";
import { Btn } from "../btn/btn";
import { QuizContext } from "../../services/quizContext";
import s from "./results.module.css";
import {
  IRawDataUnit,
  OptionType,
  QuizInitialValuesType,
} from "../../store/types";

export const Results = () => {
  const { states, dataset } = useContext(QuizContext);
  const allKeyWords =
    states.currentSelection.value && getKeyWords(states.currentSelection.value);
  const cards = generateResults(dataset, allKeyWords);
  console.log(Boolean(states.currentSelection.value), { cards });

  const cardsData = Object.entries(cards);
  return (
    <div className={s.root}>
      {cardsData.map((dataset: [string, IRawDataUnit]) => {
        return <></>;
      })}
    </div>
  );
};

const generateResults = (
  data: { [key: string]: IRawDataUnit[] },
  allKeyWords: string[]
): { [title: string]: IRawDataUnit } => {
  const cardsData: { [title: string]: IRawDataUnit } = {};
  allKeyWords.forEach((allKeyWord: string) => {
    const recommendedCards = data[allKeyWord];
    if (recommendedCards) {
      recommendedCards.forEach((card: IRawDataUnit) => {
        if (!cardsData.hasOwnProperty(card.title)) {
          cardsData[card.title] = card;
        }
      });
    }
  });

  return cardsData;
};

const getKeyWords = (currentSelection: QuizInitialValuesType) => {
  const selectionValues = Object.entries(currentSelection);
  const keyWords: string[] = [];
  selectionValues.forEach((selectionValue: [string, OptionType]) => {
    selectionValue[1].keyWords.forEach((keyWord: string) =>
      keyWords.push(keyWord)
    );
  });
  return keyWords;
};
