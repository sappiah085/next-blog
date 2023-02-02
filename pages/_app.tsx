import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "./redux/rootReducer/rootReducer";
import useMediaQuery from "@mui/material/useMediaQuery";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { grey } from "@mui/material/colors";
import { SnackbarProvider } from "notistack";
import { useMemo } from "react";
export default function App({ Component, pageProps }: AppProps) {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
          ...(prefersDarkMode
            ? {
                primary: { main: grey[50] },
                secondary: { main: grey[50] },
                divider: grey[500],
              }
            : {
                primary: {
                  main: grey[900],
                },
              }),
        },
      }),
    [prefersDarkMode]
  );
  return (
    <Provider store={store}>
      <SnackbarProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </SnackbarProvider>
    </Provider>
  );
}
