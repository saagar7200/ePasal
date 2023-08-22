/* eslint-disable @typescript-eslint/no-explicit-any */
import { Input } from "@chakra-ui/react";
import { FC } from "react";

interface IProps {
  onChange: () => void;
  ref: any;
}

export const CustomPasswordInput: FC<IProps> = (props) => {
  const { onChange, ref } = props;
  return (
    <Input
      ref={ref}
      type="password"
      placeholder="Password"
      onChange={onChange}
    />
  );
};
