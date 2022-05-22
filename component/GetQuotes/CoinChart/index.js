import React from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";

const CoinChart = ({ liquid }) => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "#06113C",
          font: {
            size: 17,
          },
          margin: "20px",
        },
      },
    },
    scales: {
      A: {
        title: "USD",
        type: "linear",
        position: "left",
        ticks: {
          color: "white",
          callback: function (value, index, values) {
            if (parseInt(value) >= 1000) {
              return (
                "$" + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              );
            } else {
              return "$" + value;
            }
          },
        },
      },

      x: {
        ticks: {
          color: "black",
          font: {
            weight: "bold",
            font: {
              size: 15,
            },
          },
        },
      },
    },
  };
  const liquidGraph = {
    datasets: [
      {
        label: "7d liquidity Chart on Sushiswap Dex",
        yAxisID: "A",
        data: liquid,
        borderColor: "#06113C",
        backgroundColor: "#06113C",
      },
    ],
  };

  return <Line options={options} data={liquidGraph} />;
};

export default CoinChart;
