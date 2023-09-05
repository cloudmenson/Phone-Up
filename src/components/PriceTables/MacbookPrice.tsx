import {
  Td,
  Th,
  Box,
  Img,
  Text,
  Table,
  Thead,
  Tbody,
  Tfoot,
  TableContainer,
} from "@chakra-ui/react";

import * as Image from "assets";

import * as Styles from "./styles";

const MacbookPrice = () => {
  return (
    <TableContainer sx={{ marginTop: "100px" }}>
      <Box
        sx={{
          width: "100px",
          display: "flex",
          margin: "15px 0",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Img
          sx={{
            width: "50px",
            height: "50px",
          }}
          src={Image.Macbook}
          alt="MacBook"
        />
        <Text>MacBook</Text>
      </Box>
      <Table id="services-section" size={{ base: "sm" }}>
        <Thead>
          <Styles.TableTr>
            <Th color="red.500">Послуги</Th>
            <Th color="red.500">MacBook Air 11 / 13</Th>
            <Th color="red.500">MacBook Pro 13</Th>
            <Th color="red.500">MacBook Pro 15</Th>
            <Th color="red.500">Macbook 12</Th>
            <Th color="red.500">iMac</Th>
          </Styles.TableTr>
        </Thead>
        <Tbody>
          <Styles.TableTr>
            <Td>Чищення від води</Td>
            <Td>від 500</Td>
            <Td>від 500</Td>
            <Td>від 500</Td>
            <Td>від 500</Td>
            <Td>від 500</Td>
          </Styles.TableTr>
          <Styles.TableTr>
            <Td>Заміна батареї</Td>
            <Td>2700</Td>
            <Td>від 2000</Td>
            <Td>від 2000</Td>
            <Td>від 3000</Td>
            <Td>-</Td>
          </Styles.TableTr>
          <Styles.TableTr>
            <Td>Заміна дисплея</Td>
            <Td>від 8000</Td>
            <Td>від 8000</Td>
            <Td>від 8000</Td>
            <Td>від 8000</Td>
            <Td>від 8000</Td>
          </Styles.TableTr>
          <Styles.TableTr>
            <Td>Замена клавиатуры</Td>
            <Td>от 1000</Td>
            <Td>от 1000</Td>
            <Td>от 1000</Td>
            <Td>от 1000</Td>
            <Td>-</Td>
          </Styles.TableTr>
          <Styles.TableTr>
            <Td>Заміна тачпада</Td>
            <Td>від 2000</Td>
            <Td>від 2000</Td>
            <Td>від 2000</Td>
            <Td>від 2000</Td>
            <Td>-</Td>
          </Styles.TableTr>
          <Styles.TableTr>
            <Td>Заміна дроту блоку живлення</Td>
            <Td>600</Td>
            <Td>600</Td>
            <Td>600</Td>
            <Td>-</Td>
            <Td>-</Td>
          </Styles.TableTr>
          <Styles.TableTr>
            <Td>Заміна SSD/HDD</Td>
            <Td>от 2000</Td>
            <Td>от 2000</Td>
            <Td>от 2000</Td>
            <Td>от 2000</Td>
            <Td>от 2000</Td>
          </Styles.TableTr>
          <Styles.TableTr>
            <Td>Заміна динаміка</Td>
            <Td>від 700</Td>
            <Td>від 700</Td>
            <Td>від 700</Td>
            <Td>від 700</Td>
            <Td>від 700</Td>
          </Styles.TableTr>
          <Styles.TableTr>
            <Td>Заміна кулера</Td>
            <Td>від 700</Td>
            <Td>від 700</Td>
            <Td>від 700</Td>
            <Td>від 700</Td>
            <Td>від 700</Td>
          </Styles.TableTr>
          <Styles.TableTr>
            <Td>Заміна термопасти</Td>
            <Td>300</Td>
            <Td>300</Td>
            <Td>300</Td>
            <Td>300</Td>
            <Td>300</Td>
          </Styles.TableTr>
          <Styles.TableTr>
            <Td>
              Чищення від пилу та
              <br />
              профілактика охолодження
            </Td>
            <Td>300</Td>
            <Td>300</Td>
            <Td>300</Td>
            <Td>300</Td>
            <Td>300</Td>
          </Styles.TableTr>
          <Styles.TableTr>
            <Td>Заміна роз'єму живлення</Td>
            <Td>від 1000</Td>
            <Td>від 1000</Td>
            <Td>від 1000</Td>
            <Td>від 1000</Td>
            <Td>від 1000</Td>
          </Styles.TableTr>
          <Styles.TableTr>
            <Td>Заміна антени Wi-Fi</Td>
            <Td>від 700</Td>
            <Td>від 700</Td>
            <Td>від 700</Td>
            <Td>від 700</Td>
            <Td>від 700</Td>
          </Styles.TableTr>
        </Tbody>
        <Tfoot>
          <Styles.TableTr>
            <Th color="red.500">Послуги</Th>
            <Th color="red.500">MacBook Air 11 / 13</Th>
            <Th color="red.500">MacBook Pro 13</Th>
            <Th color="red.500">MacBook Pro 15</Th>
            <Th color="red.500">Macbook 12</Th>
            <Th color="red.500">iMac</Th>
          </Styles.TableTr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
};

export { MacbookPrice };
