import { AccordionItem, Text, AccordionButton, Link, Flex, Icon, Box } from '@chakra-ui/react'
import { isPathActive } from '@/utils/scripts'
import { useRouter } from 'next/router'

export const NavItem = (props: any) => {
    const { menuItem } = props
  const router = useRouter();

  return (
    <>
        <AccordionItem w="100%" position="relative">
                    <AccordionButton
                      as={Link}
                      href={menuItem.link}
                      fontWeight={
                        isPathActive(
                          menuItem.link,
                          menuItem.submenu != undefined,
                          router
                        )
                          ? "semibold"
                          : "normal"
                      }
                      bgColor={
                        isPathActive(
                          menuItem.link,
                          menuItem.submenu != undefined,
                          router
                        )
                          ? "gray.5"
                          : ""
                      }
                      _dark={{
                        bgColor: isPathActive(
                          menuItem.link,
                          menuItem.submenu != undefined,
                          router
                        )
                          ? "gray.l5"
                          : "",
                      }}
                    >
                      {isPathActive(menuItem.link, true, router) && (
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
                          // as={menuItem.icon}
                          mr={2}
                          boxSize={4}
                          color={
                            isPathActive(
                              menuItem.link,
                              menuItem.submenu != undefined,
                              router
                            )
                              ? "brand.primary.alpha"
                              : "gray.80"
                          }
                          _dark={{
                            color: isPathActive(
                              menuItem.link,
                              menuItem.submenu != undefined,
                              router
                            )
                              ? "white.100"
                              : "white.100",
                          }}
                        />
                        <Text textStyle="base">{menuItem.name} </Text>
                      </Flex>
                    </AccordionButton>
                  </AccordionItem>
    </>
  )
}