import { useState, useEffect } from "react";
import axios from "axios";
import { Box, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import BridgeUX from "./BridgeUX";
import QuoteResult from "./QuotesResults";
import { formatParams } from "utils";
import CoinChart from "./CoinChart";
import CoinEcosystem from "./CoinEcosystem";

function GetQuotes() {
  const BridgeColor = useColorModeValue("blue.500", "blue.500");
  const [items, setItems] = useState([]);
  const [assets, setAssets] = useState([]);

  console.log(items);
  console.log(assets);

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

  const getDexAssets = async (e) => {
    const chain_id = e?.target.elements.chain_id.value;
    e?.preventDefault();

    const response = await axios.get(
      `https://api.covalenthq.com/v1/${chain_id}/xy=k/sushiswap/ecosystem/?quote-currency=USD&format=JSON&key=ckey_4e73d56514984838ab3206fbaf4`
    );
    setAssets(response.data.data);
  };

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

  // const getKlaytnAssets = async (e) => {
  //   const response = await axios.get(
  //     "https://api.covalenthq.com/v1/1/xy=k/sushiswap/ecosystem/?quote-currency=USD&format=JSON&key=ckey_4e73d56514984838ab3206fbaf4"
  //   );
  //   setAssets(response.data.data);
  // };

  useEffect(() => {
    getDexAssets();
    getQuotes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Stack direction="row" pt={20} justifyContent="space-evenly">
        <Box>
          <Stack direction="column">
            <BridgeUX
              getQuotes={getQuotes}
              params={params}
              setParams={setParams}
            />
            <Box mx="auto" pt={12}>
              <QuoteResult data={items} />
            </Box>
          </Stack>
        </Box>
        <Stack direction="column">
          <Box
            px={5}
            ps={5}
            py={5}
            bg={BridgeColor}
            rounded="md "
            borderRadius="lg"
            h="390px"
            minWidth="500"
            boxShadow="0px 5px 25px 0px rgba(0, 0, 0, .25);"
            //bgColor="rgba(255, 0, 0, 0.1)"
          >
            <CoinChart />
          </Box>
          <Box pt={5}>
            <CoinEcosystem />
          </Box>
        </Stack>
      </Stack>
    </>
  );
}

export default GetQuotes;
