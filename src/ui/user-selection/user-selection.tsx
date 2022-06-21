import { useContext } from "react";
import { configurations } from "../../dev/config";
import { QuizContext } from "../../services/quizContext";
import { DataOfItem, QuizContextType } from "../../store/types";
import { Card } from "../card/card";
import { ResultControls } from "../result-controls/result-controls";
import s from "./user-selection.module.css";

export const UserSelection = () => {
  const { states } = useContext<QuizContextType>(QuizContext);
  const cards = states.usersSelectedCards.values;
  const cardsAmount = Object.keys(states.usersSelectedCards.values).length;
  const title = configurations.uiText.titles.selection
    .replace("{NUMBER}", cardsAmount.toString())
    .replace("{GIFT}", cardsAmount > 1 ? "gifts" : "gift");
  return (
    <>
      <div data-of-js-pdf className={s.root}>
        <h1>{title}</h1>
        <div className={s.cards}>{renderCards(cards)}</div>
      </div>
      <ResultControls />
    </>
  );
};

const renderCards = (cards: { [key: string]: DataOfItem }) => {
  return Object.entries(cards).map((card: [string, DataOfItem], i: number) => {
    return (
      <div className={s.card}>
        <Card key={card[0] + i} dataset={card} isDisplayed={true}>
          <textarea
            placeholder={configurations.notes[i] || "your notes"}
            className={s.notes}
          />
        </Card>
      </div>
    );
  });
};
