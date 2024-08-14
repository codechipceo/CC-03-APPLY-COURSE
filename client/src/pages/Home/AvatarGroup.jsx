import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Elipse from "@/assets/home/RecruitmentPartnersImg/Ellipse 2.jpg";

const AvatarGroup = () => {
  return (
    <AvatarGroup
      max={9}
      sx={{
        justifyContent: "start",
        flexDirection: "row-reverse",
        "--AvatarGroup-gap": "-8px",
        "--Avatar-size": "62px",
        "--Avatar-ringSize": "-1px",
      }}
    >
      <Avatar alt="Remy Sharp" src={Elipse} />
      <Avatar alt="Remy Sharp" src={Elipse} />
      <Avatar alt="Remy Sharp" src={Elipse} />
      <Avatar alt="Remy Sharp" src={Elipse} />
      <Avatar alt="Remy Sharp" src={Elipse} />
      <Avatar alt="Remy Sharp" src={Elipse} />
      <Avatar alt="Remy Sharp" src={Elipse} />
      <Avatar alt="Remy Sharp" src={Elipse} />
    </AvatarGroup>
  );
};

export default AvatarGroup;
