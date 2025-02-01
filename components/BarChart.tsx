"use client"

import type React from "react"
import { Bar } from "react-chartjs-2"
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js"

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Gráfico de Barras",
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
      backgroundColor: "rgba(176, 38, 255, 0.5)",
    },
    {
      label: "Dataset 2",
      data: labels.map(() => Math.random() * 1000),
      backgroundColor: "rgba(0, 255, 255, 0.5)",
    },
  ],
}

const BarChart: React.FC = () => {
  return <Bar options={options} data={data} />
}

export default BarChart

