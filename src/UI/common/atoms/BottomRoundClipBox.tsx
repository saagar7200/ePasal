import { Box } from "@chakra-ui/react";
import heroGiff from "@assets/hero/bouddha.mp4";

const BottomRoundClipBox = () => {
  return (
    <Box
      position={"relative"}
      backgroundImage={`radial-gradient(
        circle at 36% 48%, #000000, 
        rgba(11, 39, 65, 0.32) 87%, 
        rgba(0, 0, 0, 0.0)
    );`}
      backgroundRepeat={"no-repeat"}
      backgroundPosition={"center"}
      backgroundSize={"cover"}
      width={"100%"}
      height={"calc(100vh - 50px)"}
      style={{
        clipPath: "polygon(0% 0.5%, 100% 0%, 100% 88.8%, 48.4% 100%, 0% 88.8%)",
      }}
      _after={{
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        content: "''",
        opacity: 0.5,
        backgroundImage: `linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(154,163,164,1) 100%)`,
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
        <source src={heroGiff} type="video/mp4" />
      </video>
    </Box>
  );
};

export default BottomRoundClipBox;
