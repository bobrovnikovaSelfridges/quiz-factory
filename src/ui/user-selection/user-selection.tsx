import { useContext } from "react";
import { QuizContext } from "../../services/quizContext";
import { DataOfItem, QuizContextType } from "../../store/types";
import { Card } from "../card/card";
// import s from "./user-selection.module.css";

export const UserSelection = () => {
  const { params, states, configurations } =
    useContext<QuizContextType>(QuizContext);

  return <div>{renderCards(states.currentCardsSelection.values)}</div>;
};
const renderCards = (currentCardsSelection: { [key: string]: DataOfItem }) => {
  return Object.entries(currentCardsSelection).map(
    (card: [string, DataOfItem]) => {
      return <Card dataset={card} isDisplayed={true} />;
    }
  );
};
