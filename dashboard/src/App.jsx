import { AppRouter } from "@/Routes";
import { BrowserRouter } from "react-router-dom";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Box } from "@mui/material";
import { Login } from "./pages/Admin/Login";
import { useSelector } from "react-redux";
import { adminState } from "./slices/adminSlice";
function App() {
  const { token: adminToken } = useSelector(adminState);
  return (
    <>

      {!adminToken ? (
        <Login />
      ) : (
        <BrowserRouter>
        <>
          <Box display={"flex"}>
            <Box maxWidth={"250px"}>
              <Sidebar />
            </Box>

            <Box
              minHeight={"100vh"}
              bgcolor={"#ededed"}
              flex={1}
              overflow={"hidden"}
            >
              <AppRouter />
            </Box>
          </Box>
        </>
    </BrowserRouter>
      )}
    </>
  );
}

export default App;
