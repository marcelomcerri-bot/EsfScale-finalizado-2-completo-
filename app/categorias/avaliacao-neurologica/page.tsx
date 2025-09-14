import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Brain, ChevronRight, Users, Eye, MessageSquare, Activity, Zap, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function AvaliacaoNeurologicaPage() {
  const neurologicalScales = [
    {
      id: "glasgow",
      name: "Escala de Coma de Glasgow",
      description:
        "Escala padrão-ouro para avaliação do nível de consciência em pacientes com alterações neurológicas, avaliando abertura ocular, resposta verbal e resposta motora de forma sistemática e objetiva.",
      population: "Adultos com alterações neurológicas",
      icon: Brain,
      href: "/escalas/glasgow",
    },
    {
      id: "glasgow-pediatrica",
      name: "Escala de Coma de Glasgow Pediátrica",
      description:
        "Adaptação da ECG para avaliação neurológica em crianças e lactentes, considerando as particularidades do desenvolvimento neurológico infantil e adaptando as respostas verbais conforme a idade.",
      population: "Crianças e lactentes",
      icon: Eye,
      href: "/escalas/glasgow-pediatrica",
    },
    {
      id: "ramsay",
      name: "Escala de Ramsay",
      description:
        "Escala para avaliação do nível de sedação em pacientes críticos, permitindo monitorização adequada da profundidade da sedação e ajuste de medicações sedativas conforme necessário.",
      population: "Pacientes sedados em UTI",
      icon: MessageSquare,
      href: "/escalas/ramsay",
    },
    {
      id: "rass",
      name: "Escala de RASS",
      description:
        "Richmond Agitation-Sedation Scale para avaliação de agitação e sedação, fornecendo uma medida padronizada do nível de consciência e agitação em pacientes críticos.",
      population: "Pacientes críticos",
      icon: Activity,
      href: "/escalas/rass",
    },
    {
      id: "hunt-hess",
      name: "Escala de Hunt e Hess",
      description:
        "Classificação da gravidade de hemorragia subaracnóidea baseada em sintomas clínicos e estado neurológico, fundamental para estratificação de risco e prognóstico.",
      population: "Pacientes com hemorragia subaracnóidea",
      icon: Zap,
      href: "/escalas/hunt-hess",
    },
  ]

  const contextGroups = [
    {
      title: "Avaliação de Consciência",
      description: "Escalas para avaliação do nível de consciência e função neurológica geral",
      scales: neurologicalScales.filter((scale) => scale.id === "glasgow" || scale.id === "glasgow-pediatrica"),
      gradient: "from-blue-50 to-indigo-50",
      iconColor: "text-blue-600",
      borderColor: "border-blue-200",
    },
    {
      title: "Sedação e Agitação",
      description: "Ferramentas para monitorização de sedação e agitação em pacientes críticos",
      scales: neurologicalScales.filter((scale) => scale.id === "ramsay" || scale.id === "rass"),
      gradient: "from-green-50 to-emerald-50",
      iconColor: "text-green-600",
      borderColor: "border-green-200",
    },
    {
      title: "Condições Específicas",
      description: "Escalas especializadas para condições neurológicas específicas",
      scales: neurologicalScales.filter((scale) => scale.id === "hunt-hess"),
      gradient: "from-red-50 to-orange-50",
      iconColor: "text-red-600",
      borderColor: "border-red-200",
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
              <div className="p-6 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl border-2 border-purple-200">
                <Brain className="h-12 w-12 text-purple-600" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Escalas de Avaliação Neurológica</h1>
            <p className="text-lg text-muted-foreground max-w-5xl mx-auto leading-relaxed">
              As escalas de avaliação neurológica são ferramentas fundamentais para monitorização do estado de
              consciência, nível de sedação e função neurológica em pacientes críticos. Estas escalas permitem avaliação
              objetiva e padronizada de parâmetros neurológicos, facilitando a comunicação entre profissionais,
              orientando decisões terapêuticas e permitindo acompanhamento da evolução clínica. A aplicação adequada
              dessas escalas é essencial para identificação precoce de deterioração neurológica, ajuste de sedação em
              pacientes críticos e estratificação de risco em condições neurológicas graves.
            </p>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12 animate-slide-up">Escalas por Contexto Clínico</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
            <h2 className="text-3xl font-bold text-center mb-12 animate-slide-up">Todas as Escalas Neurológicas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {neurologicalScales.map((scale, index) => (
                <Card
                  key={scale.id}
                  className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-indigo-50 animate-scale-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <CardHeader>
                    <div className="flex items-start gap-3">
                      <div className="p-3 bg-white/80 rounded-xl shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <scale.icon className="h-6 w-6 text-purple-600" />
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
                <h3 className="text-3xl font-bold mb-6">Importância Clínica da Avaliação Neurológica</h3>
                <p className="text-muted-foreground leading-relaxed mb-10 text-lg">
                  A avaliação neurológica sistemática através de escalas padronizadas representa um pilar fundamental no
                  cuidado de pacientes com alterações do sistema nervoso central. Estas ferramentas proporcionam uma
                  linguagem comum entre profissionais de saúde, permitindo comunicação precisa sobre o estado
                  neurológico do paciente e facilitando a continuidade do cuidado entre diferentes turnos e equipes.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Brain className="h-10 w-10 text-primary" />
                    </div>
                    <h4 className="font-semibold text-lg mb-2">Monitorização Contínua</h4>
                    <p className="text-muted-foreground">Acompanhamento da evolução neurológica</p>
                  </div>
                  <div className="text-center">
                    <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Users className="h-10 w-10 text-primary" />
                    </div>
                    <h4 className="font-semibold text-lg mb-2">Comunicação Efetiva</h4>
                    <p className="text-muted-foreground">Linguagem padronizada entre equipes</p>
                  </div>
                  <div className="text-center">
                    <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Activity className="h-10 w-10 text-primary" />
                    </div>
                    <h4 className="font-semibold text-lg mb-2">Decisões Terapêuticas</h4>
                    <p className="text-muted-foreground">Orientação baseada em evidências</p>
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
