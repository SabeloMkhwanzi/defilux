import { Box, SimpleGrid, Text, useColorModeValue } from "@chakra-ui/react";

function CoinEcosystem(assets) {
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

  const formatCash = (n) => {
    if (n < 1e3) return n;
    if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(1);
    if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1);
    if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1);
    if (n >= 1e12) return +(n / 1e12).toFixed(1);
  };

  return (
    <Box>
      <SimpleGrid columns={[1, null, 3]} spacing={2}>
        {assets.data.map((item) => (
          <>
            <Box w="md" maxW="xs" justifyContent="center" key={item.chain_id}>
              <Box>
                <Text
                  textAlign="center"
                  color={TextHeadingColorMode}
                  fontSize="lg"
                  fontWeight="semibold"
                  mt={1}
                >
                  Chain Id
                </Text>
                <Text
                  fontSize="xl"
                  mt={2}
                  textAlign="center"
                  color={TextDataColor}
                  fontWeight="bold"
                >
                  {item.chain_id}
                </Text>
              </Box>
            </Box>
            <Box w="md" maxW="xs" justifyContent="center" px={5} ps={5} py={1}>
              <Box>
                <Text
                  textAlign="center"
                  color={TextHeadingColorMode}
                  fontSize="lg"
                  fontWeight="semibold"
                  mt={1}
                >
                  Dex Name
                </Text>
                <Text
                  textAlign="center"
                  fontWeight="bold"
                  fontSize="xl"
                  mt={2}
                  color={TextDataColor}
                >
                  {item.dex_name}
                </Text>
              </Box>
            </Box>
            <Box w="md" maxW="xs" justifyContent="center" px={5} ps={5} py={1}>
              <Box>
                <Text
                  textAlign="center"
                  fontSize="lg"
                  fontWeight="semibold"
                  mt={1}
                  color={TextHeadingColorMode}
                >
                  Token Price Quote
                </Text>
                <Text
                  textAlign="center"
                  fontWeight="bold"
                  fontSize="xl"
                  mt={2}
                  color={TextDataColor}
                >
                  ${formatCash(item.gas_token_price_quote)}
                </Text>
              </Box>
            </Box>
          </>
        ))}
      </SimpleGrid>

      <Box
        bg={BridgeColor}
        borderRadius="md"
        minH="100"
        minWidth="300"
        boxShadow="0px 5px 25px 0px rgba(0, 0, 0, .25);"
        mx="auto"
      >
        {assets.data.map((item) => (
          <SimpleGrid
            columns={[1, null, 3]}
            spacing={7}
            mt={1}
            key={item.chain_id}
          >
            <Box w="md" maxW="xs" justifyContent="center" px={5} ps={5} py={5}>
              <Box>
                <Text
                  textAlign="center"
                  color={TextHeadingColorMode}
                  fontSize="lg"
                  fontWeight="semibold"
                >
                  Total Fees (24h)
                </Text>
                <Text
                  fontSize="xl"
                  mt={2}
                  textAlign="center"
                  color={TextDataColor}
                  fontWeight="bold"
                >
                  {item.total_fees_24h
                    ? formatter.format(item.total_fees_24h).split(".")[0]
                    : "null"}
                </Text>
              </Box>
            </Box>
            <Box w="md" maxW="xs" justifyContent="center" px={5} ps={5} py={5}>
              <Box>
                <Text
                  textAlign="center"
                  color={TextHeadingColorMode}
                  fontSize="lg"
                  fontWeight="semibold"
                >
                  Total Swaps (24h)
                </Text>
                <Text
                  fontSize="xl"
                  mt={2}
                  textAlign="center"
                  color={TextDataColor}
                  fontWeight="bold"
                >
                  {item.total_swaps_24h}
                </Text>
              </Box>
            </Box>
            <Box w="md" maxW="xs" justifyContent="center" px={5} ps={5} py={5}>
              <Box>
                <Text
                  textAlign="center"
                  color={TextHeadingColorMode}
                  fontSize="lg"
                  fontWeight="semibold"
                >
                  Total Active Pairs (7d)
                </Text>
                <Text
                  fontSize="xl"
                  mt={2}
                  textAlign="center"
                  color={TextDataColor}
                  fontWeight="bold"
                >
                  {item.total_active_pairs_7d}
                </Text>
              </Box>
            </Box>
          </SimpleGrid>
        ))}
      </Box>
    </Box>
  );
}

export default CoinEcosystem;
