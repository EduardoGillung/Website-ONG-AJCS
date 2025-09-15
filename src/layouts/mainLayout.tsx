import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen w-full bg-white">
      <Header />
      <main className="flex">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
