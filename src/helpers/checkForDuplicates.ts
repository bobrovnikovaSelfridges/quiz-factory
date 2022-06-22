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

        // const doesFit = checkParamsInTable(allWords, uniqueProducts, keyWord);
        // const noRepeats= isAllowedToRepeat(currWord, mainWord.toLowerCase()
        // if (doesFit) {
        // hashTable.set(keyWord, dataset);
        uniqueProducts[keyWord].concat(dataset);
        // } else {
        //   // console.log(keyWord, dataset);
        // }
      }
    });
  });
  return uniqueProducts;
}

// function checkParamsInTable(
//   words: string[],
//   hashTable: { [key: string]: DataOfItem[] },
//   mainWord: string
// ): boolean {
//   // check if current item from is already in hash table
//   let currentWordsTable = hashTable;
//   for (const word of words) {
//     const currWord = word.toLowerCase();
//     if (
//       hashTable.hasOwnProperty(currWord) &&
//       !isAllowedToRepeat(currWord, mainWord.toLowerCase())
//     ) {
//       console.log(hashTable, currWord);
//       delete currentWordsTable[currWord];
//       return false;
//     } else {
//     }
//   }
//   return true;
// }

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
