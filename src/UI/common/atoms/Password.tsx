/* eslint-disable @typescript-eslint/no-explicit-any */
import { Input } from "@chakra-ui/react";
import { FC, useState } from "react";

interface IProps {
  onChange: () => void;
  ref: any;
}

export const CustomPasswordInput: FC<IProps> = (props) => {
  const { onChange, ref } = props;
  const [show] = useState(false);
  return (
    <Input
      ref={ref}
      type={show ? "text" : "password"}
      placeholder="Password"
      onChange={onChange}
    />
  );
};
