import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronRight, Heart, Shield, Brain, Activity, Stethoscope, Plus, Syringe } from "lucide-react"
import Link from "next/link"

export default function CategoriesPage() {
  const categories = [
    {
      title: "Escalas de Avaliação da Dor",
      description:
        "Ferramentas essenciais para mensuração e avaliação da dor em diferentes populações, desde neonatos até adultos. Incluem escalas visuais, numéricas e comportamentais para uma avaliação precisa e individualizada da experiência dolorosa.",
      icon: Heart,
      count: "9 escalas",
      href: "/categorias/dor",
      gradient: "from-red-50 to-pink-50",
      iconColor: "text-red-600",
      borderColor: "border-red-200",
      scales: [
        "Escala Visual Analógica (EVA)",
        "Escala Numérica de Dor",
        "Escala de Faces de Wong-Baker",
        "Escala FLACC",
        "Escala CRIES",
        "Behavioral Pain Scale (BPS)",
        "Critical-Care Pain Observation Tool (CPOT)",
      ],
    },
    {
      title: "Escalas de Risco de Quedas",
      description:
        "Instrumentos fundamentais para identificação precoce de pacientes com risco elevado de quedas. Essas escalas avaliam múltiplos fatores de risco e orientam a implementação de medidas preventivas específicas.",
      icon: Shield,
      count: "3 escalas",
      href: "/categorias/risco-quedas",
      gradient: "from-orange-50 to-amber-50",
      iconColor: "text-orange-600",
      borderColor: "border-orange-200",
      scales: ["Escala de Morse", "Escala de Downton", "Escala de Hendrich II"],
    },
    {
      title: "Escalas de Risco de Úlcera por Pressão",
      description:
        "Ferramentas especializadas para avaliação do risco de desenvolvimento de lesões por pressão. Consideram fatores como mobilidade, nutrição, umidade e perfusão tecidual para prevenção eficaz.",
      icon: Activity,
      count: "5 escalas",
      href: "/categorias/ulcera-pressao",
      gradient: "from-blue-50 to-cyan-50",
      iconColor: "text-blue-600",
      borderColor: "border-blue-200",
      scales: ["Escala de Braden", "Escala de Norton", "Escala de Waterlow", "Escala de Braden Q", "Escala de PUSAP"],
    },
    {
      title: "Escalas de Avaliação Neurológica",
      description:
        "Instrumentos padronizados para avaliação do estado neurológico, nível de consciência e sedação. Fundamentais para monitoramento de pacientes críticos e neurológicos.",
      icon: Brain,
      count: "5 escalas",
      href: "/categorias/avaliacao-neurologica",
      gradient: "from-purple-50 to-indigo-50",
      iconColor: "text-purple-600",
      borderColor: "border-purple-200",
      scales: [
        "Escala de Coma de Glasgow",
        "Escala de Glasgow Modificada para Crianças",
        "Escala de Ramsay",
        "Escala de RASS",
        "Escala de Hunt e Hess",
      ],
    },
    {
      title: "Escalas de Avaliação Funcional",
      description:
        "Medidas padronizadas para avaliação da capacidade funcional e independência nas atividades de vida diária. Essenciais para planejamento de cuidados e reabilitação.",
      icon: Stethoscope,
      count: "3 escalas",
      href: "/categorias/funcional",
      gradient: "from-green-50 to-emerald-50",
      iconColor: "text-green-600",
      borderColor: "border-green-200",
      scales: ["Índice de Katz", "Índice de Barthel", "Medida de Independência Funcional (MIF)"],
    },
    {
      title: "Infusões Medicamentosas - Oncologia HUAP",
      description:
        "Protocolos de quimioterapia e medicamentos oncológicos utilizados no Hospital Universitário Antonio Pedro. Inclui cuidados de enfermagem específicos, tempos de infusão e precauções para cada medicamento.",
      icon: Syringe,
      count: "32 medicamentos",
      href: "/categorias/infusoes-medicamentosas",
      gradient: "from-cyan-50 to-blue-50",
      iconColor: "text-cyan-600",
      borderColor: "border-cyan-200",
      scales: [
        "Cisplatina (CDDP)",
        "Doxorrubicina (DOXO)",
        "Paclitaxel (TAXOL®)",
        "Carboplatina (CBP)",
        "Ciclofosfamida (CTX)",
        "Gemcitabina (GEMZAR®)",
        "Oxaliplatina (L-OHP)",
      ],
    },
    {
      title: "Outras Escalas Especializadas",
      description:
        "Conjunto diversificado de escalas para avaliações específicas incluindo nutrição, depressão pós-parto, função cardíaca, avaliação neonatal e recuperação pós-anestésica.",
      icon: Plus,
      count: "8 escalas",
      href: "/categorias/outras",
      gradient: "from-gray-50 to-slate-50",
      iconColor: "text-gray-600",
      borderColor: "border-gray-200",
      scales: [
        "Mini Avaliação Nutricional (MAN)",
        "Escala de Edimburgo",
        "Escala de Borg",
        "Escala de NYHA",
        "Escala de Apgar",
        "Escala de Aldrete e Kroulik",
      ],
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Categorias de Escalas</h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
              Explore nossa coleção completa de escalas de avaliação de enfermagem organizadas por área de aplicação
              clínica. Cada categoria contém escalas validadas e amplamente utilizadas na prática assistencial
              brasileira.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-7xl mx-auto">
            {categories.map((category, index) => (
              <Card
                key={category.title}
                className={`group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 ${category.borderColor} bg-gradient-to-br ${category.gradient} animate-scale-in`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="pb-3 sm:pb-4">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div
                      className={`p-3 sm:p-4 rounded-lg sm:rounded-xl bg-white/80 ${category.iconColor} shrink-0 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <category.icon className="h-6 w-6 sm:h-7 sm:w-7" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-2 sm:mb-3">
                        <CardTitle className="text-lg sm:text-xl group-hover:text-primary transition-colors duration-300">
                          {category.title}
                        </CardTitle>
                        <Badge
                          variant="secondary"
                          className="bg-white/80 text-gray-700 font-semibold text-xs sm:text-sm"
                        >
                          {category.count}
                        </Badge>
                      </div>
                      <CardDescription className="text-sm sm:text-base leading-relaxed text-gray-600">
                        {category.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4 sm:space-y-6">
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold text-gray-700 mb-2 sm:mb-3">Principais escalas:</h4>
                    <div className="space-y-1 sm:space-y-2">
                      {category.scales.slice(0, 4).map((scale) => (
                        <div key={scale} className="text-xs sm:text-sm text-gray-700 flex items-center group/item">
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full mr-2 sm:mr-3 shrink-0 group-hover/item:scale-125 transition-transform"></div>
                          <span className="group-hover/item:text-primary transition-colors">{scale}</span>
                        </div>
                      ))}
                      {category.scales.length > 4 && (
                        <div className="text-xs sm:text-sm text-gray-500 font-medium">
                          + {category.scales.length - 4} outras escalas
                        </div>
                      )}
                    </div>
                  </div>

                  <Button
                    asChild
                    className="w-full shadow-md hover:shadow-lg transition-all duration-300 text-sm sm:text-base"
                  >
                    <Link href={category.href}>
                      Explorar Categoria
                      <ChevronRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 sm:mt-20 text-center animate-slide-up">
            <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-primary/10 max-w-5xl mx-auto">
              <CardContent className="pt-8 sm:pt-10 pb-8 sm:pb-10 px-4 sm:px-6">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Sobre as Escalas</h2>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-lg">
                  Todas as escalas apresentadas no EnfScale seguem as diretrizes do Conselho Federal de Enfermagem
                  (COFEN), Conselhos Regionais de Enfermagem (COREN) e protocolos do Ministério da Saúde. Cada escala
                  inclui informações detalhadas sobre aplicação, interpretação de resultados e exemplos práticos de
                  evolução de enfermagem.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mt-6 sm:mt-8">
                  <div className="text-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-2 sm:mb-3">
                      <Heart className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2">Prática Clínica</h3>
                    <p className="text-muted-foreground text-xs sm:text-sm">Escalas utilizadas na assistência</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-2 sm:mb-3">
                      <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2">Diretrizes Oficiais</h3>
                    <p className="text-muted-foreground text-xs sm:text-sm">Seguindo protocolos COFEN e COREN</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-2 sm:mb-3">
                      <Brain className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2">Aplicação Prática</h3>
                    <p className="text-muted-foreground text-xs sm:text-sm">Exemplos e interpretações detalhadas</p>
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
