import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { motion } from "framer-motion";
export default function CardComp({
  label,
  date,
  direction,
  size,
  id,
  message,
  header,
  image,
  short,
}) {
  const variants = {
    initial: {
      opacity: 0,
    },
    final: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        y: {
          duration: 1.2,
        },
      },
    },
  };
  const children = {
    final: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.3,
      },
    }),
    initial: {
      y: 10,
      opacity: 0,
    },
  };

  async function share(id) {
    try {
      await window.navigator.share({
        title: header,
        text: message,
        url: `/content/${id}`,
      });
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <motion.span
      viewport={{ margin: "0px 0px -100px 0px", once: true }}
      variants={variants}
      whileInView="final"
      initial="initial"
    >
      <Card sx={{ maxWidth: size || 360 }}>
        <Box
          component="span"
          sx={{
            display: "flex",
            flexDirection: direction || "column",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CardMedia
            component="img"
            sx={{
              height: "200px",
              flex: direction && 2,
              minWidth: direction && 250,
            }}
            image={image}
            title={header + " image"}
          />
          <CardContent
            sx={{
              flex: direction && 4,
              minWidth: direction && 250,
            }}
          >
            <Grid container columns={2} columnGap={1}>
              <motion.span variants={children} custom={1}>
                <Typography
                  gutterBottom
                  variant="h6"
                  sx={{
                    color: "#00D1FF",
                    fontSize: "1rem",
                    fontFamily: "Gilroy-medium, sans-serif",
                    textTransform: "capitalize",
                  }}
                  component="div"
                >
                  {label}
                </Typography>
              </motion.span>
              <motion.span variants={children} custom={2}>
                <Typography
                  gutterBottom
                  variant="h6"
                  sx={{
                    fontSize: "1rem",
                    fontFamily: "Gilroy-medium, sans-serif",
                  }}
                  component="div"
                >
                  {date}
                </Typography>
              </motion.span>
            </Grid>
            <motion.span variants={children} custom={3}>
              <Typography
                gutterBottom
                variant="h6"
                component="h6"
                color="text.primary"
                sx={{
                  fontSize: "1rem",
                  fontFamily: "Sora, sans-serif",
                  fontWeight: 400,
                }}
              >
                {short ? header.substring(0, 35) + "..." : header}
              </Typography>
            </motion.span>
            <motion.span variants={children} custom={4}>
              <Typography
                variant="body2"
                sx={{
                  fontSize: "1rem",
                  fontFamily: "Gilroy-medium, sans-serif",
                  fontWeight: 500,
                  lineHeight: 1.4,
                }}
                color="text.secondary"
              >
                {message.substring(0, 190) + "..."}
              </Typography>
            </motion.span>
            <CardActions>
              <Button onClick={() => share(id)} color="inherit" size="small">
                Share
              </Button>
              <Button
                onClick={() => (window.location.href = `/content/${id}`)}
                color="inherit"
                size="small"
              >
                Learn More
              </Button>
            </CardActions>
          </CardContent>
        </Box>
      </Card>
    </motion.span>
  );
}
