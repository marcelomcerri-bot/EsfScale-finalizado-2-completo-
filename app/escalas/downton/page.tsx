"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { ArrowLeft, Shield, AlertTriangle, CheckCircle, FileText, BookOpen, Users } from "lucide-react"
import Link from "next/link"

export default function DowntonPage() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="min-h-screen bg-gradient-to-br from-nursing-mint via-white to-nursing-sage/10">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Button variant="ghost" asChild className="mb-4 text-nursing-forest hover:bg-nursing-mint/20">
            <Link href="/categorias/risco-quedas">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar para Risco de Quedas
            </Link>
          </Button>

          <div className="flex items-center mb-4">
            <Shield className="h-10 w-10 text-nursing-forest mr-4" />
            <div>
              <h1 className="text-3xl font-bold text-nursing-forest">Escala de Downton</h1>
              <p className="text-nursing-forest/70">Downton Fall Risk Index (DFRI)</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            <Badge className="bg-nursing-forest text-white">Risco de Quedas</Badge>
            <Badge variant="outline" className="border-nursing-sage text-nursing-forest">
              Idosos e Adultos
            </Badge>
            <Badge variant="outline" className="border-nursing-sage text-nursing-forest">
              0-11 pontos
            </Badge>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-white/50 border border-nursing-sage/20">
            <TabsTrigger
              value="overview"
              className="data-[state=active]:bg-nursing-forest data-[state=active]:text-white"
            >
              Visão Geral
            </TabsTrigger>
            <TabsTrigger
              value="application"
              className="data-[state=active]:bg-nursing-forest data-[state=active]:text-white"
            >
              Aplicação
            </TabsTrigger>
            <TabsTrigger
              value="example"
              className="data-[state=active]:bg-nursing-forest data-[state=active]:text-white"
            >
              Exemplo Prático
            </TabsTrigger>
            <TabsTrigger
              value="references"
              className="data-[state=active]:bg-nursing-forest data-[state=active]:text-white"
            >
              Referências
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <Card className="border-nursing-sage/20 bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-nursing-forest flex items-center">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Finalidade e Objetivo
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-lg text-nursing-forest/80 max-w-none">
                <p className="leading-relaxed">
                  A Escala de Downton (Downton Fall Risk Index - DFRI) é um instrumento de avaliação do risco de quedas
                  desenvolvido especificamente para identificar pacientes com maior probabilidade de sofrer quedas,
                  sendo particularmente útil em populações idosas e em ambientes de cuidados de longa duração. Criada
                  por Downton e Andrews em 1991, esta escala tem como objetivo principal fornecer uma ferramenta simples
                  e eficaz para estratificar o risco de quedas, permitindo a implementação de medidas preventivas
                  direcionadas e personalizadas para cada paciente.
                </p>
                <p className="leading-relaxed">
                  A aplicação da Escala de Downton é especialmente indicada para pacientes idosos hospitalizados,
                  residentes em instituições de longa permanência, pacientes em unidades de reabilitação, e indivíduos
                  em atendimento domiciliar que apresentem fatores de risco para quedas. A escala é também amplamente
                  utilizada em unidades geriátricas, centros de dia para idosos, e em avaliações ambulatoriais de
                  pacientes com múltiplas comorbidades. Sua aplicação deve ser realizada na admissão do paciente e
                  reavaliada periodicamente, especialmente após mudanças no estado clínico, alterações na medicação, ou
                  modificações na capacidade funcional do indivíduo.
                </p>
              </CardContent>
            </Card>

            <Card className="border-nursing-sage/20 bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-nursing-forest flex items-center">
                  <FileText className="mr-2 h-5 w-5" />
                  Descrição Completa da Escala
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid gap-4">
                    <div className="border border-nursing-sage/20 rounded-lg p-4 bg-nursing-mint/10">
                      <h4 className="font-semibold text-nursing-forest mb-2">1. Quedas Prévias</h4>
                      <div className="space-y-2 text-nursing-forest/80">
                        <p>
                          <strong>Não (0 pontos):</strong> Paciente não apresenta histórico de quedas nos últimos 12
                          meses
                        </p>
                        <p>
                          <strong>Sim (1 ponto):</strong> Paciente apresenta histórico de uma ou mais quedas nos últimos
                          12 meses
                        </p>
                      </div>
                    </div>

                    <div className="border border-nursing-sage/20 rounded-lg p-4 bg-nursing-mint/10">
                      <h4 className="font-semibold text-nursing-forest mb-2">2. Medicamentos</h4>
                      <div className="space-y-2 text-nursing-forest/80">
                        <p>
                          <strong>Nenhum (0 pontos):</strong> Paciente não utiliza medicamentos de risco
                        </p>
                        <p>
                          <strong>Tranquilizantes/Sedativos (1 ponto):</strong> Uso de benzodiazepínicos, barbitúricos,
                          antipsicóticos
                        </p>
                        <p>
                          <strong>Diuréticos (1 ponto):</strong> Uso de diuréticos de qualquer classe
                        </p>
                        <p>
                          <strong>Anti-hipertensivos (exceto diuréticos) (1 ponto):</strong> Uso de IECA, BRA,
                          betabloqueadores, bloqueadores de canal de cálcio
                        </p>
                        <p>
                          <strong>Antiparkinsonianos (1 ponto):</strong> Uso de levodopa, agonistas dopaminérgicos,
                          anticolinérgicos
                        </p>
                        <p>
                          <strong>Antidepressivos (1 ponto):</strong> Uso de tricíclicos, ISRS, IRSN, outros
                          antidepressivos
                        </p>
                        <p>
                          <strong>Outros medicamentos (1 ponto):</strong> Qualquer outro medicamento que possa afetar o
                          equilíbrio ou causar sedação
                        </p>
                      </div>
                    </div>

                    <div className="border border-nursing-sage/20 rounded-lg p-4 bg-nursing-mint/10">
                      <h4 className="font-semibold text-nursing-forest mb-2">3. Déficits Sensoriais</h4>
                      <div className="space-y-2 text-nursing-forest/80">
                        <p>
                          <strong>Nenhum (0 pontos):</strong> Ausência de déficits visuais, auditivos ou de membros
                        </p>
                        <p>
                          <strong>Déficit visual (1 ponto):</strong> Diminuição da acuidade visual, cegueira, problemas
                          de campo visual
                        </p>
                        <p>
                          <strong>Déficit auditivo (1 ponto):</strong> Diminuição da audição, surdez, uso de aparelho
                          auditivo
                        </p>
                        <p>
                          <strong>Déficit de membros (1 ponto):</strong> Amputações, paresias, parestesias, limitações
                          motoras
                        </p>
                      </div>
                    </div>

                    <div className="border border-nursing-sage/20 rounded-lg p-4 bg-nursing-mint/10">
                      <h4 className="font-semibold text-nursing-forest mb-2">4. Estado Mental</h4>
                      <div className="space-y-2 text-nursing-forest/80">
                        <p>
                          <strong>Orientado (0 pontos):</strong> Paciente orientado no tempo, espaço e pessoa
                        </p>
                        <p>
                          <strong>Confuso (1 ponto):</strong> Paciente apresenta desorientação, confusão mental,
                          demência, delirium
                        </p>
                      </div>
                    </div>

                    <div className="border border-nursing-sage/20 rounded-lg p-4 bg-nursing-mint/10">
                      <h4 className="font-semibold text-nursing-forest mb-2">5. Capacidade de Deambulação</h4>
                      <div className="space-y-2 text-nursing-forest/80">
                        <p>
                          <strong>Segura (0 pontos):</strong> Deambulação independente e segura, sem dispositivos de
                          auxílio
                        </p>
                        <p>
                          <strong>Segura com auxílio (1 ponto):</strong> Deambulação segura apenas com uso de bengala,
                          andador ou auxílio de terceiros
                        </p>
                        <p>
                          <strong>Insegura (1 ponto):</strong> Deambulação instável, mesmo com dispositivos de auxílio,
                          ou incapaz de deambular
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-nursing-sage/20 bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-nursing-forest flex items-center">
                  <AlertTriangle className="mr-2 h-5 w-5" />
                  Pontuação e Interpretação
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid gap-4">
                    <Alert className="border-green-200 bg-green-50">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <AlertDescription className="text-green-800">
                        <strong>Baixo Risco (0-2 pontos):</strong> Paciente apresenta baixo risco de quedas. Implementar
                        medidas preventivas básicas, incluindo orientações sobre segurança, manutenção de ambiente
                        organizado, uso de calçados adequados e iluminação apropriada. Reavaliação a cada 7 dias ou
                        conforme mudanças clínicas.
                      </AlertDescription>
                    </Alert>

                    <Alert className="border-red-200 bg-red-50">
                      <AlertTriangle className="h-4 w-4 text-red-600" />
                      <AlertDescription className="text-red-800">
                        <strong>Alto Risco (≥3 pontos):</strong> Paciente apresenta alto risco de quedas. Implementar
                        medidas preventivas intensivas, incluindo supervisão frequente, revisão de medicações, avaliação
                        de dispositivos de auxílio, fisioterapia quando indicada, e educação intensiva do paciente e
                        família. Reavaliação diária ou conforme necessário.
                      </AlertDescription>
                    </Alert>
                  </div>

                  <div className="bg-nursing-mint/20 p-4 rounded-lg">
                    <h4 className="font-semibold text-nursing-forest mb-2">Pontuação Total Possível</h4>
                    <p className="text-nursing-forest/80">
                      A pontuação total da Escala de Downton varia de 0 a 11 pontos, sendo calculada pela soma dos
                      pontos obtidos em cada um dos cinco domínios avaliados. A escala utiliza um ponto de corte
                      simples: pontuação igual ou superior a 3 pontos indica alto risco de quedas.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="application" className="space-y-6">
            <Card className="border-nursing-sage/20 bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-nursing-forest flex items-center">
                  <Users className="mr-2 h-5 w-5" />
                  Aplicação Prática na Enfermagem
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-lg text-nursing-forest/80 max-w-none">
                <p className="leading-relaxed">
                  A aplicação da Escala de Downton na prática de enfermagem requer uma abordagem sistemática e
                  cuidadosa, especialmente considerando que esta ferramenta foi desenvolvida com foco na população idosa
                  e suas particularidades. O processo de avaliação deve ser iniciado preferencialmente nas primeiras 24
                  horas após a admissão do paciente, sendo realizado por enfermeiro ou técnico de enfermagem com
                  experiência em cuidados geriátricos e conhecimento adequado sobre os fatores de risco para quedas em
                  idosos. É fundamental que o profissional responsável pela avaliação tenha habilidades de comunicação
                  adequadas para interagir com pacientes que possam apresentar déficits cognitivos ou sensoriais.
                </p>
                <p className="leading-relaxed">
                  Durante a aplicação da escala, o enfermeiro deve realizar uma anamnese detalhada sobre o histórico de
                  quedas do paciente, incluindo circunstâncias, frequência e consequências das quedas anteriores. A
                  revisão cuidadosa da prescrição médica é essencial para identificar medicamentos que possam aumentar o
                  risco de quedas, considerando não apenas os medicamentos listados na escala, mas também possíveis
                  interações medicamentosas e efeitos cumulativos. A avaliação dos déficits sensoriais deve incluir
                  testes simples de acuidade visual e auditiva, bem como exame físico dos membros para identificar
                  limitações motoras ou sensitivas.
                </p>
                <p className="leading-relaxed">
                  A avaliação do estado mental deve ser realizada de forma respeitosa e cuidadosa, utilizando
                  instrumentos complementares quando necessário, como o Mini Exame do Estado Mental (MEEM) ou outras
                  escalas de avaliação cognitiva. A capacidade de deambulação deve ser avaliada através da observação
                  direta do paciente durante a marcha, considerando a necessidade de dispositivos de auxílio, a
                  estabilidade da marcha, a confiança do paciente em sua mobilidade e a presença de alterações no
                  equilíbrio. A reavaliação deve ser realizada sempre que houver mudanças na medicação, alterações no
                  estado cognitivo, modificações na capacidade funcional, ou após episódios de quedas ou quase-quedas.
                </p>
              </CardContent>
            </Card>

            <Card className="border-nursing-sage/20 bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-nursing-forest">Intervenções de Enfermagem por Nível de Risco</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="border border-green-200 rounded-lg p-4 bg-green-50">
                    <h4 className="font-semibold text-green-800 mb-3">Baixo Risco (0-2 pontos)</h4>
                    <ul className="space-y-2 text-green-700">
                      <li>• Orientação sobre medidas básicas de prevenção de quedas</li>
                      <li>• Manutenção de ambiente organizado e livre de obstáculos</li>
                      <li>• Garantia de iluminação adequada, especialmente noturna</li>
                      <li>• Orientação sobre uso de calçados fechados e antiderrapantes</li>
                      <li>• Manutenção de objetos pessoais ao alcance do paciente</li>
                      <li>• Educação sobre importância da campainha de chamada</li>
                      <li>• Avaliação da necessidade de barras de apoio no banheiro</li>
                      <li>• Reavaliação semanal ou conforme mudanças clínicas</li>
                    </ul>
                  </div>

                  <div className="border border-red-200 rounded-lg p-4 bg-red-50">
                    <h4 className="font-semibold text-red-800 mb-3">Alto Risco (≥3 pontos)</h4>
                    <ul className="space-y-2 text-red-700">
                      <li>• Implementação de todas as medidas do baixo risco</li>
                      <li>• Supervisão frequente, especialmente durante transferências</li>
                      <li>• Revisão médica da prescrição para ajuste de medicações</li>
                      <li>• Avaliação e fornecimento de dispositivos de auxílio adequados</li>
                      <li>• Encaminhamento para fisioterapia quando indicado</li>
                      <li>• Educação intensiva do paciente e familiares</li>
                      <li>• Consideração de alarmes de movimento quando apropriado</li>
                      <li>• Avaliação oftalmológica e otorrinolaringológica quando necessário</li>
                      <li>• Monitorização de sinais vitais, especialmente pressão arterial</li>
                      <li>• Documentação detalhada e comunicação com equipe multiprofissional</li>
                      <li>• Reavaliação diária ou conforme necessário</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="example" className="space-y-6">
            <Card className="border-nursing-sage/20 bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-nursing-forest flex items-center">
                  <FileText className="mr-2 h-5 w-5" />
                  Exemplo Detalhado de Evolução de Enfermagem
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <div className="space-y-4 font-mono text-sm">
                    <div className="border-b border-gray-300 pb-2">
                      <strong>EVOLUÇÃO DE ENFERMAGEM</strong>
                      <br />
                      Data: 20/03/2024 - Horário: 10:15h
                      <br />
                      Paciente: Maria Aparecida Silva - Leito: 312B
                      <br />
                      Enfermeiro(a): Carlos Eduardo Santos - COREN-SP 234567
                    </div>

                    <div>
                      <strong>AVALIAÇÃO DO RISCO DE QUEDAS - ESCALA DE DOWNTON:</strong>
                      <br />
                      <br />
                      <strong>1. Quedas Prévias:</strong> SIM (1 ponto)
                      <br />
                      Paciente relata duas quedas em domicílio nos últimos 8 meses. Primeira queda há 8 meses no
                      banheiro, sem lesões graves. Segunda queda há 3 meses na cozinha, resultando em contusão em membro
                      inferior direito. Refere medo de cair novamente e insegurança para deambular sozinha.
                      <br />
                      <br />
                      <strong>2. Medicamentos:</strong> MÚLTIPLOS (3 pontos)
                      <br />- Diurético: Furosemida 40mg 1x/dia (1 ponto)
                      <br />- Anti-hipertensivo: Enalapril 10mg 2x/dia (1 ponto)
                      <br />- Antidepressivo: Sertralina 50mg 1x/dia (1 ponto)
                      <br />
                      Paciente em uso regular das medicações há mais de 6 meses, com boa adesão ao tratamento.
                      <br />
                      <br />
                      <strong>3. Déficits Sensoriais:</strong> DÉFICIT VISUAL (1 ponto)
                      <br />
                      Paciente apresenta diminuição importante da acuidade visual bilateral, usa óculos para longe e
                      perto. Refere dificuldade para enxergar em ambientes com pouca luminosidade. Não apresenta
                      déficits auditivos ou de membros significativos.
                      <br />
                      <br />
                      <strong>4. Estado Mental:</strong> ORIENTADO (0 pontos)
                      <br />
                      Paciente orientada no tempo, espaço e pessoa. Apresenta boa capacidade de compreensão e
                      julgamento. Demonstra insight adequado sobre suas limitações e riscos. Não apresenta sinais de
                      confusão mental ou alterações cognitivas significativas.
                      <br />
                      <br />
                      <strong>5. Capacidade de Deambulação:</strong> SEGURA COM AUXÍLIO (1 ponto)
                      <br />
                      Paciente deambula com auxílio de bengala, apresenta marcha lenta mas estável quando utiliza o
                      dispositivo de apoio. Demonstra insegurança para deambular sem a bengala, especialmente em
                      superfícies irregulares ou em ambientes desconhecidos.
                      <br />
                      <br />
                      <strong>PONTUAÇÃO TOTAL: 6 pontos</strong>
                      <br />
                      <strong>CLASSIFICAÇÃO: ALTO RISCO DE QUEDAS</strong>
                      <br />
                      <br />
                      <strong>INTERPRETAÇÃO CLÍNICA:</strong>
                      <br />
                      Paciente de 78 anos apresenta múltiplos fatores de risco para quedas, incluindo histórico prévio
                      de quedas, uso de medicamentos que podem afetar o equilíbrio e a pressão arterial, déficit visual
                      significativo e dependência de dispositivo auxiliar para deambulação segura. A pontuação de 6
                      pontos indica necessidade de implementação imediata de medidas preventivas intensivas e
                      monitorização rigorosa.
                      <br />
                      <br />
                      <strong>INTERVENÇÕES DE ENFERMAGEM IMPLEMENTADAS:</strong>
                      <br />- Orientação detalhada à paciente sobre risco de quedas e medidas preventivas
                      <br />- Supervisão durante todas as transferências e deambulação
                      <br />- Bengala mantida sempre ao alcance da paciente
                      <br />- Ambiente do quarto organizado, livre de obstáculos
                      <br />- Iluminação noturna adequada mantida
                      <br />- Calçado antiderrapante fornecido e orientado o uso
                      <br />- Campainha de chamada sempre ao alcance
                      <br />- Orientação sobre não se levantar sozinha, especialmente à noite
                      <br />- Comunicação com equipe médica sobre medicações em uso
                      <br />- Solicitação de avaliação oftalmológica
                      <br />- Educação da filha acompanhante sobre supervisão e auxílio
                      <br />- Grades laterais elevadas quando paciente no leito
                      <br />
                      <br />
                      <strong>OBSERVAÇÕES CLÍNICAS:</strong>
                      <br />
                      Paciente colaborativa e receptiva às orientações. Demonstra compreensão adequada sobre os riscos e
                      a importância das medidas preventivas. Filha presente durante as orientações, demonstra
                      disponibilidade para auxiliar nos cuidados. Paciente refere melhora da confiança quando utiliza a
                      bengala adequadamente. Sinais vitais estáveis, PA: 130/80 mmHg.
                      <br />
                      <br />
                      <strong>CONDUTAS ADOTADAS:</strong>
                      <br />- Manutenção rigorosa das medidas preventivas implementadas
                      <br />- Monitorização contínua durante toda a internação
                      <br />- Reavaliação diária com a Escala de Downton
                      <br />- Discussão com equipe médica sobre possível ajuste de medicações
                      <br />- Encaminhamento para fisioterapia para treino de marcha e fortalecimento
                      <br />- Seguimento com equipe multiprofissional
                      <br />- Educação continuada da paciente e familiar
                      <br />
                      <br />
                      <strong>REFERÊNCIA:</strong> Protocolo Institucional de Prevenção de Quedas. Downton Fall Risk
                      Index - Downton, J.H. & Andrews, K. (1991).
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="references" className="space-y-6">
            <Card className="border-nursing-sage/20 bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-nursing-forest flex items-center">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Referências Oficiais e Científicas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-nursing-forest mb-3">Referências Primárias</h4>
                    <div className="space-y-3 text-nursing-forest/80">
                      <p>
                        <strong>Downton, J. H., & Andrews, K. (1991).</strong> Prevalence, characteristics and factors
                        associated with falls among the elderly living at home.{" "}
                        <em>Aging Clinical and Experimental Research, 3</em>(3), 219-228.
                      </p>
                      <p>
                        <strong>Downton, J. H. (1993).</strong> Falls in the elderly. <em>Edward Arnold Publishers</em>.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-nursing-forest mb-3">Estudos de Validação</h4>
                    <div className="space-y-3 text-nursing-forest/80">
                      <p>
                        <strong>Nyberg, L., & Gustafson, Y. (1995).</strong> Patient falls in stroke rehabilitation: a
                        challenge to rehabilitation strategies. <em>Stroke, 26</em>(5), 838-842.
                      </p>
                      <p>
                        <strong>Perell, K. L., et al. (2001).</strong> Fall risk assessment measures: an analytic
                        review.{" "}
                        <em>The Journals of Gerontology Series A: Biological Sciences and Medical Sciences, 56</em>(12),
                        M761-M766.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-nursing-forest mb-3">Normas e Protocolos Nacionais</h4>
                    <div className="space-y-3 text-nursing-forest/80">
                      <p>
                        <strong>Ministério da Saúde. (2013).</strong> Protocolo de Prevenção de Quedas. Programa
                        Nacional de Segurança do Paciente. Brasília: MS.
                      </p>
                      <p>
                        <strong>Sociedade Brasileira de Geriatria e Gerontologia. (2008).</strong> Quedas em idosos:
                        Prevenção. Projeto Diretrizes. São Paulo: SBGG.
                      </p>
                      <p>
                        <strong>Conselho Federal de Enfermagem - COFEN. (2017).</strong> Resolução COFEN nº 543/2017.
                        Atualiza e estabelece parâmetros para o Dimensionamento do Quadro de Profissionais de
                        Enfermagem.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-nursing-forest mb-3">Estudos Brasileiros</h4>
                    <div className="space-y-3 text-nursing-forest/80">
                      <p>
                        <strong>Schiaveto, F. V., et al. (2008).</strong> Avaliação do risco de quedas em idosos na
                        comunidade. <em>Revista Brasileira de Fisioterapia, 12</em>(2), 124-128.
                      </p>
                      <p>
                        <strong>Pimentel, R. M., & Scheicher, M. E. (2009).</strong> Comparação do risco de queda em
                        idosos sedentários e ativos por meio da escala de Berg. <em>Fisioterapia e Pesquisa, 16</em>(1),
                        6-10.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-nursing-forest mb-3">Diretrizes Internacionais</h4>
                    <div className="space-y-3 text-nursing-forest/80">
                      <p>
                        <strong>American Geriatrics Society. (2011).</strong> Summary of the Updated American Geriatrics
                        Society/British Geriatrics Society clinical practice guideline for prevention of falls in older
                        persons. <em>Journal of the American Geriatrics Society, 59</em>(1), 148-157.
                      </p>
                      <p>
                        <strong>World Health Organization. (2007).</strong> WHO Global Report on Falls Prevention in
                        Older Age. Geneva: WHO Press.
                      </p>
                    </div>
                  </div>

                  <div className="bg-nursing-mint/20 p-4 rounded-lg">
                    <h4 className="font-semibold text-nursing-forest mb-2">Nota Importante</h4>
                    <p className="text-nursing-forest/80 text-sm">
                      A Escala de Downton é especialmente recomendada para populações idosas e deve ser aplicada por
                      profissionais com experiência em cuidados geriátricos. Todas as referências citadas são baseadas
                      em evidências científicas sólidas. Para implementação adequada, consulte sempre os protocolos
                      institucionais e as diretrizes do COFEN/COREN de sua região.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
