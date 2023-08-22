import { FC, ReactNode } from "react";
import { ChakraProvider } from "@chakra-ui/react";
interface IProps {
  children: ReactNode;
}

const ColorProvider: FC<IProps> = ({ children }) => {
  // const colorMode = JSON.parse(localStorage.getItem("colorMode") ?? "");

  return (
    <>
      <ChakraProvider>{children}</ChakraProvider>
    </>
  );
};

export default ColorProvider;
