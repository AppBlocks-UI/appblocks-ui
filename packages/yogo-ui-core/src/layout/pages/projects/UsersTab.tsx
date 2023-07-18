import React from 'react'

import { 
  VStack, 
  Flex,
  Avatar,
  Icon,
} from '@chakra-ui/react'
import { ColumnDef, createColumnHelper } from "@tanstack/react-table";

import { FullTable } from '@/components/tables/FullTable';
import { FiCalendar } from 'react-icons/fi';

export const UsersTab = () => {
  const columnHelper = createColumnHelper<any>();

  const columns = React.useMemo<ColumnDef<any, any>[]>(
    () => [
      columnHelper.accessor("user", {
        header: "User",
        cell: (info) => (
          <Flex align="center">
            <Avatar src={info.renderValue().picture} size="sm" mr={3} />
            <span>{info.renderValue().name}</span>
          </Flex>
        ),
      }),
      columnHelper.accessor("email", {
        header: "Email",
        cell: (info) => <span>{info.renderValue()}</span>,
      }),
      columnHelper.accessor("registrationDate", {
        header: "Registration Date",
        cell: (info) => (
          <Flex align="center">
            <Icon as={FiCalendar} mr={1.5} boxSize={3.5} color="gray.40" _dark={{color: "gray.l20"}} />
            <span>{info.renderValue()}</span>
          </Flex>
        ),
      }),
    ],
    [columnHelper]
  );

  const data = React.useMemo<any[]>(() => [
    {
      user: {
        name: "Lisa Dumar",
        picture: "https://bit.ly/dan-abramov",
      },
      registrationDate: "Jun 24, 2021",
      email: "smith@accenture.co",
    },
    {
      user: {
        name: "Lisa Dumar",
        picture: "https://bit.ly/dan-abramov",
      },
      registrationDate: "Jun 24, 2021",
      email: "smith@accenture.co",
    },{
      user: {
        name: "Lisa Dumar",
        picture: "https://bit.ly/dan-abramov",
      },
      registrationDate: "Jun 24, 2021",
      email: "smith@accenture.co",
    },{
      user: {
        name: "Lisa Dumar",
        picture: "https://bit.ly/dan-abramov",
      },
      registrationDate: "Jun 24, 2021",
      email: "smith@accenture.co",
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