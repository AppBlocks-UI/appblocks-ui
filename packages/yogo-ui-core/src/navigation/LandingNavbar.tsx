import React from "react";
import NextLink from 'next/link'

import {
  Flex,
  Link,
  HStack,
  IconButton,
  useColorMode,
} from "@chakra-ui/react";
import { LogoIcon, ColorModeIcon, DarkModeLogoIcon } from '@/components/base/Icons';

export const navbarLinks = [
  { name: "Product", href: "#" },
  { name: "Solutions", href: "#" },
  { name: "Resources", href: "#" },
  { name: "Pricing", href: "#" },
];

export function LandingNavbar(props: any) {
  const { colorMode, toggleColorMode } = useColorMode()

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
        bg: "transparent",
      }}
    >
      <Flex h={100} alignItems="center" width="auto" mr="89px">
        <Link href="/">
          {colorMode == 'dark' ? <DarkModeLogoIcon w={32} /> : <LogoIcon w={32} />}
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
            >
              {link.name}
            </Link>
          ))}
        </HStack>

        <Flex alignItems="center" width="auto" ml={8}>
        <IconButton
                aria-label="Switch Color Mode"
                icon={<ColorModeIcon />}
                variant="baseIconButton"
                onClick={toggleColorMode}
                mr={3}
              />

          <Link href={"/signin"} as={NextLink} variant="outlineButton">
            Sign in
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
}
