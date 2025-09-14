import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Shield, ChevronRight, Users, AlertTriangle, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function RiscoQuedasPage() {
  const fallRiskScales = [
    {
      id: "morse",
      name: "Escala de Morse",
      description:
        "Escala amplamente utilizada para avaliação do risco de quedas em pacientes hospitalizados, considerando fatores como histórico de quedas, diagnóstico secundário, auxílio na deambulação, terapia endovenosa, marcha e estado mental.",
      population: "Adultos hospitalizados",
      icon: Shield,
      href: "/escalas/morse",
    },
    {
      id: "downton",
      name: "Escala de Downton",
      description:
        "Instrumento de avaliação do risco de quedas que considera quedas prévias, medicamentos, déficits sensoriais, estado mental e capacidade de deambulação, sendo especialmente útil em pacientes idosos.",
      population: "Idosos e adultos",
      icon: Shield,
      href: "/escalas/downton",
    },
    {
      id: "hendrich",
      name: "Escala de Hendrich II",
      description:
        "Modelo de avaliação de risco de quedas que utiliza oito fatores de risco independentes, incluindo confusão, depressão, alteração da eliminação, tontura, sexo masculino, medicamentos antiepilépticos, benzodiazepínicos e capacidade de se levantar.",
      population: "Adultos hospitalizados",
      icon: Shield,
      href: "/escalas/hendrich",
    },
  ]

  const contextGroups = [
    {
      title: "Ambiente Hospitalar",
      description: "Escalas desenvolvidas especificamente para pacientes hospitalizados",
      scales: fallRiskScales.filter((scale) => scale.population.includes("hospitalizados")),
      gradient: "from-orange-50 to-amber-50",
      iconColor: "text-orange-600",
      borderColor: "border-orange-200",
    },
    {
      title: "População Idosa",
      description: "Ferramentas especializadas para avaliação de risco em idosos",
      scales: fallRiskScales.filter((scale) => scale.population.includes("Idosos")),
      gradient: "from-blue-50 to-cyan-50",
      iconColor: "text-blue-600",
      borderColor: "border-blue-200",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Button asChild variant="ghost" className="mb-4 -ml-4">
              <Link href="/categorias">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar às Categorias
              </Link>
            </Button>
          </div>

          <div className="text-center mb-16 animate-fade-in">
            <div className="flex justify-center mb-6">
              <div className="p-6 bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl border-2 border-orange-200">
                <Shield className="h-12 w-12 text-orange-600" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Escalas de Risco de Quedas</h1>
            <p className="text-lg text-muted-foreground max-w-5xl mx-auto leading-relaxed">
              As escalas de avaliação do risco de quedas são instrumentos fundamentais na prática de enfermagem para
              identificar pacientes com maior probabilidade de sofrer quedas durante a hospitalização ou em outros
              ambientes de cuidado. Estas ferramentas permitem a implementação de medidas preventivas específicas e
              individualizadas, contribuindo significativamente para a segurança do paciente e a redução de eventos
              adversos. A avaliação sistemática do risco de quedas deve ser realizada na admissão do paciente e
              reavaliada periodicamente ou sempre que houver mudanças no estado clínico.
            </p>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12 animate-slide-up">Escalas por População e Contexto</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {contextGroups.map((group, index) => (
                <Card
                  key={group.title}
                  className={`hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border-2 ${group.borderColor} bg-gradient-to-br ${group.gradient} animate-scale-in`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl">{group.title}</CardTitle>
                      <Badge variant="secondary" className="bg-white/80 text-gray-700 font-semibold">
                        {group.scales.length} escalas
                      </Badge>
                    </div>
                    <CardDescription className="text-base text-gray-600">{group.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {group.scales.map((scale) => (
                        <div
                          key={scale.id}
                          className="flex items-center gap-3 p-4 rounded-xl bg-white/60 hover:bg-white/80 transition-all duration-300 group/item"
                        >
                          <scale.icon className="h-5 w-5 text-primary shrink-0 group-hover/item:scale-110 transition-transform" />
                          <div className="flex-1 min-w-0">
                            <h4 className="font-medium text-sm group-hover/item:text-primary transition-colors">
                              {scale.name}
                            </h4>
                            <p className="text-xs text-muted-foreground">{scale.population}</p>
                          </div>
                          <Button
                            asChild
                            variant="ghost"
                            size="sm"
                            className="opacity-0 group-hover/item:opacity-100 transition-opacity"
                          >
                            <Link href={scale.href}>
                              <ChevronRight className="h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12 animate-slide-up">
              Todas as Escalas de Risco de Quedas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {fallRiskScales.map((scale, index) => (
                <Card
                  key={scale.id}
                  className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-orange-200 bg-gradient-to-br from-orange-50 to-amber-50 animate-scale-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <CardHeader>
                    <div className="flex items-start gap-3">
                      <div className="p-3 bg-white/80 rounded-xl shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <scale.icon className="h-6 w-6 text-orange-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300 line-clamp-2">
                          {scale.name}
                        </CardTitle>
                        <Badge variant="outline" className="mt-2 text-xs bg-white/60">
                          {scale.population}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm leading-relaxed mb-6 line-clamp-4 text-gray-600">
                      {scale.description}
                    </CardDescription>
                    <Button asChild className="w-full shadow-md hover:shadow-lg transition-all duration-300">
                      <Link href={scale.href}>
                        Ver Detalhes Completos
                        <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="text-center animate-slide-up">
            <Card className="max-w-5xl mx-auto bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-primary/10">
              <CardContent className="pt-12 pb-12">
                <h3 className="text-3xl font-bold mb-6">Importância Clínica da Avaliação do Risco de Quedas</h3>
                <p className="text-muted-foreground leading-relaxed mb-10 text-lg">
                  A avaliação sistemática do risco de quedas representa uma das principais estratégias de segurança do
                  paciente em ambientes hospitalares e de cuidados de longa duração. As quedas constituem um dos eventos
                  adversos mais frequentes em instituições de saúde, podendo resultar em lesões graves, aumento do tempo
                  de internação, elevação dos custos assistenciais e impacto negativo na qualidade de vida dos
                  pacientes. A implementação de escalas de avaliação padronizadas permite identificar precocemente os
                  pacientes em risco, possibilitando a adoção de medidas preventivas específicas e eficazes.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Shield className="h-10 w-10 text-primary" />
                    </div>
                    <h4 className="font-semibold text-lg mb-2">Prevenção de Eventos</h4>
                    <p className="text-muted-foreground">Identificação precoce de riscos</p>
                  </div>
                  <div className="text-center">
                    <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Users className="h-10 w-10 text-primary" />
                    </div>
                    <h4 className="font-semibold text-lg mb-2">Segurança do Paciente</h4>
                    <p className="text-muted-foreground">Medidas preventivas eficazes</p>
                  </div>
                  <div className="text-center">
                    <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <AlertTriangle className="h-10 w-10 text-primary" />
                    </div>
                    <h4 className="font-semibold text-lg mb-2">Redução de Custos</h4>
                    <p className="text-muted-foreground">Prevenção de complicações</p>
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
