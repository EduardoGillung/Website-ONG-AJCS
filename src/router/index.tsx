import { Routes, Route, BrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/mainLayout";
import Home from "../pages/homepage";
import Contact from "../pages/contact";
import Partners from "../pages/partners";
import Projects from "../pages/projects";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
};

export default AppRouter;
