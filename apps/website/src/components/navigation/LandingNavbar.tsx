import React from "react";
import NextLink from 'next/link'

import {
  Flex,
  Link,
  HStack,
  useBreakpointValue,
  Portal,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  
} from "@chakra-ui/react";
import { LogoIcon, ColorModeIcon } from '@root/components/base/Icons';
import { MobileLandingNavbar } from '@root/components/navigation/MobileLandingNavbar';

import {FiArrowUpRight} from 'react-icons/fi'

import { navbarLinks } from '@root/utils/constants';
import WaitlistForm from "@root/components/forms/WaitlistForm";

export function LandingNavbar(props: any) {

  const isMobile = useBreakpointValue(
    {
      base: true,
      sm: true,
      md: false,
      lg: false,
    },
    {
      ssr: true,
    }
  );
  const { isOpen, onOpen, onClose } = useDisclosure()

  if (isMobile) {
    return <MobileLandingNavbar {...props} />;
  }

  return (
    <Flex
      h={100}
      w="100%"
      zIndex="modal"
      top={0}
      left={0}
      bg="rgba(255,255,255,0.6)"
      justifyContent="space-between"
      alignItems="center"
      px={12}
      pos="fixed"
      _dark={{
        bg: "black.100",
      }}
    >
      <Flex h={100} alignItems="center" width="auto" mr="89px">
        <Link
          href="/"
          transition="transform 0.2s ease-in-out"
          _hover={{
            textDecoration: "none",

            transform: "translateX(4px)",
          }}
        >
          <LogoIcon w={48} />
        </Link>
      </Flex>

      <Flex justifyContent="space-between" alignItems="center" ml="24px">
        <HStack width="auto" gap={8}>
          {navbarLinks.map((link, index) => (
            <Link
              key={`navbar-links-${index}`}
              href={link.href}
              as={NextLink}
              variant="navlink"
              target={link.isExternal ? "_blank" : ""}
            >
              <Flex alignItems="center" justifyContent="space-between">
                {link.name}
                {link.isExternal && (
                  <FiArrowUpRight style={{ marginLeft: "4px" }} />
                )}
              </Flex>
            </Link>
          ))}
        </HStack>

        <Flex alignItems="center" width="auto" ml={8}>
          {/* <IconButton
            aria-label="Switch Color Mode"
            icon={<ColorModeIcon />}
            variant="baseIconButton"
            onClick={toggleColorMode}
            mr={3}
          /> */}

          <Link
            href={"#pricing"}
            as={Button}
            variant="brand-solid-button"
            onClick={onOpen}
            textAlign="center"
            w={"120px"}
          >
            Join Waitlist
          </Link>
        </Flex>
      </Flex>
      <Portal>
        <Modal
          isOpen={isOpen}
          onClose={onClose}
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
    </Flex>
  );
}
