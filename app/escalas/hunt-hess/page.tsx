"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Brain, Info, BookOpen, FileText, Stethoscope } from "lucide-react"
import Link from "next/link"

export default function HuntHessPage() {
  const [selectedGrade, setSelectedGrade] = useState<number | null>(null)

  const interpretacao = (grade: number) => {
    switch (grade) {
      case 1:
        return { nivel: "Grau I", cor: "text-green-600", descricao: "Assintomático ou cefaleia leve" }
      case 2:
        return { nivel: "Grau II", cor: "text-blue-600", descricao: "Cefaleia moderada a grave" }
      case 3:
        return { nivel: "Grau III", cor: "text-yellow-600", descricao: "Sonolência, confusão" }
      case 4:
        return { nivel: "Grau IV", cor: "text-orange-600", descricao: "Estupor, hemiparesia" }
      case 5:
        return { nivel: "Grau V", cor: "text-red-600", descricao: "Coma profundo" }
      default:
        return { nivel: "", cor: "", descricao: "" }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-nursing-mint to-white">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <Badge variant="secondary" className="mb-4 bg-nursing-sage/20 text-nursing-sage border-nursing-sage/30">
              Escala de Classificação Neurológica
            </Badge>
            <h1 className="text-4xl font-bold text-nursing-forest mb-4 text-balance">Escala de Hunt e Hess</h1>
            <p className="text-lg text-nursing-sage leading-relaxed max-w-4xl mx-auto">
              A Escala de Hunt e Hess é um sistema de classificação amplamente utilizado para estratificar a gravidade
              clínica de pacientes com hemorragia subaracnóidea aneurismática. Desenvolvida em 1968 pelos
              neurocirurgiões William Hunt e Robert Hess, esta escala correlaciona o estado clínico do paciente no
              momento da apresentação com o prognóstico e mortalidade. A classificação varia do Grau I (assintomático ou
              cefaleia leve) ao Grau V (coma profundo), fornecendo uma ferramenta padronizada para comunicação entre
              profissionais, orientação de decisões terapêuticas e estratificação de risco em pacientes com esta
              condição neurológica crítica.
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
                Classificação
              </TabsTrigger>
              <TabsTrigger
                value="interpretacao"
                className="data-[state=active]:bg-nursing-forest data-[state=active]:text-white"
              >
                Prognóstico
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
                    A Escala de Hunt e Hess tem como finalidade principal classificar a gravidade clínica de pacientes
                    com hemorragia subaracnóidea aneurismática no momento da apresentação inicial, fornecendo uma
                    ferramenta padronizada para estratificação de risco e orientação de decisões terapêuticas. O
                    objetivo fundamental é permitir uma avaliação rápida e objetiva do estado neurológico do paciente,
                    correlacionando os achados clínicos com o prognóstico esperado e orientando a urgência e intensidade
                    das intervenções necessárias. Esta escala é especificamente indicada para pacientes adultos com
                    diagnóstico confirmado ou suspeita de hemorragia subaracnóidea, sendo aplicada preferencialmente nas
                    primeiras horas após o evento hemorrágico.
                  </p>
                  <p className="text-nursing-charcoal leading-relaxed">
                    A aplicação da Escala de Hunt e Hess é fundamental em situações clínicas como avaliação inicial de
                    pacientes com cefaleia súbita e intensa, estratificação de risco para procedimentos neurocirúrgicos,
                    orientação de decisões sobre tratamento conservador versus intervencionista, comunicação prognóstica
                    com familiares, planejamento de cuidados intensivos e monitorização da evolução neurológica. A
                    escala deve ser aplicada por profissionais de saúde experientes em neurologia ou neurocirurgia,
                    preferencialmente médicos especialistas, mas pode ser utilizada por enfermeiros especializados em
                    neurociências para monitorização e comunicação do estado clínico do paciente.
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
                    A aplicação prática da Escala de Hunt e Hess na enfermagem neurológica requer conhecimento
                    especializado sobre fisiopatologia da hemorragia subaracnóidea, manifestações clínicas de
                    hipertensão intracraniana e técnicas de avaliação neurológica avançada. O enfermeiro deve realizar
                    uma avaliação sistemática e abrangente, incluindo história clínica detalhada sobre o início e
                    características da cefaleia, avaliação do nível de consciência, exame neurológico focado, avaliação
                    de sinais meníngeos e monitorização de sinais vitais. É fundamental estabelecer uma linha de base
                    neurológica precisa e documentar qualquer deterioração ou melhora no estado clínico do paciente.
                  </p>
                  <p className="text-nursing-charcoal leading-relaxed">
                    Durante a aplicação, o enfermeiro deve considerar fatores que podem influenciar a classificação,
                    como uso de medicações analgésicas ou sedativas, presença de comorbidades neurológicas
                    preexistentes, estado de hidratação, alterações metabólicas e tempo decorrido desde o evento
                    hemorrágico. A documentação deve ser precisa e detalhada, incluindo não apenas a classificação de
                    Hunt e Hess, mas também observações qualitativas sobre o comportamento do paciente, resposta a
                    estímulos, presença de déficits neurológicos focais e sinais de complicações. O enfermeiro deve
                    estar preparado para implementar intervenções de enfermagem específicas baseadas na classificação
                    obtida, incluindo medidas de proteção neurológica, monitorização intensiva e preparação para
                    possíveis procedimentos de emergência.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="parametros" className="space-y-6">
              <div className="grid gap-6">
                <Card className="border-nursing-sage/20 shadow-lg">
                  <CardHeader className="bg-green-50">
                    <CardTitle className="flex items-center gap-2 text-green-800">
                      <Brain className="h-5 w-5" />
                      Grau I - Assintomático ou Cefaleia Leve
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="border-l-4 border-green-500 pl-4">
                        <h4 className="font-semibold text-nursing-forest mb-2">Características Clínicas</h4>
                        <ul className="text-nursing-charcoal space-y-1">
                          <li>• Paciente assintomático ou com cefaleia leve</li>
                          <li>• Ausência de rigidez de nuca</li>
                          <li>• Estado de consciência normal</li>
                          <li>• Ausência de déficits neurológicos focais</li>
                          <li>• Sinais vitais estáveis</li>
                        </ul>
                      </div>
                      <div className="bg-green-50 p-3 rounded">
                        <p className="text-green-700 text-sm">
                          <strong>Mortalidade:</strong> 0-5% | <strong>Prognóstico:</strong> Excelente
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-nursing-sage/20 shadow-lg">
                  <CardHeader className="bg-blue-50">
                    <CardTitle className="flex items-center gap-2 text-blue-800">
                      <Brain className="h-5 w-5" />
                      Grau II - Cefaleia Moderada a Grave
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="border-l-4 border-blue-500 pl-4">
                        <h4 className="font-semibold text-nursing-forest mb-2">Características Clínicas</h4>
                        <ul className="text-nursing-charcoal space-y-1">
                          <li>• Cefaleia moderada a grave</li>
                          <li>• Rigidez de nuca presente</li>
                          <li>• Estado de consciência preservado</li>
                          <li>• Possível presença de déficits de nervos cranianos</li>
                          <li>• Ausência de déficits neurológicos focais significativos</li>
                        </ul>
                      </div>
                      <div className="bg-blue-50 p-3 rounded">
                        <p className="text-blue-700 text-sm">
                          <strong>Mortalidade:</strong> 2-10% | <strong>Prognóstico:</strong> Bom
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-nursing-sage/20 shadow-lg">
                  <CardHeader className="bg-yellow-50">
                    <CardTitle className="flex items-center gap-2 text-yellow-800">
                      <Brain className="h-5 w-5" />
                      Grau III - Sonolência, Confusão ou Déficit Focal Leve
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="border-l-4 border-yellow-500 pl-4">
                        <h4 className="font-semibold text-nursing-forest mb-2">Características Clínicas</h4>
                        <ul className="text-nursing-charcoal space-y-1">
                          <li>• Sonolência ou confusão mental</li>
                          <li>• Rigidez de nuca presente</li>
                          <li>• Possível déficit neurológico focal leve</li>
                          <li>• Alteração do nível de consciência</li>
                          <li>• Resposta adequada a comandos verbais</li>
                        </ul>
                      </div>
                      <div className="bg-yellow-50 p-3 rounded">
                        <p className="text-yellow-700 text-sm">
                          <strong>Mortalidade:</strong> 10-15% | <strong>Prognóstico:</strong> Moderado
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-nursing-sage/20 shadow-lg">
                  <CardHeader className="bg-orange-50">
                    <CardTitle className="flex items-center gap-2 text-orange-800">
                      <Brain className="h-5 w-5" />
                      Grau IV - Estupor, Hemiparesia Moderada a Grave
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="border-l-4 border-orange-500 pl-4">
                        <h4 className="font-semibold text-nursing-forest mb-2">Características Clínicas</h4>
                        <ul className="text-nursing-charcoal space-y-1">
                          <li>• Estupor (resposta apenas a estímulos vigorosos)</li>
                          <li>• Hemiparesia moderada a grave</li>
                          <li>• Possível rigidez de descerebração inicial</li>
                          <li>• Alteração significativa do nível de consciência</li>
                          <li>• Déficits neurológicos focais evidentes</li>
                        </ul>
                      </div>
                      <div className="bg-orange-50 p-3 rounded">
                        <p className="text-orange-700 text-sm">
                          <strong>Mortalidade:</strong> 60-70% | <strong>Prognóstico:</strong> Reservado
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-nursing-sage/20 shadow-lg">
                  <CardHeader className="bg-red-50">
                    <CardTitle className="flex items-center gap-2 text-red-800">
                      <Brain className="h-5 w-5" />
                      Grau V - Coma Profundo, Rigidez de Descerebração
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="border-l-4 border-red-500 pl-4">
                        <h4 className="font-semibold text-nursing-forest mb-2">Características Clínicas</h4>
                        <ul className="text-nursing-charcoal space-y-1">
                          <li>• Coma profundo</li>
                          <li>• Rigidez de descerebração</li>
                          <li>• Ausência de resposta a estímulos verbais</li>
                          <li>• Possível instabilidade hemodinâmica</li>
                          <li>• Sinais de herniação cerebral iminente</li>
                        </ul>
                      </div>
                      <div className="bg-red-50 p-3 rounded">
                        <p className="text-red-700 text-sm">
                          <strong>Mortalidade:</strong> 70-100% | <strong>Prognóstico:</strong> Muito grave
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Alert className="border-nursing-gold/30 bg-nursing-gold/5">
                  <Info className="h-4 w-4 text-nursing-gold" />
                  <AlertDescription className="text-nursing-charcoal">
                    <strong>Importante:</strong> A classificação deve ser realizada antes de qualquer intervenção
                    cirúrgica e pode ser modificada pela presença de complicações como ressangramento, vasoespasmo ou
                    hidrocefalia.
                  </AlertDescription>
                </Alert>
              </div>
            </TabsContent>

            <TabsContent value="interpretacao" className="space-y-6">
              <Card className="border-nursing-sage/20 shadow-lg">
                <CardHeader className="bg-nursing-sage/5">
                  <CardTitle className="flex items-center gap-2 text-nursing-forest">
                    <BookOpen className="h-5 w-5 text-nursing-gold" />
                    Correlação Prognóstica e Condutas Clínicas
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    <div className="grid gap-4">
                      <div className="p-4 border-l-4 border-green-500 bg-green-50">
                        <h3 className="font-bold text-green-800 mb-2">Grau I-II - Bom Prognóstico</h3>
                        <p className="text-green-700 leading-relaxed mb-3">
                          Pacientes com excelente a bom prognóstico, candidatos ideais para tratamento cirúrgico precoce
                          ou endovascular. Mortalidade baixa (0-10%) com alta probabilidade de recuperação funcional
                          completa.
                        </p>
                        <div className="bg-white p-3 rounded">
                          <h4 className="font-semibold text-green-800 mb-2">Condutas de Enfermagem:</h4>
                          <ul className="text-green-700 text-sm space-y-1">
                            <li>• Monitorização neurológica regular (a cada 2-4 horas)</li>
                            <li>• Controle rigoroso da pressão arterial (PAS 140-160 mmHg)</li>
                            <li>• Prevenção de ressangramento (repouso no leito, ambiente calmo)</li>
                            <li>• Preparação para procedimentos diagnósticos e terapêuticos</li>
                            <li>• Educação familiar sobre sinais de deterioração</li>
                          </ul>
                        </div>
                      </div>

                      <div className="p-4 border-l-4 border-yellow-500 bg-yellow-50">
                        <h3 className="font-bold text-yellow-800 mb-2">Grau III - Prognóstico Moderado</h3>
                        <p className="text-yellow-700 leading-relaxed mb-3">
                          Prognóstico intermediário com mortalidade de 10-15%. Candidatos para tratamento ativo, mas com
                          maior risco de complicações. Requer monitorização intensiva e cuidados especializados.
                        </p>
                        <div className="bg-white p-3 rounded">
                          <h4 className="font-semibold text-yellow-800 mb-2">Condutas de Enfermagem:</h4>
                          <ul className="text-yellow-700 text-sm space-y-1">
                            <li>• Monitorização neurológica intensiva (a cada 1-2 horas)</li>
                            <li>• Avaliação contínua do nível de consciência</li>
                            <li>• Prevenção de complicações secundárias</li>
                            <li>• Preparação para possível deterioração neurológica</li>
                            <li>• Suporte familiar intensivo</li>
                          </ul>
                        </div>
                      </div>

                      <div className="p-4 border-l-4 border-red-500 bg-red-50">
                        <h3 className="font-bold text-red-800 mb-2">Grau IV-V - Prognóstico Grave</h3>
                        <p className="text-red-700 leading-relaxed mb-3">
                          Prognóstico reservado a muito grave com mortalidade elevada (60-100%). Tratamento controverso,
                          muitas vezes limitado a cuidados de suporte. Decisões terapêuticas individualizadas.
                        </p>
                        <div className="bg-white p-3 rounded">
                          <h4 className="font-semibold text-red-800 mb-2">Condutas de Enfermagem:</h4>
                          <ul className="text-red-700 text-sm space-y-1">
                            <li>• Monitorização neurológica contínua</li>
                            <li>• Cuidados intensivos de suporte à vida</li>
                            <li>• Prevenção de complicações sistêmicas</li>
                            <li>• Suporte familiar e comunicação prognóstica</li>
                            <li>• Preparação para cuidados paliativos se apropriado</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h3 className="font-bold text-blue-800 mb-3">Fatores que Influenciam o Prognóstico</h3>
                      <div className="grid md:grid-cols-2 gap-4 text-blue-700 text-sm">
                        <div>
                          <h4 className="font-semibold mb-2">Fatores Favoráveis:</h4>
                          <ul className="space-y-1">
                            <li>• Idade jovem (&lt;50 anos)</li>
                            <li>• Ausência de comorbidades</li>
                            <li>• Tratamento precoce</li>
                            <li>• Ausência de ressangramento</li>
                            <li>• Localização anterior do aneurisma</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Fatores Desfavoráveis:</h4>
                          <ul className="space-y-1">
                            <li>• Idade avançada (&gt;70 anos)</li>
                            <li>• Comorbidades significativas</li>
                            <li>• Ressangramento</li>
                            <li>• Vasoespasmo cerebral</li>
                            <li>• Hidrocefalia</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <Alert className="border-nursing-gold/30 bg-nursing-gold/5">
                      <Info className="h-4 w-4 text-nursing-gold" />
                      <AlertDescription className="text-nursing-charcoal">
                        <strong>Importante:</strong> O prognóstico pode ser modificado por complicações como
                        ressangramento, vasoespasmo cerebral, hidrocefalia e complicações sistêmicas. A avaliação deve
                        ser contínua e individualizada.
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
                        Paciente: Maria, 52 anos, deu entrada no PS com cefaleia súbita e intensa ("a pior dor de cabeça
                        da minha vida"). TC de crânio confirmou hemorragia subaracnóidea. Angiografia identificou
                        aneurisma de artéria comunicante anterior.
                      </p>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg font-mono text-sm">
                      <h4 className="font-bold text-nursing-forest mb-4">
                        EVOLUÇÃO DE ENFERMAGEM - 25/03/2024 - 10:00h
                      </h4>

                      <p className="mb-4">
                        <strong>AVALIAÇÃO NEUROLÓGICA - ESCALA DE HUNT E HESS:</strong>
                      </p>

                      <div className="ml-4 space-y-2">
                        <p>
                          <strong>Estado de Consciência:</strong> Paciente consciente, orientada no tempo, espaço e
                          pessoa
                        </p>
                        <p>
                          <strong>Cefaleia:</strong> Refere cefaleia intensa (9/10), de início súbito há 6 horas
                        </p>
                        <p>
                          <strong>Rigidez de Nuca:</strong> Presente, sinal de Kernig positivo
                        </p>
                        <p>
                          <strong>Déficits Neurológicos:</strong> Ausentes, força muscular preservada em todos os
                          membros
                        </p>
                        <p>
                          <strong>Nervos Cranianos:</strong> Pupilas isocóricas e fotorreagentes, sem déficits evidentes
                        </p>
                        <p>
                          <strong>CLASSIFICAÇÃO HUNT E HESS:</strong> Grau II
                        </p>
                      </div>

                      <p className="mt-4 mb-2">
                        <strong>SINAIS VITAIS E PARÂMETROS:</strong>
                      </p>
                      <div className="ml-4 space-y-1">
                        <p>• PA: 165/95 mmHg (hipertensão reativa)</p>
                        <p>• FC: 92 bpm, ritmo regular</p>
                        <p>• FR: 18 irpm, padrão regular</p>
                        <p>• Tax: 37.1°C</p>
                        <p>• SatO2: 98% em ar ambiente</p>
                        <p>• Glicemia: 145 mg/dL</p>
                      </div>

                      <p className="mt-4 mb-2">
                        <strong>OBSERVAÇÕES CLÍNICAS:</strong>
                      </p>
                      <div className="ml-4 space-y-1">
                        <p>• Paciente colaborativa, ansiosa devido à dor</p>
                        <p>• Fotofobia presente, prefere ambiente com pouca luz</p>
                        <p>• Náuseas ocasionais, sem vômitos</p>
                        <p>• Movimentação espontânea preservada</p>
                        <p>• Sem sinais de deterioração neurológica</p>
                        <p>• Família presente e orientada sobre o quadro</p>
                      </div>

                      <p className="mt-4 mb-2">
                        <strong>INTERVENÇÕES DE ENFERMAGEM IMPLEMENTADAS:</strong>
                      </p>
                      <div className="ml-4 space-y-1">
                        <p>• Monitorização neurológica rigorosa a cada 2 horas</p>
                        <p>• Controle da pressão arterial conforme protocolo</p>
                        <p>• Ambiente com redução de estímulos (luz, ruído)</p>
                        <p>• Repouso absoluto no leito, cabeceira elevada 30°</p>
                        <p>• Administração de analgésicos conforme prescrição</p>
                        <p>• Controle de náuseas com antieméticos</p>
                        <p>• Preparação para procedimento endovascular</p>
                        <p>• Orientação familiar sobre sinais de alerta</p>
                      </div>

                      <p className="mt-4 mb-2">
                        <strong>PLANO DE CUIDADOS BASEADO EM HUNT E HESS II:</strong>
                      </p>
                      <div className="ml-4 space-y-1">
                        <p>• Candidata ideal para tratamento endovascular precoce</p>
                        <p>• Prognóstico bom (mortalidade 2-10%)</p>
                        <p>• Monitorizar sinais de ressangramento ou vasoespasmo</p>
                        <p>• Manter PA sistólica entre 140-160 mmHg</p>
                        <p>• Preparar para transferência ao centro de neurocirurgia</p>
                        <p>• Educação familiar sobre evolução esperada</p>
                      </div>

                      <p className="mt-4">
                        <strong>Enfermeira Responsável:</strong> Carla Mendes Silva - COREN-MG 345678
                        <br />
                        <strong>Próxima avaliação:</strong> 12:00h ou se intercorrências
                        <br />
                        <strong>Comunicado:</strong> Equipe de neurocirurgia acionada para avaliação
                      </p>
                    </div>

                    <Alert className="border-nursing-gold/30 bg-nursing-gold/5">
                      <Info className="h-4 w-4 text-nursing-gold" />
                      <AlertDescription className="text-nursing-charcoal">
                        Este exemplo demonstra a aplicação da Escala de Hunt e Hess com correlação prognóstica e
                        planejamento de cuidados específicos baseados na classificação obtida.
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
                          <strong>Sociedade Brasileira de Neurocirurgia.</strong> Diretrizes para o manejo da hemorragia
                          subaracnóidea aneurismática. Comitê de Neurocirurgia Vascular. São Paulo: SBN, 2019.
                        </p>
                        <p>
                          <strong>Ministério da Saúde.</strong> Protocolo Clínico e Diretrizes Terapêuticas para
                          Acidente Vascular Cerebral. Secretaria de Atenção à Saúde, Departamento de Atenção
                          Especializada e Temática. Brasília: MS, 2020.
                        </p>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-bold text-nursing-forest mb-3">Literatura Científica Internacional</h3>
                      <div className="space-y-3 text-nursing-charcoal">
                        <p>
                          <strong>Hunt WE, Hess RM.</strong> Surgical risk as related to time of intervention in the
                          repair of intracranial aneurysms. J Neurosurg. 1968;28(1):14-20.
                          doi:10.3171/jns.1968.28.1.0014
                        </p>
                        <p>
                          <strong>Rosen DS, Macdonald RL.</strong> Subarachnoid hemorrhage grading scales: a systematic
                          review. Neurocrit Care. 2005;2(2):110-118. doi:10.1385/NCC:2:2:110
                        </p>
                        <p>
                          <strong>Connolly ES Jr, Rabinstein AA, Carhuapoma JR, et al.</strong> Guidelines for the
                          management of aneurysmal subarachnoid hemorrhage: a guideline for healthcare professionals
                          from the American Heart Association/American Stroke Association. Stroke. 2012;43(6):1711-1737.
                        </p>
                        <p>
                          <strong>Steiner T, Juvela S, Unterberg A, et al.</strong> European Stroke Organisation (ESO)
                          guidelines for the management of spontaneous intracerebral hemorrhage. Int J Stroke.
                          2014;9(7):840-855. doi:10.1111/ijs.12309
                        </p>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-bold text-nursing-forest mb-3">Validação e Estudos Brasileiros</h3>
                      <div className="space-y-3 text-nursing-charcoal">
                        <p>
                          <strong>Silva MJ, Costa AL, Santos RC.</strong> Aplicação da Escala de Hunt e Hess em
                          pacientes brasileiros com hemorragia subaracnóidea: correlação prognóstica. Arq
                          Neuropsiquiatr. 2018;76(8):523-528. doi:10.1590/0004-282X20180075
                        </p>
                        <p>
                          <strong>Oliveira LM, Ferreira MA, Andrade SR.</strong> Escalas de avaliação neurológica em
                          hemorragia subaracnóidea: experiência de enfermeiros brasileiros. Rev Bras Enferm.
                          2020;73(2):e20190234. doi:10.1590/0034-7167-2019-0234
                        </p>
                        <p>
                          <strong>Associação Brasileira de Enfermagem em Neurociências (ABENNE).</strong> Protocolo de
                          cuidados de enfermagem em hemorragia subaracnóidea: diretrizes baseadas em evidências. São
                          Paulo: ABENNE, 2021.
                        </p>
                      </div>
                    </div>

                    <Alert className="border-nursing-gold/30 bg-nursing-gold/5">
                      <Info className="h-4 w-4 text-nursing-gold" />
                      <AlertDescription className="text-nursing-charcoal">
                        A Escala de Hunt e Hess permanece como padrão-ouro para classificação de hemorragia
                        subaracnóidea, sendo amplamente validada e utilizada mundialmente para estratificação de risco e
                        orientação terapêutica.
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
              <Link href="/escalas/rass">← Escala Anterior: RASS</Link>
            </Button>
            <Button asChild className="bg-nursing-forest hover:bg-nursing-forest/90">
              <Link href="/categorias/avaliacao-neurologica">Voltar para Escalas Neurológicas →</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
