import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, FileText, AlertCircle, CheckCircle, Heart } from "lucide-react"
import Link from "next/link"

export default function CRIESScalePage() {
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
            <span>Escala CRIES</span>
          </div>

          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-pink-50 rounded-full">
                <Heart className="h-8 w-8 text-pink-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Escala CRIES</h1>
            <div className="flex justify-center gap-2 mb-4">
              <Badge variant="secondary" className="bg-pink-50 text-pink-700">
                Avaliação Neonatal da Dor
              </Badge>
              <Badge variant="outline">Recém-nascidos prematuros e a termo</Badge>
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
                  Escala CRIES - Crying, Requires oxygen, Increased vital signs, Expression, Sleeplessness (Choro,
                  Necessita oxigênio, Aumento dos sinais vitais, Expressão, Insônia)
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Finalidade e Objetivo:</h3>
                <p className="text-muted-foreground leading-relaxed">
                  A Escala CRIES é um instrumento específico desenvolvido para avaliação da dor em recém-nascidos,
                  especialmente aqueles em unidades de terapia intensiva neonatal. Esta escala foi criada considerando
                  as particularidades fisiológicas e comportamentais dos neonatos, que não conseguem verbalizar sua
                  experiência dolorosa e apresentam respostas específicas ao estímulo nociceptivo. O instrumento avalia
                  cinco parâmetros fundamentais que refletem a resposta neonatal à dor: características do choro,
                  necessidade de suporte ventilatório, alterações dos sinais vitais, expressão facial e padrões de sono.
                  A CRIES é aplicada em recém-nascidos prematuros e a termo, desde o nascimento até aproximadamente 6
                  meses de idade, sendo especialmente útil em contextos de cuidados intensivos, pós-operatório neonatal,
                  procedimentos invasivos e situações que requerem monitoramento contínuo da dor. Sua utilização permite
                  identificação precoce da dor neonatal, implementação de intervenções analgésicas apropriadas para esta
                  população específica e monitoramento da eficácia das medidas implementadas. A escala também contribui
                  para a humanização do cuidado neonatal, reconhecendo que os recém-nascidos são capazes de sentir dor e
                  necessitam de avaliação e tratamento adequados. A aplicação sistemática da CRIES auxilia na prevenção
                  de consequências negativas da dor não tratada em neonatos, incluindo alterações no desenvolvimento
                  neurológico, distúrbios comportamentais futuros e complicações clínicas imediatas.
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
                A Escala CRIES é composta por cinco parâmetros comportamentais e fisiológicos, cada um avaliado em uma
                escala de 0 a 2 pontos, totalizando uma pontuação máxima de 10 pontos. Cada parâmetro representa um
                aspecto específico da resposta neonatal à dor, considerando as limitações de comunicação e as
                características únicas desta população. A avaliação deve ser realizada através da observação direta do
                recém-nascido por um período de observação adequado, preferencialmente quando o neonato está em estado
                de alerta ou durante manipulações de rotina.
              </p>

              <div className="space-y-6">
                <div className="bg-muted/30 p-4 rounded-lg">
                  <h3 className="font-semibold mb-3">C - CRYING (Choro):</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-3">
                      <Badge variant="outline" className="shrink-0">
                        0
                      </Badge>
                      <p className="text-muted-foreground">
                        <strong>Sem choro ou choro facilmente consolável:</strong> O recém-nascido não apresenta choro
                        ou, quando presente, é facilmente interrompido com medidas simples de conforto como contenção,
                        sucção não nutritiva ou mudança de posição.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Badge variant="outline" className="shrink-0">
                        1
                      </Badge>
                      <p className="text-muted-foreground">
                        <strong>Choro agudo, mas consolável:</strong> O recém-nascido apresenta choro de tonalidade mais
                        aguda que o habitual, mas ainda responde às medidas de conforto, embora possa necessitar de mais
                        tempo ou esforço para ser consolado.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Badge variant="outline" className="shrink-0">
                        2
                      </Badge>
                      <p className="text-muted-foreground">
                        <strong>Choro agudo e inconsolável:</strong> O recém-nascido apresenta choro de alta
                        intensidade, agudo e persistente, que não responde às medidas habituais de conforto. O choro
                        pode ser descrito como "diferente" do padrão normal do bebê.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-muted/30 p-4 rounded-lg">
                  <h3 className="font-semibold mb-3">R - REQUIRES OXYGEN (Necessita Oxigênio):</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-3">
                      <Badge variant="outline" className="shrink-0">
                        0
                      </Badge>
                      <p className="text-muted-foreground">
                        <strong>Não necessita oxigênio suplementar:</strong> O recém-nascido mantém saturação de
                        oxigênio adequada (≥95%) em ar ambiente, sem necessidade de suporte ventilatório adicional.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Badge variant="outline" className="shrink-0">
                        1
                      </Badge>
                      <p className="text-muted-foreground">
                        <strong>Necessita ≤30% de oxigênio:</strong> O recém-nascido requer suporte de oxigênio em
                        baixas concentrações para manter saturação adequada, indicando comprometimento respiratório leve
                        a moderado.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Badge variant="outline" className="shrink-0">
                        2
                      </Badge>
                      <p className="text-muted-foreground">
                        <strong>Necessita &gt;30% de oxigênio:</strong> O recém-nascido requer altas concentrações de
                        oxigênio ou suporte ventilatório mais intensivo para manter oxigenação adequada, indicando
                        comprometimento respiratório significativo.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-muted/30 p-4 rounded-lg">
                  <h3 className="font-semibold mb-3">I - INCREASED VITAL SIGNS (Aumento dos Sinais Vitais):</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-3">
                      <Badge variant="outline" className="shrink-0">
                        0
                      </Badge>
                      <p className="text-muted-foreground">
                        <strong>Frequência cardíaca e pressão arterial normais:</strong> Os sinais vitais permanecem
                        dentro dos parâmetros normais para a idade gestacional e cronológica do recém-nascido.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Badge variant="outline" className="shrink-0">
                        1
                      </Badge>
                      <p className="text-muted-foreground">
                        <strong>Aumento de 11-20% da frequência cardíaca ou pressão arterial:</strong> Elevação moderada
                        dos sinais vitais em relação aos valores basais do recém-nascido, indicando resposta fisiológica
                        ao estresse.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Badge variant="outline" className="shrink-0">
                        2
                      </Badge>
                      <p className="text-muted-foreground">
                        <strong>Aumento &gt;20% da frequência cardíaca ou pressão arterial:</strong> Elevação
                        significativa dos sinais vitais, indicando resposta fisiológica intensa ao estímulo doloroso ou
                        estressante.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-muted/30 p-4 rounded-lg">
                  <h3 className="font-semibold mb-3">E - EXPRESSION (Expressão Facial):</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-3">
                      <Badge variant="outline" className="shrink-0">
                        0
                      </Badge>
                      <p className="text-muted-foreground">
                        <strong>Expressão facial relaxada:</strong> O recém-nascido apresenta expressão facial neutra e
                        relaxada, sem sinais de tensão muscular ou desconforto evidente.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Badge variant="outline" className="shrink-0">
                        1
                      </Badge>
                      <p className="text-muted-foreground">
                        <strong>Careta ocasional:</strong> O recém-nascido apresenta expressões faciais intermitentes de
                        desconforto, como franzir da testa, contração dos músculos faciais ou caretas ocasionais.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Badge variant="outline" className="shrink-0">
                        2
                      </Badge>
                      <p className="text-muted-foreground">
                        <strong>Careta constante:</strong> O recém-nascido mantém expressão facial de desconforto de
                        forma contínua, com tensão muscular evidente, franzir constante da testa e contração persistente
                        dos músculos faciais.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-muted/30 p-4 rounded-lg">
                  <h3 className="font-semibold mb-3">S - SLEEPLESSNESS (Insônia/Distúrbio do Sono):</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-3">
                      <Badge variant="outline" className="shrink-0">
                        0
                      </Badge>
                      <p className="text-muted-foreground">
                        <strong>Dorme continuamente:</strong> O recém-nascido mantém padrões normais de sono para sua
                        idade, dormindo por períodos adequados e apresentando ciclos de sono-vigília apropriados.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Badge variant="outline" className="shrink-0">
                        1
                      </Badge>
                      <p className="text-muted-foreground">
                        <strong>Acorda frequentemente:</strong> O recém-nascido apresenta despertares mais frequentes
                        que o habitual, com períodos de sono mais curtos e fragmentados, mas ainda consegue adormecer
                        novamente.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Badge variant="outline" className="shrink-0">
                        2
                      </Badge>
                      <p className="text-muted-foreground">
                        <strong>Constantemente acordado:</strong> O recém-nascido apresenta insônia significativa,
                        permanecendo acordado por períodos prolongados, com dificuldade importante para iniciar ou
                        manter o sono.
                      </p>
                    </div>
                  </div>
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
                    A pontuação total da Escala CRIES varia de 0 a 10 pontos, sendo obtida através da soma dos pontos de
                    cada um dos cinco parâmetros avaliados. Cada parâmetro pode receber 0, 1 ou 2 pontos, conforme os
                    achados observados durante a avaliação. A avaliação deve ser realizada através da observação direta
                    do recém-nascido por período adequado, considerando o estado comportamental e as condições clínicas
                    do neonato. É importante realizar a avaliação em momentos apropriados, evitando períodos
                    imediatamente após alimentação ou durante procedimentos que possam interferir nos parâmetros
                    avaliados.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Interpretação das Faixas de Pontuação:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        <h4 className="font-semibold text-green-800">0 - 3: Sem Dor ou Dor Leve</h4>
                      </div>
                      <p className="text-sm text-green-700">
                        O recém-nascido apresenta comportamentos e respostas fisiológicas que indicam conforto ou
                        desconforto mínimo. Mantém padrões normais de sono-vigília, sinais vitais estáveis e
                        comportamentos típicos para sua idade gestacional. Geralmente não requer intervenções
                        farmacológicas específicas para dor, podendo ser manejado com medidas de conforto não
                        farmacológicas como contenção, sucção não nutritiva, posicionamento adequado e ambiente
                        tranquilo.
                      </p>
                    </div>

                    <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                      <div className="flex items-center gap-2 mb-2">
                        <AlertCircle className="h-5 w-5 text-yellow-600" />
                        <h4 className="font-semibold text-yellow-800">4 - 6: Dor Moderada</h4>
                      </div>
                      <p className="text-sm text-yellow-700">
                        O recém-nascido demonstra sinais comportamentais e fisiológicos que indicam desconforto
                        significativo, com alterações nos padrões normais de comportamento e função. Apresenta respostas
                        que sugerem experiência dolorosa que interfere no bem-estar e estabilidade clínica. Necessita de
                        medidas analgésicas adequadas para neonatos, técnicas de conforto intensificadas e monitoramento
                        mais frequente para avaliar resposta às intervenções implementadas.
                      </p>
                    </div>

                    <div className="p-4 bg-red-50 rounded-lg border border-red-200 md:col-span-2">
                      <div className="flex items-center gap-2 mb-2">
                        <AlertCircle className="h-5 w-5 text-red-600" />
                        <h4 className="font-semibold text-red-800">7 - 10: Dor Intensa/Severa</h4>
                      </div>
                      <p className="text-sm text-red-700">
                        O recém-nascido apresenta múltiplos sinais comportamentais e fisiológicos que indicam sofrimento
                        significativo e dor intensa. Demonstra alterações importantes nos padrões normais de
                        comportamento, com comprometimento da estabilidade clínica e bem-estar geral. Requer intervenção
                        analgésica imediata e potente apropriada para neonatos, avaliação médica urgente, implementação
                        de múltiplas estratégias de alívio da dor e monitoramento contínuo. Pontuações entre 8-10
                        indicam emergência álgica neonatal que demanda ação imediata, reavaliação frequente e possível
                        ajuste do plano terapêutico.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                  <h3 className="font-semibold mb-2 text-amber-800">Considerações Especiais para Neonatos:</h3>
                  <ul className="list-disc list-inside text-sm text-amber-700 space-y-1">
                    <li>Prematuros podem apresentar respostas atenuadas devido à imaturidade neurológica</li>
                    <li>Considerar idade gestacional corrigida na interpretação dos achados</li>
                    <li>Correlacionar com outros indicadores clínicos e laboratoriais</li>
                    <li>Avaliar impacto de medicações sedativas ou analgésicas prévias</li>
                    <li>Considerar condições clínicas concomitantes que possam influenciar os parâmetros</li>
                    <li>Reavaliar frequentemente devido à rápida mudança do estado clínico neonatal</li>
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
                    A aplicação da Escala CRIES em neonatos requer conhecimento especializado sobre fisiologia e
                    comportamento neonatal, bem como ambiente adequado para observação. O enfermeiro deve posicionar-se
                    de forma a observar claramente todos os parâmetros do recém-nascido sem interferir em seu estado
                    natural ou causar estímulos adicionais. A avaliação deve ser realizada preferencialmente quando o
                    neonato está em estado de alerta calmo ou durante manipulações de rotina, evitando períodos
                    imediatamente após alimentação, procedimentos ou administração de medicações que possam interferir
                    nos parâmetros avaliados.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Durante a aplicação, é fundamental avaliar cada um dos cinco parâmetros de forma sistemática e
                    independente, considerando os valores basais do recém-nascido e suas características individuais. A
                    presença dos pais deve ser considerada, pois pode influenciar alguns comportamentos, especialmente
                    relacionados ao choro e consolabilidade. A escala deve ser aplicada em intervalos regulares conforme
                    protocolo institucional, especialmente antes e após procedimentos dolorosos, administração de
                    analgésicos ou mudanças significativas no estado clínico do neonato.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Cuidados Durante a Aplicação:</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Observar o recém-nascido por período adequado para identificar padrões comportamentais</li>
                    <li>Considerar a idade gestacional e cronológica na interpretação dos achados</li>
                    <li>Avaliar cada parâmetro de forma independente, registrando valores basais quando possível</li>
                    <li>Evitar aplicar durante procedimentos ou manipulações que possam alterar os parâmetros</li>
                    <li>Considerar o estado comportamental do neonato (sono, vigília, agitação)</li>
                    <li>
                      Documentar não apenas a pontuação total, mas também observações específicas de cada parâmetro
                    </li>
                    <li>Correlacionar os achados com outros indicadores clínicos e laboratoriais</li>
                    <li>Considerar o impacto de medicações, procedimentos prévios e condições clínicas</li>
                    <li>Reavaliar frequentemente devido à instabilidade clínica característica dos neonatos</li>
                    <li>Treinar adequadamente a equipe para garantir consistência na aplicação</li>
                    <li>Considerar limitações da escala em neonatos com condições neurológicas específicas</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Intervenções Baseadas na Pontuação:</h3>
                  <div className="space-y-3">
                    <div className="bg-green-50 p-3 rounded border border-green-200">
                      <h4 className="font-medium text-green-800 mb-1">Pontuação 0-3 (Sem dor/Dor leve):</h4>
                      <p className="text-sm text-green-700">
                        Manter medidas de conforto não farmacológicas (contenção, sucção não nutritiva, posicionamento),
                        ambiente tranquilo, monitoramento de rotina, cuidados desenvolvimentais.
                      </p>
                    </div>
                    <div className="bg-yellow-50 p-3 rounded border border-yellow-200">
                      <h4 className="font-medium text-yellow-800 mb-1">Pontuação 4-6 (Dor moderada):</h4>
                      <p className="text-sm text-yellow-700">
                        Implementar medidas não farmacológicas intensificadas, considerar analgésicos apropriados para
                        neonatos conforme prescrição, aumentar frequência de avaliação, otimizar ambiente.
                      </p>
                    </div>
                    <div className="bg-red-50 p-3 rounded border border-red-200">
                      <h4 className="font-medium text-red-800 mb-1">Pontuação 7-10 (Dor intensa/severa):</h4>
                      <p className="text-sm text-red-700">
                        Intervenção analgésica imediata, comunicação médica urgente, implementação de múltiplas
                        estratégias de alívio, monitoramento contínuo, reavaliação frequente, suporte familiar.
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
                    <strong>Data/Hora:</strong> 22/05/2024 - 08:30h
                  </p>
                  <p>
                    <strong>Paciente:</strong> RN M.A.S., masculino, 34 semanas de idade gestacional, 3º dia de vida,
                    peso 2.100g, internado na UTIN para correção de gastrosquise
                  </p>

                  <div className="border-l-4 border-primary pl-4">
                    <p className="mb-2">
                      <strong>Avaliação da Dor - Escala CRIES:</strong>
                    </p>
                    <p className="mb-2">
                      Recém-nascido em incubadora aquecida, em ventilação mecânica (SIMV), sedado com Midazolam em
                      infusão contínua. Aplicada Escala CRIES conforme protocolo da UTIN, através da observação direta
                      por 5 minutos durante cuidados de rotina.
                    </p>

                    <div className="bg-white/50 p-3 rounded mb-3">
                      <p className="mb-2">
                        <strong>Detalhamento da Avaliação:</strong>
                      </p>
                      <ul className="space-y-1 text-xs">
                        <li>
                          <strong>Choro (C):</strong> 1 - Apresenta gemidos ocasionais durante manipulação, mas não
                          choro franco devido à intubação orotraqueal
                        </li>
                        <li>
                          <strong>Necessita Oxigênio (R):</strong> 2 - Em ventilação mecânica com FiO2 40%, indicando
                          necessidade de suporte ventilatório significativo
                        </li>
                        <li>
                          <strong>Aumento Sinais Vitais (I):</strong> 2 - FC aumentou de 140 para 175 bpm durante
                          manipulação, PA de 45/25 para 55/35 mmHg
                        </li>
                        <li>
                          <strong>Expressão (E):</strong> 2 - Careta constante, franzir da testa, tensão muscular facial
                          evidente
                        </li>
                        <li>
                          <strong>Sono (S):</strong> 2 - Constantemente acordado, não consegue manter períodos de sono
                          adequados mesmo com sedação
                        </li>
                      </ul>
                    </div>

                    <p className="mb-2">
                      <strong>Resultado:</strong> CRIES = 9 (dor severa)
                    </p>
                    <p className="mb-2">
                      <strong>Observações adicionais:</strong> RN apresenta movimentos de retirada durante manipulação,
                      rigidez corporal, dessaturação durante cuidados (SpO2 de 95% para 88%), sudorese, palidez cutânea.
                      Sinais vitais retornam aos valores basais após 10-15 minutos do término da manipulação. Pais
                      presentes, demonstrando ansiedade com o estado do filho.
                    </p>
                  </div>

                  <div className="border-l-4 border-accent pl-4">
                    <p className="mb-2">
                      <strong>Intervenções de Enfermagem Implementadas:</strong>
                    </p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Comunicado neonatologista sobre pontuação CRIES elevada para reavaliação da analgesia</li>
                      <li>Aumentada dose de Midazolam conforme prescrição médica (de 0,1 para 0,15 mg/kg/h)</li>
                      <li>Iniciado Fentanil 1 mcg/kg/h em infusão contínua conforme nova prescrição</li>
                      <li>Implementadas medidas de conforto: contenção com cueiro, posicionamento em flexão</li>
                      <li>Reduzida luminosidade da incubadora, ambiente mantido silencioso</li>
                      <li>Agrupados cuidados para minimizar manipulações desnecessárias</li>
                      <li>Oferecida sucção não nutritiva durante procedimentos quando possível</li>
                      <li>Orientações aos pais sobre sinais de dor em neonatos e importância do conforto</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-green-500 pl-4">
                    <p className="mb-2">
                      <strong>Reavaliação (12:00h):</strong>
                    </p>
                    <p className="mb-2">Reaplicada Escala CRIES após 3h30min do ajuste da analgesia.</p>

                    <div className="bg-white/50 p-3 rounded mb-3">
                      <p className="mb-2">
                        <strong>Nova Avaliação:</strong>
                      </p>
                      <ul className="space-y-1 text-xs">
                        <li>
                          <strong>Choro (C):</strong> 0 - Sem gemidos ou sinais de desconforto vocal
                        </li>
                        <li>
                          <strong>Necessita Oxigênio (R):</strong> 1 - FiO2 reduzida para 30%, melhora da oxigenação
                        </li>
                        <li>
                          <strong>Aumento Sinais Vitais (I):</strong> 1 - FC 155 bpm durante cuidados (aumento de 15%),
                          PA estável
                        </li>
                        <li>
                          <strong>Expressão (E):</strong> 0 - Expressão facial relaxada, sem tensão muscular
                        </li>
                        <li>
                          <strong>Sono (S):</strong> 1 - Períodos de sono mais prolongados, desperta durante manipulação
                        </li>
                      </ul>
                    </div>

                    <p className="mb-2">
                      <strong>Resultado:</strong> CRIES = 3 (dor leve)
                    </p>
                    <p className="mb-2">
                      RN apresenta melhora significativa dos parâmetros de dor. Mantém-se mais estável durante cuidados
                      de rotina, com menor variação dos sinais vitais. Consegue manter períodos de sono mais prolongados
                      entre as manipulações. Pais relatam que o filho "parece mais tranquilo".
                    </p>
                  </div>

                  <div className="border-l-4 border-orange-500 pl-4">
                    <p className="mb-2">
                      <strong>Reavaliação (20:00h):</strong>
                    </p>
                    <p className="mb-2">Avaliação noturna conforme protocolo da UTIN.</p>
                    <p className="mb-2">
                      <strong>Resultado:</strong> CRIES = 4 (dor moderada)
                    </p>
                    <p className="mb-2">
                      Observa-se leve piora dos parâmetros no período noturno, possivelmente relacionado ao acúmulo de
                      estímulos do dia e necessidade de ajuste da analgesia. RN apresenta maior inquietação, expressão
                      facial ocasional de desconforto e períodos de sono mais fragmentados.
                    </p>
                  </div>

                  <div className="border-l-4 border-blue-500 pl-4">
                    <p className="mb-2">
                      <strong>Condutas e Planejamento:</strong>
                    </p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Manter avaliação da dor através da Escala CRIES a cada 4 horas e durante cuidados</li>
                      <li>Continuar infusão de Fentanil e Midazolam conforme prescrição atual</li>
                      <li>Comunicar neonatologista se CRIES persistir ≥ 6 para reavaliação da analgesia</li>
                      <li>Manter medidas de conforto não farmacológicas (contenção, posicionamento, ambiente)</li>
                      <li>Agrupar cuidados para minimizar manipulações e permitir períodos de descanso</li>
                      <li>Monitorizar sinais vitais continuamente, especialmente durante procedimentos</li>
                      <li>Orientar equipe sobre sinais de dor neonatal e importância da avaliação sistemática</li>
                      <li>Apoio psicológico aos pais, explicando evolução e medidas implementadas</li>
                      <li>Documentar detalhadamente todas as observações e respostas às intervenções</li>
                      <li>Planejar desmame gradual da sedoanalgesia conforme melhora clínica</li>
                    </ul>
                  </div>

                  <p className="mt-4">
                    <strong>Enfermeira Responsável:</strong> Mariana Santos Silva - COREN-RJ 345678
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
                    <li>Ministério da Saúde - Atenção Humanizada ao Recém-nascido de Baixo Peso - Método Canguru</li>
                    <li>Sociedade Brasileira de Pediatria - Diretrizes para avaliação e tratamento da dor neonatal</li>
                    <li>COREN-SP - Parecer Técnico sobre avaliação da dor em neonatos</li>
                    <li>Sociedade Brasileira de Enfermeiros Pediatras - Protocolo de avaliação da dor neonatal</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Literatura Científica:</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 text-sm">
                    <li>
                      Krechel, S. W., & Bildner, J. (1995). CRIES: a new neonatal postoperative pain measurement score.
                      Initial testing of validity and reliability. Paediatric Anaesthesia, 5(1), 53-61.
                    </li>
                    <li>
                      McNair, C., Ballantyne, M., Dionne, K., Stephens, D., & Stevens, B. (2004). Postoperative pain
                      assessment in the neonatal intensive care unit. Archives of Disease in Childhood-Fetal and
                      Neonatal Edition, 89(6), F537-F541.
                    </li>
                    <li>
                      Silva, Y. P., Gomez, R. S., Máximo, T. A., & Silva, A. C. S. (2007). Avaliação da dor em
                      neonatologia. Revista Brasileira de Anestesiologia, 57(5), 565-574.
                    </li>
                    <li>
                      Balda, R. C. X., & Guinsburg, R. (2018). Recent advances in neonatal pain assessment. Jornal de
                      Pediatria, 94(6), 579-582.
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
