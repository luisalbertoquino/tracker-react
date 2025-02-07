"use client"

import type React from "react"
import GenericDashboardContent from "../GenericDashboardContent"
import { Bar } from "react-chartjs-2"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"

const SociodemografiaContent: React.FC = () => {
  const piramideData = {
    labels: ['60+', '51-60', '41-50', '31-40', '21-30', '11-20', '0-10'],
    datasets: [
      {
        label: 'Mujeres',
        data: [2, 3, 4, 5, 8, 6, 2],
        backgroundColor: '#FF00FF', // Magenta neón
        borderColor: '#FF00FF',
        borderWidth: 1,
        borderRadius: 4,
        barThickness: 20,
      },
      {
        label: 'Hombres',
        // Usando valores negativos para el lado izquierdo de la pirámide
        data: [-1, -2, -3, -4, -6, -4, -1],
        backgroundColor: '#00FF00', // Verde neón
        borderColor: '#00FF00',
        borderWidth: 1,
        borderRadius: 4,
        barThickness: 20,
      }
    ]
  }

  const options = {
    indexAxis: 'y' as const,
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          color: '#FFFFFF',
          font: {
            size: 12
          }
        }
      },
      tooltip: {
        callbacks: {
          label: function(context: any) {
            let value = context.raw;
            return `${context.dataset.label}: ${Math.abs(value)}`;
          }
        }
      }
    },
    scales: {
      x: {
        stacked: false,
        grid: {
          color: '#333333',
          borderColor: '#666666'
        },
        ticks: {
          color: '#FFFFFF',
          callback: function(value: any) {
            return Math.abs(value);
          }
        }
      },
      y: {
        stacked: false,
        grid: {
          display: false
        },
        ticks: {
          color: '#FFFFFF'
        }
      }
    }
  }

  const stats = [
    { label: "Casos actualizados hasta", value: "30/1/2025", color: "text-white" },
    { label: "Edad promedio de afectación", value: 23, color: "text-white" },
    { label: "Total Casos Masculino", value: 21, color: "text-green-400" },
    {
      label: "Distribución por Género y Edad",
      value: (
        <div className="h-48">
          <Bar data={piramideData} options={options} />
        </div>
      ),
      color: "text-white"
    }
  ]

  return <GenericDashboardContent title="Sociodemografía" stats={stats} />
}

export default SociodemografiaContent