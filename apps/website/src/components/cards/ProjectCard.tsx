import React from 'react'

import {
    Card,
    CardHeader,
    CardBody,
    Heading,
    Flex,
    Text,
    Box,
    Icon,
    Avatar,
    VStack,
    Progress
} from "@chakra-ui/react";

import { FiInbox } from "react-icons/fi";
import { BsDot } from "react-icons/bs";

export type ProjectCardProps = {
    title: string;
    date: string;
    totalTasks: number;
    completedTasks: number;
    status: string;
    avatar: string;
    collaborators: string[];
}

export const ProjectCard = ({
    title,
    date,
    totalTasks,
    completedTasks,
    status,
    avatar,
    collaborators
}: ProjectCardProps) => {
    const calaculateProgress = () => {
        return (completedTasks / totalTasks) * 100;
    }
  return (
    <Card variant="filled" bg="#F7F9FB" w="100%">
      <CardHeader mb={3}>
        <Flex w="100%" justify="space-between">
          <Box>
            <Text textStyle="h5" noOfLines={1}>{title}</Text>
            <Text textStyle="small">Due Date: {date}</Text>
          </Box>
          <Icon
            as={FiInbox}
            p={1.5}
            rounded="full"
            w={8}
            h={8}
            color="brand.secondary.f"
            bg="brand.secondary.kappa50"
          />
        </Flex>
      </CardHeader>
      <CardBody>
        <VStack spacing={2}>
          <Flex justify="space-between" w="100%">
            <Avatar name={collaborators[0]} size="xs" src={avatar} />
            <Flex alignItems="center" textStyle="small">
              <Icon as={BsDot} w={8} h={30} />
              {status}
            </Flex>
          </Flex>
          <Progress  value={calaculateProgress()} w="100%" height={1} rounded="full" bgColor="brand.secondary.kappa50" colorScheme="purple" />

          <Flex alignItems="center" justify="space-between" w="100%">
            <Flex alignItems="center">
                <Text as="span" textStyle="small" color="black.100" mr={1.5}>{completedTasks} / {totalTasks}</Text>
                <Text textStyle="small">Total Tasks</Text>
            </Flex>
            <Flex alignItems="center" textStyle="small" color="black.100" >
              <Icon as={BsDot} w={8} h={30} />
              {calaculateProgress()}%
            </Flex>
          </Flex>
        </VStack>
      </CardBody>
    </Card>
  );
}