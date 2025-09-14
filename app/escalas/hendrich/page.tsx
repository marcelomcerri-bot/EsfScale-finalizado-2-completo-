"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { ArrowLeft, Shield, AlertTriangle, CheckCircle, FileText, BookOpen, Users } from "lucide-react"
import Link from "next/link"

export default function HendrichPage() {
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
              <h1 className="text-3xl font-bold text-nursing-forest">Escala de Hendrich II</h1>
              <p className="text-nursing-forest/70">Hendrich II Fall Risk Model</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            <Badge className="bg-nursing-forest text-white">Risco de Quedas</Badge>
            <Badge variant="outline" className="border-nursing-sage text-nursing-forest">
              Adultos Hospitalizados
            </Badge>
            <Badge variant="outline" className="border-nursing-sage text-nursing-forest">
              0-16 pontos
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
                  A Escala de Hendrich II (Hendrich II Fall Risk Model) é um instrumento de avaliação do risco de quedas
                  desenvolvido especificamente para ambientes hospitalares, criado por Ann Hendrich em 2003 como uma
                  versão refinada e simplificada do modelo original de Hendrich. Esta escala tem como objetivo principal
                  identificar pacientes adultos hospitalizados com maior probabilidade de sofrer quedas durante a
                  internação, utilizando oito fatores de risco independentes que foram validados através de extensos
                  estudos multicêntricos. A ferramenta foi desenvolvida com base em análise estatística rigorosa de mais
                  de 355.000 pacientes, tornando-se uma das escalas de risco de quedas mais cientificamente
                  fundamentadas disponíveis na prática clínica.
                </p>
                <p className="leading-relaxed">
                  A aplicação da Escala de Hendrich II é indicada para todos os pacientes adultos hospitalizados,
                  independentemente da unidade de internação, sendo especialmente útil em unidades de clínica médica,
                  cirúrgica, ortopédica, neurológica e geriátrica. A escala é particularmente valiosa para pacientes com
                  múltiplas comorbidades, idosos, pacientes em uso de medicamentos psicoativos, indivíduos com
                  alterações do estado mental, e aqueles com limitações na mobilidade. Sua aplicação deve ser realizada
                  na admissão do paciente e reavaliada a cada 24 horas ou sempre que houver mudanças significativas no
                  estado clínico, alterações na medicação, ou modificações na capacidade funcional do paciente.
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
                      <h4 className="font-semibold text-nursing-forest mb-2">
                        1. Confusão/Desorientação/Impulsividade
                      </h4>
                      <div className="space-y-2 text-nursing-forest/80">
                        <p>
                          <strong>Ausente (0 pontos):</strong> Paciente orientado no tempo, espaço e pessoa, sem
                          alterações cognitivas
                        </p>
                        <p>
                          <strong>Presente (4 pontos):</strong> Paciente apresenta confusão mental, desorientação,
                          comportamento impulsivo, demência, delirium ou alterações cognitivas que comprometem o
                          julgamento
                        </p>
                      </div>
                    </div>

                    <div className="border border-nursing-sage/20 rounded-lg p-4 bg-nursing-mint/10">
                      <h4 className="font-semibold text-nursing-forest mb-2">2. Depressão</h4>
                      <div className="space-y-2 text-nursing-forest/80">
                        <p>
                          <strong>Ausente (0 pontos):</strong> Paciente não apresenta diagnóstico de depressão ou
                          sintomas depressivos significativos
                        </p>
                        <p>
                          <strong>Presente (2 pontos):</strong> Paciente com diagnóstico de depressão, em uso de
                          antidepressivos, ou apresentando sintomas depressivos que possam afetar a motivação e atenção
                        </p>
                      </div>
                    </div>

                    <div className="border border-nursing-sage/20 rounded-lg p-4 bg-nursing-mint/10">
                      <h4 className="font-semibold text-nursing-forest mb-2">3. Alteração da Eliminação</h4>
                      <div className="space-y-2 text-nursing-forest/80">
                        <p>
                          <strong>Ausente (0 pontos):</strong> Paciente com controle normal da eliminação urinária e
                          intestinal
                        </p>
                        <p>
                          <strong>Presente (1 ponto):</strong> Paciente apresenta incontinência urinária, urgência
                          miccional, noctúria frequente, uso de fraldas, cateter vesical, ou necessidade frequente de ir
                          ao banheiro
                        </p>
                      </div>
                    </div>

                    <div className="border border-nursing-sage/20 rounded-lg p-4 bg-nursing-mint/10">
                      <h4 className="font-semibold text-nursing-forest mb-2">4. Tontura/Vertigem</h4>
                      <div className="space-y-2 text-nursing-forest/80">
                        <p>
                          <strong>Ausente (0 pontos):</strong> Paciente não relata episódios de tontura ou vertigem
                        </p>
                        <p>
                          <strong>Presente (1 ponto):</strong> Paciente relata episódios de tontura, vertigem,
                          desequilíbrio, ou sensação de instabilidade, especialmente durante mudanças de posição
                        </p>
                      </div>
                    </div>

                    <div className="border border-nursing-sage/20 rounded-lg p-4 bg-nursing-mint/10">
                      <h4 className="font-semibold text-nursing-forest mb-2">5. Sexo Masculino</h4>
                      <div className="space-y-2 text-nursing-forest/80">
                        <p>
                          <strong>Feminino (0 pontos):</strong> Paciente do sexo feminino
                        </p>
                        <p>
                          <strong>Masculino (1 ponto):</strong> Paciente do sexo masculino (fator de risco
                          estatisticamente identificado nos estudos de validação)
                        </p>
                      </div>
                    </div>

                    <div className="border border-nursing-sage/20 rounded-lg p-4 bg-nursing-mint/10">
                      <h4 className="font-semibold text-nursing-forest mb-2">6. Medicamentos Antiepilépticos</h4>
                      <div className="space-y-2 text-nursing-forest/80">
                        <p>
                          <strong>Não (0 pontos):</strong> Paciente não utiliza medicamentos antiepilépticos
                        </p>
                        <p>
                          <strong>Sim (2 pontos):</strong> Paciente em uso de carbamazepina, fenitoína, fenobarbital,
                          ácido valproico, lamotrigina, ou outros anticonvulsivantes
                        </p>
                      </div>
                    </div>

                    <div className="border border-nursing-sage/20 rounded-lg p-4 bg-nursing-mint/10">
                      <h4 className="font-semibold text-nursing-forest mb-2">7. Benzodiazepínicos</h4>
                      <div className="space-y-2 text-nursing-forest/80">
                        <p>
                          <strong>Não (0 pontos):</strong> Paciente não utiliza benzodiazepínicos
                        </p>
                        <p>
                          <strong>Sim (1 ponto):</strong> Paciente em uso de diazepam, lorazepam, clonazepam,
                          alprazolam, midazolam, ou outros benzodiazepínicos
                        </p>
                      </div>
                    </div>

                    <div className="border border-nursing-sage/20 rounded-lg p-4 bg-nursing-mint/10">
                      <h4 className="font-semibold text-nursing-forest mb-2">8. Teste "Get Up and Go"</h4>
                      <div className="space-y-2 text-nursing-forest/80">
                        <p>
                          <strong>Capaz de se levantar em movimento único (0 pontos):</strong> Paciente consegue
                          levantar-se da cadeira em um movimento fluido e contínuo
                        </p>
                        <p>
                          <strong>Empurra ou se move para se levantar OU incapaz (5 pontos):</strong> Paciente necessita
                          empurrar os braços da cadeira, fazer múltiplas tentativas, ou é incapaz de se levantar sem
                          auxílio
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
                        <strong>Baixo Risco (0-4 pontos):</strong> Paciente apresenta baixo risco de quedas. Implementar
                        medidas preventivas básicas de segurança, incluindo orientações sobre uso da campainha,
                        manutenção de ambiente organizado, iluminação adequada e calçados antiderrapantes. Reavaliação a
                        cada 24-48 horas.
                      </AlertDescription>
                    </Alert>

                    <Alert className="border-red-200 bg-red-50">
                      <AlertTriangle className="h-4 w-4 text-red-600" />
                      <AlertDescription className="text-red-800">
                        <strong>Alto Risco (≥5 pontos):</strong> Paciente apresenta alto risco de quedas. Implementar
                        medidas preventivas intensivas, incluindo supervisão frequente, revisão de medicações, avaliação
                        de dispositivos de auxílio, fisioterapia quando indicada, e monitorização rigorosa. Reavaliação
                        diária ou conforme necessário.
                      </AlertDescription>
                    </Alert>
                  </div>

                  <div className="bg-nursing-mint/20 p-4 rounded-lg">
                    <h4 className="font-semibold text-nursing-forest mb-2">Pontuação Total Possível</h4>
                    <p className="text-nursing-forest/80">
                      A pontuação total da Escala de Hendrich II varia de 0 a 16 pontos, sendo calculada pela soma dos
                      pontos obtidos em cada um dos oito fatores de risco avaliados. O ponto de corte estabelecido é de
                      5 pontos, sendo que pontuações iguais ou superiores a 5 indicam alto risco de quedas.
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
                  A aplicação da Escala de Hendrich II na prática de enfermagem requer uma abordagem sistemática e
                  baseada em evidências, considerando que esta ferramenta foi desenvolvida especificamente para o
                  ambiente hospitalar através de rigorosa validação científica. O processo de avaliação deve ser
                  iniciado preferencialmente nas primeiras horas após a admissão do paciente, sendo realizado por
                  enfermeiro com conhecimento adequado sobre os fatores de risco para quedas e experiência na aplicação
                  de instrumentos de avaliação clínica. É fundamental que o profissional responsável pela avaliação
                  tenha habilidades de observação clínica apurada e capacidade de realizar testes funcionais simples,
                  como o teste "Get Up and Go".
                </p>
                <p className="leading-relaxed">
                  Durante a aplicação da escala, o enfermeiro deve realizar uma avaliação abrangente que inclui anamnese
                  detalhada sobre sintomas neurológicos, estado emocional e padrões de eliminação, exame físico focado
                  na avaliação da mobilidade e equilíbrio, revisão cuidadosa da prescrição médica para identificar
                  medicamentos de risco, e aplicação do teste funcional "Get Up and Go" de forma padronizada. A
                  avaliação do estado mental deve ser realizada através de observação direta do comportamento do
                  paciente, avaliação da orientação temporal e espacial, e identificação de sinais de confusão,
                  impulsividade ou alterações cognitivas que possam comprometer a segurança.
                </p>
                <p className="leading-relaxed">
                  O teste "Get Up and Go" deve ser realizado de forma padronizada, solicitando ao paciente que se
                  levante de uma cadeira com braços, sem utilizar as mãos para apoio, observando se o movimento é
                  realizado em um único movimento fluido ou se há necessidade de múltiplas tentativas, uso dos braços
                  para impulsão, ou incapacidade de realizar o movimento. A reavaliação deve ser realizada diariamente
                  durante toda a internação, ou sempre que houver mudanças significativas no estado clínico do paciente,
                  alterações na medicação, modificações na capacidade funcional, ou após episódios de quedas ou
                  quase-quedas. Os resultados devem ser documentados de forma clara no prontuário, incluindo a pontuação
                  de cada item, a pontuação total, a classificação do risco e as medidas preventivas implementadas.
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
                    <h4 className="font-semibold text-green-800 mb-3">Baixo Risco (0-4 pontos)</h4>
                    <ul className="space-y-2 text-green-700">
                      <li>• Orientação sobre medidas básicas de prevenção de quedas</li>
                      <li>• Manutenção de ambiente seguro e organizado</li>
                      <li>• Garantia de iluminação adequada no quarto e banheiro</li>
                      <li>• Orientação sobre uso correto da campainha de chamada</li>
                      <li>• Fornecimento de calçados antiderrapantes</li>
                      <li>• Manutenção de objetos pessoais ao alcance do paciente</li>
                      <li>• Educação sobre importância de solicitar auxílio quando necessário</li>
                      <li>• Reavaliação a cada 24-48 horas</li>
                    </ul>
                  </div>

                  <div className="border border-red-200 rounded-lg p-4 bg-red-50">
                    <h4 className="font-semibold text-red-800 mb-3">Alto Risco (≥5 pontos)</h4>
                    <ul className="space-y-2 text-red-700">
                      <li>• Implementação de todas as medidas do baixo risco</li>
                      <li>• Supervisão frequente, especialmente durante transferências</li>
                      <li>• Revisão médica urgente da prescrição para ajuste de medicações</li>
                      <li>• Avaliação e fornecimento de dispositivos de auxílio adequados</li>
                      <li>• Encaminhamento para fisioterapia para avaliação e treino</li>
                      <li>• Monitorização rigorosa de sinais vitais e estado neurológico</li>
                      <li>• Educação intensiva do paciente e familiares sobre riscos</li>
                      <li>• Consideração de alarmes de movimento quando apropriado</li>
                      <li>• Avaliação médica para manejo de sintomas como tontura e depressão</li>
                      <li>• Implementação de protocolo de eliminação programada se necessário</li>
                      <li>• Documentação detalhada e comunicação com equipe multiprofissional</li>
                      <li>• Reavaliação diária obrigatória</li>
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
                      Data: 25/03/2024 - Horário: 08:45h
                      <br />
                      Paciente: Roberto Carlos Oliveira - Leito: 408A
                      <br />
                      Enfermeiro(a): Ana Paula Rodrigues - COREN-SP 345678
                    </div>

                    <div>
                      <strong>AVALIAÇÃO DO RISCO DE QUEDAS - ESCALA DE HENDRICH II:</strong>
                      <br />
                      <br />
                      <strong>1. Confusão/Desorientação/Impulsividade:</strong> PRESENTE (4 pontos)
                      <br />
                      Paciente apresenta episódios de confusão mental, especialmente no período noturno. Demonstra
                      desorientação temporal, não consegue informar corretamente a data atual. Apresenta comportamento
                      impulsivo, tentando levantar-se do leito sem solicitar auxílio, apesar das orientações repetidas.
                      Familiar relata que o quadro se intensificou após a internação.
                      <br />
                      <br />
                      <strong>2. Depressão:</strong> PRESENTE (2 pontos)
                      <br />
                      Paciente com diagnóstico de depressão há 3 anos, em uso regular de Sertralina 100mg/dia. Apresenta
                      humor deprimido, baixa motivação para atividades, e refere sentimentos de desesperança. Familiar
                      confirma histórico de tratamento psiquiátrico e uso contínuo de antidepressivo.
                      <br />
                      <br />
                      <strong>3. Alteração da Eliminação:</strong> PRESENTE (1 ponto)
                      <br />
                      Paciente apresenta urgência miccional e noctúria, necessitando ir ao banheiro frequentemente,
                      especialmente durante a madrugada. Refere episódios de incontinência urinária quando não consegue
                      chegar ao banheiro a tempo. Não utiliza fralda, mas demonstra ansiedade relacionada ao controle da
                      eliminação.
                      <br />
                      <br />
                      <strong>4. Tontura/Vertigem:</strong> PRESENTE (1 ponto)
                      <br />
                      Paciente relata episódios frequentes de tontura, especialmente ao levantar-se rapidamente do leito
                      ou da cadeira. Refere sensação de "cabeça leve" e desequilíbrio durante a deambulação. Episódios
                      mais intensos pela manhã e após períodos prolongados de repouso.
                      <br />
                      <br />
                      <strong>5. Sexo Masculino:</strong> MASCULINO (1 ponto)
                      <br />
                      Paciente do sexo masculino, 72 anos.
                      <br />
                      <br />
                      <strong>6. Medicamentos Antiepilépticos:</strong> NÃO (0 pontos)
                      <br />
                      Paciente não utiliza medicamentos antiepilépticos.
                      <br />
                      <br />
                      <strong>7. Benzodiazepínicos:</strong> SIM (1 ponto)
                      <br />
                      Paciente em uso de Clonazepam 2mg ao deitar para controle de ansiedade e melhora do padrão de
                      sono. Medicação prescrita há 6 meses pelo psiquiatra assistente.
                      <br />
                      <br />
                      <strong>8. Teste "Get Up and Go":</strong> EMPURRA OU SE MOVE PARA SE LEVANTAR (5 pontos)
                      <br />
                      Durante o teste, paciente necessitou utilizar os braços da cadeira para se impulsionar e
                      levantar-se, realizando o movimento em duas etapas. Demonstrou instabilidade inicial ao ficar em
                      pé, necessitando alguns segundos para recuperar o equilíbrio antes de iniciar a deambulação.
                      <br />
                      <br />
                      <strong>PONTUAÇÃO TOTAL: 15 pontos</strong>
                      <br />
                      <strong>CLASSIFICAÇÃO: ALTO RISCO DE QUEDAS</strong>
                      <br />
                      <br />
                      <strong>INTERPRETAÇÃO CLÍNICA:</strong>
                      <br />
                      Paciente de 72 anos apresenta múltiplos fatores de risco significativos para quedas, incluindo
                      alterações cognitivas com confusão e impulsividade, depressão em tratamento, alterações da
                      eliminação com urgência miccional, episódios de tontura, uso de benzodiazepínico, e importante
                      comprometimento da capacidade de se levantar de forma segura. A pontuação de 15 pontos indica
                      risco muito elevado, necessitando implementação imediata de medidas preventivas intensivas e
                      monitorização rigorosa.
                      <br />
                      <br />
                      <strong>INTERVENÇÕES DE ENFERMAGEM IMPLEMENTADAS:</strong>
                      <br />- Supervisão constante, especialmente durante transferências e deambulação
                      <br />- Orientação detalhada ao paciente sobre risco de quedas (repetida frequentemente)
                      <br />- Educação intensiva do familiar acompanhante sobre supervisão
                      <br />- Grades laterais mantidas elevadas permanentemente
                      <br />- Campainha de chamada sempre ao alcance e testada regularmente
                      <br />- Ambiente do quarto completamente organizado e livre de obstáculos
                      <br />- Iluminação noturna adequada mantida
                      <br />- Calçado antiderrapante fornecido e uso supervisionado
                      <br />- Comunicação imediata com equipe médica sobre medicações em uso
                      <br />- Solicitação de reavaliação psiquiátrica para ajuste de medicações
                      <br />- Implementação de protocolo de eliminação programada (ida ao banheiro a cada 2 horas)
                      <br />- Encaminhamento para fisioterapia para avaliação e treino de equilíbrio
                      <br />- Monitorização de sinais vitais com atenção especial à pressão arterial
                      <br />- Orientação sobre mudanças posturais lentas e graduais
                      <br />
                      <br />
                      <strong>OBSERVAÇÕES CLÍNICAS:</strong>
                      <br />
                      Paciente demonstra momentos de lucidez alternados com episódios de confusão. Familiar presente e
                      colaborativo, demonstra compreensão da gravidade da situação. Paciente aceita parcialmente as
                      orientações, mas apresenta tendência a esquecer as recomendações. Sinais vitais: PA 140/90 mmHg,
                      FC 88 bpm, Tax 36,8°C. Necessário reforço constante das orientações de segurança.
                      <br />
                      <br />
                      <strong>CONDUTAS ADOTADAS:</strong>
                      <br />- Manutenção rigorosa de todas as medidas preventivas implementadas
                      <br />- Monitorização contínua e supervisão constante
                      <br />- Reavaliação diária obrigatória com a Escala de Hendrich II
                      <br />- Discussão urgente com equipe médica sobre ajuste de medicações
                      <br />- Seguimento com equipe multiprofissional (psiquiatria, fisioterapia)
                      <br />- Educação continuada e reforço constante das orientações
                      <br />- Comunicação detalhada com todos os turnos sobre o alto risco
                      <br />
                      <br />
                      <strong>REFERÊNCIA:</strong> Protocolo Institucional de Prevenção de Quedas. Hendrich II Fall Risk
                      Model - Hendrich, A.L. et al. (2003).
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
                        <strong>Hendrich, A. L., Bender, P. S., & Nyhuis, A. (2003).</strong> Validation of the Hendrich
                        II Fall Risk Model: a large concurrent case/control study of hospitalized patients.{" "}
                        <em>Applied Nursing Research, 16</em>(1), 9-21.
                      </p>
                      <p>
                        <strong>Hendrich, A., Nyhuis, A., Kippenbrock, T., & Soja, M. E. (1995).</strong> Hospital
                        falls: development of a predictive model for clinical practice.{" "}
                        <em>Applied Nursing Research, 8</em>(3), 129-139.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-nursing-forest mb-3">Estudos de Validação</h4>
                    <div className="space-y-3 text-nursing-forest/80">
                      <p>
                        <strong>Baris, H. E., et al. (2015).</strong> Validation of the Hendrich II Fall Risk Model in a
                        Turkish hospital setting. <em>International Journal of Nursing Practice, 21</em>(6), 705-712.
                      </p>
                      <p>
                        <strong>Kim, K. S., et al. (2011).</strong> Validation of the Hendrich II Fall Risk Model: a
                        large concurrent case/control study of hospitalized patients in Korea.{" "}
                        <em>Applied Nursing Research, 24</em>(4), 213-219.
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
                        <strong>Agência Nacional de Vigilância Sanitária - ANVISA. (2013).</strong> Assistência Segura:
                        Uma Reflexão Teórica Aplicada à Prática. Série Segurança do Paciente e Qualidade em Serviços de
                        Saúde. Brasília: ANVISA.
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
                        <strong>Luzia, M. F., et al. (2014).</strong> Características das quedas com dano em pacientes
                        hospitalizados. <em>Revista Gaúcha de Enfermagem, 35</em>(2), 77-83.
                      </p>
                      <p>
                        <strong>Correa, A. D., et al. (2012).</strong> Implantação de um protocolo para gerenciamento de
                        quedas em hospital: resultados de quatro anos de seguimento.{" "}
                        <em>Revista da Escola de Enfermagem da USP, 46</em>(1), 67-74.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-nursing-forest mb-3">Diretrizes Internacionais</h4>
                    <div className="space-y-3 text-nursing-forest/80">
                      <p>
                        <strong>The Joint Commission. (2015).</strong> Preventing falls and fall-related injuries in
                        health care facilities. Sentinel Event Alert, Issue 55.
                      </p>
                      <p>
                        <strong>National Institute for Health and Care Excellence - NICE. (2013).</strong> Falls in
                        older people: assessing risk and prevention. Clinical guideline [CG161].
                      </p>
                    </div>
                  </div>

                  <div className="bg-nursing-mint/20 p-4 rounded-lg">
                    <h4 className="font-semibold text-nursing-forest mb-2">Nota Importante</h4>
                    <p className="text-nursing-forest/80 text-sm">
                      A Escala de Hendrich II foi validada através de estudos multicêntricos rigorosos e é considerada
                      uma das ferramentas mais confiáveis para avaliação do risco de quedas em ambiente hospitalar.
                      Todas as referências citadas são baseadas em evidências científicas sólidas. Para implementação
                      adequada, consulte sempre os protocolos institucionais e as diretrizes do COFEN/COREN de sua
                      região.
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
