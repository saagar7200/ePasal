import { Box } from "@chakra-ui/react";

const BottomRoundClipBox = () => {
  return (
    <Box
      border={"1px solid red"}
      bg={"green.100"}
      width={"100%"}
      height={"calc(100vh - 50px)"}
      style={{
        clipPath: "polygon(0% 0.5%, 100% 0%, 100% 88.8%, 48.4% 100%, 0% 88.8%)",
      }}
    ></Box>
  );
};

export default BottomRoundClipBox;
