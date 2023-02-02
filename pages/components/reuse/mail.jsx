import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { Input } from "@mui/material";
import { Button } from "@mui/material";
import { subEmail } from "./sub";
import { useSnackbar } from "notistack";
export default function Mail({ bgColor, fColor, border, color }) {
  const [value, SetValue] = useState("");
  const enqueueSnackbar = useSnackbar();
  const [test, setTest] = useState(false);

  async function handleClick(e) {
    e.preventDefault();
    if (!test) return;
    const res = await subEmail(value);
    e.target.submit();
    if (res) {
      enqueueSnackbar.enqueueSnackbar("Successfully subscribed", {
        variant: "success",
      });
      SetValue("");
    }
  }
  useEffect(() => {
    const truth = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
    setTest(truth);
  }, [value]);
  return (
    <Box
      maxWidth="sm"
      sx={{
        borderRadius: "25px",
        display: "flex",
        padding: ".2em .2em .2em 2em",
        width: "100%",
        border: `2px solid ${border}`,
        height: "4em",
      }}
      component="form"
      autoComplete="on"
      action="https://app.us18.list-manage.com/subscribe/post?u=e22e3ad3a1a5d84cfdb37be80&amp;id=208e07b235&amp;f_id=00bd74e7f0"
      method="post"
      id="mc-embedded-subscribe-form"
      name="mc-embedded-subscribe-form"
      onSubmit={handleClick}
    >
      <Input
        name="EMAIL"
        id="mce-EMAIL"
        disableUnderline={value.length == 0}
        error={!test && value.length != 0}
        value={value}
        onChange={(e) => SetValue(e.target.value)}
        sx={{
          flex: 3,
          color: color || "inherit",
          "&::placeholder": { color: "text.primary" },
          fontWeight: "900",
        }}
        placeholder="Subscribe to mails"
        inputProps={{ "aria-label": "email subscription" }}
      />
      <Button
        sx={{
          borderRadius: "20px",
          border: "1p solid black",
          color: fColor || "white",
          flex: 2,
          backgroundColor: bgColor || "black",
          "&:hover": {
            backgroundColor: bgColor || "black",
          },
          fontWeight: "900",
        }}
        size="small"
        disableElevation
        variant="contained"
        name="subscribe"
        id="mc-embedded-subscribe"
        type="submit"
      >
        Subscribe
      </Button>
    </Box>
  );
}
