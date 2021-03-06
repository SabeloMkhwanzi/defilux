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
  const InputTextColorMode = useColorModeValue("gray.900", "white");

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
      minWidth="570"
      borderRadius="2xl"
      px={2}
      py={2}
      mx="10%"
      bgColor={BridgeUX}
      shadow="2xl"
    >
      <Stack direction={{ base: "column" }} bg={BridgeUX} shadow="lg">
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
            <span>Receives</span>
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
                  <Text
                    textAlign="center"
                    isTruncated
                    fontSize="lg"
                    color={InputTextColorMode}
                  >
                    {item.bridge}
                  </Text>
                </Stack>
                <chakra.span
                  textOverflow="ellipsis"
                  overflow="hidden"
                  whiteSpace="nowrap"
                  color="green"
                >
                  {item.amount
                    ? formatter.format(item.amount).split(".")[0]
                    : "null"}
                </chakra.span>

                <chakra.span
                  textOverflow="ellipsis"
                  overflow="hidden"
                  whiteSpace="nowrap"
                  color={InputTextColorMode}
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
