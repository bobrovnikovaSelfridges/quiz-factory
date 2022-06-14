import { Description } from "../description/description";
import { ImageBtn } from "../select-btn/select-btn";
import { IRawDataUnit } from "../../store/types";
import s from "./card.module.css";
import { useState } from "react";

type Props = {
  isDisplayed: boolean;
  dataset: [string, IRawDataUnit];
};

export const Card = (props: Props) => {
  const [isSelected, setSelection] = useState(false);
  const cardData = props.dataset[1];
  return (
    <div
      style={{
        display: props.isDisplayed ? "none" : "inherit",
        opacity: isSelected ? "1" : " .7",
      }}
      id={props.dataset[0]}
      className={s.root}
    >
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
