import React from "react";
import { VStack, Text, Flex } from "@chakra-ui/react";

import {ComponentsPreview} from "./ComponentsPreview";
import { LayoutPreview } from "./LayoutPreview";

export const T2BProductFeatures = ({
  productDescription1,
  productDescription2,
}: any) => {
  const list = [
    productDescription1,
    productDescription2,
  ]
  return (
    <>
      <VStack spacing={[12, 32]} w="100%">
        {list.map((item: any, index: number) => (
          <VStack
            key={`product-description-${index}`}
            justify="center"
            as="section"
            w="100%"
            spacing={5}
          >
            <VStack
              w={["100%", "40%"]}
              spacing={6}
              align={["flex-start", "center"]}
              maxW="1080px"
              mb={[0, 12]}
              // w="60%"
            >
              <Text as="h3" textStyle="h2" align={["left", "center"]}>
                {item.heading}
              </Text>
              <Text
                textStyle="featureContent"
                fontWeight="normal"
                align={["left", "center"]}
              >
                {item.description}
              </Text>
            </VStack>

            <Flex w="100%" justify="center" overflowX="hidden">
              {index == 0 ? <ComponentsPreview /> : <LayoutPreview />}
            </Flex>
          </VStack>
        ))}
      </VStack>
    </>
  );
};
