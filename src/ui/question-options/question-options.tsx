import { useField } from "formik";
import React from "react";
import { useQiuzContext } from "../../services/quizContext";
// import QuizContext, { QuizContextType } from "../../services/quizContext";
import { OptionType, QuizValues, QuizValueType } from "../../store/types";
import { Btn } from "../btn/btn";
import { Description } from "../description/description";
import "./question-options.css";

type Props = {
  option: OptionType;
  questionNumber: string;
};

export const QuestionOptions = ({ option, questionNumber }: Props) => {
  // const { field } = useQiuzContext();
  const [field, meta, helpers] = useField<string[]>(questionNumber);
  console.log(field, meta, helpers);

  return <div>QuestionOptions + {option.option}</div>;
};
// <QuizContext.Consumer>
// {(value: QuizContextType) => {
//   return (
//     <Btn
//       text={option.option}
//       onClick={() => value.onClick(option, questionNumber)}
//     />
//   );
// }}
/* {console.log(points)}
      <Btn text={option.option} onClick={option.option} />; */
// </QuizContext.Consumer>
//   );
// };
