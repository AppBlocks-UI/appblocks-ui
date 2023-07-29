import React from 'react'

import {
    Card,
    CardBody,
    Flex,
    Text,
    Box,
    Icon,
    VStack,
    Badge,
    Link,
} from "@chakra-ui/react";

import { FiInbox, FiPaperclip, FiMessageSquare } from "react-icons/fi";
import {FaCheck} from "react-icons/fa";
import { BsDot } from "react-icons/bs";

export type ProjectCardProps = {
  slug: string;
  title: string;
  price: string;
  payLink: string;
  cta: string;
  payFrequency: string;
  description: string;
  features: string[];
  secondaryFeatures?: string[];
  isFavourite?: boolean;
};

export const PricingCard = ({
    title,
    slug,
    price,
    payLink,
    cta,
    payFrequency,
    description,
    features,
    secondaryFeatures,
    isFavourite,
}: ProjectCardProps) => {
  
  return (
    <Card variant={isFavourite ? "highlights1" : "highlights2"}  w="100%">
      <CardBody py={9}>
        <VStack justify="space-between" h="100%">
        <VStack spacing={5} w="100%" align="flex-start" mb={5}>
          <Flex align="center">
            <Text textStyle="mid" noOfLines={1}>
              {title}
            </Text>
              {isFavourite && <Badge variant="base" ml={3}>
                Popular
              </Badge>}

          </Flex>

          <Text
            as="span"
            textStyle="h1"
            noOfLines={1}
            _dark={{ color: "black.100" }}
          >
            {price}{" "}
            <Box as="span" textStyle="small" textTransform="uppercase">
              / {payFrequency}
            </Box>
          </Text>
          <Text textStyle="featureContent">{description}</Text>
          <VStack spacing={2.5} align="flex-start" w="100%">
            {features.map((feature, index) => (
              <Flex
                key={`primary-feature-${index}`}
                align="center"
                justify="flex-start"
              >
                <Icon
                  as={FaCheck}
                  boxSize={3}
                  color="brand.secondary.g"
                  mr={2}
                />
                <Text textStyle="featureContent">{feature}</Text>
              </Flex>
            ))}
          </VStack>
          
          {secondaryFeatures && (
            <VStack spacing={2}>
              {secondaryFeatures.map((feature, index) => (
                <Flex
                  key={`secondary-feature-${index}`}
                  align="center"
                  justify="flex-start"
                >
                  <Text textStyle="mid">{feature}</Text>
                </Flex>
              ))}
            </VStack>
          )}
        </VStack>

        <Link
            href={payLink}
            variant="outlineButton2"
            w="100%"
            textAlign="center"
            alignSelf="flex-start"
            target="_blank"
          >
            {cta}
          </Link>
          </VStack>
      </CardBody>
    </Card>
  );
}