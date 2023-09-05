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

const IpadPrice = () => {
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
          alt="ipad"
          src={Image.Ipad}
          sx={{
            width: "50px",
            height: "50px",
          }}
        />
        <Text>iPad</Text>
      </Box>
      <Table id="services-section" size={{ base: "sm" }}>
        <Thead>
          <Styles.TableTr>
            <Th color="red.500">Послуги</Th>
            <Th color="red.500">iPad 2 / 3 / 4</Th>
            <Th color="red.500">iPad Mini 1 / 2 / 3</Th>
            <Th color="red.500">iPad Air / 2017</Th>
            <Th color="red.500">iPad Air 2</Th>
            <Th color="red.500">iPad Mini 4</Th>
            <Th color="red.500">iPad Pro 9.7 / 12.9</Th>
            <Th color="red.500">iPad Pro 10.5</Th>
          </Styles.TableTr>
        </Thead>
        <Tbody>
          <Styles.TableTr>
            <Td>
              Заміна скла та сенсорної
              <br />
              панелі
            </Td>
            <Td>700</Td>
            <Td>900</Td>
            <Td>900</Td>
            <Td>4500</Td>
            <Td>3700</Td>
            <Td>4500 / 5500</Td>
            <Td>5500</Td>
          </Styles.TableTr>
          <Styles.TableTr>
            <Td>Заміна дисплея</Td>
            <Td>1200</Td>
            <Td>1200</Td>
            <Td>1800</Td>
            <Td>4500</Td>
            <Td>3700</Td>
            <Td>4500 / 5500</Td>
            <Td>5500</Td>
          </Styles.TableTr>
          <Styles.TableTr>
            <Td>Заміна батареї</Td>
            <Td>800</Td>
            <Td>1000</Td>
            <Td>1000</Td>
            <Td>1000</Td>
            <Td>1000</Td>
            <Td>1000 / 1500</Td>
            <Td>1500</Td>
          </Styles.TableTr>
          <Styles.TableTr>
            <Td>
              Заміна кнопки включення/
              <br />
              виключення
            </Td>
            <Td>400</Td>
            <Td>500</Td>
            <Td>500</Td>
            <Td>800</Td>
            <Td>800</Td>
            <Td>1000</Td>
            <Td>1000</Td>
          </Styles.TableTr>
          <Styles.TableTr>
            <Td>
              Заміна кнопок
              <br />
              регулювання гучності
            </Td>
            <Td>400</Td>
            <Td>500</Td>
            <Td>500</Td>
            <Td>800</Td>
            <Td>800</Td>
            <Td>1000</Td>
            <Td>1000</Td>
          </Styles.TableTr>
          <Styles.TableTr>
            <Td>Заміна кнопки Home</Td>
            <Td>400</Td>
            <Td>500</Td>
            <Td>500</Td>
            <Td>800</Td>
            <Td>800</Td>
            <Td>800</Td>
            <Td>-</Td>
          </Styles.TableTr>
          <Styles.TableTr>
            <Td>
              Заміна шлейфу гнізда
              <br />
              синхронізації
            </Td>
            <Td>400</Td>
            <Td>700</Td>
            <Td>700</Td>
            <Td>800</Td>
            <Td>800</Td>
            <Td>1000</Td>
            <Td>1000</Td>
          </Styles.TableTr>
          <Styles.TableTr>
            <Td>Заміна динаміка</Td>
            <Td>500</Td>
            <Td>600</Td>
            <Td>600</Td>
            <Td>800</Td>
            <Td>600</Td>
            <Td>1000</Td>
            <Td>1000</Td>
          </Styles.TableTr>
          <Styles.TableTr>
            <Td>Заміна основної камери</Td>
            <Td>400</Td>
            <Td>700</Td>
            <Td>700</Td>
            <Td>800</Td>
            <Td>800</Td>
            <Td>1400</Td>
            <Td>1500</Td>
          </Styles.TableTr>
          <Styles.TableTr>
            <Td>Заміна фронтальної камери</Td>
            <Td>400</Td>
            <Td>700</Td>
            <Td>700</Td>
            <Td>800</Td>
            <Td>800</Td>
            <Td>1400</Td>
            <Td>1000</Td>
          </Styles.TableTr>
          <Styles.TableTr>
            <Td>Заміна WIFI антени</Td>
            <Td>300</Td>
            <Td>300</Td>
            <Td>400</Td>
            <Td>500</Td>
            <Td>500</Td>
            <Td>600</Td>
            <Td>600</Td>
          </Styles.TableTr>
          <Styles.TableTr>
            <Td>
              Заміна елементів ланцюгів
              <br />
              живлення
            </Td>
            <Td>від 400</Td>
            <Td>від 400</Td>
            <Td>від 600</Td>
            <Td>від 700</Td>
            <Td>від 800</Td>
            <Td>від 800</Td>
            <Td>від 800</Td>
          </Styles.TableTr>
          <Styles.TableTr>
            <Td>
              Заміна елементів ланцюгів
              <br />
              управління дисплеєм
              <br />
              та тачскрином
            </Td>
            <Td>від 500</Td>
            <Td>від 500</Td>
            <Td>від 700</Td>
            <Td>від 800</Td>
            <Td>від 900</Td>
            <Td>від 900</Td>
            <Td>від 900</Td>
          </Styles.TableTr>
          <Styles.TableTr>
            <Td>
              Заміна елементів ланцюга
              <br />
              Wi-Fi
            </Td>
            <Td>від 600</Td>
            <Td>від 600</Td>
            <Td>від 700</Td>
            <Td>від 800</Td>
            <Td>від 900</Td>
            <Td>від 900</Td>
            <Td>від 900</Td>
          </Styles.TableTr>
          <Styles.TableTr>
            <Td>Чищення від води</Td>
            <Td>350</Td>
            <Td>450</Td>
            <Td>550</Td>
            <Td>550</Td>
            <Td>700</Td>
            <Td>800</Td>
            <Td>800</Td>
          </Styles.TableTr>
          <Styles.TableTr>
            <Td>SIM-утримувач</Td>
            <Td>50</Td>
            <Td>50</Td>
            <Td>-</Td>
            <Td>50</Td>
            <Td>50</Td>
            <Td>50</Td>
            <Td>50</Td>
          </Styles.TableTr>
        </Tbody>
        <Tfoot>
          <Styles.TableTr>
            <Th color="red.500">Послуги</Th>
            <Th color="red.500">iPad 2 / 3 / 4</Th>
            <Th color="red.500">iPad Mini 1 / 2 / 3</Th>
            <Th color="red.500">iPad Air / 2017</Th>
            <Th color="red.500">iPad Air 2</Th>
            <Th color="red.500">iPad Mini 4</Th>
            <Th color="red.500">iPad Pro 9.7 / 12.9</Th>
            <Th color="red.500">iPad Pro 10.5</Th>
          </Styles.TableTr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
};

export { IpadPrice };
