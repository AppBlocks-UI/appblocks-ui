import React from 'react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    InputProps,
  } from '@chakra-ui/react'

interface FormInputProps extends InputProps {
  label?: string;
  type?: string;
  helpText?: string;
  isError?: boolean;
  errorMessage?: string;
  variant?: string;
}

export const InputField = ({
  label,
  helpText,
  type="text",
  variant="customOutline2",
  isError=false,
  errorMessage,
  placeholder,
}: FormInputProps) => {

  return (
    <>
      <FormControl as="fieldset" isInvalid={isError}>
        <FormLabel as="legend" fontWeight="semibold" fontSize="14px">{label}</FormLabel>
        <Input type={type} variant={variant} placeholder={placeholder} />
        {!isError ? (
          <>
            {helpText && <FormHelperText>{helpText}</FormHelperText>}
          </>
        ) : (
          <FormErrorMessage>{errorMessage}</FormErrorMessage>
        )}
      </FormControl>
    </>
  );
}