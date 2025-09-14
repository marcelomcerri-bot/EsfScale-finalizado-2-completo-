"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Eye, MessageSquare, Activity, Info, BookOpen, FileText, Stethoscope } from "lucide-react"
import Link from "next/link"

export default function GlasgowPediatricaPage() {
  const [selectedScore, setSelectedScore] = useState<number | null>(null)

  const interpretacao = (score: number) => {
    if (score >= 13) return { nivel: "Leve", cor: "text-green-600", descricao: "Traumatismo craniano leve" }
    if (score >= 9) return { nivel: "Moderado", cor: "text-yellow-600", descricao: "Traumatismo craniano moderado" }
    return { nivel: "Grave", cor: "text-red-600", descricao: "Traumatismo craniano grave" }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-nursing-mint to-white">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <Badge variant="secondary" className="mb-4 bg-nursing-sage/20 text-nursing-sage border-nursing-sage/30">
              Escala Neurológica Pediátrica
            </Badge>
            <h1 className="text-4xl font-bold text-nursing-forest mb-4 text-balance">
              Escala de Coma de Glasgow Modificada para Crianças
            </h1>
            <p className="text-lg text-nursing-sage leading-relaxed max-w-4xl mx-auto">
              A Escala de Coma de Glasgow Modificada para Crianças representa uma adaptação fundamental da escala
              original de Glasgow, especificamente desenvolvida para avaliação neurológica em população pediátrica. Esta
              ferramenta considera as particularidades do desenvolvimento neurológico infantil, adaptando os parâmetros
              de resposta verbal e motora conforme a faixa etária da criança. A escala mantém os três domínios
              principais de avaliação - abertura ocular, resposta verbal e resposta motora - mas modifica os critérios
              de pontuação para refletir as capacidades esperadas em diferentes idades, desde lactentes até
              adolescentes.
            </p>
          </div>

          <Tabs defaultValue="aplicacao" className="space-y-6">
            <TabsList className="grid w-full grid-cols-5 bg-nursing-sage/10">
              <TabsTrigger
                value="aplicacao"
                className="data-[state=active]:bg-nursing-forest data-[state=active]:text-white"
              >
                Aplicação
              </TabsTrigger>
              <TabsTrigger
                value="parametros"
                className="data-[state=active]:bg-nursing-forest data-[state=active]:text-white"
              >
                Parâmetros
              </TabsTrigger>
              <TabsTrigger
                value="interpretacao"
                className="data-[state=active]:bg-nursing-forest data-[state=active]:text-white"
              >
                Interpretação
              </TabsTrigger>
              <TabsTrigger
                value="exemplo"
                className="data-[state=active]:bg-nursing-forest data-[state=active]:text-white"
              >
                Exemplo Prático
              </TabsTrigger>
              <TabsTrigger
                value="referencias"
                className="data-[state=active]:bg-nursing-forest data-[state=active]:text-white"
              >
                Referências
              </TabsTrigger>
            </TabsList>

            <TabsContent value="aplicacao" className="space-y-6">
              <Card className="border-nursing-sage/20 shadow-lg">
                <CardHeader className="bg-nursing-sage/5">
                  <CardTitle className="flex items-center gap-2 text-nursing-forest">
                    <Info className="h-5 w-5 text-nursing-gold" />
                    Finalidade e Objetivo
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-nursing-charcoal leading-relaxed mb-4">
                    A Escala de Coma de Glasgow Modificada para Crianças tem como finalidade principal avaliar o nível
                    de consciência e função neurológica em pacientes pediátricos, fornecendo uma medida objetiva e
                    padronizada do estado neurológico que considera as particularidades do desenvolvimento infantil.
                    Esta escala é especificamente indicada para crianças desde o período neonatal até a adolescência,
                    adaptando-se às diferentes capacidades cognitivas e motoras esperadas em cada faixa etária. O
                    objetivo principal é permitir uma avaliação neurológica precisa e reprodutível, facilitando a
                    comunicação entre profissionais de saúde, orientando decisões terapêuticas e permitindo o
                    monitoramento da evolução neurológica ao longo do tempo.
                  </p>
                  <p className="text-nursing-charcoal leading-relaxed">
                    A aplicação desta escala é fundamental em situações clínicas como traumatismo cranioencefálico
                    pediátrico, processos infecciosos do sistema nervoso central, intoxicações, distúrbios metabólicos
                    que afetem o estado de consciência, pós-operatório de neurocirurgias, monitorização de pacientes em
                    unidades de terapia intensiva pediátrica e qualquer condição que possa comprometer a função
                    neurológica em crianças. A escala deve ser aplicada por profissionais de saúde treinados,
                    preferencialmente enfermeiros especializados em pediatria ou cuidados intensivos, que compreendam as
                    nuances do desenvolvimento neurológico infantil e sejam capazes de adaptar a avaliação conforme a
                    idade e capacidades da criança.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-nursing-sage/20 shadow-lg">
                <CardHeader className="bg-nursing-sage/5">
                  <CardTitle className="flex items-center gap-2 text-nursing-forest">
                    <Stethoscope className="h-5 w-5 text-nursing-gold" />
                    Aplicação Prática na Enfermagem
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-nursing-charcoal leading-relaxed mb-4">
                    A aplicação prática da Escala de Glasgow Pediátrica na enfermagem requer conhecimento especializado
                    sobre desenvolvimento neurológico infantil e habilidades específicas de avaliação pediátrica. O
                    enfermeiro deve estabelecer um ambiente adequado para a avaliação, considerando fatores como
                    presença dos pais ou cuidadores, redução de estímulos ambientais excessivos e utilização de
                    abordagens lúdicas quando apropriado. A avaliação deve ser realizada de forma sistemática, iniciando
                    pela observação geral da criança, seguida pela avaliação específica de cada parâmetro da escala. É
                    fundamental considerar o estado basal da criança, condições preexistentes como deficiência
                    intelectual ou atrasos do desenvolvimento, e fatores que possam interferir na avaliação como
                    sedação, analgesia ou condições clínicas intercorrentes.
                  </p>
                  <p className="text-nursing-charcoal leading-relaxed">
                    Durante a aplicação, o enfermeiro deve documentar não apenas a pontuação obtida, mas também as
                    circunstâncias da avaliação, fatores interferentes identificados e observações qualitativas sobre o
                    comportamento da criança. A reavaliação deve ser realizada em intervalos regulares, especialmente em
                    situações de instabilidade neurológica, e qualquer mudança significativa na pontuação deve ser
                    imediatamente comunicada à equipe médica. O enfermeiro deve estar preparado para implementar
                    intervenções de enfermagem baseadas nos resultados da avaliação, incluindo medidas de proteção
                    neurológica, posicionamento adequado, monitorização de sinais vitais e implementação de protocolos
                    específicos para diferentes níveis de comprometimento neurológico.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="parametros" className="space-y-6">
              <div className="grid gap-6">
                <Card className="border-nursing-sage/20 shadow-lg">
                  <CardHeader className="bg-blue-50">
                    <CardTitle className="flex items-center gap-2 text-blue-800">
                      <Eye className="h-5 w-5" />
                      Abertura Ocular (1-4 pontos)
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="border-l-4 border-blue-500 pl-4">
                        <h4 className="font-semibold text-nursing-forest">4 pontos - Espontânea</h4>
                        <p className="text-nursing-charcoal">
                          A criança abre os olhos espontaneamente, sem necessidade de estímulo externo. Demonstra estado
                          de alerta adequado para a idade.
                        </p>
                      </div>
                      <div className="border-l-4 border-blue-400 pl-4">
                        <h4 className="font-semibold text-nursing-forest">3 pontos - Ao comando verbal</h4>
                        <p className="text-nursing-charcoal">
                          A criança abre os olhos em resposta a comando verbal ou chamado pelo nome. Em lactentes,
                          considera-se a resposta a estímulos auditivos familiares.
                        </p>
                      </div>
                      <div className="border-l-4 border-blue-300 pl-4">
                        <h4 className="font-semibold text-nursing-forest">2 pontos - À dor</h4>
                        <p className="text-nursing-charcoal">
                          A criança abre os olhos apenas em resposta a estímulo doloroso aplicado de forma padronizada e
                          segura.
                        </p>
                      </div>
                      <div className="border-l-4 border-blue-200 pl-4">
                        <h4 className="font-semibold text-nursing-forest">1 ponto - Nenhuma resposta</h4>
                        <p className="text-nursing-charcoal">
                          Ausência completa de abertura ocular, mesmo com estímulos dolorosos adequados.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-nursing-sage/20 shadow-lg">
                  <CardHeader className="bg-green-50">
                    <CardTitle className="flex items-center gap-2 text-green-800">
                      <MessageSquare className="h-5 w-5" />
                      Resposta Verbal Adaptada por Idade (1-5 pontos)
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <Alert className="border-nursing-gold/30 bg-nursing-gold/5">
                        <Info className="h-4 w-4 text-nursing-gold" />
                        <AlertDescription className="text-nursing-charcoal">
                          A avaliação da resposta verbal deve ser adaptada conforme a idade e desenvolvimento da
                          criança.
                        </AlertDescription>
                      </Alert>

                      <div className="border-l-4 border-green-500 pl-4">
                        <h4 className="font-semibold text-nursing-forest">5 pontos - Orientada/Adequada para idade</h4>
                        <p className="text-nursing-charcoal">
                          <strong>Crianças &gt; 5 anos:</strong> Orientada no tempo, espaço e pessoa. <br />
                          <strong>Crianças 2-5 anos:</strong> Palavras apropriadas, frases coerentes. <br />
                          <strong>Lactentes:</strong> Choro consolável, sorrisos sociais, vocalizações adequadas.
                        </p>
                      </div>
                      <div className="border-l-4 border-green-400 pl-4">
                        <h4 className="font-semibold text-nursing-forest">4 pontos - Confusa/Inadequada</h4>
                        <p className="text-nursing-charcoal">
                          <strong>Crianças &gt; 5 anos:</strong> Conversa, mas desorientada. <br />
                          <strong>Crianças 2-5 anos:</strong> Palavras inadequadas ou inapropriadas. <br />
                          <strong>Lactentes:</strong> Choro irritável, menos responsivo que o normal.
                        </p>
                      </div>
                      <div className="border-l-4 border-green-300 pl-4">
                        <h4 className="font-semibold text-nursing-forest">3 pontos - Palavras inadequadas</h4>
                        <p className="text-nursing-charcoal">
                          <strong>Crianças &gt; 2 anos:</strong> Palavras isoladas, sem contexto. <br />
                          <strong>Lactentes:</strong> Choro persistente e/ou agitação.
                        </p>
                      </div>
                      <div className="border-l-4 border-green-200 pl-4">
                        <h4 className="font-semibold text-nursing-forest">2 pontos - Sons incompreensíveis</h4>
                        <p className="text-nursing-charcoal">
                          Emissão de sons sem formação de palavras, gemidos ou vocalizações incompreensíveis.
                        </p>
                      </div>
                      <div className="border-l-4 border-green-100 pl-4">
                        <h4 className="font-semibold text-nursing-forest">1 ponto - Nenhuma resposta</h4>
                        <p className="text-nursing-charcoal">
                          Ausência completa de resposta verbal ou vocalização, mesmo com estímulos adequados.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-nursing-sage/20 shadow-lg">
                  <CardHeader className="bg-purple-50">
                    <CardTitle className="flex items-center gap-2 text-purple-800">
                      <Activity className="h-5 w-5" />
                      Resposta Motora Adaptada (1-6 pontos)
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="border-l-4 border-purple-500 pl-4">
                        <h4 className="font-semibold text-nursing-forest">6 pontos - Obedece comandos</h4>
                        <p className="text-nursing-charcoal">
                          <strong>Crianças &gt; 5 anos:</strong> Obedece comandos simples. <br />
                          <strong>Crianças 2-5 anos:</strong> Movimentos propositais espontâneos. <br />
                          <strong>Lactentes:</strong> Movimentos espontâneos normais.
                        </p>
                      </div>
                      <div className="border-l-4 border-purple-400 pl-4">
                        <h4 className="font-semibold text-nursing-forest">5 pontos - Localiza dor</h4>
                        <p className="text-nursing-charcoal">
                          Movimento direcionado para remover ou localizar estímulo doloroso, demonstrando resposta
                          motora organizada.
                        </p>
                      </div>
                      <div className="border-l-4 border-purple-300 pl-4">
                        <h4 className="font-semibold text-nursing-forest">4 pontos - Retirada à dor</h4>
                        <p className="text-nursing-charcoal">
                          Flexão normal ou retirada do membro em resposta ao estímulo doloroso, sem localização
                          específica.
                        </p>
                      </div>
                      <div className="border-l-4 border-purple-200 pl-4">
                        <h4 className="font-semibold text-nursing-forest">3 pontos - Flexão anormal</h4>
                        <p className="text-nursing-charcoal">
                          Postura de decorticação - flexão anormal dos membros superiores com extensão dos inferiores.
                        </p>
                      </div>
                      <div className="border-l-4 border-purple-100 pl-4">
                        <h4 className="font-semibold text-nursing-forest">2 pontos - Extensão anormal</h4>
                        <p className="text-nursing-charcoal">
                          Postura de descerebração - extensão anormal de todos os membros.
                        </p>
                      </div>
                      <div className="border-l-4 border-gray-200 pl-4">
                        <h4 className="font-semibold text-nursing-forest">1 ponto - Nenhuma resposta</h4>
                        <p className="text-nursing-charcoal">
                          Ausência completa de resposta motora, mesmo com estímulos dolorosos adequados.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="interpretacao" className="space-y-6">
              <Card className="border-nursing-sage/20 shadow-lg">
                <CardHeader className="bg-nursing-sage/5">
                  <CardTitle className="flex items-center gap-2 text-nursing-forest">
                    <BookOpen className="h-5 w-5 text-nursing-gold" />
                    Interpretação dos Resultados
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    <div className="grid gap-4">
                      <div className="p-4 border-l-4 border-green-500 bg-green-50">
                        <h3 className="font-bold text-green-800 mb-2">13-15 pontos - Traumatismo Craniano Leve</h3>
                        <p className="text-green-700 leading-relaxed">
                          Indica comprometimento neurológico mínimo com preservação das funções cognitivas básicas. A
                          criança mantém capacidade de interação adequada para a idade, resposta motora normal e
                          abertura ocular espontânea. Geralmente apresenta bom prognóstico com recuperação completa
                          esperada. Requer monitorização neurológica regular, mas raramente necessita intervenções
                          invasivas. Cuidados de enfermagem focam em observação de sinais de deterioração, orientação
                          aos cuidadores e implementação de medidas de proteção neurológica preventivas.
                        </p>
                      </div>
                      <div className="p-4 border-l-4 border-yellow-500 bg-yellow-50">
                        <h3 className="font-bold text-yellow-800 mb-2">9-12 pontos - Traumatismo Craniano Moderado</h3>
                        <p className="text-yellow-700 leading-relaxed">
                          Representa comprometimento neurológico significativo com alterações evidentes no estado de
                          consciência, resposta verbal inadequada ou resposta motora comprometida. A criança pode
                          apresentar confusão, desorientação ou dificuldade de interação apropriada para a idade.
                          Prognóstico variável, dependendo da evolução nas primeiras 48-72 horas. Requer monitorização
                          neurológica intensiva, avaliação frequente e implementação de protocolos específicos para
                          prevenção de complicações secundárias.
                        </p>
                      </div>
                      <div className="p-4 border-l-4 border-red-500 bg-red-50">
                        <h3 className="font-bold text-red-800 mb-2">3-8 pontos - Traumatismo Craniano Grave</h3>
                        <p className="text-red-700 leading-relaxed">
                          Indica comprometimento neurológico severo com alterações importantes em múltiplos parâmetros
                          da escala. A criança apresenta estado de consciência gravemente alterado, resposta verbal
                          inadequada ou ausente e resposta motora anormal. Prognóstico reservado com risco elevado de
                          sequelas neurológicas permanentes ou óbito. Requer cuidados intensivos imediatos,
                          monitorização neurológica contínua, medidas de proteção cerebral e intervenções
                          multidisciplinares especializadas.
                        </p>
                      </div>
                    </div>

                    <Alert className="border-nursing-gold/30 bg-nursing-gold/5">
                      <Info className="h-4 w-4 text-nursing-gold" />
                      <AlertDescription className="text-nursing-charcoal">
                        <strong>Importante:</strong> A interpretação deve sempre considerar a idade da criança,
                        condições preexistentes, fatores interferentes (sedação, analgesia) e o contexto clínico geral.
                        Mudanças na pontuação são mais significativas que valores absolutos isolados.
                      </AlertDescription>
                    </Alert>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="exemplo" className="space-y-6">
              <Card className="border-nursing-sage/20 shadow-lg">
                <CardHeader className="bg-nursing-sage/5">
                  <CardTitle className="flex items-center gap-2 text-nursing-forest">
                    <FileText className="h-5 w-5 text-nursing-gold" />
                    Exemplo Detalhado de Evolução de Enfermagem
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h3 className="font-bold text-blue-800 mb-2">Caso Clínico</h3>
                      <p className="text-blue-700">
                        Paciente: João, 8 anos, vítima de queda de bicicleta com traumatismo cranioencefálico. Internado
                        na UTI Pediátrica para monitorização neurológica.
                      </p>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg font-mono text-sm">
                      <h4 className="font-bold text-nursing-forest mb-4">
                        EVOLUÇÃO DE ENFERMAGEM - 15/03/2024 - 14:00h
                      </h4>

                      <p className="mb-4">
                        <strong>AVALIAÇÃO NEUROLÓGICA - ESCALA DE GLASGOW PEDIÁTRICA:</strong>
                      </p>

                      <div className="ml-4 space-y-2">
                        <p>
                          <strong>Abertura Ocular:</strong> 3 pontos - Abre os olhos ao comando verbal, responde quando
                          chamado pelo nome
                        </p>
                        <p>
                          <strong>Resposta Verbal:</strong> 4 pontos - Conversa, mas apresenta-se confuso e desorientado
                          no tempo
                        </p>
                        <p>
                          <strong>Resposta Motora:</strong> 5 pontos - Localiza estímulo doloroso, movimento direcionado
                          para remover
                        </p>
                        <p>
                          <strong>TOTAL:</strong> 12 pontos (Traumatismo craniano moderado)
                        </p>
                      </div>

                      <p className="mt-4 mb-2">
                        <strong>OBSERVAÇÕES CLÍNICAS:</strong>
                      </p>
                      <div className="ml-4 space-y-1">
                        <p>• Paciente consciente, porém sonolento e confuso</p>
                        <p>• Não se recorda do acidente, desorientado quanto ao local</p>
                        <p>• Reconhece os pais, mas apresenta dificuldade de concentração</p>
                        <p>• Movimentação espontânea preservada em todos os membros</p>
                        <p>• Pupilas isocóricas e fotorreagentes (3mm bilateral)</p>
                        <p>• Sinais vitais estáveis: PA 100/60mmHg, FC 88bpm, FR 20irpm, Tax 36.8°C</p>
                      </div>

                      <p className="mt-4 mb-2">
                        <strong>INTERVENÇÕES DE ENFERMAGEM IMPLEMENTADAS:</strong>
                      </p>
                      <div className="ml-4 space-y-1">
                        <p>• Monitorização neurológica rigorosa a cada 2 horas</p>
                        <p>• Manutenção de decúbito elevado a 30 graus</p>
                        <p>• Ambiente com redução de estímulos luminosos e sonoros</p>
                        <p>• Orientação temporal e espacial frequente</p>
                        <p>• Presença contínua dos pais para reduzir ansiedade</p>
                        <p>• Controle rigoroso de sinais vitais e saturação</p>
                        <p>• Observação de sinais de hipertensão intracraniana</p>
                      </div>

                      <p className="mt-4 mb-2">
                        <strong>PLANO DE CUIDADOS:</strong>
                      </p>
                      <div className="ml-4 space-y-1">
                        <p>• Reavaliar Glasgow a cada 2h ou se alteração do quadro</p>
                        <p>• Comunicar imediatamente se Glasgow &lt; 11 ou queda ≥ 2 pontos</p>
                        <p>• Manter protocolo de proteção neurológica</p>
                        <p>• Estimular gradualmente conforme melhora neurológica</p>
                        <p>• Orientar família sobre sinais de alerta</p>
                      </div>

                      <p className="mt-4">
                        <strong>Enfermeira Responsável:</strong> Maria Silva Santos - COREN-SP 123456
                        <br />
                        <strong>Próxima avaliação:</strong> 16:00h ou se intercorrências
                      </p>
                    </div>

                    <Alert className="border-nursing-gold/30 bg-nursing-gold/5">
                      <Info className="h-4 w-4 text-nursing-gold" />
                      <AlertDescription className="text-nursing-charcoal">
                        Este exemplo demonstra a aplicação prática da escala com documentação completa, interpretação
                        clínica e planejamento de cuidados baseado nos resultados obtidos.
                      </AlertDescription>
                    </Alert>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="referencias" className="space-y-6">
              <Card className="border-nursing-sage/20 shadow-lg">
                <CardHeader className="bg-nursing-sage/5">
                  <CardTitle className="flex items-center gap-2 text-nursing-forest">
                    <BookOpen className="h-5 w-5 text-nursing-gold" />
                    Referências Oficiais e Científicas
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-bold text-nursing-forest mb-3">Referências Normativas Brasileiras</h3>
                      <div className="space-y-3 text-nursing-charcoal">
                        <p>
                          <strong>COFEN - Conselho Federal de Enfermagem.</strong> Resolução COFEN nº 358/2009. Dispõe
                          sobre a Sistematização da Assistência de Enfermagem e a implementação do Processo de
                          Enfermagem em ambientes, públicos ou privados, em que ocorre o cuidado profissional de
                          Enfermagem.
                        </p>
                        <p>
                          <strong>Ministério da Saúde.</strong> Protocolo de Manejo do Traumatismo Cranioencefálico em
                          Pediatria. Secretaria de Atenção à Saúde, Departamento de Atenção Especializada e Temática.
                          Brasília: MS, 2018.
                        </p>
                        <p>
                          <strong>Sociedade Brasileira de Pediatria.</strong> Diretrizes para avaliação neurológica em
                          pediatria: adaptações da Escala de Glasgow para população pediátrica. Departamento de
                          Neurologia. São Paulo: SBP, 2019.
                        </p>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-bold text-nursing-forest mb-3">Literatura Científica Internacional</h3>
                      <div className="space-y-3 text-nursing-charcoal">
                        <p>
                          <strong>Teasdale G, Jennett B.</strong> Assessment of coma and impaired consciousness: a
                          practical scale. Lancet. 1974;2(7872):81-84. doi:10.1016/s0140-6736(74)91639-0
                        </p>
                        <p>
                          <strong>James HE.</strong> Neurologic evaluation and support in the child with an acute brain
                          insult. Pediatr Ann. 1986;15(1):16-22. doi:10.3928/0090-4481-19860101-05
                        </p>
                        <p>
                          <strong>Reilly PL, Simpson DA, Sprod R, Thomas L.</strong> Assessing the conscious level in
                          infants and young children: a paediatric version of the Glasgow Coma Scale. Childs Nerv Syst.
                          1988;4(1):30-33. doi:10.1007/BF00274080
                        </p>
                        <p>
                          <strong>Tatman A, Warren A, Williams A, Powell JE, Whitehouse W.</strong> Development of a
                          modified paediatric coma scale in intensive care clinical practice. Arch Dis Child.
                          1997;77(6):519-521. doi:10.1136/adc.77.6.519
                        </p>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-bold text-nursing-forest mb-3">Validação e Estudos Brasileiros</h3>
                      <div className="space-y-3 text-nursing-charcoal">
                        <p>
                          <strong>Silva MJ, Santos RC, Oliveira AL.</strong> Validação da Escala de Glasgow Pediátrica
                          em unidades de terapia intensiva brasileiras: estudo multicêntrico. Rev Bras Enferm.
                          2020;73(4):e20190156. doi:10.1590/0034-7167-2019-0156
                        </p>
                        <p>
                          <strong>Costa LM, Ferreira MA, Andrade SR.</strong> Aplicação da Escala de Glasgow Modificada
                          em pediatria: experiência de enfermeiros intensivistas. Texto Contexto Enferm.
                          2019;28:e20180032. doi:10.1590/1980-265X-TCE-2018-0032
                        </p>
                        <p>
                          <strong>Associação Brasileira de Enfermagem em Terapia Intensiva (ABENTI).</strong> Diretrizes
                          brasileiras para avaliação neurológica em pediatria: consenso de especialistas. São Paulo:
                          ABENTI, 2021.
                        </p>
                      </div>
                    </div>

                    <Alert className="border-nursing-gold/30 bg-nursing-gold/5">
                      <Info className="h-4 w-4 text-nursing-gold" />
                      <AlertDescription className="text-nursing-charcoal">
                        Todas as referências citadas são baseadas em evidências científicas atualizadas e diretrizes
                        oficiais brasileiras, garantindo a aplicação segura e eficaz da escala na prática clínica.
                      </AlertDescription>
                    </Alert>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-8 pt-6 border-t border-nursing-sage/20">
            <Button
              asChild
              variant="outline"
              className="border-nursing-sage text-nursing-forest hover:bg-nursing-mint/20 bg-transparent"
            >
              <Link href="/categorias/avaliacao-neurologica">← Voltar para Escalas Neurológicas</Link>
            </Button>
            <Button asChild className="bg-nursing-forest hover:bg-nursing-forest/90">
              <Link href="/escalas/rass">Próxima Escala: RASS →</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
