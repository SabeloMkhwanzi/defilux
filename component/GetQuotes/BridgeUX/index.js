/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/jsx-no-duplicate-props */
import React from "react";
import {
  Button,
  Select,
  Input,
  FormControl,
  Radio,
  RadioGroup,
  Stack,
  useColorModeValue,
  InputGroup,
  InputRightElement,
  InputLeftElement,
  Box,
  Text,
  Flex,
  Avatar,
  Image,
} from "@chakra-ui/react";

import { useForm } from "react-hook-form";

export default function BridgeUX({ getQuotes }) {
  const [value, setValue] = React.useState("");
  const handleChange = (event) => setValue(event.target.value);

  const InputBgColorMode = useColorModeValue("blue.100", "gray.700");
  const InputTextColorMode = useColorModeValue("gray.900", "white");
  const ButtonColorMode1 = useColorModeValue("gray.500", "#303E46");
  const ButtonBorderColorMode1 = useColorModeValue("gray.300", "gray.600");
  const TextInputColorMode = useColorModeValue("gray.900", "gray.900 ");
  const ChainTextColorMode = useColorModeValue("#EEEEEE", "#EEEEEE");
  const BridgeUX = useColorModeValue("blue.500", "blue.500");
  const GetQuotButtonColorMode = useColorModeValue("gray.600", "#303E46");

  // const [show, setShow] = React.useState(false);
  // const handleClick = () => setShow(!show);

  useForm();

  return (
    <Box>
      <form onSubmit={getQuotes}>
        <FormControl>
          {/* from Chain & from Chain Id   */}

          <Box
            borderColor=""
            borderWidth={0}
            maxWidth={600}
            borderRadius="2xl"
            px={7}
            py={7}
            mx="auto"
            my="10%"
            bgColor={BridgeUX}
            shadow="2xl"
          >
            <Input
              bg={InputBgColorMode}
              //borderColor="gray.200"
              maxW={700}
              letterSpacing={2}
              type="text"
              name="FROM_USER_ADDRESS"
              placeholder="Enter Address  0x.."
              mx="auto"
              color={TextInputColorMode}
            />
            <Text
              color={ChainTextColorMode}
              fontSize="m"
              fontWeight="semibold"
              pt={3}
            >
              From Chain
            </Text>
            <Stack direction="row" py={5}>
              <Select
                textAlign="center"
                maxW={150}
                height={12}
                borderRadius="xl"
                borderColor={ButtonBorderColorMode1}
                name="fromchain"
                type={("number", "text")}
                bg={ButtonColorMode1}
                shadow="lg"
                color={InputTextColorMode}
                fontWeight="bold"
                fontSize="large"
              >
                <option name="fromchain" value={("Ethereum", "1")}>
                  Ethereum
                </option>
                <option name="polygon" value="137">
                  Polygon
                </option>
                <option name="avalanche" value="43114">
                  Avalanche
                </option>
                <option name="bsc" value="56">
                  Binance
                </option>
                <option name="moonbeam" value="1284">
                  Moonbeam
                </option>
                <option name="arbitrum" value="42161">
                  Arbitrum
                </option>
                <option name="fantom" value="250">
                  Fantom
                </option>
              </Select>

              <InputGroup size="md">
                <Input
                  pr="4.5rem"
                  type={value}
                  placeholder="Enter Amount"
                  onChange={handleChange}
                  bg={InputBgColorMode}
                  height={12}
                />
                <InputRightElement width="4.5rem">
                  <Button bg={BridgeUX} h="2rem" mt="auto" size="md">
                    max
                  </Button>
                </InputRightElement>
              </InputGroup>

              {/* Token Symbol  */}
              <Select
                textAlign="center"
                maxW={150}
                height={12}
                borderRadius="xl"
                borderColor={ButtonBorderColorMode1}
                name="chainId"
                type="number"
                bg={ButtonColorMode1}
                shadow="lg"
                color={InputTextColorMode}
                fontWeight="bold"
                fontSize="large"
              >
                <option name="chainId" value="1">
                  Ethereum
                </option>
                <option name="chainId" value="137">
                  Polygon
                </option>
                <option name="chainId" value="43114">
                  Avalanche
                </option>
                <option name="chainId" value="56">
                  Binance
                </option>
                <option name="chainId" value="1284">
                  Moonbeam
                </option>
                <option name="chainId" value="42161">
                  Arbitrum
                </option>
                <option name="chainId" value="250">
                  Fantom
                </option>
              </Select>
            </Stack>

            {/* to Chain & to Chain Id   */}
            <Text
              color={ChainTextColorMode}
              fontSize="m"
              fontWeight="semibold"
              pt={3}
            >
              To Chain
            </Text>
            <Stack direction="column">
              <Stack direction="row" py={5}>
                <Select
                  textAlign="center"
                  maxW={150}
                  borderColor={ButtonBorderColorMode1}
                  name="chainId"
                  type="number"
                  bg={ButtonColorMode1}
                  shadow="lg"
                  color={InputTextColorMode}
                  height={12}
                  borderRadius="xl"
                  fontWeight="bold"
                  fontSize="large"
                >
                  <option name="chainId" value="1">
                    Ethereum
                  </option>
                  <option name="chainId" value="137">
                    Polygon
                  </option>
                  <option name="chainId" value="43114">
                    Avalanche
                  </option>
                  <option name="chainId" value="56">
                    Binance
                  </option>
                  <option name="chainId" value="1284">
                    Moonbeam
                  </option>
                  <option name="chainId" value="42161">
                    Arbitrum
                  </option>
                  <option name="chainId" value="250">
                    Fantom
                  </option>
                </Select>

                <Input
                  bg={InputBgColorMode}
                  variant="filled"
                  placeholder={value}
                  height={12}
                />
                {/* <Text mb="8px">Value: {value}</Text> */}

                {/* to Token Symbol  */}

                <Select
                  textAlign="center"
                  maxW={150}
                  borderColor={ButtonBorderColorMode1}
                  name="chainId"
                  type="number"
                  bg={ButtonColorMode1}
                  shadow="lg"
                  color={InputTextColorMode}
                  height={12}
                  borderRadius="xl"
                  fontWeight="bold"
                  fontSize="large"
                >
                  <option name="chainId" value="1">
                    Ethereum
                  </option>
                  <option name="chainId" value="137">
                    Polygon
                  </option>
                  <option name="chainId" value="43114">
                    Avalanche
                  </option>
                  <option name="chainId" value="56">
                    Binance
                  </option>
                  <option name="chainId" value="1284">
                    Moonbeam
                  </option>
                  <option name="chainId" value="42161">
                    Arbitrum
                  </option>
                  <option name="chainId" value="250">
                    Fantom
                  </option>
                </Select>
              </Stack>
              <Button
                left="78%"
                w={120}
                borderRadius="lg"
                type="submit"
                shadow="xl"
                color="blue.300"
                bgColor={GetQuotButtonColorMode}
              >
                GET QUOTE
              </Button>
            </Stack>
          </Box>
        </FormControl>
      </form>
    </Box>
  );
}
