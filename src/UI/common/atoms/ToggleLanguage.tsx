import useLang from "@hooks/useLanguage";
import { Button, Stack } from "@mantine/core";

const ToggleLanguage = () => {
  const { lang, setLang } = useLang();

  const switchLanguage = () => {
    setLang(lang === "en" ? "ne" : "en");
  };

  return (
    <Stack>
      <Button
        bg={"white"}
        // width={"100px"}
        size="md"
        // fontSize={"md"}
        // fontWeight={500}
        variant={"outline"}
        // colorScheme="facebook"
        onClick={switchLanguage}
        // borderRadius={6}
        // height={10}
      >
        {lang === "en" ? "English" : "नेपाली"}
      </Button>
    </Stack>
  );
};

export default ToggleLanguage;
