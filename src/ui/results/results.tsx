import { useContext, useState } from "react";
import { QuizContext } from "../../services/quizContext";
import s from "./results.module.css";
import {
  DataOfItem,
  OptionType,
  QuizInitialValuesType,
} from "../../store/types";
import { Card } from "../card/card";
import { Btn } from "../btn/btn";
import { getRandomNumber } from "../../helpers/getRandomNumber";

export const Results = () => {
  const { states, dataset } = useContext(QuizContext);
  const defaultAmount = 5;
  const [amountOfShownCards, setAmount] = useState(defaultAmount);
  const allKeyWords =
    states.currentSelection.value && getKeyWords(states.currentSelection.value);
  const cards = generateResults(dataset, allKeyWords);
  const cardsData = Object.entries(cards);

  const rando = getRandomCards(cardsData);
  const [randomisedCards] = useState(rando);

  return (
    <div className={s.root}>
      <div className={s.cards}>
        {randomisedCards.map((dataset: [string, DataOfItem], idx: number) => {
          return (
            <Card
              isDisplayed={amountOfShownCards <= idx}
              key={dataset[0]}
              dataset={dataset}
            />
          );
        })}
      </div>
      <div className={s.btnWrap}>
        <Btn
          disabled={amountOfShownCards >= cardsData.length}
          text="see more"
          onClick={() => {
            if (amountOfShownCards < cardsData.length) {
              setAmount(amountOfShownCards + defaultAmount);
            }
          }}
        />
      </div>
    </div>
  );
};

const getRandomCards = (
  cardsData: [string, DataOfItem][]
): [string, DataOfItem][] => {
  const cards: [string, DataOfItem][] = [];
  const usedNumbers: number[] = [];
  // let idx = 0;
  while (usedNumbers.length !== cardsData.length) {
    const randomID = getRandomNumber(cardsData.length);
    if (!usedNumbers.includes(randomID)) {
      const randomCard = cardsData[randomID];
      usedNumbers.push(randomID);
      cards.push(randomCard);
      // idx++;
    }
  }

  return cards;
};

const generateResults = (
  data: { [key: string]: DataOfItem[] },
  allKeyWords: string[]
): { [title: string]: DataOfItem } => {
  const cardsData: { [title: string]: DataOfItem } = {};
  allKeyWords.forEach((allKeyWord: string) => {
    const recommendedCards = data[allKeyWord];
    if (recommendedCards) {
      recommendedCards.forEach((card: DataOfItem) => {
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
