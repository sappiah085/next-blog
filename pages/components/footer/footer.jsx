import Container from "@mui/material/Container";
import { Box } from "@mui/material";
import { Typography, Tooltip, Button } from "@mui/material";
import { links } from "../../pages";
export default function Footer() {
  return (
    <Container
      disableGutters
      maxWidth="xl"
      sx={{
        mt: "10em",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: ".5em",
        backgroundColor: "black",
        padding: {md: "2em", xs: "2em 1em 7em 1em "},
        flexDirection: "column",
      }}
    >
      <Box>
        {links.slice(1).map((item, id) => {
          if (id == 0) return;
          return (
            <Tooltip key={id} title={item.desc}>
              <Button
                href={item.link}
                key={id}
                sx={{ color: "white", textTransform: "capitalize" }}
              >
                {item.component}
              </Button>
            </Tooltip>
          );
        })}
      </Box>
      <Box
        component="span"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: ".5em",
          backgroundColor: "black",
          flexWrap: "wrap",
        }}
      >
        <Typography
          bgcolor="transparent"
          variant="h6"
          component="div"
          color="white"
          textAlign="center"
          sx={{ fontFamily: "Gilroy-medium, sans-serif" }}
        >
          © {new Date().getFullYear()} YorBest. All rights reserved
        </Typography>
      </Box>
    </Container>
  );
}
