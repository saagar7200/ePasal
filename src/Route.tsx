import App from "./App";
import ColorProvider from "./provider/ColorProvider";
// import { MantineProvider } from "@mantine/core";

const Route = () => {
  return (
    <>
      <ColorProvider>
        <App />
      </ColorProvider>
    </>
  );
};

export default Route;
