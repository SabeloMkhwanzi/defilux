import React from "react";
import { Box, useColorModeValue, Stack, Text } from "@chakra-ui/react";

export default function QuoteResult(items) {
  const BridgeUX = useColorModeValue("blue.500", "blue.500");
  const InputBgColorMode = useColorModeValue("blue.100", "gray.700");
  const TextInputColorMode = useColorModeValue("gray.900", "gray.900 ");
  const InputTextColorMode = useColorModeValue("gray.900", "white");
  const ChainTextColorMode = useColorModeValue("blue.500", "blue.500");

  return (
    <Box
      borderColor=""
      borderWidth={0}
      maxWidth={800}
      borderRadius="2xl"
      px={2}
      py={2}
      mx="auto"
      bgColor={BridgeUX}
      shadow="2xl"
    >
      <Box mx={3} mb={2}>
        <Text color={InputTextColorMode} fontWeight="bold" fontSize="large">
          Bridge name:
        </Text>
      </Box>

      <Stack direction="row" justifyContent="space-around">
        <Box
          justifyContent="center"
          bg={InputBgColorMode}
          maxW={400}
          color={TextInputColorMode}
          borderRadius="2xl"
          px={2}
          py={2}
        >
          From Chain
          <Text color={InputTextColorMode} fontWeight="bold" fontSize="large">
            Token Symbol
          </Text>
          <Text>Amount:</Text>
          <Text
            color={ChainTextColorMode}
            fontSize="lg"
            fontWeight="bold"
            pt={3}
          >
            Chain
          </Text>
        </Box>

        <Box>
          <Text></Text>
          <Text color={InputTextColorMode} fontWeight="bold" fontSize="large">
            Fees
          </Text>
          <Text color={InputTextColorMode} fontWeight="bold" fontSize="large">
            duration ~ 10 minutes
          </Text>
        </Box>

        <Box
          justifyContent="center"
          bg={InputBgColorMode}
          maxW={400}
          color={TextInputColorMode}
          borderRadius="2xl"
          px={2}
          py={2}
        >
          To Chain
          <Text color={InputTextColorMode} fontWeight="bold" fontSize="large">
            Token Symbol:{" "}
          </Text>
          <Text>Amount</Text>
          <Text
            color={ChainTextColorMode}
            fontSize="lg"
            fontWeight="bold"
            pt={3}
          >
            Chain
          </Text>
        </Box>
      </Stack>
    </Box>
  );
}
