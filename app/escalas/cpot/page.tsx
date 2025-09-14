import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Eye, ArrowLeft, FileText, AlertCircle, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function CPOTScalePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link href="/categorias/dor" className="hover:text-primary transition-colors">
              Escalas de Dor
            </Link>
            <span>/</span>
            <span>Critical-Care Pain Observation Tool</span>
          </div>

          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-cyan-50 rounded-full">
                <Eye className="h-8 w-8 text-cyan-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Critical-Care Pain Observation Tool (CPOT)</h1>
            <div className="flex justify-center gap-2 mb-4">
              <Badge variant="secondary" className="bg-cyan-50 text-cyan-700">
                Observação da Dor em Cuidados Críticos
              </Badge>
              <Badge variant="outline">Pacientes Críticos Adultos</Badge>
            </div>
          </div>

          {/* Overview */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Nome Completo e Finalidade
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Nome Completo:</h3>
                <p className="text-muted-foreground">
                  Critical-Care Pain Observation Tool - CPOT (Ferramenta de Observação da Dor em Cuidados Críticos)
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Finalidade e Objetivo:</h3>
                <p className="text-muted-foreground leading-relaxed">
                  A Critical-Care Pain Observation Tool (CPOT) é um instrumento abrangente desenvolvido especificamente
                  para avaliação da dor em pacientes adultos críticos que apresentam limitações na capacidade de
                  comunicação verbal. Esta escala foi criada reconhecendo as necessidades específicas de pacientes em
                  unidades de terapia intensiva, que frequentemente não conseguem expressar verbalmente sua experiência
                  dolorosa devido a fatores como sedação, intubação orotraqueal, alterações do nível de consciência, uso
                  de bloqueadores neuromusculares ou condições neurológicas que comprometem a comunicação. A CPOT avalia
                  quatro domínios comportamentais e fisiológicos fundamentais que refletem a resposta à dor em pacientes
                  críticos: expressão facial, movimentos corporais, tensão muscular e adaptação à ventilação mecânica
                  (para pacientes intubados) ou vocalização (para pacientes não intubados). O instrumento é aplicado em
                  pacientes adultos internados em unidades de terapia intensiva, unidades coronarianas, unidades de
                  cuidados intermediários e outras áreas de cuidados críticos, independentemente do diagnóstico
                  principal ou condição clínica. Sua utilização é especialmente valiosa em contextos de pós-operatório
                  de cirurgias de grande porte, trauma grave, insuficiência respiratória aguda, choque séptico,
                  pós-parada cardiorrespiratória e outras condições críticas que requerem monitoramento intensivo. A
                  CPOT permite identificação sistemática e objetiva da dor em uma população vulnerável, facilitando a
                  implementação de intervenções analgésicas apropriadas e o monitoramento da eficácia do tratamento. A
                  escala contribui significativamente para a humanização do cuidado crítico, promovendo o reconhecimento
                  de que pacientes em estado crítico, mesmo quando sedados ou com comunicação comprometida, podem
                  experimentar dor significativa e necessitam de avaliação e tratamento adequados. A aplicação
                  sistemática da CPOT auxilia na prevenção de consequências negativas da dor não tratada em pacientes
                  críticos, incluindo aumento do tempo de ventilação mecânica, prolongamento da internação,
                  desenvolvimento de síndrome pós-terapia intensiva, dor crônica e comprometimento da recuperação
                  funcional.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Description */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Descrição Completa da Escala</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed mb-6">
                A Critical-Care Pain Observation Tool é composta por quatro domínios comportamentais e fisiológicos,
                cada um avaliado em uma escala de 0 a 2 pontos, totalizando uma pontuação que varia de 0 a 8 pontos.
                Cada domínio representa um aspecto específico da resposta à dor em pacientes críticos, considerando as
                particularidades desta população e as limitações impostas pelo estado crítico. A avaliação deve ser
                realizada através da observação direta e sistemática do paciente durante um período adequado,
                preferencialmente antes, durante e após procedimentos ou estímulos que possam desencadear resposta
                dolorosa. A escala possui duas versões: uma para pacientes intubados (com avaliação da adaptação à
                ventilação mecânica) e outra para pacientes não intubados (com avaliação da vocalização).
              </p>

              <div className="space-y-6">
                <div className="bg-muted/30 p-4 rounded-lg">
                  <h3 className="font-semibold mb-3">1. EXPRESSÃO FACIAL:</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-3">
                      <Badge variant="outline" className="shrink-0">
                        0
                      </Badge>
                      <p className="text-muted-foreground">
                        <strong>Relaxada, neutra:</strong> Músculos faciais completamente relaxados, sem tensão
                        evidente. Expressão facial neutra e tranquila, sem sinais de desconforto, dor ou estresse.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Badge variant="outline" className="shrink-0">
                        1
                      </Badge>
                      <p className="text-muted-foreground">
                        <strong>Tensa:</strong> Presença de tensão muscular facial evidente, com franzir da testa,
                        contração dos músculos periorbitais, cerramento das pálpebras ou contração dos músculos da
                        mandíbula.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Badge variant="outline" className="shrink-0">
                        2
                      </Badge>
                      <p className="text-muted-foreground">
                        <strong>Careta:</strong> Expressão facial de dor intensa com contração máxima dos músculos
                        faciais, franzir extremo da testa, cerramento intenso das pálpebras, contração da boca e
                        possível retração dos lábios.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-muted/30 p-4 rounded-lg">
                  <h3 className="font-semibold mb-3">2. MOVIMENTOS CORPORAIS:</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-3">
                      <Badge variant="outline" className="shrink-0">
                        0
                      </Badge>
                      <p className="text-muted-foreground">
                        <strong>Ausência de movimentos ou posição normal:</strong> Corpo completamente relaxado e
                        imóvel, ou movimentos normais e coordenados sem sinais de desconforto ou proteção.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Badge variant="outline" className="shrink-0">
                        1
                      </Badge>
                      <p className="text-muted-foreground">
                        <strong>Movimentos de proteção:</strong> Movimentos lentos e cautelosos, tentativas de proteger
                        áreas dolorosas, posicionamento defensivo ou movimentos hesitantes durante manipulação.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Badge variant="outline" className="shrink-0">
                        2
                      </Badge>
                      <p className="text-muted-foreground">
                        <strong>Inquietação/agitação:</strong> Movimentos frequentes e desorganizados, agitação motora,
                        tentativas de remover dispositivos, movimentos de retirada ou resistência ativa durante
                        procedimentos.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-muted/30 p-4 rounded-lg">
                  <h3 className="font-semibold mb-3">3. TENSÃO MUSCULAR:</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    <em>Avaliada através da flexão e extensão passiva do braço quando o paciente está relaxado</em>
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-3">
                      <Badge variant="outline" className="shrink-0">
                        0
                      </Badge>
                      <p className="text-muted-foreground">
                        <strong>Relaxada:</strong> Músculos completamente relaxados, sem resistência à movimentação
                        passiva. Braço move-se facilmente durante flexão e extensão passivas.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Badge variant="outline" className="shrink-0">
                        1
                      </Badge>
                      <p className="text-muted-foreground">
                        <strong>Tensa, rígida:</strong> Presença de tensão muscular evidente, com resistência leve a
                        moderada à movimentação passiva. Músculos contraídos, mas ainda permitindo movimentação.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Badge variant="outline" className="shrink-0">
                        2
                      </Badge>
                      <p className="text-muted-foreground">
                        <strong>Muito tensa, rígida:</strong> Rigidez muscular intensa com resistência significativa à
                        movimentação passiva. Músculos extremamente contraídos, dificultando ou impedindo a
                        movimentação.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-muted/30 p-4 rounded-lg">
                  <h3 className="font-semibold mb-3">4A. ADAPTAÇÃO À VENTILAÇÃO MECÂNICA (Pacientes Intubados):</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-3">
                      <Badge variant="outline" className="shrink-0">
                        0
                      </Badge>
                      <p className="text-muted-foreground">
                        <strong>Tolerando ventilação ou outras vocalizações:</strong> Paciente completamente
                        sincronizado com o ventilador, sem esforço respiratório adicional, aceitando passivamente os
                        ciclos ventilatórios programados.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Badge variant="outline" className="shrink-0">
                        1
                      </Badge>
                      <p className="text-muted-foreground">
                        <strong>Tossindo, mas tolerando:</strong> Episódios de tosse ou leve dessincronização com o
                        ventilador, mas mantendo adaptação adequada na maior parte do tempo.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Badge variant="outline" className="shrink-0">
                        2
                      </Badge>
                      <p className="text-muted-foreground">
                        <strong>Lutando contra o ventilador:</strong> Dessincronização evidente e persistente com o
                        ventilador, com esforço respiratório ativo contra os ciclos programados, tosse frequente e
                        intensa.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-muted/30 p-4 rounded-lg">
                  <h3 className="font-semibold mb-3">4B. VOCALIZAÇÃO (Pacientes Não Intubados):</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-3">
                      <Badge variant="outline" className="shrink-0">
                        0
                      </Badge>
                      <p className="text-muted-foreground">
                        <strong>Conversando em tom normal ou silencioso:</strong> Paciente fala em tom de voz normal e
                        calmo, ou permanece silencioso sem sinais de desconforto vocal.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Badge variant="outline" className="shrink-0">
                        1
                      </Badge>
                      <p className="text-muted-foreground">
                        <strong>Suspirando, gemendo:</strong> Vocalizações de desconforto como suspiros profundos,
                        gemidos ocasionais ou outras expressões vocais de desconforto leve a moderado.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Badge variant="outline" className="shrink-0">
                        2
                      </Badge>
                      <p className="text-muted-foreground">
                        <strong>Chorando, gritando:</strong> Vocalizações intensas de dor como choro, gritos,
                        lamentações ou outras expressões vocais de sofrimento significativo.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Instruções para Aplicação:</h3>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    <li>Observar o paciente por 1 minuto em repouso para estabelecer comportamento basal</li>
                    <li>Aplicar estímulo padronizado (mudança de decúbito, aspiração, curativo) quando possível</li>
                    <li>Observar durante e imediatamente após o estímulo por 1 minuto</li>
                    <li>Registrar a maior pontuação observada em cada domínio durante o período de avaliação</li>
                    <li>Para tensão muscular, realizar flexão e extensão passiva do braço</li>
                    <li>Escolher entre versão intubada ou não intubada conforme status do paciente</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Scoring */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Pontuação e Interpretação</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-3">Pontuação Possível:</h3>
                  <p className="text-muted-foreground mb-4">
                    A pontuação total da CPOT varia de 0 a 8 pontos, sendo obtida através da soma dos pontos de cada um
                    dos quatro domínios avaliados. Cada domínio pode receber 0, 1 ou 2 pontos, conforme os
                    comportamentos e respostas observados durante a avaliação. A pontuação mínima de 0 pontos indica
                    ausência de sinais comportamentais de dor, enquanto a pontuação máxima de 8 pontos indica presença
                    de múltiplos sinais comportamentais sugestivos de dor intensa. A avaliação deve ser realizada de
                    forma sistemática, observando o paciente em repouso e durante estímulos padronizados, registrando a
                    maior pontuação observada em cada domínio durante o período de avaliação.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Interpretação das Faixas de Pontuação:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        <h4 className="font-semibold text-green-800">0 - 2: Sem Dor ou Dor Mínima</h4>
                      </div>
                      <p className="text-sm text-green-700">
                        O paciente apresenta comportamentos que indicam conforto ou desconforto mínimo. Mantém expressão
                        facial relaxada, movimentos corporais normais, músculos relaxados e boa adaptação à ventilação
                        ou vocalização normal. Geralmente não requer intervenções analgésicas específicas, podendo ser
                        manejado com medidas de conforto não farmacológicas e otimização do ambiente de cuidados.
                      </p>
                    </div>

                    <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                      <div className="flex items-center gap-2 mb-2">
                        <AlertCircle className="h-5 w-5 text-yellow-600" />
                        <h4 className="font-semibold text-yellow-800">3 - 4: Dor Moderada</h4>
                      </div>
                      <p className="text-sm text-yellow-700">
                        O paciente demonstra comportamentos que indicam desconforto significativo, com alterações em
                        múltiplos domínios avaliados. Apresenta sinais comportamentais de dor que requerem atenção e
                        intervenção. Necessita de medidas analgésicas adequadas para pacientes críticos, técnicas de
                        conforto e monitoramento mais frequente para avaliar resposta às intervenções implementadas.
                      </p>
                    </div>

                    <div className="p-4 bg-red-50 rounded-lg border border-red-200 md:col-span-2">
                      <div className="flex items-center gap-2 mb-2">
                        <AlertCircle className="h-5 w-5 text-red-600" />
                        <h4 className="font-semibold text-red-800">5 - 8: Dor Intensa/Severa</h4>
                      </div>
                      <p className="text-sm text-red-700">
                        O paciente apresenta múltiplos sinais comportamentais que indicam sofrimento significativo e dor
                        intensa. Demonstra alterações importantes em todos ou na maioria dos domínios avaliados, com
                        comprometimento da estabilidade comportamental e possível impacto nos parâmetros fisiológicos.
                        Requer intervenção analgésica imediata e potente apropriada para pacientes críticos, avaliação
                        médica urgente, implementação de múltiplas estratégias de alívio da dor e monitoramento
                        contínuo. Pontuações entre 6-8 indicam emergência álgica que demanda ação imediata e reavaliação
                        frequente.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-cyan-50 p-4 rounded-lg border border-cyan-200">
                  <h3 className="font-semibold mb-2 text-cyan-800">Vantagens da CPOT:</h3>
                  <ul className="list-disc list-inside text-sm text-cyan-700 space-y-1">
                    <li>Aplicável tanto em pacientes intubados quanto não intubados</li>
                    <li>Avaliação de tensão muscular através de teste objetivo</li>
                    <li>Instruções claras para aplicação padronizada</li>
                    <li>Validada em diferentes populações de pacientes críticos</li>
                    <li>Boa correlação com autorrelato de dor quando possível</li>
                    <li>Sensível a mudanças após intervenções analgésicas</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Clinical Application */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Aplicação Prática e Cuidados</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Como Aplicar na Prática de Enfermagem:</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    A aplicação da CPOT em pacientes críticos requer treinamento específico e observação sistemática. O
                    enfermeiro deve seguir um protocolo padronizado, iniciando com observação do paciente em repouso por
                    1 minuto para estabelecer o comportamento basal. Em seguida, deve aplicar um estímulo padronizado
                    (como mudança de decúbito, aspiração de vias aéreas ou procedimento de curativo) e observar as
                    respostas comportamentais durante e imediatamente após o estímulo por mais 1 minuto. A avaliação da
                    tensão muscular deve ser realizada através da flexão e extensão passiva do braço quando o paciente
                    está relaxado.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Durante a aplicação, é fundamental registrar a maior pontuação observada em cada domínio durante
                    todo o período de avaliação, não apenas a resposta inicial. Para pacientes intubados, deve-se
                    utilizar a versão com avaliação da adaptação à ventilação mecânica, enquanto para pacientes não
                    intubados, utiliza-se a versão com avaliação da vocalização. É importante correlacionar os achados
                    comportamentais com parâmetros fisiológicos e considerar o contexto clínico do paciente.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Cuidados Durante a Aplicação:</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Seguir protocolo padronizado: 1 minuto em repouso + estímulo + 1 minuto de observação</li>
                    <li>Aplicar estímulo padronizado quando possível (mudança de decúbito, aspiração, curativo)</li>
                    <li>Registrar a maior pontuação observada em cada domínio durante todo o período</li>
                    <li>Avaliar tensão muscular através de flexão e extensão passiva do braço</li>
                    <li>Escolher versão apropriada (intubado vs. não intubado)</li>
                    <li>Considerar o nível de sedação atual na interpretação dos achados</li>
                    <li>Correlacionar com parâmetros fisiológicos (FC, PA, SpO2)</li>
                    <li>Documentar o contexto da avaliação (procedimentos, medicações, estímulos)</li>
                    <li>Reavaliar frequentemente, especialmente após intervenções</li>
                    <li>Treinar adequadamente a equipe para garantir consistência</li>
                    <li>Considerar limitações em pacientes com condições neurológicas específicas</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Protocolo de Aplicação Padronizado:</h3>
                  <div className="space-y-3">
                    <div className="bg-blue-50 p-3 rounded border border-blue-200">
                      <h4 className="font-medium text-blue-800 mb-1">Passo 1: Observação Basal (1 minuto)</h4>
                      <p className="text-sm text-blue-700">
                        Observar o paciente em repouso, sem manipulação, registrando comportamentos em cada domínio.
                      </p>
                    </div>
                    <div className="bg-green-50 p-3 rounded border border-green-200">
                      <h4 className="font-medium text-green-800 mb-1">Passo 2: Aplicação de Estímulo</h4>
                      <p className="text-sm text-green-700">
                        Aplicar estímulo padronizado (mudança de decúbito, aspiração, curativo) conforme protocolo.
                      </p>
                    </div>
                    <div className="bg-yellow-50 p-3 rounded border border-yellow-200">
                      <h4 className="font-medium text-yellow-800 mb-1">Passo 3: Observação Pós-Estímulo (1 minuto)</h4>
                      <p className="text-sm text-yellow-700">
                        Observar respostas comportamentais durante e imediatamente após o estímulo.
                      </p>
                    </div>
                    <div className="bg-purple-50 p-3 rounded border border-purple-200">
                      <h4 className="font-medium text-purple-800 mb-1">Passo 4: Registro e Interpretação</h4>
                      <p className="text-sm text-purple-700">
                        Registrar maior pontuação observada em cada domínio e calcular pontuação total.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Nursing Evolution Example */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Exemplo Detalhado de Evolução de Enfermagem</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-muted/30 p-6 rounded-lg">
                <h3 className="font-semibold mb-4">Registro em Prontuário:</h3>
                <div className="space-y-4 text-sm">
                  <p>
                    <strong>Data/Hora:</strong> 15/08/2024 - 10:30h
                  </p>
                  <p>
                    <strong>Paciente:</strong> A.C.M., 52 anos, feminino, internada na UTI para pós-operatório de
                    cirurgia cardíaca (revascularização do miocárdio), 1º POI
                  </p>

                  <div className="border-l-4 border-primary pl-4">
                    <p className="mb-2">
                      <strong>Avaliação da Dor - CPOT:</strong>
                    </p>
                    <p className="mb-2">
                      Paciente sedada com Propofol 1,5mg/kg/h + Fentanil 1,5mcg/kg/h, em ventilação mecânica (modo PSV),
                      RASS -2. Aplicada CPOT conforme protocolo da UTI, utilizando mudança de decúbito como estímulo
                      padronizado.
                    </p>

                    <div className="bg-white/50 p-3 rounded mb-3">
                      <p className="mb-2">
                        <strong>Protocolo de Aplicação:</strong>
                      </p>
                      <p className="text-xs mb-2">
                        <strong>Observação basal (1 min):</strong> Paciente em repouso, sem manipulação. Expressão
                        facial relaxada, sem movimentos corporais, músculos relaxados, sincronizada com ventilador.
                      </p>
                      <p className="text-xs mb-2">
                        <strong>Estímulo aplicado:</strong> Mudança de decúbito lateral direito para esquerdo, com
                        mobilização cuidadosa devido aos drenos torácicos.
                      </p>
                      <p className="text-xs mb-2">
                        <strong>Observação pós-estímulo (1 min):</strong> Respostas comportamentais observadas durante e
                        após a mobilização.
                      </p>
                    </div>

                    <div className="bg-white/50 p-3 rounded mb-3">
                      <p className="mb-2">
                        <strong>Detalhamento da Avaliação:</strong>
                      </p>
                      <ul className="space-y-1 text-xs">
                        <li>
                          <strong>Expressão Facial:</strong> 2 - Careta intensa durante mobilização, franzir extremo da
                          testa, cerramento das pálpebras
                        </li>
                        <li>
                          <strong>Movimentos Corporais:</strong> 1 - Movimentos de proteção, tentativa de proteger
                          região torácica durante mobilização
                        </li>
                        <li>
                          <strong>Tensão Muscular:</strong> 2 - Muito tensa e rígida, resistência significativa à flexão
                          passiva do braço
                        </li>
                        <li>
                          <strong>Adaptação à Ventilação:</strong> 2 - Lutando contra o ventilador, dessincronização
                          evidente durante e após mobilização
                        </li>
                      </ul>
                    </div>

                    <p className="mb-2">
                      <strong>Resultado:</strong> CPOT = 7 (dor severa)
                    </p>
                    <p className="mb-2">
                      <strong>Observações adicionais:</strong> Paciente apresenta taquicardia (FC de 75 para 105 bpm) e
                      hipertensão (PA de 110/65 para 140/85 mmHg) durante mobilização. Dessaturação leve (SpO2 de 98%
                      para 94%) durante dessincronização com ventilador. Retorno gradual aos valores basais após 15
                      minutos. Presença de sudorese durante manipulação.
                    </p>
                  </div>

                  <div className="border-l-4 border-accent pl-4">
                    <p className="mb-2">
                      <strong>Intervenções de Enfermagem Implementadas:</strong>
                    </p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Comunicado intensivista sobre pontuação CPOT elevada para reavaliação da analgesia</li>
                      <li>Aumentada dose de Fentanil conforme prescrição (de 1,5 para 2,5 mcg/kg/h)</li>
                      <li>Administrado bolus de Morfina 0,1mg/kg EV conforme nova prescrição</li>
                      <li>Implementada pré-medicação analgésica 30 minutos antes de procedimentos</li>
                      <li>Otimizado posicionamento com coxins para reduzir pressão em incisão cirúrgica</li>
                      <li>Reduzida luminosidade e ruídos ambientais</li>
                      <li>Agrupados cuidados para minimizar manipulações desnecessárias</li>
                      <li>Monitorização contínua de parâmetros vitais durante procedimentos</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-green-500 pl-4">
                    <p className="mb-2">
                      <strong>Reavaliação (14:00h):</strong>
                    </p>
                    <p className="mb-2">
                      Reaplicada CPOT após 3h30min do ajuste da analgesia, utilizando aspiração de vias aéreas como
                      estímulo.
                    </p>

                    <div className="bg-white/50 p-3 rounded mb-3">
                      <p className="mb-2">
                        <strong>Nova Avaliação:</strong>
                      </p>
                      <ul className="space-y-1 text-xs">
                        <li>
                          <strong>Expressão Facial:</strong> 1 - Tensão facial leve durante aspiração, franzir ocasional
                          da testa
                        </li>
                        <li>
                          <strong>Movimentos Corporais:</strong> 0 - Ausência de movimentos de proteção, posição normal
                        </li>
                        <li>
                          <strong>Tensão Muscular:</strong> 1 - Tensão leve, resistência mínima à movimentação passiva
                        </li>
                        <li>
                          <strong>Adaptação à Ventilação:</strong> 1 - Tosse durante aspiração, mas tolerando na maior
                          parte do tempo
                        </li>
                      </ul>
                    </div>

                    <p className="mb-2">
                      <strong>Resultado:</strong> CPOT = 3 (dor moderada)
                    </p>
                    <p className="mb-2">
                      Paciente apresenta melhora significativa dos parâmetros comportamentais de dor. Mantém-se mais
                      estável durante procedimentos, com menor variação dos sinais vitais (FC máxima 85 bpm, PA 125/75
                      mmHg). Melhor sincronização com ventilador, episódios de dessincronização menos frequentes e menos
                      intensos.
                    </p>
                  </div>

                  <div className="border-l-4 border-orange-500 pl-4">
                    <p className="mb-2">
                      <strong>Reavaliação (22:00h):</strong>
                    </p>
                    <p className="mb-2">Avaliação noturna durante cuidados de rotina (mudança de decúbito).</p>
                    <p className="mb-2">
                      <strong>Resultado:</strong> CPOT = 2 (dor mínima)
                    </p>
                    <p className="mb-2">
                      Paciente mantém estabilidade dos parâmetros comportamentais durante o período noturno. Expressão
                      facial relaxada na maior parte do tempo, ausência de movimentos de proteção, músculos relaxados,
                      boa adaptação à ventilação mecânica. Sinais vitais estáveis durante manipulação.
                    </p>
                  </div>

                  <div className="border-l-4 border-blue-500 pl-4">
                    <p className="mb-2">
                      <strong>Condutas e Planejamento:</strong>
                    </p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Manter avaliação da dor através da CPOT a cada 4 horas e durante procedimentos</li>
                      <li>Continuar infusão de Fentanil na dose atual (2,5 mcg/kg/h)</li>
                      <li>Manter pré-medicação analgésica antes de procedimentos dolorosos</li>
                      <li>Comunicar intensivista se CPOT persistir ≥ 5 para reavaliação</li>
                      <li>Continuar medidas de conforto não farmacológicas</li>
                      <li>Monitorizar parâmetros vitais continuamente durante cuidados</li>
                      <li>Agrupar cuidados para permitir períodos de descanso</li>
                      <li>Avaliar possibilidade de redução gradual da sedação conforme estabilidade</li>
                      <li>Preparar para desmame ventilatório conforme evolução clínica</li>
                      <li>Orientar equipe sobre aplicação padronizada da CPOT</li>
                    </ul>
                  </div>

                  <p className="mt-4">
                    <strong>Enfermeira Responsável:</strong> Patricia Lima Costa - COREN-SP 789012
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* References */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Referências Oficiais</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Normas e Diretrizes Oficiais:</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>COFEN - Resolução nº 358/2009: Sistematização da Assistência de Enfermagem</li>
                    <li>
                      Associação de Medicina Intensiva Brasileira (AMIB) - Diretrizes para analgesia e sedação em UTI
                    </li>
                    <li>
                      Ministério da Saúde - Protocolo de Segurança na Prescrição, Uso e Administração de Medicamentos
                    </li>
                    <li>COREN-SP - Parecer Técnico sobre avaliação da dor em pacientes críticos</li>
                    <li>Sociedade Brasileira de Terapia Intensiva - Protocolo de analgesia em terapia intensiva</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Literatura Científica:</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 text-sm">
                    <li>
                      Gélinas, C., Fillion, L., Puntillo, K. A., Viens, C., & Fortier, M. (2006). Validation of the
                      critical-care pain observation tool in adult patients. American Journal of Critical Care, 15(4),
                      420-427.
                    </li>
                    <li>
                      Gélinas, C., & Johnston, C. (2007). Pain assessment in the critically ill ventilated adult:
                      validation of the Critical-Care Pain Observation Tool and physiologic indicators. The Clinical
                      Journal of Pain, 23(6), 497-505.
                    </li>
                    <li>
                      Kwak, E. M., & Oh, H. (2012). Validation of the Critical-Care Pain Observation Tool in patients
                      with traumatic brain injury in the intensive care unit. Journal of Clinical Nursing, 22(21-22),
                      3104-3112.
                    </li>
                    <li>
                      Marmo, L., & Fowler, S. (2010). Pain assessment tool in the critically ill post-open heart surgery
                      patient population. Pain Management Nursing, 11(3), 134-140.
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-between">
            <Button asChild variant="outline">
              <Link href="/categorias/dor">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar para Escalas de Dor
              </Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
