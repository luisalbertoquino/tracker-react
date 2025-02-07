"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

const cases = [
  {
    title: "Caso 1",
    departments: [
      { name: "Departamento A", cases: 10 },
      { name: "Departamento B", cases: 15 },
      { name: "Departamento C", cases: 8 },
      { name: "Departamento D", cases: 12 },
      { name: "Departamento E", cases: 7 },
      { name: "Departamento E", cases: 7 },
      { name: "Departamento E", cases: 7 },
      { name: "Departamento E", cases: 7 },
      { name: "Departamento E", cases: 7 },
      { name: "Departamento E", cases: 7 },
    ],
  },
  {
    title: "Caso 2",
    departments: [
      { name: "Departamento F", cases: 20 },
      { name: "Departamento G", cases: 18 },
      { name: "Departamento H", cases: 25 },
      { name: "Departamento I", cases: 14 },
      { name: "Departamento J", cases: 22 },
    ],
  },
  {
    title: "Caso 3",
    departments: [
      { name: "Departamento K", cases: 30 },
      { name: "Departamento L", cases: 28 },
      { name: "Departamento M", cases: 35 },
      { name: "Departamento N", cases: 27 },
      { name: "Departamento O", cases: 32 },
    ],
  },
]

export default function SliderCards() {
  return (
    <div className="relative w-full">
        <Carousel 
          opts={{
            loop: true, // This makes the carousel infinite
          }}
          className="w-full"
        >
        <CarouselContent>
          {cases.map((caseItem, index) => (
            <CarouselItem key={index}>
              <Card className="bg-[#2a2a2a] border-gray-800">
                <CardHeader className="p-6 pb-2">
                  <CardTitle className="text-lg text-white">{caseItem.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <div 
                    className="h-[calc(100vh-300px)] overflow-y-auto pr-2"
                    style={{
                      scrollbarWidth: 'thin',
                      scrollbarColor: '#4a4a4a transparent',
                    }}
                  >
                    <div className="space-y-4">
                      {caseItem.departments.map((dept, deptIndex) => (
                        <Card key={deptIndex} className="bg-[#3a3a3a] border-gray-700">
                          <CardHeader className="p-3">
                            <CardTitle className="text-sm text-white">
                              {dept.name}
                              <span className="block w-full h-px bg-gray-600 my-1"></span>
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-white">Número de casos: {dept.cases}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute top-1/2 -translate-y-1/2 flex justify-between w-full" style={{ left: '-20px', right: '-20px', width: 'calc(100% + 40px)' }}>
          <CarouselPrevious className="relative left-0 translate-x-0 bg-[#3a3a3a] hover:bg-[#4a4a4a] border-gray-700" />
          <CarouselNext className="relative right-0 translate-x-0 bg-[#3a3a3a] hover:bg-[#4a4a4a] border-gray-700" />
        </div>
      </Carousel>
    </div>
  )
}