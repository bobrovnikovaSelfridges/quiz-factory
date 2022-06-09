import React from "react";

import { initValues } from "./dev/config";
import s from "./App.module.css";
import { MOBILE_STARTS } from "./services/constants";

const MyContext = React.createContext("undefined");

const App: React.FunctionComponent = () => {
  // const initialValues = CONFIG;
  const [isMobile, setisMobile] = React.useState(
    window.innerWidth < MOBILE_STARTS
  );
  // const [selectedCards, setSelectedCards] = React.useState<
  //   IRawDataUnit[] | undefined
  // >([]);

  React.useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.contentBoxSize) {
          setisMobile(entry.contentBoxSize[0].inlineSize < MOBILE_STARTS);
        }
      }
    });
    resizeObserver.observe(document.body);

    // if initially loaded with query params:
    // loadStateFromQueryParams(categoriesData, setSelectedCards);
  }, []);
  const questions = Object.entries(initValues.quizValues);

  return (
    <MyContext.Provider value={"real life is hard"}>
      <div className={s.root}>
        <img
          className={s.img}
          src={
            isMobile
              ? initValues.images.background.mobile
              : initValues.images.background.desktop
          }
        />
      </div>
    </MyContext.Provider>
  );
};

export default App;
