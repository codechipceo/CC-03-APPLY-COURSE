import { Box, Button, Typography } from "@mui/material";
import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
export const QrCard = ({ data, handleEdit, handleDelete }) => {
  const { url, qrName, qrBase64, destinationUrl, _id } = data;

  return (
    <Box
      px={1}
      py={1}
      mx={2}
      
      display={"flex"}
      justifyContent={"space-between"}
      boxShadow={1}
      borderRadius={3}
      my={3}
    >
      <Box>
        <Box p={2}>
          <img src={qrBase64} alt='' />
        </Box>
        <Typography variant='body1'>Name : {qrName} </Typography>
        <Typography variant='body1' mt={2}>
          Qr code Url :<a href={url}>{url}</a>
        </Typography>
        <Typography
          variant='body1'
          mt={2}
          flexWrap={"wrap"}
          sx={{ wordBreak: "break-word", whiteSpace: "normal" }}
        >
          Final Destination Url :<a href={destinationUrl}>{destinationUrl}</a>
        </Typography>
      </Box>
      <Box>
        <span onClick={handleEdit}>
          <EditIcon color='primary' />
        </span>
        <button popovertarget={_id}>
          <DeleteIcon color='error' />
        </button>
        <div id={_id} popover='true' style={{ border: "0px transparent" }}>
          <Box
            bgcolor={"#d3d3d3"}
            p={5}
            display={"flex"}
            flexDirection={"column"}
          >
            <Typography mb={2}>
              Are You Sure you want to delete {`${qrName}`} ?
            </Typography>
            <Box display={"flex"} justifyContent={"space-around"}>
              <Button
                variant='contained'
                popovertarget={_id}
                popovertargetaction={_id}
                onClick={() => handleDelete(_id)}
              >
                Yes
              </Button>
              <Button
                variant='contained'
                popovertarget='delete'
                popovertargetaction='delete'
              >
                Cancel
              </Button>
            </Box>
          </Box>
        </div>
      </Box>
    </Box>
  );
};
