import { createContext, useContext } from "react";
import { mocks } from "../assets/mocks";
import { configurations } from "../dev/config";
// import { checkForDuplicates } from "../helpers/checkForDuplicates";
import { QuizContextType } from "../store/types";
import { MOBILE_STARTS } from "./constants";

// const dataset = checkForDuplicates(mocks);
// console.log({ dataset });

export const QuizContext = createContext<QuizContextType>({
  dataset: mocks,
  params: {
    isEndOfQuiz: false,
    isMobile: window.innerWidth < MOBILE_STARTS,
  },
  configurations, // static
  states: {
    currentSelection: {
      value: {},
      onChange: () => {},
    },
    pageNumber: {
      value: 0,
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
