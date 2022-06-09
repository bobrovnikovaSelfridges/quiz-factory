// import { any } from "../store/types";

export function unparseNewData(
  categoryData: any[],
  categoryName: string
): Array<any> {
  const uniqueProducts: Array<any> = [];
  let hashTable = new Map<string, any>();

  categoryData.forEach((dataUnit: any, i: number) => {
    const description = dataUnit.description;
    const allWords = (dataUnit.title + description).split(" ");

    const dataset: any = {
      id: dataUnit.id,
      description,
      img: dataUnit.img,
      link: dataUnit.link,
      title: dataUnit.title,
      price: dataUnit.price,
    };
    const doesFits = checkParamsInTable(allWords, hashTable, categoryName);
    if (doesFits) uniqueProducts.push(dataset);
  });
  return uniqueProducts;
}

function checkParamsInTable(
  words: string[],
  hashTable: Map<string, any>,
  mainWord: string
): boolean {
  // check if current words set is already in hash table
  const currentWordsTable = hashTable;
  for (const word of words) {
    const currWord = word.toLowerCase();
    // if (isAllowedToRepeat(word, mainWord)) {
    if (
      hashTable.has(currWord) &&
      !isAllowedToRepeat(currWord, mainWord.toLowerCase())
    ) {
      return false;
    } else {
      currentWordsTable.set(currWord, {});
    }
  }
  return true;
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
