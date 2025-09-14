import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Baby, ArrowLeft, FileText, AlertCircle, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function FLACCScalePage() {
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
            <span>Escala FLACC</span>
          </div>

          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-blue-50 rounded-full">
                <Baby className="h-8 w-8 text-blue-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Escala FLACC</h1>
            <div className="flex justify-center gap-2 mb-4">
              <Badge variant="secondary" className="bg-blue-50 text-blue-700">
                Avaliação Comportamental da Dor
              </Badge>
              <Badge variant="outline">Crianças de 2 meses a 7 anos</Badge>
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
                  Escala FLACC - Face, Legs, Activity, Cry, Consolability (Face, Pernas, Atividade, Choro,
                  Consolabilidade)
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Finalidade e Objetivo:</h3>
                <p className="text-muted-foreground leading-relaxed">
                  A Escala FLACC é um instrumento comportamental desenvolvido especificamente para avaliação da dor em
                  crianças que não conseguem verbalizar ou quantificar adequadamente sua experiência dolorosa. Esta
                  escala foi criada para permitir uma avaliação objetiva e sistemática da dor através da observação de
                  cinco parâmetros comportamentais específicos: expressão facial, posicionamento das pernas, nível de
                  atividade, características do choro e capacidade de consolação. A FLACC é aplicada em crianças de 2
                  meses a 7 anos de idade, sendo especialmente útil para lactentes, pré-escolares e crianças com
                  deficiências cognitivas que impedem a comunicação verbal adequada sobre a dor. A escala é indicada
                  para avaliação da dor aguda em contextos como pós-operatório, procedimentos invasivos, emergências
                  pediátricas e situações onde é necessário monitoramento contínuo da dor em crianças pequenas. Sua
                  aplicação permite identificação precoce da dor, implementação de intervenções apropriadas e
                  monitoramento da eficácia das medidas analgésicas implementadas.
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
              <p className="text-muted-foreground leading-relaxed mb-4">
                A Escala FLACC é composta por cinco categorias comportamentais, cada uma avaliada em uma escala de 0 a 2
                pontos, totalizando uma pontuação máxima de 10 pontos. Cada categoria representa um aspecto específico
                do comportamento da criança que pode indicar a presença e intensidade da dor. A avaliação deve ser
                realizada através da observação direta da criança por um período de 1 a 5 minutos, preferencialmente
                quando a criança está acordada e em estado de alerta.
              </p>

              <div className="space-y-6">
                <div className="bg-muted/30 p-4 rounded-lg">
                  <h3 className="font-semibold mb-3">F - FACE (Expressão Facial):</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-3">
                      <Badge variant="outline" className="shrink-0">
                        0
                      </Badge>
                      <p className="text-muted-foreground">
                        <strong>Sem expressão particular ou sorriso:</strong> A criança apresenta expressão facial
                        neutra, relaxada ou sorridente. Não demonstra sinais de desconforto facial.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Badge variant="outline" className="shrink-0">
                        1
                      </Badge>
                      <p className="text-muted-foreground">
                        <strong>Careta ou sobrancelha franzida ocasional:</strong> A criança apresenta expressões
                        faciais intermitentes de desconforto, como franzir a testa ou fazer caretas ocasionais.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Badge variant="outline" className="shrink-0">
                        2
                      </Badge>
                      <p className="text-muted-foreground">
                        <strong>Maxilar cerrado, queixo tremendo constantemente:</strong> A criança mantém expressão
                        facial de dor intensa de forma contínua, com tensão muscular evidente.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-muted/30 p-4 rounded-lg">
                  <h3 className="font-semibold mb-3">L - LEGS (Pernas):</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-3">
                      <Badge variant="outline" className="shrink-0">
                        0
                      </Badge>
                      <p className="text-muted-foreground">
                        <strong>Posição normal ou relaxada:</strong> As pernas estão em posição confortável e relaxada,
                        sem tensão muscular aparente.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Badge variant="outline" className="shrink-0">
                        1
                      </Badge>
                      <p className="text-muted-foreground">
                        <strong>Inquietas, agitadas, tensas:</strong> A criança apresenta movimentos intermitentes das
                        pernas, inquietação ou tensão muscular ocasional.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Badge variant="outline" className="shrink-0">
                        2
                      </Badge>
                      <p className="text-muted-foreground">
                        <strong>Chutando ou pernas encolhidas:</strong> Movimentos intensos e contínuos das pernas,
                        chutes ou posição de proteção com pernas fletidas.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-muted/30 p-4 rounded-lg">
                  <h3 className="font-semibold mb-3">A - ACTIVITY (Atividade):</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-3">
                      <Badge variant="outline" className="shrink-0">
                        0
                      </Badge>
                      <p className="text-muted-foreground">
                        <strong>Quieta, em posição normal, move-se facilmente:</strong> A criança mantém posição
                        confortável e consegue movimentar-se normalmente quando necessário.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Badge variant="outline" className="shrink-0">
                        1
                      </Badge>
                      <p className="text-muted-foreground">
                        <strong>Contorcendo-se, mudando de posição, tensa:</strong> A criança apresenta inquietação,
                        mudanças frequentes de posição e tensão corporal.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Badge variant="outline" className="shrink-0">
                        2
                      </Badge>
                      <p className="text-muted-foreground">
                        <strong>Curvada, rígida ou com movimentos espasmódicos:</strong> Postura anormal com rigidez
                        corporal, arqueamento das costas ou movimentos involuntários.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-muted/30 p-4 rounded-lg">
                  <h3 className="font-semibold mb-3">C - CRY (Choro):</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-3">
                      <Badge variant="outline" className="shrink-0">
                        0
                      </Badge>
                      <p className="text-muted-foreground">
                        <strong>Sem choro (acordada ou dormindo):</strong> A criança não apresenta choro, mantendo-se
                        calma e tranquila.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Badge variant="outline" className="shrink-0">
                        1
                      </Badge>
                      <p className="text-muted-foreground">
                        <strong>Gemidos ou choramingos, queixas ocasionais:</strong> Vocalizações intermitentes de
                        desconforto, gemidos baixos ou choramingos ocasionais.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Badge variant="outline" className="shrink-0">
                        2
                      </Badge>
                      <p className="text-muted-foreground">
                        <strong>Choro constante, gritos, soluços, queixas frequentes:</strong> Choro intenso e contínuo,
                        gritos ou vocalizações de dor de forma persistente.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-muted/30 p-4 rounded-lg">
                  <h3 className="font-semibold mb-3">C - CONSOLABILITY (Consolabilidade):</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-3">
                      <Badge variant="outline" className="shrink-0">
                        0
                      </Badge>
                      <p className="text-muted-foreground">
                        <strong>Contente, relaxada:</strong> A criança está satisfeita e não necessita de consolação, ou
                        responde facilmente às tentativas de conforto.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Badge variant="outline" className="shrink-0">
                        1
                      </Badge>
                      <p className="text-muted-foreground">
                        <strong>Tranquilizada por toques, abraços ou conversas ocasionais:</strong> A criança responde
                        às medidas de conforto, mas pode necessitar de tentativas repetidas.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Badge variant="outline" className="shrink-0">
                        2
                      </Badge>
                      <p className="text-muted-foreground">
                        <strong>Difícil de consolar ou confortar:</strong> A criança não responde às tentativas de
                        consolação ou requer esforços intensos e prolongados para ser tranquilizada.
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
                    A pontuação total da Escala FLACC varia de 0 a 10 pontos, sendo obtida através da soma dos pontos de
                    cada uma das cinco categorias avaliadas. Cada categoria pode receber 0, 1 ou 2 pontos, conforme os
                    comportamentos observados. A avaliação deve ser realizada através da observação direta da criança
                    por período de 1 a 5 minutos, registrando-se o comportamento predominante em cada categoria durante
                    este período.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Interpretação das Faixas de Pontuação:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        <h4 className="font-semibold text-green-800">0 - 3: Dor Leve ou Ausente</h4>
                      </div>
                      <p className="text-sm text-green-700">
                        A criança apresenta comportamentos que indicam conforto ou desconforto mínimo. Mantém atividades
                        normais para sua idade, interage adequadamente com o ambiente e responde bem às medidas de
                        conforto. Geralmente não requer intervenções farmacológicas específicas para dor, podendo ser
                        manejada com medidas de conforto não farmacológicas.
                      </p>
                    </div>

                    <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                      <div className="flex items-center gap-2 mb-2">
                        <AlertCircle className="h-5 w-5 text-yellow-600" />
                        <h4 className="font-semibold text-yellow-800">4 - 6: Dor Moderada</h4>
                      </div>
                      <p className="text-sm text-yellow-700">
                        A criança demonstra comportamentos que indicam desconforto significativo, com interferência
                        parcial em suas atividades normais. Apresenta sinais comportamentais de dor que requerem atenção
                        e intervenção. Necessita de medidas analgésicas adequadas, técnicas de conforto e monitoramento
                        mais frequente para avaliar resposta às intervenções implementadas.
                      </p>
                    </div>

                    <div className="p-4 bg-red-50 rounded-lg border border-red-200 md:col-span-2">
                      <div className="flex items-center gap-2 mb-2">
                        <AlertCircle className="h-5 w-5 text-red-600" />
                        <h4 className="font-semibold text-red-800">7 - 10: Dor Intensa/Severa</h4>
                      </div>
                      <p className="text-sm text-red-700">
                        A criança apresenta comportamentos que indicam sofrimento significativo e dor intensa. Demonstra
                        múltiplos sinais comportamentais de dor severa, com interferência importante em todas as
                        atividades e bem-estar geral. Requer intervenção analgésica imediata e potente, avaliação médica
                        urgente, implementação de múltiplas estratégias de alívio da dor e monitoramento contínuo.
                        Pontuações entre 8-10 indicam emergência álgica que demanda ação imediata e reavaliação
                        frequente.
                      </p>
                    </div>
                  </div>
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
                    A aplicação da Escala FLACC requer observação sistemática e cuidadosa da criança em ambiente
                    adequado. O enfermeiro deve posicionar-se de forma a observar claramente todos os comportamentos da
                    criança sem interferir em seu estado natural. A avaliação deve ser realizada quando a criança está
                    acordada e em estado de alerta, preferencialmente em momentos de calma, evitando períodos de
                    agitação por outros motivos como fome, sono ou necessidades fisiológicas. É fundamental observar a
                    criança por período adequado (1 a 5 minutos) para identificar padrões comportamentais consistentes
                    em cada categoria avaliada.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Durante a aplicação, o profissional deve avaliar cada uma das cinco categorias de forma
                    independente, atribuindo pontuação de 0 a 2 para cada parâmetro observado. É importante considerar o
                    comportamento predominante durante o período de observação, não eventos isolados ou momentâneos. A
                    presença dos pais ou cuidadores pode influenciar o comportamento da criança, devendo ser considerada
                    na interpretação dos resultados. A escala deve ser aplicada em intervalos regulares, especialmente
                    antes e após intervenções analgésicas, procedimentos dolorosos ou mudanças no estado clínico da
                    criança.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Cuidados Durante a Aplicação:</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>
                      Observar a criança por período adequado (1-5 minutos) para identificar padrões comportamentais
                    </li>
                    <li>Avaliar cada categoria de forma independente, considerando o comportamento predominante</li>
                    <li>Evitar aplicar a escala durante períodos de agitação por outras causas (fome, sono, medo)</li>
                    <li>Considerar a influência da presença dos pais/cuidadores no comportamento da criança</li>
                    <li>
                      Documentar não apenas a pontuação total, mas também observações específicas de cada categoria
                    </li>
                    <li>
                      Considerar fatores individuais como temperamento da criança e padrões comportamentais habituais
                    </li>
                    <li>Correlacionar os achados comportamentais com outros indicadores clínicos de dor</li>
                    <li>Reavaliar frequentemente, especialmente após intervenções ou mudanças no estado clínico</li>
                    <li>Treinar adequadamente a equipe para garantir consistência na aplicação e interpretação</li>
                    <li>
                      Considerar limitações da escala em crianças com deficiências neurológicas ou comportamentais
                    </li>
                  </ul>
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
                    <strong>Data/Hora:</strong> 25/03/2024 - 14:20h
                  </p>
                  <p>
                    <strong>Paciente:</strong> G.S.M., 3 anos, sexo masculino, internado na pediatria para correção de
                    hérnia inguinal (POI - 1º dia)
                  </p>

                  <div className="border-l-4 border-primary pl-4">
                    <p className="mb-2">
                      <strong>Avaliação da Dor - Escala FLACC:</strong>
                    </p>
                    <p className="mb-2">
                      Criança acordada, acompanhada pela mãe. Aplicada Escala FLACC através da observação direta por 3
                      minutos. Avaliados os cinco parâmetros comportamentais:
                    </p>

                    <div className="bg-white/50 p-3 rounded mb-3">
                      <p className="mb-2">
                        <strong>Detalhamento da Avaliação:</strong>
                      </p>
                      <ul className="space-y-1 text-xs">
                        <li>
                          <strong>Face (F):</strong> 2 - Maxilar cerrado, sobrancelha franzida constantemente, expressão
                          de desconforto evidente
                        </li>
                        <li>
                          <strong>Pernas (L):</strong> 2 - Pernas encolhidas, movimentos de proteção, chutes ocasionais
                        </li>
                        <li>
                          <strong>Atividade (A):</strong> 1 - Inquieto, mudando de posição frequentemente, tensão
                          corporal
                        </li>
                        <li>
                          <strong>Choro (C):</strong> 2 - Choro constante, gemidos, queixas verbais "dói, dói"
                        </li>
                        <li>
                          <strong>Consolabilidade (C):</strong> 1 - Tranquiliza-se temporariamente com colo da mãe, mas
                          retorna ao choro
                        </li>
                      </ul>
                    </div>

                    <p className="mb-2">
                      <strong>Resultado:</strong> FLACC = 8 (dor intensa)
                    </p>
                    <p className="mb-2">
                      <strong>Comportamentos adicionais observados:</strong> Criança protege região inguinal com as
                      mãos, recusa-se a deambular, solicita constantemente o colo da mãe, apresenta palidez e sudorese.
                      Mãe relata que o filho não conseguiu dormir adequadamente durante a noite devido à dor.
                    </p>
                  </div>

                  <div className="border-l-4 border-accent pl-4">
                    <p className="mb-2">
                      <strong>Intervenções de Enfermagem Implementadas:</strong>
                    </p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Administrado Paracetamol 15mg/kg (180mg) VO + Ibuprofeno 10mg/kg (120mg) VO às 14:30h</li>
                      <li>Posicionamento confortável com apoio de travesseiros, evitando pressão na região operada</li>
                      <li>Aplicação de compressa fria na região inguinal por 10 minutos (conforme prescrição)</li>
                      <li>Técnicas de distração com brinquedos favoritos e música infantil</li>
                      <li>Ambiente mantido calmo, com iluminação reduzida</li>
                      <li>Orientações à mãe sobre sinais de dor e importância do conforto emocional</li>
                      <li>Comunicado médico pediatra sobre intensidade da dor para avaliação</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-green-500 pl-4">
                    <p className="mb-2">
                      <strong>Reavaliação (16:00h):</strong>
                    </p>
                    <p className="mb-2">Reaplicada Escala FLACC após 1h30min da medicação analgésica.</p>

                    <div className="bg-white/50 p-3 rounded mb-3">
                      <p className="mb-2">
                        <strong>Nova Avaliação:</strong>
                      </p>
                      <ul className="space-y-1 text-xs">
                        <li>
                          <strong>Face (F):</strong> 1 - Expressão ocasional de desconforto, mais relaxada
                        </li>
                        <li>
                          <strong>Pernas (L):</strong> 1 - Inquietação ocasional, menos movimentos de proteção
                        </li>
                        <li>
                          <strong>Atividade (A):</strong> 0 - Posição normal, consegue brincar sentado
                        </li>
                        <li>
                          <strong>Choro (C):</strong> 1 - Choramingos ocasionais, aceita distração
                        </li>
                        <li>
                          <strong>Consolabilidade (C):</strong> 0 - Tranquiliza-se facilmente, interage com brinquedos
                        </li>
                      </ul>
                    </div>

                    <p className="mb-2">
                      <strong>Resultado:</strong> FLACC = 3 (dor leve)
                    </p>
                    <p className="mb-2">
                      Criança apresenta melhora significativa dos comportamentos de dor. Consegue brincar sentado no
                      leito, aceita líquidos oferecidos, interage mais com a equipe. Mãe relata que o filho está mais
                      tranquilo e conseguiu relaxar.
                    </p>
                  </div>

                  <div className="border-l-4 border-orange-500 pl-4">
                    <p className="mb-2">
                      <strong>Reavaliação (20:00h):</strong>
                    </p>
                    <p className="mb-2">Avaliação noturna conforme protocolo pediátrico.</p>
                    <p className="mb-2">
                      <strong>Resultado:</strong> FLACC = 5 (dor moderada)
                    </p>
                    <p className="mb-2">
                      Observa-se leve piora dos comportamentos de dor no período noturno. Criança apresenta inquietação
                      para dormir, choramingos intermitentes, solicita colo da mãe com maior frequência.
                    </p>
                  </div>

                  <div className="border-l-4 border-blue-500 pl-4">
                    <p className="mb-2">
                      <strong>Condutas e Planejamento:</strong>
                    </p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Manter avaliação da dor através da Escala FLACC a cada 4 horas e SOS</li>
                      <li>Administrar analgesia conforme prescrição quando FLACC ≥ 4</li>
                      <li>Continuar medidas de conforto não farmacológicas (distração, posicionamento)</li>
                      <li>Orientar mãe sobre importância de comunicar mudanças no comportamento da criança</li>
                      <li>Estimular atividades lúdicas adequadas conforme tolerância</li>
                      <li>Comunicar pediatra se FLACC persistir ≥ 7 após intervenções</li>
                      <li>Documentar detalhadamente todos os comportamentos observados em cada avaliação</li>
                      <li>Manter ambiente acolhedor e presença materna para reduzir ansiedade</li>
                    </ul>
                  </div>

                  <p className="mt-4">
                    <strong>Enfermeiro Responsável:</strong> Carlos Eduardo Silva - COREN-RS 456789
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
                    <li>
                      Sociedade Brasileira de Pediatria - Diretrizes para avaliação e tratamento da dor em pediatria
                    </li>
                    <li>COREN-SP - Parecer Técnico sobre avaliação comportamental da dor em crianças</li>
                    <li>
                      Conselho Nacional dos Direitos da Criança e do Adolescente - Direitos da criança hospitalizada
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Literatura Científica:</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 text-sm">
                    <li>
                      Merkel, S. I., Voepel-Lewis, T., Shayevitz, J. R., & Malviya, S. (1997). The FLACC: a behavioral
                      scale for scoring postoperative pain in young children. Pediatric Nursing, 23(3), 293-297.
                    </li>
                    <li>
                      Voepel-Lewis, T., Merkel, S., Tait, A. R., Trzcinka, A., & Malviya, S. (2002). The reliability and
                      validity of the Face, Legs, Activity, Cry, Consolability observational tool as a measure of pain
                      in children with cognitive impairment. Anesthesia & Analgesia, 95(5), 1224-1229.
                    </li>
                    <li>
                      Malviya, S., Voepel-Lewis, T., Burke, C., Merkel, S., & Tait, A. R. (2006). The revised FLACC
                      observational pain tool: improved reliability and validity for pain assessment in children with
                      cognitive impairment. Pediatric Anesthesia, 16(3), 258-265.
                    </li>
                    <li>
                      Silva, Y. P., Gomez, R. S., Máximo, T. A., & Silva, A. C. S. (2007). Avaliação da dor em
                      neonatologia. Revista Brasileira de Anestesiologia, 57(5), 565-574.
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
