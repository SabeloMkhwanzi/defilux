import React from "react";
import {
  Box,
  useColorModeValue,
  Stack,
  Text,
  chakra,
  Flex,
  SimpleGrid,
} from "@chakra-ui/react";

export default function QuoteResult(items) {
  const BridgeUX = useColorModeValue("blue.500", "blue.500");
  const InputBgColorMode = useColorModeValue("blue.100", "gray.700");
  const TextInputColorMode = useColorModeValue("gray.900", "gray.900 ");
  const InputTextColorMode = useColorModeValue("gray.900", "white");
  const ChainTextColorMode = useColorModeValue("blue.500", "blue.500");

  const formatCash = (n) => {
    if (n < 1e3) return n;
    if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(1);
    if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1);
    if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1);
    if (n >= 1e12) return +(n / 1e12).toFixed(1);
  };

  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <Box
      borderWidth={0}
      maxWidth="800"
      borderRadius="2xl"
      px={2}
      py={2}
      mx="10%"
      bgColor={BridgeUX}
      shadow="2xl"
    >
      <Stack
        direction={{ base: "column" }}
        maxWidth="800"
        bg={BridgeUX}
        shadow="lg"
        borderRadius={20}
      >
        return (
        <Flex direction={{ base: "row", md: "column" }}>
          <SimpleGrid
            textAlign="center"
            spacingY={4}
            columns={[1, null, 3]}
            w={{ base: 120, md: "full" }}
            textTransform="uppercase"
            bg={BridgeUX}
            color={"gray.100"}
            py={{ base: 1, md: 5 }}
            px={{ base: 2, md: 10 }}
            fontSize="lg"
            fontWeight="semibold"
          >
            <span>Bridge </span>
            <span>Amount</span>
            {/* <span>bridge Fees</span> */}
            <span>duration</span>
          </SimpleGrid>

          {items.data?.map((item) => (
            <>
              <SimpleGrid
                my={3}
                textAlign="center"
                spacingX={4}
                borderRadius="lg"
                spacingY={4}
                columns={[1, null, 3]}
                w={{ base: 120, md: "full" }}
                textTransform="uppercase"
                bg={InputBgColorMode}
                color={"gray.100"}
                py={{ base: 1, md: 4 }}
                px={{ base: 2, md: 10 }}
                fontSize="md"
                fontWeight="normal"
                key={item.bridge}
                justifyContent="center"
                as="button"
              >
                <Stack direction="row" bg={InputBgColorMode}>
                  <Text textAlign="center" isTruncated fontSize="lg">
                    {item.bridge}
                  </Text>
                </Stack>
                <chakra.span
                  textOverflow="ellipsis"
                  overflow="hidden"
                  whiteSpace="nowrap"
                >
                  {item.amount
                    ? formatter.format(item.amount).split(".")[0]
                    : "null"}
                </chakra.span>
                {/* <chakra.span
                  textOverflow="ellipsis"
                  overflow="hidden"
                  whiteSpace="nowrap"
                >
                  <Text color="red.500" fontSize="lg" isTruncated>
                    {item.bridgeFee
                      ? formatter.format(item.bridgeFee).split(".")[0]
                      : "null"}
                  </Text>
                </chakra.span> */}
                <chakra.span
                  textOverflow="ellipsis"
                  overflow="hidden"
                  whiteSpace="nowrap"
                  color="green.500"
                >
                  {item.duration} ~ 10 min
                </chakra.span>
              </SimpleGrid>
            </>
          ))}
        </Flex>
      </Stack>
    </Box>
  );
}
