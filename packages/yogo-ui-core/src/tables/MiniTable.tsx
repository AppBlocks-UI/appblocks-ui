import React from "react";

import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  HStack,
  VStack,
  Text,
} from "@chakra-ui/react";
import { rankItem } from "@tanstack/match-sorter-utils";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
  FilterFn,
  ColumnDef,
} from "@tanstack/react-table";

interface MiniTableProps<T> {
  data: T[];
  columns: ColumnDef<T>[];
  onRowClick?: (row: any) => void;
  showHead?: boolean;
}

const fuzzyFilter: FilterFn<any> = (row, columnId, value, addMeta) => {
  // Rank the item
  const itemRank = rankItem(row.getValue(columnId), value);

  // Store the ranking info
  addMeta({ itemRank });

  // Return if the item should be filtered in/out
  return itemRank.passed;
};


export const MiniTable = <T,>({
  data,
  columns,
  onRowClick,
  showHead = true,
}: MiniTableProps<T>) => {
  const [rowSelection, setRowSelection] = React.useState({});
  const [globalFilter, setGlobalFilter] = React.useState("");

  const table = useReactTable({
    data,
    columns,
    onGlobalFilterChange: setGlobalFilter,
    filterFns: {
      fuzzy: fuzzyFilter,
    },
    globalFilterFn: fuzzyFilter,
    getCoreRowModel: getCoreRowModel(),
    onRowSelectionChange: setRowSelection,
    getPaginationRowModel: getPaginationRowModel(),
    state: {
      globalFilter,
      rowSelection,
    },
  });

  return (
    <>
      <HStack w="auto" gap={4} justifyContent="flex-start" width="100%">
      {data.length == 0 ? (
        <VStack minH="70vh" w="100%" justifyContent="flex-start" spacing={60}>
          <TableContainer maxWidth="100%" w="100%">
            <Table variant="filled" w="100%">
              <Thead>
                {table.getHeaderGroups().map((headerGroup) => (
                  <Tr
                    borderBottom="0"
                    _hover={{ bg: "transparent", cursor: "default" }}
                    key={headerGroup.id}
                  >
                    {headerGroup.headers.map((header) => (
                      <Th key={header.id}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </Th>
                    ))}
                  </Tr>
                ))}
              </Thead>
            </Table>
          </TableContainer>
          <VStack gap={4} px={8} py={6} bgColor="gray.50" rounded="lg">
            {/* <EmptyDocumentIcon boxSize={8} color='iconGray.300' /> */}
            <Text textStyle="h3">No results to show</Text>
          </VStack>
        </VStack>
      ) : (
      <TableContainer maxWidth="100%" w="100%">
          <Table variant="filled" w="100%">
            {showHead && (
              <Thead>
                {table.getHeaderGroups().map((headerGroup) => (
                  <Tr 
                    borderBottom="0"
                    _hover={{bg: "transparent", cursor: "default"}} 
                    key={headerGroup.id}
                  >
                    {headerGroup.headers.map((header) => (
                      <Th key={header.id}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </Th>
                    ))}
                  </Tr>
                ))}
              </Thead>
            )}
            <Tbody>
              {table.getRowModel().rows.map((row) => (
                <Tr
                  key={row.id}
                  onClickCapture={
                    onRowClick
                      ? (event) => {
                          const target = event.target as HTMLTableRowElement;
                          if (
                            !(
                              target.nodeName === "SPAN" ||
                              target.nodeName === "INPUT"
                            )
                          )
                            onRowClick(row.id);
                        }
                      : undefined
                  }
                >
                  {row.getVisibleCells().map((cell) => (
                    <Td key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </Td>
                  ))}
                </Tr>
              ))}
            </Tbody>
            <Tfoot>
              {table.getFooterGroups().map((footerGroup) => (
                <tr key={footerGroup.id}>
                  {footerGroup.headers.map((header) => (
                    <th key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.footer,
                            header.getContext()
                          )}
                    </th>
                  ))}
                </tr>
              ))}
            </Tfoot>
          </Table>
        </TableContainer>
        )}
      </HStack>
    </>
  );
};
