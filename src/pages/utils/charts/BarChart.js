import React from 'react';
import { Chart } from 'react-google-charts';

const responseArr = [
  ["Name", "Percentage", { role: "annotation" }, { role: "link" }],
  ["Google", 55, "55%", "https://www.google.com"],
  ["Facebook", 40, "40%", "https://www.facebook.com"],
  ["Amazon", 25, "25%", "https://www.amazon.com"],
  ["Microsoft", 30, "30%", "https://www.microsoft.com"]
];

const BarChart = () => {
  const options = {
    title: 'Percentage of Users by Company',
    legend: { position: 'none' },
    chartArea: { width: '50%' },
    hAxis: {
      title: 'Percentage',
      minValue: 0,
    },
  };

  return (
    <Chart
      chartType="BarChart"
      width="100%"
      height="400px"
      data={responseArr}
      options={options}
    />
  );
}

export default BarChart;
