import React from "react";
import css from "./ImageCard.module.css";
const ImageCard = ({ sendPhoto }) => {
  return (
    <ul className={css.cards}>
      {sendPhoto.map((item) => (
        <li key={item.id}>
          <img src={item.urls.small} width={500} height={500} />
        </li>
      ))}
    </ul>
  );
};

export default ImageCard;
