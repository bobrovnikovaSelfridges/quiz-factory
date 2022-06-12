import React from "react";
import { configurations } from "./dev/config";
import { MOBILE_STARTS } from "./services/constants";
import { QuizContext } from "./services/quizContext";
import { QuestionBox } from "./ui/question-box/question-box";
import { QuizContextType } from "./store/types";
import s from "./App.module.css";

const App: React.FunctionComponent = () => {
  const [isMobile, setisMobile] = React.useState(
    window.innerWidth < MOBILE_STARTS
  );
  const [pageNumber, setPageNumber] = React.useState(0);
  const [currentSelection, setCurrentSelection] = React.useState({});

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

  const contextData: QuizContextType = {
    params: {
      isMobile,
    },
    configurations,
    states: {
      currentSelection: {
        value: currentSelection,
        onChange: setCurrentSelection,
      },
      pageNumber: { value: pageNumber, onChange: setPageNumber },
    },
  };

  return (
    <QuizContext.Provider value={contextData}>
      <div className={s.root}>
        <QuestionBox />
        {/* <img
        className={s.img}
        src={
          isMobile
            ? configurations.images.background.mobile
            : configurations.images.background.desktop
        }
      /> */}
      </div>
    </QuizContext.Provider>
  );
};

export default App;
