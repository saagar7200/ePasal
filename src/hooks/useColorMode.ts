

// const useColorMode = () => {

//     const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
//         key: 'mantine-color-scheme',
//         defaultValue: 'dark',
//         getInitialValueInEffect: true,
//     });

//     const toggleColorScheme = (value?: ColorScheme) =>
//         setColorScheme(value || (colorScheme === 'dark' ? 'dark' : 'light'));

//     useHotkeys([['mod+J', () => toggleColorScheme()]]);


//     return [colorScheme, setColorScheme, toggleColorScheme]
// }

// export default useColorMode
