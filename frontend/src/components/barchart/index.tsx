import axios from "axios";
import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { SaleSuccess } from "types/sale";
import { baseURL } from "utils/api";
import { round } from "utils/format";

type ChartData = {
  labels: { categories: string[] };
  series: SeriesData[];
};

type SeriesData = {
  name: string;
  data: number[];
};

function BarChart() {
  const [chartData, setChartData] = useState<ChartData>({
    labels: {
      categories: [],
    },
    series: [
      {
        name: "% Sucesso",
        data: [],
      },
    ],
  });

  useEffect(() => {
    axios
      .get(`${baseURL}/sales/success-by-seller`)
      .then((res) => {
        const data = res.data as SaleSuccess[];
        const labels = data.map(({ sellerName }) => sellerName);
        const series = data.map((sale) => round((100.0 * sale.deals) / sale.visited, 1));
        setChartData({ labels: { categories: labels }, series: [{ name: "% Sucesso", data: series }] });
      })
      .catch(() => console.log("opa"));
  }, []);

  const options = {
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
  };

  return <Chart options={{ ...options, xaxis: chartData.labels }} series={chartData.series} type="bar" height="240" />;
}

export default BarChart;
