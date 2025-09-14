"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MessageSquare, BookOpen, FileText, Users, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function RamsayPage() {
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
              Avaliação Neurológica - Sedação
            </Badge>
            <h1 className="text-4xl font-bold text-nursing-forest mb-4 text-balance">Escala de Ramsay</h1>
            <p className="text-lg text-nursing-sage leading-relaxed max-w-3xl mx-auto">
              Escala clássica para avaliação do nível de sedação em pacientes críticos, desenvolvida por Michael Ramsay
              em 1974
            </p>
          </div>

          {/* Finalidade */}
          <Card className="mb-8 border-nursing-sage/20 shadow-lg">
            <CardHeader className="bg-nursing-sage/5">
              <CardTitle className="flex items-center gap-2 text-nursing-forest">
                <MessageSquare className="h-5 w-5 text-nursing-gold" />
                Finalidade e Objetivo
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-nursing-charcoal leading-relaxed">
                A Escala de Ramsay foi desenvolvida para proporcionar uma avaliação objetiva e padronizada do nível de
                sedação em pacientes críticos, sendo uma das primeiras ferramentas sistematizadas para este fim. Esta
                escala permite aos profissionais de saúde monitorizar adequadamente a profundidade da sedação, ajustar
                doses de medicamentos sedativos, prevenir sedação excessiva ou insuficiente e facilitar a comunicação
                entre equipes sobre o estado de consciência do paciente. A escala é amplamente aplicada em unidades de
                terapia intensiva, centros cirúrgicos, unidades de recuperação pós-anestésica e em procedimentos que
                requerem sedação consciente. Sua utilização é fundamental para otimização da terapia sedativa, redução
                do tempo de ventilação mecânica, prevenção de complicações relacionadas à sedação inadequada como
                delirium, síndrome de abstinência e fraqueza muscular adquirida na UTI. A Escala de Ramsay também é
                essencial para implementação de protocolos de sedação direcionada por objetivos, permitindo
                individualização da terapia sedativa conforme as necessidades específicas de cada paciente e facilitando
                o desmame ventilatório através de estratégias de despertar diário e respiração espontânea.
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
                A Escala de Ramsay avalia o nível de sedação através de seis níveis distintos, organizados de forma
                crescente conforme a profundidade da sedação. A avaliação é realizada através da observação do
                comportamento do paciente e sua resposta a estímulos verbais e táteis.
              </p>

              <div className="space-y-6">
                <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Nível 1 - Ansioso, Agitado ou Inquieto</h4>
                  <p className="text-green-700 leading-relaxed">
                    Paciente acordado, ansioso, agitado ou inquieto. Apresenta comportamento de alerta excessivo, pode
                    estar combativo, não cooperativo, com movimentação excessiva, tentativas de retirar dispositivos
                    médicos, verbalização inadequada ou gritos. Este nível indica sedação insuficiente e necessidade de
                    ajuste terapêutico para proporcionar conforto e segurança ao paciente.
                  </p>
                </div>

                <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Nível 2 - Cooperativo, Orientado e Tranquilo</h4>
                  <p className="text-blue-700 leading-relaxed">
                    Paciente acordado, cooperativo, orientado e tranquilo. Apresenta comportamento adequado, responde
                    apropriadamente a comandos verbais, mantém-se calmo, aceita cuidados de enfermagem, não apresenta
                    agitação ou ansiedade excessiva. Este é considerado o nível ideal de sedação para a maioria dos
                    pacientes críticos, permitindo interação adequada com a equipe e conforto.
                  </p>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-2">Nível 3 - Responde Apenas a Comandos Verbais</h4>
                  <p className="text-yellow-700 leading-relaxed">
                    Paciente sonolento, responde apenas quando chamado em voz alta ou com comandos verbais repetidos.
                    Apresenta sonolência significativa, olhos fechados na maior parte do tempo, mas desperta facilmente
                    quando estimulado verbalmente, consegue seguir comandos simples quando acordado, retorna ao sono
                    quando não estimulado. Indica sedação leve a moderada.
                  </p>
                </div>

                <div className="bg-orange-50 border border-orange-200 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-800 mb-2">
                    Nível 4 - Resposta Rápida ao Toque Glabelar ou Estímulo Auditivo
                  </h4>
                  <p className="text-orange-700 leading-relaxed">
                    Paciente em sono profundo, mas com resposta rápida ao toque glabelar (toque suave entre as
                    sobrancelhas) ou estímulo auditivo alto. Apresenta sono profundo com olhos fechados, não responde a
                    comandos verbais normais, mas desperta rapidamente com estímulo tátil leve ou som alto, pode
                    apresentar resposta motora adequada quando estimulado. Indica sedação moderada a profunda.
                  </p>
                </div>

                <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-2">
                    Nível 5 - Resposta Lenta ao Toque Glabelar ou Estímulo Auditivo
                  </h4>
                  <p className="text-red-700 leading-relaxed">
                    Paciente em sono muito profundo, com resposta lenta e limitada ao toque glabelar ou estímulo
                    auditivo intenso. Apresenta sedação profunda, resposta motora lenta e limitada aos estímulos, pode
                    apresentar movimentação mínima ou abertura ocular parcial quando estimulado intensamente, retorna
                    rapidamente ao estado de sedação profunda. Indica sedação excessiva para a maioria das situações
                    clínicas.
                  </p>
                </div>

                <div className="bg-gray-50 border border-gray-200 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Nível 6 - Sem Resposta</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Paciente sem resposta a estímulos verbais ou táteis. Apresenta sedação muito profunda ou anestesia,
                    ausência completa de resposta a estímulos externos, não apresenta movimentação espontânea, reflexos
                    diminuídos ou ausentes. Este nível indica sedação excessiva e potencialmente perigosa, requerendo
                    avaliação médica imediata e possível redução ou suspensão da sedação.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Pontuação e Interpretação */}
          <Card className="mb-8 border-nursing-sage/20 shadow-lg">
            <CardHeader className="bg-nursing-sage/5">
              <CardTitle className="flex items-center gap-2 text-nursing-forest">
                <FileText className="h-5 w-5 text-nursing-gold" />
                Interpretação e Metas Terapêuticas
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-nursing-charcoal leading-relaxed mb-6">
                A interpretação da Escala de Ramsay orienta ajustes na terapia sedativa e define metas terapêuticas
                individualizadas conforme a condição clínica e necessidades específicas de cada paciente.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Meta Ideal (Níveis 2-3)</h4>
                  <p className="text-green-700 text-sm leading-relaxed">
                    Para a maioria dos pacientes críticos, a meta terapêutica situa-se entre os níveis 2 e 3 da Escala
                    de Ramsay. Este nível permite conforto adequado, cooperação com cuidados, facilita o desmame
                    ventilatório e reduz complicações relacionadas à sedação excessiva como delirium e fraqueza muscular
                    adquirida.
                  </p>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-2">Sedação Profunda (Níveis 4-5)</h4>
                  <p className="text-yellow-700 text-sm leading-relaxed">
                    Níveis 4 e 5 podem ser apropriados em situações específicas como instabilidade hemodinâmica grave,
                    hipertensão intracraniana, síndrome do desconforto respiratório agudo grave ou durante procedimentos
                    invasivos. Requer monitorização rigorosa e reavaliação frequente da necessidade.
                  </p>
                </div>

                <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-2">Sedação Inadequada (Níveis 1 e 6)</h4>
                  <p className="text-red-700 text-sm leading-relaxed">
                    Nível 1 indica sedação insuficiente com risco de auto-extubação, retirada de dispositivos e lesões.
                    Nível 6 indica sedação excessiva com riscos de depressão respiratória, instabilidade hemodinâmica e
                    complicações prolongadas. Ambos requerem ajuste imediato da terapia sedativa.
                  </p>
                </div>

                <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Monitorização e Ajustes</h4>
                  <p className="text-blue-700 text-sm leading-relaxed">
                    A avaliação deve ser realizada regularmente (a cada 2-4 horas ou conforme protocolo), com ajustes da
                    sedação baseados na meta estabelecida, condição clínica atual e resposta individual do paciente.
                    Mudanças significativas requerem reavaliação médica.
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
                A aplicação da Escala de Ramsay requer treinamento específico da equipe de enfermagem para garantir
                avaliação padronizada e confiável do nível de sedação. A avaliação deve ser realizada em ambiente
                adequado, preferencialmente durante períodos de menor estimulação externa, observando o comportamento
                espontâneo do paciente antes de aplicar estímulos. Durante a avaliação, é fundamental iniciar com
                estímulos menos invasivos (observação do comportamento espontâneo, comando verbal) progredindo para
                estímulos mais intensos apenas quando necessário. O toque glabelar deve ser realizado de forma
                padronizada, com toque suave e repetitivo entre as sobrancelhas, observando a velocidade e qualidade da
                resposta. É importante considerar fatores que podem interferir na avaliação como uso de bloqueadores
                neuromusculares, analgésicos, condições neurológicas preexistentes, distúrbios metabólicos e presença de
                delirium. A documentação deve incluir não apenas o nível da escala, mas também observações sobre a
                qualidade da resposta, fatores interferentes e necessidade de ajustes na terapia sedativa. A reavaliação
                deve ser sistemática conforme protocolo institucional, geralmente a cada 2-4 horas, ou sempre que houver
                mudança na condição clínica, alteração na medicação sedativa ou necessidade de procedimentos. A
                comunicação com a equipe médica deve ser imediata quando houver mudanças significativas no nível de
                sedação ou quando a meta terapêutica não estiver sendo alcançada.
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
                  <strong>Data:</strong> 05/04/2024 - 14:00h
                  <br />
                  <strong>Paciente:</strong> A.M.L., 58 anos, feminino, internada na UTI há 5 dias por insuficiência
                  respiratória aguda secundária a pneumonia bilateral, em ventilação mecânica
                </p>

                <p className="text-nursing-charcoal leading-relaxed mb-4">
                  <strong>Avaliação pela Escala de Ramsay:</strong>
                  <br />
                  Realizada avaliação do nível de sedação utilizando a Escala de Ramsay às 14:00h. Paciente apresenta-se
                  em Nível 4 (resposta rápida ao toque glabelar ou estímulo auditivo) - encontra-se em sono profundo com
                  olhos fechados, não responde a comandos verbais em tom normal, porém apresenta resposta rápida e
                  adequada ao toque glabelar suave, com abertura ocular imediata, movimentação dos membros superiores e
                  tentativa de localização do estímulo. Ao cessar o estímulo, retorna rapidamente ao estado de sono
                  profundo. Não apresenta movimentação espontânea significativa, mantém-se em posição confortável no
                  leito, sem sinais de agitação ou desconforto aparente. Parâmetros ventilatórios estáveis com boa
                  sincronia com o ventilador mecânico, sem episódios de luta ventilatória ou dessaturação.
                </p>

                <p className="text-nursing-charcoal leading-relaxed mb-4">
                  <strong>Interpretação e Meta Terapêutica:</strong>
                  <br />O nível atual de sedação (Ramsay 4) encontra-se ligeiramente acima da meta terapêutica
                  estabelecida (Ramsay 2-3) para esta paciente, que apresenta melhora progressiva do quadro respiratório
                  e estabilidade hemodinâmica. A sedação atual, embora proporcione conforto adequado e sincronia
                  ventilatória, pode estar dificultando a avaliação neurológica mais detalhada e o início do processo de
                  desmame ventilatório programado para as próximas 24 horas.
                </p>

                <p className="text-nursing-charcoal leading-relaxed mb-4">
                  <strong>Intervenções de Enfermagem Implementadas:</strong>
                  <br />
                  Comunicado à equipe médica sobre o nível atual de sedação e discussão sobre possibilidade de redução
                  gradual da infusão de midazolam de 3mg/h para 2mg/h, visando alcançar meta terapêutica de Ramsay 2-3
                  nas próximas 6 horas. Mantida monitorização rigorosa dos sinais vitais, com atenção especial para
                  possíveis sinais de despertar como aumento da frequência cardíaca, elevação da pressão arterial ou
                  movimentação espontânea. Implementadas medidas de conforto não farmacológicas incluindo posicionamento
                  adequado, redução de estímulos luminosos e sonoros desnecessários, manutenção de ciclo circadiano
                  através de controle da iluminação ambiente. Realizada avaliação da dor através de escala
                  comportamental (CPOT), não identificando sinais de desconforto ou dor que justifiquem manutenção da
                  sedação profunda atual. Orientada equipe sobre sinais de alerta durante redução da sedação incluindo
                  agitação, tentativa de auto-extubação, dessaturação ou instabilidade hemodinâmica.
                </p>

                <p className="text-nursing-charcoal leading-relaxed">
                  <strong>Condutas e Reavaliação:</strong>
                  <br />
                  Programada reavaliação da Escala de Ramsay a cada 2 horas durante o período de redução da sedação, com
                  meta de alcançar Ramsay 2-3 em 6 horas. Estabelecido protocolo de segurança com possibilidade de
                  retorno à sedação anterior em caso de agitação excessiva, instabilidade hemodinâmica ou
                  comprometimento da sincronia ventilatória. Solicitada avaliação médica para discussão sobre início de
                  teste de respiração espontânea nas próximas 24 horas, caso seja alcançada a meta de sedação
                  estabelecida. Orientada equipe sobre importância da avaliação contínua durante mudanças na sedação e
                  necessidade de comunicação imediata de qualquer alteração significativa no comportamento ou parâmetros
                  vitais. Familiares orientados sobre o processo de redução gradual da sedação como parte do plano
                  terapêutico para recuperação e possível extubação futura. Programada discussão em round
                  multiprofissional sobre evolução do quadro respiratório e planejamento do desmame ventilatório
                  considerando a otimização do nível de sedação.
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
                    Ramsay, M. A., Savege, T. M., Simpson, B. R., & Goodwin, R. (1974). Controlled sedation with
                    alphaxalone-alphadolone. British Medical Journal, 2(5920), 656-659.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-nursing-gold rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    Sessler, C. N., & Varney, K. (2008). Patient-focused sedation and analgesia in the ICU. Chest,
                    133(2), 552-565.
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
                    Associação de Medicina Intensiva Brasileira (AMIB). Diretrizes Brasileiras de Sedação, Analgesia e
                    Bloqueio Neuromuscular em Terapia Intensiva. São Paulo: AMIB, 2020.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-nursing-gold rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    Society of Critical Care Medicine. Clinical Practice Guidelines for the Management of Pain,
                    Agitation, and Delirium in Adult Patients in the Intensive Care Unit. Critical Care Medicine, 2018.
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
