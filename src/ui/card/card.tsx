import { Description } from "../description/description";
import { ImageBtn } from "../select-btn/select-btn";
import {
  DataOfItem,
  StatesContextType,
  Tip as TipType,
} from "../../store/types";
import { configurations } from "../../dev/config";
import s from "./card.module.css";
import { useContext } from "react";
import { Tip } from "../tip/tip";
import { QuizContext } from "../../services/quizContext";

type Props = {
  isDisplayed: boolean;
  dataset: [string, DataOfItem];
  children?: React.ReactNode;
};

export const Card = (props: Props) => {
  const { states } = useContext(QuizContext);

  const cardData = props.dataset[1];
  const tip = findTip(cardData.id);
  const addToSelection = () => updateUsersSelection(states, props.dataset);
  const removeFromSelection = () =>
    updateUsersSelection(states, props.dataset, true);

  const isSelected = states.usersSelectedCards.values.hasOwnProperty(
    props.dataset[0]
  );

  return (
    <div
      style={{
        display: props.isDisplayed ? "inherit" : "none",
        opacity: isSelected ? "1" : " .75",
      }}
      id={props.dataset[0]}
      className={s.root}
    >
      {tip && <Tip tip={tip} />}
      <ImageBtn
        isSelected={isSelected}
        onChange={isSelected ? removeFromSelection : addToSelection}
      />

      <div className={s.productLinks}>
        <button className={s.btn} onClick={() => window.open(cardData.link)}>
          {cardData.price}
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
      {props.children}
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
  states: StatesContextType,
  addedCard: [string, DataOfItem],
  remove = false
): void => {
  const newValues = { ...states.usersSelectedCards.values };
  if (remove) {
    delete newValues[addedCard[0]];
  } else {
    newValues[addedCard[0]] = addedCard[1];
  }
  const newUrl = Object.keys(newValues);
  states.url.onChange(newUrl);
  states.usersSelectedCards.onChange(newValues);
};
