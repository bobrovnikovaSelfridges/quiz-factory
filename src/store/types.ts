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
      holidayName: string;
      calendarEventFile: string;
      box: string;
      result: string;
      savePdfBtn: string;
      saveReminderBtn: string;
      copyLink: string;
      selection: string;
    };
    descriptions: {
      header: string;
      box: string;
      result: string;
    };
  };
  tips: Tips;
  notes: string[];

  images: {
    background: { desktop: string; mobile: string };
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

export type UserData = {
  name: string;
  surname: string;
  email: string;
};
export type StatesContextType = {
  userData: UserData;
  url: {
    values: string[] | undefined;
    onChange: React.Dispatch<React.SetStateAction<Array<string> | undefined>>;
  };
  currentCardsSelection: {
    values: SchemaUnit[];
    onChange: React.Dispatch<React.SetStateAction<SchemaUnit[]>>;
  };

  usersSelectedCards: {
    values: { [key: string]: SchemaUnit };

    onChange: React.Dispatch<
      React.SetStateAction<{ [key: string]: SchemaUnit }>
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

export type Database = Array<SchemaUnit>;

export type SchemaUnit = {
  name: string;
  imageName: string;
  seoKey: string;
  brandName: string;
  previewAttribute: string;
  productId: number;
  multiColour: string;
  productType: string;
  isPartOfBundle: string;
  partNumber: string;
  price: [
    {
      lowestPrice: string;
      currency: string;
    }
  ];
};
