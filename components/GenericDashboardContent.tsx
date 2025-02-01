"use client"

import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Bar, Doughnut } from "react-chartjs-2"
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"

ChartJS.register(ArcElement, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

interface GenericDashboardContentProps {
  title: string
  stats: Array<{ label: string; value: string | number; color?: string }>
}

const GenericDashboardContent: React.FC<GenericDashboardContentProps> = ({ title, stats }) => {
  const barChartData = {
    labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"],
    datasets: [
      {
        label: "Datos mensuales",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  }

  const doughnutData = {
    labels: ["Rojo", "Azul", "Amarillo"],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  }

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: {
        top: 5,
        bottom: 5,
        left: 5,
        right: 5,
      },
    },
  }

  return (
    <div className="space-y-4 mt-4">
      {/* Top Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
  {stats.map((stat, index) => (
    <div
      key={index}
      className={`md:col-span-1 flex flex-col gap-4 ${
        index === 0 || index === stats.length - 1 ? "md:row-span-1" : ""
      }`}
    >
      <Card className={`bg-[#2a2a2a] border-gray-800 h-full`}>
        <CardHeader className="p-4">
          <CardTitle className="text-sm font-normal text-center">
            {stat.label}
            <div className={`text-3xl font-bold mt-2 ${stat.color}`}>{stat.value}</div>
          </CardTitle>
        </CardHeader>
      </Card>
      {(index === 1 || index === 2) && (
        <Card className="bg-[#2a2a2a] border-gray-800 h-24">
          <CardHeader className="p-4">
            <CardTitle className="text-sm font-normal text-center">
              Cuadro adicional
              <div className="text-3xl font-bold mt-2 text-gray-400">N/A</div>
            </CardTitle>
          </CardHeader>
        </Card>
      )}
    </div>
  ))}
</div>


      {/* Main Content Area */}
      {/* Contenedor principal */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Columna izquierda - Información */}
          <Card className="bg-[#2a2a2a] border-gray-800">
            <CardHeader className="p-4">
              <CardTitle className="text-sm">{title}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>Elemento 1</li>
                <li>Elemento 2</li>
                <li>Elemento 3</li>
              </ul>
            </CardContent>
          </Card>

          {/* Sección del mapa - Ocupa 2 columnas y toda la altura de los gráficos */}
          <div className="md:col-span-2 md:row-span-3">
            <Card className="bg-[#2a2a2a] border-gray-800 h-full">
              <CardContent className="p-4 h-full">
                <MapContainer center={[4.6097, -74.0817]} zoom={5} style={{ height: "100%", width: "100%" }}>
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  />
                  <Marker position={[4.6097, -74.0817]}>
                    <Popup>Bogotá, Colombia</Popup>
                  </Marker>
                </MapContainer>
              </CardContent>
            </Card>
          </div>

          {/* Columna derecha - Gráficos y cuadro adicional */}
          <div className="flex flex-col gap-4 md:col-span-1">
            <Card className="bg-[#2a2a2a] border-gray-800 h-[200px]">
              <CardContent className="p-4 h-full flex flex-col">
                <div className="text-sm mb-2">Gráfico de Barras</div>
                <div className="flex-1">
                  <Bar data={barChartData} options={chartOptions} />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#2a2a2a] border-gray-800 h-[200px]">
              <CardContent className="p-4 h-full flex flex-col">
                <div className="text-sm mb-2">Gráfico de Dona</div>
                <div className="flex-1">
                  <Doughnut data={doughnutData} options={chartOptions} />
                </div>
              </CardContent>
            </Card>

            {/* Cuadro adicional con mismo tamaño que los gráficos */}
            <Card className="bg-[#2a2a2a] border-gray-800 h-[200px]">
              <CardContent className="p-4 h-full flex flex-col">
                <div className="text-sm mb-2">Cuadro Adicional</div>
                <div className="flex-1 flex items-center justify-center">
                  <span className="text-gray-400">Contenido aquí</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>


    </div>
  )
}

export default GenericDashboardContent