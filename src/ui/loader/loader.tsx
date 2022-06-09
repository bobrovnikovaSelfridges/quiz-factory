import React from "react";
import "./loader.css";
import "swiper/css";
import { CARD_HEIGHT } from "../../services/constants";

type Props = { text?: string; img: string; isVisible: boolean };
export const Loader: React.FC<Props> = ({ text, isVisible, img }: Props) => {
  return isVisible ? (
    <div className="loaderRoot">
      <div className="text">{text}</div>
      {loadImgs(img)}
    </div>
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

const loadImgs = (img: string): React.ReactElement[] | any => {
  const data = [];
  let i = 0;
  const amountOfImgs = calculateAmountOfImages();
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
};
