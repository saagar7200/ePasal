import App from "./App";
import ColorProvider from "./provider/ColorProvider";
// import { MantineProvider } from "@mantine/core";

const Route = () => {
  return (
    <>
      {/* <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        // theme={{
        //   // Override any other properties from default theme
        //   fontFamily: "Open Sans, sans serif",
        //   spacing: {
        //     xs: "1rem",
        //     sm: "1.2rem",
        //     md: "1.8rem",
        //     lg: "2.2rem",
        //     xl: "2.8rem",
        //   },
        // }}
  */}
      <ColorProvider>
        <App />
      </ColorProvider>
      {/* </MantineProvider> */}
    </>
  );
};

export default Route;
