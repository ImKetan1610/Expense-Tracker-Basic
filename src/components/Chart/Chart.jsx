import React from "react";
import { Chart as chartJS, defaults } from "chart.js/auto";
import { Pie } from "react-chartjs-2";

defaults.maintainAspectRatio = false;
defaults.responsive = true;

const Chart = () => {
  return (
    <div className="chart">
      <Pie
        data={{
          labels: ["Red", "Blue", "Yellow"],
          datasets: [
            {
              label: "My First Dataset",
              data: [300, 50, 100],
              backgroundColor: [
                "rgb(255, 99, 132)",
                "rgb(54, 162, 235)",
                "rgb(255, 205, 86)",
              ],
              hoverOffset: 4,
            },
          ],
        }}
      />
    </div>
  );
};

export default Chart;
