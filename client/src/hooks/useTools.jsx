import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useTheme } from "@mui/material/styles";

export const useTools = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const theme = useTheme();

  return {
    dispatch,
    navigate,
    useDispatch,
    useParams,
    useSelector,
    theme,
  };
};
