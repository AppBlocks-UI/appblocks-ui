import React from "react";

import {
  Flex,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  useDisclosure,
  HStack,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  useColorMode
} from "@chakra-ui/react";

import { FiMenu, FiPlus, FiClipboard } from "react-icons/fi";

import { NavbarProps } from "@/components/navigation/Navbar";
import { MobileSidebar } from "@/components/navigation/MobileSidebar";

import { HistoryIcon, BellIcon, ColorModeIcon } from "@/components/base/Icons";

export function MobileNavbar({  }: NavbarProps) {
  const { colorMode, toggleColorMode } = useColorMode()

  const {
    isOpen: isOpenNav,
    onOpen: onOpenNav,
    onClose: onCloseNav,
  } = useDisclosure();
  const {
    isOpen: isOpenSwitcher,
    onOpen: onOpenSwitcher,
    onClose: onCloseSwitcher,
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
          borderBottom="1px solid"
          borderColor="gray.10"
          justifyContent="space-between"
          alignItems="center"
          px={4}
          // pl={0}
          position="sticky"
          _dark={{
            bgColor: "black.100",
            borderColor: "gray.80",
          }}
        >
          <Flex h={16} alignItems="center" width="auto">
            <HStack spacing={4} alignItems="center">
              <Breadcrumb separator="/">
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Dashboard</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem isCurrentPage>
                  <BreadcrumbLink href="#">Default</BreadcrumbLink>
                </BreadcrumbItem>
              </Breadcrumb>
            </HStack>
          </Flex>
          <Flex
            flex="1"
            justifyContent="flex-end"
            alignItems="center"
            ml="24px"
          >
            <Flex alignItems="center" width="auto">
              <IconButton
                aria-label="Switch Color Mode"
                icon={<ColorModeIcon />}
                variant="baseIconButton"
                onClick={toggleColorMode}
              />

              {/* <IconButton
                aria-label="Show history"
                icon={<HistoryIcon />}
                variant="baseIconButton"
              /> */}

              <IconButton
                aria-label="Show notifications"
                icon={<BellIcon />}
                variant="baseIconButton"
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
          placement="right"
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
            <DrawerCloseButton zIndex="popover" variant="baseIconButton" mt="12px" />
            <DrawerHeader>
              <MobileSidebar />
            </DrawerHeader>
          </DrawerContent>
        </Drawer>
      </>
    );
  
}
