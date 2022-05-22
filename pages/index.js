import { Box, useColorModeValue } from "@chakra-ui/react";
import Head from "next/head";
import GetQuotes from "../component/GetQuotes";
import Navbar from "../component/Navbar";

function Home() {
  const AppBgColor = useColorModeValue("#88E1F2", "#343A40");
  return (
    <>
      <Head>
        <title>DefiLux</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box bg={AppBgColor} minH="100vh" w="full">
        <Navbar />
        <GetQuotes />
      </Box>
    </>
  );
}

export default Home;
