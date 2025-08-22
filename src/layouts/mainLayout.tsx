import React from "react";
import { Box, Container } from "@mui/material"
import Header from "../components/header";
import Footer from "../components/footer";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#ff34'
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
         <Header />
        {children}
        <Footer />
      </Container>
    </Box>
  );
};

export default MainLayout;
