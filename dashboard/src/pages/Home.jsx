import { HeaderBar } from "@/components/Wrapper";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate()
  useEffect(() => {
    navigate("/school")

  })
  return (
    <div>
      <HeaderBar title={"DASHBOARD"} />
    </div>
  );
};
