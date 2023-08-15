import { Box, Button, Heading, Text } from "@chakra-ui/react";
import "./App.css";
import { colors } from "./constants/theme/colors";

function App() {
  return (
    <>
      <Box className="root" h={"auto"} width={"100vw"}>
        <Heading>Welcome to ePasal</Heading>
        <Text>powered by G-group</Text>
        <Button background={colors.primary.primary_01}>Join Us</Button>
      </Box>
    </>
  );
}

export default App;
