import { Dispatch, SetStateAction, useContext } from "react";
import { QuizContext } from "../../services/quizContext";
import {
  OptionType,
  QuizContextType,
  QuizInitialValuesType,
} from "../../store/types";
import { Card } from "../card/card";
import s from "./user-selection.module.css";

export const UserSelection = () => {
  const { params, states, configurations } =
    useContext<QuizContextType>(QuizContext);

  return <div>{renderCards(states.currentSelection.values)}</div>;
};
const renderCards = (currentSelection: QuizInitialValuesType) => {
  return Object.entries(currentSelection).map((card: [string, OptionType]) => {
    return <Card dataset={card[1]} isDisplayed={true} />;
  });
};
