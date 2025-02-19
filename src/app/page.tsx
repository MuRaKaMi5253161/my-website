import Footer from "@/components/home/Footer";
import Header from "@/components/home/Header";
import { Box, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";

export default function Top() {
  return (
    <Box sx={{ width: "100%", flexDirection: "column" }}>
      <Box sx={{ width: "100%", height: "60px", backgroundColor: "#2a2a2a" }}>
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
      <Box sx={{ width: "80%", margin: "0 auto" }}>
        <Box sx={{ textAlign: "center", alignItems: "center" }}>
          <Typography sx={{ fontSize: "60px", marginTop: "150px" }}>
            M depot
          </Typography>
          <Box
            component="img"
            alt="profileIcon"
            src="./icon/icon.jpg"
            sx={{ width: "230px", height: "230px", margin: "0 auto" }}
          />
          <Typography sx={{ fontSize: "20px" }}>TAICHI MURAKAMI</Typography>
          <Typography sx={{ fontSize: "14px" }}>
            Japanese freelance front-end engineer
          </Typography>
          <Divider
            sx={{ margin: "0 auto", paddingTop: "30px", width: "60%" }}
          />
          <Box
            sx={{
              width: "230px",
              margin: "0 auto",
              marginTop: "30px",
            }}
          >
            <Footer />
          </Box>
          <Typography sx={{ fontSize: "14px", marginTop: "70px" }}>
            © 2025 M depot
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
