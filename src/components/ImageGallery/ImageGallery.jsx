import React from "react";
import ImageCard from "./ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ sendPhoto, handleClick }) => {
  return (
    <div>
      <ImageCard sendPhoto={sendPhoto} handleClick={handleClick} />
    </div>
  );
};

export default ImageGallery;
