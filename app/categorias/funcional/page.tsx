import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Activity, ChevronRight, Users, Heart, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function FuncionalPage() {
  const functionalScales = [
    {
      id: "katz",
      name: "Índice de Katz",
      description:
        "Instrumento amplamente utilizado para avaliação da capacidade funcional em atividades básicas de vida diária, incluindo banho, vestir-se, uso do banheiro, transferência, continência e alimentação.",
      population: "Idosos e adultos",
      icon: Activity,
      href: "/escalas/katz",
    },
    {
      id: "barthel",
      name: "Índice de Barthel",
      description:
        "Escala que avalia a independência funcional em dez atividades básicas de vida diária, fornecendo uma medida quantitativa do grau de dependência do paciente.",
      population: "Adultos e idosos",
      icon: Activity,
      href: "/escalas/barthel",
    },
    {
      id: "mif",
      name: "Medida de Independência Funcional",
      description:
        "Instrumento abrangente que avalia a independência funcional em atividades motoras e cognitivas, amplamente utilizado em reabilitação para monitorar progresso e planejar cuidados.",
      population: "Pacientes em reabilitação",
      icon: Activity,
      href: "/escalas/mif",
    },
  ]

  const contextGroups = [
    {
      title: "Atividades Básicas de Vida Diária",
      description: "Escalas para avaliação da independência em atividades essenciais do cotidiano",
      scales: functionalScales.filter((scale) => scale.id === "katz" || scale.id === "barthel"),
      gradient: "from-green-50 to-emerald-50",
      iconColor: "text-green-600",
      borderColor: "border-green-200",
    },
    {
      title: "Reabilitação e Recuperação",
      description: "Ferramentas especializadas para monitoramento do progresso em reabilitação",
      scales: functionalScales.filter((scale) => scale.id === "mif"),
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
              <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border-2 border-green-200">
                <Activity className="h-12 w-12 text-green-600" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Escalas de Avaliação Funcional</h1>
            <p className="text-lg text-muted-foreground max-w-5xl mx-auto leading-relaxed">
              As escalas de avaliação funcional são instrumentos fundamentais na prática de enfermagem para mensurar a
              capacidade de independência dos pacientes nas atividades de vida diária. Estas ferramentas permitem uma
              avaliação objetiva e padronizada do grau de dependência, orientando o planejamento de cuidados
              individualizados, a definição de metas terapêuticas e o monitoramento da evolução funcional ao longo do
              tempo. A avaliação funcional é especialmente importante em pacientes idosos, em processo de reabilitação
              ou com condições crônicas que possam impactar a autonomia e independência nas atividades cotidianas.
            </p>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12 animate-slide-up">Escalas por Contexto de Aplicação</h2>
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
            <h2 className="text-3xl font-bold text-center mb-12 animate-slide-up">Todas as Escalas Funcionais</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {functionalScales.map((scale, index) => (
                <Card
                  key={scale.id}
                  className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-green-200 bg-gradient-to-br from-green-50 to-emerald-50 animate-scale-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <CardHeader>
                    <div className="flex items-start gap-3">
                      <div className="p-3 bg-white/80 rounded-xl shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <scale.icon className="h-6 w-6 text-green-600" />
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
                <h3 className="text-3xl font-bold mb-6">Importância Clínica da Avaliação Funcional</h3>
                <p className="text-muted-foreground leading-relaxed mb-10 text-lg">
                  A avaliação funcional sistemática representa um componente essencial do cuidado de enfermagem,
                  especialmente em populações vulneráveis como idosos, pacientes em reabilitação e portadores de
                  condições crônicas. Estas escalas fornecem uma medida objetiva e padronizada da capacidade de
                  independência nas atividades de vida diária, permitindo identificar áreas de déficit funcional,
                  monitorar a evolução do paciente ao longo do tempo e avaliar a eficácia das intervenções
                  implementadas.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Activity className="h-10 w-10 text-primary" />
                    </div>
                    <h4 className="font-semibold text-lg mb-2">Independência Funcional</h4>
                    <p className="text-muted-foreground">Avaliação objetiva da autonomia</p>
                  </div>
                  <div className="text-center">
                    <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Users className="h-10 w-10 text-primary" />
                    </div>
                    <h4 className="font-semibold text-lg mb-2">Planejamento de Cuidados</h4>
                    <p className="text-muted-foreground">Intervenções individualizadas</p>
                  </div>
                  <div className="text-center">
                    <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Heart className="h-10 w-10 text-primary" />
                    </div>
                    <h4 className="font-semibold text-lg mb-2">Qualidade de Vida</h4>
                    <p className="text-muted-foreground">Manutenção da dignidade e autonomia</p>
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
