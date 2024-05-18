import { useEffect } from "react";
import { FiTv } from "react-icons/fi";
import { MdComputer } from "react-icons/md";
import { PhoneIcon } from "@chakra-ui/icons";
import { FaRegHandshake } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { RiComputerLine, RiAndroidLine } from "react-icons/ri";

import {
  AiOutlineApple,
  AiOutlineTablet,
  AiFillEnvironment,
} from "react-icons/ai";
import {
  Box,
  Img,
  Flex,
  Text,
  List,
  Link,
  Spacer,
  Heading,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";

import { Service } from "assets";
import { Map, IphonePrice, IpadPrice, MacbookPrice } from "components";

import * as Styles from "./styles";

const MainPage = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  return (
    <Styles.Main>
      <Flex
        flexDirection={{
          base: "column",
          md: "row",
        }}
        justifyContent={{
          base: "center",
          sm: "flex-start",
        }}
        padding={{
          md: "50px 0 80px",
          lg: "110px 0 140px",
        }}
      >
        <Box
          id="about-us-section"
          sx={{ margin: "40px 0 70px" }}
          textAlign={{
            md: "left",
            lg: "left",
            sm: "center",
            base: "center",
          }}
        >
          <motion.div
            ref={ref}
            animate={controls}
            transition={{ duration: 1, delay: 1 }}
            initial={{ opacity: 0, y: 25 }}
          >
            <Heading
              as="h2"
              fontSize={{
                sm: "20px",
                md: "22px",
                lg: "26px",
                base: "18px",
              }}
            >
              Швидкий та якісний ремонт - запорука вашої внутрішньої гармонії
            </Heading>
          </motion.div>

          <Heading
            as="h1"
            position={"relative"}
            paddingBottom={"20px"}
            display={"inline-block"}
            fontSize={{
              sm: "24px",
              md: "26px",
              lg: "30px",
              base: "22px",
            }}
            marginTop={{
              sm: "18px",
              md: "20px",
              lg: "35px",
              base: "25px",
            }}
          >
            <Styles.HeadingWithLine>
              Phone Up - Сервісний центр у місті Тернопіль
            </Styles.HeadingWithLine>
          </Heading>

          <motion.div
            ref={ref}
            animate={controls}
            transition={{ duration: 1, delay: 1.5 }}
            initial={{ opacity: 0, y: 25 }}
          >
            <Text
              sx={{
                marginTop: "30px",
                maxWidth: "800px",
              }}
              fontSize={{
                md: "18px",
                lg: "20px",
                base: "16px",
              }}
            >
              Наш індивідуальний підхід до кожного клієнта дозволяє знайти
              оптимальне вирішення проблеми
            </Text>
          </motion.div>

          <Box sx={{ margin: "50px 0" }}>
            <motion.div
              ref={ref}
              animate={controls}
              transition={{ duration: 1, delay: 3 }}
              initial={{ opacity: 0, y: 0 }}
            >
              <Styles.LinkTo
                spy={true}
                smooth={true}
                duration={1000}
                to="more-section"
              >
                Дізнатися більше
              </Styles.LinkTo>
            </motion.div>
          </Box>
        </Box>
        <Spacer />
        <Styles.Box
          display={{
            sm: "none",
            md: "inline-block",
            lg: "inline-block",
          }}
          marginLeft={{
            sm: "none",
            md: "10px",
            lg: "none",
          }}
        >
          <Img src={Service} alt="service-image" width={{ sm: "680px" }} />
        </Styles.Box>
      </Flex>

      <Box sx={{ backgroundImage:  }} id="more-section">
        <Flex
          fontSize={{
            md: "18px",
            lg: "20px",
            base: "16px",
          }}
          sx={{
            alignItems: "center",
            padding: "30px 0 30px",
            flexDirection: "column",
          }}
        >
          <Heading
            as="h2"
            position={"relative"}
            id="services-section"
            paddingBottom={"20px"}
            display={"inline-block"}
            fontSize={{
              base: "22px",
              sm: "24px",
              md: "26px",
              lg: "30px",
            }}
          >
            <Styles.HeadingWithLine>Послуги</Styles.HeadingWithLine>
          </Heading>
          <Text
            sx={{
              width: "60%",
              textAlign: "center",
            }}
            margin={{
              md: "25px 0 8px",
              lg: "50px 0 10px",
            }}
          >
            Що ми ремонтуємо?
          </Text>
          <Flex>
            <motion.circle
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
            />

            <Box
              sx={{
                textAlign: "center",
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "center",
                gap: "20px",
                marginTop: "20px",
              }}
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Flex
                  sx={{
                    justifyContent: "center",
                    alignItems: "center",
                    border: "1px solid white",
                    borderRadius: "6px",
                    width: "300px",
                    height: "100px",
                    overflow: "hidden",
                    backgroundColor: "#000000",
                  }}
                >
                  <RiAndroidLine />
                  <Text sx={{ paddingLeft: "10px" }}>Android</Text>
                </Flex>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Flex
                  sx={{
                    justifyContent: "center",
                    alignItems: "center",
                    border: "1px solid white",
                    borderRadius: "6px",
                    width: "300px",
                    height: "100px",
                    overflow: "hidden",
                    backgroundColor: "#000000",
                  }}
                >
                  <AiOutlineApple />
                  <Text sx={{ paddingLeft: "10px" }}>Apple</Text>
                </Flex>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Flex
                  sx={{
                    justifyContent: "center",
                    alignItems: "center",
                    border: "1px solid white",
                    borderRadius: "6px",
                    width: "300px",
                    height: "100px",
                    overflow: "hidden",
                    backgroundColor: "#000000",
                  }}
                >
                  <AiOutlineTablet />
                  <Text sx={{ paddingLeft: "10px" }}>Планшети</Text>
                </Flex>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Flex
                  sx={{
                    justifyContent: "center",
                    alignItems: "center",
                    border: "1px solid white",
                    borderRadius: "6px",
                    width: "300px",
                    height: "100px",
                    overflow: "hidden",
                    backgroundColor: "#000000",
                  }}
                >
                  <MdComputer />
                  <Text sx={{ paddingLeft: "10px" }}>Ноутбуки</Text>
                </Flex>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Flex
                  sx={{
                    justifyContent: "center",
                    alignItems: "center",
                    border: "1px solid white",
                    borderRadius: "6px",
                    width: "300px",
                    height: "100px",
                    overflow: "hidden",
                    backgroundColor: "#000000",
                  }}
                >
                  <FiTv />
                  <Text sx={{ paddingLeft: "10px" }}>Телевізори</Text>
                </Flex>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Flex
                  sx={{
                    justifyContent: "center",
                    alignItems: "center",
                    border: "1px solid white",
                    borderRadius: "6px",
                    width: "300px",
                    height: "100px",
                    overflow: "hidden",
                    backgroundColor: "#000000",
                  }}
                >
                  <RiComputerLine />
                  <Text sx={{ paddingLeft: "10px" }}>Системні блоки</Text>
                </Flex>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Flex
                  sx={{
                    justifyContent: "center",
                    alignItems: "center",
                    border: "1px solid white",
                    borderRadius: "6px",
                    width: "300px",
                    height: "100px",
                    overflow: "hidden",
                    backgroundColor: "#000000",
                  }}
                >
                  <FaRegHandshake />
                  <Text sx={{ paddingLeft: "10px" }}>
                    Збираємо компʼютер <br />
                    під замовлення
                  </Text>
                </Flex>
              </motion.button>
            </Box>
          </Flex>

          <Text
            sx={{ textAlign: "center" }}
            maxWidth={{ base: "80%" }}
            margin={{
              base: "15px 0 0",
              md: "30px 0 0",
              lg: "50px 0 0",
            }}
          >
            Ми пропонуємо вигідні умови на професійний сервіс відновлення
            пошкоджених або не працюючих пристроїв. Перш ніж перейти до ремонту,
            ми обов'язково проводимо ретельну та багаторівневу діагностику.
          </Text>
          <Box
            display={{
              base: "none",
              md: "inline-block",
            }}
            sx={{ margin: "50px 0" }}
          >
            <Styles.LinkTo
              spy={true}
              smooth={true}
              duration={1000}
              to="price-section"
            >
              Дивитися цiни
            </Styles.LinkTo>
          </Box>
        </Flex>
        <Box
          id="price-section"
          display={{
            sm: "none",
            md: "block",
            lg: "block",
            base: "none",
          }}
        >
          <IphonePrice />
          <IpadPrice />
          <MacbookPrice />
        </Box>
        <Flex
          sx={{
            margin: "20px 0",
            justifyContent: "center",
          }}
        >
          <Styles.LinkTo
            spy={true}
            smooth={true}
            duration={1000}
            to="contacts-section"
          >
            Контакти
          </Styles.LinkTo>
        </Flex>
      </Box>
      <Styles.Flex>
        <Box
          fontSize={{
            md: "18px",
            lg: "20px",
            base: "16px",
          }}
        >
          <Heading
            as="h2"
            position={"relative"}
            id="contacts-section"
            paddingBottom={"20px"}
            display={"inline-block"}
            maxWidth={{ base: "500px" }}
            fontSize={{
              base: "22px",
              sm: "24px",
              md: "26px",
              lg: "30px",
            }}
          >
            <Styles.HeadingWithLine>
              Отримайте персональні рекомендації, звʼязавшись з нами
            </Styles.HeadingWithLine>
          </Heading>
          <Text sx={{ margin: "50px  0" }}>
            Ви можете зателефонувати або відвідати нас одразу. Оберіть
            будь-ласка зручну для вас адресу та номер:
          </Text>
          <Box>
            <List spacing={3}>
              <Text sx={{ fontWeight: 700 }}>Майстер Олександр:</Text>
              <ListItem>
                <ListIcon as={PhoneIcon} color="red.500" />
                <Link href="tel:+380638365582">063-836-55-82</Link>
              </ListItem>
              <ListItem>
                <ListIcon as={PhoneIcon} color="red.500" />
                <Link href="tel:+380679712315">067-971-23-15</Link>
              </ListItem>
              <ListItem>
                <ListIcon as={PhoneIcon} color="red.500" />
                <Link href="tel:+380951544336">095-154-43-36</Link>
              </ListItem>
            </List>
            <List sx={{ marginTop: "25px" }} spacing={3}>
              <Text sx={{ fontWeight: 700 }}>Наші адреси:</Text>
              <ListItem>
                <ListIcon as={AiFillEnvironment} color="red.500" />
                Вже працюємо у місті Тернопіль. Наразі телефонуйте щоб дізнатися
                адресу.
              </ListItem>
            </List>
          </Box>
        </Box>
        <Box sx={{ marginTop: "50px" }}>
          <Map />
        </Box>
      </Styles.Flex>
    </Styles.Main>
  );
};

export { MainPage };
