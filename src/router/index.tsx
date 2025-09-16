import { Routes, Route, BrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/mainLayout";
import Home from "../pages/homepage";
import DonatePage from "../pages/donate";
import Privacy from "../pages/privacy";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/privacy" element={<Privacy />} />
        <Route path="*" element={
          <MainLayout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/donate" element={<DonatePage />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </MainLayout>
        } />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
