import { useState, useEffect } from "react";
import { Box, SimpleGrid, Text, useColorModeValue } from "@chakra-ui/react";
import axios from "axios";

function CoinEcosystem() {
  const [assets, setAssets] = useState([]);
  const BridgeColor = useColorModeValue("blue.500", "blue.500");
  const TextDataColor = useColorModeValue("gray.900", "gray.900");
  const TextHeadingColorMode = useColorModeValue("white", "white");

  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  }

  // const getKlaytnAssets = async (e) => {
  //   const response = await axios.get(
  //     "https://api.covalenthq.com/v1/1/xy=k/sushiswap/ecosystem/?quote-currency=USD&format=JSON&key=ckey_4e73d56514984838ab3206fbaf4"
  //   );
  //   setAssets(response.data.data);
  // };

  // useEffect(() => {
  //   getKlaytnAssets();
  //   assets;
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <Box
      bg={BridgeColor}
      borderRadius="md"
      minH="300"
      minWidth="500"
      boxShadow="0px 5px 25px 0px rgba(0, 0, 0, .25);"
      mx="auto"
    >
      {/* {console.log(assets)} */}
      <SimpleGrid columns={[1, null, 3]} spacing={2} mt={7}>
        <Box
          w="md"
          maxW="xs"
          justifyContent="center"
          my={10}
          px={5}
          ps={5}
          py={1}
        >
          <Box>
            <Text
              textAlign="center"
              color={TextHeadingColorMode}
              fontSize="md"
              fontWeight="semibold"
              mt={5}
            >
              Chain Id
            </Text>
            <Text
              fontSize="lg"
              mt={2}
              textAlign="center"
              color={TextDataColor}
              fontWeight="bold"
            >
              {assets.chain_id}
            </Text>
          </Box>
        </Box>
        <Box
          my={10}
          w="md"
          maxW="xs"
          justifyContent="center"
          px={5}
          ps={5}
          py={1}
        >
          <Box>
            <Text
              textAlign="center"
              color={TextHeadingColorMode}
              fontSize="md"
              fontWeight="semibold"
              mt={5}
            >
              dex_name
            </Text>
            <Text
              textAlign="center"
              fontWeight="bold"
              fontSize="lg"
              mt={2}
              color={TextDataColor}
            >
              {assets.dex_name}
            </Text>
          </Box>
        </Box>
        <Box
          my={10}
          w="md"
          maxW="xs"
          justifyContent="center"
          px={5}
          ps={5}
          py={1}
        >
          <Box>
            <Text
              textAlign="center"
              fontSize="md"
              fontWeight="semibold"
              mt={5}
              color={TextHeadingColorMode}
            >
              Token Price Quote
            </Text>
            <Text
              textAlign="center"
              fontWeight="bold"
              fontSize="lg"
              mt={2}
              color={TextDataColor}
            >
              {assets.as_token_price_quote
                ? formatter.format(data.as_token_price_quote).split(".")[0]
                : "null"}
            </Text>
          </Box>
        </Box>
      </SimpleGrid>

      <SimpleGrid columns={[1, null, 3]} spacing={7} mt={7}>
        <Box w="md" maxW="xs" justifyContent="center" px={5} ps={5} py={1}>
          <Box>
            <Text
              textAlign="center"
              color={TextHeadingColorMode}
              fontSize="md"
              fontWeight="semibold"
            >
              Total Fees (24h)
            </Text>
            <Text
              fontSize="lg"
              mt={2}
              textAlign="center"
              color={TextDataColor}
              fontWeight="bold"
            >
              {assets.total_fees_24h
                ? formatter.format(data.total_fees_24h).split(".")[0]
                : "null"}
            </Text>
          </Box>
        </Box>
        <Box w="md" maxW="xs" justifyContent="center" px={5} ps={5} py={1}>
          <Box>
            <Text
              textAlign="center"
              color={TextHeadingColorMode}
              fontSize="md"
              fontWeight="semibold"
            >
              Total Swaps (24h)
            </Text>
            <Text
              textAlign="center"
              fontWeight="bold"
              fontSize="lg"
              mt={2}
              color={TextDataColor}
            >
              {assets.total_swaps_24h}
            </Text>
          </Box>
        </Box>
      </SimpleGrid>
    </Box>
  );
}

export default CoinEcosystem;
