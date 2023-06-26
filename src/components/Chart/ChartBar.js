import React from "react";
import "./ChartBar.css";

export default function ChartBar(dataProp) {
  let barFillHight = "0%";

  if (dataProp.maxValue > 0) {
    barFillHight = Math.round((dataProp.value / dataProp.maxValue) * 100) + "%";
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: barFillHight }}></div>
      </div>
      <div className="chart-bar__label">{dataProp.label}</div>
    </div>
  );
}
