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
  Button,
  Portal,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

import { FiInbox, FiPaperclip, FiMessageSquare } from "react-icons/fi";
import {FaCheck} from "react-icons/fa";
import { BsDot } from "react-icons/bs";
import WaitlistForm from "@root/components/forms/WaitlistForm";

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

  const {
    isOpen: isOpenWaitlistModal,
    onOpen: onOpenWaitlistModal,
    onClose: onCloseWaitlistModal,
  } = useDisclosure();
  
  return (
    <>
      <Card variant={isFavourite ? "pricingCardFav" : "pricingCard2"} w="100%">
        <CardBody py={9}>
          <VStack justify="space-between" h="100%">
            <VStack spacing={5} w="100%" align="flex-start" mb={5}>
              <Flex align="center">
                <Text
                  textStyle="sectionSubHeading"
                  noOfLines={2}
                  color="black.100"
                  fontSize="14px"
                  _dark={{ color: isFavourite ? "black.100" : "gray.l40" }}
                >
                  {title}
                </Text>
                {isFavourite && (
                  <Badge variant="base" bgColor="brand.primary.alpha2" ml={3}>
                    Popular
                  </Badge>
                )}
              </Flex>

              <Box>
                {slug === "custom" && (
                  <Text textStyle="small" textTransform="uppercase">
                    Starting At
                  </Text>
                )}
                <Text
                  as="span"
                  textStyle="h1"
                  fontSize="32px"
                  noOfLines={1}
                  _dark={{ color: isFavourite ? "black.100" : "gray.l80" }}
                  fontWeight="normal"
                >
                  {price}{" "}
                  <Box
                    as="span"
                    textStyle="small"
                    textTransform="uppercase"
                    _dark={{ color: isFavourite ? "black.80" : "gray.l40" }}
                  >
                    / {payFrequency}
                  </Box>
                </Text>
              </Box>
              <Text
                textStyle="featureContent"
                _dark={{ color: isFavourite ? "black.100" : "gray.l40" }}
              >
                {description}
              </Text>
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
                      color={isFavourite ? "gray.l20" : "brand.secondary.g"}
                      mr={2}
                    />
                    <Text
                      textStyle="featureContent"
                      _dark={{ color: isFavourite ? "" : "gray.l40" }}
                    >
                      {feature}
                    </Text>
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

            {isFavourite ? (
              <Link
                href={"#pricing"}
                as={Button}
                variant="brand-solid-button"
                onClick={onOpenWaitlistModal}
                textAlign="center"
                w={"100%"}
              >
                Join Waitlist
              </Link>
            ) : (
              <Link
                href={payLink}
                variant="outlineButton2"
                w="100%"
                textAlign="center"
                alignSelf="flex-start"
                _dark={{ color: "gray.l80", borderColor: "gray.l40", _hover: { color: "gray.l80", bg: 'gray.l20' } }}
              >
                {cta}
              </Link>
            )}
          </VStack>
        </CardBody>
      </Card>
      <Portal>
        <Modal
          isOpen={isOpenWaitlistModal}
          onClose={onCloseWaitlistModal}
          motionPreset="slideInBottom"
          scrollBehavior="inside"
          size="xl"
        >
          <ModalOverlay
            bg="none"
            backdropFilter="auto"
            backdropBrightness={0.5}
            backdropBlur="5px"
          />
          <ModalContent>
            <ModalHeader>Join the Waitlist</ModalHeader> <ModalCloseButton />
            <ModalBody>
              <WaitlistForm />
            </ModalBody>
            <ModalFooter></ModalFooter>
          </ModalContent>
        </Modal>
      </Portal>
    </>
  );
}