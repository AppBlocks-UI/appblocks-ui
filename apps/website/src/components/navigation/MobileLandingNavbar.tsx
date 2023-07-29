import React from "react";
import NextLink from 'next/link'

import {
  Flex,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  useDisclosure,
  useColorModeValue,
  useColorMode,
  Link,
  VStack,
} from "@chakra-ui/react";

import { FiMenu } from "react-icons/fi";

import { ColorModeIcon } from "@root/components/base/Icons";

import {FiArrowUpRight} from 'react-icons/fi'

import { LogoIcon } from '@root/components/base/Icons';

import { navbarLinks } from '@root/utils/constants';

export interface NavbarProps {
  title?: string;
  username?: string;
}

export function MobileLandingNavbar({  }: NavbarProps) {
  const { colorMode, toggleColorMode } = useColorMode()

  const {
    isOpen: isOpenNav,
    onOpen: onOpenNav,
    onClose: onCloseNav,
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

              <IconButton
                aria-label="Menu"
                onClick={onOpenNav}
                ref={btnRef}
                icon={<FiMenu />}
                variant="baseIconButton"
              />
            </Flex>
          </Flex>
        </Flex>
        <Drawer
          isOpen={isOpenNav}
          placement="top"
          onClose={onCloseNav}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />

          <DrawerContent
            bg={useColorModeValue("white.100", "black.100")}
            borderLeft="1px"
            borderColor={useColorModeValue("gray.10", "gray.80")}
          >
            <DrawerCloseButton
              zIndex="popover"
              variant="baseIconButton"
              mt="12px"
            />
            <DrawerHeader>
              <VStack width="auto" gap={3} mt={4} align="center">
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

                <Link
                  href={"#pricing"}
                  as={NextLink}
                  variant="outlineButton"
                  w="100%"
                  textAlign="center"
                >
                  Buy
                </Link>
              </VStack>
            </DrawerHeader>
          </DrawerContent>
        </Drawer>
      </>
    );
  
}
