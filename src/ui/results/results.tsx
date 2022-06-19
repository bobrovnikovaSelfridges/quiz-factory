import { useContext, useState } from "react";
import { QuizContext } from "../../services/quizContext";
import s from "./results.module.css";
import { DataOfItem } from "../../store/types";
import { Card } from "../card/card";
import { Btn } from "../btn/btn";
import { getRandomNumber } from "../../helpers/getRandomNumber";

export const Results = () => {
  const { states } = useContext(QuizContext);
  const defaultAmount = 5;
  const [amountOfShownCards, setAmount] = useState(defaultAmount);

  const cards = Object.entries(states.currentCardsSelection.values);
  const randomData = getRandomCards(cards);
  const [randomisedCards] = useState(randomData);

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
          disabled={amountOfShownCards >= cards.length}
          text="see more"
          onClick={() => {
            if (amountOfShownCards < cards.length) {
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
