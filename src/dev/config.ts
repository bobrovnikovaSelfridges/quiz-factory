import { Config, QuizValues } from "../store/types";
import background_desktop from "../assets/background_desktop.jpg";
import mobile_desktop from "../assets/background_mobile.jpg";

import question_1 from "./../assets/question_1.png";
import question_2 from "./../assets/question_2.png";
import question_3 from "./../assets/question_3.png";
import question_4 from "./../assets/question_4.png";
import question_5 from "./../assets/question_5.png";
import loader from "./../assets/loader.png";

export const quizValues: QuizValues = {
  1: {
    img: question_1,
    question: "What is your favorite Christmas meal?",
    options: [
      {
        option: "turkey",
        point: 3,
        keyWords: [
          "traditional",
          "praline",
          "british",
          "handmade",
          "Brand",
          "Brand-appliqué",
          "Brand-embroidered",
          "Brand-patch",
          "Brand-print",
          "home",
          "recipes",
          "oregano",
          "thyme",
          "luxury",
        ],
      },
      {
        option: "roast potatoes",
        point: 1,
        keyWords: [
          "BBQ",
          "home",

          "prime",
          "recipes",
          "BATHING",
          "Butterfingers",
          "grill",
          "CALVIN",
          "handmade",
          "Car",
          "Car-design",
        ],
      },
      {
        option: "gingerbread cookies",
        point: 2,
        keyWords: ["cookie", "vip", "sweets", "chocolate gift", "handmade"],
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
        keyWords: ["coffee", "Cafe", "BALENCIAGA", "chocolate", "fragrance"],
      },
      {
        option: "small local cafe",
        point: 1,
        keyWords: [
          "fragrance",
          "Cafe",
          "funny",
          "Blossom",
          "sweatshirt",
          "hoodie",
          "BEAUTY",
        ],
      },
      {
        option: "No coffee, only cuppa",
        point: 2,
        keyWords: [
          "tea",
          "Classic",
          "Classico",
          "Classics",
          "jam",
          "rose",
          "COFFEE",
          "Blend",
          "Book",
        ],
      },
    ],
  },
  // 3: {
  //   img: question_3,
  //   question: "What is one TV series you can watch over and over again?",
  //   options: [
  //     {
  //       option: "Game of Thrones",
  //       point: 3,
  //       keyWords: ["Game of Thrones", "ANCIENT", "box", "rome","games", "mindfulness", "Bio-Synergy"],
  //     },
  //     {
  //       option: "Peppa pig forever",
  //       point: 1,
  //       keyWords: ["RAINBOW", "kids", 'Sharks', 'Smiley', 'Snapshot', 'Sparkle', 'Summer'],
  //     },
  //     {
  //       option: "Peaky Blinders",
  //       point: 2,
  //       keyWords: ["BOTTLE OPENER",'BBQ', 'Ritual' ,"DR. MARTENS", "black bag"],
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
  //       keyWords: ["earth", 'eco','Caramels', "fruit", "fresh", "rainbow"],
  //     },
  //     {
  //       option: "beer",
  //       point: 1,
  //       keyWords: ["beer", 'Cider', "gentlemen", "lazy", "gaming"],
  //     },
  //     {
  //       option: "wine",
  //       point: 2,
  //       keyWords: ["aesthetic",'Croissant','DESIGN', 'Classics','Cognac', "design", "satin"],
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
  //       keyWords: ["apple", 'RESEARCH', 'RAY-BAN','Projector', "the tech bar", 'Cosmic', "controller", "binoculars"],
  //     },
  //     {
  //       option: "sustainable fashion",
  //       point: 1,
  //       keyWords: ["sustainable", "ecology", "planet", "bundle", "set",   "Compact",
  // "Companion",
  // "Company",
  // "Compass",
  // "Compostable",
  // "Compound",],
  //     },
  //     {
  //       option: "dinner with kids",
  //       point: 2,
  //       keyWords: ['Pokemon',  "cozy","BARBIE",'Prince', "set", 'DISCOVERY', 'disney', "cozy", 'DOLLS','Cream'],
  //     },
  //   ],
  // },
};

export const configurations: Config = {
  images: {
    background: {
      desktop: background_desktop,
      mobile: mobile_desktop,
    },
    loader: loader,
    image1: "string",
  },
  notes: [
    "Granny will be surprised",
    "Mummy or auntie",
    "Nice one for brother",
  ],
  uiText: {
    descriptions: {
      result: "",
      box: "Let the festive season commence by decking your halls with the yuletide offerings in our Christmas shop.. Expect Christmas décor, advent calendars, ornaments, stocking fillers and more. Don’t forget our luxury Christmas Hampers for gifting!",
    },
    titles: {
      calendarEventFile: "my_gifts_reminder",
      copyLink: "Copy link",
      saveReminderBtn: "Set a reminder",
      selection: "save your personal top {NUMBER} of Christmas {GIFT}",
      savePdfBtn: "Download",
      result: "Genereting your personal gift selection...",
      box: "Collect you first choice gift selection for someone special",
    },
  },
  reminders: {
    // "Early winter": {
    end: [2023, 12, 10],
    url: "https://www.selfridges.com/GB/en/",
    start: [2023, 12, 1],
    title: "It's time to look at your guide at Selfridges!",
    location: "Selfridges, Oxford street",
    // },
    // "Almost Christmas eve": {
    //   end: [2023, 12, 15],
    //   url: "https://www.selfridges.com/GB/en/",
    //   start: [2023, 12, 10],
    //   title: "Your favourite Christmas party at Selfridges! Stay tuned",
    //   location: "Selfridges, Oxford street",
    // },
    // "Twice!": undefined,
  },
  tips: [
    {
      text: "make them play",
      desc: "Look at our gaming guide!!",
      keyWords: ["Funny", "game"],
    },
    {
      text: "Make urself warm",
      desc: "Look at our gaming guide!!",
      keyWords: ["sweatshirt", "warm"],
    },
    {
      text: "selfridges candies guide",
      desc: "This amazing brand has also so manyyy sweets",
      keyWords: ["chocolate", "bisquits", "truffles"],
    },
    {
      text: "some tips for you",
      desc: "This amazing brand has sale!",
      keyWords: ["parfum"],
    },
  ],

  quizValues,

  colours: {
    tip: "#E694A3",
    mainBtn: "rgb(255,226,85)",
    tip1: "#2E2D2B",
    tip2: "#2E2D2B",
  },
};
