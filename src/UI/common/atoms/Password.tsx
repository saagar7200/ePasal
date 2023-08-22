/* eslint-disable @typescript-eslint/no-explicit-any */
import { PasswordInput } from "@chakra-ui/react";
import React, { FC } from "react";

interface IProps {
  onChange: () => void;
  ref: any;
}

export const CustomPasswordInput: FC<IProps> = (props) => {
  const { onChange, ref } = props;
  return (
    <PasswordInput
      ref={ref}
      placeholder="Password"
      label="Password"
      description="Password must include at least one letter, number and special character"
      withAsterisk
      onChange={onChange}
    />
  );
};
