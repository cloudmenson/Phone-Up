import {
  Flex,
  Spacer,
  Box,
  Text,
  Heading,
  Img,
  List,
  ListItem,
  ListIcon,
  Link
} from "@chakra-ui/react";
import Map from "./Map/Map";
import {PhoneIcon} from "@chakra-ui/icons";
import {AiFillEnvironment, AiOutlineTablet, AiOutlineApple} from "react-icons/ai";
import {RiComputerLine, RiAndroidLine} from "react-icons/ri";
import {MdComputer} from "react-icons/md";
import {FiTv} from "react-icons/fi";
import {FaRegHandshake} from "react-icons/fa";
import {Link as ScrollLink} from "react-scroll";
import ServiceImage1 from "../../assets/img/service-image1.svg";
import PriceTable from "./PriceTable/Iphone";
import Ipad from "./PriceTable/Ipad";
import "./Main.css";

export const Main = () => {
  return (
    <main className="App__main">
      <Flex flexDirection={
          {
            base: "column",
            md: "row"
          }
        }
        justifyContent={
          {
            base: "center",
            sm: "flex-start"
          }
        }
        padding={
          {
            md: "50px 0 80px",
            lg: "110px 0 140px"
          }
      }>
        <Box id="about-us-section"
          sx={
            {margin: "40px 0 70px"}
          }
          textAlign={
            {
              base: "center",
              sm: "center",
              md: "left",
              lg: "left"
            }
        }>
          <Heading as="h2"
            fontSize={
              {
                base: "18px",
                sm: "20px",
                md: "22px",
                lg: "26px"
              }
          }>
            Швидкий та якісний ремонт - запорука вашої внутрішньої гармонії
          </Heading>
          <Heading className="App__main-title" as="h1"
            fontSize={
              {
                base: "22px",
                sm: "24px",
                md: "26px",
                lg: "30px"
              }
            }
            marginTop={
              {
                base: "25px",
                sm: "18px",
                md: "20px",
                lg: "35px"
              }
          }>
            Phone Up
          </Heading>
          <Text sx={
              {
                marginTop: "30px",
                maxWidth: "800px"
              }
            }
            fontSize={
              {
                base: "16px",
                md: "18px",
                lg: "20px"
              }
          }>
            Наш індивідуальний підхід до кожного клієнта дозволяє знайти
                                                          оптимальне вирішення проблеми
          </Text>
          <Box sx={
            {margin: "50px 0"}
          }>
            <ScrollLink to="more-section"
              spy={true}
              smooth={true}
              duration={1000}
              className="App__main-btn-link">
              Дізнатися більше
            </ScrollLink>
          </Box>
        </Box>
        <Spacer/>
        <Box className="App__main-service-image-container"
          display={
            {
              sm: "none",
              md: "inline-block",
              lg: "inline-block"
            }
          }
          marginLeft={
            {
              sm: "none",
              md: "10px",
              lg: "none"
            }
        }>
          <Img width={
              {sm: "680px"}
            }
            src={ServiceImage1}
            alt="service-image"/>
        </Box>
      </Flex>
      <Box className="App__main-services" id="more-section">
        <Flex fontSize={
            {
              base: "16px",
              md: "18px",
              lg: "20px"
            }
          }
          sx={
            {
              padding: "40px 0 30px",
              alignItems: "center",
              flexDirection: "column"
            }
        }>
          <Heading fontSize={
              {
                base: "22px",
                sm: "24px",
                md: "26px",
                lg: "30px"
              }
            }
            className="App__main-title"
            as="h2"
            id="services-section">
            Послуги
          </Heading>
          <Text sx={
              {
                width: "60%",
                textAlign: "center"
              }
            }
            margin={
              {
                md: "25px 0 8px",
                lg: "50px 0 10px"
              }
          }>
            Що ми ремонтуємо?
          </Text>
          <Flex>
            <Box sx={
              {textAlign: "center"}
            }>
              <Flex sx={
                {
                  justifyContent: "center",
                  alignItems: "center"
                }
              }>
                <RiAndroidLine/>
                <Text sx={
                  {paddingLeft: "10px"}
                }>Android</Text>
              </Flex>
              <Flex sx={
                {
                  justifyContent: "center",
                  alignItems: "center"
                }
              }>
                <AiOutlineApple className="App__main-services-icon"/>
                <Text sx={
                  {paddingLeft: "10px"}
                }>Apple</Text>
              </Flex>
              <Flex sx={
                {
                  justifyContent: "center",
                  alignItems: "center"
                }
              }>
                <AiOutlineTablet className="App__main-services-icon"/>
                <Text sx={
                  {paddingLeft: "10px"}
                }>Планшети</Text>
              </Flex>
              <Flex sx={
                {
                  justifyContent: "center",
                  alignItems: "center"
                }
              }>
                <MdComputer className="App__main-services-icon"/>
                <Text sx={
                  {paddingLeft: "10px"}
                }>Ноутбуки</Text>
              </Flex>
              <Flex sx={
                {
                  justifyContent: "center",
                  alignItems: "center"
                }
              }>
                <FiTv className="App__main-services-icon"/>
                <Text sx={
                  {paddingLeft: "10px"}
                }>Телевізори</Text>
              </Flex>
              <Flex sx={
                {
                  justifyContent: "center",
                  alignItems: "center"
                }
              }>
                <RiComputerLine className="App__main-services-icon"/>
                <Text sx={
                  {paddingLeft: "10px"}
                }>Системні блоки</Text>
              </Flex>
              <Flex sx={
                {
                  justifyContent: "center",
                  alignItems: "center"
                }
              }>
                <FaRegHandshake className="App__main-services-icon"/>
                <Text sx={
                  {paddingLeft: "10px"}
                }>
                  Збираємо компʼютер під замовлення
                </Text>
              </Flex>
            </Box>
          </Flex>
          <Text sx={
              {textAlign: "center"}
            }
            maxWidth={
              {base: "80%"}
            }
            margin={
              {
                base: "15px 0 0",
                md: "30px 0 0",
                lg: "50px 0 0"
              }
          }>
            Ми пропонуємо вигідні умови на професійний сервіс відновлення
                      пошкоджених або не працюючих пристроїв. Перш ніж перейти до ремонту,
                      ми обов'язково проводимо ретельну та багаторівневу діагностику.
          </Text>
          <Box display={
              {
                base: "none",
                md: "inline-block"
              }
            }
            sx={
              {margin: "50px 0"}
          }>
            <ScrollLink to="price-section" className="App__main-btn-link"
              spy={true}
              smooth={true}
              duration={1000}>
              Дивитися цiни
            </ScrollLink>
          </Box>
        </Flex>
        <Box id="price-section"
          display={
            {
              base: "none",
              sm: "none",
              md: "block",
              lg: "block"
            }
        }>
          <PriceTable/>
          <Ipad/>
        </Box>
        <Flex sx={
          {
            margin: "50px 0",
            justifyContent: "center"
          }
        }>
          <ScrollLink to="contacts-section"
            spy={true}
            smooth={true}
            duration={1000}
            className="App__main-btn-link">
            Контакти
          </ScrollLink>
        </Flex>
      </Box>
      <Flex className="App__main-contacts">
        <Box className="App__main-map-container"
          sx={
            {marginTop: "25px"}
        }>
          <Map/>
        </Box>
        <Box sx={
            {textAlign: "center"}
          }
          marginLeft={
            {
              sm: "0",
              md: "0",
              lg: "50px"
            }
          }
          fontSize={
            {
              base: "16px",
              md: "18px",
              lg: "20px"
            }
        }>
          <Heading id="contacts-section"
            fontSize={
              {
                base: "22px",
                sm: "24px",
                md: "26px",
                lg: "30px"
              }
            }
            maxWidth={
              {base: "500px"}
            }
            className="App__main-title"
            as="h2">
            Отримайте персональні рекомендації, звʼязавшись з нами
          </Heading>
          <Text sx={
            {margin: "50px  0"}
          }>
            Ви можете зателефонувати або відвідати нас одразу. Оберіть
                                                          будь-ласка зручну для вас адресу та номер:
          </Text>
          <Box>
            <List spacing={3}>
              <Text sx={
                {fontWeight: 700}
              }>Майстер Олександр:</Text>
              <ListItem>
                <ListIcon as={PhoneIcon}
                  color="red.500"/>
                <Link href="tel:+380638365582">063-836-55-82</Link>
              </ListItem>
              <ListItem>
                <ListIcon as={PhoneIcon}
                  color="red.500"/>
                <Link href="tel:+380679712315">067-97-12-315</Link>
              </ListItem>
              <ListItem>
                <ListIcon as={PhoneIcon}
                  color="red.500"/>
                <Link href="tel:+380951544336">095-15-44-336</Link>
              </ListItem>
            </List>
            <List sx={
                {marginTop: "25px"}
              }
              spacing={3}>
              <Text sx={
                {fontWeight: 700}
              }>Наші адреси:</Text>
              <ListItem>
                <ListIcon as={AiFillEnvironment}
                  color="red.500"/>
                Бульвар Слави, 46
              </ListItem>
              <ListItem>
                <ListIcon as={AiFillEnvironment}
                  color="red.500"/>
                Велика Діївська, 40к
              </ListItem>
              <ListItem>
                <ListIcon as={AiFillEnvironment}
                  color="red.500"/>
                Штурманскький провулок, 7с
              </ListItem>
              <ListItem>
                <ListIcon as={AiFillEnvironment}
                  color="red.500"/>
                Проспект Гагаріна, 99д
              </ListItem>
              <ListItem>
                <ListIcon as={AiFillEnvironment}
                  color="red.500"/>
                Юрія Кондратюка, 8, 1 поверх
              </ListItem>
            </List>
          </Box>
        </Box>
      </Flex>
    </main>
  );
};

export default Main;
