"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, ChevronRight, Users, Stethoscope, Heart, Brain, Activity, Baby, ArrowLeft } from "lucide-react"

const otherScales = [
  {
    id: "man",
    name: "Mini Avaliação Nutricional",
    fullName: "Mini Nutritional Assessment (MNA)",
    description:
      "Ferramenta de triagem e avaliação nutricional desenvolvida especificamente para idosos, permitindo identificar desnutrição ou risco nutricional através de medidas antropométricas, avaliação global, questões dietéticas e avaliação subjetiva.",
    category: "Avaliação Nutricional",
    population: "Idosos",
    scoring: "0-30 pontos",
    riskLevels: "Normal (24-30), Risco (17-23.5), Desnutrição (<17)",
    href: "/escalas/man",
    icon: Heart,
  },
  {
    id: "edimburgo",
    name: "Escala de Edimburgo",
    fullName: "Edinburgh Postnatal Depression Scale (EPDS)",
    description:
      "Instrumento de rastreamento para depressão pós-parto, composto por dez questões que avaliam sintomas depressivos nas últimas duas semanas, sendo amplamente utilizado para identificação precoce de depressão puerperal.",
    category: "Saúde Mental Materna",
    population: "Puérperas",
    scoring: "0-30 pontos",
    riskLevels: "Baixo risco (0-9), Risco moderado (10-12), Alto risco (≥13)",
    href: "/escalas/edimburgo",
    icon: Heart,
  },
  {
    id: "borg",
    name: "Escala de Borg",
    fullName: "Borg Rating of Perceived Exertion Scale",
    description:
      "Escala subjetiva para avaliação da percepção de esforço durante atividade física, permitindo monitorar a intensidade do exercício e orientar prescrições de atividade física seguras e eficazes.",
    category: "Avaliação de Esforço",
    population: "Adultos em atividade física",
    scoring: "6-20 pontos",
    riskLevels: "Muito leve (6-8), Leve (9-10), Moderado (11-12), Intenso (13-16), Muito intenso (17-19), Máximo (20)",
    href: "/escalas/borg",
    icon: Activity,
  },
  {
    id: "nyha",
    name: "Escala de NYHA",
    fullName: "New York Heart Association Functional Classification",
    description:
      "Classificação funcional para insuficiência cardíaca que categoriza pacientes com base na limitação de atividade física causada por sintomas cardíacos, sendo fundamental para estratificação de risco e orientação terapêutica.",
    category: "Função Cardíaca",
    population: "Pacientes cardiopatas",
    scoring: "Classe I-IV",
    riskLevels:
      "Classe I (sem limitação), Classe II (limitação leve), Classe III (limitação moderada), Classe IV (limitação grave)",
    href: "/escalas/nyha",
    icon: Heart,
  },
  {
    id: "apgar",
    name: "Escala de Apgar",
    fullName: "Apgar Score",
    description:
      "Método padronizado para avaliação rápida da condição do recém-nascido imediatamente após o nascimento, avaliando cinco parâmetros vitais: frequência cardíaca, esforço respiratório, tônus muscular, irritabilidade reflexa e cor da pele.",
    category: "Avaliação Neonatal",
    population: "Recém-nascidos",
    scoring: "0-10 pontos",
    riskLevels: "Normal (7-10), Moderadamente deprimido (4-6), Gravemente deprimido (0-3)",
    href: "/escalas/apgar",
    icon: Baby,
  },
  {
    id: "aldrete",
    name: "Escala de Aldrete e Kroulik",
    fullName: "Aldrete Post-Anesthetic Recovery Score",
    description:
      "Escala utilizada para avaliação da recuperação pós-anestésica, avaliando atividade motora, respiração, circulação, consciência e saturação de oxigênio para determinar quando o paciente está apto para alta da sala de recuperação.",
    category: "Recuperação Pós-Anestésica",
    population: "Pacientes pós-cirúrgicos",
    scoring: "0-10 pontos",
    riskLevels: "Alta segura (≥9), Observação (7-8), Permanência necessária (<7)",
    href: "/escalas/aldrete",
    icon: Stethoscope,
  },
]

