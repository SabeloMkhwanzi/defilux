// import { useState, useEffect } from "react";
// import axios from "axios";
// import { Box } from "@chakra-ui/react";

// const options = {
//   method: "GET",
//   url: "https://coingecko.p.rapidapi.com/coins/usdc/market_chart",
//   params: { vs_currency: "usd", days: "7" },
//   headers: {
//     "X-RapidAPI-Host": "coingecko.p.rapidapi.com",
//     "X-RapidAPI-Key": "42f77560d0msh01cc44e9fdf3d90p1d5759jsn4b76c6a9c969",
//   },
// };

// export default function Chart() {
//   const [items, setItems] = useState([]);

//   useEffect(() => {
//     getChart();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   const getChart = async (e) => {
//     const response = await axios.get(
//       "https://coingecko.p.rapidapi.com/coins/usdc/market_chart?vs_currency=usd&days=7,",
//       {
//         method: "GET",
//         url: "https://coingecko.p.rapidapi.com/coins/usdc/market_chart",
//         params: { vs_currency: "usd", days: "7" },
//         headers: {
//           "X-RapidAPI-Host": "coingecko.p.rapidapi.com",
//           "X-RapidAPI-Key":
//             "42f77560d0msh01cc44e9fdf3d90p1d5759jsn4b76c6a9c969",
//         },
//       }
//     );
//     // console.log(response.data);
//     setItems(response.data);
//     console.log(items);
//   };

//   return <Box>Chart{console.log(data.items)} </Box>;
// }
