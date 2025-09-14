import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Activity, ArrowLeft, Info, Users, Target, Brain, Zap } from "lucide-react"
import Link from "next/link"

export default function MIFPage() {
  const mifDomains = [
    {
      domain: "Autocuidado",
      items: [
        "Alimentação",
        "Cuidados pessoais",
        "Banho",
        "Vestir metade superior do corpo",
        "Vestir metade inferior do corpo",
        "Uso do banheiro",
      ],
    },
    {
      domain: "Controle de Esfíncteres",
      items: ["Controle da bexiga", "Controle do intestino"],
    },
    {
      domain: "Transferências",
      items: [
        "Transferência leito/cadeira/cadeira de rodas",
        "Transferência para o banheiro",
        "Transferência para banheira/chuveiro",
      ],
    },
    {
      domain: "Locomoção",
      items: ["Marcha/cadeira de rodas", "Escadas"],
    },
    {
      domain: "Comunicação",
      items: ["Compreensão", "Expressão"],
    },
    {
      domain: "Cognição Social",
      items: ["Interação social", "Resolução de problemas", "Memória"],
    },
  ]

  const scoreLevels = [
    {
      level: 7,
      description: "Independência completa",
      detail:
        "Todas as tarefas são realizadas de forma segura, sem modificação, dispositivos auxiliares ou ajuda, dentro de tempo razoável",
    },
    {
      level: 6,
      description: "Independência modificada",
      detail:
        "Uma ou mais das seguintes pode ser verdadeira: dispositivo auxiliar é usado, leva mais que tempo razoável, há considerações de segurança",
    },
    {
      level: 5,
      description: "Supervisão ou preparação",
      detail:
        "Sujeito requer supervisão (ex: permanência, orientação ou encorajamento) ou preparação (ex: aplicação de órtese)",
    },
    { level: 4, description: "Ajuda mínima", detail: "Sujeito realiza ≥75% da tarefa" },
    { level: 3, description: "Ajuda moderada", detail: "Sujeito realiza 50-74% da tarefa" },
    { level: 2, description: "Ajuda máxima", detail: "Sujeito realiza 25-49% da tarefa" },
    { level: 1, description: "Ajuda total", detail: "Sujeito realiza <25% da tarefa" },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Button asChild variant="ghost" className="mb-4 -ml-4">
              <Link href="/categorias/funcional">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar às Escalas Funcionais
              </Link>
            </Button>
          </div>

          <div className="text-center mb-16 animate-fade-in">
            <div className="flex justify-center mb-6">
              <div className="p-6 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl border-2 border-purple-200">
                <Activity className="h-12 w-12 text-purple-600" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Medida de Independência Funcional (MIF)</h1>
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              <Badge variant="secondary" className="text-sm">
                Reabilitação
              </Badge>
              <Badge variant="secondary" className="text-sm">
                Função Motora
              </Badge>
              <Badge variant="secondary" className="text-sm">
                Função Cognitiva
              </Badge>
            </div>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              A MIF é um instrumento abrangente que avalia a independência funcional em atividades motoras e cognitivas,
              amplamente utilizado em reabilitação para monitorar progresso e planejar cuidados.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Domínios e Itens Avaliados</CardTitle>
                <CardDescription>
                  18 itens distribuídos em 6 domínios funcionais (13 motores + 5 cognitivos)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {mifDomains.map((domain, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-3">
                        {domain.domain.includes("Comunicação") || domain.domain.includes("Cognição") ? (
                          <Brain className="h-5 w-5 text-purple-600" />
                        ) : (
                          <Zap className="h-5 w-5 text-blue-600" />
                        )}
                        <h4 className="font-semibold text-lg text-gray-800">{domain.domain}</h4>
                        <Badge variant="outline" className="text-xs">
                          {domain.items.length} itens
                        </Badge>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {domain.items.map((item, itemIndex) => (
                          <div key={itemIndex} className="bg-gray-50 p-2 rounded text-sm">
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-blue-600" />
                    Níveis de Pontuação
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {scoreLevels.map((score, index) => (
                      <div
                        key={index}
                        className={`p-3 rounded-lg border ${
                          score.level >= 6
                            ? "bg-green-50 border-green-200"
                            : score.level >= 4
                              ? "bg-yellow-50 border-yellow-200"
                              : "bg-red-50 border-red-200"
                        }`}
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <div
                            className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                              score.level >= 6
                                ? "bg-green-600 text-white"
                                : score.level >= 4
                                  ? "bg-yellow-600 text-white"
                                  : "bg-red-600 text-white"
                            }`}
                          >
                            {score.level}
                          </div>
                          <span className="font-medium text-sm">{score.description}</span>
                        </div>
                        <p className="text-xs text-gray-600 ml-8">{score.detail}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Info className="h-5 w-5 text-purple-600" />
                    Informações Técnicas
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="font-medium">Pontuação total:</span>
                      <p className="text-muted-foreground">18-126 pontos</p>
                    </div>
                    <div>
                      <span className="font-medium">Subescala motora:</span>
                      <p className="text-muted-foreground">13-91 pontos</p>
                    </div>
                    <div>
                      <span className="font-medium">Subescala cognitiva:</span>
                      <p className="text-muted-foreground">5-35 pontos</p>
                    </div>
                    <div>
                      <span className="font-medium">Tempo de aplicação:</span>
                      <p className="text-muted-foreground">30-45 minutos</p>
                    </div>
                    <div>
                      <span className="font-medium">Aplicador:</span>
                      <p className="text-muted-foreground">Profissionais treinados</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-blue-600" />
                  Aplicação Clínica
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 shrink-0"></div>
                    <span>Avaliação inicial em reabilitação</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 shrink-0"></div>
                    <span>Monitoramento do progresso funcional</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 shrink-0"></div>
                    <span>Planejamento de alta hospitalar</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 shrink-0"></div>
                    <span>Determinação de recursos necessários</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 shrink-0"></div>
                    <span>Pesquisa em reabilitação</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-green-600" />
                  Interpretação dos Resultados
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                    <div className="font-semibold text-green-800 mb-1">108-126 pontos</div>
                    <div className="text-sm text-green-700">Independência completa/modificada</div>
                  </div>
                  <div className="bg-yellow-50 p-3 rounded-lg border border-yellow-200">
                    <div className="font-semibold text-yellow-800 mb-1">90-107 pontos</div>
                    <div className="text-sm text-yellow-700">Dependência mínima</div>
                  </div>
                  <div className="bg-orange-50 p-3 rounded-lg border border-orange-200">
                    <div className="font-semibold text-orange-800 mb-1">54-89 pontos</div>
                    <div className="text-sm text-orange-700">Dependência moderada</div>
                  </div>
                  <div className="bg-red-50 p-3 rounded-lg border border-red-200">
                    <div className="font-semibold text-red-800 mb-1">18-53 pontos</div>
                    <div className="text-sm text-red-700">Dependência severa/total</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-16">
            <CardHeader>
              <CardTitle>Exemplo de Evolução de Enfermagem</CardTitle>
              <CardDescription>Documentação adequada da avaliação funcional utilizando a MIF</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-50 p-6 rounded-lg border">
                <p className="text-sm leading-relaxed">
                  <strong>Avaliação Funcional - MIF:</strong>
                  <br />
                  Paciente feminina, 45 anos, em reabilitação pós-traumatismo cranioencefálico. Avaliação através da MIF
                  apresentou pontuação total de 78 pontos, indicando dependência moderada. Subescala motora: 58 pontos
                  (autocuidado: 28, controle esfíncteres: 14, transferências: 12, locomoção: 4). Subescala cognitiva: 20
                  pontos (comunicação: 10, cognição social: 10). Principais limitações: locomoção (necessita cadeira de
                  rodas), memória e resolução de problemas comprometidas. Implementado programa de reabilitação
                  multidisciplinar com fisioterapia para fortalecimento e treino de marcha, terapia ocupacional para
                  atividades de vida diária e fonoaudiologia para estimulação cognitiva. Reavaliação programada
                  mensalmente para monitoramento da evolução funcional.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="text-center">
            <Card className="max-w-4xl mx-auto bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-primary/10">
              <CardContent className="pt-8 pb-8">
                <h3 className="text-2xl font-bold mb-4">Padrão-Ouro em Reabilitação</h3>
                <p className="text-muted-foreground leading-relaxed">
                  A MIF é considerada o padrão-ouro para avaliação funcional em reabilitação, fornecendo uma medida
                  abrangente e sensível às mudanças funcionais. Sua aplicação sistemática permite documentar
                  objetivamente o progresso e orientar decisões clínicas baseadas em evidências.
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
