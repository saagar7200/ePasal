import AllRoute from "./Routes";
import "./App.css";
// import { colors } from "./constants/theme/colors";
import { Box } from "@chakra-ui/react";
const App = () => {
  console.log("object");
  return (
    <>
      <Box className="root" h={"auto"}>
        <AllRoute />
      </Box>
    </>
  );
};

export default App;
