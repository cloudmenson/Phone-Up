import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer
} from "@chakra-ui/react";
import {Box, Img, Text} from "@chakra-ui/react";
import MacBookImage from "../../../assets/img/macbook.svg"
import "./Table.css";

export const MacBook = () => {
  return (
    <TableContainer sx={
      {marginTop: "100px"}
    }>
      <Box sx={
        {
          margin: "15px 0",
          width: "100px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }
      }>
        <Img sx={
            {
              width: "50px",
              height: "50px"
            }
          }
          src={MacBookImage}
          alt="MacBook"/>
        <Text>MacBook</Text>
      </Box>
      <Table id="services-section"
        size={
          {base: "sm"}
      }>
        <Thead>
          <Tr className="App__main-table-td">
            <Th color="red.500">Послуги</Th>
            <Th color="red.500">MacBook Air 11 / 13</Th>
            <Th color="red.500">MacBook Pro 13</Th>
            <Th color="red.500">MacBook Pro 15</Th>
            <Th color="red.500">Macbook 12</Th>
            <Th color="red.500">iMac</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr className="App__main-table-tr">
            <Td>Чищення від води</Td>
            <Td>від 500</Td>
            <Td>від 500</Td>
            <Td>від 500</Td>
            <Td>від 500</Td>
            <Td>від 500</Td>
          </Tr>
          <Tr className="App__main-table-tr">
            <Td>
              Заміна батареї
            </Td>
            <Td>2700
            </Td>
            <Td>від 2000</Td>
            <Td>від 2000</Td>
            <Td>від 3000</Td>
            <Td>-</Td>
          </Tr>
          <Tr className="App__main-table-tr">
            <Td>Заміна дисплея</Td>
            <Td>від 8000</Td>
            <Td>від 8000</Td>
            <Td>від 8000</Td>
            <Td>від 8000</Td>
            <Td>від 8000</Td>
          </Tr>
          <Tr className="App__main-table-tr">
            <Td>Замена клавиатуры</Td>
            <Td>от 1000</Td>
            <Td>от 1000</Td>
            <Td>от 1000</Td>
            <Td>от 1000</Td>
            <Td>-</Td>
          </Tr>
          <Tr className="App__main-table-tr">
            <Td>Заміна тачпада</Td>
            <Td>від 2000</Td>
            <Td>від 2000</Td>
            <Td>від 2000</Td>
            <Td>від 2000</Td>
            <Td>-</Td>
          </Tr>
          <Tr className="App__main-table-tr">
            <Td>Заміна дроту блоку живлення</Td>
            <Td>600</Td>
            <Td>600</Td>
            <Td>600</Td>
            <Td>-</Td>
            <Td>-</Td>
          </Tr>
          <Tr className="App__main-table-tr">
            <Td>Заміна SSD/HDD</Td>
            <Td>от 2000</Td>
            <Td>от 2000</Td>
            <Td>от 2000</Td>
            <Td>от 2000</Td>
            <Td>от 2000</Td>
          </Tr>
          <Tr className="App__main-table-tr">
            <Td>
              Заміна динаміка
            </Td>
            <Td>від 700</Td>
            <Td>від 700</Td>
            <Td>від 700</Td>
            <Td>від 700</Td>
            <Td>від 700</Td>
          </Tr>
          <Tr className="App__main-table-tr">
            <Td>Заміна кулера</Td>
            <Td>від 700</Td>
            <Td>від 700</Td>
            <Td>від 700</Td>
            <Td>від 700</Td>
            <Td>від 700</Td>
          </Tr>
          <Tr className="App__main-table-tr">
            <Td>Заміна термопасти</Td>
            <Td>300</Td>
            <Td>300</Td>
            <Td>300</Td>
            <Td>300</Td>
            <Td>300</Td>
          </Tr>
          <Tr className="App__main-table-tr">
            <Td>
              Чищення від пилу та
              <br/>
              профілактика охолодження
            </Td>
            <Td>300</Td>
            <Td>300</Td>
            <Td>300</Td>
            <Td>300</Td>
            <Td>300</Td>
          </Tr>
          <Tr className="App__main-table-tr">
            <Td>Заміна роз'єму живлення</Td>
            <Td>від 1000</Td>
            <Td>від 1000</Td>
            <Td>від 1000</Td>
            <Td>від 1000</Td>
            <Td>від 1000</Td>
          </Tr>
          <Tr className="App__main-table-tr">
            <Td>Заміна антени Wi-Fi</Td>
            <Td>від 700</Td>
            <Td>від 700</Td>
            <Td>від 700</Td>
            <Td>від 700</Td>
            <Td>від 700</Td>
          </Tr>
        </Tbody>
        <Tfoot>
          <Tr className="App__main-table-tr">
            <Th color="red.500">Послуги</Th>
            <Th color="red.500">MacBook Air 11 / 13</Th>
            <Th color="red.500">MacBook Pro 13</Th>
            <Th color="red.500">MacBook Pro 15</Th>
            <Th color="red.500">Macbook 12</Th>
            <Th color="red.500">iMac</Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
};

export default MacBook;
