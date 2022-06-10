import React from "react";
import { QuizValues } from "../../store/types";
import { Description } from "../description/description";
import "./question-box.css";

type Props = {
  isMobile: boolean;
  children: React.ReactNode;
} & QuizValues;

export const QuestionBox = (props: Props) => {
  const description = "";
  const shortenDecription =
    description.substring(0, description.length / 3) + "...";

  return (
    <div className="headerRoot">
      <img src={""} />
      <div className="container" />
      <h1>Selfridges Christmas Market</h1>
      <Description
        description={props.isMobile ? shortenDecription : description}
        classname={"description"}
      />
    </div>
  );
};
