import React from "react";

const MyImg = ({ img }) => {
  return (
    <img
      style={{
        maxWidth: "100%",
        maxHeight: "100%",
        objectFit: "contain",
      }}
      src={img}
      alt=""
    />
  );
};

export default MyImg;
