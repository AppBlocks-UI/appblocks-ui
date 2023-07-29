import React from "react";
import {
  Input as ChakraInput,
  FormControl,
  FormLabel,
  InputProps as ChakraInputProps,
  TextareaProps as ChakraTextareaProps,
  VStack,
  Text,
  Flex,
} from "@chakra-ui/react";

import {FiUploadCloud} from 'react-icons/fi'

interface InputProps extends ChakraInputProps {
  label: string;
  subtext?: string;
  inputprops: any;
  rootprops: any;
  isDragActive?: boolean;
}

export const FileUpload: React.FC<InputProps> = (props) => {
  return (
    <FormControl
      as='div'
      w='100%'
      {...props.rootprops({ _hover: { cursor: "pointer" } })}
    >
      <FormLabel
        fontSize='15px'
        lineHeight='164%'
        letterSpacing={"0.5%"}
        color='black'
        fontWeight='medium'
      >
        {props.label}
      </FormLabel>
      {props.subtext && (
        <FormLabel
          fontSize='13px'
          lineHeight='150%'
          letterSpacing={"0.5%"}
          color='gray.300'
          fontWeight='medium'
        >
          {props.subtext}
        </FormLabel>
      )}

      <ChakraInput
        type='file'
        borderRadius={12}
        fontSize='14px'
        color='black'
        px='20px'
        py='20px'
        backgroundColor='red'
        borderColor='gray.100'
        border='1.5px solid'
        variant={'filled'}
        {...props.inputprops()}
        _placeholder={{
          color: "gray.250",
        }}
        _active={{
          borderColor: "nav.base",
        }}
        _focus={{
          borderColor: "nav.base",
        }}
        {...props}
      />
      {!props.isDragActive && (
        <Flex
          bg='brand.secondary.kappa50'
          borderRadius='md'
          py={3}
          justify="center"
          alignItems="center"
          _hover={{ bgColor: "brand.secondary.kappa"}}
          _dark={{ 
            bgColor: "gray.l10",
            color: "gray.l40",
            _hover: { bgColor: "gray.l20", }
          }}
        >
          <FiUploadCloud />
          <Text textStyle="small" ml={2}>
            Drop or upload files here
          </Text>
        </Flex>
      )}
    </FormControl>
  );
};
