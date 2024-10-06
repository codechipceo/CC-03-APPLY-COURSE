import { Box, Modal, Typography } from "@mui/material";
import WomenBg  from  '@/assets/women.jpg'

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  maxWidth: "600px", // Optional: To limit max width
  boxShadow: 24,
  backgroundColor: "rgba(0, 0, 0, 0.6)", // Fallback in case the image doesn't load
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('${WomenBg}')`, // Replace with your image URL
  backgroundSize: "cover",
  backgroundPosition: "center",
  color: "white", // Ensures text is visible over the dark background
  p: 4,
  borderRadius: "5px",
};
export const CustomModal = ({ open, handleClose, children }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      fullWidth
    >
      <Box sx={style}>{children}</Box>
    </Modal>
  );
};
