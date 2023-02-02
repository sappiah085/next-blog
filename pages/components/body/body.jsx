import { Button, Grid } from "@mui/material";
import { Typography } from "@mui/material";
import Feature from "../feature/featured";
import { useRouter } from "next/router";

export default function Body({ data }) {
  const navigate = useRouter();
  const dataList = data;

  return (
    <Grid
      columns={1}
      container
      maxWidth="inherit"
      direction="column"
      justifyContent="flex-start"
      alignItems="center"
      rowGap={4}
      sx={{
        justifyContent: {
          sm: "center",
        },
        padding: "3em .2em 0 .2em",
        mb: {
          md: "5em",
        },
        mt: {
          md: "5em",
          xs: "1em",
        },
      }}
    >
      <Typography
        maxWidth="md"
        sx={{
          fontSize: {
            md: "5rem",
            xs: "3rem",
          },
          fontFamily: "Recoleta, sans-serif",
        }}
        variant="h1"
        component="h1"
        align="center"
      >
        Hey, I’m RealMann🤠.
        <br /> Welcome to YorBest blog and you know it 🥳.
      </Typography>
      <Typography
        maxWidth="md"
        variant="h6"
        sx={{
          fontFamily: "Gilroy-medium, sans-serif",
          fontSize: {
            md: "1.4rem",
            xs: "1.2rem",
          },
        }}
        component="h3"
        align="center"
      >
        YorBest blog is where I share stories that will interest you.
        <br />
        Begin the journey with YorBest blog by clicking the button below😉.
      </Typography>
      <div className="sharethis-sticky-share-buttons"></div>
      <Button
        onClick={() => navigate.push("/main/all")}
        variant="outlined"
        sx={{
          color: "text.primary",
          border: "1px solid grey",
          borderRadius: 12,
          textTransform: "capitalize",
          fontSize: "1.1rem",
        }}
      >
        Read More Stories
      </Button>
      {dataList.length ? (
        <Feature
          data={dataList.slice(0, 6)}
          short={true}
          label={"Recent Blog Posts"}
        />
      ) : null}
    </Grid>
  );
}
