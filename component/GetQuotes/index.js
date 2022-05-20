import { useState, useEffect } from "react";
import axios from "axios";
import { Box } from "@chakra-ui/react";
import BridgeUX from "./BridgeUX";
import QuoteResult from "./QuotesResults";
import { formatParams } from "utils";

function GetQuotes() {
  const [items, setItems] = useState([]);
  console.log(items);

  const [params, setParams] = useState({
    fromUserAddress: "0xF975206a46b4eD9f5F008AF9813B19bf083d94eE",
    fromChain: "ethereum",
    fromChainId: 1,
    tokenAmount: 10000,
    tokenSymbol: "USDT",
    fromTokenAddress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
    toChain: "polygon",
    toChainId: 137,
  });

  const getQuotes = async (e) => {
    e?.preventDefault();

    try {
      const { data } = await axios.get(
        `https://swap.dev.swing.xyz/v0/transfer/quote?${formatParams(params)}`
      );
      const items = data.routes?.map((item) => ({
        duration: item?.duration,
        amount: item?.quote?.amount,
        bridgeFee: item?.quote?.bridgeFee,
        bridge: item?.route[0]?.bridge,
      }));

      return setItems(items);
    } catch (error) {
      console.error(error);
      return setItems([]);
    }
  };

  useEffect(() => {
    getQuotes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box>
      <Box>
        <BridgeUX getQuotes={getQuotes} params={params} setParams={setParams} />
        <QuoteResult data={items} />
      </Box>

      {/* <Box mx={3} mb={2}>
        <Text
          color={InputTextColorMode}
          fontWeight="bold"
          fontSize="large"
          key={items.chainId}
        >
          From:{items.fromChain.chainId}
        </Text>
      </Box> */}
    </Box>
  );
}

export default GetQuotes;
