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

  const cardsAmount = Object.keys(states.usersSelectedCards.values).length;
  const title = configurations.uiText.titles.selection
    .replace("{NUMBER}", cardsAmount.toString())
    .replace("{GIFT}", cardsAmount > 1 ? "gifts" : "gift");

  if (Object.keys(states.usersSelectedCards.values).length > 0) {
    console.log(";loads");
    return (
      <>
        <div data-of-js-pdf className={s.root}>
          <h1>{title}</h1>
          <div className={s.cards}>
            {renderCards(states.usersSelectedCards.values)}
          </div>
        </div>
        <ResultControls />
      </>
    );
  } else {
    return <></>;
  }
};

const renderCards = (recommendation: { [key: string]: SchemaUnit }) => {
  return Object.entries(recommendation).map(
    (card: [string, SchemaUnit], i: number) => {
      return (
        <div className={s.card}>
          <Card key={card[0]} dataset={card[1]} isDisplayed={true}>
            <textarea
              placeholder={configurations.notes[i] || "your notes"}
              className={s.notes}
            />
          </Card>
        </div>
      );
    }
  );
};
