import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#000928] via-[#1a1f3a] to-[#000928]">
      <Header />
      <main className="flex">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