export default function OutrasPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [expandedCard, setExpandedCard] = useState<string | null>(null)

  const filteredScales = otherScales.filter(
    (scale) =>
      scale.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      scale.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      scale.category.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-nursing-mint via-white to-nursing-sage/10">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Button
            asChild
            variant="outline"
            className="mb-4 hover:bg-nursing-mint/20 border-nursing-sage/30 bg-transparent"
          >
            <Link href="/categorias" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Voltar às Categorias
            </Link>
          </Button>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Stethoscope className="h-12 w-12 text-nursing-forest mr-4" />
            <h1 className="text-4xl font-bold text-nursing-forest">Outras Escalas Especializadas</h1>
          </div>
          <p className="text-base text-nursing-forest/80 max-w-4xl mx-auto leading-relaxed">
            Esta categoria abrange um conjunto diversificado de escalas especializadas utilizadas em diferentes
            contextos clínicos e populações específicas. Incluem instrumentos para avaliação nutricional, saúde mental
            materna, função cardíaca, avaliação neonatal, recuperação pós-anestésica e percepção de esforço. Cada escala
            foi desenvolvida para atender necessidades específicas da prática clínica, fornecendo ferramentas
            padronizadas e validadas para avaliações especializadas que complementam o arsenal de instrumentos
            disponíveis para o cuidado de enfermagem baseado em evidências.
          </p>
        </div>

        {/* Search */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-nursing-forest/60 h-4 w-4" />
            <Input
              type="text"
              placeholder="Buscar escalas especializadas..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 border-nursing-sage/30 focus:border-nursing-forest"
            />
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="border-nursing-sage/20 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <Users className="h-8 w-8 text-nursing-forest mx-auto mb-2" />
              <div className="text-2xl font-bold text-nursing-forest">6</div>
              <div className="text-sm text-nursing-forest/70">Escalas Disponíveis</div>
            </CardContent>
          </Card>
          <Card className="border-nursing-sage/20 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <Stethoscope className="h-8 w-8 text-nursing-gold mx-auto mb-2" />
              <div className="text-2xl font-bold text-nursing-forest">100%</div>
              <div className="text-sm text-nursing-forest/70">Baseadas em Evidências</div>
            </CardContent>
          </Card>
          <Card className="border-nursing-sage/20 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <Brain className="h-8 w-8 text-nursing-forest mx-auto mb-2" />
              <div className="text-2xl font-bold text-nursing-forest">Múltiplas</div>
              <div className="text-sm text-nursing-forest/70">Especialidades</div>
            </CardContent>
          </Card>
        </div>

        {/* Scales Grid */}
        <div className="grid gap-6">
          {filteredScales.map((scale) => {
            const IconComponent = scale.icon
            return (
              <Card
                key={scale.id}
                className="border-nursing-sage/20 bg-white/90 backdrop-blur-sm hover:shadow-lg transition-all duration-300"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-nursing-mint/20 rounded-lg">
                          <IconComponent className="h-5 w-5 text-nursing-forest" />
                        </div>
                        <div>
                          <CardTitle className="text-xl text-nursing-forest">{scale.name}</CardTitle>
                          <CardDescription className="text-nursing-forest/70">{scale.fullName}</CardDescription>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <Badge variant="secondary" className="bg-nursing-mint text-nursing-forest">
                          {scale.category}
                        </Badge>
                        <Badge variant="outline" className="border-nursing-sage text-nursing-forest">
                          {scale.population}
                        </Badge>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setExpandedCard(expandedCard === scale.id ? null : scale.id)}
                      className="text-nursing-forest hover:bg-nursing-mint/20"
                    >
                      <ChevronRight
                        className={`h-4 w-4 transition-transform ${expandedCard === scale.id ? "rotate-90" : ""}`}
                      />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-nursing-forest/80 mb-4 leading-relaxed">{scale.description}</p>

                  {expandedCard === scale.id && (
                    <div className="space-y-4 border-t border-nursing-sage/20 pt-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-nursing-forest mb-2">Pontuação</h4>
                          <p className="text-nursing-forest/80">{scale.scoring}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-nursing-forest mb-2">Interpretação</h4>
                          <p className="text-nursing-forest/80">{scale.riskLevels}</p>
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <Button asChild className="bg-nursing-forest hover:bg-nursing-forest/90">
                          <Link href={scale.href}>
                            Ver Detalhes Completos
                            <ChevronRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Clinical Importance */}
        <Card className="mt-12 border-nursing-sage/20 bg-gradient-to-r from-nursing-mint/20 to-nursing-sage/20">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-nursing-forest mb-4">Importância das Escalas Especializadas</h2>
            <div className="prose prose-lg text-nursing-forest/80 max-w-none">
              <p className="leading-relaxed mb-4">
                As escalas especializadas representam ferramentas fundamentais para avaliações específicas em diferentes
                contextos clínicos e populações. Cada instrumento foi desenvolvido para atender necessidades
                particulares da prática assistencial, fornecendo medidas objetivas e padronizadas para condições ou
                situações que requerem avaliação especializada. A utilização adequada dessas escalas permite
                identificação precoce de riscos, monitoramento de condições específicas, orientação de intervenções
                terapêuticas e avaliação de resultados, contribuindo significativamente para a qualidade e segurança do
                cuidado prestado.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
