import { Box } from "@chakra-ui/react";

const BottomRoundClipBox = () => {
  return (
    <Box
      border={"1px solid red"}
      bg={"green.100"}
      width={"100%"}
      height={"calc(100vh - 50px)"}
      style={{
        clipPath:
          "polygon(100% 0, 100% 23%, 100% 35%, 100% 70%, 94% 79%, 81% 92%, 66% 97%, 44% 100%, 0 100%, 0 0)",
      }}
    ></Box>
  );
};

export default BottomRoundClipBox;
