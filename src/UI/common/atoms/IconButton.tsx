import { Button } from "@chakra-ui/react";
import { FC } from "react";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";

export const SignInWithGoogle: FC = () => {
  return (
    <Button
      border={"1px solid grey"}
      _light={{
        bg: "white",
      }}
      borderRadius={"full"}
      px={10}
      py={"25px"}
      leftIcon={<FcGoogle size={"29px"} />}
    >
      Sign In With Google
    </Button>
  );
};

export const SignInWithFacebook: FC = () => {
  return (
    <Button
      border={"1px solid grey"}
      borderRadius={"full"}
      px={10}
      _light={{
        bg: "white",
      }}
      py={"25px"}
      leftIcon={<BsFacebook color={"#1877F2"} size={"28px"} />}
    >
      Sign In With Facebook
    </Button>
  );
};
