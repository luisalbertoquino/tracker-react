import type React from "react"
import GenericDashboardContent from "../GenericDashboardContent"

const SociodemografiaContent: React.FC = () => {
  const stats = [
    { label: "Casos actualizados hasta", value: "30/1/2025", color: "text-white" },
    { label: "Edad promedio de afectación", value: 23, color: "text-white" },
    { label: "Total Casos Masculino", value: 1, color: "text-red-500" },
    { label: "Total Casos Femenino", value: 6, color: "text-blue-400" },
  ]

  return <GenericDashboardContent title="Sociodemografía" stats={stats} />
}

export default SociodemografiaContent

