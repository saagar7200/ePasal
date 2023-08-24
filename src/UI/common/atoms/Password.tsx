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
  ref?: any;
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
    <FormControl isInvalid={!!errorMessage} gap={0}>
      <FormLabel
        m={0}
        mb={1}
        display={"flex"}
        alignItems={"center"}
        gap={"1px"}
      >
        {label}
        {required ? <RequireSign /> : ""}
      </FormLabel>

      <InputGroup size="md">
        <Input
          pr={0}
          py={5}
          value={value}
          ref={ref}
          type={show ? "text" : "password"}
          placeholder="passowrd"
          onChange={onChange}
          {...register(name)}
          size={"md"}
        />

        <InputRightElement width="3.5rem" py={5}>
          {show ? (
            <ViewIcon
              cursor={"pointer"}
              onClick={() => setShow((p) => !p)}
              fontSize={"19px"}
            />
          ) : (
            <ViewOffIcon
              fontSize={"19px"}
              cursor={"pointer"}
              onClick={() => setShow((p) => !p)}
            />
          )}
        </InputRightElement>
      </InputGroup>

      <FormErrorMessage>{errorMessage}</FormErrorMessage>
    </FormControl>
  );
};
