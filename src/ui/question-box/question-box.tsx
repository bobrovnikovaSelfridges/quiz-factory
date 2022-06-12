import React, { useContext } from "react";
import { QuizContext } from "../../services/quizContext";
import {
  Config,
  QuizContextType,
  QuizValues,
  QuizValueType,
} from "../../store/types";
import { Description } from "../description/description";
import { QuizElement } from "../quiz-element/quiz-element";
import "./question-box.css";

export const QuestionBox = () => {
  const { params, states, configurations } =
    useContext<QuizContextType>(QuizContext);

  const isFirstPage = 1 === states.pageNumber.value;
  return (
    <>
      {renderHeader(configurations, params.isMobile, isFirstPage)}
      {renderQuestions(configurations.quizValues)}
    </>
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
    <div className="headerRoot">
      <div className="container" />
      <h1>{configurations.uiText.titles.box}</h1>
      {isFirstPage && (
        <>
          <img src={configurations.images.background} />
          <Description
            description={isMobile ? shortenDecription : description}
            classname={"description"}
          />
        </>
      )}
    </div>
  );
};

const renderQuestions = (quizValues: QuizValues): React.ReactNode => {
  return Object.entries(quizValues).map(
    (questionUnits: [string, QuizValueType]) => {
      return <QuizElement questionUnits={questionUnits} />;
    }
  );
};
