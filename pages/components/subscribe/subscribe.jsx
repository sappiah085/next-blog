import * as React from "react";
import { Box } from "@mui/material";
import { Paper } from "@mui/material";
import Mail from "../reuse/mail";
import { Typography } from "@mui/material";
export default function Subscribe() {
  return (
    <Box maxWidth="sm" margin="5em auto 0 auto" padding="0 .5em">
      <Paper
        variant="elevation"
        sx={{
          padding: "1em 0.9em ",
          borderRadius: "25px",
          bgcolor: "black",
          display: "flex",
          flexDirection: "column",
          gap: "1em",
        }}
        elevation={1}
      >
        <Typography
          variant="h3"
          textAlign="center"
          color="#fff"
          component="h5"
          sx={{ fontFamily: "Recoleta, sans-serif" }}
        >
          Get more stories like this🥱
        </Typography>
        <Typography
          variant="span"
          textAlign="center"
          color="#fff"
          component="span"
          sx={{ fontFamily: "Gilroy-medium, sans-serif" }}
        >
          Enter your e-mail to stay updated on latest trends and news
        </Typography>
        <Mail border="white" fColor="black" color="white" bgColor="white" />
      </Paper>
    </Box>
  );
}
