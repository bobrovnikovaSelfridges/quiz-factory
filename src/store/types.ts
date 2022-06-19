export type ConfigRaw = any;
export type DataOfItem = {
  title: string;
  description: string;
  img: string;
  price: string;
  link: string;
  id: string;
  keyWord?: string;
};

export type Config = {
  uiText: {
    titles: {
      box: string;
      result: string;
      savePdfBtn: string;
    };
    descriptions: {
      box: string;
      result: string;
    };
  };
  tips: Tips;

  images: {
    background: { desktop: string; mobile: string; result: string };
    image1: string;
    loader: string;
  };
  quizValues: QuizValues;
  colours: {
    tip: string;
    mainBtn: string;
    tip1: string;
    tip2: string;
  };
};

export type OptionType = {
  option: string;
  point: number;
  keyWords: string[];
};

export type Tips = Array<Tip>;

export type Tip = {
  text: string;
  desc: string;
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
    isEndOfQuiz: boolean;
    isMobile: boolean;
  };
  configurations: Config;
  states: StatesContextType;
  dataset: { [key: string]: DataOfItem[] };
};

export type StatesContextType = {
  currentCardsSelection: {
    values: { [key: string]: DataOfItem };
    onChange: React.Dispatch<
      React.SetStateAction<{ [key: string]: DataOfItem }>
    >;
  };

  selectedOptions: {
    values: { [page: string]: OptionType };
    onChange: React.Dispatch<
      React.SetStateAction<{ [page: string]: OptionType }>
    >;
  };
  pageNumber: {
    value: number;
    onChange: React.Dispatch<React.SetStateAction<number>>;
  };
};

export type QuizInitialValuesType = { [questionId: string]: OptionType };
