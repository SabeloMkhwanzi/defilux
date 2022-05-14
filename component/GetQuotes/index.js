import { useState, useEffect } from "react";
import axios from "axios";
import { Box } from "@chakra-ui/react";
import BridgeUX from "./BridgeUX";

// Interface data
const TOKEN_SYMBOL = "USD";
const FROM_TOKEN_ADDRESS = "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48";

const TOKEN_AMOUNT = 10000;

const FROM_CHAIN = "ethereum";
const FROM_CHAIN_ID = 1;

const TO_CHAIN = "polygon";
const TO_CHAIN_ID = 137;

const FROM_USE_ADDRESS = "0xF975206a46b4eD9f5F008AF9813B19bf083d94eE";

function GetQuotes() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    getQuotes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getQuotes = async () => {
    //Using fetch
    const response = await axios.get(
      `https://swap.dev.swing.xyz/v0/transfer/quote?tokenSymbol=${TOKEN_SYMBOL}&tokenAmount=${TOKEN_AMOUNT}&fromTokenAddress=${FROM_TOKEN_ADDRESS}&fromChain=${FROM_CHAIN}&fromChainId=${FROM_CHAIN_ID}&toChain=${TO_CHAIN}&toChainId=${TO_CHAIN_ID}&fromUserAddress=${FROM_USE_ADDRESS}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response.data);
    setItems(response.data);

    console.log(items);
  };

  return (
    <Box>
      <Box border={1} borderColor="blue">
        <BridgeUX getQuotes={GetQuotes} />
      </Box>
    </Box>
  );
}

export default GetQuotes;
