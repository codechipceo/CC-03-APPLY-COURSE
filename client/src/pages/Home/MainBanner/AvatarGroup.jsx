import { AvatarGroup, Avatar } from "@mui/material";
import { clients } from "@/constants/clients";

const ClientAvatar = () => {
  return (
    <AvatarGroup
      max={8}
      sx={{
        justifyContent: "start",
      }}
      spacing={20}
    >
      {clients.map((client, i) => (
        <Avatar
          key={client.src + i}
          src={client.src}
          sx={{
            width: { md: 68, xs: 48 },
            height: { md: 68, xs: 48 },
            border: 0,
          }}
        />
      ))}
    </AvatarGroup>
  );
};

export default ClientAvatar;
