import React from 'react'
import {useRouter} from 'next/router'
import {
  Flex,
  Box,
  Avatar,
  Text,
  VStack,
  Icon,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  useColorMode,
  Link,
} from "@chakra-ui/react";

import { ChevronDownIcon, ChevronRightIcon } from "@chakra-ui/icons";

import { switchPage } from "@/utils/scripts";
import { sidebarMenu } from "@/utils/constants";

import { LogoIcon, DarkModeLogoIcon } from '@/components/base/Icons';

export const MobileSidebar = () => {
  const router = useRouter();
  const { colorMode } = useColorMode()


  const isPathActive = (path: string, isParent: boolean) => {
    if(isParent)
        return router.asPath.includes(path)
    
    return router.asPath.endsWith(path);
  };

  return (
    <Flex
      h="100vh"
      flexDir="column"
      top={0}
      left={0}
      position="sticky"
      justify="space-between"
    >
      <Box>
        <Flex
          // px="24px"
          width="100%"
          height={100}
          borderRadius="md"
          mb={4}
          color="white"
          fontSize="14px"
          justifyContent="space-between"
          alignItems="center"
        >
          <Flex alignItems="center">
            <Avatar
              name="Hannah Waddingham"
              src="https://plus.unsplash.com/premium_photo-1663054688278-ebf09d654d33?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"
              bgColor="brand.primary.kappa"
              color="black.100"
              size="sm"
              mr={2}
            />
            <Box>
              <Text textStyle="base">Hannah Waddingham</Text>
            </Box>
          </Flex>
          {/* <IconButton
          aria-label="options"
          style={{ backgroundColor: "#011E3D" }}
          icon={<KebabMenuIcon />}
          w="auto"
          color="iconGray.100"
        /> */}
        </Flex>

        <VStack gap={0} alignItems="flex-start">
          <Text textStyle="mid" pr={0} mb={2}>
            Pages
          </Text>
          <Accordion w="100%" allowMultiple>
            {sidebarMenu.map((menuItem, index) => (
              <VStack key={`menu-item-${index}`} gap={0} spacing={0} w="100%">
                {menuItem.submenu ? (
                  <AccordionItem w="100%">
                    {({ isExpanded }) => (
                      <>
                        <AccordionButton
                          position="relative"
                          bg={
                            isPathActive(
                              menuItem.link,
                              menuItem.submenu != undefined
                            )
                              ? "gray.5"
                              : "transparent"
                          }
                          _dark={{
                            bg: isPathActive(
                              menuItem.link,
                              menuItem.submenu != undefined
                            )
                              ? "gray.l5"
                              : "transparent",
                          }}
                        >
                          {isPathActive(menuItem.link, true) && (
                            <Box
                              bg="brand.primary.alpha"
                              _dark={{
                                bg: "brand.secondary.beta",
                              }}
                              width={1}
                              height="4"
                              rounded="full"
                              position="absolute"
                              left={0}
                            />
                          )}
                          <Flex alignItems="center" justify="flex-start">
                            <Icon
                              as={menuItem.icon}
                              mr={2}
                              boxSize={4}
                              color={
                                isPathActive(
                                  menuItem.link,
                                  menuItem.submenu != undefined
                                )
                                  ? "brand.primary.alpha"
                                  : "gray.80"
                              }
                              _dark={{
                                color: isPathActive(
                                  menuItem.link,
                                  menuItem.submenu != undefined
                                )
                                  ? "white.100"
                                  : "white.100",
                              }}
                            />
                            <Text textStyle="base">{menuItem.name}</Text>
                          </Flex>
                          {isExpanded ? (
                            <ChevronDownIcon
                              boxSize={5}
                              color="gray.20"
                              _dark={{
                                color: "gray.l40",
                              }}
                            />
                          ) : (
                            <ChevronRightIcon
                              boxSize={5}
                              color="gray.20"
                              _dark={{
                                color: "gray.l40",
                              }}
                            />
                          )}
                        </AccordionButton>
                        <AccordionPanel>
                          {menuItem.submenu.map((submenuItem, index) => (
                            <Box
                              key={`submenu-item-${index}`}
                              as={Link}
                              href={submenuItem.link}
                              display="flex"
                              alignItems="center"
                              _hover={{
                                cursor: "pointer",
                                bgColor: "gray.5",
                                _dark: {
                                  bgColor: "gray.l80",
                                },
                              }}
                              w="100%"
                              py={2}
                              // px={4}
                              marginTop="0"
                              position="relative"
                              rounded="md"
                              fontWeight={
                                isPathActive(submenuItem.link, false) // not a parent
                                  ? "semibold"
                                  : "normal"
                              }
                              bgColor={
                                isPathActive(submenuItem.link, false) // not a parent
                                  ? "gray.5"
                                  : "transparent"
                              }
                              _dark={{
                                bgColor: isPathActive(submenuItem.link, false) // not a parent
                                  ? "gray.l5"
                                  : "transparent",
                              }}
                            >
                              {isPathActive(submenuItem.link, false) && (
                                <Box
                                  bg="brand.primary.alpha"
                                  _dark={{
                                    bg: "brand.secondary.beta",
                                  }}
                                  width={1}
                                  height="4"
                                  rounded="full"
                                  position="absolute"
                                  left={0}
                                />
                              )}
                              <Flex alignItems="center">
                                <Text textStyle="base" ml={12}>
                                  {submenuItem.name}
                                </Text>
                              </Flex>
                            </Box>
                          ))}
                        </AccordionPanel>
                      </>
                    )}
                  </AccordionItem>
                ) : (
                  <AccordionItem w="100%" position="relative">
                    <AccordionButton
                      as={Link}
                      href={menuItem.link}
                      fontWeight={
                        isPathActive(
                          menuItem.link,
                          menuItem.submenu != undefined
                        )
                          ? "semibold"
                          : "normal"
                      }
                      bgColor={
                        isPathActive(
                          menuItem.link,
                          menuItem.submenu != undefined
                        )
                          ? "gray.5"
                          : ""
                      }
                      _dark={{
                        bgColor: isPathActive(
                          menuItem.link,
                          menuItem.submenu != undefined
                        )
                          ? "gray.l5"
                          : "",
                      }}
                    >
                      {isPathActive(menuItem.link, true) && (
                        <Box
                          bg="brand.primary.alpha"
                          _dark={{
                            bg: "brand.secondary.beta",
                          }}
                          width={1}
                          height="4"
                          rounded="full"
                          position="absolute"
                          left={0}
                        />
                      )}
                      <Flex align="center" justify="flex-start">
                        <Icon
                          as={menuItem.icon}
                          mr={2}
                          boxSize={4}
                          color={
                            isPathActive(
                              menuItem.link,
                              menuItem.submenu != undefined
                            )
                              ? "iconGray.200"
                              : "iconGray.100"
                          }
                        />
                        <Text textStyle="base">{menuItem.name} </Text>
                      </Flex>
                    </AccordionButton>
                  </AccordionItem>
                )}
              </VStack>
            ))}
          </Accordion>
        </VStack>
      </Box>
      <Box w="100%" textAlign="center"  mb={8}>
        {colorMode == 'dark' ? <DarkModeLogoIcon w={32} /> : <LogoIcon w={32} />}
      </Box>
    </Flex>
  );
}