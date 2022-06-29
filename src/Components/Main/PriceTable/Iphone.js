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
import iphoneImage from "../../../assets/img/iphone.svg"
import "./Table.css";

export const Iphone = () => {
  return (
    <TableContainer sx={
      {marginTop: "150px"}
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
          src={iphoneImage}
          alt="iphone"/>
        <Text>iPhone</Text>
      </Box>
      <Table id="services-section"
        size={
          {base: "sm"}
      }>
        <Thead>
          <Tr className="App__main-table-td">
            <Th color="red.500">Послуги</Th>
            <Th color="red.500">iPhone 4 / 4s</Th>
            <Th color="red.500">iPhone 5 / 5S / SE</Th>
            <Th color="red.500">iPhone 6 / 6+</Th>
            <Th color="red.500">iPhone 6s / 6s+</Th>
            <Th color="red.500">iPhone 7 / 7+</Th>
            <Th color="red.500">iPhone 8 / 8+</Th>
            <Th color="red.500">iPhone X</Th>
            <Th color="red.500">iPhone Xs / Xs Max</Th>
            <Th color="red.500">iPhone Xr</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr className="App__main-table-tr">
            <Td>Чищення від води</Td>
            <Td>250</Td>
            <Td>350</Td>
            <Td>450</Td>
            <Td>450</Td>
            <Td>600</Td>
            <Td>700</Td>
            <Td>800</Td>
            <Td>800</Td>
            <Td>800</Td>
          </Tr>
          <Tr className="App__main-table-tr">
            <Td>
              Заміна дисплейного
              <br/>
              модуля
            </Td>
            <Td>450</Td>
            <Td>600</Td>
            <Td>700 / 1000</Td>
            <Td>900 / 1450</Td>
            <Td>1250 / 1550</Td>
            <Td>1430 / 1630</Td>
            <Td>7590</Td>
            <Td>7590 / 8800</Td>
            <Td>3000</Td>
          </Tr>
          <Tr className="App__main-table-tr">
            <Td>Заміна батареї</Td>
            <Td>300</Td>
            <Td>380</Td>
            <Td>400 / 450</Td>
            <Td>440 / 530</Td>
            <Td>450 / 600</Td>
            <Td>500 / 700</Td>
            <Td>1000</Td>
            <Td>1000 / 1900</Td>
            <Td>1400</Td>
          </Tr>
          <Tr className="App__main-table-tr">
            <Td>Заміна корпусу</Td>
            <Td>150</Td>
            <Td>500</Td>
            <Td>800</Td>
            <Td>900 / 1050</Td>
            <Td>900 / 1000</Td>
            <Td>1500</Td>
            <Td>2000</Td>
            <Td>2000</Td>
            <Td>2000</Td>
          </Tr>
          <Tr className="App__main-table-tr">
            <Td>Заміна камери</Td>
            <Td>150</Td>
            <Td>250</Td>
            <Td>350 / 440</Td>
            <Td>370 / 700</Td>
            <Td>800 / 2200</Td>
            <Td>1300 / 2200</Td>
            <Td>1600</Td>
            <Td>2500 / 3500</Td>
            <Td>2000</Td>
          </Tr>
          <Tr className="App__main-table-tr">
            <Td>
              Заміна фронтальної
              <br/>
              камери
            </Td>
            <Td>150</Td>
            <Td>200</Td>
            <Td>240 / 320</Td>
            <Td>280 / 450</Td>
            <Td>350 / 500</Td>
            <Td>600 / 700</Td>
            <Td>1000</Td>
            <Td>1900 / 2000</Td>
            <Td>2000</Td>
          </Tr>
          <Tr className="App__main-table-tr">
            <Td>
              Заміна шлейфу кнопки
              <br/>
              увімкнення/вимкнення
            </Td>
            <Td>200</Td>
            <Td>250</Td>
            <Td>320 / 410</Td>
            <Td>450</Td>
            <Td>500</Td>
            <Td>700</Td>
            <Td>700</Td>
            <Td>700</Td>
            <Td>700</Td>
          </Tr>
          <Tr className="App__main-table-tr">
            <Td>
              Заміна шлейфу
              <br/>
              мікрофона + рознімання
              <br/>
              синхронізації
            </Td>
            <Td>200</Td>
            <Td>250</Td>
            <Td>300 / 330</Td>
            <Td>320 / 380</Td>
            <Td>500</Td>
            <Td>500</Td>
            <Td>700</Td>
            <Td>750 / 1000</Td>
            <Td>700</Td>
          </Tr>
          <Tr className="App__main-table-tr">
            <Td>
              Заміна шлейфу
              <br/>
              кнопки Home
            </Td>
            <Td>200</Td>
            <Td>250</Td>
            <Td>300 / 320</Td>
            <Td>330</Td>
            <Td>-</Td>
            <Td>-</Td>
            <Td>-</Td>
            <Td>-</Td>
            <Td>-</Td>
          </Tr>
          <Tr className="App__main-table-tr">
            <Td>
              Заміна шлейфу
              <br/>
              з датчиком наближення
            </Td>
            <Td>150</Td>
            <Td>200</Td>
            <Td>240 / 320</Td>
            <Td>280 / 450</Td>
            <Td>350 / 500</Td>
            <Td>600 / 700</Td>
            <Td>1000</Td>
            <Td>1900 / 2000</Td>
            <Td>2000</Td>
          </Tr>
          <Tr className="App__main-table-tr">
            <Td>
              Заміна голосового
              <br/>
              динаміка
            </Td>
            <Td>150</Td>
            <Td>200</Td>
            <Td>300</Td>
            <Td>300</Td>
            <Td>350</Td>
            <Td>350</Td>
            <Td>400</Td>
            <Td>400 / 500</Td>
            <Td>400</Td>
          </Tr>
          <Tr className="App__main-table-tr">
            <Td>
              Заміна поліфонічного
              <br/>
              динаміка
            </Td>
            <Td>150</Td>
            <Td>200</Td>
            <Td>300</Td>
            <Td>350</Td>
            <Td>500</Td>
            <Td>500</Td>
            <Td>600</Td>
            <Td>600 / 700</Td>
            <Td>600</Td>
          </Tr>
          <Tr className="App__main-table-tr">
            <Td>
              Заміна кнопок
              <br/>
              регулювання гучності
            </Td>
            <Td>150</Td>
            <Td>200</Td>
            <Td>300</Td>
            <Td>450</Td>
            <Td>600</Td>
            <Td>600</Td>
            <Td>600</Td>
            <Td>600</Td>
            <Td>600</Td>
          </Tr>
          <Tr className="App__main-table-tr">
            <Td>
              Заміна елементів
              <br/>
              ланцюгів живлення
            </Td>
            <Td>вiд 300</Td>
            <Td>вiд 300</Td>
            <Td>вiд 500</Td>
            <Td>вiд 600</Td>
            <Td>вiд 700</Td>
            <Td>вiд 800</Td>
            <Td>вiд 800</Td>
            <Td>вiд 800</Td>
            <Td>вiд 800</Td>
          </Tr>
          <Tr className="App__main-table-tr">
            <Td>
              Заміна елементів
              <br/>
              ланцюгів управління
              <br/>
              дисплеєм та тачскрином
            </Td>
            <Td>вiд 400</Td>
            <Td>вiд 400</Td>
            <Td>вiд 600</Td>
            <Td>вiд 700</Td>
            <Td>вiд 800</Td>
            <Td>вiд 800</Td>
            <Td>вiд 800</Td>
            <Td>вiд 800</Td>
            <Td>вiд 800</Td>
          </Tr>
          <Tr className="App__main-table-tr">
            <Td>
              Заміна елементів
              <br/>
              ланцюга WIFI
            </Td>
            <Td>от 500</Td>
            <Td>от 500</Td>
            <Td>от 600</Td>
            <Td>от 700</Td>
            <Td>от 800</Td>
            <Td>от 800</Td>
            <Td>от 800</Td>
            <Td>от 800</Td>
            <Td>от 800</Td>
          </Tr>
          <Tr className="App__main-table-tr">
            <Td>Чищення від пилу</Td>
            <Td>100</Td>
            <Td>150</Td>
            <Td>150</Td>
            <Td>300</Td>
            <Td>300</Td>
            <Td>400</Td>
            <Td>400</Td>
            <Td>400</Td>
            <Td>400</Td>
          </Tr>
          <Tr className="App__main-table-tr">
            <Td>Рихтування корпусу</Td>
            <Td>100</Td>
            <Td>100</Td>
            <Td>100</Td>
            <Td>150</Td>
            <Td>200</Td>
            <Td>200</Td>
            <Td>200</Td>
            <Td>200</Td>
            <Td>200</Td>
          </Tr>
          <Tr className="App__main-table-tr">
            <Td>
              Заміна скла
              <br/>
              камери
            </Td>
            <Td>150</Td>
            <Td>200</Td>
            <Td>350</Td>
            <Td>400</Td>
            <Td>700</Td>
            <Td>700</Td>
            <Td>700</Td>
            <Td>700</Td>
            <Td>700</Td>
          </Tr>
          <Tr className="App__main-table-tr">
            <Td>SIM-утримувач</Td>
            <Td>40</Td>
            <Td>80</Td>
            <Td>80</Td>
            <Td>150</Td>
            <Td>150 / 200</Td>
            <Td>300</Td>
            <Td>300</Td>
            <Td>300</Td>
            <Td>300</Td>
          </Tr>
        </Tbody>
        <Tfoot>
          <Tr className="App__main-table-tr">
            <Th color="red.500">Послуги</Th>
            <Th color="red.500">iPhone 4 / 4s</Th>
            <Th color="red.500">iPhone 5 / 5S / SE</Th>
            <Th color="red.500">iPhone 6 / 6+</Th>
            <Th color="red.500">iPhone 6s / 6s+</Th>
            <Th color="red.500">iPhone 7 / 7+</Th>
            <Th color="red.500">iPhone 8 / 8+</Th>
            <Th color="red.500">iPhone X</Th>
            <Th color="red.500">iPhone Xs / Xs Max</Th>
            <Th color="red.500">iPhone Xr</Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
};

export default Iphone;
