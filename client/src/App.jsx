import routes from "@/Routes";
import { RouterProvider } from "react-router-dom";
// import TopBar from "./components/TopBar/TopBar";
import MyAppBar from "./components/TopBar/AppBar";
import logoImg from "./assets/img/logo.png";
import { Container } from "@mui/material";

function App() {
  return (
    <>
      <Container maxWidth="xl" disableGutters>
        <MyAppBar logoImg={logoImg} />
        <RouterProvider router={routes} />
      </Container>
    </>
  );
}

export default App;
