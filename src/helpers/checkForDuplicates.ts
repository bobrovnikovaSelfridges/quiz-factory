import { DataOfItem } from "../store/types";

export function checkForDuplicates(categoryData: {
  [key: string]: DataOfItem[];
}): { [key: string]: DataOfItem[] } {
  const uniqueProducts: { [key: string]: DataOfItem[] } = {};

  const allData = Object.entries(categoryData);

  allData.forEach((dataUnit: [string, DataOfItem[]], i: number) => {
    const keyWord = dataUnit[0];
    const keyWordUnits = dataUnit[1];
    uniqueProducts[keyWord] = [];

    const titles: string[] = [];
    keyWordUnits.forEach((dataUnit: DataOfItem) => {
      const allWords = dataUnit.title.split(" ");
      const dataset: DataOfItem = {
        id: dataUnit.id,
        description: dataUnit.description,
        img: dataUnit.img,
        link: dataUnit.link,
        title: dataUnit.title,
        price: dataUnit.price,
        keyWord,
      };

      if (!titles.includes(dataUnit.title)) {
        // no repeating items in category

        titles.push(dataUnit.title);
        uniqueProducts[keyWord].concat(dataset);
      }
    });
  });
  return uniqueProducts;
}

const isAllowedToRepeat = (word: string, mainWord: string) =>
  allowedRepeatedWrds.includes(word) || word === mainWord;

const allowedRepeatedWrds = [
  "for",
  "the",
  "at",
  "and",
  "yellow-gold",
  "nor",
  "but",
  "or",
  "yet",
  "of",
  "14ct",
  "9ct",
  "covered",
  "gold",
  "from",
  "all",
  "rose",
  "with",
  "so",
  "",
  "on",
];
