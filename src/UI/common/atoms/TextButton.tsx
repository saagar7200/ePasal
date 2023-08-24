import { Button } from "@chakra-ui/react";

export const SaveButton = () => {
  return (
    <>
      <Button
        fontSize={"md"}
        py={"22px"}
        px={10}
        variant={"solid"}
        colorScheme="blue"
        type="submit"
      >
        Save
      </Button>
    </>
  );
};

export const CancelButton = () => {
  return (
    <>
      <Button
        fontSize={"md"}
        py={5}
        px={8}
        variant={"outline"}
        colorScheme="red"
      >
        Cancel
      </Button>
    </>
  );
};
