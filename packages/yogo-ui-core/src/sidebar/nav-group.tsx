import { AccordionItem, AccordionButton, Flex, Icon, AccordionPanel, Link } from '@chakra-ui/react'
import { Box } from 'framer-motion'
import React from 'react'

export const NavGroup = () => {
  return (
    <>
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
                              // as={menuItem.icon}
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
                                  bgColor: "gray.l5",
                                },
                              }}
                              w="100%"
                              py={2}
                              px={6}
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
                                <Text textStyle="base" ml={4}>
                                  {submenuItem.name}
                                </Text>
                              </Flex>
                            </Box>
                          ))}
                        </AccordionPanel>
                      </>
                    )}
                  </AccordionItem>
    </>
  )
}