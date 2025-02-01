"use client"

import type React from "react"
import { Scatter } from "react-chartjs-2"
import { Chart as ChartJS, LinearScale, PointElement, Tooltip, Legend } from "chart.js"

ChartJS.register(LinearScale, PointElement, Tooltip, Legend)

const generateData = () => {
  const data = []
  for (let i = 0; i < 50; i++) {
    data.push({
      x: Math.random() * 100,
      y: Math.random() * 100,
      r: Math.random() * 20,
    })
  }
  return data
}

const data = {
  datasets: [
    {
      label: "Diagrama de Calor",
      data: generateData(),
      backgroundColor: "rgba(176, 38, 255, 0.6)",
    },
  ],
}

const options = {
  scales: {
    x: {
      type: "linear" as const,
      position: "bottom" as const,
    },
    y: {
      type: "linear" as const,
      position: "left" as const,
    },
  },
}

const HeatMap: React.FC = () => {
  return <Scatter options={options} data={data} />
}

export default HeatMap

