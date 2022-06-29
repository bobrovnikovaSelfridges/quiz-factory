import React, { useContext, useState } from "react";
import { QuizContext } from "../../services/quizContext";
import s from "./recommendations.module.css";
import { Database, OptionType, SchemaUnit, UserData } from "../../store/types";
import { Card } from "../card/card";
import { Btn } from "../btn/btn";
import { exclusions } from "../../assets/keywords_example";

export const Recommendations = (): React.ReactElement => {
  const { states, params } = useContext(QuizContext);
  const defaultAmount = params.isMobile ? 6 : 8;
  const [amountOfShownCards, setAmount] = useState(defaultAmount);
  const [recommendation, setRecommendations] = useState<Database>([]);

  const cards = Object.entries(states.currentCardsSelection.values);
  const words: string[] = [];
  React.useEffect(() => {
    const allKeyWords = Object.entries(states.selectedOptions.values);
    allKeyWords.forEach((value: [string, OptionType]) =>
      value[1].keyWords.forEach((word: string) => {
        words.push(word);
      })
    );
    getResults(setRecommendations, words, exclusions, states.userData);
  }, []);
  // if (recommendation.length > 0 && words.length > 0) {
  return (
    <div className={s.root}>
      <div className={s.cards}>
        {recommendation.map((dataset: SchemaUnit, idx: number) => {
          return (
            <Card
              isDisplayed={amountOfShownCards > idx}
              key={dataset.productId}
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
  // }
  //  else {
  //   return <></>;
  // }
};
// const getRandomCards = (
//   cardsData: [string, SchemaUnit][]
// ): [string, SchemaUnit][] => {
//   const cards: [string, SchemaUnit][] = [];
//   const usedNumbers: number[] = [];

//   while (usedNumbers.length !== cardsData.length) {
//     const randomID = getRandomNumber(cardsData.length);

//     if (!usedNumbers.includes(randomID)) {
//       const randomCard = cardsData[randomID];
//       usedNumbers.push(randomID);
//       cards.push(randomCard);
//     }
//   }

//   return cards;
// };

const getResults = (
  setRecomm: React.Dispatch<React.SetStateAction<Database>>,
  keywords: string[],
  exclusions: string[],
  userData: UserData
) => {
  const body = JSON.stringify({ keywords, exclusions, userData });

  fetch(endPoint, {
    method: "POST",
    body,
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        setRecomm(data);
      }
    });
};

const endPoint = "https://6e49q1rapl.execute-api.eu-west-1.amazonaws.com/prod/";
