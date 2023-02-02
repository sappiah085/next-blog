import { Grid, Container } from "@mui/material";
import { Typography } from "@mui/material";
import CardComp from "../reuse/card";
export default function Feature({ label, smallDirection, size, data, short }) {
  return (
    <Container
      maxWidth="lg"
      direction="column"
      spacing={2}
      px={5}
      sx={{
        mt: 10,
        alignItems: "center",
        width: "100%",
        justifyContent: "center",
        overflowX: "hidden",
        // bgcolor: "red",
        pb: 2,
      }}
    >
      <Typography
        variant="h5"
        component="h3"
        sx={{
          paddingY: "1em",
          fontFamily: "Sora, sans-serif",
          textTransform: "capitalize",
        }}
      >
        {label.replace(/_/g, " ")}
      </Typography>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        maxWidth="lg"
        sx={{
          flexWrap: "wrap",
          width: "fit-content !important",
        }}
        gap={4}
      >
        {data.map((el, id) => {
          return (
            <CardComp
              key={el.id}
              size={size}
              id={el.id}
              direction={smallDirection}
              date={el.date}
              header={el.header}
              message={el.message}
              image={el.firstImage}
              short={short}
              label={el.tag.replace(/_/g, " ")}
            />
          );
        })}
      </Grid>
    </Container>
  );
}
