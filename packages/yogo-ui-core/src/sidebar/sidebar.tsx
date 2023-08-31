import React from "react";

import { useRouter } from "next/router";

import { ChevronDownIcon, ChevronRightIcon } from "@chakra-ui/icons";

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
import { NavItem } from "./nav-item";
import { NavGroup } from "./nav-group";


const sidebarMenu = [
  {
    name: "Dashboards",
    icon: ChevronDownIcon,
    link: "#dash",
    submenu: [
      {
        name: "Overview",
        icon: ChevronDownIcon,
        link: "#overview",
      },
      {
        name: "Reports",
        icon: ChevronDownIcon,
        link: "#reports",
      },
    ],
  },
  {
    name: "Projects",
    icon: ChevronDownIcon,
    link: "#projects",
    submenu: [
      {
        name: "Overview",
        icon: ChevronDownIcon,
        link: "/projects",
      },
      {
        name: "Project Details",
        icon: ChevronDownIcon,
        link: "/projects/project-details",
      },
      {
        name: "Followers",
        icon: ChevronDownIcon,
        link: "#followers",
      },
    ],
  }
];


export const Sidebar = (props: any) => {
  const router = useRouter();
  const { colorMode } = useColorMode()
  const { 
    // sidebarMenu, 
    // LogoIcon,
    // DarkModeLogoIcon 
  } = props

  return (
    <Flex
      minH="100vh"
      // position="sticky"
      flexDir="column"
      top={0}
      left={0}
      justify="space-between"
      borderRight="1px solid"
      borderColor="gray.10"
      _dark={{
        borderColor: "gray.l10",
      }}
    >
      <Box>
        <Flex
          px={4}
          width="100%"
          height="73px"
          borderRadius="md"
          mb={4}
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
              <Text textStyle="base">Hannah Dubois</Text>
            </Box>
          </Flex>
        </Flex>

        <VStack gap={0} alignItems="flex-start" px={4}>
          <Text textStyle="mid" pr={0} mb={2}>
            Pages
          </Text>
          <Accordion w="100%" allowMultiple>
            {sidebarMenu.map((menuItem, index) => (
              <VStack key={`menu-item-${index}`} gap={0} spacing={0} w="100%">
                {menuItem.submenu ? (
                  <NavGroup />
                ) : (
                  <NavItem />
                )}
              </VStack>
            ))}
          </Accordion>
        </VStack>
      </Box>
      <Box w="100%" textAlign="center" mb={5}>
        {/* {colorMode == 'dark' ? <DarkModeLogoIcon w={32} /> : <LogoIcon w={32} />} */}
      </Box>
    </Flex>
  );
};
