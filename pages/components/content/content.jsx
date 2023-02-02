import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import OutlinedInput from "@mui/material/OutlinedInput";
import Box from "@mui/material/Box";
import Navbar from "../navbar/navbar";
import { secondLinks, links } from "../../pages";
import { convert } from "../../index";
import { FormControl, FormHelperText } from "@mui/material";
import { useSnackbar } from "notistack";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../redux/actiontypes/actiontypes";
import parse from "html-react-parser";

import Prism from "prismjs";
import { useRef } from "react";
import Footer from "../footer/footer";
export default function Content() {
  const { comments, header, id, description } = {
    comments: "",
    header: "",
    id: "",
    description: "",
  };
  const [value, setValue] = useState("");
  const { enqueueSnackbar } = useSnackbar();
  const containerRef = useRef();
  const dispatch = useDispatch();
  const sent = useSelector((state) => state.blogs.sent);
  useEffect(() => {
    Prism.highlightAll();
    containerRef.current.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    window.addEventListener("keypress", async (e) => {
      if (e.keyCode == 13) e.preventDefault();
      if (e.keyCode == 13 && value != "") {
        dispatch({ type: actions.SET_SENT, payload: { id, value, comments } });
      }
    });
    return window.addEventListener("keypress", async (e) => {
      if (e.keyCode == 13 && value == " ") {
        dispatch({ type: actions.SET_SENT, payload: { id, value, comments } });
      }
    });
  }, [value, id, comments]);

  useEffect(() => {
    if (sent == "sent") return;
    if (!sent) {
      enqueueSnackbar("Comment not posted", { variant: "error" });
    } else {
      enqueueSnackbar("Comment posted", {
        variant: "success",
      });
      setValue("");
      setTimeout(() => window.location.reload(), 3000);
    }
  }, [sent]);

  return (
    <>
      {" "}
      <Navbar
        name="YorBest"
        position="static"
        navItems={secondLinks}
        links={links}
        icons
      />
      <Grid
        py={2}
        px={3}
        gap={2}
        pb={5}
        container
        maxWidth={1000}
        margin="auto"
        direction="column"
        ref={containerRef}
        sx={{
          justifyContent: "flex-start",
          alignItems: "center",
          flexWrap: "nowrap",
          height: "100vh",
          overflowY: "scroll",
          scrollBehavior: "smooth",
        }}
      >
        <div className="sharethis-sticky-share-buttons"></div>
        <Typography
          sx={{ fontFamily: "Gilroy-medium, sans-serif", fontWeight: 900 }}
          variant="h5"
          component="h6"
        >
          {header}
        </Typography>
        <Box
          sx={{ width: "100%", fontFamily: "Gilroy-light, sans-serif" }}
          className="word"
        >
          {parse(description)}
        </Box>

        <Typography
          sx={{ width: "100%", fontFamily: "Gilroy-medium, sans-serif" }}
          variant="h5"
          component="h5"
        >
          {comments.length} comments
        </Typography>
        <Grid
          container
          direction="column"
          width="100%"
          gap={2}
          justifyContent="flex-start"
          columns={2}
        >
          <Box
            component="span"
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              width: "100%",
              alignItems: "center",
              gap: "1em",
            }}
          >
            <Avatar>VS</Avatar>
            <Box
              component="form"
              onSubmit={(e) => e.preventDefault()}
              noValidate
              autoComplete="off"
            >
              <FormControl variant="standard">
                <OutlinedInput
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  multiline
                  placeholder="Write a comment"
                />
                <FormHelperText id="component-helper-text">
                  Press enter to post comment
                </FormHelperText>
              </FormControl>
            </Box>
          </Box>
          {comments.length
            ? comments.map((el, id) => (
                <Box
                  component="span"
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    gap: "1em",
                  }}
                  key={id}
                >
                  <Avatar>
                    {el.name.split(" ")[0].slice(0, 1) + el.name.split(" ")[1]}
                  </Avatar>
                  <Box>
                    <Box sx={{ display: "flex", gap: "1em" }}>
                      <Typography
                        component="p"
                        variant="body2"
                        sx={{
                          maxWidth: "600px",
                          fontFamily: "Gilroy-medium, sans-serif",
                        }}
                      >
                        {el.name}
                      </Typography>
                      <Typography
                        component="p"
                        variant="body2"
                        sx={{
                          maxWidth: "600px",
                          fontFamily: "Gilroy-light, sans-serif",
                        }}
                      >
                        {convert(el.date.seconds, el.date.nanoseconds)}
                      </Typography>
                    </Box>

                    <Typography
                      component="p"
                      variant="body2"
                      sx={{
                        maxWidth: "600px",
                        fontFamily: "Gilroy-light, sans-serif",
                      }}
                    >
                      {el.message}
                    </Typography>
                  </Box>
                </Box>
              ))
            : null}
        </Grid>
        {/* <div class="sharethis-privacy-policy"></div> */}
        <Footer />
      </Grid>
    </>
  );
}
