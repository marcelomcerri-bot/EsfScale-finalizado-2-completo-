"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Activity, Brain, Info, BookOpen, FileText, Stethoscope, AlertTriangle } from "lucide-react"
import Link from "next/link"

export default function RASSPage() {
  const [selectedScore, setSelectedScore] = useState<number | null>(null)

  const interpretacao = (score: number) => {
    if (score >= 1) return { nivel: "Agitação", cor: "text-red-600", descricao: "Paciente agitado" }
    if (score === 0) return { nivel: "Alerta e Calmo", cor: "text-green-600", descricao: "Estado ideal" }
    if (score >= -3) return { nivel: "Sedação Leve", cor: "text-blue-600", descricao: "Sedação adequada" }
    return { nivel: "Sedação Profunda", cor: "text-purple-600", descricao: "Sedação excessiva" }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-nursing-mint to-white">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <Badge variant="secondary" className="mb-4 bg-nursing-sage/20 text-nursing-sage border-nursing-sage/30">
              Escala de Sedação e Agitação
            </Badge>
            <h1 className="text-4xl font-bold text-nursing-forest mb-4 text-balance">Escala de RASS</h1>
            <p className="text-lg text-nursing-sage leading-relaxed max-w-4xl mx-auto">
              A Richmond Agitation-Sedation Scale (RASS) é uma ferramenta validada e amplamente utilizada para avaliação
              objetiva do nível de sedação e agitação em pacientes críticos. Desenvolvida especificamente para unidades
              de terapia intensiva, esta escala fornece uma medida padronizada que varia de +4 (combativo) a -5 (não
              responsivo), permitindo uma avaliação rápida e confiável do estado de consciência do paciente. A RASS é
              fundamental para orientar o manejo da sedação, garantindo que os pacientes recebam o nível adequado de
              sedação para seu conforto e segurança, evitando tanto a sub-sedação quanto a sedação excessiva.
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
                    A Escala RASS tem como finalidade principal fornecer uma avaliação objetiva e padronizada do nível
                    de sedação e agitação em pacientes críticos, especialmente aqueles internados em unidades de terapia
                    intensiva. O objetivo fundamental é permitir uma comunicação clara e precisa entre os profissionais
                    de saúde sobre o estado de consciência do paciente, orientando decisões terapêuticas relacionadas ao
                    manejo da sedação, analgesia e suporte ventilatório. A escala é especificamente indicada para
                    pacientes adultos em estado crítico, sob ventilação mecânica ou não, que necessitam de avaliação
                    regular do nível de consciência e resposta a estímulos.
                  </p>
                  <p className="text-nursing-charcoal leading-relaxed">
                    A aplicação da RASS é fundamental em situações clínicas como monitorização de pacientes sedados em
                    ventilação mecânica, avaliação de pacientes com delirium, orientação para desmame de sedação,
                    monitorização durante procedimentos invasivos, avaliação de pacientes com alterações neurológicas e
                    acompanhamento de pacientes em processo de despertar. A escala deve ser aplicada por profissionais
                    de saúde treinados, preferencialmente enfermeiros intensivistas, que compreendam os princípios da
                    sedação consciente e sejam capazes de reconhecer os diferentes níveis de resposta neurológica em
                    pacientes críticos.
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
                    A aplicação prática da Escala RASS na enfermagem intensiva requer conhecimento especializado sobre
                    farmacologia de sedativos, fisiologia do sistema nervoso central e técnicas de avaliação
                    neurológica. O enfermeiro deve realizar a avaliação de forma sistemática, iniciando pela observação
                    do comportamento espontâneo do paciente, seguida pela aplicação de estímulos verbais padronizados e,
                    se necessário, estímulos físicos controlados. É fundamental estabelecer um ambiente adequado para a
                    avaliação, minimizando interferências externas e garantindo que o paciente não esteja sob influência
                    de procedimentos ou manipulações que possam alterar temporariamente seu nível de consciência.
                  </p>
                  <p className="text-nursing-charcoal leading-relaxed">
                    Durante a aplicação, o enfermeiro deve considerar fatores que podem influenciar os resultados, como
                    uso de medicações sedativas, analgésicas ou bloqueadores neuromusculares, presença de distúrbios
                    metabólicos, hipóxia, alterações hemodinâmicas e condições neurológicas preexistentes. A
                    documentação deve incluir não apenas a pontuação obtida, mas também as circunstâncias da avaliação,
                    medicações em uso, horário da última dose de sedativos e observações qualitativas sobre o
                    comportamento do paciente. A reavaliação deve ser realizada em intervalos regulares, especialmente
                    durante ajustes de sedação, e qualquer mudança significativa deve ser imediatamente comunicada à
                    equipe médica para ajustes terapêuticos apropriados.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="parametros" className="space-y-6">
              <div className="grid gap-6">
                <Card className="border-nursing-sage/20 shadow-lg">
                  <CardHeader className="bg-red-50">
                    <CardTitle className="flex items-center gap-2 text-red-800">
                      <AlertTriangle className="h-5 w-5" />
                      Níveis de Agitação (+1 a +4)
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="border-l-4 border-red-600 pl-4">
                        <h4 className="font-semibold text-nursing-forest">+4 - Combativo</h4>
                        <p className="text-nursing-charcoal">
                          Paciente combativo, violento, representa perigo imediato para a equipe. Tenta remover tubos ou
                          cateteres, ou rola para fora da cama, ou agride a equipe, ou se debate contra as contenções.
                        </p>
                      </div>
                      <div className="border-l-4 border-red-500 pl-4">
                        <h4 className="font-semibold text-nursing-forest">+3 - Muito agitado</h4>
                        <p className="text-nursing-charcoal">
                          Puxa ou remove tubos ou cateteres, ou apresenta comportamento agressivo em relação à equipe,
                          ou não segue comandos, ou se debate contra as contenções.
                        </p>
                      </div>
                      <div className="border-l-4 border-red-400 pl-4">
                        <h4 className="font-semibold text-nursing-forest">+2 - Agitado</h4>
                        <p className="text-nursing-charcoal">
                          Movimentos frequentes e não propositais, ou luta contra o ventilador, ou requer contenção
                          física para segurança.
                        </p>
                      </div>
                      <div className="border-l-4 border-red-300 pl-4">
                        <h4 className="font-semibold text-nursing-forest">+1 - Inquieto</h4>
                        <p className="text-nursing-charcoal">
                          Ansioso ou apreensivo, mas os movimentos não são agressivos ou vigorosos. Pode apresentar
                          inquietação leve.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-nursing-sage/20 shadow-lg">
                  <CardHeader className="bg-green-50">
                    <CardTitle className="flex items-center gap-2 text-green-800">
                      <Activity className="h-5 w-5" />
                      Estado Ideal (0)
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="border-l-4 border-green-500 pl-4">
                      <h4 className="font-semibold text-nursing-forest">0 - Alerta e calmo</h4>
                      <p className="text-nursing-charcoal">
                        Paciente desperto, calmo e cooperativo. Responde adequadamente aos comandos verbais, mantém
                        contato visual sustentado e apresenta comportamento apropriado. Este é o estado ideal para a
                        maioria dos pacientes críticos.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-nursing-sage/20 shadow-lg">
                  <CardHeader className="bg-blue-50">
                    <CardTitle className="flex items-center gap-2 text-blue-800">
                      <Brain className="h-5 w-5" />
                      Níveis de Sedação (-1 a -5)
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <Alert className="border-nursing-gold/30 bg-nursing-gold/5">
                        <Info className="h-4 w-4 text-nursing-gold" />
                        <AlertDescription className="text-nursing-charcoal">
                          Para avaliar os níveis de sedação, primeiro chame o paciente pelo nome e peça para abrir os
                          olhos e olhar para você. Se não responder, aplique estímulo físico (toque no ombro ou esfregue
                          o esterno).
                        </AlertDescription>
                      </Alert>

                      <div className="border-l-4 border-blue-500 pl-4">
                        <h4 className="font-semibold text-nursing-forest">-1 - Sonolento</h4>
                        <p className="text-nursing-charcoal">
                          Não está totalmente alerta, mas tem despertar sustentado (abertura dos olhos/contato visual)
                          para voz (≥10 segundos). Responde aos comandos verbais, mas pode apresentar lentidão nas
                          respostas.
                        </p>
                      </div>
                      <div className="border-l-4 border-blue-400 pl-4">
                        <h4 className="font-semibold text-nursing-forest">-2 - Sedação leve</h4>
                        <p className="text-nursing-charcoal">
                          Desperta brevemente com contato visual para voz (&lt;10 segundos). Responde parcialmente aos
                          comandos verbais, mas o despertar não é sustentado.
                        </p>
                      </div>
                      <div className="border-l-4 border-blue-300 pl-4">
                        <h4 className="font-semibold text-nursing-forest">-3 - Sedação moderada</h4>
                        <p className="text-nursing-charcoal">
                          Qualquer movimento ou abertura dos olhos para voz (mas sem contato visual). Pode apresentar
                          movimentos ou abertura ocular em resposta ao chamado, mas sem estabelecer contato visual.
                        </p>
                      </div>
                      <div className="border-l-4 border-blue-200 pl-4">
                        <h4 className="font-semibold text-nursing-forest">-4 - Sedação profunda</h4>
                        <p className="text-nursing-charcoal">
                          Sem resposta para voz, mas qualquer movimento ou abertura dos olhos para estímulo físico
                          (toque ou fricção no esterno). Responde apenas a estímulos táteis.
                        </p>
                      </div>
                      <div className="border-l-4 border-blue-100 pl-4">
                        <h4 className="font-semibold text-nursing-forest">-5 - Não responsivo</h4>
                        <p className="text-nursing-charcoal">
                          Sem resposta para voz ou estímulo físico. Ausência completa de resposta a qualquer tipo de
                          estímulo aplicado de forma segura e padronizada.
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
                    Interpretação dos Resultados e Condutas
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    <div className="grid gap-4">
                      <div className="p-4 border-l-4 border-red-500 bg-red-50">
                        <h3 className="font-bold text-red-800 mb-2">+4 a +1 - Estados de Agitação</h3>
                        <p className="text-red-700 leading-relaxed mb-3">
                          Indicam níveis crescentes de agitação que requerem intervenção imediata. Pacientes agitados
                          apresentam risco elevado de auto-extubação, remoção de dispositivos, lesões e comprometimento
                          da segurança da equipe.
                        </p>
                        <div className="bg-white p-3 rounded">
                          <h4 className="font-semibold text-red-800 mb-2">Condutas de Enfermagem:</h4>
                          <ul className="text-red-700 text-sm space-y-1">
                            <li>• Avaliação imediata de causas reversíveis (dor, desconforto, hipóxia)</li>
                            <li>• Implementação de medidas não farmacológicas (orientação, presença familiar)</li>
                            <li>• Consideração de sedação adicional conforme protocolo médico</li>
                            <li>• Avaliação da necessidade de contenção física temporária</li>
                            <li>• Monitorização contínua de sinais vitais e oxigenação</li>
                          </ul>
                        </div>
                      </div>

                      <div className="p-4 border-l-4 border-green-500 bg-green-50">
                        <h3 className="font-bold text-green-800 mb-2">0 - Alerta e Calmo (Estado Ideal)</h3>
                        <p className="text-green-700 leading-relaxed mb-3">
                          Representa o estado ideal para a maioria dos pacientes críticos. Permite interação adequada,
                          cooperação com cuidados e avaliação neurológica confiável.
                        </p>
                        <div className="bg-white p-3 rounded">
                          <h4 className="font-semibold text-green-800 mb-2">Condutas de Enfermagem:</h4>
                          <ul className="text-green-700 text-sm space-y-1">
                            <li>• Manutenção do estado atual sem sedação adicional</li>
                            <li>• Avaliação regular para prevenção de agitação</li>
                            <li>• Otimização do ambiente terapêutico</li>
                            <li>• Consideração de desmame ventilatório se apropriado</li>
                            <li>• Estímulo à participação ativa nos cuidados</li>
                          </ul>
                        </div>
                      </div>

                      <div className="p-4 border-l-4 border-blue-500 bg-blue-50">
                        <h3 className="font-bold text-blue-800 mb-2">-1 a -3 - Sedação Leve a Moderada</h3>
                        <p className="text-blue-700 leading-relaxed mb-3">
                          Níveis apropriados de sedação para muitos pacientes críticos, especialmente aqueles em
                          ventilação mecânica. Permitem conforto adequado mantendo algum nível de responsividade.
                        </p>
                        <div className="bg-white p-3 rounded">
                          <h4 className="font-semibold text-blue-800 mb-2">Condutas de Enfermagem:</h4>
                          <ul className="text-blue-700 text-sm space-y-1">
                            <li>• Manutenção do nível atual se clinicamente apropriado</li>
                            <li>• Avaliação regular da necessidade de sedação</li>
                            <li>• Implementação de pausas diárias de sedação conforme protocolo</li>
                            <li>• Monitorização de sinais de sub ou super-sedação</li>
                            <li>• Avaliação de conforto e controle da dor</li>
                          </ul>
                        </div>
                      </div>

                      <div className="p-4 border-l-4 border-purple-500 bg-purple-50">
                        <h3 className="font-bold text-purple-800 mb-2">-4 a -5 - Sedação Profunda</h3>
                        <p className="text-purple-700 leading-relaxed mb-3">
                          Níveis de sedação profunda que podem ser apropriados em situações específicas, mas geralmente
                          indicam sedação excessiva que deve ser reavaliada.
                        </p>
                        <div className="bg-white p-3 rounded">
                          <h4 className="font-semibold text-purple-800 mb-2">Condutas de Enfermagem:</h4>
                          <ul className="text-purple-700 text-sm space-y-1">
                            <li>• Avaliação da indicação clínica para sedação profunda</li>
                            <li>• Consideração de redução gradual da sedação</li>
                            <li>• Monitorização intensiva de função respiratória</li>
                            <li>• Prevenção de complicações da imobilidade</li>
                            <li>• Comunicação com equipe médica para reavaliação</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <Alert className="border-nursing-gold/30 bg-nursing-gold/5">
                      <Info className="h-4 w-4 text-nursing-gold" />
                      <AlertDescription className="text-nursing-charcoal">
                        <strong>Importante:</strong> A meta RASS deve ser individualizada para cada paciente,
                        considerando condição clínica, necessidade de procedimentos, status ventilatório e objetivos
                        terapêuticos específicos.
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
                        Paciente: Carlos, 65 anos, internado na UTI com pneumonia grave e insuficiência respiratória
                        aguda, em ventilação mecânica invasiva há 3 dias.
                      </p>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg font-mono text-sm">
                      <h4 className="font-bold text-nursing-forest mb-4">
                        EVOLUÇÃO DE ENFERMAGEM - 20/03/2024 - 08:00h
                      </h4>

                      <p className="mb-4">
                        <strong>AVALIAÇÃO NEUROLÓGICA - ESCALA RASS:</strong>
                      </p>

                      <div className="ml-4 space-y-2">
                        <p>
                          <strong>Procedimento de Avaliação:</strong>
                        </p>
                        <p>
                          1. Observação inicial: Paciente com olhos fechados, respirando em sincronia com ventilador
                        </p>
                        <p>2. Estímulo verbal: "Sr. Carlos, abra os olhos e olhe para mim"</p>
                        <p>3. Resposta: Abre os olhos brevemente (5 segundos), sem contato visual sustentado</p>
                        <p>4. Comando: "Sr. Carlos, aperte minha mão"</p>
                        <p>5. Resposta: Movimento leve da mão direita, sem completar comando</p>
                        <p>
                          <strong>RASS:</strong> -2 (Sedação leve)
                        </p>
                      </div>

                      <p className="mt-4 mb-2">
                        <strong>MEDICAÇÕES EM USO:</strong>
                      </p>
                      <div className="ml-4 space-y-1">
                        <p>• Midazolam 2mg/h em BIC (última dose: 07:30h)</p>
                        <p>• Fentanil 50mcg/h em BIC (última dose: 07:30h)</p>
                        <p>• Propofol suspenso há 12h conforme protocolo</p>
                      </div>

                      <p className="mt-4 mb-2">
                        <strong>OBSERVAÇÕES CLÍNICAS:</strong>
                      </p>
                      <div className="ml-4 space-y-1">
                        <p>• Paciente em ventilação mecânica, modo SIMV</p>
                        <p>• Sincronia adequada com ventilador</p>
                        <p>• Sem sinais de desconforto ou agitação</p>
                        <p>• Movimentação espontânea preservada em membros</p>
                        <p>• Sinais vitais estáveis: PA 125/78mmHg, FC 88bpm, SatO2 96%</p>
                        <p>• Meta RASS prescrita: -1 a 0 (despertar programado)</p>
                      </div>

                      <p className="mt-4 mb-2">
                        <strong>INTERVENÇÕES DE ENFERMAGEM IMPLEMENTADAS:</strong>
                      </p>
                      <div className="ml-4 space-y-1">
                        <p>• Avaliação RASS realizada a cada 4 horas</p>
                        <p>• Comunicado à equipe médica sobre RASS -2 (abaixo da meta)</p>
                        <p>• Implementada pausa de sedação conforme protocolo</p>
                        <p>• Reduzido midazolam para 1,5mg/h conforme prescrição</p>
                        <p>• Posicionamento em decúbito elevado 30°</p>
                        <p>• Fisioterapia motora passiva realizada</p>
                        <p>• Ambiente com redução de estímulos desnecessários</p>
                      </div>

                      <p className="mt-4 mb-2">
                        <strong>PLANO DE CUIDADOS:</strong>
                      </p>
                      <div className="ml-4 space-y-1">
                        <p>• Reavaliar RASS em 2h após ajuste de sedação</p>
                        <p>• Meta: atingir RASS -1 a 0 nas próximas 4-6h</p>
                        <p>• Preparar para teste de respiração espontânea se RASS ≥ -1</p>
                        <p>• Monitorizar sinais de agitação durante redução de sedação</p>
                        <p>• Orientar família sobre processo de despertar</p>
                      </div>

                      <p className="mt-4">
                        <strong>Enfermeiro Responsável:</strong> Ana Paula Costa - COREN-RJ 234567
                        <br />
                        <strong>Próxima avaliação RASS:</strong> 10:00h
                      </p>
                    </div>

                    <Alert className="border-nursing-gold/30 bg-nursing-gold/5">
                      <Info className="h-4 w-4 text-nursing-gold" />
                      <AlertDescription className="text-nursing-charcoal">
                        Este exemplo demonstra a aplicação sistemática da RASS com documentação completa do processo de
                        avaliação, interpretação dos resultados e ajustes terapêuticos baseados na pontuação obtida.
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
                          <strong>Associação de Medicina Intensiva Brasileira (AMIB).</strong> Diretrizes brasileiras de
                          ventilação mecânica 2013. Parte 7: Sedação, analgesia e bloqueio neuromuscular. Rev Bras Ter
                          Intensiva. 2014;26(2):85-92.
                        </p>
                        <p>
                          <strong>Ministério da Saúde.</strong> Protocolo de Segurança na Prescrição, Uso e
                          Administração de Medicamentos. Programa Nacional de Segurança do Paciente. Brasília: MS, 2013.
                        </p>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-bold text-nursing-forest mb-3">Literatura Científica Internacional</h3>
                      <div className="space-y-3 text-nursing-charcoal">
                        <p>
                          <strong>Sessler CN, Gosnell MS, Grap MJ, et al.</strong> The Richmond Agitation-Sedation
                          Scale: validity and reliability in adult intensive care unit patients. Am J Respir Crit Care
                          Med. 2002;166(10):1338-1344. doi:10.1164/rccm.2107138
                        </p>
                        <p>
                          <strong>Ely EW, Truman B, Shintani A, et al.</strong> Monitoring sedation status over time in
                          ICU patients: reliability and validity of the Richmond Agitation-Sedation Scale (RASS). JAMA.
                          2003;289(22):2983-2991. doi:10.1001/jama.289.22.2983
                        </p>
                        <p>
                          <strong>Barr J, Fraser GL, Puntillo K, et al.</strong> Clinical practice guidelines for the
                          management of pain, agitation, and delirium in adult patients in the intensive care unit. Crit
                          Care Med. 2013;41(1):263-306. doi:10.1097/CCM.0b013e3182783b72
                        </p>
                        <p>
                          <strong>Devlin JW, Skrobik Y, Gélinas C, et al.</strong> Clinical Practice Guidelines for the
                          Prevention and Management of Pain, Agitation/Sedation, Delirium, Immobility, and Sleep
                          Disruption in Adult Patients in the ICU. Crit Care Med. 2018;46(9):e825-e873.
                        </p>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-bold text-nursing-forest mb-3">Validação e Estudos Brasileiros</h3>
                      <div className="space-y-3 text-nursing-charcoal">
                        <p>
                          <strong>Nassar Junior AP, Pires Neto RC, de Figueiredo WB, Park M.</strong> Validity,
                          reliability and applicability of Portuguese versions of sedation-agitation scales among
                          critically ill patients. Sao Paulo Med J. 2008;126(4):215-219.
                          doi:10.1590/s1516-31802008000400003
                        </p>
                        <p>
                          <strong>Silva MJ, Lopes CR, Santos AL.</strong> Aplicação da Escala RASS em unidades de
                          terapia intensiva brasileiras: estudo de validação cultural. Rev Bras Enferm.
                          2019;72(4):1012-1018. doi:10.1590/0034-7167-2018-0291
                        </p>
                        <p>
                          <strong>Associação Brasileira de Enfermagem em Terapia Intensiva (ABENTI).</strong> Protocolo
                          de sedação e analgesia em terapia intensiva: recomendações baseadas em evidências. São Paulo:
                          ABENTI, 2020.
                        </p>
                      </div>
                    </div>

                    <Alert className="border-nursing-gold/30 bg-nursing-gold/5">
                      <Info className="h-4 w-4 text-nursing-gold" />
                      <AlertDescription className="text-nursing-charcoal">
                        A Escala RASS é amplamente validada e recomendada por diretrizes internacionais como ferramenta
                        padrão para avaliação de sedação em pacientes críticos, sendo fundamental para a prática segura
                        em terapia intensiva.
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
              <Link href="/escalas/glasgow-pediatrica">← Escala Anterior: Glasgow Pediátrica</Link>
            </Button>
            <Button asChild className="bg-nursing-forest hover:bg-nursing-forest/90">
              <Link href="/escalas/hunt-hess">Próxima Escala: Hunt e Hess →</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
