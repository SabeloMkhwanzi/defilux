import { useState, useEffect } from "react";
import axios from "axios";
import { Box, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import BridgeUX from "./BridgeUX";
import QuoteResult from "./QuotesResults";
import { formatParams } from "utils";

function GetQuotes() {
  const [items, setItems] = useState([]);
  const InputTextColorMode = useColorModeValue("gray.900", "white");

  console.log(items);

  const [params, setParams] = useState({
    fromUserAddress: "",
    fromChain: "ethereum",
    fromChainId: 1,
    tokenAmount: 1000,
    tokenSymbol: "USDC",
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

  // "https://api.coincap.io/v2/assets/{tokenSymbol}/history?interval=d1";
  // "https://api.covalenthq.com/v1/{toChain}/xy=k/sushiswap/ecosystem/?quote-currency=USD&format=JSON&key=${API_KEY}";

  useEffect(() => {
    getQuotes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box>
      <Stack direction="column">
        <BridgeUX getQuotes={getQuotes} params={params} setParams={setParams} />
        <QuoteResult data={items} />
      </Stack>
    </Box>
  );
}

export default GetQuotes;
