import styled from "styled-components";
import { Tr, Th, Td } from "@chakra-ui/react";

export const TableTr = styled(Tr)`
  text-align: center;
`;

export const TableTh = styled(Th)`
  text-align: center;
`;

export const TableTd = styled(Td)`
  &:not(:first-child) {
    text-align: center;
  }

  &:hover {
    color: #e53e3e;
  }
`;

// .App__main-table-tr td:not(:first-child),
// .App__main-table-tr th,
// .App__main-table-td th {
//   text-align: center;
// }

// .App__main-table-tr:hover {
//   color: #e53e3e;
// }
