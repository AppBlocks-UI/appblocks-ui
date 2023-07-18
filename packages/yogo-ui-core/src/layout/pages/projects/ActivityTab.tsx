import React from 'react'

import { 
  VStack, 
  Flex,
  Avatar,
  Icon,
  Box,
} from '@chakra-ui/react'
import { ColumnDef, createColumnHelper } from "@tanstack/react-table";

import { FullTable } from '@/components/tables/FullTable';
import { FiCalendar } from 'react-icons/fi';

import { getFileIcon } from '@/utils/scripts';

export const ActivityTab = () => {
  const columnHelper = createColumnHelper<any>();

  const columns = React.useMemo<ColumnDef<any, any>[]>(
    () => [
      columnHelper.accessor("file", {
        header: "File Name",
        cell: (info) => (
          <Flex align="center">
            <Avatar
              variant="roundedSquare"
              size="xs"
              icon={getFileIcon(info.renderValue().type)}
              mr={3}
            />
            <Box>{info.renderValue().name}</Box>
          </Flex>
        ),
      }),
      columnHelper.accessor("user", {
        header: "User",
        cell: (info) => (
          <Flex align="center">
            <Avatar src={info.renderValue().picture} size="sm" mr={3} />
            <span>{info.renderValue().name}</span>
          </Flex>
        ),
      }),
      columnHelper.accessor("file", {
        header: "File Size",
        cell: (info) => <span>{info.renderValue().size}</span>,
      }),
      columnHelper.accessor("uploadDate", {
        header: "Upload Date",
        cell: (info) => (
          <Flex align="center">
            <Icon
              as={FiCalendar}
              mr={1.5}
              boxSize={3.5}
              color="gray.40"
              _dark={{ color: "gray.l20" }}
            />
            <span>{info.renderValue()}</span>
          </Flex>
        ),
      }),
    ],
    [columnHelper]
  );

  const data = React.useMemo<any[]>(() => [
    {
      file: {
        name: "Project tech requirements.pdf",
        type: "pdf",
        size: "1.2 MB",
      },
      user: {
        name: "Lisa Dumar",
        picture: "https://bit.ly/dan-abramov",
      },
      uploadDate: "Jun 24, 2021",
    },
    {
      file: {
        name: "Project tech requirements.pdf",
        type: "jpg",
        size: "1.2 MB",
      },
      user: {
        name: "Lisa Dumar",
        picture: "https://bit.ly/dan-abramov",
      },
      uploadDate: "Jun 24, 2021",
    },{
      file: {
        name: "Project tech requirements.pdf",
        type: "xls",
        size: "1.2 MB",
      },
      user: {
        name: "Lisa Dumar",
        picture: "https://bit.ly/dan-abramov",
      },
      uploadDate: "Jun 24, 2021",
    },{
      file: {
        name: "Project tech requirements.pdf",
        type: "jpg",
        size: "1.2 MB",
      },
      user: {
        name: "Olivia Wilde",
        picture: "https://bit.ly/dan-abramov",
      },
      uploadDate: "Jun 24, 2021",
    },
  ], []);

  return (
    <>
      <VStack w="100%" spacing={6} alignItems="flex-start">
        <FullTable
          columns={columns}
          data={data}
          onGlobalFilterChange={()=>{}}
        />
      </VStack>
    </>
  );
}