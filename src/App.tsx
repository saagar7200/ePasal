import { Box, Button, Heading, Text } from "@chakra-ui/react";
import "./App.css";
import { colors } from "./constants/theme/colors";
import { useNavigate } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

const App = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/epasal/join-Us");
  };
  return (
    <>
      <Box border={"1px solid red"} className="root" h={"auto"} width={"100vw"}>
        <Heading>Welcome to ePasal</Heading>
        <Text>powered by G-group</Text>
        <Button background={colors.primary.primary_01} onClick={onClick}>
          Join Us
        </Button>
        <Routes>
          <Route path={"/"} element={<Box>Welcome</Box>} />

          <Route path={"/epasal/join-Us"} element={<Box>Page Not Found</Box>} />
        </Routes>
      </Box>
    </>
  );
};

export default App;
