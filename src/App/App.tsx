import { FC } from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppIntlProvider from "../hocs/AppIntlProvider/AppIntlProvider";
import theme from "../theme";
import AppRoutes from "../routes";
import { setupStore } from "../redux/store";
import { AuthProvider } from "../contexts/AuthContext";
//import { persistStore } from "reduxjs-toolkit-persist";

export const store = setupStore();
//const persistor = persistStore(store);

export const App: FC = () => (
  <Provider store={store}>
    <AppIntlProvider>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <AuthProvider>
            <>
              <CssBaseline />
              <AppRoutes />
              <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
	pauseOnHover
            />
            </>
          </AuthProvider>
        </BrowserRouter>
      </ThemeProvider>
    </AppIntlProvider>
  </Provider>
);

export default App;
