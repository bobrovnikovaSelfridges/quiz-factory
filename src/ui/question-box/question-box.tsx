import React, { useContext } from "react";
import { QuizContext } from "../../services/quizContext";
import { Config, OptionType, QuizContextType, Params } from "../../store/types";
import { Description } from "../description/description";
import { Loader } from "../loader/loader";
import { Button } from "react-bootstrap";

import { PageSwitcher } from "../page-switcher/page-switcher";
import { QuizElement } from "../quiz-element/quiz-element";
import { Recommendations } from "../recommendations/recommendations";
import { UserSelection } from "../user-selection/user-selection";
import s from "./question-box.module.css";
import { UserData } from "../header/user-data";
import { Btn } from "../btn/btn";

type Props = {
  fields: {
    setName: React.Dispatch<React.SetStateAction<string>>;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    setSurname: React.Dispatch<React.SetStateAction<string>>;
  };
};

export const QuestionBox = (props: Props) => {
  const { params, states, configurations } =
    useContext<QuizContextType>(QuizContext);
  const currentQuestion =
    configurations.quizValues[states.pageNumber.value + 1];
  const isFirstPage = 1 === states.pageNumber.value + 1;
  const isInitialPage = 0 === states.pageNumber.value;
  const [showResults, setShownResults] = React.useState(false);

  React.useEffect(() => {
    if (params.isEndOfQuiz) {
      setTimeout(() => {
        setShownResults(true);
      }, 2000);
    }
  }, [params.isEndOfQuiz]);
  console.log(params.showSelection);
  return (
    <div className={s.root}>
      {isInitialPage && !params.showSelection && (
        <UserData fields={props.fields} />
      )}
      {/* {showImage && <img className={s.img} src={currentQuestion.img} />} */}
      {renderHeader(configurations, params, isFirstPage)}

      {!params.isEndOfQuiz && !params.showSelection && (
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

      {showResults && <Recommendations />}
      {(params.showSelection || showResults) && <UserSelection />}
    </div>
  );
};

const renderHeader = (
  configurations: Config,
  params: Params,
  isFirstPage: boolean
): React.ReactNode => {
  const description = configurations.uiText.descriptions.box;
  const shortenDecription =
    description.substring(0, description.length / 3) + "...";
  if (!params.showSelection) {
    return (
      <>
        <h1>
          {params.isEndOfQuiz
            ? configurations.uiText.titles.result
            : configurations.uiText.titles.box}
        </h1>
        {isFirstPage && (
          <Description
            description={params.isMobile ? shortenDecription : description}
            classname={s.description}
          />
        )}
      </>
    );
  }
};
