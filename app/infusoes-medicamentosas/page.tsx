"use client"

import { useState, useMemo } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Syringe, Search, AlertTriangle, Sun, Clock, Zap, Shield, Info, BookOpen } from "lucide-react"

export default function InfusoesMedicamentosasPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const medications = [
    {
      name: "Asparaginase",
      brand: "ELSPAR®",
      route: "IM/EV",
      irritant: "Não se aplica",
      photosensitive: false,
      infusionTime: "30 a 60 min",
      category: ["infusao-rapida"],
    },
    {
      name: "Bleomicina",
      brand: "BLEO",
      route: "SC/IM/EV",
      irritant: "Irritante",
      photosensitive: false,
      infusionTime: "30 min",
      category: ["irritante", "infusao-rapida"],
    },
    {
      name: "Bortezomib",
      brand: "VELCADE®",
      route: "SC/EV",
      irritant: "Irritante",
      photosensitive: false,
      infusionTime: "30 min",
      category: ["irritante", "infusao-rapida"],
    },
    {
      name: "Carboplatina",
      brand: "CBP",
      route: "EV",
      irritant: "Irritante",
      photosensitive: true,
      infusionTime: "60 min",
      category: ["irritante", "fotossensivel", "infusao-longa"],
    },
    {
      name: "Ciclofosfamida",
      brand: "CTX",
      route: "EV",
      irritant: "Irritante",
      photosensitive: true,
      infusionTime: "30 min",
      category: ["irritante", "fotossensivel", "infusao-rapida"],
    },
    {
      name: "Cisplatina",
      brand: "CDDP",
      route: "EV",
      irritant: "Irritante/Vesicante",
      photosensitive: true,
      infusionTime: "1 mg/min",
      category: ["vesicante", "irritante", "fotossensivel"],
    },
    {
      name: "Citarabina",
      brand: "ARA-C",
      route: "SC/IM/IT/EV",
      irritant: "Não se aplica",
      photosensitive: true,
      infusionTime: "60 a 180 min",
      category: ["fotossensivel", "infusao-longa"],
    },
    {
      name: "Dacarbazina",
      brand: "DTIC",
      route: "EV",
      irritant: "Irritante",
      photosensitive: true,
      infusionTime: "60 min",
      category: ["irritante", "fotossensivel", "infusao-longa"],
    },
    {
      name: "Daunorrubicina",
      brand: "DAUNO®",
      route: "EV",
      irritant: "Vesicante",
      photosensitive: false,
      infusionTime: "30 a 45 min",
      category: ["vesicante", "infusao-rapida"],
    },
    {
      name: "Decitabina",
      brand: "DACOGEN®",
      route: "EV",
      irritant: "Não se aplica",
      photosensitive: false,
      infusionTime: "60 min",
      category: ["infusao-longa"],
    },
    {
      name: "Docetaxel",
      brand: "DOC",
      route: "EV",
      irritant: "Irritante",
      photosensitive: true,
      infusionTime: "60 min",
      category: ["irritante", "fotossensivel", "infusao-longa"],
    },
    {
      name: "Doxorrubicina",
      brand: "DOXO",
      route: "EV",
      irritant: "Vesicante",
      photosensitive: true,
      infusionTime: "15 min",
      category: ["vesicante", "fotossensivel", "infusao-rapida"],
    },
    {
      name: "Doxorrubicina lipossomal",
      brand: "",
      route: "EV",
      irritant: "Irritante",
      photosensitive: false,
      infusionTime: "1 mg/min",
      category: ["irritante"],
    },
    {
      name: "Etoposídeo",
      brand: "VP",
      route: "EV",
      irritant: "Irritante",
      photosensitive: false,
      infusionTime: "60 min",
      category: ["irritante", "infusao-longa"],
    },
    {
      name: "Fludarabina",
      brand: "FLUDARA",
      route: "EV",
      irritant: "Não se aplica",
      photosensitive: false,
      infusionTime: "30 min",
      category: ["infusao-rapida"],
    },
    {
      name: "Fluorouracila",
      brand: "5-FU",
      route: "EV",
      irritant: "Irritante",
      photosensitive: true,
      infusionTime: "30 min",
      category: ["irritante", "fotossensivel", "infusao-rapida"],
    },
    {
      name: "Gemcitabina",
      brand: "GEMZAR®",
      route: "EV",
      irritant: "Irritante",
      photosensitive: false,
      infusionTime: "60 min",
      category: ["irritante", "infusao-longa"],
    },
    {
      name: "Ifosfamida",
      brand: "IFO",
      route: "EV",
      irritant: "Irritante",
      photosensitive: false,
      infusionTime: "60 min",
      category: ["irritante", "infusao-longa"],
    },
    {
      name: "Irinotecano",
      brand: "IRINO",
      route: "EV",
      irritant: "Irritante",
      photosensitive: false,
      infusionTime: "90 min",
      category: ["irritante", "infusao-longa"],
    },
    {
      name: "Metotrexato",
      brand: "MTX",
      route: "SC/IM/EV",
      irritant: "Não se aplica",
      photosensitive: false,
      infusionTime: "60 min",
      category: ["infusao-longa"],
    },
    {
      name: "Mitomicina",
      brand: "MMC",
      route: "EV",
      irritant: "Vesicante",
      photosensitive: false,
      infusionTime: "30 min",
      category: ["vesicante", "infusao-rapida"],
    },
    {
      name: "Mitoxantrona",
      brand: "MTZ",
      route: "EV",
      irritant: "Vesicante",
      photosensitive: false,
      infusionTime: "120 min",
      category: ["vesicante", "infusao-longa"],
    },
    {
      name: "Oxaliplatina",
      brand: "L-OHP",
      route: "EV",
      irritant: "Irritante",
      photosensitive: true,
      infusionTime: "120 min",
      category: ["irritante", "fotossensivel", "infusao-longa"],
    },
    {
      name: "Paclitaxel",
      brand: "TAXOL®",
      route: "EV",
      irritant: "Irritante",
      photosensitive: true,
      infusionTime: "180 min",
      category: ["irritante", "fotossensivel", "infusao-longa"],
    },
    {
      name: "Vimblastina",
      brand: "VB",
      route: "EV",
      irritant: "Vesicante",
      photosensitive: true,
      infusionTime: "Bolus",
      category: ["vesicante", "fotossensivel", "infusao-rapida"],
    },
    {
      name: "Vincristina",
      brand: "VCR",
      route: "EV",
      irritant: "Vesicante",
      photosensitive: true,
      infusionTime: "Bolus",
      category: ["vesicante", "fotossensivel", "infusao-rapida"],
    },
    {
      name: "Vinorelbina",
      brand: "NAVELBINE®",
      route: "EV",
      irritant: "Vesicante",
      photosensitive: true,
      infusionTime: "Bolus",
      category: ["vesicante", "fotossensivel", "infusao-rapida"],
    },
    {
      name: "Ácido folínico",
      brand: "LEUCOVORIN®",
      route: "EV",
      irritant: "Não se aplica",
      photosensitive: true,
      infusionTime: "15 min",
      category: ["fotossensivel", "infusao-rapida"],
    },
    {
      name: "Ácido zoledrônico",
      brand: "ZOMETA®",
      route: "EV",
      irritant: "Não se aplica",
      photosensitive: false,
      infusionTime: "40-60 min",
      category: ["infusao-longa"],
    },
    {
      name: "Dexametasona",
      brand: "DXT",
      route: "EV",
      irritant: "Não se aplica",
      photosensitive: false,
      infusionTime: "15 min",
      category: ["infusao-rapida"],
    },
    {
      name: "Mesna",
      brand: "MITEXAN®",
      route: "EV",
      irritant: "Não se aplica",
      photosensitive: false,
      infusionTime: "15 min",
      category: ["infusao-rapida"],
    },
    {
      name: "Ranitidina",
      brand: "ANTAK®",
      route: "EV",
      irritant: "Não se aplica",
      photosensitive: false,
      infusionTime: "15 min",
      category: ["infusao-rapida"],
    },
  ]

  const filteredMedications = useMemo(() => {
    return medications.filter(
      (med) =>
        med.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        med.brand.toLowerCase().includes(searchTerm.toLowerCase()),
    )
  }, [searchTerm])

  const getFilteredByCategory = (category: string) => {
    return filteredMedications.filter((med) => med.category.includes(category))
  }

  const vesicantes = getFilteredByCategory("vesicante")
  const irritantes = getFilteredByCategory("irritante")
  const fotossensiveis = getFilteredByCategory("fotossensivel")
  const infusaoRapida = getFilteredByCategory("infusao-rapida")

  const getNursingCare = (medication: any) => {
    const care = []

    if (medication.category.includes("vesicante")) {
      care.push("Verificar permeabilidade do acesso venoso antes da infusão")
      care.push("Monitorar sinais de extravasamento durante toda a infusão")
      care.push("Manter antídoto específico disponível conforme protocolo HUAP")
      care.push("Documentar local de punção e condições do acesso venoso")
      care.push("Interromper imediatamente a infusão se houver suspeita de extravasamento")
    }

    if (medication.category.includes("irritante")) {
      care.push("Utilizar acesso venoso calibroso e de boa permeabilidade")
      care.push("Observar sinais de flebite ou irritação local")
      care.push("Considerar acesso venoso central para infusões repetidas")
      care.push("Diluir adequadamente conforme protocolo institucional")
    }

    if (medication.photosensitive) {
      care.push("Proteger da luz durante preparo e administração")
      care.push("Orientar paciente sobre fotoproteção por 48-72h após infusão")
      care.push("Utilizar equipos e frascos âmbar quando disponível")
      care.push("Manter ambiente com iluminação reduzida durante infusão")
    }

    if (medication.infusionTime.includes("min") && Number.parseInt(medication.infusionTime) >= 60) {
      care.push("Monitorar sinais vitais a cada 30 minutos durante infusão")
      care.push("Verificar permeabilidade do acesso venoso regularmente")
      care.push("Observar sinais de sobrecarga hídrica em infusões prolongadas")
    }

    care.push("Monitorar reações adversas conforme protocolo HUAP")
    care.push("Registrar horário de início e término da infusão")
    care.push("Verificar compatibilidade com outros medicamentos em uso")
    care.push("Manter via de acesso exclusiva para quimioterápicos quando possível")

    return care
  }

  const MedicationCard = ({ medication }: { medication: any }) => (
    <Card className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-primary/20 hover:border-l-primary">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-lg font-bold text-primary">{medication.name}</CardTitle>
            {medication.brand && (
              <CardDescription className="font-semibold text-emerald-600 mt-1">{medication.brand}</CardDescription>
            )}
          </div>
          <div className="flex flex-wrap gap-1 ml-2">
            {medication.category.includes("vesicante") && (
              <Badge variant="destructive" className="text-xs font-medium">
                <AlertTriangle className="w-3 h-3 mr-1" />
                Vesicante
              </Badge>
            )}
            {medication.category.includes("irritante") && (
              <Badge
                variant="secondary"
                className="text-xs font-medium bg-orange-100 text-orange-800 hover:bg-orange-200"
              >
                <Zap className="w-3 h-3 mr-1" />
                Irritante
              </Badge>
            )}
            {medication.photosensitive && (
              <Badge variant="outline" className="text-xs font-medium border-yellow-300 text-yellow-700">
                <Sun className="w-3 h-3 mr-1" />
                Fotossensível
              </Badge>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4 text-sm bg-muted/30 p-3 rounded-lg">
            <div className="flex items-center">
              <span className="font-semibold text-muted-foreground">Via:</span>
              <span className="ml-2 font-medium">{medication.route}</span>
            </div>
            <div className="flex items-center">
              <span className="font-semibold text-muted-foreground">Tempo:</span>
              <span className="ml-2 font-medium">{medication.infusionTime}</span>
            </div>
            <div className="col-span-2 flex items-center">
              <span className="font-semibold text-muted-foreground">Potencial:</span>
              <span className="ml-2 font-medium">{medication.irritant}</span>
            </div>
          </div>

          <div className="border-t pt-4">
            <h4 className="font-semibold text-sm mb-3 flex items-center text-primary">
              <Shield className="w-4 h-4 mr-2" />
              Cuidados de Enfermagem
            </h4>
            <ul className="text-xs space-y-2 text-muted-foreground">
              {getNursingCare(medication).map((care, index) => (
                <li key={index} className="flex items-start leading-relaxed">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  {care}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-white to-emerald-50/30">
      <Header />

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="p-8 bg-gradient-to-br from-emerald-100 via-green-50 to-teal-50 rounded-3xl border-2 border-emerald-200 shadow-lg">
                <Syringe className="h-16 w-16 text-emerald-600" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Medicamentos Oncológicos
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Protocolo de medicamentos quimioterápicos do{" "}
              <strong>Setor de Oncologia do Hospital Universitário Antonio Pedro (HUAP)</strong>. Informações essenciais
              para administração segura e cuidados de enfermagem específicos.
            </p>
          </div>

          <div className="mb-8 max-w-lg mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Buscar medicamento ou marca comercial..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 pr-4 h-12 text-base border-2 border-emerald-200 focus:border-emerald-400 rounded-xl shadow-sm"
              />
            </div>
          </div>

          <Alert className="mb-8 border-emerald-200 bg-emerald-50/50 shadow-sm">
            <Info className="h-5 w-5 text-emerald-600" />
            <AlertDescription className="text-emerald-800">
              <strong>Protocolo HUAP:</strong> Todos os cuidados de enfermagem seguem as diretrizes do Hospital
              Universitário Antonio Pedro. Sempre consulte os protocolos institucionais atualizados antes da
              administração.
            </AlertDescription>
          </Alert>

          <Tabs defaultValue="todos" className="w-full">
            <TabsList className="grid w-full grid-cols-5 h-16 bg-white border-2 border-emerald-100 rounded-xl shadow-sm gap-1 p-1">
              <TabsTrigger
                value="todos"
                className="font-semibold text-xs sm:text-sm data-[state=active]:bg-emerald-100 data-[state=active]:text-emerald-800 px-2 py-2 rounded-lg"
              >
                <span className="hidden sm:inline">Todos</span>
                <span className="sm:hidden">Todos</span>
                <span className="ml-1">({filteredMedications.length})</span>
              </TabsTrigger>
              <TabsTrigger
                value="vesicantes"
                className="font-semibold text-xs sm:text-sm data-[state=active]:bg-red-100 data-[state=active]:text-red-800 px-2 py-2 rounded-lg"
              >
                <AlertTriangle className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                <span className="hidden sm:inline">Vesicantes</span>
                <span className="sm:hidden">Vesic.</span>
                <span className="ml-1">({vesicantes.length})</span>
              </TabsTrigger>
              <TabsTrigger
                value="irritantes"
                className="font-semibold text-xs sm:text-sm data-[state=active]:bg-orange-100 data-[state=active]:text-orange-800 px-2 py-2 rounded-lg"
              >
                <Zap className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                <span className="hidden sm:inline">Irritantes</span>
                <span className="sm:hidden">Irrit.</span>
                <span className="ml-1">({irritantes.length})</span>
              </TabsTrigger>
              <TabsTrigger
                value="fotossensiveis"
                className="font-semibold text-xs sm:text-sm data-[state=active]:bg-yellow-100 data-[state=active]:text-yellow-800 px-2 py-2 rounded-lg"
              >
                <Sun className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                <span className="hidden sm:inline">Fotossensíveis</span>
                <span className="sm:hidden">Foto.</span>
                <span className="ml-1">({fotossensiveis.length})</span>
              </TabsTrigger>
              <TabsTrigger
                value="infusao-rapida"
                className="font-semibold text-xs sm:text-sm data-[state=active]:bg-blue-100 data-[state=active]:text-blue-800 px-2 py-2 rounded-lg"
              >
                <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                <span className="hidden sm:inline">Infusão Rápida</span>
                <span className="sm:hidden">Rápida</span>
                <span className="ml-1">({infusaoRapida.length})</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="todos" className="mt-8">
              <div className="p-6 bg-gradient-to-br from-slate-50 to-emerald-50/20 rounded-2xl border border-emerald-100 mb-6">
                <h3 className="text-lg font-semibold text-emerald-800 mb-2">Todos os Medicamentos</h3>
                <p className="text-muted-foreground">
                  Visualização completa de todos os medicamentos oncológicos do protocolo HUAP.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredMedications.map((medication, index) => (
                  <MedicationCard key={index} medication={medication} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="vesicantes" className="mt-8">
              <div className="p-6 bg-gradient-to-br from-red-50 to-pink-50/30 rounded-2xl border border-red-200 mb-6">
                <Alert className="border-red-300 bg-red-50/50">
                  <AlertTriangle className="h-5 w-5 text-red-600" />
                  <AlertDescription className="text-red-800">
                    <strong>Medicamentos Vesicantes:</strong> Podem causar necrose tecidual se extravasarem. Requerem
                    monitoramento rigoroso e disponibilidade de antídotos específicos conforme protocolo HUAP.
                  </AlertDescription>
                </Alert>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {vesicantes.map((medication, index) => (
                  <MedicationCard key={index} medication={medication} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="irritantes" className="mt-8">
              <div className="p-6 bg-gradient-to-br from-orange-50 to-amber-50/30 rounded-2xl border border-orange-200 mb-6">
                <Alert className="border-orange-300 bg-orange-50/50">
                  <Zap className="h-5 w-5 text-orange-600" />
                  <AlertDescription className="text-orange-800">
                    <strong>Medicamentos Irritantes:</strong> Podem causar dor, flebite ou irritação local. Preferir
                    acessos calibrosos e monitorar sinais de irritação conforme diretrizes HUAP.
                  </AlertDescription>
                </Alert>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {irritantes.map((medication, index) => (
                  <MedicationCard key={index} medication={medication} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="fotossensiveis" className="mt-8">
              <div className="p-6 bg-gradient-to-br from-yellow-50 to-amber-50/30 rounded-2xl border border-yellow-200 mb-6">
                <Alert className="border-yellow-300 bg-yellow-50/50">
                  <Sun className="h-5 w-5 text-yellow-600" />
                  <AlertDescription className="text-yellow-800">
                    <strong>Medicamentos Fotossensíveis:</strong> Devem ser protegidos da luz durante preparo e
                    administração. Orientar paciente sobre fotoproteção por 48-72h após infusão.
                  </AlertDescription>
                </Alert>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {fotossensiveis.map((medication, index) => (
                  <MedicationCard key={index} medication={medication} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="infusao-rapida" className="mt-8">
              <div className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50/30 rounded-2xl border border-blue-200 mb-6">
                <Alert className="border-blue-300 bg-blue-50/50">
                  <Clock className="h-5 w-5 text-blue-600" />
                  <AlertDescription className="text-blue-800">
                    <strong>Infusão Rápida (≤30 min):</strong> Medicamentos com tempo de infusão reduzido. Monitorar
                    reações adversas imediatas e manter vigilância constante.
                  </AlertDescription>
                </Alert>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {infusaoRapida.map((medication, index) => (
                  <MedicationCard key={index} medication={medication} />
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-16 text-center">
            <Card className="max-w-5xl mx-auto bg-gradient-to-br from-emerald-50 via-white to-teal-50/30 border-2 border-emerald-200 shadow-lg">
              <CardContent className="pt-8 pb-8">
                <div className="flex justify-center mb-4">
                  <BookOpen className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold mb-6 text-emerald-800">Referências e Protocolos</h3>
                <div className="text-left space-y-4 max-w-4xl mx-auto">
                  <p className="text-muted-foreground leading-relaxed">
                    <strong>Fonte Principal:</strong> Protocolo de Medicamentos Quimioterápicos - Setor de Oncologia do
                    Hospital Universitário Antonio Pedro (HUAP), Universidade Federal Fluminense.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-emerald-700">Referências Técnicas:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Manual de Quimioterapia Oncológica - HUAP 2024</li>
                        <li>• Diretrizes Brasileiras de Oncologia - SBOC</li>
                        <li>• Protocolos de Segurança em Quimioterapia - ANVISA</li>
                        <li>• Guidelines NCCN para Medicamentos Antineoplásicos</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-emerald-700">Cuidados de Enfermagem:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Manual de Enfermagem Oncológica - HUAP</li>
                        <li>• Protocolos de Extravasamento - COFEN</li>
                        <li>• Diretrizes de Segurança do Paciente Oncológico</li>
                        <li>• Boas Práticas em Administração de Quimioterápicos</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-emerald-100/50 rounded-lg border border-emerald-200">
                    <p className="text-sm text-emerald-800">
                      <strong>Importante:</strong> Para informações detalhadas sobre antídotos específicos, protocolos
                      de extravasamento e condutas em situações de emergência, consulte sempre o manual de oncologia
                      atualizado da instituição e os protocolos específicos do HUAP.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
