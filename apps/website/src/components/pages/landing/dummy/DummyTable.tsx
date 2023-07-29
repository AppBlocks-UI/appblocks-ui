import React from 'react'
import {
  Flex,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";

export const DummyTable = () => {
  return (
    <Flex w="200%">
      <TableContainer >
        <Table variant="filled">
          <Thead>
            <Tr>
              <Th>Date</Th>
              <Th>Description</Th>
              <Th isNumeric>Amounts</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>June 12, 2023</Td>
              <Td>AppBlocks sid amet</Td>
              <Td isNumeric>$149.99</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Flex>
  );
}