
import { Box, Card, Typography, Button } from "@mui/material";
import { useNavigate } from 'react-router-dom'

export default function LoginErrorAuth() {
  const navigate = useNavigate();
  
  const handleRedirect = () => {
    navigate("/login-form");
  };

  return (
    <Box
      sx={{
        height: "100vh",
        background: "linear-gradient(135deg, #003399 0%, #33cc99 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
    >
      <Card
        sx={{
          width: "100%",
          maxWidth: "600px",
          padding: "32px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          borderRadius: "16px",
          boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
          backgroundColor: "#fff",
        }}
      >

        <Typography
          variant="h5"
          sx={{
            color: "red",
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "16px",
          }}
        >
          Sua sessão expirou!
        </Typography>


        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            color: "#555",
            marginBottom: "24px",
          }}
        >
          Por segurança, você foi desconectado. Clique abaixo para fazer login novamente.
        </Typography>

        <Button
          variant="contained"
          color="error"
          onClick={handleRedirect}
          sx={{
            paddingX: "24px",
            paddingY: "8px",
            fontWeight: "bold",
            borderRadius: "8px",
          }}
        >
          Ir para Login
        </Button>
      </Card>
    </Box>
  );
}
