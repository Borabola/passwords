import { FC } from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
//import AppRoutes from "../routes";
import Login from "../pages/Login";

import theme from "../theme";

export const App: FC = () => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* <AppRoutes /> */}
      <Login />
    </ThemeProvider>
  </BrowserRouter>
);

export default App;
