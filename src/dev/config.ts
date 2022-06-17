import { Config, QuizValues } from "../store/types";
import background_desktop from "../assets/background_desktop.jpg";
import mobile_desktop from "../assets/background_mobile.jpg";
import background_result from "../assets/background_result.jpg";

import question_1 from "./../assets/question_1.png";
import question_2 from "./../assets/question_2.png";
import question_3 from "./../assets/question_3.png";
import question_4 from "./../assets/question_4.png";
import question_5 from "./../assets/question_5.png";
import loader from "./../assets/loader.jpeg";

export const quizValues: QuizValues = {
  1: {
    img: question_1,
    question: "What is your favorite Christmas meal?",
    options: [
      {
        option: "turkey",
        point: 3,
        keyWords: ["traditional", "british", "handmade"],
      },
      {
        option: "roast potatoes",
        point: 1,
        keyWords: ["potatoe", "handmade", "grill"],
      },
      {
        option: "gingerbread cookies",
        point: 2,
        keyWords: ["cookie", "sweets", "chocolate gift"],
      },
    ],
  },
  // 2: {
  //   img: question_2,
  //   question: "What is your favorite coffee shop?",
  //   options: [
  //     {
  //       option: "starbucks or costa",
  //       point: 3,
  //       keyWords: ["coffee", "chocolate", "fragrance"],
  //     },
  //     {
  //       option: "small local cafe",
  //       point: 1,
  //       keyWords: ["fragrance", "funny", "sweatshirt", "hoodie"],
  //     },
  //     {
  //       option: "No coffee, only cuppa",
  //       point: 2,
  //       keyWords: ["tea", "jam", "rose"],
  //     },
  //   ],
  // },
  // 3: {
  //   img: question_3,
  //   question: "What is one TV series you can watch over and over again?",
  //   options: [
  //     {
  //       option: "Game of Thrones",
  //       point: 3,
  //       keyWords: ["Game of Thrones", "ANCIENT", "box", "rome"],
  //     },
  //     {
  //       option: "Black Mirror",
  //       point: 1,
  //       keyWords: ["games", "mindfulness", "Bio-Synergy"],
  //     },
  //     {
  //       option: "Peaky Blinders",
  //       point: 2,
  //       keyWords: ["BOTTLE OPENER", "DR. MARTENS", "black bag"],
  //     },
  //   ],
  // },
  // 4: {
  //   img: question_4,
  //   question: "They prefer...",
  //   options: [
  //     {
  //       option: "carrot juice",
  //       point: 3,
  //       keyWords: ["earth", "fruit", "fresh", "rainbow"],
  //     },
  //     {
  //       option: "beer",
  //       point: 1,
  //       keyWords: ["beer", "gentlemen", "lazy", "gaming"],
  //     },
  //     {
  //       option: "wine",
  //       point: 2,
  //       keyWords: ["aesthetic", "design", "satin"],
  //     },
  //   ],
  // },
  // 5: {
  //   img: question_5,
  //   question: "This person loves...",
  //   options: [
  //     {
  //       option: "modern tech",
  //       point: 3,
  //       keyWords: ["apple", "the tech bar", "controller", "binoculars"],
  //     },
  //     {
  //       option: "sustainable fashion",
  //       point: 1,
  //       keyWords: ["sustainable", "ecology", "planet"],
  //     },
  //     {
  //       option: "cozy evenings",
  //       point: 2,
  //       keyWords: ["bundle", "set", "cozy"],
  //     },
  //   ],
  // },
};

export const configurations: Config = {
  images: {
    background: {
      desktop: background_desktop,
      mobile: mobile_desktop,
      result: background_result,
    },
    loader: loader,
    image1: "string",
  },
  uiText: {
    descriptions: {
      result: "",
      box: "Let the festive season commence by decking your halls with the yuletide offerings in our Christmas shop.. Expect Christmas décor, advent calendars, ornaments, stocking fillers and more. Don’t forget our luxury Christmas Hampers for gifting!",
    },
    titles: {
      result: "Genereting your personal gift selection...",
      box: "Collect you first choice gift selection for someone special",
    },
  },

  tips: {
    "LA MOLINA": {
      text: "",
      desc: "",
    },

    "ASK MUMMY AND DADDY": {
      text: "",
      desc: "",
    },

    sweets_15: {
      text: "",
      desc: "",
    },
  },

  quizValues,

  colours: {
    tip: "#E694A3",
    mainBtn: "rgb(255,226,85)",
    tip1: "#2E2D2B",
    tip2: "#2E2D2B",
  },
};
