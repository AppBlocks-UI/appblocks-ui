import React from "react";
import NextLink from 'next/link'

import {
  Flex,
  IconButton,
  useDisclosure,
  useColorModeValue,
  useColorMode,
  Link,
  Portal,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
} from "@chakra-ui/react";

import { FiMenu } from "react-icons/fi";

import { ColorModeIcon } from "@root/components/base/Icons";

import {FiArrowUpRight} from 'react-icons/fi'

import { LogoIcon } from '@root/components/base/Icons';

import { navbarLinks } from '@root/utils/constants';

import WaitlistForm from "@root/components/forms/WaitlistForm";

export interface NavbarProps {
  title?: string;
  username?: string;
}

export function MobileLandingNavbar({  }: NavbarProps) {
  const { colorMode, toggleColorMode } = useColorMode()

  const {
    isOpen: isOpenWaitlistModal,
    onOpen: onOpenWaitlistModal,
    onClose: onCloseWaitlistModal,
  } = useDisclosure();


  const btnRef = React.useRef<HTMLButtonElement>(null);

    return (
      <>
        <Flex
          h={16}
          zIndex="banner"
          w="100%"
          top={0}
          left={0}
          bgColor={useColorModeValue("white.100", "black.100")}
          justifyContent="space-between"
          alignItems="center"
          px={4}
          position="sticky"
        >
          <Flex h={16} alignItems="center" width="auto">
            <Link href="/" as={NextLink}>
              <LogoIcon boxSize={24} color="brand.secondary.gamma" />
            </Link>
          </Flex>
          <Flex
            flex="1"
            justifyContent="flex-end"
            alignItems="center"
            ml="24px"
          >
            <Flex alignItems="center" width="auto">
              {/* <IconButton
                aria-label="Switch Color Mode"
                icon={<ColorModeIcon />}
                variant="baseIconButton"
                onClick={toggleColorMode}
              /> */}
              <Menu>
                <MenuButton
                  as={IconButton}
                  aria-label="Mobile menu"
                  icon={<FiMenu />}
                  ref={btnRef}
                  variant="baseIconButton"
                />
                <MenuList >
                  {navbarLinks.map((link, index) => (
                    <MenuItem w="100%" justifyContent="center">
                      <Link
                        key={`navbar-links-${index}`}
                        href={link.href}
                        as={NextLink}
                        variant="navlink"
                        target={link.isExternal ? "_blank" : ""}
                        my={0.8}
                      >
                        <Flex
                          alignItems="center"
                          justifyContent="space-between"
                        >
                          {link.name}
                          {link.isExternal && (
                            <FiArrowUpRight style={{ marginLeft: "4px" }} />
                          )}
                        </Flex>
                      </Link>
                    </MenuItem>
                  ))}
                  <MenuDivider />
                  <MenuItem>
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
                  </MenuItem>
                </MenuList>
              </Menu>
            </Flex>
          </Flex>
        </Flex>
        
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
