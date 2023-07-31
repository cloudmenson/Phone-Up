import { Tr } from "@chakra-ui/react";
import styled from "styled-components";

export const TableTr = styled(Tr)`
  td,
  th {
    &:not(:first-child) {
      text-align: center;
    }
  }

  td {
    &:hover {
      color: #e53e3e;
    }
  }
`;
