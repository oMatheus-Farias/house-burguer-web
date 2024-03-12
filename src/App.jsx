import { BrowserRouter } from "react-router-dom";
import ScreenSizeProvider from "./contexts/screen-size-context";
import AppRoutes from "./routes/routes";

const App = () => {
  return (
    <BrowserRouter>
      <ScreenSizeProvider>
        <AppRoutes />
      </ScreenSizeProvider>
    </BrowserRouter>
  );
};

export default App;
