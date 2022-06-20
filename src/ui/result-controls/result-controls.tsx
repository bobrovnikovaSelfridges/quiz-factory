import React, { useContext } from "react";
import { configurations } from "../../dev/config";
// import { jsPDF, fromHTML } from "jspdf";
import { Btn } from "../btn/btn";

import s from "./result-controls.module.css";

export const ResultControls = () => {
  // const { params, states } = useContext<QuizContextType>(QuizContext);

  return (
    <div className={s.root}>
      <Btn
        text={configurations.uiText.titles.savePdfBtn}
        onClick={() => {
          getPdf();
        }}
      />
      <a></a>
    </div>
  );
};

const getPdf = () => {
  var link: HTMLAnchorElement | null =
    document.querySelector("a[data-of-js-pdf]");
  if (link) {
    // link.href = url;
    link.download = "file.pdf";
    link.dispatchEvent(new MouseEvent("click"));
  }
};
