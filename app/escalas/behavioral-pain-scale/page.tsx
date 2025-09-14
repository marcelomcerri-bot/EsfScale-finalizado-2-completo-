import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Activity, ArrowLeft, FileText, AlertCircle, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function BehavioralPainScalePage() {
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
            <span>Behavioral Pain Scale</span>
          </div>

          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-teal-50 rounded-full">
                <Activity className="h-8 w-8 text-teal-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Behavioral Pain Scale (BPS)</h1>
            <div className="flex justify-center gap-2 mb-4">
              <Badge variant="secondary" className="bg-teal-50 text-teal-700">
                Avaliação Comportamental da Dor
              </Badge>
              <Badge variant="outline">Pacientes Críticos Sedados</Badge>
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
                <p className="text-muted-foreground">Behavioral Pain Scale - BPS (Escala Comportamental de Dor)</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Finalidade e Objetivo:</h3>
                <p className="text-muted-foreground leading-relaxed">
                  A Behavioral Pain Scale (BPS) é um instrumento específico desenvolvido para avaliação da dor em
                  pacientes críticos adultos que estão sedados, sob ventilação mecânica ou com capacidade de comunicação
                  verbal comprometida. Esta escala foi criada reconhecendo que pacientes em unidades de terapia
                  intensiva frequentemente não conseguem verbalizar sua experiência dolorosa devido ao uso de sedativos,
                  bloqueadores neuromusculares, intubação orotraqueal ou alterações do nível de consciência. A BPS
                  avalia três domínios comportamentais específicos que refletem a resposta à dor em pacientes críticos:
                  expressão facial, movimentação dos membros superiores e adaptação à ventilação mecânica. O instrumento
                  é aplicado em pacientes adultos internados em unidades de terapia intensiva, especialmente aqueles sob
                  ventilação mecânica invasiva, sedação contínua, pós-operatório de cirurgias de grande porte, trauma
                  grave e outras condições críticas que comprometem a capacidade de comunicação verbal. Sua utilização
                  permite identificação objetiva da dor em uma população vulnerável que tradicionalmente tinha sua dor
                  subavaliada e subtratada, facilitando a implementação de intervenções analgésicas apropriadas e o
                  monitoramento da eficácia do tratamento. A BPS contribui significativamente para a humanização do
                  cuidado intensivo, reconhecendo que pacientes críticos, mesmo quando sedados, podem experimentar dor e
                  necessitam de avaliação e tratamento adequados. A aplicação sistemática da escala auxilia na prevenção
                  de consequências negativas da dor não tratada em pacientes críticos, incluindo aumento do tempo de
                  ventilação mecânica, prolongamento da internação, desenvolvimento de dor crônica e comprometimento da
                  recuperação funcional.
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
                A Behavioral Pain Scale é composta por três domínios comportamentais, cada um avaliado em uma escala de
                1 a 4 pontos, totalizando uma pontuação que varia de 3 a 12 pontos. Cada domínio representa um aspecto
                específico da resposta comportamental à dor em pacientes críticos, considerando as limitações impostas
                pela sedação, ventilação mecânica e estado crítico. A avaliação deve ser realizada através da observação
                direta do paciente durante um período de observação adequado, preferencialmente durante procedimentos de
                cuidados ou estímulos padronizados que possam desencadear resposta dolorosa.
              </p>

              <div className="space-y-6">
                <div className="bg-muted/30 p-4 rounded-lg">
                  <h3 className="font-semibold mb-3">1. EXPRESSÃO FACIAL:</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-3">
                      <Badge variant="outline" className="shrink-0">
                        1
                      </Badge>
                      <p className="text-muted-foreground">
                        <strong>Relaxada:</strong> Músculos faciais totalmente relaxados, sem tensão evidente. Expressão
                        neutra e tranquila, sem sinais de desconforto ou dor.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Badge variant="outline" className="shrink-0">
                        2
                      </Badge>
                      <p className="text-muted-foreground">
                        <strong>Parcialmente tensa:</strong> Presença de tensão muscular facial leve a moderada, com
                        franzir ocasional da testa ou contração intermitente dos músculos periorbitais.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Badge variant="outline" className="shrink-0">
                        3
                      </Badge>
                      <p className="text-muted-foreground">
                        <strong>Muito tensa:</strong> Tensão muscular facial evidente e constante, com franzir
                        pronunciado da testa, contração dos músculos periorbitais e possível cerramento das pálpebras.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Badge variant="outline" className="shrink-0">
                        4
                      </Badge>
                      <p className="text-muted-foreground">
                        <strong>Careta:</strong> Expressão facial de dor intensa com contração máxima dos músculos
                        faciais, franzir extremo da testa, cerramento das pálpebras e possível contração dos músculos da
                        boca.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-muted/30 p-4 rounded-lg">
                  <h3 className="font-semibold mb-3">2. MOVIMENTAÇÃO DOS MEMBROS SUPERIORES:</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-3">
                      <Badge variant="outline" className="shrink-0">
                        1
                      </Badge>
                      <p className="text-muted-foreground">
                        <strong>Sem movimento:</strong> Membros superiores completamente relaxados e imóveis, sem
                        movimentação espontânea ou em resposta a estímulos.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Badge variant="outline" className="shrink-0">
                        2
                      </Badge>
                      <p className="text-muted-foreground">
                        <strong>Parcialmente fletidos:</strong> Movimentação leve dos membros superiores, com flexão
                        parcial ocasional dos braços ou movimentos de inquietação intermitentes.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Badge variant="outline" className="shrink-0">
                        3
                      </Badge>
                      <p className="text-muted-foreground">
                        <strong>Muito fletidos com flexão dos dedos:</strong> Flexão pronunciada dos membros superiores
                        com contração evidente dos músculos, flexão dos dedos e possível formação de punhos cerrados.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Badge variant="outline" className="shrink-0">
                        4
                      </Badge>
                      <p className="text-muted-foreground">
                        <strong>Permanentemente retraídos:</strong> Retração constante e intensa dos membros superiores,
                        com flexão máxima, rigidez muscular evidente e resistência à movimentação passiva.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-muted/30 p-4 rounded-lg">
                  <h3 className="font-semibold mb-3">3. ADAPTAÇÃO À VENTILAÇÃO MECÂNICA:</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-3">
                      <Badge variant="outline" className="shrink-0">
                        1
                      </Badge>
                      <p className="text-muted-foreground">
                        <strong>Tolerando ventilação:</strong> Paciente completamente sincronizado com o ventilador, sem
                        esforço respiratório adicional, aceitando passivamente os ciclos ventilatórios programados.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Badge variant="outline" className="shrink-0">
                        2
                      </Badge>
                      <p className="text-muted-foreground">
                        <strong>Tossindo, mas tolerando na maior parte do tempo:</strong> Episódios ocasionais de tosse
                        ou leve dessincronização com o ventilador, mas mantendo adaptação adequada na maior parte do
                        tempo.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Badge variant="outline" className="shrink-0">
                        3
                      </Badge>
                      <p className="text-muted-foreground">
                        <strong>Lutando contra o ventilador:</strong> Dessincronização evidente com o ventilador, com
                        esforço respiratório ativo contra os ciclos programados, tosse frequente e agitação
                        respiratória.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Badge variant="outline" className="shrink-0">
                        4
                      </Badge>
                      <p className="text-muted-foreground">
                        <strong>Incapaz de controlar a ventilação:</strong> Dessincronização completa e constante com o
                        ventilador, com esforço respiratório máximo contra o equipamento, podendo necessitar de sedação
                        adicional ou bloqueio neuromuscular.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Considerações Especiais para Aplicação:</h3>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    <li>A avaliação deve ser realizada durante procedimentos ou estímulos padronizados</li>
                    <li>Observar o paciente por período adequado (1-2 minutos) antes, durante e após estímulos</li>
                    <li>Considerar o nível de sedação atual do paciente na interpretação dos achados</li>
                    <li>Para pacientes traqueostomizados, adaptar a avaliação da ventilação mecânica</li>
                    <li>Documentar o contexto da avaliação (procedimentos, medicações, estímulos)</li>
                    <li>Correlacionar com parâmetros fisiológicos (frequência cardíaca, pressão arterial)</li>
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
                    A pontuação total da Behavioral Pain Scale varia de 3 a 12 pontos, sendo obtida através da soma dos
                    pontos de cada um dos três domínios avaliados. Cada domínio pode receber de 1 a 4 pontos, conforme
                    os comportamentos observados durante a avaliação. A pontuação mínima de 3 pontos indica ausência de
                    sinais comportamentais de dor, enquanto a pontuação máxima de 12 pontos indica presença de múltiplos
                    sinais comportamentais sugestivos de dor intensa. A avaliação deve ser realizada através da
                    observação sistemática do paciente, preferencialmente durante procedimentos de cuidados ou estímulos
                    que possam desencadear resposta dolorosa.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Interpretação das Faixas de Pontuação:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        <h4 className="font-semibold text-green-800">3 - 5: Sem Dor ou Dor Mínima</h4>
                      </div>
                      <p className="text-sm text-green-700">
                        O paciente apresenta comportamentos que indicam conforto ou desconforto mínimo. Mantém expressão
                        facial relaxada, membros superiores sem tensão e boa adaptação à ventilação mecânica. Geralmente
                        não requer intervenções analgésicas específicas, podendo ser manejado com medidas de conforto
                        não farmacológicas e otimização do ambiente de cuidados.
                      </p>
                    </div>

                    <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                      <div className="flex items-center gap-2 mb-2">
                        <AlertCircle className="h-5 w-5 text-yellow-600" />
                        <h4 className="font-semibold text-yellow-800">6 - 8: Dor Moderada</h4>
                      </div>
                      <p className="text-sm text-yellow-700">
                        O paciente demonstra comportamentos que indicam desconforto significativo, com alterações em
                        pelo menos dois dos três domínios avaliados. Apresenta sinais comportamentais de dor que
                        requerem atenção e intervenção. Necessita de medidas analgésicas adequadas para pacientes
                        críticos, técnicas de conforto e monitoramento mais frequente para avaliar resposta às
                        intervenções implementadas.
                      </p>
                    </div>

                    <div className="p-4 bg-red-50 rounded-lg border border-red-200 md:col-span-2">
                      <div className="flex items-center gap-2 mb-2">
                        <AlertCircle className="h-5 w-5 text-red-600" />
                        <h4 className="font-semibold text-red-800">9 - 12: Dor Intensa/Severa</h4>
                      </div>
                      <p className="text-sm text-red-700">
                        O paciente apresenta múltiplos sinais comportamentais que indicam sofrimento significativo e dor
                        intensa. Demonstra alterações importantes em todos os três domínios avaliados, com
                        comprometimento da adaptação à ventilação mecânica e sinais de desconforto extremo. Requer
                        intervenção analgésica imediata e potente apropriada para pacientes críticos, avaliação médica
                        urgente, implementação de múltiplas estratégias de alívio da dor e monitoramento contínuo.
                        Pontuações entre 10-12 indicam emergência álgica que demanda ação imediata e reavaliação
                        frequente.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-teal-50 p-4 rounded-lg border border-teal-200">
                  <h3 className="font-semibold mb-2 text-teal-800">Considerações Especiais para Pacientes Críticos:</h3>
                  <ul className="list-disc list-inside text-sm text-teal-700 space-y-1">
                    <li>Considerar o nível de sedação atual na interpretação dos achados</li>
                    <li>Correlacionar com parâmetros fisiológicos (FC, PA, SpO2)</li>
                    <li>Avaliar impacto de bloqueadores neuromusculares na movimentação</li>
                    <li>Considerar condições clínicas que possam influenciar os comportamentos</li>
                    <li>Reavaliar frequentemente devido à instabilidade clínica</li>
                    <li>Documentar contexto da avaliação (procedimentos, estímulos, medicações)</li>
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
                    A aplicação da Behavioral Pain Scale em pacientes críticos requer conhecimento especializado sobre
                    cuidados intensivos e observação sistemática. O enfermeiro deve posicionar-se de forma a observar
                    claramente todos os domínios comportamentais do paciente, especialmente a face, membros superiores e
                    padrão respiratório. A avaliação deve ser realizada preferencialmente durante procedimentos de
                    cuidados que possam desencadear resposta dolorosa, como aspiração de vias aéreas, mudança de
                    decúbito, curativos ou fisioterapia respiratória.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Durante a aplicação, é fundamental observar o paciente antes, durante e após estímulos
                    potencialmente dolorosos, registrando as respostas comportamentais em cada domínio. A avaliação deve
                    considerar o nível de sedação atual do paciente, pois sedação profunda pode mascarar respostas
                    comportamentais à dor. É importante correlacionar os achados comportamentais com parâmetros
                    fisiológicos como frequência cardíaca, pressão arterial e saturação de oxigênio, que podem fornecer
                    informações complementares sobre a presença de dor.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Cuidados Durante a Aplicação:</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Observar o paciente por período adequado (1-2 minutos) antes, durante e após estímulos</li>
                    <li>Avaliar cada domínio de forma independente e sistemática</li>
                    <li>Considerar o nível de sedação atual na interpretação dos achados</li>
                    <li>Correlacionar com parâmetros fisiológicos (FC, PA, SpO2)</li>
                    <li>Documentar o contexto da avaliação (procedimentos, medicações, estímulos)</li>
                    <li>Considerar o impacto de bloqueadores neuromusculares na movimentação</li>
                    <li>Avaliar durante procedimentos padronizados para maior consistência</li>
                    <li>Reavaliar frequentemente devido à instabilidade clínica dos pacientes críticos</li>
                    <li>Treinar adequadamente a equipe para garantir consistência na aplicação</li>
                    <li>Considerar limitações da escala em pacientes com condições neurológicas específicas</li>
                    <li>Comunicar achados significativos à equipe médica para ajuste da analgesia</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Intervenções Baseadas na Pontuação:</h3>
                  <div className="space-y-3">
                    <div className="bg-green-50 p-3 rounded border border-green-200">
                      <h4 className="font-medium text-green-800 mb-1">Pontuação 3-5 (Sem dor/Dor mínima):</h4>
                      <p className="text-sm text-green-700">
                        Manter medidas de conforto, otimizar ambiente (reduzir ruídos, controlar iluminação),
                        posicionamento adequado, cuidados de rotina, monitoramento padrão.
                      </p>
                    </div>
                    <div className="bg-yellow-50 p-3 rounded border border-yellow-200">
                      <h4 className="font-medium text-yellow-800 mb-1">Pontuação 6-8 (Dor moderada):</h4>
                      <p className="text-sm text-yellow-700">
                        Implementar medidas não farmacológicas, considerar analgésicos conforme prescrição, aumentar
                        frequência de avaliação, otimizar sedação se necessário.
                      </p>
                    </div>
                    <div className="bg-red-50 p-3 rounded border border-red-200">
                      <h4 className="font-medium text-red-800 mb-1">Pontuação 9-12 (Dor intensa/severa):</h4>
                      <p className="text-sm text-red-700">
                        Intervenção analgésica imediata, comunicação médica urgente, implementação de múltiplas
                        estratégias, monitoramento contínuo, reavaliação frequente.
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
                    <strong>Data/Hora:</strong> 28/07/2024 - 14:00h
                  </p>
                  <p>
                    <strong>Paciente:</strong> J.M.R., 45 anos, masculino, internado na UTI para pós-operatório de
                    cirurgia abdominal de grande porte (laparotomia exploradora + ressecção intestinal), 2º POI
                  </p>

                  <div className="border-l-4 border-primary pl-4">
                    <p className="mb-2">
                      <strong>Avaliação da Dor - Behavioral Pain Scale (BPS):</strong>
                    </p>
                    <p className="mb-2">
                      Paciente sedado com Propofol 2mg/kg/h + Fentanil 2mcg/kg/h, em ventilação mecânica (modo SIMV),
                      RASS -3. Aplicada BPS durante procedimento de aspiração de vias aéreas e mudança de decúbito,
                      conforme protocolo da UTI.
                    </p>

                    <div className="bg-white/50 p-3 rounded mb-3">
                      <p className="mb-2">
                        <strong>Detalhamento da Avaliação:</strong>
                      </p>
                      <ul className="space-y-1 text-xs">
                        <li>
                          <strong>Expressão Facial:</strong> 3 - Muito tensa, com franzir pronunciado da testa e
                          contração evidente dos músculos periorbitais durante manipulação
                        </li>
                        <li>
                          <strong>Movimentação Membros Superiores:</strong> 3 - Muito fletidos com flexão dos dedos,
                          formação de punhos cerrados durante procedimentos
                        </li>
                        <li>
                          <strong>Adaptação à Ventilação:</strong> 3 - Lutando contra o ventilador, dessincronização
                          evidente durante manipulação, tosse frequente
                        </li>
                      </ul>
                    </div>

                    <p className="mb-2">
                      <strong>Resultado:</strong> BPS = 9 (dor severa)
                    </p>
                    <p className="mb-2">
                      <strong>Observações adicionais:</strong> Paciente apresenta taquicardia (FC de 85 para 110 bpm) e
                      hipertensão (PA de 120/70 para 145/90 mmHg) durante manipulação. Retorno aos valores basais após
                      10-15 minutos do término dos procedimentos. Sudorese evidente durante cuidados, dessaturação leve
                      (SpO2 de 98% para 94%) durante dessincronização com ventilador.
                    </p>
                  </div>

                  <div className="border-l-4 border-accent pl-4">
                    <p className="mb-2">
                      <strong>Intervenções de Enfermagem Implementadas:</strong>
                    </p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Comunicado intensivista sobre pontuação BPS elevada para reavaliação da analgesia</li>
                      <li>Aumentada dose de Fentanil conforme prescrição (de 2 para 3 mcg/kg/h)</li>
                      <li>Administrado bolus de Morfina 0,1mg/kg EV conforme nova prescrição médica</li>
                      <li>Otimizado posicionamento com coxins para reduzir pressão em pontos de apoio</li>
                      <li>Reduzida luminosidade do ambiente, controle de ruídos</li>
                      <li>Agrupados cuidados para minimizar manipulações desnecessárias</li>
                      <li>Pré-medicação analgésica antes de procedimentos dolorosos</li>
                      <li>Monitorização contínua de parâmetros vitais durante cuidados</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-green-500 pl-4">
                    <p className="mb-2">
                      <strong>Reavaliação (18:00h):</strong>
                    </p>
                    <p className="mb-2">
                      Reaplicada BPS após 4 horas do ajuste da analgesia, durante cuidados de rotina.
                    </p>

                    <div className="bg-white/50 p-3 rounded mb-3">
                      <p className="mb-2">
                        <strong>Nova Avaliação:</strong>
                      </p>
                      <ul className="space-y-1 text-xs">
                        <li>
                          <strong>Expressão Facial:</strong> 2 - Parcialmente tensa, com tensão muscular leve durante
                          manipulação
                        </li>
                        <li>
                          <strong>Movimentação Membros Superiores:</strong> 2 - Parcialmente fletidos, movimentação leve
                          ocasional
                        </li>
                        <li>
                          <strong>Adaptação à Ventilação:</strong> 2 - Tossindo ocasionalmente, mas tolerando na maior
                          parte do tempo
                        </li>
                      </ul>
                    </div>

                    <p className="mb-2">
                      <strong>Resultado:</strong> BPS = 6 (dor moderada)
                    </p>
                    <p className="mb-2">
                      Paciente apresenta melhora significativa dos parâmetros comportamentais de dor. Mantém-se mais
                      estável durante cuidados de rotina, com menor variação dos sinais vitais (FC máxima 95 bpm, PA
                      130/80 mmHg). Melhor sincronização com ventilador, episódios de tosse menos frequentes.
                    </p>
                  </div>

                  <div className="border-l-4 border-orange-500 pl-4">
                    <p className="mb-2">
                      <strong>Reavaliação (02:00h):</strong>
                    </p>
                    <p className="mb-2">Avaliação noturna durante cuidados de rotina.</p>
                    <p className="mb-2">
                      <strong>Resultado:</strong> BPS = 4 (dor leve)
                    </p>
                    <p className="mb-2">
                      Paciente mantém estabilidade dos parâmetros comportamentais durante o período noturno. Expressão
                      facial relaxada na maior parte do tempo, membros superiores sem tensão significativa, boa
                      adaptação à ventilação mecânica. Sinais vitais estáveis durante manipulação.
                    </p>
                  </div>

                  <div className="border-l-4 border-blue-500 pl-4">
                    <p className="mb-2">
                      <strong>Condutas e Planejamento:</strong>
                    </p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Manter avaliação da dor através da BPS a cada 4 horas e durante procedimentos</li>
                      <li>Continuar infusão de Fentanil na dose atual (3 mcg/kg/h)</li>
                      <li>Comunicar intensivista se BPS persistir ≥ 8 para reavaliação</li>
                      <li>Manter pré-medicação analgésica antes de procedimentos dolorosos</li>
                      <li>Continuar medidas de conforto não farmacológicas</li>
                      <li>Monitorizar parâmetros vitais continuamente durante cuidados</li>
                      <li>Agrupar cuidados para permitir períodos de descanso</li>
                      <li>Avaliar possibilidade de redução gradual da sedação conforme melhora clínica</li>
                      <li>Orientar equipe sobre sinais comportamentais de dor em pacientes críticos</li>
                      <li>Documentar detalhadamente contexto e respostas às intervenções</li>
                    </ul>
                  </div>

                  <p className="mt-4">
                    <strong>Enfermeiro Responsável:</strong> Roberto Silva Oliveira - COREN-RS 678901
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
                      Payen, J. F., Bru, O., Bosson, J. L., Lagrasta, A., Novel, E., Deschaux, I., ... & Jacquot, C.
                      (2001). Assessing pain in critically ill sedated patients by using a behavioral pain scale.
                      Critical Care Medicine, 29(12), 2258-2263.
                    </li>
                    <li>
                      Ahlers, S. J., van Gulik, L., van der Veen, A. M., van Dongen, H. P., Bruins, P., Belitser, S. V.,
                      ... & Knibbe, C. A. (2010). Comparison of different pain scoring systems in critically ill
                      patients in a general ICU. Critical Care, 14(1), R15.
                    </li>
                    <li>
                      Chanques, G., Viel, E., Constantin, J. M., Jung, B., de Lattre, S., Carr, J., ... & Jaber, S.
                      (2010). The measurement of pain in intensive care unit: comparison of 5 self-report intensity
                      scales. Pain, 151(3), 711-721.
                    </li>
                    <li>
                      Pinheiro, A. R., & Christofoletti, G. (2012). Fidedignidade e validade da Behavioral Pain Scale em
                      pacientes críticos. Revista da Escola de Enfermagem da USP, 46(6), 1395-1401.
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
