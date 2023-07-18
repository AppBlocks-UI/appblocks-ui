// Card that sits at the top of the projects column
import React from "react";
import { Flex, Text } from "@chakra-ui/react";
interface TargetTopCardProps {
  title: string;
  count: number;
  color: {
    light: string;
    dark: string;
  };
}

export const TargetTopCard = ({ title, count, color }: TargetTopCardProps) => {
  return (
    <>
      <Flex
        w="100%"
        borderBottom="4px solid"
        borderColor={color.light}
        _dark={{ borderColor: color.dark }}
        alignItems="center"
        pb={2}
        pl={2}
      >
        <Text as="span" textStyle="mid">
          {title}{" "}
        </Text>
        <Text as="span" textStyle="mid" ml={3}>
          {count}
        </Text>
      </Flex>
    </>
  );
};
