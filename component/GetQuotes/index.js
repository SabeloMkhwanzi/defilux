import { useState, useEffect } from "react";
import axios from "axios";
import { Box, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import BridgeUX from "./BridgeUX";
import QuoteResult from "./QuotesResults";
import { formatParams } from "utils";
import CoinChart from "./CoinChart";
import CoinEcosystem from "./CoinEcosystem";

const API_KEY = "ckey_4e73d56514984838ab3206fbaf4";
//const API_KEY = process.env.REACT_APP_COVALENT_API;

function GetQuotes() {
  const BridgeColor = useColorModeValue("blue.500", "blue.500");
  const [items, setItems] = useState([]);
  const [assets, setAssets] = useState([]);
  const [liquidGraph, setLiquidGraph] = useState([]);
  const [volumeGraph, setVolumeGraph] = useState([]);
  const [loader, setLoader] = useState([]);

  const formatCash = (n) => {
    if (n < 1e3) return n;
    if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(1);
    if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1);
    if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1);
    if (n >= 1e12) return +(n / 1e12).toFixed(1);
  };

  // console.log(items);
  // console.log(assets);

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
    e?.preventDefault();
    setLoader(true);
    const response = await fetch(
      `https://api.covalenthq.com/v1/${params.toChainId}/xy=k/sushiswap/ecosystem/?quote-currency=USD&format=JSON&key=${API_KEY}`
    );
    const data = await response.json();
    setAssets(data.data.items);
    setLiquidGraph(
      data.data.items[0].liquidity_chart_7d
        .map((item) => ({
          x: new Date(item.dt).toLocaleDateString(),
          y: formatCash(item.liquidity_quote),
        }))
        .reverse()
    );
    setVolumeGraph(
      data.data.items[0].volume_chart_7d
        .map((item) => ({
          x: new Date(item.dt).toLocaleDateString(),
          y: formatCash(item.volume_quote),
        }))
        .reverse()
    );
  };

  const getQuotes = async (e) => {
    e?.preventDefault();
    setLoader(true);
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
      setLoader(false);
    } catch (error) {
      console.error(error);
      return setItems([]);
    }
  };

  useEffect(() => {
    getDexAssets();
    getQuotes();
    liquidGraph;
    volumeGraph;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Text
        justifyContent="flex-start"
        letterSpacing={1}
        fontSize="lg"
        fontWeight="semibold"
        decoration="lightblue"
        textTransform="uppercase"
        mt={4}
        mx={20}
        color="Highlight"
      >
        A Cross-chain Defi DApp that enhances a great UX experience to help
        provide the best price quotation for swaps, bridges and token transfers.
      </Text>
      <Stack
        direction="row"
        pt={10}
        justifyContent="space-evenly"
        minH="100vh"
        w="full"
      >
        <Box>
          <Text
            justifyContent="center"
            right={2}
            letterSpacing={1}
            fontSize="lg"
            fontWeight="semibold"
            decoration="lightblue"
            textTransform="uppercase"
            pb="4"
          >
            Cross-Chain Bridge Explorer
          </Text>
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
          <Text
            justifyContent="center"
            right={2}
            letterSpacing={1}
            fontSize="lg"
            fontWeight="semibold"
            decoration="lightblue"
            textTransform="uppercase"
            pb="4"
          >
            To-Chain liquidity on Sushiswap Dex
          </Text>
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
          >
            <CoinChart liquid={liquidGraph} />
          </Box>
          <Box pt={1}>
            <CoinEcosystem data={assets} />
          </Box>
        </Stack>
      </Stack>
    </>
  );
}

export default GetQuotes;
