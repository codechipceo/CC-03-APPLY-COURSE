import React from "react";

const MyImg = ({ img, styles }) => {
  return (
    <img
      style={{
        maxWidth: "100%",
        maxHeight: "100%",
        objectFit: "contain",
        zIndex: 10,
        ...styles,
      }}
      src={img}
      alt=""
    />
  );
};

export default MyImg;
