import { Config, QuizValues } from "../store/types";
import background_desktop from "../assets/background_desktop.jpg";
import mobile_desktop from "../assets/background_mobile.jpg";
import background_result from "../assets/background_result.jpg";

import question_1 from "./../assets/question_1.png";
import question_2 from "./../assets/question_2.png";
import question_3 from "./../assets/question_3.png";
import question_4 from "./../assets/question_4.png";
import question_5 from "./../assets/question_5.png";

const quizValues: QuizValues = {
  1: {
    img: question_1,
    question: "What is your favorite Christmas meal?",
    options: [
      {
        option: "turkey",
        point: 3,
      },
      {
        option: "roast potatoes",
        point: 1,
      },
      {
        option: "gingerbread cookies",
        point: 2,
      },
    ],
  },
  2: {
    img: question_2,
    question: "What is your favorite coffee shop?",
    options: [
      {
        option: "starbucks or costa",
        point: 3,
      },
      {
        option: "small local cafe",
        point: 1,
      },
      {
        option: "No coffee, only cuppa",
        point: 2,
      },
    ],
  },
  3: {
    img: question_3,
    question: "What is one TV series you can watch over and over again?",
    options: [
      {
        option: "Game of Thrones",
        point: 3,
      },
      {
        option: "Black Mirror",
        point: 1,
      },
      {
        option: "Peaky Blinders",
        point: 2,
      },
    ],
  },
  4: {
    img: question_4,
    question: "The main question!",
    options: [
      {
        option: "carrot juice",
        point: 3,
      },
      {
        option: "beer",
        point: 1,
      },
      {
        option: "wine",
        point: 2,
      },
    ],
  },
  5: {
    img: question_5,
    question: "You got mad if you...",
    options: [
      {
        option: "can't buy your favourite smoothie",
        point: 3,
      },
      {
        option: "need to talk with Uber driver",
        point: 1,
      },
      {
        option: "... never.",
        point: 2,
      },
    ],
  },
};

export const initValues: Config = {
  images: {
    background: {
      desktop: background_desktop,
      mobile: mobile_desktop,
      result: background_result,
    },
    image1: "string",
  },
  uiText: {
    title: "Collect you first choice gift selection for someone special",
  },

  initialValues: {},
  quizValues: quizValues,

  colours: {
    colour1: "#2E2D2B",
  },
};
