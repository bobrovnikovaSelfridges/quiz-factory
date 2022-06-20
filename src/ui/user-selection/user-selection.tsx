import { useContext } from "react";
import { Form } from "react-bootstrap";
import { configurations } from "../../dev/config";
import { QuizContext } from "../../services/quizContext";
import { DataOfItem, QuizContextType } from "../../store/types";
import { Card } from "../card/card";
import s from "./user-selection.module.css";

export const UserSelection = () => {
  const { states } = useContext<QuizContextType>(QuizContext);
  const cards = states.usersSelectedCards.values;
  const cardsAmount = Object.keys(states.usersSelectedCards.values).length;
  const title = configurations.uiText.titles.selection
    .replace("{NUMBER}", cardsAmount.toString())
    .replace("{GIFT}", cardsAmount > 1 ? "gifts" : "gift");
  return (
    <div className={s.root}>
      <h1>{title}</h1>
      <div className={s.cards}>{renderCards(cards)}</div>
    </div>
  );
};

const renderCards = (cards: { [key: string]: DataOfItem }) => {
  return Object.entries(cards).map((card: [string, DataOfItem], i: number) => {
    return (
      <div className={s.card}>
        <Card key={card[0] + i} dataset={card} isDisplayed={true}>
          <div className={s.notes}>
            <Form.Control
              type="text"
              id=""
              placeholder={configurations.notes[i] || "your notes"}
              aria-describedby="passwordHelpBlock"
            />
          </div>
        </Card>
      </div>
    );
  });
};
