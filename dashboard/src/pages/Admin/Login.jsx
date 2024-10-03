import { Box, Button, TextField, Typography } from "@mui/material";
import bgImage from "../../assets/loginBackground.jpg";
import { useState } from "react";
import { login } from "@/thunk/indexThunk";
import { useDispatch } from "react-redux";
export const Login = () => {
  const [loginState, setLoginState] = useState({
    username: "",
    password: "",
  });
const dispatch  = useDispatch()

  const handleChange = (e) => {
    const { name, value } = e.target;
    const data = { ...loginState };
    data[name] = value;
    setLoginState(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const {data} = await dispatch(login(loginState)).unwrap();
  };
  return (
    <div style={{ zIndex: 5, position: "absolute", width: "100vw" }}>
      <div
        style={{
          background: `url(${bgImage})`,
          minHeight: "100vh",

          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
        }}
      >
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          height={"100vh"}
          mx={3}
        >
          <Box
            bgcolor={"white"}
            py={2}
            px={4}
            borderRadius={5}
            maxWidth={"350px"}
            width={"100%"}
          >
            <Typography
              mb={3}
              textAlign={"center"}
              fontWeight={"bold"}
              color={"#c35df7"}
            >
              Studydiploma
            </Typography>

            <Box>
              <Typography>Username</Typography>
              <TextField
                onChange={handleChange}
                fullWidth
                variant='standard'
                name='username'
                type='text'
              />
            </Box>

            <Box my={3}>
              <Typography>Password</Typography>
              <TextField
                onChange={handleChange}
                variant='standard'
                fullWidth
                name='password'
                type='password'
              />
            </Box>
            <Box>
              <Button
                variant='contained'
                disableElevation
                fullWidth
                onClick={ (e) =>handleSubmit(e)}
              >
                Login
              </Button>
            </Box>

            <Typography
              mt={3}
              fontSize={12}
              textAlign={"center"}
              fontWeight={"300"}
            >
              Developed By <br />{" "}
              <a color='#c35df7' to={"https://codechip.in"} target='_blank'>
                {" "}
                Codechip Studios
              </a>
            </Typography>
          </Box>
        </Box>
      </div>
    </div>
  );
};