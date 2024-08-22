import React from "react";

const MyImg = ({ img }) => {
  return (
    <img
      style={{
        maxWidth: "100%",
        maxHeight: "100%",
        objectFit: "contain",
        zIndex: 10,
      }}
      src={img}
      alt=""
    />
  );
};

export default MyImg;
