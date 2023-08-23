/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { FC } from "react";
import RequireSign from "./RequireSign";

interface IProps {
  label: string;
  errorMessage: string;
  value: string;
  register: any;
  required?: boolean;
  onChange?: () => void;
  type: "text" | "email" | "password" | "number";
}
const CustomInput: FC<IProps> = (props) => {
  const { errorMessage, value, register, onChange, label, required, type } =
    props;
  return (
    <FormControl isInvalid={!!errorMessage}>
      <FormLabel display={"flex"} alignItems={"center"}>
        {label}
        {required ? <RequireSign /> : ""}
      </FormLabel>

      <Input
        borderColor={"blue"}
        size={"lg"}
        {...register}
        type={type}
        value={value}
        onChange={onChange}
      />

      <FormErrorMessage>{errorMessage}</FormErrorMessage>
    </FormControl>
  );
};

export default CustomInput;
