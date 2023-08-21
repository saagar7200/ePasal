import React, { FC, ReactNode } from "react";
import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from "@mantine/core";
import { useLocalStorage, useHotkeys } from "@mantine/hooks";
interface IProps {
  children: ReactNode;
}

const ColorProvider: FC<IProps> = ({ children }) => {
  const colorMode = JSON.parse(localStorage.getItem("colorMode") ?? "");
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "colorMode",
    defaultValue: colorMode ?? "light",
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || colorScheme === "dark" ? "light" : "dark");

  useHotkeys([["mod+k", () => toggleColorScheme()]]);

  return (
    <>
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          theme={{ colorScheme }}
          withGlobalStyles
          withNormalizeCSS
        >
          {children}
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
};

export default ColorProvider;
