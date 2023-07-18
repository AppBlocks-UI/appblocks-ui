import React from "react";

import {
  Flex,
  Text,
  VStack,
} from "@chakra-ui/react";

import { BugIcon, SignalIcon, UserIcon } from "@/components/base/Icons";

import { NotificationsList } from "@/components/lists/NotificationsList";
import { ActivityList } from "@/components/lists/ActivityList";
import { ContactList } from "@/components/lists/ContactList";

export const notifications = [
  {
    type: "info", // info, user, bug
    icon: BugIcon,
    title: "You have a bug that needs to be fixed.",
    time: "Just now",
  },
  {
    type: "info", // info, user, bug
    icon: UserIcon,
    title: "You have a bug that needs to be fixed.",
    time: "Just now",
  },
  {
    type: "info", // info, user, bug
    icon: SignalIcon,
    title: "You have a bug that needs to be fixed.",
    time: "Just now",
  },
]

const contacts = [
  {
    photo: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80",
    title: "Lisa Dumar",
  },
  {
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80",
    title: "Austin James",
  },
  {
    photo: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    title: "Donovan Rose",
  },
  {
    photo: "https://images.unsplash.com/photo-1570158268183-d296b2892211?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBvcnRyYWl0fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    title: "Joel Tatum",
  },
]

export const RightSidebar = (props: any) => {

  return (
    <Flex
      minH="100vh"
      flexDir="column"
      top={0}
      right={0}
      pt={7}
      // position="sticky"
      borderLeft="1px"
      borderColor="gray.10"
      _dark={{
        borderColor: 'gray.80'
      }}
    >
      <VStack
        px="24px"
        width="100%"
        justifyContent="space-between"
        alignItems="center"
        gap={5}
      >
        <VStack alignItems="flex-start">
          <Text textStyle="h5">Notifications</Text>
          <NotificationsList list={notifications} />
        </VStack>

        <VStack alignItems="flex-start">
          <Text textStyle="h5">Activities</Text>
          <ActivityList list={notifications} />
        </VStack>

        <VStack alignItems="flex-start" w="100%">
          <Text textStyle="h5">Contacts</Text>
          <ContactList list={contacts} />
        </VStack>
      </VStack>
    </Flex>
  );
};
