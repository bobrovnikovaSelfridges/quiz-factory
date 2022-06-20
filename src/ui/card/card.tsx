import { Description } from "../description/description";
import { ImageBtn } from "../select-btn/select-btn";
import { DataOfItem, Tip as TipType } from "../../store/types";
import { configurations } from "../../dev/config";
import { exclusions } from "../../assets 1/keywords_example";

import s from "./card.module.css";
import { useContext } from "react";
import { Tip } from "../tip/tip";
import { QuizContext } from "../../services/quizContext";

type Props = {
  isDisplayed: boolean;
  dataset: [string, DataOfItem];
};

export const Card = (props: Props) => {
  const { states } = useContext(QuizContext);

  const cardData = props.dataset[1];
  const tip = findTip(cardData.id);
  const updateSelection = () =>
    updateUsersSelection(states.usersSelectedCards, props.dataset);

  const isSelected = states.usersSelectedCards.values.hasOwnProperty(
    props.dataset[0]
  );

  return (
    <div
      style={{
        display: props.isDisplayed ? "none" : "inherit",
        opacity: isSelected ? "1" : " .75",
      }}
      id={props.dataset[0]}
      className={s.root}
    >
      {tip && <Tip tip={tip} />}
      <ImageBtn isSelected={isSelected} onChange={updateSelection} />

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

        <Description
          description={cardData.description}
          classname={s.cardDescription}
        />
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

const updateUsersSelection = (
  usersSelectedCards: {
    values: { [id: string]: DataOfItem };
    onChange: React.Dispatch<
      React.SetStateAction<{ [id: string]: DataOfItem }>
    >;
  },
  addedCard: [string, DataOfItem]
): void => {
  const newValues = { ...usersSelectedCards.values };
  newValues[addedCard[0]] = addedCard[1];
  usersSelectedCards.onChange(newValues);
};
