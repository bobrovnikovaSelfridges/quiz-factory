import { EventAttributes } from "ics";

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
  reminders: EventAttributes;
  uiText: {
    titles: {
      calendarEventFile: string;
      box: string;
      result: string;
      savePdfBtn: string;
      saveReminderBtn: string;
      copyLink: string;
      selection: string;
    };
    descriptions: {
      box: string;
      result: string;
    };
  };
  tips: Tips;
  notes: string[];

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
export type Params = {
  isEndOfQuiz: boolean;
  isMobile: boolean;
  showSelection: boolean;
};
export type QuizContextType = {
  params: Params;

  configurations: Config;
  states: StatesContextType;
  dataset: { [key: string]: DataOfItem[] };
};

export type StatesContextType = {
  url: {
    values: string[] | undefined;
    onChange: React.Dispatch<React.SetStateAction<Array<string> | undefined>>;
  };
  currentCardsSelection: {
    values: { [key: string]: DataOfItem };
    onChange: React.Dispatch<
      React.SetStateAction<{ [key: string]: DataOfItem }>
    >;
  };

  usersSelectedCards: {
    values: { [id: string]: DataOfItem };
    onChange: React.Dispatch<
      React.SetStateAction<{ [id: string]: DataOfItem }>
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
export type QueryParams = { [paramName: string]: string };
