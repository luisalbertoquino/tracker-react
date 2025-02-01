"use client"

import type React from "react"
import { Line } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Gráfico de Líneas",
    },
  },
}

const labels = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"]

const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => Math.random() * 1000),
      borderColor: "rgb(176, 38, 255)",
      backgroundColor: "rgba(176, 38, 255, 0.5)",
    },
    {
      label: "Dataset 2",
      data: labels.map(() => Math.random() * 1000),
      borderColor: "rgb(0, 255, 255)",
      backgroundColor: "rgba(0, 255, 255, 0.5)",
    },
  ],
}

const LineChart: React.FC = () => {
  return <Line options={options} data={data} />
}

export default LineChart

