import React from 'react'
import LoaderImage  from  '../../assets/loader.gif'
export const Loader = () => {
  return (
    <div
      style={{
        minHeight: "200vh",
        width: "100vw",
        position: "absolute",
        top: "0",
        left: "0",
        backgroundColor: "rgba(0,0,0,0.8)",
        zIndex: 3,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          color: "white",
          fontSize: "48px",
        }}
      >
        <img src={LoaderImage} alt='' height={60} />
      </div>
    </div>
  );
}
