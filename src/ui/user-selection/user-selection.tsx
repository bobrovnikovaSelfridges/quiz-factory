import { useContext, useEffect, useState } from "react";
import { exclusions } from "../../assets/keywords_example";
import { configurations } from "../../dev/config";
import { QuizContext } from "../../services/quizContext";
import {
  Database,
  DataOfItem,
  OptionType,
  QuizContextType,
  QuizValueType,
} from "../../store/types";
import { Card } from "../card/card";
import { ResultControls } from "../result-controls/result-controls";
import s from "./user-selection.module.css";

export const UserSelection = () => {
  const { states } = useContext<QuizContextType>(QuizContext);
  const [recommendation, setRecommendations] = useState<Database>([]);
  const cards = states.usersSelectedCards.values;
  const cardsAmount = Object.keys(states.usersSelectedCards.values).length;
  const title = configurations.uiText.titles.selection
    .replace("{NUMBER}", cardsAmount.toString())
    .replace("{GIFT}", cardsAmount > 1 ? "gifts" : "gift");

  const hasSelectedGifts =
    Object.keys(states.usersSelectedCards.values).length > 0;

  useEffect(() => {
    const allKeyWords = Object.entries(states.selectedOptions.values);

    const words: string[] = [];
    // console.log(
    allKeyWords.forEach(
      (value: [string, OptionType]) =>
        value[1].keyWords.forEach((word: string) => {
          words.push(word);
        })
      // )
    );

    getResults(setRecommendations, words, exclusions);
  }, []);

  if (hasSelectedGifts) {
    return (
      <>
        {/* <div data-of-js-pdf className={s.root}>
          <h1>{title}</h1>
          <div className={s.cards}>{renderCards(cards)}</div>
        </div>
        <ResultControls /> */}
      </>
    );
  } else {
    return <></>;
  }
};

// const renderCards = (cards: { [key: string]: DataOfItem }) => {
//   return Object.entries(cards).map((card: [string, DataOfItem], i: number) => {
//     return (
//       <div className={s.card}>
//         <Card key={card[0] + i} dataset={card} isDisplayed={true}>
//           <textarea
//             placeholder={configurations.notes[i] || "your notes"}
//             className={s.notes}
//           />
//         </Card>
//       </div>
//     );
//   });
// };

const endPoint = "";

const getResults = (
  setRecomm: React.Dispatch<React.SetStateAction<Database>>,
  keywords: string[],
  exclusions: string[]
) =>
  fetch(endPoint, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({ a: 1, b: 2 }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      setRecomm(data);
    });
