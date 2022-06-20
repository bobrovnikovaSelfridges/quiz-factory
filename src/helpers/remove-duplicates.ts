import { configurations } from "../dev/config";
import { OptionType, QuizValueType } from "../store/types";

export function removeDuplicates(): any {
  let allKeyWords: string[] = [];
  Object.values(configurations.quizValues).forEach(
    (question: QuizValueType) => {
      question.options.forEach((option: OptionType) =>
        option.keyWords.forEach((keyWordsUnit: string) => {
          if (!allKeyWords.includes(keyWordsUnit)) {
            allKeyWords.push(keyWordsUnit);
          }
        })
      );
    }
  );

  // console.log(allKeyWords);
}
