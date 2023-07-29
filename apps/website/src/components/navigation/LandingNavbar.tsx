import React from "react";
import NextLink from 'next/link'

import {
  Flex,
  Link,
  HStack,
  IconButton,
  useBreakpointValue,
} from "@chakra-ui/react";
import { LogoIcon, ColorModeIcon } from '@root/components/base/Icons';
import { MobileLandingNavbar } from '@root/components/navigation/MobileLandingNavbar';

import {FiArrowUpRight} from 'react-icons/fi'

import { navbarLinks } from '@root/utils/constants';

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
        <Link href="/" transition='transform 0.2s ease-in-out' _hover={{
          textDecoration: 'none',
          
          transform: "translateX(4px)"
          
        }}>
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
              <Flex
                alignItems="center"
                justifyContent="space-between"
              >

              {link.name} 
              {link.isExternal && <FiArrowUpRight style={{marginLeft: '4px'}} />}
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

          <Link href={"#pricing"} as={NextLink} variant="brand-solid-button" textAlign="center" w={"120px"}>
            Buy
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
}
