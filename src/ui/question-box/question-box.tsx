import React from "react";
import { Description } from "../description/description";
import "./question-box.css";

type Props = {
  isMobile: boolean;
};

export const QuestionBox = (props: Props) => {
  const description = "";
  const shortenDecription =
    description.substring(0, description.length / 3) + "...";

  return (
    <div className="headerRoot">
      <img
        src={
          "https://images.unsplash.com/photo-1513884923967-4b182ef167ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
        }
      />
      <h1>Selfridges Christmas Market</h1>
      <Description
        description={props.isMobile ? shortenDecription : description}
        classname={"description"}
      />
    </div>
  );
};
