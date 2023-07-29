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

import { Ipad } from "assets";

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
          src={Ipad}
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
            <Styles.TableTh color="red.500">Послуги</Styles.TableTh>
            <Styles.TableTh color="red.500">iPad 2 / 3 / 4</Styles.TableTh>
            <Styles.TableTh color="red.500">iPad Mini 1 / 2 / 3</Styles.TableTh>
            <Styles.TableTh color="red.500">iPad Air / 2017</Styles.TableTh>
            <Styles.TableTh color="red.500">iPad Air 2</Styles.TableTh>
            <Styles.TableTh color="red.500">iPad Mini 4</Styles.TableTh>
            <Styles.TableTh color="red.500">iPad Pro 9.7 / 12.9</Styles.TableTh>
            <Styles.TableTh color="red.500">iPad Pro 10.5</Styles.TableTh>
          </Styles.TableTr>
        </Thead>
        <Tbody>
          <Styles.TableTr>
            <Styles.TableTd>
              Заміна скла та сенсорної
              <br />
              панелі
            </Styles.TableTd>
            <Styles.TableTd>700</Styles.TableTd>
            <Styles.TableTd>900</Styles.TableTd>
            <Styles.TableTd>900</Styles.TableTd>
            <Styles.TableTd>4500</Styles.TableTd>
            <Styles.TableTd>3700</Styles.TableTd>
            <Styles.TableTd>4500 / 5500</Styles.TableTd>
            <Styles.TableTd>5500</Styles.TableTd>
          </Styles.TableTr>
          <Styles.TableTr>
            <Styles.TableTd>Заміна дисплея</Styles.TableTd>
            <Styles.TableTd>1200</Styles.TableTd>
            <Styles.TableTd>1200</Styles.TableTd>
            <Styles.TableTd>1800</Styles.TableTd>
            <Styles.TableTd>4500</Styles.TableTd>
            <Styles.TableTd>3700</Styles.TableTd>
            <Styles.TableTd>4500 / 5500</Styles.TableTd>
            <Styles.TableTd>5500</Styles.TableTd>
          </Styles.TableTr>
          <Styles.TableTr>
            <Styles.TableTd>Заміна батареї</Styles.TableTd>
            <Styles.TableTd>800</Styles.TableTd>
            <Styles.TableTd>1000</Styles.TableTd>
            <Styles.TableTd>1000</Styles.TableTd>
            <Styles.TableTd>1000</Styles.TableTd>
            <Styles.TableTd>1000</Styles.TableTd>
            <Styles.TableTd>1000 / 1500</Styles.TableTd>
            <Styles.TableTd>1500</Styles.TableTd>
          </Styles.TableTr>
          <Styles.TableTr>
            <Styles.TableTd>
              Заміна кнопки включення/
              <br />
              виключення
            </Styles.TableTd>
            <Styles.TableTd>400</Styles.TableTd>
            <Styles.TableTd>500</Styles.TableTd>
            <Styles.TableTd>500</Styles.TableTd>
            <Styles.TableTd>800</Styles.TableTd>
            <Styles.TableTd>800</Styles.TableTd>
            <Styles.TableTd>1000</Styles.TableTd>
            <Styles.TableTd>1000</Styles.TableTd>
          </Styles.TableTr>
          <Styles.TableTr>
            <Styles.TableTd>
              Заміна кнопок
              <br />
              регулювання гучності
            </Styles.TableTd>
            <Styles.TableTd>400</Styles.TableTd>
            <Styles.TableTd>500</Styles.TableTd>
            <Styles.TableTd>500</Styles.TableTd>
            <Styles.TableTd>800</Styles.TableTd>
            <Styles.TableTd>800</Styles.TableTd>
            <Styles.TableTd>1000</Styles.TableTd>
            <Styles.TableTd>1000</Styles.TableTd>
          </Styles.TableTr>
          <Styles.TableTr>
            <Styles.TableTd>Заміна кнопки Home</Styles.TableTd>
            <Styles.TableTd>400</Styles.TableTd>
            <Styles.TableTd>500</Styles.TableTd>
            <Styles.TableTd>500</Styles.TableTd>
            <Styles.TableTd>800</Styles.TableTd>
            <Styles.TableTd>800</Styles.TableTd>
            <Styles.TableTd>800</Styles.TableTd>
            <Styles.TableTd>-</Styles.TableTd>
          </Styles.TableTr>
          <Styles.TableTr>
            <Styles.TableTd>
              Заміна шлейфу гнізда
              <br />
              синхронізації
            </Styles.TableTd>
            <Styles.TableTd>400</Styles.TableTd>
            <Styles.TableTd>700</Styles.TableTd>
            <Styles.TableTd>700</Styles.TableTd>
            <Styles.TableTd>800</Styles.TableTd>
            <Styles.TableTd>800</Styles.TableTd>
            <Styles.TableTd>1000</Styles.TableTd>
            <Styles.TableTd>1000</Styles.TableTd>
          </Styles.TableTr>
          <Styles.TableTr>
            <Styles.TableTd>Заміна динаміка</Styles.TableTd>
            <Styles.TableTd>500</Styles.TableTd>
            <Styles.TableTd>600</Styles.TableTd>
            <Styles.TableTd>600</Styles.TableTd>
            <Styles.TableTd>800</Styles.TableTd>
            <Styles.TableTd>600</Styles.TableTd>
            <Styles.TableTd>1000</Styles.TableTd>
            <Styles.TableTd>1000</Styles.TableTd>
          </Styles.TableTr>
          <Styles.TableTr>
            <Styles.TableTd>Заміна основної камери</Styles.TableTd>
            <Styles.TableTd>400</Styles.TableTd>
            <Styles.TableTd>700</Styles.TableTd>
            <Styles.TableTd>700</Styles.TableTd>
            <Styles.TableTd>800</Styles.TableTd>
            <Styles.TableTd>800</Styles.TableTd>
            <Styles.TableTd>1400</Styles.TableTd>
            <Styles.TableTd>1500</Styles.TableTd>
          </Styles.TableTr>
          <Styles.TableTr>
            <Styles.TableTd>Заміна фронтальної камери</Styles.TableTd>
            <Styles.TableTd>400</Styles.TableTd>
            <Styles.TableTd>700</Styles.TableTd>
            <Styles.TableTd>700</Styles.TableTd>
            <Styles.TableTd>800</Styles.TableTd>
            <Styles.TableTd>800</Styles.TableTd>
            <Styles.TableTd>1400</Styles.TableTd>
            <Styles.TableTd>1000</Styles.TableTd>
          </Styles.TableTr>
          <Styles.TableTr>
            <Styles.TableTd>Заміна WIFI антени</Styles.TableTd>
            <Styles.TableTd>300</Styles.TableTd>
            <Styles.TableTd>300</Styles.TableTd>
            <Styles.TableTd>400</Styles.TableTd>
            <Styles.TableTd>500</Styles.TableTd>
            <Styles.TableTd>500</Styles.TableTd>
            <Styles.TableTd>600</Styles.TableTd>
            <Styles.TableTd>600</Styles.TableTd>
          </Styles.TableTr>
          <Styles.TableTr>
            <Styles.TableTd>
              Заміна елементів ланцюгів
              <br />
              живлення
            </Styles.TableTd>
            <Styles.TableTd>від 400</Styles.TableTd>
            <Styles.TableTd>від 400</Styles.TableTd>
            <Styles.TableTd>від 600</Styles.TableTd>
            <Styles.TableTd>від 700</Styles.TableTd>
            <Styles.TableTd>від 800</Styles.TableTd>
            <Styles.TableTd>від 800</Styles.TableTd>
            <Styles.TableTd>від 800</Styles.TableTd>
          </Styles.TableTr>
          <Styles.TableTr>
            <Styles.TableTd>
              Заміна елементів ланцюгів
              <br />
              управління дисплеєм
              <br />
              та тачскрином
            </Styles.TableTd>
            <Styles.TableTd>від 500</Styles.TableTd>
            <Styles.TableTd>від 500</Styles.TableTd>
            <Styles.TableTd>від 700</Styles.TableTd>
            <Styles.TableTd>від 800</Styles.TableTd>
            <Styles.TableTd>від 900</Styles.TableTd>
            <Styles.TableTd>від 900</Styles.TableTd>
            <Styles.TableTd>від 900</Styles.TableTd>
          </Styles.TableTr>
          <Styles.TableTr>
            <Styles.TableTd>
              Заміна елементів ланцюга
              <br />
              Wi-Fi
            </Styles.TableTd>
            <Styles.TableTd>від 600</Styles.TableTd>
            <Styles.TableTd>від 600</Styles.TableTd>
            <Styles.TableTd>від 700</Styles.TableTd>
            <Styles.TableTd>від 800</Styles.TableTd>
            <Styles.TableTd>від 900</Styles.TableTd>
            <Styles.TableTd>від 900</Styles.TableTd>
            <Styles.TableTd>від 900</Styles.TableTd>
          </Styles.TableTr>
          <Styles.TableTr>
            <Styles.TableTd>Чищення від води</Styles.TableTd>
            <Styles.TableTd>350</Styles.TableTd>
            <Styles.TableTd>450</Styles.TableTd>
            <Styles.TableTd>550</Styles.TableTd>
            <Styles.TableTd>550</Styles.TableTd>
            <Styles.TableTd>700</Styles.TableTd>
            <Styles.TableTd>800</Styles.TableTd>
            <Styles.TableTd>800</Styles.TableTd>
          </Styles.TableTr>
          <Styles.TableTr>
            <Styles.TableTd>SIM-утримувач</Styles.TableTd>
            <Styles.TableTd>50</Styles.TableTd>
            <Styles.TableTd>50</Styles.TableTd>
            <Styles.TableTd>-</Styles.TableTd>
            <Styles.TableTd>50</Styles.TableTd>
            <Styles.TableTd>50</Styles.TableTd>
            <Styles.TableTd>50</Styles.TableTd>
            <Styles.TableTd>50</Styles.TableTd>
          </Styles.TableTr>
        </Tbody>
        <Tfoot>
          <Styles.TableTr>
            <Styles.TableTh color="red.500">Послуги</Styles.TableTh>
            <Styles.TableTh color="red.500">iPad 2 / 3 / 4</Styles.TableTh>
            <Styles.TableTh color="red.500">iPad Mini 1 / 2 / 3</Styles.TableTh>
            <Styles.TableTh color="red.500">iPad Air / 2017</Styles.TableTh>
            <Styles.TableTh color="red.500">iPad Air 2</Styles.TableTh>
            <Styles.TableTh color="red.500">iPad Mini 4</Styles.TableTh>
            <Styles.TableTh color="red.500">iPad Pro 9.7 / 12.9</Styles.TableTh>
            <Styles.TableTh color="red.500">iPad Pro 10.5</Styles.TableTh>
          </Styles.TableTr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
};

export { IpadPrice };
