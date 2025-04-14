import React from "react";
import css from "./ImageCard.module.css";
const ImageCard = ({ sendPhoto, handleClick }) => {
  return (
    <ul className={css.cards}>
      {sendPhoto.map((item) => (
        <li key={item.id}>
          <div className={css.listCard}>
            <img
              onClick={() => handleClick(item.urls.regular)}
              src={item.urls.small}
              width={400}
              height={400}
            />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ImageCard;
