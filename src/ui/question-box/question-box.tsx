import React, { useContext } from "react";
import { QuizContext } from "../../services/quizContext";
import { Config, QuizContextType } from "../../store/types";
import { Description } from "../description/description";
import { PageSwitcher } from "../page-switcher/page-switcher";
import { QuizElement } from "../quiz-element/quiz-element";
import s from "./question-box.module.css";

export const QuestionBox = () => {
  const { params, states, configurations } =
    useContext<QuizContextType>(QuizContext);

  const currentQuestion =
    configurations.quizValues[states.pageNumber.value + 1];
  const isFirstPage = 1 === states.pageNumber.value + 1;
  return (
    <div className={s.root}>
      {renderHeader(configurations, params.isMobile, isFirstPage)}
      <QuizElement
        key={currentQuestion.question}
        questionUnits={currentQuestion}
      />
      <PageSwitcher />
    </div>
  );
};

const renderHeader = (
  configurations: Config,
  isMobile: boolean,
  isFirstPage: boolean
): React.ReactNode => {
  const description = configurations.uiText.descriptions.box;
  const shortenDecription =
    description.substring(0, description.length / 3) + "...";

  console.log(configurations.images.background);
  return (
    <>
      <h1>{configurations.uiText.titles.box}</h1>
      {isFirstPage && (
        <>
          {/* <img
            className={s.img}
            src={configurations.images.background.desktop}
          /> */}
          <Description
            description={isMobile ? shortenDecription : description}
            classname={s.description}
          />
        </>
      )}
    </>
  );
};
