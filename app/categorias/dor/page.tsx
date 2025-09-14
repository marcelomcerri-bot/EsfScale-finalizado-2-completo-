import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Heart, ChevronRight, Users, Baby, Stethoscope, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function PainScalesPage() {
  const painScales = [
    {
      id: "eva",
      name: "Escala Visual Analógica (EVA)",
      description:
        "Ferramenta fundamental para avaliação subjetiva da intensidade da dor através de uma linha visual contínua, amplamente utilizada em adultos conscientes e capazes de expressar verbalmente sua experiência dolorosa.",
      population: "Adultos e adolescentes",
      icon: Heart,
      href: "/escalas/eva",
    },
    {
      id: "escala-numerica-dor",
      name: "Escala Numérica de Dor",
      description:
        "Instrumento simples e eficaz que utiliza números de 0 a 10 para quantificar a intensidade da dor, sendo especialmente útil para pacientes que compreendem conceitos numéricos e podem verbalizar sua experiência.",
      population: "Adultos e crianças acima de 8 anos",
      icon: Heart,
      href: "/escalas/escala-numerica-dor",
    },
    {
      id: "wong-baker",
      name: "Escala de Faces de Wong-Baker",
      description:
        "Escala visual desenvolvida especificamente para população pediátrica, utilizando expressões faciais que variam de feliz a muito triste para representar diferentes níveis de dor, facilitando a comunicação com crianças.",
      population: "Crianças de 3 a 18 anos",
      icon: Baby,
      href: "/escalas/wong-baker",
    },
    {
      id: "flacc",
      name: "Escala FLACC",
      description:
        "Ferramenta comportamental que avalia a dor através da observação de cinco parâmetros: Face, Pernas, Atividade, Choro e Consolabilidade, especialmente desenvolvida para crianças que não conseguem verbalizar sua dor.",
      population: "Crianças de 2 meses a 7 anos",
      icon: Baby,
      href: "/escalas/flacc",
    },
    {
      id: "faces-criancas",
      name: "Escala de Faces de Dor para Crianças",
      description:
        "Instrumento visual que utiliza diferentes expressões faciais para permitir que crianças identifiquem e comuniquem sua intensidade de dor, adaptado especificamente para o desenvolvimento cognitivo infantil.",
      population: "Crianças de 4 a 12 anos",
      icon: Baby,
      href: "/escalas/faces-criancas",
    },
    {
      id: "cries",
      name: "Escala CRIES",
      description:
        "Ferramenta especializada para avaliação da dor em neonatos e lactentes, baseada na observação de parâmetros fisiológicos e comportamentais específicos desta população vulnerável.",
      population: "Neonatos e lactentes até 6 meses",
      icon: Baby,
      href: "/escalas/cries",
    },
    {
      id: "oucher",
      name: "Escala de Oucher",
      description:
        "Instrumento duplo que combina escala visual com fotografias de crianças expressando dor e escala numérica, oferecendo flexibilidade na avaliação conforme o desenvolvimento cognitivo da criança.",
      population: "Crianças de 3 a 12 anos",
      icon: Baby,
      href: "/escalas/oucher",
    },
    {
      id: "behavioral-pain-scale",
      name: "Behavioral Pain Scale (BPS)",
      description:
        "Escala comportamental desenvolvida especificamente para avaliação da dor em pacientes críticos sedados e sob ventilação mecânica, quando a comunicação verbal não é possível.",
      population: "Pacientes críticos sedados",
      icon: Stethoscope,
      href: "/escalas/behavioral-pain-scale",
    },
    {
      id: "cpot",
      name: "Critical-Care Pain Observation Tool (CPOT)",
      description:
        "Ferramenta observacional validada para avaliação da dor em pacientes de cuidados intensivos, tanto conscientes quanto inconscientes, fornecendo uma abordagem sistemática para o manejo da dor em ambiente crítico.",
      population: "Pacientes de UTI",
      icon: Stethoscope,
      href: "/escalas/cpot",
    },
  ]

  const ageGroups = [
    {
      title: "Neonatos e Lactentes",
      description: "Escalas especializadas para avaliação da dor em recém-nascidos e bebês até 6 meses",
      scales: painScales.filter(
        (scale) => scale.population.includes("Neonatos") || scale.population.includes("lactentes"),
      ),
      gradient: "from-pink-50 to-rose-50",
      iconColor: "text-pink-600",
      borderColor: "border-pink-200",
    },
    {
      title: "Crianças",
      description: "Instrumentos adaptados para diferentes faixas etárias pediátricas",
      scales: painScales.filter((scale) => scale.population.includes("Crianças")),
      gradient: "from-blue-50 to-indigo-50",
      iconColor: "text-blue-600",
      borderColor: "border-blue-200",
    },
    {
      title: "Adultos",
      description: "Escalas para população adulta consciente e capaz de comunicação verbal",
      scales: painScales.filter((scale) => scale.population.includes("Adultos")),
      gradient: "from-green-50 to-emerald-50",
      iconColor: "text-green-600",
      borderColor: "border-green-200",
    },
    {
      title: "Pacientes Críticos",
      description: "Ferramentas para avaliação em ambiente de cuidados intensivos",
      scales: painScales.filter((scale) => scale.population.includes("críticos") || scale.population.includes("UTI")),
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
              <div className="p-6 bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl border-2 border-red-200">
                <Heart className="h-12 w-12 text-red-600" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Escalas de Avaliação da Dor</h1>
            <p className="text-lg text-muted-foreground max-w-5xl mx-auto leading-relaxed">
              A avaliação adequada da dor é fundamental para o cuidado de enfermagem de qualidade. A dor, considerada o
              quinto sinal vital, requer instrumentos validados e específicos para cada população e contexto clínico. As
              escalas de dor permitem a quantificação objetiva de uma experiência subjetiva, facilitando o planejamento
              de intervenções terapêuticas eficazes e o monitoramento da resposta ao tratamento.
            </p>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12 animate-slide-up">
              Escalas por Faixa Etária e Contexto
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {ageGroups.map((group, index) => (
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
            <h2 className="text-3xl font-bold text-center mb-12 animate-slide-up">Todas as Escalas de Dor</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {painScales.map((scale, index) => (
                <Card
                  key={scale.id}
                  className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-red-200 bg-gradient-to-br from-red-50 to-pink-50 animate-scale-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <CardHeader>
                    <div className="flex items-start gap-3">
                      <div className="p-3 bg-white/80 rounded-xl shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <scale.icon className="h-6 w-6 text-red-600" />
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
                <h3 className="text-3xl font-bold mb-6">Importância Clínica da Avaliação da Dor</h3>
                <p className="text-muted-foreground leading-relaxed mb-10 text-lg">
                  A avaliação sistemática da dor utilizando escalas validadas é essencial para garantir o cuidado
                  humanizado e baseado em evidências. A documentação adequada da dor permite o acompanhamento da
                  evolução do quadro clínico, a eficácia das intervenções implementadas e a comunicação efetiva entre a
                  equipe multiprofissional.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Heart className="h-10 w-10 text-primary" />
                    </div>
                    <h4 className="font-semibold text-lg mb-2">Cuidado Humanizado</h4>
                    <p className="text-muted-foreground">Reconhecimento e alívio do sofrimento</p>
                  </div>
                  <div className="text-center">
                    <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Users className="h-10 w-10 text-primary" />
                    </div>
                    <h4 className="font-semibold text-lg mb-2">Comunicação Efetiva</h4>
                    <p className="text-muted-foreground">Linguagem comum entre profissionais</p>
                  </div>
                  <div className="text-center">
                    <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Stethoscope className="h-10 w-10 text-primary" />
                    </div>
                    <h4 className="font-semibold text-lg mb-2">Qualidade Assistencial</h4>
                    <p className="text-muted-foreground">Intervenções baseadas em evidências</p>
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
