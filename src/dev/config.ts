import { Config, QuizValues } from "../store/types";
import background_desktop from "../assets/background_desktop.jpg";
import mobile_desktop from "../assets/background_mobile.jpg";
import background_result from "../assets/background_result.jpg";

import question_1 from "./../assets/question_1.png";
import question_2 from "./../assets/question_2.png";
import question_3 from "./../assets/question_3.png";
import question_4 from "./../assets/question_4.png";
import question_5 from "./../assets/question_5.png";

export const quizValues: QuizValues = {
  1: {
    img: question_1,
    question: "What is your favorite Christmas meal?",
    options: [
      {
        option: "turkey",
        point: 3,
        keyWords: ["traditional", "homemade", "handmade"],
      },
      {
        option: "roast potatoes",
        point: 1,
        keyWords: ["potatoe", "homemade", "grill"],
      },
      {
        option: "gingerbread cookies",
        point: 2,
        keyWords: ["cookie", "sweets", "chocolate gift"],
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
        keyWords: [],
      },
      {
        option: "small local cafe",
        point: 1,
        keyWords: [],
      },
      {
        option: "No coffee, only cuppa",
        point: 2,
        keyWords: [],
      },
    ],
  },
  3: {
    img: question_1,
    question: "What is one TV series you can watch over and over again?",
    options: [
      {
        option: "Game of Thrones",
        point: 3,
        keyWords: [],
      },
      {
        option: "Black Mirror",
        point: 1,
        keyWords: [],
      },
      {
        option: "Peaky Blinders",
        point: 2,
        keyWords: [],
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
        keyWords: [],
      },
      {
        option: "beer",
        point: 1,
        keyWords: [],
      },
      {
        option: "wine",
        point: 2,
        keyWords: [],
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
        keyWords: [],
      },
      {
        option: "need to talk with Uber driver",
        point: 1,
        keyWords: ["self care"],
      },
      {
        option: "... never.",
        point: 2,
        keyWords: [""],
      },
    ],
  },
};

export const configurations: Config = {
  images: {
    background: {
      desktop: background_desktop,
      mobile: mobile_desktop,
      result: background_result,
    },
    image1: "string",
  },
  uiText: {
    descriptions: {
      box: "Let the festive season commence by decking your halls with the yuletide offerings in our Christmas shop.. Expect Christmas décor, advent calendars, ornaments, stocking fillers and more. Don’t forget our luxury Christmas Hampers for gifting!",
    },
    titles: {
      box: "Collect you first choice gift selection for someone special",
    },
  },

  quizValues,

  colours: {
    colour1: "#2E2D2B",
  },
};
