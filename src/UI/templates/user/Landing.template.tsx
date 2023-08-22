import BreadCrumbHeader from "@UI/common/molecules/BreadCrumbHeader";
import NavBar from "@UI/common/molecules/Navbar";
import OuterNav from "@UI/common/molecules/OuterNav";
import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const LandingPageTemplate = () => {
  // const navigate = useNavigate();

  return (
    <Box h={"100vh"} w={"100vw"}>
      <OuterNav />
      <NavBar />
      <Box mt={1} px={4}>
        <BreadCrumbHeader baseUrl="home" />
      </Box>
      <Box>
        <Outlet />
      </Box>
    </Box>
  );
};

export default LandingPageTemplate;
