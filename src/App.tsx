import { Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { routes } from "./routers";
import { CardPage } from "./pages/CardPage";

function App() {
  return (
    <Routes>
      <Route path={routes.main.path} element={<MainPage />} />
      <Route path={routes.card.path} element={<CardPage />} />
    </Routes>
  );
}

export default App;
