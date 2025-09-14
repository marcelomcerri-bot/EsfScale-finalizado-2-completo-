"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Brain, BookOpen, FileText, Users, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function GlasgowPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-nursing-mint to-white">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <Link href="/categorias/avaliacao-neurologica">
              <Button variant="outline" className="flex items-center gap-2 hover:bg-nursing-sage/10 bg-transparent">
                <ArrowLeft className="h-4 w-4" />
                Voltar
              </Button>
            </Link>
          </div>

          {/* Header */}
          <div className="text-center mb-8">
            <Badge variant="secondary" className="mb-4 bg-nursing-sage/20 text-nursing-sage border-nursing-sage/30">
              Avaliação Neurológica
            </Badge>
            <h1 className="text-4xl font-bold text-nursing-forest mb-4 text-balance">Escala de Coma de Glasgow</h1>
            <p className="text-lg text-nursing-sage leading-relaxed max-w-3xl mx-auto">
              Escala padrão-ouro mundial para avaliação do nível de consciência, desenvolvida por Graham Teasdale e
              Bryan Jennett em 1974
            </p>
          </div>

          {/* Finalidade */}
          <Card className="mb-8 border-nursing-sage/20 shadow-lg">
            <CardHeader className="bg-nursing-sage/5">
              <CardTitle className="flex items-center gap-2 text-nursing-forest">
                <Brain className="h-5 w-5 text-nursing-gold" />
                Finalidade e Objetivo
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-nursing-charcoal leading-relaxed">
                A Escala de Coma de Glasgow foi desenvolvida para proporcionar uma avaliação objetiva, padronizada e
                reprodutível do nível de consciência em pacientes com alterações neurológicas. Esta escala revolucionou
                a avaliação neurológica ao estabelecer critérios uniformes que permitem comunicação precisa entre
                profissionais de saúde, monitorização da evolução clínica e estratificação de risco em pacientes com
                traumatismo cranioencefálico, acidente vascular cerebral, processos infecciosos do sistema nervoso
                central e outras condições que afetam o estado de consciência. A escala é aplicada universalmente em
                serviços de emergência, unidades de terapia intensiva, enfermarias neurológicas e neurocirúrgicas, sendo
                fundamental para tomada de decisões sobre necessidade de intubação orotraqueal, indicação de
                monitorização da pressão intracraniana, definição de prognóstico e orientação de condutas terapêuticas.
                Sua aplicação sistemática permite identificação precoce de deterioração neurológica, orientando
                intervenções oportunas que podem ser determinantes para o prognóstico do paciente, além de ser
                amplamente utilizada em protocolos de pesquisa clínica e estudos epidemiológicos em neurologia e
                neurocirurgia.
              </p>
            </CardContent>
          </Card>

          {/* Descrição Completa */}
          <Card className="mb-8 border-nursing-sage/20 shadow-lg">
            <CardHeader className="bg-nursing-sage/5">
              <CardTitle className="flex items-center gap-2 text-nursing-forest">
                <BookOpen className="h-5 w-5 text-nursing-gold" />
                Descrição Completa da Escala
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-nursing-charcoal leading-relaxed mb-6">
                A Escala de Coma de Glasgow avalia três componentes fundamentais da função neurológica: abertura ocular,
                resposta verbal e resposta motora. Cada componente é avaliado independentemente e recebe uma pontuação
                específica, sendo a pontuação total obtida pela soma dos três componentes.
              </p>

              <div className="space-y-6">
                <div className="bg-nursing-mint/10 p-4 rounded-lg">
                  <h4 className="font-semibold text-nursing-forest mb-2">1. Abertura Ocular (1-4 pontos)</h4>
                  <p className="text-nursing-charcoal mb-2">
                    Avalia a capacidade de abertura espontânea ou estimulada dos olhos:
                  </p>
                  <ul className="list-disc list-inside text-nursing-charcoal space-y-1 ml-4">
                    <li>
                      <strong>4 pontos - Espontânea:</strong> Olhos abertos espontaneamente, sem necessidade de estímulo
                    </li>
                    <li>
                      <strong>3 pontos - Ao comando verbal:</strong> Abertura ocular em resposta a comando verbal ou
                      chamado pelo nome
                    </li>
                    <li>
                      <strong>2 pontos - À dor:</strong> Abertura ocular apenas em resposta a estímulo doloroso
                    </li>
                    <li>
                      <strong>1 ponto - Nenhuma:</strong> Ausência de abertura ocular mesmo com estímulo doloroso
                    </li>
                  </ul>
                </div>

                <div className="bg-nursing-mint/10 p-4 rounded-lg">
                  <h4 className="font-semibold text-nursing-forest mb-2">2. Resposta Verbal (1-5 pontos)</h4>
                  <p className="text-nursing-charcoal mb-2">Avalia a capacidade de comunicação verbal e orientação:</p>
                  <ul className="list-disc list-inside text-nursing-charcoal space-y-1 ml-4">
                    <li>
                      <strong>5 pontos - Orientada:</strong> Conversa normalmente, orientado no tempo, espaço e pessoa
                    </li>
                    <li>
                      <strong>4 pontos - Confusa:</strong> Conversa, mas desorientado, respostas inadequadas às
                      perguntas
                    </li>
                    <li>
                      <strong>3 pontos - Palavras inapropriadas:</strong> Fala palavras reconhecíveis, mas sem sentido
                      contextual
                    </li>
                    <li>
                      <strong>2 pontos - Sons incompreensíveis:</strong> Emite apenas sons, gemidos ou grunhidos
                    </li>
                    <li>
                      <strong>1 ponto - Nenhuma:</strong> Ausência completa de resposta verbal
                    </li>
                  </ul>
                  <p className="text-nursing-charcoal text-sm mt-2 italic">
                    Nota: Em pacientes intubados, registra-se "T" (tubo) e considera-se apenas a soma dos outros dois
                    componentes.
                  </p>
                </div>

                <div className="bg-nursing-mint/10 p-4 rounded-lg">
                  <h4 className="font-semibold text-nursing-forest mb-2">3. Resposta Motora (1-6 pontos)</h4>
                  <p className="text-nursing-charcoal mb-2">
                    Avalia a melhor resposta motora obtida em qualquer membro:
                  </p>
                  <ul className="list-disc list-inside text-nursing-charcoal space-y-1 ml-4">
                    <li>
                      <strong>6 pontos - Obedece comandos:</strong> Executa comandos simples adequadamente
                    </li>
                    <li>
                      <strong>5 pontos - Localiza a dor:</strong> Movimento direcionado para remover estímulo doloroso
                    </li>
                    <li>
                      <strong>4 pontos - Retirada normal:</strong> Flexão normal, retirada do membro ao estímulo
                      doloroso
                    </li>
                    <li>
                      <strong>3 pontos - Flexão anormal:</strong> Postura de decorticação, flexão patológica
                    </li>
                    <li>
                      <strong>2 pontos - Extensão anormal:</strong> Postura de descerebração, extensão patológica
                    </li>
                    <li>
                      <strong>1 ponto - Nenhuma:</strong> Ausência de resposta motora ao estímulo doloroso
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Pontuação e Interpretação */}
          <Card className="mb-8 border-nursing-sage/20 shadow-lg">
            <CardHeader className="bg-nursing-sage/5">
              <CardTitle className="flex items-center gap-2 text-nursing-forest">
                <FileText className="h-5 w-5 text-nursing-gold" />
                Pontuação e Interpretação
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-nursing-charcoal leading-relaxed mb-6">
                A pontuação total da Escala de Coma de Glasgow varia de 3 a 15 pontos, sendo obtida pela soma dos três
                componentes avaliados. A interpretação dos resultados orienta decisões clínicas importantes e
                estratificação de gravidade.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-2">Coma Grave (3-8 pontos)</h4>
                  <p className="text-red-700 text-sm leading-relaxed">
                    Pacientes com pontuação entre 3 e 8 pontos apresentam coma grave, com alto risco de mortalidade e
                    morbidade. Geralmente requerem intubação orotraqueal para proteção de vias aéreas, monitorização
                    neurológica intensiva, controle da pressão intracraniana e cuidados em unidade de terapia intensiva.
                  </p>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-2">Coma Moderado (9-12 pontos)</h4>
                  <p className="text-yellow-700 text-sm leading-relaxed">
                    Pontuação entre 9 e 12 pontos indica coma moderado. Pacientes necessitam de monitorização
                    neurológica frequente, avaliação da necessidade de proteção de vias aéreas, cuidados intensivos e
                    reavaliação regular para detectar deterioração ou melhora do quadro neurológico.
                  </p>
                </div>

                <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Coma Leve (13-15 pontos)</h4>
                  <p className="text-green-700 text-sm leading-relaxed">
                    Pacientes com 13 a 15 pontos apresentam alteração leve do nível de consciência ou estão conscientes.
                    Pontuação 15 indica consciência normal. Mesmo com pontuações mais altas, requerem monitorização
                    neurológica regular e atenção para possível deterioração.
                  </p>
                </div>

                <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Considerações Especiais</h4>
                  <p className="text-blue-700 text-sm leading-relaxed">
                    Quedas de 2 ou mais pontos na ECG indicam deterioração neurológica significativa e requerem
                    avaliação médica imediata. A tendência da pontuação ao longo do tempo é mais importante que valores
                    isolados para prognóstico e tomada de decisões.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Aplicação Prática */}
          <Card className="mb-8 border-nursing-sage/20 shadow-lg">
            <CardHeader className="bg-nursing-sage/5">
              <CardTitle className="flex items-center gap-2 text-nursing-forest">
                <Users className="h-5 w-5 text-nursing-gold" />
                Aplicação Prática na Enfermagem
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-nursing-charcoal leading-relaxed mb-4">
                A aplicação da Escala de Coma de Glasgow deve ser realizada por enfermeiros capacitados em avaliação
                neurológica, seguindo técnica padronizada para garantir confiabilidade e reprodutibilidade dos
                resultados. A avaliação deve ser realizada em ambiente adequado, com o paciente em posição confortável,
                preferencialmente com a cabeceira elevada a 30 graus quando não contraindicado. Durante a avaliação da
                abertura ocular, deve-se observar se há fatores que impeçam a abertura como edema palpebral, hematomas
                ou lesões oculares, documentando essas limitações. Para avaliação da resposta verbal, é importante
                considerar fatores como intubação orotraqueal, traqueostomia, edema de língua ou lesões orofaciais que
                possam interferir na capacidade de verbalização. Na avaliação da resposta motora, deve-se testar todos
                os membros e registrar a melhor resposta obtida, considerando possíveis limitações como fraturas, lesões
                medulares ou uso de bloqueadores neuromusculares. O estímulo doloroso deve ser aplicado de forma
                padronizada, preferencialmente através de pressão no leito ungueal ou pressão supraorbitária, evitando
                causar lesões desnecessárias. A reavaliação deve ser sistemática conforme protocolo institucional ou
                sempre que houver suspeita de mudança no estado neurológico, documentando não apenas a pontuação total
                mas também cada componente individualmente para permitir análise detalhada da evolução clínica.
              </p>
            </CardContent>
          </Card>

          {/* Exemplo de Evolução */}
          <Card className="mb-8 border-nursing-sage/20 shadow-lg">
            <CardHeader className="bg-nursing-sage/5">
              <CardTitle className="flex items-center gap-2 text-nursing-forest">
                <FileText className="h-5 w-5 text-nursing-gold" />
                Exemplo Detalhado de Evolução de Enfermagem
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-nursing-sage">
                <p className="text-nursing-charcoal leading-relaxed mb-4">
                  <strong>Data:</strong> 02/04/2024 - 20:00h
                  <br />
                  <strong>Paciente:</strong> R.S.M., 45 anos, masculino, vítima de acidente motociclístico com
                  traumatismo cranioencefálico grave, internado na UTI neurológica há 3 dias
                </p>

                <p className="text-nursing-charcoal leading-relaxed mb-4">
                  <strong>Avaliação pela Escala de Coma de Glasgow:</strong>
                  <br />
                  Realizada avaliação neurológica utilizando a Escala de Coma de Glasgow às 20:00h. Abertura ocular: 2
                  pontos (à dor) - paciente não apresenta abertura ocular espontânea nem ao comando verbal, abrindo os
                  olhos apenas quando submetido a estímulo doloroso através de pressão no leito ungueal, com abertura
                  lenta e parcial das pálpebras. Resposta verbal: 1T (intubado) - paciente em ventilação mecânica
                  invasiva através de tubo orotraqueal número 8.0, impossibilitando avaliação da resposta verbal, sendo
                  registrado como "T" conforme protocolo. Resposta motora: 3 pontos (flexão anormal) - ao estímulo
                  doloroso, paciente apresenta postura de decorticação com flexão patológica dos membros superiores,
                  adução dos braços, flexão dos cotovelos e punhos, extensão dos membros inferiores com rotação interna
                  dos pés, caracterizando lesão cortical ou subcortical bilateral.
                </p>

                <p className="text-nursing-charcoal leading-relaxed mb-4">
                  <strong>Pontuação total: 6T pontos - Coma Grave</strong>
                  <br />
                  Com base na pontuação obtida (considerando apenas abertura ocular e resposta motora devido à
                  intubação), o paciente apresenta coma grave, mantendo o mesmo padrão das últimas 24 horas, sem sinais
                  de melhora ou deterioração neurológica significativa.
                </p>

                <p className="text-nursing-charcoal leading-relaxed mb-4">
                  <strong>Intervenções de Enfermagem Implementadas:</strong>
                  <br />
                  Mantida monitorização neurológica rigorosa com reavaliação da Escala de Coma de Glasgow a cada 2 horas
                  conforme protocolo para pacientes com TCE grave. Posicionamento com cabeceira elevada a 30 graus para
                  otimização da drenagem venosa cerebral e redução da pressão intracraniana. Realizada avaliação pupilar
                  complementar, identificando pupilas isocóricas, fotorreagentes, com diâmetro de 3mm bilateralmente,
                  sem sinais de herniação cerebral. Mantidos cuidados com via aérea artificial, aspiração traqueal
                  conforme necessidade, monitorização contínua da pressão intracraniana através de cateter
                  intraventricular, com valores mantidos entre 12-15 mmHg. Implementadas medidas de prevenção de
                  complicações secundárias incluindo mudanças de decúbito a cada 2 horas, fisioterapia motora passiva,
                  cuidados com a pele e prevenção de úlceras por pressão. Administração de medicações conforme
                  prescrição médica incluindo sedação leve com midazolam para controle da agitação e manitol para
                  controle da pressão intracraniana quando necessário.
                </p>

                <p className="text-nursing-charcoal leading-relaxed">
                  <strong>Condutas e Reavaliação:</strong>
                  <br />
                  Programada reavaliação da Escala de Coma de Glasgow a cada 2 horas durante o período noturno, com
                  comunicação imediata à equipe médica em caso de deterioração neurológica (queda de 2 ou mais pontos)
                  ou melhora significativa. Mantida monitorização contínua dos sinais vitais, pressão intracraniana,
                  pressão de perfusão cerebral e saturação venosa jugular. Orientada equipe de enfermagem sobre sinais
                  de alerta neurológico incluindo alterações pupilares, mudanças no padrão respiratório, hipertensão
                  arterial com bradicardia (tríade de Cushing) e alterações no padrão motor. Solicitada avaliação da
                  equipe de fisioterapia para otimização dos cuidados motores e prevenção de complicações
                  musculoesqueléticas. Familiares orientados sobre o significado da pontuação da escala, prognóstico
                  reservado e importância da continuidade dos cuidados intensivos. Programada discussão em round
                  multiprofissional sobre evolução neurológica e possibilidade de redução gradual da sedação para melhor
                  avaliação do estado de consciência nas próximas 48 horas.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Referências */}
          <Card className="border-nursing-sage/20 shadow-lg">
            <CardHeader className="bg-nursing-sage/5">
              <CardTitle className="flex items-center gap-2 text-nursing-forest">
                <BookOpen className="h-5 w-5 text-nursing-gold" />
                Referências Oficiais
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <ul className="space-y-3 text-nursing-charcoal">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-nursing-gold rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    Teasdale, G., & Jennett, B. (1974). Assessment of coma and impaired consciousness: a practical
                    scale. The Lancet, 304(7872), 81-84.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-nursing-gold rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    Teasdale, G., Maas, A., Lecky, F., Manley, G., Stocchetti, N., & Murray, G. (2014). The Glasgow Coma
                    Scale at 40 years: standing the test of time. The Lancet Neurology, 13(8), 844-854.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-nursing-gold rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    COFEN - Conselho Federal de Enfermagem. Resolução COFEN nº 564/2017. Código de Ética dos
                    Profissionais de Enfermagem.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-nursing-gold rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    Ministério da Saúde. Diretrizes de Atenção à Reabilitação da Pessoa com Traumatismo
                    Cranioencefálico. Brasília: MS, 2015.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-nursing-gold rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    Brain Trauma Foundation. Guidelines for the Management of Severe Traumatic Brain Injury. 4th
                    Edition. 2016.
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
