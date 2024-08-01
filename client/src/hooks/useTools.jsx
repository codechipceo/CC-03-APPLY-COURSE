import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export const useTools = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return {
    dispatch,
    navigate,
      useDispatch,
    useParams,
    useSelector,
  };
};
