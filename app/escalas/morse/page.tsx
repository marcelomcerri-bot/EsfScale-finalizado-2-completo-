"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { ArrowLeft, Shield, AlertTriangle, CheckCircle, FileText, BookOpen, Users } from "lucide-react"
import Link from "next/link"

export default function MorsePage() {
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
              <h1 className="text-3xl font-bold text-nursing-forest">Escala de Morse</h1>
              <p className="text-nursing-forest/70">Morse Fall Scale (MFS)</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            <Badge className="bg-nursing-forest text-white">Risco de Quedas</Badge>
            <Badge variant="outline" className="border-nursing-sage text-nursing-forest">
              Adultos Hospitalizados
            </Badge>
            <Badge variant="outline" className="border-nursing-sage text-nursing-forest">
              0-125 pontos
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
                  A Escala de Morse (Morse Fall Scale - MFS) é um instrumento de avaliação amplamente reconhecido e
                  validado internacionalmente para identificar o risco de quedas em pacientes hospitalizados adultos.
                  Desenvolvida por Janice Morse em 1989, esta escala tem como objetivo principal estratificar os
                  pacientes de acordo com seu risco de queda, permitindo a implementação de medidas preventivas
                  específicas e individualizadas. A escala é especialmente útil em unidades de internação geral,
                  unidades de terapia intensiva, pronto-socorro e outros ambientes hospitalares onde pacientes adultos
                  necessitam de avaliação contínua do risco de quedas.
                </p>
                <p className="leading-relaxed">
                  A aplicação da Escala de Morse é indicada para todos os pacientes adultos hospitalizados,
                  independentemente da idade, diagnóstico ou condição clínica, sendo particularmente importante em
                  pacientes idosos, com alterações cognitivas, em uso de medicamentos que possam afetar o equilíbrio ou
                  a coordenação, com histórico prévio de quedas, portadores de deficiências visuais ou auditivas, e
                  aqueles com limitações na mobilidade. A escala deve ser aplicada na admissão do paciente e reavaliada
                  a cada 24 horas ou sempre que houver mudanças significativas no estado clínico do paciente.
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
                      <h4 className="font-semibold text-nursing-forest mb-2">1. Histórico de Quedas</h4>
                      <div className="space-y-2 text-nursing-forest/80">
                        <p>
                          <strong>Não (0 pontos):</strong> Paciente não apresenta histórico de quedas nos últimos 3
                          meses
                        </p>
                        <p>
                          <strong>Sim (25 pontos):</strong> Paciente apresenta histórico de quedas nos últimos 3 meses
                          ou queda durante a internação atual
                        </p>
                      </div>
                    </div>

                    <div className="border border-nursing-sage/20 rounded-lg p-4 bg-nursing-mint/10">
                      <h4 className="font-semibold text-nursing-forest mb-2">2. Diagnóstico Secundário</h4>
                      <div className="space-y-2 text-nursing-forest/80">
                        <p>
                          <strong>Não (0 pontos):</strong> Paciente apresenta apenas um diagnóstico médico
                        </p>
                        <p>
                          <strong>Sim (15 pontos):</strong> Paciente apresenta dois ou mais diagnósticos médicos no
                          prontuário
                        </p>
                      </div>
                    </div>

                    <div className="border border-nursing-sage/20 rounded-lg p-4 bg-nursing-mint/10">
                      <h4 className="font-semibold text-nursing-forest mb-2">3. Auxílio na Deambulação</h4>
                      <div className="space-y-2 text-nursing-forest/80">
                        <p>
                          <strong>Nenhum/Acamado/Cadeira de rodas (0 pontos):</strong> Paciente não deambula ou utiliza
                          cadeira de rodas
                        </p>
                        <p>
                          <strong>Muletas/Bengala/Andador (15 pontos):</strong> Paciente utiliza dispositivos de auxílio
                          para deambulação
                        </p>
                        <p>
                          <strong>Mobiliário (30 pontos):</strong> Paciente se apoia em móveis, paredes ou outras
                          pessoas para deambular
                        </p>
                      </div>
                    </div>

                    <div className="border border-nursing-sage/20 rounded-lg p-4 bg-nursing-mint/10">
                      <h4 className="font-semibold text-nursing-forest mb-2">
                        4. Terapia Endovenosa/Dispositivo Endovenoso
                      </h4>
                      <div className="space-y-2 text-nursing-forest/80">
                        <p>
                          <strong>Não (0 pontos):</strong> Paciente não possui acesso venoso ou dispositivo endovenoso
                        </p>
                        <p>
                          <strong>Sim (20 pontos):</strong> Paciente possui acesso venoso, cateter central, ou está
                          recebendo terapia endovenosa
                        </p>
                      </div>
                    </div>

                    <div className="border border-nursing-sage/20 rounded-lg p-4 bg-nursing-mint/10">
                      <h4 className="font-semibold text-nursing-forest mb-2">5. Marcha/Transferência</h4>
                      <div className="space-y-2 text-nursing-forest/80">
                        <p>
                          <strong>Normal/Acamado/Imóvel (0 pontos):</strong> Marcha normal, equilibrada, ou paciente
                          acamado/imóvel
                        </p>
                        <p>
                          <strong>Fraca (10 pontos):</strong> Marcha com passos pequenos, pode arrastar os pés, pode
                          usar corrimão
                        </p>
                        <p>
                          <strong>Comprometida (20 pontos):</strong> Marcha instável, desequilibrada, necessita de
                          auxílio para transferências
                        </p>
                      </div>
                    </div>

                    <div className="border border-nursing-sage/20 rounded-lg p-4 bg-nursing-mint/10">
                      <h4 className="font-semibold text-nursing-forest mb-2">6. Estado Mental</h4>
                      <div className="space-y-2 text-nursing-forest/80">
                        <p>
                          <strong>Orientado/Capaz (0 pontos):</strong> Paciente orientado quanto à sua capacidade e
                          limitações
                        </p>
                        <p>
                          <strong>Superestima/Esquece limitações (15 pontos):</strong> Paciente superestima suas
                          habilidades ou esquece suas limitações
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
                        <strong>Baixo Risco (0-24 pontos):</strong> Paciente apresenta baixo risco de quedas.
                        Implementar medidas preventivas básicas de segurança, como orientações sobre o uso da campainha,
                        manter objetos pessoais ao alcance, garantir iluminação adequada e calçados antiderrapantes.
                      </AlertDescription>
                    </Alert>

                    <Alert className="border-yellow-200 bg-yellow-50">
                      <AlertTriangle className="h-4 w-4 text-yellow-600" />
                      <AlertDescription className="text-yellow-800">
                        <strong>Risco Moderado (25-50 pontos):</strong> Paciente apresenta risco moderado de quedas.
                        Implementar medidas preventivas padrão, incluindo avaliação mais frequente, supervisão durante
                        transferências, uso de dispositivos de auxílio quando necessário, e educação do paciente e
                        família sobre prevenção de quedas.
                      </AlertDescription>
                    </Alert>

                    <Alert className="border-red-200 bg-red-50">
                      <AlertTriangle className="h-4 w-4 text-red-600" />
                      <AlertDescription className="text-red-800">
                        <strong>Alto Risco (≥51 pontos):</strong> Paciente apresenta alto risco de quedas. Implementar
                        medidas preventivas intensivas, incluindo supervisão constante ou frequente, uso obrigatório de
                        dispositivos de auxílio, avaliação médica para revisão de medicamentos, fisioterapia quando
                        indicada, e consideração de medidas de contenção quando apropriadas.
                      </AlertDescription>
                    </Alert>
                  </div>

                  <div className="bg-nursing-mint/20 p-4 rounded-lg">
                    <h4 className="font-semibold text-nursing-forest mb-2">Pontuação Total Possível</h4>
                    <p className="text-nursing-forest/80">
                      A pontuação total da Escala de Morse varia de 0 a 125 pontos, sendo calculada pela soma dos pontos
                      obtidos em cada um dos seis parâmetros avaliados. Quanto maior a pontuação, maior o risco de
                      quedas do paciente.
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
                  A aplicação da Escala de Morse na prática de enfermagem deve seguir um protocolo sistemático e
                  padronizado para garantir a confiabilidade e validade dos resultados obtidos. O processo de avaliação
                  deve ser iniciado imediatamente após a admissão do paciente, preferencialmente nas primeiras horas de
                  internação, e deve ser realizado por enfermeiro ou técnico de enfermagem devidamente capacitado e
                  treinado na utilização do instrumento. É fundamental que o profissional responsável pela avaliação
                  tenha conhecimento adequado sobre os critérios de pontuação de cada parâmetro e seja capaz de realizar
                  uma observação clínica criteriosa do paciente.
                </p>
                <p className="leading-relaxed">
                  Durante a aplicação da escala, o enfermeiro deve observar diretamente o paciente, realizar entrevista
                  estruturada quando necessário, consultar o prontuário médico para obter informações sobre diagnósticos
                  e medicações em uso, e avaliar a capacidade funcional do paciente através de testes simples de
                  mobilidade e transferência. A avaliação do estado mental deve incluir a observação do nível de
                  consciência, orientação temporal e espacial, capacidade de compreensão das orientações fornecidas e
                  insight sobre as próprias limitações. É importante que a avaliação seja realizada em um momento em que
                  o paciente esteja em condições clínicas estáveis, evitando períodos de sedação excessiva ou agitação
                  psicomotora que possam interferir nos resultados.
                </p>
                <p className="leading-relaxed">
                  A reavaliação do risco de quedas utilizando a Escala de Morse deve ser realizada a cada 24 horas
                  durante toda a internação, ou sempre que houver mudanças significativas no estado clínico do paciente,
                  como alterações na medicação, mudanças no nível de consciência, início ou suspensão de terapias
                  endovenosas, modificações na capacidade de deambulação, ou após episódios de quedas. Os resultados da
                  avaliação devem ser documentados de forma clara e objetiva no prontuário do paciente, incluindo a
                  pontuação total obtida, a classificação do risco, as medidas preventivas implementadas e a data da
                  próxima reavaliação programada.
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
                    <h4 className="font-semibold text-green-800 mb-3">Baixo Risco (0-24 pontos)</h4>
                    <ul className="space-y-2 text-green-700">
                      <li>• Orientar paciente e acompanhantes sobre medidas básicas de segurança</li>
                      <li>• Manter campainha ao alcance do paciente</li>
                      <li>• Garantir iluminação adequada no quarto</li>
                      <li>• Orientar uso de calçados antiderrapantes</li>
                      <li>• Manter objetos pessoais ao alcance</li>
                      <li>• Avaliar necessidade de grades laterais no leito</li>
                    </ul>
                  </div>

                  <div className="border border-yellow-200 rounded-lg p-4 bg-yellow-50">
                    <h4 className="font-semibold text-yellow-800 mb-3">Risco Moderado (25-50 pontos)</h4>
                    <ul className="space-y-2 text-yellow-700">
                      <li>• Implementar todas as medidas do baixo risco</li>
                      <li>• Supervisionar transferências e deambulação</li>
                      <li>• Avaliar necessidade de dispositivos de auxílio</li>
                      <li>• Aumentar frequência de avaliação do paciente</li>
                      <li>• Orientar familiares sobre supervisão</li>
                      <li>• Considerar fisioterapia para fortalecimento</li>
                      <li>• Revisar medicações com potencial de causar tontura</li>
                    </ul>
                  </div>

                  <div className="border border-red-200 rounded-lg p-4 bg-red-50">
                    <h4 className="font-semibold text-red-800 mb-3">Alto Risco (≥51 pontos)</h4>
                    <ul className="space-y-2 text-red-700">
                      <li>• Implementar todas as medidas dos níveis anteriores</li>
                      <li>• Supervisão constante ou muito frequente</li>
                      <li>• Uso obrigatório de dispositivos de auxílio</li>
                      <li>• Avaliação médica para revisão de medicamentos</li>
                      <li>• Fisioterapia intensiva quando indicada</li>
                      <li>• Considerar medidas de contenção quando apropriadas</li>
                      <li>• Comunicação imediata com equipe médica</li>
                      <li>• Documentação detalhada de todas as intervenções</li>
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
                      Data: 15/03/2024 - Horário: 14:30h
                      <br />
                      Paciente: João Silva Santos - Leito: 205A
                      <br />
                      Enfermeiro(a): Maria Fernanda Costa - COREN-SP 123456
                    </div>

                    <div>
                      <strong>AVALIAÇÃO DO RISCO DE QUEDAS - ESCALA DE MORSE:</strong>
                      <br />
                      <br />
                      <strong>1. Histórico de Quedas:</strong> SIM (25 pontos)
                      <br />
                      Paciente relata queda em domicílio há 2 meses, resultando em fratura de punho direito. Refere medo
                      de cair novamente.
                      <br />
                      <br />
                      <strong>2. Diagnóstico Secundário:</strong> SIM (15 pontos)
                      <br />
                      Diagnósticos: Diabetes Mellitus tipo 2, Hipertensão Arterial Sistêmica, Insuficiência Cardíaca
                      Congestiva.
                      <br />
                      <br />
                      <strong>3. Auxílio na Deambulação:</strong> MULETAS/BENGALA/ANDADOR (15 pontos)
                      <br />
                      Paciente utiliza andador para deambulação devido à fraqueza em membros inferiores e insegurança na
                      marcha.
                      <br />
                      <br />
                      <strong>4. Terapia Endovenosa:</strong> SIM (20 pontos)
                      <br />
                      Acesso venoso periférico em membro superior esquerdo para administração de medicações e hidratação
                      venosa.
                      <br />
                      <br />
                      <strong>5. Marcha/Transferência:</strong> COMPROMETIDA (20 pontos)
                      <br />
                      Marcha instável, com base de sustentação alargada, necessita de auxílio para transferências
                      leito-cadeira. Apresenta tremor fino em extremidades.
                      <br />
                      <br />
                      <strong>6. Estado Mental:</strong> SUPERESTIMA/ESQUECE LIMITAÇÕES (15 pontos)
                      <br />
                      Paciente demonstra tendência a superestimar suas capacidades, tentando levantar-se sozinho apesar
                      das orientações. Apresenta episódios de esquecimento das limitações impostas pela condição clínica
                      atual.
                      <br />
                      <br />
                      <strong>PONTUAÇÃO TOTAL: 110 pontos</strong>
                      <br />
                      <strong>CLASSIFICAÇÃO: ALTO RISCO DE QUEDAS</strong>
                      <br />
                      <br />
                      <strong>INTERPRETAÇÃO CLÍNICA:</strong>
                      <br />
                      Paciente apresenta múltiplos fatores de risco para quedas, incluindo histórico prévio,
                      comorbidades múltiplas, dependência de dispositivo auxiliar, presença de acesso venoso, marcha
                      comprometida e alteração do estado mental com superestimação das capacidades. A pontuação de 110
                      pontos indica necessidade de implementação imediata de medidas preventivas intensivas.
                      <br />
                      <br />
                      <strong>INTERVENÇÕES DE ENFERMAGEM IMPLEMENTADAS:</strong>
                      <br />- Orientação detalhada ao paciente e familiar sobre risco de quedas e medidas preventivas
                      <br />- Supervisão constante durante transferências e deambulação
                      <br />- Manutenção de grades laterais elevadas quando paciente no leito
                      <br />- Campainha mantida sempre ao alcance do paciente
                      <br />- Objetos pessoais organizados e ao alcance
                      <br />- Calçado antiderrapante fornecido e orientado o uso
                      <br />- Iluminação adequada mantida no ambiente
                      <br />- Andador posicionado sempre próximo ao leito
                      <br />- Comunicação com equipe médica sobre necessidade de revisão de medicações
                      <br />- Solicitação de avaliação fisioterápica para fortalecimento e treino de marcha
                      <br />- Educação continuada com familiar sobre supervisão e auxílio
                      <br />- Documentação em prontuário e comunicação com equipe multiprofissional
                      <br />
                      <br />
                      <strong>OBSERVAÇÕES CLÍNICAS:</strong>
                      <br />
                      Paciente colaborativo com as orientações, porém apresenta momentos de ansiedade relacionados à
                      limitação da mobilidade. Familiar presente demonstra compreensão das orientações e compromete-se
                      com a supervisão. Ambiente do quarto organizado e seguro. Reavaliação programada para 16/03/2024
                      às 14:30h ou antes, se houver mudanças no quadro clínico.
                      <br />
                      <br />
                      <strong>CONDUTAS ADOTADAS:</strong>
                      <br />- Manutenção das medidas preventivas implementadas
                      <br />- Monitorização contínua do risco de quedas
                      <br />- Reavaliação diária com a Escala de Morse
                      <br />- Seguimento com equipe multiprofissional
                      <br />- Educação continuada do paciente e família
                      <br />
                      <br />
                      <strong>REFERÊNCIA:</strong> Protocolo de Prevenção de Quedas - Ministério da Saúde, 2013. Morse
                      Fall Scale - Morse, J.M. et al. (1989).
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
                        <strong>Morse, J. M., Black, C., Oberle, K., & Donahue, P. (1989).</strong> A prospective study
                        to identify the fall-prone patient. <em>Social Science & Medicine, 28</em>(1), 81-86.
                      </p>
                      <p>
                        <strong>Morse, J. M. (2009).</strong> Preventing patient falls: establishing a fall intervention
                        program. <em>Springer Publishing Company</em>.
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
                        Atualiza e estabelece parâmetros para o Dimensionamento do Quadro de Profissionais de Enfermagem
                        nos serviços/locais em que são realizadas atividades de enfermagem.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-nursing-forest mb-3">Estudos de Validação no Brasil</h4>
                    <div className="space-y-3 text-nursing-forest/80">
                      <p>
                        <strong>Urbanetto, J. S., et al. (2013).</strong> Morse Fall Scale: tradução e adaptação
                        transcultural para a língua portuguesa. <em>Revista da Escola de Enfermagem da USP, 47</em>(3),
                        569-575.
                      </p>
                      <p>
                        <strong>Costa-Dias, M. J. M., et al. (2014).</strong> Avaliação do risco de quedas em pacientes
                        hospitalizados: revisão integrativa. <em>Revista Brasileira de Enfermagem, 67</em>(4), 606-613.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-nursing-forest mb-3">Diretrizes Internacionais</h4>
                    <div className="space-y-3 text-nursing-forest/80">
                      <p>
                        <strong>World Health Organization. (2007).</strong> WHO Global Report on Falls Prevention in
                        Older Age. Geneva: WHO Press.
                      </p>
                      <p>
                        <strong>The Joint Commission. (2015).</strong> Preventing falls and fall-related injuries in
                        health care facilities. Sentinel Event Alert, Issue 55.
                      </p>
                    </div>
                  </div>

                  <div className="bg-nursing-mint/20 p-4 rounded-lg">
                    <h4 className="font-semibold text-nursing-forest mb-2">Nota Importante</h4>
                    <p className="text-nursing-forest/80 text-sm">
                      Todas as referências citadas são baseadas em evidências científicas e protocolos oficiais. A
                      aplicação da Escala de Morse deve sempre seguir as diretrizes institucionais e ser realizada por
                      profissionais devidamente capacitados. Para informações mais específicas sobre implementação,
                      consulte os protocolos de sua instituição e as normas do COFEN/COREN de sua região.
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
