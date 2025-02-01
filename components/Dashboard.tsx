"use client"

import type React from "react"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import SociodemografiaContent from "./dashboard-contents/SociodemografiaContent"
import AntecedentesContent from "./dashboard-contents/AntecedentesContent"
import EstadoFuncionalContent from "./dashboard-contents/EstadoFuncionalContent"
import TratamientoContent from "./dashboard-contents/TratamientoContent"

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white p-4">
      {/* Header with centered logo */}
      <header className="text-center mb-8 flex flex-col items-center">
        <div className="w-24 h-24 mb-4">
          <Image
            src="https://dba.science/wp-content/uploads/2023/09/MicrosoftTeams-image-38.png"
            alt="Tracker Center Logo"
            width={96}
            height={96}
            className="w-full h-full"
            priority
          />
        </div>
        <h1 className="text-2xl font-bold tracking-wider">TRACKER CENTER</h1>
      </header>

      {/* Tabs that change all content */}
      <Tabs defaultValue="sociodemografia" className="w-full">
      {/* Centered tabs below the map */}
      <div className="flex justify-center mt-4">
        <TabsList className="bg-[#2a2a2a] border-gray-800">
          <TabsTrigger value="sociodemografia" className="data-[state=active]:bg-neon-purple/20">
            Sociodemografia
          </TabsTrigger>
          <TabsTrigger value="antecedentes" className="data-[state=active]:bg-neon-purple/20">
            Antecedentes Personales
          </TabsTrigger>
          <TabsTrigger value="estado" className="data-[state=active]:bg-neon-purple/20">
            Estado funcional
          </TabsTrigger>
          <TabsTrigger value="tratamiento" className="data-[state=active]:bg-neon-purple/20">
            Tratamiento Complementario
          </TabsTrigger>
        </TabsList>
      </div>

      {/* Tab contents */}
      <TabsContent value="sociodemografia">
        <SociodemografiaContent />
      </TabsContent>
      <TabsContent value="antecedentes">
        <AntecedentesContent />
      </TabsContent>
      <TabsContent value="estado">
        <EstadoFuncionalContent />
      </TabsContent>
      <TabsContent value="tratamiento">
        <TratamientoContent />
      </TabsContent>
    </Tabs>

    </div>
  )
}

export default Dashboard

