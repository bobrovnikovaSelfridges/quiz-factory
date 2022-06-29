import { createContext, useContext } from "react";
import { mocks } from "../assets/mocks";
import { configurations } from "../dev/config";
import { QuizContextType } from "../store/types";
import { MOBILE_STARTS } from "./constants";

export const QuizContext = createContext<QuizContextType>({
  dataset: mocks,
  params: {
    showSelection: false,
    isEndOfQuiz: false,
    isMobile: window.innerWidth < MOBILE_STARTS,
  },
  configurations, // static

  states: {
    userData: {
      name: "",
      surname: "",
      email: "",
    },
    url: {
      values: [""],
      onChange: () => {},
    },
    selectedOptions: {
      values: {},
      onChange: () => {},
    },
    currentCardsSelection: {
      values: [],
      onChange: () => {},
    },
    pageNumber: {
      value: -1,
      onChange: () => {},
    },
    usersSelectedCards: {
      values: {},
      onChange: () => {},
    },
  },
});

export function useQiuzContext() {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error("Must be used in scope of a QuizContextProvider");
  }

  return context;
}
