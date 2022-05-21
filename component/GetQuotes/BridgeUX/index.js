import React from "react";
import Image from "next/image";
import {
  Button,
  Select,
  Input,
  FormControl,
  Stack,
  useColorModeValue,
  InputGroup,
  InputRightElement,
  Box,
  Text,
  // Image,
} from "@chakra-ui/react";

export default function BridgeUX({ getQuotes, params, setParams }) {
  const InputBgColorMode = useColorModeValue("blue.100", "gray.700");
  const InputTextColorMode = useColorModeValue("gray.900", "white");
  const ButtonColorMode1 = useColorModeValue("gray.500", "#303E46");
  const ButtonBorderColorMode1 = useColorModeValue("gray.300", "gray.600");
  const TextInputColorMode = useColorModeValue("gray.900", "gray.900 ");
  const ChainTextColorMode = useColorModeValue("#EEEEEE", "#EEEEEE");
  const BridgeUX = useColorModeValue("blue.500", "blue.500");
  const GetQuotButtonColorMode = useColorModeValue("gray.600", "#303E46");

  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <Box>
      <form onSubmit={getQuotes}>
        <FormControl>
          {/* ---- FROM ADDRESS ---- */}

          <Box
            maxWidth={700}
            borderRadius="2xl"
            px={7}
            py={7}
            mx="10"
            bgColor={BridgeUX}
            shadow="2xl"
          >
            <Input
              bg={InputBgColorMode}
              //borderColor="gray.200"
              maxW={700}
              letterSpacing={2}
              type="text"
              name="fromUserAddress"
              placeholder="Enter Address  0x.."
              mx="auto"
              color={TextInputColorMode}
              value={params.fromUserAddress}
              onChange={({ target }) =>
                setParams((prev) => ({
                  ...prev,
                  [target.name]: target.value,
                }))
              }
            />
            <Text
              color={ChainTextColorMode}
              fontSize="m"
              fontWeight="semibold"
              pt={3}
            >
              From Chain
            </Text>

            {/* ---- FROM CHAIN ---- */}

            <Stack direction="row" py={5}>
              <Select
                textAlign="center"
                maxW={150}
                height={12}
                borderRadius="xl"
                borderColor={ButtonBorderColorMode1}
                name="fromChain"
                type="text"
                bg={ButtonColorMode1}
                shadow="lg"
                color={InputTextColorMode}
                fontWeight="bold"
                fontSize="large"
                value={params.fromChainId}
                onChange={({ target }) =>
                  setParams((prev) => ({
                    ...prev,
                    [target.name]: target.options[target.selectedIndex].id,
                    fromChainId: target.value,
                  }))
                }
              >
                <option id="ethereum" value="1">
                  Ethereum
                </option>
                <option id="polygon" value="137">
                  Polygon
                </option>
                <option id="avalanche" value="43114">
                  Avalanche
                </option>
                <option id="bsc" value="56">
                  Binance
                </option>
                <option id="moonbeam" value="1284">
                  Moonbeam
                </option>
                <option id="arbitrum" value="42161">
                  Arbitrum
                </option>
                <option id="fantom" value="250">
                  Fantom
                </option>
              </Select>

              {/* ---- TOKEN AMOUNT ---- */}

              <InputGroup size="md">
                <Input
                  pr="4.5rem"
                  placeholder="Enter Amount"
                  bg={InputBgColorMode}
                  height={12}
                  name="tokenAmount"
                  value={params.tokenAmount}
                  onChange={({ target }) =>
                    setParams((prev) => ({
                      ...prev,
                      [target.name]: target.value,
                    }))
                  }
                />
                <InputRightElement width="4.5rem">
                  <Button bg={BridgeUX} h="2rem" mt="auto" size="md">
                    max
                  </Button>
                </InputRightElement>
              </InputGroup>

              {/* ---- TOKEN SYMBOL ---- */}

              <Select
                textAlign="center"
                maxW={150}
                height={12}
                borderRadius="xl"
                borderColor={ButtonBorderColorMode1}
                name="tokenSymbol"
                type="number"
                bg={ButtonColorMode1}
                shadow="lg"
                color={InputTextColorMode}
                fontWeight="bold"
                fontSize="large"
                value={params.fromTokenAddress}
                onChange={({ target }) =>
                  setParams((prev) => ({
                    ...prev,
                    [target.name]: target.options[target.selectedIndex].id,
                    fromTokenAddress: target.value,
                  }))
                }
              >
                <option
                  id="ETH"
                  value="0x64ff637fb478863b7468bc97d30a5bf3a428a1fd"
                >
                  ETH
                </option>
                <option
                  id="USDC"
                  value="0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"
                >
                  USDC
                </option>
                <option
                  id="USDT"
                  value="0xdAC17F958D2ee523a2206206994597C13D831ec7"
                >
                  USDT
                </option>
                <option
                  id="DAI"
                  value="0x6b175474e89094c44da98b954eedeac495271d0f"
                >
                  DAI
                </option>

                <option
                  id="AVAX"
                  value="0x1ce0c2827e2ef14d5c4f29a091d735a204794041"
                >
                  AVAX
                </option>
                <option
                  id="MATIC"
                  value="0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0"
                >
                  MATIC
                </option>
              </Select>
            </Stack>

            {/* ---- TO CHAIN ---- */}

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
                  name="toChain"
                  type="number"
                  bg={ButtonColorMode1}
                  shadow="lg"
                  color={InputTextColorMode}
                  height={12}
                  borderRadius="xl"
                  fontWeight="bold"
                  fontSize="large"
                  value={params.toChainId}
                  onChange={({ target }) =>
                    setParams((prev) => ({
                      ...prev,
                      [target.name]: target.options[target.selectedIndex].id,
                      toChainId: target.value,
                    }))
                  }
                >
                  <option id="ethereum" value="1">
                    Ethereum
                  </option>
                  <option id="polygon" value="137">
                    Polygon
                  </option>
                  <option id="avalanche" value="43114">
                    Avalanche
                  </option>
                  <option id="bsc" value="56">
                    Binance
                  </option>
                  <option id="moonbeam" value="1284">
                    Moonbeam
                  </option>
                  <option id="arbitrum" value="42161">
                    Arbitrum
                  </option>
                  <option id="fantom" value="250">
                    Fantom
                  </option>
                </Select>

                <Input
                  color="gray.400"
                  textAlign="center"
                  bg={InputBgColorMode}
                  variant="filled"
                  placeholder={
                    params.tokenAmount
                      ? formatter.format(params.tokenAmount).split(".")[0]
                      : "$0.0"
                  }
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
