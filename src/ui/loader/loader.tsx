import React from "react";
import s from "./loader.module.css";
import { CARD_HEIGHT } from "../../services/constants";

type Props = {
  img: string;
  isVisible: boolean;
  amount?: number;
};
export const Loader: React.FC<Props> = ({ isVisible, img, amount }: Props) => {
  return isVisible ? (
    <div className={s.root}>{loadImgs(img, amount)}</div>
  ) : (
    <></>
  );
};

const calculateAmountOfImages = () => {
  const oneRem = 16;
  const windowWidth = window.innerWidth - oneRem;
  const eachCellHeightOrWidth = Math.floor(5.5 * oneRem);

  const maxAmountInHeight = Math.floor(CARD_HEIGHT / eachCellHeightOrWidth);
  const maxAmountInWidth = Math.floor(windowWidth / eachCellHeightOrWidth);
  const maxAmount = maxAmountInHeight * maxAmountInWidth;
  return maxAmount;
};

const loadImgs = (img: string, amount?: number): React.ReactElement[] | any => {
  const data = [];
  let i = 0;
  const imageHTML = (
    <img
      style={{
        animationDelay: amount && amount === 1 ? "0" : `${i / 10}s`,
      }}
      key={`${i}${img}`}
      src={img}
    />
  );
  const amountOfImgs = amount ? amount : calculateAmountOfImages();

  if (amountOfImgs === 1) {
    return imageHTML;
  } else {
    while (i !== amountOfImgs) {
      const item: React.ReactElement<HTMLImageElement> = (
        <img
          style={{
            animationDelay: `${i / 10}s`,
          }}
          key={`${i}${img}`}
          src={img}
        />
      );
      data.push(item);
      i++;
    }
    return data;
  }
};
