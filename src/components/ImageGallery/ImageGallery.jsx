import React from "react";
import ImageCard from "./ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ sendPhoto }) => {
  return (
    <div>
      <ImageCard sendPhoto={sendPhoto} />
    </div>
  );
};

export default ImageGallery;
