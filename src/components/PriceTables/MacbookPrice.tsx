import {
  Box,
  Img,
  Text,
  Table,
  Thead,
  Tbody,
  Tfoot,
  TableContainer,
} from "@chakra-ui/react";

import { Macbook } from "assets";

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
          src={Macbook}
          alt="MacBook"
        />
        <Text>MacBook</Text>
      </Box>
      <Table id="services-section" size={{ base: "sm" }}>
        <Thead>
          <Styles.TableTr>
            <Styles.TableTh color="red.500">Послуги</Styles.TableTh>
            <Styles.TableTh color="red.500">MacBook Air 11 / 13</Styles.TableTh>
            <Styles.TableTh color="red.500">MacBook Pro 13</Styles.TableTh>
            <Styles.TableTh color="red.500">MacBook Pro 15</Styles.TableTh>
            <Styles.TableTh color="red.500">Macbook 12</Styles.TableTh>
            <Styles.TableTh color="red.500">iMac</Styles.TableTh>
          </Styles.TableTr>
        </Thead>
        <Tbody>
          <Styles.TableTr>
            <Styles.TableTd>Чищення від води</Styles.TableTd>
            <Styles.TableTd>від 500</Styles.TableTd>
            <Styles.TableTd>від 500</Styles.TableTd>
            <Styles.TableTd>від 500</Styles.TableTd>
            <Styles.TableTd>від 500</Styles.TableTd>
            <Styles.TableTd>від 500</Styles.TableTd>
          </Styles.TableTr>
          <Styles.TableTr>
            <Styles.TableTd>Заміна батареї</Styles.TableTd>
            <Styles.TableTd>2700</Styles.TableTd>
            <Styles.TableTd>від 2000</Styles.TableTd>
            <Styles.TableTd>від 2000</Styles.TableTd>
            <Styles.TableTd>від 3000</Styles.TableTd>
            <Styles.TableTd>-</Styles.TableTd>
          </Styles.TableTr>
          <Styles.TableTr>
            <Styles.TableTd>Заміна дисплея</Styles.TableTd>
            <Styles.TableTd>від 8000</Styles.TableTd>
            <Styles.TableTd>від 8000</Styles.TableTd>
            <Styles.TableTd>від 8000</Styles.TableTd>
            <Styles.TableTd>від 8000</Styles.TableTd>
            <Styles.TableTd>від 8000</Styles.TableTd>
          </Styles.TableTr>
          <Styles.TableTr>
            <Styles.TableTd>Замена клавиатуры</Styles.TableTd>
            <Styles.TableTd>от 1000</Styles.TableTd>
            <Styles.TableTd>от 1000</Styles.TableTd>
            <Styles.TableTd>от 1000</Styles.TableTd>
            <Styles.TableTd>от 1000</Styles.TableTd>
            <Styles.TableTd>-</Styles.TableTd>
          </Styles.TableTr>
          <Styles.TableTr>
            <Styles.TableTd>Заміна тачпада</Styles.TableTd>
            <Styles.TableTd>від 2000</Styles.TableTd>
            <Styles.TableTd>від 2000</Styles.TableTd>
            <Styles.TableTd>від 2000</Styles.TableTd>
            <Styles.TableTd>від 2000</Styles.TableTd>
            <Styles.TableTd>-</Styles.TableTd>
          </Styles.TableTr>
          <Styles.TableTr>
            <Styles.TableTd>Заміна дроту блоку живлення</Styles.TableTd>
            <Styles.TableTd>600</Styles.TableTd>
            <Styles.TableTd>600</Styles.TableTd>
            <Styles.TableTd>600</Styles.TableTd>
            <Styles.TableTd>-</Styles.TableTd>
            <Styles.TableTd>-</Styles.TableTd>
          </Styles.TableTr>
          <Styles.TableTr>
            <Styles.TableTd>Заміна SSD/HDD</Styles.TableTd>
            <Styles.TableTd>от 2000</Styles.TableTd>
            <Styles.TableTd>от 2000</Styles.TableTd>
            <Styles.TableTd>от 2000</Styles.TableTd>
            <Styles.TableTd>от 2000</Styles.TableTd>
            <Styles.TableTd>от 2000</Styles.TableTd>
          </Styles.TableTr>
          <Styles.TableTr>
            <Styles.TableTd>Заміна динаміка</Styles.TableTd>
            <Styles.TableTd>від 700</Styles.TableTd>
            <Styles.TableTd>від 700</Styles.TableTd>
            <Styles.TableTd>від 700</Styles.TableTd>
            <Styles.TableTd>від 700</Styles.TableTd>
            <Styles.TableTd>від 700</Styles.TableTd>
          </Styles.TableTr>
          <Styles.TableTr>
            <Styles.TableTd>Заміна кулера</Styles.TableTd>
            <Styles.TableTd>від 700</Styles.TableTd>
            <Styles.TableTd>від 700</Styles.TableTd>
            <Styles.TableTd>від 700</Styles.TableTd>
            <Styles.TableTd>від 700</Styles.TableTd>
            <Styles.TableTd>від 700</Styles.TableTd>
          </Styles.TableTr>
          <Styles.TableTr>
            <Styles.TableTd>Заміна термопасти</Styles.TableTd>
            <Styles.TableTd>300</Styles.TableTd>
            <Styles.TableTd>300</Styles.TableTd>
            <Styles.TableTd>300</Styles.TableTd>
            <Styles.TableTd>300</Styles.TableTd>
            <Styles.TableTd>300</Styles.TableTd>
          </Styles.TableTr>
          <Styles.TableTr>
            <Styles.TableTd>
              Чищення від пилу та
              <br />
              профілактика охолодження
            </Styles.TableTd>
            <Styles.TableTd>300</Styles.TableTd>
            <Styles.TableTd>300</Styles.TableTd>
            <Styles.TableTd>300</Styles.TableTd>
            <Styles.TableTd>300</Styles.TableTd>
            <Styles.TableTd>300</Styles.TableTd>
          </Styles.TableTr>
          <Styles.TableTr>
            <Styles.TableTd>Заміна роз'єму живлення</Styles.TableTd>
            <Styles.TableTd>від 1000</Styles.TableTd>
            <Styles.TableTd>від 1000</Styles.TableTd>
            <Styles.TableTd>від 1000</Styles.TableTd>
            <Styles.TableTd>від 1000</Styles.TableTd>
            <Styles.TableTd>від 1000</Styles.TableTd>
          </Styles.TableTr>
          <Styles.TableTr>
            <Styles.TableTd>Заміна антени Wi-Fi</Styles.TableTd>
            <Styles.TableTd>від 700</Styles.TableTd>
            <Styles.TableTd>від 700</Styles.TableTd>
            <Styles.TableTd>від 700</Styles.TableTd>
            <Styles.TableTd>від 700</Styles.TableTd>
            <Styles.TableTd>від 700</Styles.TableTd>
          </Styles.TableTr>
        </Tbody>
        <Tfoot>
          <Styles.TableTr>
            <Styles.TableTh color="red.500">Послуги</Styles.TableTh>
            <Styles.TableTh color="red.500">MacBook Air 11 / 13</Styles.TableTh>
            <Styles.TableTh color="red.500">MacBook Pro 13</Styles.TableTh>
            <Styles.TableTh color="red.500">MacBook Pro 15</Styles.TableTh>
            <Styles.TableTh color="red.500">Macbook 12</Styles.TableTh>
            <Styles.TableTh color="red.500">iMac</Styles.TableTh>
          </Styles.TableTr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
};

export { MacbookPrice };
