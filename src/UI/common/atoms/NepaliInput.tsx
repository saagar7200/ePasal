import { nepaliUnicodes } from "@constants/config/unicode";
import { Input, Textarea } from "@chakra-ui/react";
import React, { forwardRef } from "react";

interface IProps {
  handleChange: (text: string) => void;
  variant?: string;
  error?: boolean;
  multiline?: boolean;
  placeholder: string;
  rows?: number;
  value?: string;
  readOnly?: boolean;
}

const NepaliInput: React.FC<IProps> = forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  IProps
>((props, ref) => {
  const handleChange = (val: string) => {
    props.handleChange(
      Array.from(val, (c: string) => {
        if (nepaliUnicodes?.[c]) {
          return nepaliUnicodes[c];
        }
        return c;
      }).join("")
    );
  };

  return (
    <>
      {props.multiline ? (
        <Textarea
          ref={ref as React.Ref<HTMLTextAreaElement>}
          rows={props?.rows ?? 3}
          value={props?.value ?? ""}
          // isInvalid={props?.error}
          placeholder={props?.placeholder}
          onChange={(e) => {
            handleChange(e?.target?.value);
          }}
        />
      ) : (
        <Input
          ref={ref as React.Ref<HTMLInputElement>}
          variant={props?.variant}
          type={"text"}
          size={"sm"}
          placeholder={props.placeholder}
          value={props?.value ?? ""}
          // isInvalid={props?.error}
          onChange={(e) => {
            handleChange(e?.target?.value);
          }}
          readOnly={props.readOnly ?? false}
        />
      )}
    </>
  );
});

NepaliInput.defaultProps = {
  multiline: false,
  error: false,
  value: "",
};

export default NepaliInput;
