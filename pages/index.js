import { Box } from "@chakra-ui/react";
import Head from "next/head";
import GetQuotes from "../component/GetQuotes";
import Navbar from "../component/Navbar";

function Home() {
  return (
    <Box>
      <Head>
        <title>DefiLux</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <GetQuotes />
    </Box>
  );
}

export default Home;
