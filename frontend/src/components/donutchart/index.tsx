import { SaleSum } from "types/sale";
import axios from "axios";
import { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import { baseURL } from "utils/api";

type ChartData = {
  labels: string[];
  series: number[];
};

function DonutChart() {
  const [chartData, setChartData] = useState<ChartData>({ labels: [], series: [] });

  useEffect(() => {
    axios
      .get(`${baseURL}/sales/amount-by-seller`)
      .then((res) => {
        const data = res.data as SaleSum[];
        const labels = data.map(({ sellerName }) => sellerName);
        const series = data.map(({ sum }) => sum);

        setChartData({ labels, series });
      })
      .catch(() => console.log("opa"));
  }, []);

  const options = {
    legend: {
      show: true,
    },
  };

  return (
    <Chart options={{ ...options, labels: chartData.labels }} series={chartData.series} type="donut" height="240" />
  );
}

export default DonutChart;
