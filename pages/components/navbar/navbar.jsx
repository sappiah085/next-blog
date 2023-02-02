import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import { Tooltip } from "@mui/material";
import { Avatar } from "@mui/material";
import { useRouter } from "next/router";
const drawerWidth = 240;
function Navbar(props) {
  const { window } = props;
  const navigate = useRouter();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        variant="h5"
        component="div"
        letterSpacing={1}
        padding={2}
        sx={{
          display: { sm: "block" },
          fontFamily: "Gilroy-medium, sans-serif",
        }}
      >
        {props.name}
      </Typography>
      <Divider />
      <List>
        {[...props.navItems, ...props.links].map((item, id) => (
          <ListItem href={item.link} key={id} disablePadding>
            <ListItemButton href={item.link} sx={{ textAlign: "center" }}>
              <ListItemText
                sx={{ fontFamily: "Gilroy-medium, sans-serif" }}
                primary={item?.name || item.component}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position={props.position || "fixed"}
        color="primary"
        component="nav"
        variant="dense"
      >
        <Toolbar>
          <Grid
            columns={3}
            alignItems={"center"}
            justifyContent={{ xs: "space-between", md: "flex-start" }}
            container
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Box
              onClick={() => navigate.push("/")}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5em",
                cursor: "pointer",
              }}
              component={"span"}
            >
              <Avatar alt="logo" src="/real.png" />
              <Typography
                variant="h5"
                component="div"
                letterSpacing={1}
                sx={{
                  display: { xs: "none", sm: "block" },
                  fontFamily: "Gilroy-medium, sans-serif",
                  fontWeight: 900,
                }}
              >
                {props.name}
              </Typography>
            </Box>
            <Box
              color="primary"
              sx={{
                display: {
                  xs: "none",
                  sm: "flex",
                },
                alignItems: "center",
                justifyContent: "center",
                flexGrow: 1,
              }}
            >
              {props.navItems.map((item) => (
                <Button
                  key={item.name}
                  onClick={() => navigate.push(item.link)}
                  sx={{ fontFamily: "Gilroy-medium, sans-serif" }}
                  color="inherit"
                >
                  {item.name}
                </Button>
              ))}
            </Box>
            {props.icons && (
              <Box
                color="primary"
                sx={{ display: { xs: "none", sm: "block" } }}
              >
                {props.links.map((item, id) => (
                  <Tooltip key={id} title={item.desc}>
                    <Button href={item.link} key={id} color="inherit">
                      {item.component}
                    </Button>
                  </Tooltip>
                ))}
              </Box>
            )}
          </Grid>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

Navbar.propTypes = {
  window: PropTypes.func,
};

export default Navbar;
