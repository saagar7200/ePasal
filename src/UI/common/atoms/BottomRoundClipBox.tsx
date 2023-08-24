import { Box } from "@chakra-ui/react";
import hero from "@constants/image";
import heroGiff from "@assets/hero/bouddha.mp4";

const BottomRoundClipBox = () => {
  return (
    <Box
      backgroundImage={`url(${hero.heroGiff})`}
      backgroundRepeat={"no-repeat"}
      backgroundPosition={"center"}
      backgroundSize={"cover"}
      border={"1px solid red"}
      // bg={"green.100"}
      width={"100%"}
      height={"calc(100vh - 50px)"}
      style={{
        clipPath: "polygon(0% 0.5%, 100% 0%, 100% 88.8%, 48.4% 100%, 0% 88.8%)",
      }}
    >
      <video
        style={{
          width: "100%",
          height: "calc(100vh - 50px)",
          border: "1px solid green",
          objectFit: "cover",
        }}
        autoPlay
        loop
        muted
      >
        <source
          style={{
            width: "100%",
            height: "calc(100vh - 50px)",
            border: "1px solid green",
          }}
          src={heroGiff}
          type="video/mp4"
        />
      </video>
    </Box>
  );
};

export default BottomRoundClipBox;
