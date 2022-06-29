import { useContext, useState } from "react";
import { QuizContext } from "../../services/quizContext";
import s from "./recommendations.module.css";
import { SchemaUnit } from "../../store/types";
import { Card } from "../card/card";
import { Btn } from "../btn/btn";
import { getRandomNumber } from "../../helpers/getRandomNumber";

export const Recommendations = () => {
  const { states, params } = useContext(QuizContext);
  const defaultAmount = params.isMobile ? 6 : 8;
  const [amountOfShownCards, setAmount] = useState(defaultAmount);

  const cards = Object.entries(states.currentCardsSelection.values);

  return (
    <div className={s.root}>
      <div className={s.cards}>
        {states.currentCardsSelection.values.map(
          (dataset: SchemaUnit, idx: number) => {
            return (
              <Card
                isDisplayed={amountOfShownCards > idx}
                key={dataset.productId}
                dataset={dataset}
              />
            );
          }
        )}
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
  cardsData: [string, SchemaUnit][]
): [string, SchemaUnit][] => {
  const cards: [string, SchemaUnit][] = [];
  const usedNumbers: number[] = [];

  while (usedNumbers.length !== cardsData.length) {
    const randomID = getRandomNumber(cardsData.length);

    if (!usedNumbers.includes(randomID)) {
      const randomCard = cardsData[randomID];
      usedNumbers.push(randomID);
      cards.push(randomCard);
    }
  }

  return cards;
};
