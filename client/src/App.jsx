import { Box } from "@mui/material";
import ThankYouScreen from "./pages/ThankYouScreen";
import { selectProgram } from "./slices/programSlice";
import { useSelector } from "react-redux";
import { RouterProvider } from "react-router-dom";
import routes from "./Routes";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function App() {
  const { showThankYou } = useSelector(selectProgram);
  return (
    <Box>
      {!showThankYou ? (
        <>
          {" "}
          <RouterProvider router={routes} />
          <Footer />
        </>
      ) : (
        <ThankYouScreen />
      )}

      <ToastContainer />
    </Box>
  );
}

export default App;
