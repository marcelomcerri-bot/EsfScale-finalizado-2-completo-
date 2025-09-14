import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Activity, ArrowLeft, CheckCircle, XCircle, Info, Users, Target, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function KatzPage() {
  const katzItems = [
    {
      activity: "Banho",
      independent: "Toma banho completamente sozinho ou necessita ajuda apenas para lavar uma parte do corpo",
      dependent:
        "Necessita ajuda para lavar mais de uma parte do corpo, para entrar ou sair da banheira, ou não toma banho sozinho",
    },
    {
      activity: "Vestir-se",
      independent: "Pega as roupas e se veste completamente sem ajuda",
      dependent: "Pega as roupas e se veste sem ajuda, exceto para amarrar sapatos, ou recebe ajuda para se vestir",
    },
    {
      activity: "Uso do banheiro",
      independent:
        "Vai ao banheiro, usa o banheiro, se arruma e se veste sem ajuda (pode usar objetos de apoio como bengala, andador ou cadeira de rodas)",
      dependent: "Recebe ajuda para ir ao banheiro, para se limpar, se arrumar ou se vestir, ou usa comadre ou urinol",
    },
    {
      activity: "Transferência",
      independent:
        "Move-se para dentro e para fora da cama ou cadeira sem ajuda (pode usar objetos de apoio como bengala ou andador)",
      dependent: "Move-se para dentro e para fora da cama ou cadeira com ajuda",
    },
    {
      activity: "Continência",
      independent: "Controla completamente a urina e as fezes",
      dependent: "É parcial ou totalmente incontinente para urina ou fezes",
    },
    {
      activity: "Alimentação",
      independent: "Come sem ajuda",
      dependent: "Recebe ajuda para comer ou é alimentado parcial ou completamente por sonda enteral ou parenteral",
    },
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
              <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border-2 border-green-200">
                <Activity className="h-12 w-12 text-green-600" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Índice de Katz</h1>
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              <Badge variant="secondary" className="text-sm">
                Avaliação Funcional
              </Badge>
              <Badge variant="secondary" className="text-sm">
                Atividades Básicas
              </Badge>
              <Badge variant="secondary" className="text-sm">
                Idosos
              </Badge>
            </div>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              O Índice de Katz é um instrumento amplamente utilizado para avaliar a independência funcional em seis
              atividades básicas de vida diária (ABVDs). Desenvolvido em 1963, é considerado padrão-ouro para avaliação
              funcional de idosos e pacientes com limitações funcionais.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  Atividades Avaliadas
                </CardTitle>
                <CardDescription>
                  Seis atividades básicas de vida diária são avaliadas de forma dicotômica
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {katzItems.map((item, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <h4 className="font-semibold text-lg mb-3 text-green-700">{item.activity}</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                          <div className="flex items-start gap-2 mb-2">
                            <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                            <span className="font-medium text-green-800">Independente (1 ponto)</span>
                          </div>
                          <p className="text-sm text-green-700">{item.independent}</p>
                        </div>
                        <div className="bg-red-50 p-3 rounded-lg border border-red-200">
                          <div className="flex items-start gap-2 mb-2">
                            <XCircle className="h-4 w-4 text-red-600 mt-0.5 shrink-0" />
                            <span className="font-medium text-red-800">Dependente (0 pontos)</span>
                          </div>
                          <p className="text-sm text-red-700">{item.dependent}</p>
                        </div>
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
                    Interpretação
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                      <div className="font-semibold text-green-800 mb-1">6 pontos</div>
                      <div className="text-sm text-green-700">Totalmente independente</div>
                    </div>
                    <div className="bg-yellow-50 p-3 rounded-lg border border-yellow-200">
                      <div className="font-semibold text-yellow-800 mb-1">4-5 pontos</div>
                      <div className="text-sm text-yellow-700">Moderadamente dependente</div>
                    </div>
                    <div className="bg-orange-50 p-3 rounded-lg border border-orange-200">
                      <div className="font-semibold text-orange-800 mb-1">2-3 pontos</div>
                      <div className="text-sm text-orange-700">Muito dependente</div>
                    </div>
                    <div className="bg-red-50 p-3 rounded-lg border border-red-200">
                      <div className="font-semibold text-red-800 mb-1">0-1 pontos</div>
                      <div className="text-sm text-red-700">Totalmente dependente</div>
                    </div>
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
                      <span className="font-medium">Tempo de aplicação:</span>
                      <p className="text-muted-foreground">5-10 minutos</p>
                    </div>
                    <div>
                      <span className="font-medium">Método:</span>
                      <p className="text-muted-foreground">Observação direta ou entrevista</p>
                    </div>
                    <div>
                      <span className="font-medium">Pontuação:</span>
                      <p className="text-muted-foreground">0-6 pontos (dicotômica)</p>
                    </div>
                    <div>
                      <span className="font-medium">Aplicador:</span>
                      <p className="text-muted-foreground">Enfermeiros, médicos, fisioterapeutas</p>
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
                    <span>Avaliação inicial de pacientes idosos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 shrink-0"></div>
                    <span>Planejamento de cuidados de enfermagem</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 shrink-0"></div>
                    <span>Monitoramento da evolução funcional</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 shrink-0"></div>
                    <span>Determinação do nível de cuidado necessário</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 shrink-0"></div>
                    <span>Pesquisa em gerontologia</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-green-600" />
                  Vantagens
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 shrink-0"></div>
                    <span>Simplicidade e rapidez na aplicação</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 shrink-0"></div>
                    <span>Amplamente validado e reconhecido</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 shrink-0"></div>
                    <span>Não requer treinamento especializado</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 shrink-0"></div>
                    <span>Boa reprodutibilidade inter-observador</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 shrink-0"></div>
                    <span>Útil para comparações longitudinais</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-16">
            <CardHeader>
              <CardTitle>Exemplo de Evolução de Enfermagem</CardTitle>
              <CardDescription>
                Documentação adequada da avaliação funcional utilizando o Índice de Katz
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-50 p-6 rounded-lg border">
                <p className="text-sm leading-relaxed">
                  <strong>Avaliação Funcional - Índice de Katz:</strong>
                  <br />
                  Paciente do sexo feminino, 82 anos, admitida para reabilitação pós-fratura de fêmur. Avaliação
                  funcional realizada através do Índice de Katz apresentou pontuação total de 3 pontos: independente
                  para alimentação (1 ponto) e continência (1 ponto), parcialmente independente para transferência com
                  auxílio de uma pessoa (1 ponto), dependente para banho, vestir-se e uso do banheiro (0 pontos cada).
                  Classificada como muito dependente para atividades básicas de vida diária. Implementado plano de
                  cuidados com foco na recuperação da independência funcional, incluindo fisioterapia diária, treino de
                  transferências e orientações para autocuidado. Reavaliação programada semanalmente para monitoramento
                  da evolução funcional.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="text-center">
            <Card className="max-w-4xl mx-auto bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-primary/10">
              <CardContent className="pt-8 pb-8">
                <h3 className="text-2xl font-bold mb-4">Importância na Prática de Enfermagem</h3>
                <p className="text-muted-foreground leading-relaxed">
                  O Índice de Katz é fundamental para a avaliação sistemática da capacidade funcional, permitindo
                  identificar o grau de dependência e orientar intervenções de enfermagem personalizadas. Sua aplicação
                  regular possibilita o monitoramento da evolução funcional e a avaliação da eficácia das intervenções
                  implementadas.
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
