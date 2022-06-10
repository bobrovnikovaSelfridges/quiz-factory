import React from "react";
import { Formik, useField } from "formik";
// import { FormValues, UserDetails } from "types";
import { initValues } from "./dev/config";
import s from "./App.module.css";
import { MOBILE_STARTS } from "./services/constants";
import { QuestionBox } from "./ui/question-box/question-box";
// import QuizContext, { useQiuzContext } from "./services/quizContext";
import { QuizValues, QuizValueType } from "./store/types";
import { QuizElement } from "./ui/quiz-element/quiz-element";
import { QuizContextProvider, useQiuzContext } from "./services/quizContext";

const MyContext = React.createContext("undefined");

const App: React.FunctionComponent = () => {
  const [isMobile, setisMobile] = React.useState(
    window.innerWidth < MOBILE_STARTS
  );
  console.log(useQiuzContext());

  React.useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.contentBoxSize) {
          setisMobile(entry.contentBoxSize[0].inlineSize < MOBILE_STARTS);
        }
      }
    });
    resizeObserver.observe(document.body);
  }, []);

  const id = "";

  const [field, meta, helpers] = useField<string[]>(id);

  return (
    <Formik>
      <div className={s.root}>
        <QuestionBox isMobile={isMobile}>
          {renderQuestions(initValues.quizValues)}
        </QuestionBox>

        <img
          className={s.img}
          src={
            isMobile
              ? initValues.images.background.mobile
              : initValues.images.background.desktop
          }
        />
      </div>
    </Formik>
  );
};

const renderQuestions = (quizValues: QuizValues): React.ReactNode => {
  const questions = Object.entries(initValues.quizValues);

  return questions.map((questionUnits: [string, QuizValueType]) => {
    return <QuizElement questionUnits={questionUnits} />;
  });
};

export default App;
