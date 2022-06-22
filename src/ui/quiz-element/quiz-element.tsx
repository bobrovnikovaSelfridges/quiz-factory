import { QuizValueType } from "../../store/types";
import { Description } from "../description/description";
import { QuestionOptions } from "../question-options/question-options";
import s from "./quiz-element.module.css";

type Props = {
  questionUnits: QuizValueType;
};

export const QuizElement = ({ questionUnits }: Props) => {
  return (
    <div className={s.root}>
      <div className={s.asterisk}>* * * </div>
      <Description
        classname={s.question}
        description={questionUnits.question}
      />

      {/* options selection */}
      <QuestionOptions />
    </div>
  );
};
