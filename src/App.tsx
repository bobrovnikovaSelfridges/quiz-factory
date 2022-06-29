import React, { useContext } from "react";
import { configurations } from "./dev/config";
import { MOBILE_STARTS } from "./services/constants";
import { QuizContext } from "./services/quizContext";
import { QuestionBox } from "./ui/question-box/question-box";
import {
  DataOfItem,
  OptionType,
  QuizContextType,
  SchemaUnit,
} from "./store/types";
import "bootstrap/dist/css/bootstrap.min.css";
import s from "./App.module.css";
import { getSearchParamsFromQueryString } from "./services/get-search-params-from-query-string";
import { mocks } from "./assets/mocks";

const App: React.FunctionComponent = () => {
  const [isMobile, setisMobile] = React.useState(
    window.innerWidth < MOBILE_STARTS
  );

  const [pageNumber, setPageNumber] = React.useState(0);
  const [selectedOptions, setSelectedOptions] = React.useState<{
    [pageNum: string]: OptionType;
  }>({});
  const [currentCardsSelection, setCurrentCardsSelection] = React.useState<
    SchemaUnit[]
  >([]);
  const [usersSelectedCards, setUsersSelectedCards] = React.useState<{
    [key: string]: SchemaUnit;
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
  const isEndOfQuiz = pageNumber === amountOfQuestions;
  const searchParams = getSearchParamsFromQueryString();
  const selectedGifstByUser = searchParams.get("gifts");
  const selectionIds = selectedGifstByUser?.split("&");
  const userArrivedBySavedLink = Boolean(
    selectionIds && selectionIds.length > 0
  );
  const [showSelection, setShownSelection] = React.useState<boolean>(
    userArrivedBySavedLink
  );

  const [urlParams, setUrlParams] = React.useState<Array<string> | undefined>(
    selectionIds
  );
  const [name, setName] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [surname, setSurname] = React.useState<string>("");

  const contextData: QuizContextType = {
    dataset,
    params: {
      isEndOfQuiz,
      isMobile,
      showSelection,
    },
    configurations,
    states: {
      userData: {
        name,
        surname,
        email,
      },
      url: {
        values: urlParams,
        onChange: setUrlParams,
      },
      selectedOptions: {
        values: selectedOptions,
        onChange: setSelectedOptions,
      },

      currentCardsSelection: {
        values: currentCardsSelection,
        onChange: setCurrentCardsSelection,
      },

      usersSelectedCards: {
        values: usersSelectedCards,
        onChange: setUsersSelectedCards,
      },
      pageNumber: { value: pageNumber, onChange: setPageNumber },
    },
  };

  React.useEffect(() => {
    // loadGiftsFromQueryParams(
    //   mocks,
    //   contextData.states.usersSelectedCards.onChange
    // );
  }, []);
  React.useEffect(() => {
    // setShownSelection(Boolean(urlParams && urlParams.length > 0));
  }, [urlParams, contextData.states.usersSelectedCards.values]);

  return (
    <QuizContext.Provider value={contextData}>
      <div className={s.root}>
        <QuestionBox fields={{ setName, setEmail, setSurname }} />

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

const loadGiftsFromQueryParams = (
  values: { [key: string]: SchemaUnit[] },
  onChange: React.Dispatch<React.SetStateAction<{ [id: string]: SchemaUnit }>>
) => {
  const searchParams = getSearchParamsFromQueryString();
  const cardsInUrl = searchParams.get("gifts");
  let selection: { [id: string]: DataOfItem } = {};
  if (cardsInUrl) {
    const ids = cardsInUrl.split("-");

    const allGifts: SchemaUnit[][] = Object.values(values);

    allGifts.forEach((category: SchemaUnit[]) => {
      // category[1].forEach((element: DataOfItem) => {
      //   if (ids.includes(element.id)) {
      //     selection[element.id] = element;
      //   }
      // });
    });
  }
  // onChange(selection);
};
export default App;
