import { Box, Typography } from "@mui/material";
import React from "react";
import EditIcon from "@mui/icons-material/Edit";
export const QrCard = ({ data, handleEdit }) => {
  const { url, qrName, qrBase64 , destinationUrl } = data;
  return (
    <Box px={3} py={1} boxSizing={"border-box"} display={"flex"} >
      <Box>
        <Box p={2}>
          <img src={qrBase64} alt='' />
        </Box>
        <Typography variant='body1'>Name : {qrName} </Typography>
        <Typography variant='body1' mt={2}>
          Qr code Url :<br/><a href={url}>{url}</a>
        </Typography>
        <Typography variant='body1' mt={2}>
        Final Destination Url :<br/> <a href={destinationUrl}>{destinationUrl}</a>
        </Typography>
      </Box>
      <span onClick={handleEdit}>
        <EditIcon />
      </span>
    </Box>
  );
};
