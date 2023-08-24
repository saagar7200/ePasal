import { Box } from "@chakra-ui/react";
import hero from "@constants/image";

const BottomRoundClipBox = () => {
  return (
    <Box
      backgroundImage={hero}
      border={"1px solid red"}
      // bg={"green.100"}
      width={"100%"}
      height={"calc(100vh - 50px)"}
      style={{
        clipPath: "polygon(0% 0.5%, 100% 0%, 100% 88.8%, 48.4% 100%, 0% 88.8%)",
      }}
    ></Box>
  );
};

export default BottomRoundClipBox;
