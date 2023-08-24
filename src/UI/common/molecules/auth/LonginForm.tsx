/* eslint-disable @typescript-eslint/no-explicit-any */
import CustomInput from "@UI/common/atoms/TextInput";
import { useForm } from "react-hook-form";
import { CustomPasswordInput } from "../../atoms/Password";
import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";
import { CancelButton, SaveButton } from "@UI/common/atoms/TextButton";

const LonginForm = () => {
  const {
    watch,
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (LoginData: any) => {
    console.log(
      "🚀 ~ file: LonginForm.tsx:21 ~ onSubmit ~ LoginData:",
      LoginData
    );
  };

  return (
    <Box px={2} py={4}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid
          gap={4}
          templateColumns={{ sm: `repeat(1,1fr)`, md: `repeat(2,1fr)` }}
        >
          <GridItem>
            <CustomInput
              required
              value={watch("email")}
              register={register}
              label="Email"
              name={"email"}
              placeholder="Enter your email"
              errorMessage={errors?.message?.email}
              type="email"
            />
          </GridItem>
          <GridItem>
            <CustomPasswordInput
              required
              value={watch("password")}
              name={"password"}
              register={register}
              label="Password"
              placeholder="Enter your Password"
              errorMessage={errors?.message?.email}
            />
          </GridItem>
        </Grid>
        <Flex mt={4} gap={5} justify={"end"}>
          <SaveButton />
          <CancelButton />
        </Flex>
      </form>
    </Box>
  );
};

export default LonginForm;
