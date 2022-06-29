import { Description } from "../description/description";
import { ImageBtn } from "../select-btn/select-btn";
import {
  DataOfItem,
  StatesContextType,
  SchemaUnit,
  Tip as TipType,
} from "../../store/types";
import { configurations } from "../../dev/config";
import s from "./card.module.css";
import { useContext } from "react";
import { Tip } from "../tip/tip";
import { QuizContext } from "../../services/quizContext";
import { setParamsForUrl } from "../../services/set-params-in-curr-location-url";

type Props = {
  isDisplayed: boolean;
  dataset: SchemaUnit;
  children?: React.ReactNode;
};

export const Card = (props: Props) => {
  const { states } = useContext(QuizContext);

  const cardData = props.dataset;

  const img = `https://images.selfridges.com/is/image/selfridges/${cardData.imageName}`;
  const url = `https://www.selfridges.com/GB/en/cat/${cardData.seoKey}`;

  const addToSelection = () => updateUsersSelection(states, props.dataset);
  const removeFromSelection = () =>
    updateUsersSelection(states, props.dataset, true);

  const isSelected = states.usersSelectedCards.values.hasOwnProperty(
    props.dataset.productId
  );

  return (
    <div
      style={{
        display: props.isDisplayed ? "inherit" : "none",
        opacity: isSelected ? "1" : " .75",
      }}
      className={s.root}
    >
      {/* {tip && <Tip tip={tip} />} */}
      <ImageBtn
        isSelected={isSelected}
        onChange={isSelected ? removeFromSelection : addToSelection}
      />

      <div className={s.productLinks}>
        <button className={s.btn} onClick={() => window.open(url)}>
          {cardData.price[0].lowestPrice + cardData.price[0].currency}
        </button>

        <button className={s.btn} onClick={() => window.open(url)}>
          {`Shop now`}
        </button>
      </div>
      <img className={s.cardImg} src={img} />

      <div className={s.textInCard}>
        <div className={s.title}> {cardData.name}</div>

        <Description
          description={cardData.brandName}
          classname={s.cardDescription}
        />
      </div>
      {props.children}
    </div>
  );
};

// const findTip = (id: string) => {
//   return Object.entries(configurations.tips).find(
//     (value: [string, TipType]) => {
//       return value[0] === id;
//     }
//   );
// };

const updateUsersSelection = (
  states: StatesContextType,
  addedCard: SchemaUnit,
  remove = false
): void => {
  const newValues = { ...states.usersSelectedCards.values };
  if (remove) {
    delete newValues[addedCard.productId];
  } else {
    newValues[addedCard.productId] = addedCard;
  }
  const newUrl = Object.keys(newValues);
  setParamsForUrl({ gifts: getNewUrl(newUrl) });

  states.url.onChange(newUrl);
  states.usersSelectedCards.onChange(newValues);
};

const getNewUrl = (newUrl: string[] | undefined): string => {
  return newUrl ? newUrl.map((urlId: string) => urlId).join("-") : "";
};
