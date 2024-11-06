import { useTools } from "@/hooks/useTools";
import { selectProgram } from "@/slices/programSlice";
import { Container, Grid } from "@mui/material";
import { CollageCard } from "./CollageCard/collageCard";
import { CollageCardDetail } from "./CollageCardDetail/CollageCardDetail";
import { Box } from "@mui/system";

export const CollageDetail = () => {
  const { useSelector } = useTools();

  const { programs, currentProgramOffering } = useSelector(selectProgram);

  return (
    <>
      <Container sx={{ paddingBlock: "60px" }} disableGutters>
        <Grid container spacing={2}>
          <Grid
            xs={10}
            md={3}
            xl={4}
            sx={{
              height: "150vh",
              mx:'auto'
,              overflowY: "auto",
            }}
          >
            {programs.length > 0
              ? programs.map((data) => (
                  <CollageCard key={data._id} data={data} />
                ))
              : null}
          </Grid>

          <Grid xs={12} md={9} xl={8} paddingInline={1}>
            <Box>
              <CollageCardDetail data={currentProgramOffering }  />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
