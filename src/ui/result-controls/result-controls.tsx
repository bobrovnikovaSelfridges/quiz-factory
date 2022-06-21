import React, { useContext } from "react";
import { configurations } from "../../dev/config";
import html2pdf from "html2pdf.js";
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
    </div>
  );
};

const getPdf = () => {
  const element: HTMLAnchorElement | null =
    document.querySelector("[data-of-js-pdf]");
  const opt = {
    margin: 0,
    filename: "myfile.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: {
      allowTaint: true,
      scale: 2,
      useCORS: true,
    },
    jsPDF: {
      unit: "in",
      format: "a4",
    },
  };

  html2pdf(element, opt);
};
