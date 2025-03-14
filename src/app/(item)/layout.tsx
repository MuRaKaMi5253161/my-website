import Header from "@/components/home/Header";
import { Box } from "@mui/material";

export default function DashboardRayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Box sx={{ width: "100%", height: "900px", flexDirection: "column" }}>
      <Box
        sx={{
          width: "100%",
          height: "60px",
          backgroundColor: "#2a2a2a",
          zIndex: 1,
          position: "fixed",
          top: 0,
        }}
      >
        <Box
          sx={{
            width: "250px",
            height: "30px",
            margin: "0 auto",
          }}
        >
          <Header />
        </Box>
      </Box>
      {children}
    </Box>
  );
}
