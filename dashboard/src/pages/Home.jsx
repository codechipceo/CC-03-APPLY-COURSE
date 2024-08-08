import { useTools } from "@/hooks/useTools";
import { login } from "@/thunk/indexThunk";

import { useEffect } from "react";

export const Home = () => {
  const { dispatch } = useTools();
  useEffect(() => {
    dispatch(login({ username: "mansabmeer", password: "123" }));
  });
  return <div>Home</div>;
};
