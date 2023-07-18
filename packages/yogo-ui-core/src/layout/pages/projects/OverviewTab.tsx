import React from 'react'

import {
    VStack,
    Flex,
    Card,
    CardHeader,
    CardBody,
    Text, 
    Icon,
    SimpleGrid,
    Divider,
    Stack,
  } from "@chakra-ui/react";
import { ColumnDef, createColumnHelper } from "@tanstack/react-table";

import { useDropzone } from "react-dropzone";

import { ActivityList } from "@/components/lists/ActivityList";
import { FilesList } from "@/components/lists/FilesList";
import { MiniTable } from '@/components/tables/MiniTable';

import { FiPocket } from "react-icons/fi";

import { notifications } from '@/components/navigation/RightSidebar';
import { FileUpload } from '@/components/forms/FileUpload';


const latestFiles = [
  {
    photo: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80",
    owner: "Lisa Dumar",
    fileSize: 5.6,
    time: "Just now",
    name: "Project design proposal stylings",
  },
  {
    photo: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80",
    owner: "Lisa Dumar",
    fileSize: 5.6,
    time: "Just now",
    name: "Project design proposal stylings",
  },
  {
    photo: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80",
    owner: "Lisa Dumar",
    fileSize: 5.6,
    time: "Just now",
    name: "Project design proposal stylings",
  },
  {
    photo: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80",
    owner: "Lisa Dumar",
    fileSize: 5.6,
    time: "Just now",
    name: "Project design proposal stylings",
  },
]

export const OverviewTab = () => {

  const onDrop = React.useCallback((acceptedFiles: any) => {
    // Do something with the files
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const columnHelper = createColumnHelper<any>();

  const columns = React.useMemo<ColumnDef<any, any>[]>(
    () => [
      columnHelper.accessor("manager", {
        header: "Manager",
        cell: (info) => <span>{info.renderValue()}</span>,
      }),
      columnHelper.accessor("date", {
        header: "Date",
        cell: (info) => <span>{info.renderValue()}</span>,
      }),
      columnHelper.accessor("amount", {
        header: "Amount",
        cell: (info) => <span>{info.renderValue()}</span>,
      }),
      columnHelper.accessor("status", {
        header: "Status",
        cell: (info) => <span>{info.renderValue()}</span>,
      }),
    ],
    [columnHelper]
  );

  const data = React.useMemo<any[]>(() => [
    {
      manager: "Lisa Dumar",
      date: "Jun 24, 2021",
      amount: "$942",
      status: "In Progress",
    },
    {
      manager: "Lisa Dumar",
      date: "Jun 24, 2021",
      amount: "$942",
      status: "In Progress",
    },
    {
      manager: "Lisa Dumar",
      date: "Jun 24, 2021",
      amount: "$942",
      status: "In Progress",
    },
    {
      manager: "Lisa Dumar",
      date: "Jun 24, 2021",
      amount: "$942",
      status: "In Progress",
    },
  ], []);

  return (
    <>
      <VStack w="100%" spacing={6} alignItems="flex-start">
        <SimpleGrid
          spacing={6}
          columns={1}
          w="100%"
        >
          <Card variant="filled">
            <CardHeader mb={4}>
              <Flex w="100%" justify="space-between">
                <Text textStyle="h4">Coffee detail page</Text>
                <Icon
                  as={FiPocket}
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
              <Stack
                w="100%"
                direction={['column', 'column', 'row']}
                spacing={[5, 0]}
                justify="space-between"
                alignItems={["flex-start", "center"]}
                mt={2}
              >
                <VStack spacing={2} align="flex-start">
                  <Text textStyle="mid">Status</Text>
                  <Text textStyle="h3">49</Text>
                </VStack>

                <Divider orientation="vertical" />

                <VStack spacing={2} align="flex-start">
                  <Text textStyle="mid">Total Tasks</Text>
                  <Text textStyle="h3">15 / 48</Text>
                </VStack>

                <Divider orientation="vertical" />

                <VStack spacing={2} align="flex-start">
                  <Text textStyle="mid">Due Date</Text>
                  <Text textStyle="h3">29 Jan, 2022</Text>
                </VStack>

                <Divider orientation="vertical" />

                <VStack spacing={2} align="flex-start">
                  <Text textStyle="mid">Budget Spent</Text>
                  <Text textStyle="h3">$15,000</Text>
                </VStack>
              </Stack>
            </CardBody>
          </Card>
        </SimpleGrid>

        <SimpleGrid
          spacing={6}
          templateColumns="repeat(auto-fit, minmax(280px, 1fr))"
          w="100%"
        >
          <Card variant="filled">
            <CardHeader mb={4}>
              <Text textStyle="h3">What's on the road?</Text>
            </CardHeader>
            <CardBody>
              <ActivityList list={notifications} />
            </CardBody>
          </Card>

          <Card variant="filled">
            <CardHeader mb={4}>
              <Text textStyle="h3">Latest Files</Text>
            </CardHeader>
            <CardBody>
              <FilesList list={latestFiles} />
              <FileUpload 
                label=""
                isDragActive={isDragActive}
                rootprops={getRootProps}
                inputprops={getInputProps}
              />
            </CardBody>
          </Card>
        </SimpleGrid>

        <SimpleGrid
          spacing={6}
          w="100%"
        >
          <Card variant="filled">
            <CardHeader mb={4}>
              <Text textStyle="h3">Project Spendings</Text>
            </CardHeader>
            <CardBody>
            <MiniTable
              columns={columns}
              data={data}
              // onGlobalFilterChange={()=>{}}
            />
            </CardBody>
          </Card>
        </SimpleGrid>
      </VStack>
    </>
  );
}