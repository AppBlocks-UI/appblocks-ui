import React from "react";
import NextLink from "next/link";

import {
  Flex,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  useDisclosure,
  useColorMode,
  Link,
  VStack,
} from "@chakra-ui/react";

import { FiMenu } from "react-icons/fi";

import { NavbarProps } from "@/components/navigation/Navbar";

import { ColorModeIcon, DarkModeLogoIcon } from "@/components/base/Icons";

import { LogoIcon } from "@/components/base/Icons";

import { navbarLinks } from "./LandingNavbar";

export function MobileLandingNavbar({}: NavbarProps) {
  const { colorMode, toggleColorMode } = useColorMode();

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
        bgColor="white.100"
        justifyContent="space-between"
        alignItems="center"
        px={4}
        position="sticky"
        _dark={{
          bgColor: "black.100",
        }}
      >
        <Flex h={16} alignItems="center" width="auto">
          <Link href="/" as={NextLink}>
            {colorMode == "dark" ? (
              <DarkModeLogoIcon w={32} />
            ) : (
              <LogoIcon w={32} />
            )}
          </Link>
        </Flex>
        <Flex flex="1" justifyContent="flex-end" alignItems="center" ml="24px">
          <Flex alignItems="center" width="auto">
            <IconButton
              aria-label="Switch Color Mode"
              icon={<ColorModeIcon />}
              variant="baseIconButton"
              onClick={toggleColorMode}
            />

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
          bg="white.100"
          borderLeft="1px"
          borderColor="gray.10"
          _dark={{
            bg: "black.100",
            borderColor: "gray.80",
          }}
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
                >
                  {link.name}
                </Link>
              ))}

              <Link
                href={"/signin"}
                as={NextLink}
                variant="outlineButton"
                w="100%"
                textAlign="center"
              >
                Sign in
              </Link>
            </VStack>
          </DrawerHeader>
        </DrawerContent>
      </Drawer>
    </>
  );
}
