import type React from "react"
import GenericDashboardContent from "../GenericDashboardContent"

const EstadoFuncionalContent: React.FC = () => {
  const stats = [
    { label: "Estado Funcional Promedio", value: "85%", color: "text-green-400" },
    { label: "Pacientes con Acompañamiento", value: 42, color: "text-blue-400" },
    { label: "Imágenes Registradas", value: 128, color: "text-yellow-400" },
    { label: "Evaluaciones Pendientes", value: 7, color: "text-red-500" },
  ]

  return <GenericDashboardContent title="Estado Funcional" stats={stats} />
}

export default EstadoFuncionalContent

