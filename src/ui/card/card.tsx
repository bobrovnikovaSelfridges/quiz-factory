import { Description } from "../description/description";
import { ImageBtn } from "../select-btn/select-btn";
import { IRawDataUnit, Tip as TipType } from "../../store/types";
import { configurations } from "../../dev/config";

import s from "./card.module.css";
import { useState } from "react";
import { Tip } from "../tip/tip";

type Props = {
  isDisplayed: boolean;
  dataset: [string, IRawDataUnit];
};

export const Card = (props: Props) => {
  const [isSelected, setSelection] = useState(false);
  const cardData = props.dataset[1];
  const tip = findTip(cardData.id);
  return (
    <div
      style={{
        display: props.isDisplayed ? "none" : "inherit",
        opacity: isSelected ? "1" : " .7",
      }}
      id={props.dataset[0]}
      className={s.root}
    >
      {tip && <Tip tip={tip} />}
      <ImageBtn selectionSettings={{ isSelected, setSelection }} />

      <div className={s.productLinks}>
        <button className={s.btn} onClick={() => window.open(cardData.link)}>
          {`${cardData.price}`}
        </button>

        <button className={s.btn} onClick={() => window.open(cardData.link)}>
          {`Shop now`}
        </button>
      </div>
      <img className={s.cardImg} src={cardData.img} />

      <div className={s.textInCard}>
        <div className={s.title}> {cardData.title}</div>

        <Description description={cardData.description} classname={s.desc} />
      </div>
    </div>
  );
};

const findTip = (id: string) => {
  return Object.entries(configurations.tips).find(
    (value: [string, TipType]) => {
      return value[0] === id;
    }
  );
};
