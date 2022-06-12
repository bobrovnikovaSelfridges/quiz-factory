import { Description } from "../description/description";
import { SelectBtn } from "../select-btn/select-btn";
import s from "./card.modules.css";
import "swiper/css/keyboard";
import "swiper/css/lazy";
import { IRawDataUnit } from "../../store/types";

type Props = { dataset: [string, IRawDataUnit] };
export const Card = (props: Props) => {
  const cardData = props.dataset[1];
  return (
    <>
      <SelectBtn {...props} />

      <div className={s.productLinks}>
        <button
          className={(s.btn, s.price)}
          onClick={() => window.open(cardData.link)}
        >
          {`${cardData.price}`}
        </button>

        <button className={s.btn} onClick={() => window.open(cardData.link)}>
          {`Shop now`}
        </button>
      </div>
      <img
        style={{
          // each third ?
          height:
            // (props.idx && props.idx % 3 === 0) ||
            cardData.description.length > 64 ? "60%" : "75%",
        }}
        src={cardData.img}
      />

      <div className={s.textInCard}>
        <div className={s.title}> {cardData.title}</div>

        <Description description={cardData.description} classname={s.desc} />
      </div>
    </>
  );
};
