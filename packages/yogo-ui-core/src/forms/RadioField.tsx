import React from 'react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    RadioGroup,
    HStack,
    Radio
  } from '@chakra-ui/react'

interface RadioFieldProps {
  label?: string;
  children: React.ReactNode;
  helpText?: string;
  isError?: boolean;
  errorMessage?: string;
}
export const RadioField = ({
  label,
  children,
  helpText,
  isError=false,
  errorMessage
}: RadioFieldProps ) => {
  return (
    <>
      <FormControl as="fieldset" isInvalid={isError}>
        <FormLabel as="legend" fontWeight="semibold" fontSize="14px">{label}</FormLabel>
        {children}
        
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