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
    Progress,
    Badge
} from "@chakra-ui/react";

import { FiInbox, FiPaperclip, FiMessageSquare } from "react-icons/fi";
import { BsDot } from "react-icons/bs";

export type ProjectCardProps = {
    title: string;
    date: string;
    totalTasks: number;
    completedTasks: number;
    status: string;
    avatar: string;
    collaborators: string[];
    content?: string;
    attachmentsCount?: number;
    commentsCount?: number;
}

export const ProjectCard2 = ({
    title,
    date,
    totalTasks,
    completedTasks,
    status,
    avatar,
    collaborators,
    content,
    attachmentsCount,
    commentsCount,
}: ProjectCardProps) => {
  
  return (
    <Card variant="filled" bg="#F7F9FB" w="100%">
      <CardHeader mb={3}>
        <Flex w="100%" justify="space-between">
          <Box>
            <Badge variant="base" colorScheme="purple" mb={2}>
              UI Design
            </Badge>
            <Text textStyle="h4" noOfLines={1}>
              {title}
            </Text>
            <Text textStyle="small" noOfLines={2}>{content}</Text>
          </Box>
        </Flex>
      </CardHeader>
      <CardBody>
        <Flex justify="space-between" w="100%">
          <Avatar name={collaborators[0]} size="xs" src={avatar} />
          <Flex>
            <Flex alignItems="center" textStyle="small">
              <Icon as={FiPaperclip} mr={2} boxSize={4} /> {attachmentsCount}
            </Flex>
            <Flex alignItems="center" textStyle="small" ml={4}>
              <Icon as={FiMessageSquare} mr={2} boxSize={4} /> {commentsCount}
            </Flex>
          </Flex>
        </Flex>
      </CardBody>
    </Card>
  );
}