/* eslint-disable @typescript-eslint/no-explicit-any */
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { FC, useState } from "react";
import RequireSign from "./RequireSign";

interface IProps {
  label: string;
  errorMessage: string;
  value: string;
  register: any;
  required?: boolean;
  onChange?: () => void;
  placeholder: string;
  name: string;
  ref: any;
}

export const CustomPasswordInput: FC<IProps> = (props) => {
  const {
    onChange,
    ref,
    errorMessage,
    label,
    register,
    value,
    required,
    name,
  } = props;
  const [show, setShow] = useState(false);
  return (
    <FormControl isInvalid={!!errorMessage}>
      <FormLabel display={"flex"} alignItems={"center"}>
        {label}
        {required ? <RequireSign /> : ""}
      </FormLabel>

      <InputGroup size="sm">
        <Input
          value={value}
          ref={ref}
          type={show ? "text" : "password"}
          placeholder="passowrd"
          onChange={onChange}
          {...register(name)}
        />
        <Input
          pr="4.5rem"
          type={show ? "text" : "password"}
          placeholder="Enter password"
        />
        <InputRightElement width="4.5rem">
          {show ? (
            <ViewIcon onClick={() => setShow((p) => !p)} />
          ) : (
            <ViewOffIcon onClick={() => setShow((p) => !p)} />
          )}
        </InputRightElement>
      </InputGroup>

      <FormErrorMessage>{errorMessage}</FormErrorMessage>
    </FormControl>
  );
};
