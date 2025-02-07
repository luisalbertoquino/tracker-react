"use client"

import React, { useEffect, useMemo } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Bar, Doughnut } from "react-chartjs-2"
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js"
import { MapContainer, TileLayer, Marker, Popup, LayersControl, LayerGroup, GeoJSON } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import SliderCards from "./sliderCards"
import countriesGeoJSON from "./countries.json"
import type { FeatureCollection, Feature, Geometry } from 'geojson'

// Aseguramos que TypeScript reconozca el tipo correcto del GeoJSON
const typedCountriesGeoJSON = countriesGeoJSON as FeatureCollection<Geometry, { name: string }>

ChartJS.register(ArcElement, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

interface GenericDashboardContentProps {
  title: string
  stats: Array<{ 
    label: string
    value: string | number | React.ReactNode
    color?: string 
  }>
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

  useEffect(() => {
    window.addEventListener("resize", () => {
      window.dispatchEvent(new Event("resize"))
    })
  }, [])

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

  // Add mapStyle function if it's missing
  const mapStyle = {
    fillColor: '#4a4a4a',
    weight: 1,
    opacity: 0.7,
    color: '#666',
    fillOpacity: 0.4
  }

  const geoJSONLayer = useMemo(() => {
    return (
      <GeoJSON data={typedCountriesGeoJSON} style={mapStyle} />
    )
  }, [])

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
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Columna izquierda - SliderCards */}
        <Card className="bg-[#2a2a2a] border-gray-800 md:col-span-1 md:row-span-3">
          <CardHeader className="p-4">
            <CardTitle className="text-sm">{title}</CardTitle>
          </CardHeader>
          <CardContent>
            <SliderCards />
          </CardContent>
        </Card>

        {/* Sección del mapa */}
        <div className="md:col-span-2 md:row-span-3">
          <Card className="bg-[#2a2a2a] border-gray-800 h-full">
            <CardContent className="p-4 h-full">
              <MapContainer
                center={[4.5709, -74.2973]}
                zoom={6}
                style={{ height: "100%", width: "100%" }}
                zoomControl={false}
              >
                <TileLayer
                  url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                  maxZoom={19}
                />
                <LayersControl position="topright">
                  <LayersControl.Overlay checked name="Country Borders">
                    <LayerGroup>
                      {geoJSONLayer}
                    </LayerGroup>
                  </LayersControl.Overlay>
                </LayersControl>
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