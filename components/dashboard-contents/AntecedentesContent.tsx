import type React from "react"
import GenericDashboardContent from "../GenericDashboardContent"

const AntecedentesContent: React.FC = () => {
  const stats = [
    { label: "Total Antecedentes", value: 156, color: "text-white" },
    { label: "Antecedentes Familiares", value: 78, color: "text-green-400" },
    { label: "Antecedentes Personales", value: 62, color: "text-yellow-400" },
    { label: "Otros Antecedentes", value: 16, color: "text-purple-400" },
  ]

  return <GenericDashboardContent title="Antecedentes Personales" stats={stats} />
}

export default AntecedentesContent

