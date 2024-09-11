const LogoImg = ({ logoImg }) => {
  return (
    <img
      style={{
        width: "220px",
        maxWidth: "100%",
        maxHeight: "100%",
        objectFit: "contain", // Ensures the image maintains its aspect ratio and fits within the container
      }}
      src={logoImg}
      alt='Logo image'
    />
  );
};

export default LogoImg;
