import React from 'react'

import {
    Card,
    CardHeader,
    CardBody,
    Flex,
    Text,
    Box,
    Icon,
} from "@chakra-ui/react";

import { FiInbox, FiPaperclip, FiMessageSquare } from "react-icons/fi";
import { BsDot } from "react-icons/bs";

export type ProjectCardProps = {
    title: string;
    content: string;
    icon: any;
}

export const ProjectCard2 = ({
    title,
    icon,
    content,
}: ProjectCardProps) => {
  
  return (
    <Card variant="filled" bg="#F7F9FB" w="100%">
      <CardHeader mb={3}>
        <Flex w="100%" justify="space-between">
          <Box>
            <Icon as={icon} boxSize={6} mb={4} color="brand.secondary.f" />
            <Text textStyle="h3" noOfLines={1}>
              {title}
            </Text>
          </Box>
        </Flex>
      </CardHeader>
      <CardBody>
        <Text textStyle="featureContent">{content}</Text>
      </CardBody>
    </Card>
  );
}