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
            borderWidth={0}
            maxWidth={600}
            borderRadius="2xl"
            px={7}
            py={7}
            my="3%"
            mx="auto"
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
                name="FROM_CHAIN"
                type="text"
                bg={ButtonColorMode1}
                shadow="lg"
                color={InputTextColorMode}
                fontWeight="bold"
                fontSize="large"
              >
                <option name="Ethereum" value="1">
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
                <option
                  name="ETH"
                  value="0x64ff637fb478863b7468bc97d30a5bf3a428a1fd"
                >
                  ETH
                </option>
                <option
                  name="USDC"
                  value="0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"
                >
                  USDC
                </option>
                <option
                  name="USDT"
                  value="0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"
                >
                  USDT
                </option>
                <option
                  name="DAI"
                  value="0x6b175474e89094c44da98b954eedeac495271d0f"
                >
                  DAI
                </option>

                <option
                  name="AVAX"
                  value="0x1ce0c2827e2ef14d5c4f29a091d735a204794041"
                >
                  AVAX
                </option>
                <option
                  name="MATIC"
                  value="0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0"
                >
                  MATIC
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
                  <option name="Ethereum" value="1">
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

                <Input
                  bg={InputBgColorMode}
                  variant="filled"
                  // placeholder={value}
                  height={12}
                />

                {/* to Token Symbol  */}
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
