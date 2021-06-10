import React from "react";
import Chart from "react-google-charts";

import '../About/About.css'

// Ref : https://developers.google.com/chart/interactive/docs/gallery/candlestickchart#Waterfall
const data = [
      ["Jun", "", "", "", ""],
      ["1week", 50, 50, 50, 50],
      ["2week", '', '', '', ''],
      ["3week", '', '', '', ''],
      ["4week", '', '', '', ''],
];
const options = {
   legend: "none",
   bar: { groupWidth: "100%" }, // Remove space between bars.
    candlestick: {
       fallingColor: { strokeWidth: 0, fill: "red" }, // red
        risingColor: { strokeWidth: 0, fill: "#0f9d58" } // green
    }
};

class ExampleChart extends React.Component {
  render() {
    return (
      <div className="App chart">
        <Chart
              chartType="CandlestickChart"
              width="120%"
              height="390px"
              data={data}
              options={options}
        />
      </div>
    );
  }
}

export default ExampleChart;