import React from 'react'

import { 
    FormControl,
    FormLabel,
    Text,
    Switch as ChakraSwitch,
    SwitchProps as ChakraSwitchProps,
 } from '@chakra-ui/react';

interface SwitchProps extends ChakraSwitchProps {
  label: string;
  id: string;
}

export const Switch = ({label, id}: SwitchProps) => {
  return (
    <>
      <FormControl display="flex" alignItems="center">
        <ChakraSwitch colorScheme="teal" id={id} />
        <FormLabel htmlFor={id} mb="0" ml={2}>
          <Text textStyle="small">{label}</Text>
        </FormLabel>
      </FormControl>
    </>
  );
}