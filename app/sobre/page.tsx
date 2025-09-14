import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Users, Award, Target } from "lucide-react"

export default function AboutPage() {
  const features = [
    {
      icon: BookOpen,
      title: "Conteúdo Científico",
      description:
        "Todas as escalas são baseadas em evidências científicas e seguem diretrizes oficiais do COFEN, COREN e Ministério da Saúde.",
    },
    {
      icon: Users,
      title: "Para Todos os Profissionais",
      description:
        "Desenvolvido para estudantes de enfermagem, enfermeiros assistenciais, professores e pesquisadores.",
    },
    {
      icon: Award,
      title: "Referências Validadas",
      description:
        "Cada escala inclui referências oficiais, protocolos institucionais e literatura científica atualizada.",
    },
    {
      icon: Target,
      title: "Aplicação Prática",
      description: "Exemplos detalhados de evolução de enfermagem e aplicação clínica para cada escala apresentada.",
    },
  ]

  const objectives = [
    "Centralizar informações sobre escalas de avaliação de enfermagem utilizadas no Brasil",
    "Fornecer referências científicas e oficiais para cada instrumento de avaliação",
    "Apresentar exemplos práticos de aplicação clínica e registro em prontuário",
    "Facilitar o acesso a ferramentas de avaliação para profissionais e estudantes",
    "Promover a padronização e qualidade dos registros de enfermagem",
    "Contribuir para a melhoria da assistência de enfermagem baseada em evidências",
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-primary"
                >
                  <path d="M16 4L14 8H18L16 4Z" fill="currentColor" />
                  <path d="M14 8H18V12H14V8Z" fill="currentColor" />
                  <path
                    d="M12 12H20V20C20 22.2091 18.2091 24 16 24C13.7909 24 12 22.2091 12 20V12Z"
                    fill="currentColor"
                  />
                  <path d="M10 24H22V26H10V24Z" fill="currentColor" />
                  <circle cx="16" cy="16" r="3" fill="#fbbf24" className="animate-pulse" />
                </svg>
                <div className="absolute -inset-4 bg-accent/20 rounded-full blur-xl"></div>
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Sobre o EnfScale</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Uma ferramenta completa de referência para escalas de avaliação de enfermagem, desenvolvida
              especificamente para profissionais de enfermagem no Brasil.
            </p>
          </div>

          {/* Features Section */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Características do EnfScale</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {features.map((feature) => (
                <Card key={feature.title} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <feature.icon className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{feature.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Objectives Section */}
          <div className="mb-16">
            <Card className="max-w-4xl mx-auto">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-accent/10 rounded-full">
                    <Target className="h-8 w-8 text-accent" />
                  </div>
                </div>
                <CardTitle className="text-2xl">Objetivos do Projeto</CardTitle>
                <CardDescription className="text-base">
                  O EnfScale foi desenvolvido com objetivos claros e específicos para a comunidade de enfermagem
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {objectives.map((objective, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-xs font-semibold text-primary">{index + 1}</span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{objective}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Authors Section */}
          <div className="mb-16">
            <Card className="max-w-4xl mx-auto">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Autores do Projeto</CardTitle>
                <CardDescription className="text-base">
                  Acadêmicos de enfermagem dedicados ao desenvolvimento da enfermagem brasileira
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="text-center space-y-2">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                      <Users className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">Marcelo Marques Cerri</h3>
                    <p className="text-muted-foreground">
                      Acadêmico de enfermagem com contribuição fundamental para o desenvolvimento e estruturação do
                      conteúdo científico do EnfScale
                    </p>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                      <Users className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">Beatriz Sodré dos Santos</h3>
                    <p className="text-muted-foreground">
                      Acadêmica de enfermagem com participação essencial na concepção e desenvolvimento do projeto
                      EnfScale
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Section */}
          <div className="text-center">
            <Card className="max-w-2xl mx-auto bg-muted/30">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Compromisso com a Qualidade</h3>
                <p className="text-muted-foreground leading-relaxed">
                  O EnfScale é um projeto em constante evolução, comprometido com a atualização contínua das informações
                  e a incorporação de novas escalas validadas para a prática de enfermagem no Brasil. Nosso objetivo é
                  manter sempre a mais alta qualidade científica e relevância clínica.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
