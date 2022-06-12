// import { Dispatch, SetStateAction } from "react";

export type ConfigRaw = any;

export type Config = {
  uiText: {
    titles: {
      box: string;
    };
    descriptions: {
      box: string;
    };
  };

  images: {
    background: { desktop: string; mobile: string; result: string };
    image1: string;
    loader: string;
  };
  quizValues: QuizValues;
  colours: any;
};

export type OptionType = {
  option: string;
  point: number;
  keyWords: string[];
};

export type QuizValues = {
  [key: number]: QuizValueType;
};

export type QuizValueType = {
  img: string;
  question: string;
  options: Array<OptionType>;
};

export type QuizContextType = {
  params: {
    isMobile: boolean;
  };
  configurations: Config;
  states: StatesContextType;
  unparsedData: any;
};

export type StatesContextType = {
  currentSelection: {
    value: QuizInitialValuesType;
    onChange: React.Dispatch<React.SetStateAction<QuizInitialValuesType>>;
  };
  pageNumber: {
    value: number;
    onChange: React.Dispatch<React.SetStateAction<number>>;
  };
};

export type QuizInitialValuesType = { [questionId: string]: OptionType };

// export type CurrentSelectionUnit = { [questionId: string]: OptionType };

// export type CategoriesType = { [key: string]: CardsCategory };
// export type UiText = {
//   resultTitle: string;
//   btnPress: string;

//   btnPressed: string;
//   saveToCalendar: string;
//   saveYourGuide: string;
//   toGuide: string;
//   aboutGuide: string | string[];
//   yourGuideIsSaved: string;
//   guideMovingCounter: string;
//   placesToBePluralized: string[];
//   emojii: string;
//   btnText: string;
//   calendarFileName: string;
// };
// export type InitialValues = {
//   isCardTypePlaces: boolean;
//   isCardTypeEvents: boolean;
//   cardBtnColor: string;
// };
// export type Subscription = {
//   token: string;
//   url: string;
// };

// export type CardsCategory = {
//   description: string;
//   cards: IRawDataUnit[];
//   picture: string;
//   categoryName: string;
// };

// export type CardSelector = (
//   card: IRawDataUnit,
//   selectedCards: IRawDataUnit[] | undefined
//   // setSelectedCards: React.Dispatch<
//   //   React.SetStateAction<IRawDataUnit[] | undefined>
//   // >
// ) => void;

// export type QueryParams = { [paramName: string]: string };

// export type ICampaigns = Array<{ type: string }>;

// export type IRawDataUnit = {
//   title: string;
//   description: string;
//   img: string;
//   price: string;
//   link: string;
//   id: string;
// };

// export type IRawDataset = {
//   white: IRawDataUnit[];
//   pink: IRawDataUnit[];
//   red: IRawDataUnit[];
//   blue: IRawDataUnit[];
//   green: IRawDataUnit[];
// };

// export type ICategoriesData = { [key: string]: IRawDataUnit[] | undefined };

// export type CardsProps = {
//   idx?: number;
//   setVisibility?: React.Dispatch<React.SetStateAction<boolean>>;
//   setIntersectionObserver?: (
//     container: HTMLDivElement,
//     setVisibility: Dispatch<SetStateAction<boolean>>,
//     selectedCards: IRawDataUnit[] | undefined
//   ) => void;
//   isSelected: boolean;
//   selectedCards: IRawDataUnit[] | undefined;
//   cardData: IRawDataUnit;
//   selectCard: CardSelector;
// };
