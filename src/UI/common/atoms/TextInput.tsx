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
  errorMessage?: string;
  value: string;
  register: any;
  required?: boolean;
  onChange?: () => void;
  type: "text" | "email" | "password" | "number";
  placeholder: string;
  name: string;
}
const CustomInput: FC<IProps> = (props) => {
  const {
    errorMessage,
    value,
    register,
    onChange,
    label,
    required,
    type,
    placeholder,
    name,
  } = props;
  return (
    <FormControl isInvalid={!!errorMessage}>
      <FormLabel m={0} display={"flex"} alignItems={"center"}>
        {label}
        {required ? <RequireSign /> : ""}
      </FormLabel>

      <Input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange ? onChange : ""}
        {...register(name)}
      />

      {errorMessage ? <FormErrorMessage>{errorMessage}</FormErrorMessage> : ""}
    </FormControl>
  );
};

export default CustomInput;
