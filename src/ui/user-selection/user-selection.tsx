import { useContext, useEffect, useState } from "react";
import { exclusions } from "../../assets/keywords_example";
import { configurations } from "../../dev/config";
import { QuizContext } from "../../services/quizContext";
import {
  Database,
  DataOfItem,
  OptionType,
  QuizContextType,
  SchemaUnit,
  UserData,
} from "../../store/types";
import { Card } from "../card/card";
import { ResultControls } from "../result-controls/result-controls";
import s from "./user-selection.module.css";

export const UserSelection = () => {
  const { states } = useContext<QuizContextType>(QuizContext);
  const [recommendation, setRecommendations] = useState<Database>([]);
  const cardsAmount = Object.keys(states.usersSelectedCards.values).length;
  const title = configurations.uiText.titles.selection
    .replace("{NUMBER}", cardsAmount.toString())
    .replace("{GIFT}", cardsAmount > 1 ? "gifts" : "gift");
  const allKeyWords = Object.entries(states.selectedOptions.values);

  let words: string[] = [];
  allKeyWords.forEach((value: [string, OptionType]) =>
    value[1].keyWords.forEach((word: string) => {
      words.push(word);
    })
  );

  useEffect(() => {
    const allKeyWords = Object.entries(states.selectedOptions.values);
    allKeyWords.forEach((value: [string, OptionType]) =>
      value[1].keyWords.forEach((word: string) => {
        words.push(word);
      })
    );
    getResults(setRecommendations, words, exclusions, states.userData);
  }, []);
  if (recommendation.length > 0 && words.length > 0) {
    return (
      <>
        <div data-of-js-pdf className={s.root}>
          <h1>{title}</h1>
          <div className={s.cards}>{renderCards(recommendation)}</div>
        </div>
        <ResultControls />
      </>
    );
  } else {
    return <></>;
  }
};

const renderCards = (recommendation: SchemaUnit[]) => {
  return recommendation.map((card: SchemaUnit, i: number) => {
    return (
      <div className={s.card}>
        <Card key={card.productId} dataset={card} isDisplayed={true}>
          <textarea
            placeholder={configurations.notes[i] || "your notes"}
            className={s.notes}
          />
        </Card>
      </div>
    );
  });
};

const endPoint = "https://6e49q1rapl.execute-api.eu-west-1.amazonaws.com/prod/";

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
        console.log({ data });
        setRecomm(data);
      }
    });
};
