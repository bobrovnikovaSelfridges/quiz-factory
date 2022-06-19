import React, { useContext } from "react";
import { configurations } from "./dev/config";
import { MOBILE_STARTS } from "./services/constants";
import { QuizContext } from "./services/quizContext";
import { QuestionBox } from "./ui/question-box/question-box";
import { DataOfItem, OptionType, QuizContextType } from "./store/types";
import "bootstrap/dist/css/bootstrap.min.css";
import s from "./App.module.css";
import { UserSelection } from "./ui/user-selection/user-selection";

const App: React.FunctionComponent = () => {
  const [isMobile, setisMobile] = React.useState(
    window.innerWidth < MOBILE_STARTS
  );
  const [pageNumber, setPageNumber] = React.useState(0);
  const [selectedOptions, setSelectedOptions] = React.useState<{
    [pageNum: string]: OptionType;
  }>({});
  const [currentCardsSelection, setCurrentCardsSelection] = React.useState<{
    [key: string]: DataOfItem;
  }>({});

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
  const amountOfQuestions = Object.keys(configurations.quizValues).length;

  const { dataset } = useContext<QuizContextType>(QuizContext);
  const isEndOfQuiz = pageNumber + 1 > amountOfQuestions;

  const contextData: QuizContextType = {
    dataset,
    params: {
      isEndOfQuiz,
      isMobile,
    },
    configurations,
    states: {
      selectedOptions: {
        values: selectedOptions,
        onChange: setSelectedOptions,
      },

      currentCardsSelection: {
        values: currentCardsSelection,
        onChange: setCurrentCardsSelection,
      },
      pageNumber: { value: pageNumber, onChange: setPageNumber },
    },
  };

  return (
    <QuizContext.Provider value={contextData}>
      <div className={s.root}>
        <QuestionBox />

        {isEndOfQuiz && <UserSelection />}
        <img
          className={s.img}
          src={
            isMobile
              ? configurations.images.background.mobile
              : configurations.images.background.desktop
          }
        />
      </div>
    </QuizContext.Provider>
  );
};

export default App;
