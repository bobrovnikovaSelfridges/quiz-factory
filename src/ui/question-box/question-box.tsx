import React, { useContext } from "react";
import { removeDuplicates } from "../../helpers/remove-duplicates";
import { QuizContext } from "../../services/quizContext";
import {
  Config,
  OptionType,
  QuizContextType,
  QuizValueType,
} from "../../store/types";
import { Description } from "../description/description";
import { Loader } from "../loader/loader";
import { PageSwitcher } from "../page-switcher/page-switcher";
import { QuizElement } from "../quiz-element/quiz-element";
import { Results } from "../results/results";
import s from "./question-box.module.css";

export const QuestionBox = () => {
  const { params, states, configurations } =
    useContext<QuizContextType>(QuizContext);

  const currentQuestion =
    configurations.quizValues[states.pageNumber.value + 1];
  const isFirstPage = 1 === states.pageNumber.value + 1;

  const [showResults, setShownResults] = React.useState(false);

  React.useEffect(() => {
    if (params.isEndOfQuiz) {
      setTimeout(() => {
        setShownResults(true);
      }, 2000);
    }
  }, [params.isEndOfQuiz]);

  return (
    <div className={s.root}>
      {!params.isEndOfQuiz && (
        <img className={s.img} src={currentQuestion.img} />
      )}
      {renderHeader(
        configurations,
        params.isMobile,
        isFirstPage,
        params.isEndOfQuiz
      )}

      {!params.isEndOfQuiz && (
        <>
          <QuizElement
            key={currentQuestion.question}
            questionUnits={currentQuestion}
          />
          <PageSwitcher />
        </>
      )}

      <Loader
        amount={1}
        img={configurations.images.loader}
        isVisible={params.isEndOfQuiz}
      />
      {showResults && <Results />}
    </div>
  );
};

const renderHeader = (
  configurations: Config,
  isMobile: boolean,
  isFirstPage: boolean,
  endOfQuiz: boolean
): React.ReactNode => {
  const description = configurations.uiText.descriptions.box;
  const shortenDecription =
    description.substring(0, description.length / 3) + "...";

  return (
    <>
      <h1>
        {endOfQuiz
          ? configurations.uiText.titles.result
          : configurations.uiText.titles.box}
      </h1>
      {isFirstPage && (
        <Description
          description={isMobile ? shortenDecription : description}
          classname={s.description}
        />
      )}
    </>
  );
};
