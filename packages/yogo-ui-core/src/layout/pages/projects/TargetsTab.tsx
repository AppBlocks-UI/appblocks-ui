import React from 'react'

import { VStack, SimpleGrid, Flex, Text } from "@chakra-ui/react";
import { ProjectCard2, ProjectCardProps } from '@/components/cards/ProjectCard2';
import { TargetTopCard } from '@/components/cards/TargetTopCard';

export const TargetsTab = () => {
  const projectsList: ProjectCardProps[] = [
    {
      title: "Poster illustation design",
      date: "Nov 10, 2022",
      totalTasks: 25,
      completedTasks: 11,
      status: "In Progress",
      avatar: "https://bit.ly/kent-c-dodds",
      collaborators: ["https://bit.ly/kent-c-dodds"],
      content: 'First, a disclaimer – the entire process writing a blog post often takes a couple of hours if you can type',
      attachmentsCount: 4,
      commentsCount: 9,
    },
    {
      title: "Poster illustation design",
      date: "Nov 10, 2022",
      totalTasks: 25,
      completedTasks: 11,
      status: "In Progress",
      avatar: "https://bit.ly/kent-c-dodds",
      collaborators: ["https://bit.ly/kent-c-dodds"],
      content: 'First, a disclaimer – the entire process writing a blog post often takes a couple of hours if you can type',
      attachmentsCount: 4,
      commentsCount: 9,
    },
    {
      title: "Poster illustation design",
      date: "Nov 10, 2022",
      totalTasks: 25,
      completedTasks: 11,
      status: "In Progress",
      avatar: "https://bit.ly/kent-c-dodds",
      collaborators: ["https://bit.ly/kent-c-dodds"],
      content: 'First, a disclaimer – the entire process writing a blog post often takes a couple of hours if you can type',
      attachmentsCount: 4,
      commentsCount: 9,
    },
    {
      title: "Coffee detail page - Main Page",
      date: "Nov 10, 2022",
      totalTasks: 25,
      completedTasks: 11,
      status: "In Progress",
      avatar: "https://bit.ly/kent-c-dodds",
      collaborators: ["https://bit.ly/kent-c-dodds"],
      content: 'First, a disclaimer – the entire process writing a blog post often takes a couple of hours if you can type',
      attachmentsCount: 4,
      commentsCount: 9,
    },
    {
      title: "Poster illustation design",
      date: "Nov 10, 2022",
      totalTasks: 25,
      completedTasks: 11,
      status: "In Progress",
      avatar: "https://bit.ly/kent-c-dodds",
      collaborators: ["https://bit.ly/kent-c-dodds"],
      content: 'First, a disclaimer – the entire process writing a blog post often takes a couple of hours if you can type',
      attachmentsCount: 4,
      commentsCount: 9,
    },
    {
      title: "Poster illustation design",
      date: "Nov 10, 2022",
      totalTasks: 25,
      completedTasks: 11,
      status: "In Progress",
      avatar: "https://bit.ly/kent-c-dodds",
      collaborators: ["https://bit.ly/kent-c-dodds"],
      content: 'First, a disclaimer – the entire process writing a blog post often takes a couple of hours if you can type',
      attachmentsCount: 4,
      commentsCount: 9,
    },

  ];
  return (
    <>
      <VStack w="100%" spacing={6} alignItems="flex-start">
        <SimpleGrid spacing={6} columns={{ base: 1, md: 2, lg: 3 }} w="100%">
          <VStack spacing={6}>
            <TargetTopCard
              title="Yet to start"
              count={projectsList.length}
              color={{
                light: "brand.secondary.j",
                dark: "brand.secondary.j",
              }}
            />
            {projectsList.map((project, key: number) => (
              <ProjectCard2
                key={`project-${key}`}
                title={project.title}
                date={project.date}
                totalTasks={project.totalTasks}
                completedTasks={project.completedTasks}
                status={project.status}
                avatar={project.avatar}
                collaborators={project.collaborators}
                content={project.content}
                attachmentsCount={project.attachmentsCount}
                commentsCount={project.commentsCount}
              />
            ))}
          </VStack>

          <VStack spacing={6}>
            <TargetTopCard
              title="In Progress"
              count={projectsList.length}
              color={{
                light: "brand.secondary.g",
                dark: "brand.secondary.g",
              }}
            />
            {projectsList.map((project, key: number) => (
              <ProjectCard2
                key={`project-${key}`}
                title={project.title}
                date={project.date}
                totalTasks={project.totalTasks}
                completedTasks={project.completedTasks}
                status={project.status}
                avatar={project.avatar}
                collaborators={project.collaborators}
                content={project.content}
                attachmentsCount={project.attachmentsCount}
                commentsCount={project.commentsCount}
              />
            ))}
          </VStack>

          <VStack spacing={6}>
            <TargetTopCard
              title="Completed"
              count={projectsList.length}
              color={{
                light: "brand.secondary.f",
                dark: "brand.secondary.f",
              }}
            />
            {projectsList.map((project, key: number) => (
              <ProjectCard2
                key={`project-${key}`}
                title={project.title}
                date={project.date}
                totalTasks={project.totalTasks}
                completedTasks={project.completedTasks}
                status={project.status}
                avatar={project.avatar}
                collaborators={project.collaborators}
                content={project.content}
                attachmentsCount={project.attachmentsCount}
                commentsCount={project.commentsCount}
              />
            ))}
          </VStack>
        </SimpleGrid>
      </VStack>
    </>
  );
}