import React, { useContext, useState } from "react";
import { QuizContext } from "../../services/quizContext";
import { Config, QuizContextType } from "../../store/types";
import { Description } from "../description/description";
import { Loader } from "../loader/loader";
import { PageSwitcher } from "../page-switcher/page-switcher";
import { QuizElement } from "../quiz-element/quiz-element";
import s from "./question-box.module.css";

export const QuestionBox = () => {
  const { params, states, configurations } =
    useContext<QuizContextType>(QuizContext);
  const amountOfQuestions = Object.keys(configurations.quizValues).length;
  const endOfQuiz = states.pageNumber.value + 1 > amountOfQuestions;

  const currentQuestion =
    configurations.quizValues[states.pageNumber.value + 1];
  const isFirstPage = 1 === states.pageNumber.value + 1;

  return (
    <div className={s.root}>
      {!endOfQuiz && <img className={s.img} src={currentQuestion.img} />}
      {renderHeader(configurations, params.isMobile, isFirstPage)}

      {!endOfQuiz && (
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
        isVisible={endOfQuiz}
      />
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

  return (
    <>
      <h1>{configurations.uiText.titles.box}</h1>
      {isFirstPage && (
        <Description
          description={isMobile ? shortenDecription : description}
          classname={s.description}
        />
      )}
    </>
  );
};
