import type React from "react"
import GenericDashboardContent from "../GenericDashboardContent"

const TratamientoContent: React.FC = () => {
  const stats = [
    { label: "Total Tratamientos", value: 89, color: "text-white" },
    { label: "Tratamientos Activos", value: 62, color: "text-green-400" },
    { label: "Tratamientos Completados", value: 23, color: "text-blue-400" },
    { label: "Tratamientos Pendientes", value: 4, color: "text-yellow-400" },
  ]

  return <GenericDashboardContent title="Tratamiento Complementario" stats={stats} />
}

export default TratamientoContent

