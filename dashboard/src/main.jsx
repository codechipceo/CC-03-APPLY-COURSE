import { store } from "@/slices/store.js";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.jsx";
import "./index.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
    <ToastContainer />
  </Provider>
);
// DASHbORD TO DO
// 1. Update fields of Program Offering
// 2. Create Home Page

// 3. Add Login Page & backend auth
// 4. Update Website Landing Page
// 5. Sync old website
// 6. Migrate to new domain
//
//
//
//
