import {
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";
import React from "react";
import { SearchIcon, ShortcutIcon } from "@root/components/base/Icons";

type InputProps = {
  placeholder?: string
  variant?: string
} & ChakraInputProps

export const Search = ({placeholder, variant="filled", ...rest}: InputProps) => {
  return (
    <>
      <InputGroup variant={variant}>
        <InputLeftAddon>
          <SearchIcon />
        </InputLeftAddon>
        <Input placeholder={placeholder ? placeholder : "Search"} {...rest} />
        <InputRightAddon>
          <ShortcutIcon />
        </InputRightAddon>
      </InputGroup>
    </>
  );
};
