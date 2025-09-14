"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, FileText, Users, Baby } from "lucide-react"

export default function PUSAPPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-nursing-mint to-white">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <Badge variant="secondary" className="mb-4 bg-nursing-sage/20 text-nursing-sage border-nursing-sage/30">
              Risco de Úlcera por Pressão - Neonatal
            </Badge>
            <h1 className="text-4xl font-bold text-nursing-forest mb-4 text-balance">Escala PUSAP</h1>
            <p className="text-lg text-nursing-sage leading-relaxed max-w-3xl mx-auto">
              Pediatric Ulcer Scoring and Assessment Protocol - Escala específica para avaliação do risco de úlceras por
              pressão em neonatos e lactentes
            </p>
          </div>

          {/* Finalidade */}
          <Card className="mb-8 border-nursing-sage/20 shadow-lg">
            <CardHeader className="bg-nursing-sage/5">
              <CardTitle className="flex items-center gap-2 text-nursing-forest">
                <Baby className="h-5 w-5 text-nursing-gold" />
                Finalidade e Objetivo
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-nursing-charcoal leading-relaxed">
                A Escala PUSAP (Pediatric Ulcer Scoring and Assessment Protocol) foi especificamente desenvolvida para
                avaliar o risco de desenvolvimento de úlceras por pressão em neonatos e lactentes, considerando as
                características anatômicas e fisiológicas únicas desta população extremamente vulnerável. Esta escala
                reconhece que os recém-nascidos, especialmente os prematuros, apresentam particularidades significativas
                como pele mais fina e frágil, menor quantidade de tecido subcutâneo, maior proporção de água corporal,
                imaturidade dos sistemas orgânicos e dependência total para mobilização. A ferramenta é aplicada
                principalmente em unidades de terapia intensiva neonatal, berçários de alto risco, unidades de cuidados
                intermediários neonatais e em situações de cuidados domiciliares para recém-nascidos com necessidades
                especiais. Sua aplicação permite identificação precoce de neonatos em risco elevado, considerando
                fatores específicos como peso ao nascer, idade gestacional, uso de dispositivos médicos, instabilidade
                hemodinâmica e necessidade de suporte ventilatório. A Escala PUSAP é fundamental para prevenção de
                lesões cutâneas em uma população onde mesmo pequenas lesões podem ter consequências significativas para
                o desenvolvimento, crescimento e sobrevivência, especialmente considerando a fragilidade da barreira
                cutânea neonatal e a suscetibilidade aumentada a infecções.
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
                A Escala PUSAP avalia seis parâmetros específicos para a população neonatal e de lactentes jovens, cada
                um pontuado de 1 a 4 pontos, sendo que pontuações mais baixas indicam maior risco. A escala foi
                desenvolvida considerando as características únicas dos recém-nascidos e sua vulnerabilidade específica.
              </p>

              <div className="space-y-6">
                <div className="bg-nursing-mint/10 p-4 rounded-lg">
                  <h4 className="font-semibold text-nursing-forest mb-2">1. Mobilidade/Atividade</h4>
                  <p className="text-nursing-charcoal mb-2">Avalia a capacidade de movimento espontâneo do neonato:</p>
                  <ul className="list-disc list-inside text-nursing-charcoal space-y-1 ml-4">
                    <li>
                      <strong>1 ponto - Nenhuma:</strong> Neonato sedado, paralizado ou com grave comprometimento
                      neurológico, sem movimentação espontânea
                    </li>
                    <li>
                      <strong>2 pontos - Ligeiramente limitada:</strong> Movimentação espontânea limitada, movimentos
                      fracos ou esporádicos
                    </li>
                    <li>
                      <strong>3 pontos - Moderada:</strong> Movimentação espontânea presente, mas reduzida devido a
                      dispositivos médicos ou condição clínica
                    </li>
                    <li>
                      <strong>4 pontos - Total:</strong> Movimentação espontânea normal para idade gestacional, ativo e
                      responsivo
                    </li>
                  </ul>
                </div>

                <div className="bg-nursing-mint/10 p-4 rounded-lg">
                  <h4 className="font-semibold text-nursing-forest mb-2">2. Percepção Sensorial</h4>
                  <p className="text-nursing-charcoal mb-2">
                    Avalia a capacidade de resposta a estímulos e desconforto:
                  </p>
                  <ul className="list-disc list-inside text-nursing-charcoal space-y-1 ml-4">
                    <li>
                      <strong>1 ponto - Completamente limitada:</strong> Não responde a estímulos dolorosos, sedado
                      profundamente ou com grave comprometimento neurológico
                    </li>
                    <li>
                      <strong>2 pontos - Muito limitada:</strong> Resposta limitada a estímulos, pode apresentar
                      alterações sutis na frequência cardíaca ou saturação
                    </li>
                    <li>
                      <strong>3 pontos - Ligeiramente limitada:</strong> Responde a estímulos com choro fraco,
                      alterações nos sinais vitais ou movimentação limitada
                    </li>
                    <li>
                      <strong>4 pontos - Nenhuma limitação:</strong> Responde adequadamente a estímulos com choro
                      vigoroso, movimentação e alterações comportamentais apropriadas
                    </li>
                  </ul>
                </div>

                <div className="bg-nursing-mint/10 p-4 rounded-lg">
                  <h4 className="font-semibold text-nursing-forest mb-2">3. Umidade da Pele</h4>
                  <p className="text-nursing-charcoal mb-2">Avalia o grau de exposição da pele à umidade:</p>
                  <ul className="list-disc list-inside text-nursing-charcoal space-y-1 ml-4">
                    <li>
                      <strong>1 ponto - Constantemente úmida:</strong> Pele constantemente úmida devido a sudorese
                      excessiva, incontinência ou vazamentos de dispositivos
                    </li>
                    <li>
                      <strong>2 pontos - Frequentemente úmida:</strong> Pele úmida na maior parte do tempo, requerendo
                      trocas frequentes de fraldas ou roupas
                    </li>
                    <li>
                      <strong>3 pontos - Ocasionalmente úmida:</strong> Pele ocasionalmente úmida, umidade controlada
                      com cuidados de rotina
                    </li>
                    <li>
                      <strong>4 pontos - Raramente úmida:</strong> Pele geralmente seca, umidade mínima e bem controlada
                    </li>
                  </ul>
                </div>

                <div className="bg-nursing-mint/10 p-4 rounded-lg">
                  <h4 className="font-semibold text-nursing-forest mb-2">4. Fricção e Cisalhamento</h4>
                  <p className="text-nursing-charcoal mb-2">Avalia a exposição a forças mecânicas durante cuidados:</p>
                  <ul className="list-disc list-inside text-nursing-charcoal space-y-1 ml-4">
                    <li>
                      <strong>1 ponto - Problema significativo:</strong> Pele extremamente frágil, múltiplos
                      dispositivos médicos, movimentação frequente para procedimentos
                    </li>
                    <li>
                      <strong>2 pontos - Problema potencial:</strong> Pele frágil, alguns dispositivos médicos,
                      necessidade de cuidados especiais durante manipulação
                    </li>
                    <li>
                      <strong>3 pontos - Problema mínimo:</strong> Pele com fragilidade normal para idade gestacional,
                      poucos dispositivos, manipulação cuidadosa
                    </li>
                    <li>
                      <strong>4 pontos - Nenhum problema:</strong> Pele íntegra e resistente, manipulação normal sem
                      riscos adicionais
                    </li>
                  </ul>
                </div>

                <div className="bg-nursing-mint/10 p-4 rounded-lg">
                  <h4 className="font-semibold text-nursing-forest mb-2">5. Nutrição</h4>
                  <p className="text-nursing-charcoal mb-2">Avalia o estado nutricional e via de alimentação:</p>
                  <ul className="list-disc list-inside text-nursing-charcoal space-y-1 ml-4">
                    <li>
                      <strong>1 ponto - Muito inadequada:</strong> Nutrição parenteral exclusiva, jejum prolongado, ou
                      grave intolerância alimentar
                    </li>
                    <li>
                      <strong>2 pontos - Provavelmente inadequada:</strong> Nutrição enteral mínima, intolerância
                      frequente, crescimento inadequado
                    </li>
                    <li>
                      <strong>3 pontos - Adequada:</strong> Nutrição enteral estabelecida, crescimento adequado, boa
                      tolerância alimentar
                    </li>
                    <li>
                      <strong>4 pontos - Excelente:</strong> Aleitamento materno ou nutrição enteral plena, crescimento
                      ótimo, excelente tolerância
                    </li>
                  </ul>
                </div>

                <div className="bg-nursing-mint/10 p-4 rounded-lg">
                  <h4 className="font-semibold text-nursing-forest mb-2">6. Perfusão Tissular</h4>
                  <p className="text-nursing-charcoal mb-2">Avalia a perfusão e oxigenação dos tecidos:</p>
                  <ul className="list-disc list-inside text-nursing-charcoal space-y-1 ml-4">
                    <li>
                      <strong>1 ponto - Muito comprometida:</strong> Choque, hipotensão grave, tempo de enchimento
                      capilar {">"} 4 segundos, cianose central
                    </li>
                    <li>
                      <strong>2 pontos - Comprometida:</strong> Instabilidade hemodinâmica, tempo de enchimento capilar
                      3-4 segundos, necessidade de drogas vasoativas
                    </li>
                    <li>
                      <strong>3 pontos - Adequada:</strong> Estabilidade hemodinâmica, tempo de enchimento capilar 2-3
                      segundos, perfusão satisfatória
                    </li>
                    <li>
                      <strong>4 pontos - Excelente:</strong> Perfusão ótima, tempo de enchimento capilar {"<"} 2
                      segundos, coloração rosada, estabilidade completa
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
                A pontuação total da Escala PUSAP varia de 6 a 24 pontos, sendo obtida pela soma dos seis parâmetros
                avaliados. A interpretação considera as particularidades extremas da população neonatal e orienta
                intervenções preventivas específicas e intensivas.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-2">Risco Muito Alto (6-10 pontos)</h4>
                  <p className="text-red-700 text-sm leading-relaxed">
                    Neonatos com pontuação entre 6 e 10 pontos apresentam risco muito alto. Requerem cuidados intensivos
                    especializados, mudanças de decúbito a cada 2 horas com técnicas específicas para neonatos,
                    superfícies de redistribuição de pressão neonatais, inspeção da pele a cada 4 horas e cuidados
                    extremamente delicados.
                  </p>
                </div>

                <div className="bg-orange-50 border border-orange-200 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-800 mb-2">Alto Risco (11-15 pontos)</h4>
                  <p className="text-orange-700 text-sm leading-relaxed">
                    Pontuação entre 11 e 15 pontos indica alto risco. Necessitam de mudanças de decúbito frequentes a
                    cada 3 horas, cuidados preventivos intensivos com a pele neonatal, uso de dispositivos de proteção
                    adequados ao tamanho e peso, e monitorização rigorosa.
                  </p>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-2">Risco Moderado (16-20 pontos)</h4>
                  <p className="text-yellow-700 text-sm leading-relaxed">
                    Neonatos com 16 a 20 pontos apresentam risco moderado. Requerem mudanças de decúbito regulares a
                    cada 4 horas, cuidados preventivos adequados à fragilidade neonatal, proteção de proeminências
                    ósseas e avaliação frequente da integridade cutânea.
                  </p>
                </div>

                <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Baixo Risco (21-24 pontos)</h4>
                  <p className="text-green-700 text-sm leading-relaxed">
                    Pontuação entre 21 e 24 pontos indica baixo risco. Mesmo assim, requerem cuidados preventivos
                    básicos específicos para neonatos, mudanças de decúbito regulares, manutenção da integridade cutânea
                    e reavaliação periódica devido à vulnerabilidade inerente.
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
                Aplicação Prática na Enfermagem Neonatal
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-nursing-charcoal leading-relaxed mb-4">
                A aplicação da Escala PUSAP requer expertise especializada em enfermagem neonatal e deve ser realizada
                exclusivamente por enfermeiros com formação específica no cuidado de recém-nascidos e lactentes. A
                avaliação deve ser extremamente cuidadosa, considerando que neonatos, especialmente prematuros,
                apresentam vulnerabilidades únicas como pele extremamente fina (até 40% mais fina que adultos), menor
                coesão entre as camadas da pele, maior permeabilidade cutânea e menor quantidade de tecido subcutâneo
                para proteção das proeminências ósseas. A avaliação deve ser realizada nas primeiras 12 horas de vida ou
                admissão na unidade neonatal, e reavaliada a cada 24 horas ou sempre que houver mudança significativa no
                estado clínico, procedimentos invasivos, alterações hemodinâmicas ou mudanças no suporte ventilatório.
                Durante a aplicação, é fundamental considerar fatores específicos como idade gestacional, peso ao
                nascer, presença de dispositivos médicos (CPAP, ventilação mecânica, cateteres, sondas), uso de
                medicações vasoativas, fototerapia, e necessidade de procedimentos frequentes. A manipulação durante a
                avaliação deve ser mínima e extremamente delicada, respeitando os princípios do cuidado desenvolvimental
                e minimizando o estresse ao neonato. A documentação deve incluir não apenas a pontuação, mas também
                observações específicas sobre a condição da pele, resposta aos cuidados, tolerância à manipulação e
                presença de fatores de risco adicionais específicos da condição neonatal.
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
                  <strong>Data:</strong> 28/03/2024 - 14:00h
                  <br />
                  <strong>Paciente:</strong> RN M.A.O., masculino, 30 semanas de idade gestacional, 3º dia de vida, peso
                  atual 1.350g, internado na UTIN
                </p>

                <p className="text-nursing-charcoal leading-relaxed mb-4">
                  <strong>Avaliação pela Escala PUSAP:</strong>
                  <br />
                  Realizada avaliação do risco para úlcera por pressão utilizando a Escala PUSAP. Mobilidade/Atividade:
                  2 pontos (ligeiramente limitada) - RN apresenta movimentação espontânea limitada, movimentos fracos e
                  esporádicos dos membros, com períodos de maior atividade alternados com apatia, limitado pela presença
                  de múltiplos dispositivos médicos. Percepção sensorial: 2 pontos (muito limitada) - resposta limitada
                  a estímulos dolorosos, apresenta alterações sutis na frequência cardíaca (aumento de 10-15 bpm) e
                  discreta dessaturação durante procedimentos, sem choro vigoroso. Umidade da pele: 2 pontos
                  (frequentemente úmida) - pele úmida na maior parte do tempo devido à imaturidade da regulação térmica,
                  sudorese relacionada ao estresse térmico e pequenos vazamentos ao redor da sonda orogástrica,
                  requerendo trocas frequentes de campos e roupas. Fricção e cisalhamento: 1 ponto (problema
                  significativo) - pele extremamente frágil e fina característica da prematuridade, múltiplos
                  dispositivos médicos incluindo CPAP nasal, sonda orogástrica, acesso venoso central, sensor de
                  saturação e eletrodos de monitorização, com necessidade de movimentação frequente para procedimentos e
                  cuidados. Nutrição: 2 pontos (provavelmente inadequada) - nutrição enteral mínima iniciada há 24 horas
                  com 2ml de leite materno a cada 3 horas, apresentando resíduo gástrico ocasional, ainda dependente de
                  nutrição parenteral para maior parte das necessidades calóricas. Perfusão tissular: 2 pontos
                  (comprometida) - apresenta instabilidade hemodinâmica leve com episódios de hipotensão, tempo de
                  enchimento capilar de 3-4 segundos, necessidade de expansão volêmica nas últimas 24 horas.
                </p>

                <p className="text-nursing-charcoal leading-relaxed mb-4">
                  <strong>Pontuação total: 11 pontos - Alto Risco</strong>
                  <br />
                  Com base na pontuação obtida, o RN apresenta alto risco para desenvolvimento de úlceras por pressão,
                  necessitando de implementação imediata de medidas preventivas intensivas específicas para neonatos
                  prematuros.
                </p>

                <p className="text-nursing-charcoal leading-relaxed mb-4">
                  <strong>Intervenções de Enfermagem Implementadas:</strong>
                  <br />
                  Instituído protocolo intensivo de prevenção de úlceras por pressão neonatal com mudanças de decúbito a
                  cada 3 horas, utilizando técnicas de posicionamento desenvolvimental com contenção adequada através de
                  rolinhos e ninhos. Aplicados hidrogel em lâminas específicos para prematuros em áreas de maior pressão
                  (região occipital, orelhas, cotovelos) e hidrocoloide extrafino ao redor da fixação do CPAP nasal para
                  proteção da pele. Realizada inspeção completa da pele a cada 6 horas durante cuidados agrupados,
                  identificando hiperemia leve em região occipital sem solução de continuidade e pequena área de
                  irritação ao redor da narina direita relacionada ao CPAP. Implementado protocolo de cuidados com a
                  pele utilizando produtos específicos para prematuros, limpeza com água morna e algodão, secagem por
                  pressão suave e aplicação mínima de emoliente neutro. Posicionamento alternado incluindo decúbito
                  lateral direito e esquerdo com suporte adequado, decúbito ventral supervisionado durante períodos de
                  estabilidade, sempre respeitando os princípios do cuidado desenvolvimental. Ajustados dispositivos
                  médicos para minimizar pressão, incluindo rodízio do sensor de saturação a cada 4 horas e
                  reposicionamento cuidadoso dos eletrodos de monitorização.
                </p>

                <p className="text-nursing-charcoal leading-relaxed">
                  <strong>Condutas e Reavaliação:</strong>
                  <br />
                  Programada reavaliação da Escala PUSAP diariamente devido ao alto risco e instabilidade clínica
                  característica da prematuridade. Solicitada avaliação da equipe de estomaterapia neonatal para
                  orientações específicas sobre cuidados preventivos em prematuros extremos. Implementado registro
                  fotográfico das áreas de hiperemia para acompanhamento evolutivo, respeitando os protocolos de
                  privacidade neonatal. Orientados os pais sobre a fragilidade da pele do prematuro e importância das
                  medidas preventivas, incluindo técnicas de toque suave durante o contato pele a pele quando liberado
                  pela equipe médica. Solicitada reavaliação nutricional para progressão da dieta enteral conforme
                  tolerância, visando otimizar o estado nutricional e favorecer a maturação cutânea. Programada
                  discussão em round multiprofissional sobre estratégias adicionais de proteção cutânea, considerando o
                  tempo prolongado de internação previsto e a necessidade de múltiplos dispositivos médicos durante o
                  período de crescimento e desenvolvimento do prematuro.
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
                    Huffines, B., & Logsdon, M. C. (1997). The Neonatal Skin Risk Assessment Scale for predicting skin
                    breakdown in neonates. Issues in Comprehensive Pediatric Nursing, 20(2), 103-114.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-nursing-gold rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    Lund, C. H., & Osborne, J. W. (2004). Validity and reliability of the neonatal skin condition score.
                    Journal of Obstetric, Gynecologic, and Neonatal Nursing, 33(3), 320-327.
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
                    Sociedade Brasileira de Pediatria. Departamento de Neonatologia. Manual de Cuidados com a Pele do
                    Recém-Nascido. 3ª ed. Rio de Janeiro: SBP, 2020.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-nursing-gold rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    Association of Women's Health, Obstetric and Neonatal Nurses (AWHONN). Neonatal Skin Care:
                    Evidence-Based Clinical Practice Guideline. 4th ed. Washington, DC: AWHONN, 2018.
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
