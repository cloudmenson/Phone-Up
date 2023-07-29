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

import { Iphone } from "assets";

import * as Styles from "./styles";

const IphonePrice = () => {
  return (
    <TableContainer sx={{ marginTop: "150px" }}>
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
          src={Iphone}
          alt="iphone"
          sx={{
            width: "50px",
            height: "50px",
          }}
        />
        <Text>iPhone</Text>
      </Box>
      <Table id="services-section" size={{ base: "sm" }}>
        <Thead>
          <Styles.TableTr>
            <Styles.TableTh color="red.500">Послуги</Styles.TableTh>
            <Styles.TableTh color="red.500">iPhone 4 / 4s</Styles.TableTh>
            <Styles.TableTh color="red.500">iPhone 5 / 5S / SE</Styles.TableTh>
            <Styles.TableTh color="red.500">iPhone 6 / 6+</Styles.TableTh>
            <Styles.TableTh color="red.500">iPhone 6s / 6s+</Styles.TableTh>
            <Styles.TableTh color="red.500">iPhone 7 / 7+</Styles.TableTh>
            <Styles.TableTh color="red.500">iPhone 8 / 8+</Styles.TableTh>
            <Styles.TableTh color="red.500">iPhone X</Styles.TableTh>
            <Styles.TableTh color="red.500">iPhone Xs / Xs Max</Styles.TableTh>
            <Styles.TableTh color="red.500">iPhone Xr</Styles.TableTh>
          </Styles.TableTr>
        </Thead>
        <Tbody>
          <Styles.TableTr>
            <Styles.TableTd>Чищення від води</Styles.TableTd>
            <Styles.TableTd>250</Styles.TableTd>
            <Styles.TableTd>350</Styles.TableTd>
            <Styles.TableTd>450</Styles.TableTd>
            <Styles.TableTd>450</Styles.TableTd>
            <Styles.TableTd>600</Styles.TableTd>
            <Styles.TableTd>700</Styles.TableTd>
            <Styles.TableTd>800</Styles.TableTd>
            <Styles.TableTd>800</Styles.TableTd>
            <Styles.TableTd>800</Styles.TableTd>
          </Styles.TableTr>
          <Styles.TableTr>
            <Styles.TableTd>
              Заміна дисплейного
              <br />
              модуля
            </Styles.TableTd>
            <Styles.TableTd>450</Styles.TableTd>
            <Styles.TableTd>600</Styles.TableTd>
            <Styles.TableTd>700 / 1000</Styles.TableTd>
            <Styles.TableTd>900 / 1450</Styles.TableTd>
            <Styles.TableTd>1250 / 1550</Styles.TableTd>
            <Styles.TableTd>1430 / 1630</Styles.TableTd>
            <Styles.TableTd>7590</Styles.TableTd>
            <Styles.TableTd>7590 / 8800</Styles.TableTd>
            <Styles.TableTd>3000</Styles.TableTd>
          </Styles.TableTr>
          <Styles.TableTr>
            <Styles.TableTd>Заміна батареї</Styles.TableTd>
            <Styles.TableTd>300</Styles.TableTd>
            <Styles.TableTd>380</Styles.TableTd>
            <Styles.TableTd>400 / 450</Styles.TableTd>
            <Styles.TableTd>440 / 530</Styles.TableTd>
            <Styles.TableTd>450 / 600</Styles.TableTd>
            <Styles.TableTd>500 / 700</Styles.TableTd>
            <Styles.TableTd>1000</Styles.TableTd>
            <Styles.TableTd>1000 / 1900</Styles.TableTd>
            <Styles.TableTd>1400</Styles.TableTd>
          </Styles.TableTr>
          <Styles.TableTr>
            <Styles.TableTd>Заміна корпусу</Styles.TableTd>
            <Styles.TableTd>150</Styles.TableTd>
            <Styles.TableTd>500</Styles.TableTd>
            <Styles.TableTd>800</Styles.TableTd>
            <Styles.TableTd>900 / 1050</Styles.TableTd>
            <Styles.TableTd>900 / 1000</Styles.TableTd>
            <Styles.TableTd>1500</Styles.TableTd>
            <Styles.TableTd>2000</Styles.TableTd>
            <Styles.TableTd>2000</Styles.TableTd>
            <Styles.TableTd>2000</Styles.TableTd>
          </Styles.TableTr>
          <Styles.TableTr>
            <Styles.TableTd>Заміна камери</Styles.TableTd>
            <Styles.TableTd>150</Styles.TableTd>
            <Styles.TableTd>250</Styles.TableTd>
            <Styles.TableTd>350 / 440</Styles.TableTd>
            <Styles.TableTd>370 / 700</Styles.TableTd>
            <Styles.TableTd>800 / 2200</Styles.TableTd>
            <Styles.TableTd>1300 / 2200</Styles.TableTd>
            <Styles.TableTd>1600</Styles.TableTd>
            <Styles.TableTd>2500 / 3500</Styles.TableTd>
            <Styles.TableTd>2000</Styles.TableTd>
          </Styles.TableTr>
          <Styles.TableTr>
            <Styles.TableTd>
              Заміна фронтальної
              <br />
              камери
            </Styles.TableTd>
            <Styles.TableTd>150</Styles.TableTd>
            <Styles.TableTd>200</Styles.TableTd>
            <Styles.TableTd>240 / 320</Styles.TableTd>
            <Styles.TableTd>280 / 450</Styles.TableTd>
            <Styles.TableTd>350 / 500</Styles.TableTd>
            <Styles.TableTd>600 / 700</Styles.TableTd>
            <Styles.TableTd>1000</Styles.TableTd>
            <Styles.TableTd>1900 / 2000</Styles.TableTd>
            <Styles.TableTd>2000</Styles.TableTd>
          </Styles.TableTr>
          <Styles.TableTr>
            <Styles.TableTd>
              Заміна шлейфу кнопки
              <br />
              увімкнення/вимкнення
            </Styles.TableTd>
            <Styles.TableTd>200</Styles.TableTd>
            <Styles.TableTd>250</Styles.TableTd>
            <Styles.TableTd>320 / 410</Styles.TableTd>
            <Styles.TableTd>450</Styles.TableTd>
            <Styles.TableTd>500</Styles.TableTd>
            <Styles.TableTd>700</Styles.TableTd>
            <Styles.TableTd>700</Styles.TableTd>
            <Styles.TableTd>700</Styles.TableTd>
            <Styles.TableTd>700</Styles.TableTd>
          </Styles.TableTr>
          <Styles.TableTr>
            <Styles.TableTd>
              Заміна шлейфу
              <br />
              мікрофона + рознімання
              <br />
              синхронізації
            </Styles.TableTd>
            <Styles.TableTd>200</Styles.TableTd>
            <Styles.TableTd>250</Styles.TableTd>
            <Styles.TableTd>300 / 330</Styles.TableTd>
            <Styles.TableTd>320 / 380</Styles.TableTd>
            <Styles.TableTd>500</Styles.TableTd>
            <Styles.TableTd>500</Styles.TableTd>
            <Styles.TableTd>700</Styles.TableTd>
            <Styles.TableTd>750 / 1000</Styles.TableTd>
            <Styles.TableTd>700</Styles.TableTd>
          </Styles.TableTr>
          <Styles.TableTr>
            <Styles.TableTd>
              Заміна шлейфу
              <br />
              кнопки Home
            </Styles.TableTd>
            <Styles.TableTd>200</Styles.TableTd>
            <Styles.TableTd>250</Styles.TableTd>
            <Styles.TableTd>300 / 320</Styles.TableTd>
            <Styles.TableTd>330</Styles.TableTd>
            <Styles.TableTd>-</Styles.TableTd>
            <Styles.TableTd>-</Styles.TableTd>
            <Styles.TableTd>-</Styles.TableTd>
            <Styles.TableTd>-</Styles.TableTd>
            <Styles.TableTd>-</Styles.TableTd>
          </Styles.TableTr>
          <Styles.TableTr>
            <Styles.TableTd>
              Заміна шлейфу
              <br />з датчиком наближення
            </Styles.TableTd>
            <Styles.TableTd>150</Styles.TableTd>
            <Styles.TableTd>200</Styles.TableTd>
            <Styles.TableTd>240 / 320</Styles.TableTd>
            <Styles.TableTd>280 / 450</Styles.TableTd>
            <Styles.TableTd>350 / 500</Styles.TableTd>
            <Styles.TableTd>600 / 700</Styles.TableTd>
            <Styles.TableTd>1000</Styles.TableTd>
            <Styles.TableTd>1900 / 2000</Styles.TableTd>
            <Styles.TableTd>2000</Styles.TableTd>
          </Styles.TableTr>
          <Styles.TableTr>
            <Styles.TableTd>
              Заміна голосового
              <br />
              динаміка
            </Styles.TableTd>
            <Styles.TableTd>150</Styles.TableTd>
            <Styles.TableTd>200</Styles.TableTd>
            <Styles.TableTd>300</Styles.TableTd>
            <Styles.TableTd>300</Styles.TableTd>
            <Styles.TableTd>350</Styles.TableTd>
            <Styles.TableTd>350</Styles.TableTd>
            <Styles.TableTd>400</Styles.TableTd>
            <Styles.TableTd>400 / 500</Styles.TableTd>
            <Styles.TableTd>400</Styles.TableTd>
          </Styles.TableTr>
          <Styles.TableTr>
            <Styles.TableTd>
              Заміна поліфонічного
              <br />
              динаміка
            </Styles.TableTd>
            <Styles.TableTd>150</Styles.TableTd>
            <Styles.TableTd>200</Styles.TableTd>
            <Styles.TableTd>300</Styles.TableTd>
            <Styles.TableTd>350</Styles.TableTd>
            <Styles.TableTd>500</Styles.TableTd>
            <Styles.TableTd>500</Styles.TableTd>
            <Styles.TableTd>600</Styles.TableTd>
            <Styles.TableTd>600 / 700</Styles.TableTd>
            <Styles.TableTd>600</Styles.TableTd>
          </Styles.TableTr>
          <Styles.TableTr>
            <Styles.TableTd>
              Заміна кнопок
              <br />
              регулювання гучності
            </Styles.TableTd>
            <Styles.TableTd>150</Styles.TableTd>
            <Styles.TableTd>200</Styles.TableTd>
            <Styles.TableTd>300</Styles.TableTd>
            <Styles.TableTd>450</Styles.TableTd>
            <Styles.TableTd>600</Styles.TableTd>
            <Styles.TableTd>600</Styles.TableTd>
            <Styles.TableTd>600</Styles.TableTd>
            <Styles.TableTd>600</Styles.TableTd>
            <Styles.TableTd>600</Styles.TableTd>
          </Styles.TableTr>
          <Styles.TableTr>
            <Styles.TableTd>
              Заміна елементів
              <br />
              ланцюгів живлення
            </Styles.TableTd>
            <Styles.TableTd>вiд 300</Styles.TableTd>
            <Styles.TableTd>вiд 300</Styles.TableTd>
            <Styles.TableTd>вiд 500</Styles.TableTd>
            <Styles.TableTd>вiд 600</Styles.TableTd>
            <Styles.TableTd>вiд 700</Styles.TableTd>
            <Styles.TableTd>вiд 800</Styles.TableTd>
            <Styles.TableTd>вiд 800</Styles.TableTd>
            <Styles.TableTd>вiд 800</Styles.TableTd>
            <Styles.TableTd>вiд 800</Styles.TableTd>
          </Styles.TableTr>
          <Styles.TableTr>
            <Styles.TableTd>
              Заміна елементів
              <br />
              ланцюгів управління
              <br />
              дисплеєм та тачскрином
            </Styles.TableTd>
            <Styles.TableTd>вiд 400</Styles.TableTd>
            <Styles.TableTd>вiд 400</Styles.TableTd>
            <Styles.TableTd>вiд 600</Styles.TableTd>
            <Styles.TableTd>вiд 700</Styles.TableTd>
            <Styles.TableTd>вiд 800</Styles.TableTd>
            <Styles.TableTd>вiд 800</Styles.TableTd>
            <Styles.TableTd>вiд 800</Styles.TableTd>
            <Styles.TableTd>вiд 800</Styles.TableTd>
            <Styles.TableTd>вiд 800</Styles.TableTd>
          </Styles.TableTr>
          <Styles.TableTr>
            <Styles.TableTd>
              Заміна елементів
              <br />
              ланцюга WIFI
            </Styles.TableTd>
            <Styles.TableTd>от 500</Styles.TableTd>
            <Styles.TableTd>от 500</Styles.TableTd>
            <Styles.TableTd>от 600</Styles.TableTd>
            <Styles.TableTd>от 700</Styles.TableTd>
            <Styles.TableTd>от 800</Styles.TableTd>
            <Styles.TableTd>от 800</Styles.TableTd>
            <Styles.TableTd>от 800</Styles.TableTd>
            <Styles.TableTd>от 800</Styles.TableTd>
            <Styles.TableTd>от 800</Styles.TableTd>
          </Styles.TableTr>
          <Styles.TableTr>
            <Styles.TableTd>Чищення від пилу</Styles.TableTd>
            <Styles.TableTd>100</Styles.TableTd>
            <Styles.TableTd>150</Styles.TableTd>
            <Styles.TableTd>150</Styles.TableTd>
            <Styles.TableTd>300</Styles.TableTd>
            <Styles.TableTd>300</Styles.TableTd>
            <Styles.TableTd>400</Styles.TableTd>
            <Styles.TableTd>400</Styles.TableTd>
            <Styles.TableTd>400</Styles.TableTd>
            <Styles.TableTd>400</Styles.TableTd>
          </Styles.TableTr>
          <Styles.TableTr>
            <Styles.TableTd>Рихтування корпусу</Styles.TableTd>
            <Styles.TableTd>100</Styles.TableTd>
            <Styles.TableTd>100</Styles.TableTd>
            <Styles.TableTd>100</Styles.TableTd>
            <Styles.TableTd>150</Styles.TableTd>
            <Styles.TableTd>200</Styles.TableTd>
            <Styles.TableTd>200</Styles.TableTd>
            <Styles.TableTd>200</Styles.TableTd>
            <Styles.TableTd>200</Styles.TableTd>
            <Styles.TableTd>200</Styles.TableTd>
          </Styles.TableTr>
          <Styles.TableTr>
            <Styles.TableTd>
              Заміна скла
              <br />
              камери
            </Styles.TableTd>
            <Styles.TableTd>150</Styles.TableTd>
            <Styles.TableTd>200</Styles.TableTd>
            <Styles.TableTd>350</Styles.TableTd>
            <Styles.TableTd>400</Styles.TableTd>
            <Styles.TableTd>700</Styles.TableTd>
            <Styles.TableTd>700</Styles.TableTd>
            <Styles.TableTd>700</Styles.TableTd>
            <Styles.TableTd>700</Styles.TableTd>
            <Styles.TableTd>700</Styles.TableTd>
          </Styles.TableTr>
          <Styles.TableTr>
            <Styles.TableTd>SIM-утримувач</Styles.TableTd>
            <Styles.TableTd>40</Styles.TableTd>
            <Styles.TableTd>80</Styles.TableTd>
            <Styles.TableTd>80</Styles.TableTd>
            <Styles.TableTd>150</Styles.TableTd>
            <Styles.TableTd>150 / 200</Styles.TableTd>
            <Styles.TableTd>300</Styles.TableTd>
            <Styles.TableTd>300</Styles.TableTd>
            <Styles.TableTd>300</Styles.TableTd>
            <Styles.TableTd>300</Styles.TableTd>
          </Styles.TableTr>
        </Tbody>
        <Tfoot>
          <Styles.TableTr>
            <Styles.TableTh color="red.500">Послуги</Styles.TableTh>
            <Styles.TableTh color="red.500">iPhone 4 / 4s</Styles.TableTh>
            <Styles.TableTh color="red.500">iPhone 5 / 5S / SE</Styles.TableTh>
            <Styles.TableTh color="red.500">iPhone 6 / 6+</Styles.TableTh>
            <Styles.TableTh color="red.500">iPhone 6s / 6s+</Styles.TableTh>
            <Styles.TableTh color="red.500">iPhone 7 / 7+</Styles.TableTh>
            <Styles.TableTh color="red.500">iPhone 8 / 8+</Styles.TableTh>
            <Styles.TableTh color="red.500">iPhone X</Styles.TableTh>
            <Styles.TableTh color="red.500">iPhone Xs / Xs Max</Styles.TableTh>
            <Styles.TableTh color="red.500">iPhone Xr</Styles.TableTh>
          </Styles.TableTr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
};

export { IphonePrice };
