import { Routes, Route, BrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/mainLayout";
import Home from "../pages/homepage";
import DonatePage from "../pages/donate";
import Privacy from "../pages/privacy";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          {/* Landing Page Principal */}
          <Route path="/" element={<Home />} />
          
          {/* Página de Doação */}
          <Route path="/donate" element={<DonatePage />} />
          
          {/* Página de Política de Privacidade */}
          <Route path="/privacy" element={<Privacy />} />
          
          {/* Redirecionar todas as outras rotas para a landing page */}
          <Route path="*" element={<Home />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
};

export default AppRouter;
