"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, FileText, Users, Baby } from "lucide-react"

export default function BradenQPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-nursing-mint to-white">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <Badge variant="secondary" className="mb-4 bg-nursing-sage/20 text-nursing-sage border-nursing-sage/30">
              Risco de Úlcera por Pressão - Pediátrica
            </Badge>
            <h1 className="text-4xl font-bold text-nursing-forest mb-4 text-balance">Escala de Braden Q</h1>
            <p className="text-lg text-nursing-sage leading-relaxed max-w-3xl mx-auto">
              Escala específica para avaliação do risco de úlceras por pressão em pacientes pediátricos, adaptada da
              Escala de Braden original
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
                A Escala de Braden Q foi especificamente desenvolvida e validada para avaliar o risco de desenvolvimento
                de úlceras por pressão em pacientes pediátricos, desde recém-nascidos até adolescentes de 21 anos. Esta
                escala considera as particularidades fisiológicas, anatômicas e comportamentais da população pediátrica,
                que diferem significativamente dos adultos em termos de estrutura da pele, distribuição de gordura
                corporal, padrões de mobilidade e capacidade de comunicação sobre desconforto. A ferramenta é aplicada
                em diversos contextos pediátricos, incluindo unidades de terapia intensiva neonatal e pediátrica,
                enfermarias pediátricas, unidades de cuidados especiais e ambientes de cuidados domiciliares para
                crianças com necessidades complexas. Sua aplicação permite identificação precoce de crianças em risco,
                facilitando a implementação de medidas preventivas específicas e adequadas à faixa etária. A Escala de
                Braden Q é particularmente importante considerando que as crianças podem não conseguir verbalizar
                desconforto ou dor, tornando a avaliação sistemática fundamental para prevenção de lesões cutâneas que
                podem ter impacto significativo no desenvolvimento e qualidade de vida infantil.
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
                A Escala de Braden Q avalia sete parâmetros específicos para a população pediátrica, cada um pontuado de
                1 a 4 pontos, sendo que pontuações mais baixas indicam maior risco. A escala foi adaptada para
                considerar as características únicas das crianças em diferentes faixas etárias e estágios de
                desenvolvimento.
              </p>

              <div className="space-y-6">
                <div className="bg-nursing-mint/10 p-4 rounded-lg">
                  <h4 className="font-semibold text-nursing-forest mb-2">1. Mobilidade</h4>
                  <p className="text-nursing-charcoal mb-2">
                    Avalia a capacidade de mudança e controle da posição corporal:
                  </p>
                  <ul className="list-disc list-inside text-nursing-charcoal space-y-1 ml-4">
                    <li>
                      <strong>1 ponto - Completamente imóvel:</strong> Não faz mudanças na posição do corpo ou
                      extremidades sem ajuda
                    </li>
                    <li>
                      <strong>2 pontos - Muito limitada:</strong> Faz mudanças ocasionais ligeiras na posição do corpo
                      ou extremidades, mas é incapaz de fazer mudanças frequentes ou significativas independentemente
                    </li>
                    <li>
                      <strong>3 pontos - Ligeiramente limitada:</strong> Faz mudanças frequentes, embora ligeiras, na
                      posição do corpo ou extremidades independentemente
                    </li>
                    <li>
                      <strong>4 pontos - Nenhuma limitação:</strong> Faz mudanças importantes e frequentes na posição
                      sem assistência
                    </li>
                  </ul>
                </div>

                <div className="bg-nursing-mint/10 p-4 rounded-lg">
                  <h4 className="font-semibold text-nursing-forest mb-2">2. Atividade</h4>
                  <p className="text-nursing-charcoal mb-2">Avalia o grau de atividade física:</p>
                  <ul className="list-disc list-inside text-nursing-charcoal space-y-1 ml-4">
                    <li>
                      <strong>1 ponto - Acamado:</strong> Confinado à cama
                    </li>
                    <li>
                      <strong>2 pontos - Confinado à cadeira:</strong> Habilidade para caminhar severamente limitada ou
                      inexistente. Não pode sustentar o próprio peso e/ou deve ser assistido para sentar-se na cadeira
                      ou cadeira de rodas
                    </li>
                    <li>
                      <strong>3 pontos - Caminha ocasionalmente:</strong> Caminha ocasionalmente durante o dia, mas por
                      distâncias muito curtas, com ou sem assistência. Passa a maior parte de cada turno na cama ou
                      cadeira
                    </li>
                    <li>
                      <strong>4 pontos - Caminha frequentemente:</strong> Caminha fora do quarto pelo menos duas vezes
                      por dia e dentro do quarto pelo menos uma vez a cada 2 horas durante as horas acordado
                    </li>
                  </ul>
                </div>

                <div className="bg-nursing-mint/10 p-4 rounded-lg">
                  <h4 className="font-semibold text-nursing-forest mb-2">3. Percepção Sensorial</h4>
                  <p className="text-nursing-charcoal mb-2">
                    Avalia a capacidade de responder significativamente ao desconforto relacionado à pressão:
                  </p>
                  <ul className="list-disc list-inside text-nursing-charcoal space-y-1 ml-4">
                    <li>
                      <strong>1 ponto - Completamente limitada:</strong> Não responde a estímulos dolorosos (não geme,
                      não se retrai, ou não se agarra) devido ao nível diminuído de consciência ou sedação, ou
                      habilidade limitada para sentir dor sobre a maior parte do corpo
                    </li>
                    <li>
                      <strong>2 pontos - Muito limitada:</strong> Responde somente a estímulos dolorosos. Não pode
                      comunicar desconforto exceto através de gemidos ou agitação, ou tem alguma limitação sensorial que
                      limita a habilidade de sentir dor ou desconforto em mais da metade do corpo
                    </li>
                    <li>
                      <strong>3 pontos - Ligeiramente limitada:</strong> Responde a comandos verbais, mas nem sempre
                      pode comunicar desconforto ou expressar necessidade de ser mudado de posição, ou tem alguma
                      limitação sensorial que limita a habilidade de sentir dor ou desconforto em 1 ou 2 extremidades
                    </li>
                    <li>
                      <strong>4 pontos - Nenhuma limitação:</strong> Responde a comandos verbais. Não tem déficit
                      sensorial que limitaria a habilidade de sentir ou verbalizar dor ou desconforto
                    </li>
                  </ul>
                </div>

                <div className="bg-nursing-mint/10 p-4 rounded-lg">
                  <h4 className="font-semibold text-nursing-forest mb-2">4. Umidade</h4>
                  <p className="text-nursing-charcoal mb-2">Avalia o grau no qual a pele é exposta à umidade:</p>
                  <ul className="list-disc list-inside text-nursing-charcoal space-y-1 ml-4">
                    <li>
                      <strong>1 ponto - Constantemente úmida:</strong> A pele é mantida úmida quase constantemente por
                      transpiração, urina, etc. A umidade é detectada toda vez que o paciente é movido ou posicionado
                    </li>
                    <li>
                      <strong>2 pontos - Muito úmida:</strong> A pele está frequentemente, mas nem sempre úmida. A roupa
                      de cama deve ser trocada pelo menos uma vez por turno
                    </li>
                    <li>
                      <strong>3 pontos - Ocasionalmente úmida:</strong> A pele está ocasionalmente úmida, requerendo uma
                      troca extra de roupa de cama aproximadamente uma vez por dia
                    </li>
                    <li>
                      <strong>4 pontos - Raramente úmida:</strong> A pele está geralmente seca, a roupa de cama só é
                      trocada nos intervalos de rotina
                    </li>
                  </ul>
                </div>

                <div className="bg-nursing-mint/10 p-4 rounded-lg">
                  <h4 className="font-semibold text-nursing-forest mb-2">5. Fricção e Cisalhamento</h4>
                  <p className="text-nursing-charcoal mb-2">Avalia a exposição a forças de fricção e cisalhamento:</p>
                  <ul className="list-disc list-inside text-nursing-charcoal space-y-1 ml-4">
                    <li>
                      <strong>1 ponto - Problema:</strong> Requer assistência moderada a máxima para mover-se. É
                      impossível levantar completamente sem esfregar contra os lençóis. Frequentemente escorrega para
                      baixo na cama ou cadeira, requerendo reposicionamento frequente com assistência máxima
                    </li>
                    <li>
                      <strong>2 pontos - Problema potencial:</strong> Move-se debilmente ou requer assistência mínima.
                      Durante o movimento, a pele provavelmente esfrega contra os lençóis, cadeira, ou outros
                      dispositivos. Na maior parte do tempo, mantém posição relativamente boa na cadeira ou cama, mas
                      ocasionalmente escorrega para baixo
                    </li>
                    <li>
                      <strong>3 pontos - Nenhum problema:</strong> Move-se na cama e na cadeira independentemente e tem
                      força muscular suficiente para levantar-se completamente durante o movimento. Mantém boa posição
                      na cama ou cadeira
                    </li>
                  </ul>
                </div>

                <div className="bg-nursing-mint/10 p-4 rounded-lg">
                  <h4 className="font-semibold text-nursing-forest mb-2">6. Nutrição</h4>
                  <p className="text-nursing-charcoal mb-2">Avalia o padrão usual de consumo alimentar:</p>
                  <ul className="list-disc list-inside text-nursing-charcoal space-y-1 ml-4">
                    <li>
                      <strong>1 ponto - Muito pobre:</strong> Nunca come uma refeição completa. Raramente come mais de
                      1/3 de qualquer alimento oferecido. Come 2 porções ou menos de proteína por dia. Toma fluidos
                      pobres. Não toma suplemento dietético líquido, ou está em jejum e/ou mantido em dieta líquida ou
                      IV por mais de 5 dias
                    </li>
                    <li>
                      <strong>2 pontos - Provavelmente inadequada:</strong> Raramente come uma refeição completa e
                      geralmente come cerca de 1/2 do alimento oferecido. Ingestão de proteína inclui somente 3 porções
                      de carne ou laticínios por dia. Ocasionalmente tomará um suplemento dietético, ou recebe menos que
                      a quantidade ideal de dieta líquida ou alimentação por sonda
                    </li>
                    <li>
                      <strong>3 pontos - Adequada:</strong> Come mais da metade da maioria das refeições. Come um total
                      de 4 porções de proteína por dia. Ocasionalmente recusará uma refeição, mas usualmente tomará um
                      suplemento se oferecido, ou está recebendo alimentação por sonda ou regime de NPT que
                      provavelmente atende a maior parte das necessidades nutricionais
                    </li>
                    <li>
                      <strong>4 pontos - Excelente:</strong> Come a maior parte de cada refeição. Nunca recusa uma
                      refeição. Usualmente come um total de 4 ou mais porções de carne e laticínios. Ocasionalmente come
                      entre as refeições. Não requer suplementação
                    </li>
                  </ul>
                </div>

                <div className="bg-nursing-mint/10 p-4 rounded-lg">
                  <h4 className="font-semibold text-nursing-forest mb-2">7. Perfusão Tissular e Oxigenação</h4>
                  <p className="text-nursing-charcoal mb-2">
                    Avalia a capacidade de perfusão e oxigenação dos tecidos:
                  </p>
                  <ul className="list-disc list-inside text-nursing-charcoal space-y-1 ml-4">
                    <li>
                      <strong>1 ponto - Extremamente comprometida:</strong> Hipotensão (PA média {"<"} 50 mmHg, {"<"} 40
                      mmHg se idade {"<"} 6) ou o paciente não mantém PA média adequada para a idade. Tempo de
                      enchimento capilar {">"} 4 segundos ou enchimento capilar ausente
                    </li>
                    <li>
                      <strong>2 pontos - Comprometida:</strong> Normotensão; PA sistólica {"<"} 100 mmHg em adultos ou
                      PA sistólica menor que o 5º percentil para a idade em crianças. Tempo de enchimento capilar {">"}{" "}
                      3 segundos
                    </li>
                    <li>
                      <strong>3 pontos - Adequada:</strong> Normotensão. PA sistólica {">"} 100 mmHg em adultos ou PA
                      sistólica maior que o 5º percentil para a idade. Tempo de enchimento capilar {"<"} 3 segundos
                    </li>
                    <li>
                      <strong>4 pontos - Excelente:</strong> Normotensão. PA sistólica consistentemente maior que 100
                      mmHg em adultos ou consistentemente maior que o 5º percentil para a idade em crianças. Tempo de
                      enchimento capilar {"<"} 2 segundos
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
                A pontuação total da Escala de Braden Q varia de 7 a 28 pontos, sendo obtida pela soma dos sete
                parâmetros avaliados. A interpretação dos resultados considera as particularidades da população
                pediátrica e orienta intervenções específicas para cada faixa etária.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-2">Alto Risco (7-15 pontos)</h4>
                  <p className="text-red-700 text-sm leading-relaxed">
                    Crianças com pontuação entre 7 e 15 pontos apresentam alto risco para desenvolvimento de úlceras por
                    pressão. Requerem intervenções preventivas intensivas, mudanças de decúbito a cada 2 horas, uso de
                    superfícies de redistribuição de pressão adequadas ao peso e idade, cuidados rigorosos com a pele e
                    avaliação diária da integridade cutânea.
                  </p>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-2">Risco Moderado (16-20 pontos)</h4>
                  <p className="text-yellow-700 text-sm leading-relaxed">
                    Pontuação entre 16 e 20 pontos indica risco moderado. Necessitam de mudanças de decúbito regulares a
                    cada 3-4 horas, cuidados preventivos com a pele adequados à idade, uso de dispositivos de alívio de
                    pressão quando indicado e reavaliação periódica do risco.
                  </p>
                </div>

                <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Baixo Risco (21-28 pontos)</h4>
                  <p className="text-green-700 text-sm leading-relaxed">
                    Crianças com 21 a 28 pontos apresentam baixo risco para úlceras por pressão. Mesmo assim, requerem
                    cuidados preventivos básicos adequados à idade, orientações sobre mobilização quando apropriado,
                    manutenção da higiene adequada e reavaliação periódica conforme protocolo.
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
                Aplicação Prática na Enfermagem Pediátrica
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-nursing-charcoal leading-relaxed mb-4">
                A aplicação da Escala de Braden Q requer conhecimento especializado em enfermagem pediátrica e deve ser
                realizada por enfermeiros capacitados no cuidado de crianças. A avaliação deve considerar as
                particularidades de cada faixa etária, desde recém-nascidos prematuros até adolescentes, adaptando a
                interpretação dos parâmetros conforme o desenvolvimento neuromotor e cognitivo da criança. É fundamental
                realizar a avaliação nas primeiras 24 horas de internação e reavaliar sempre que houver mudança
                significativa no estado clínico, procedimentos invasivos, alterações na mobilidade ou mudanças no nível
                de consciência. Durante a aplicação, deve-se considerar fatores específicos da pediatria como a presença
                de dispositivos médicos (cateteres, sondas, equipamentos de monitorização), uso de medicações que podem
                afetar a perfusão cutânea, estado nutricional específico da idade e capacidade de comunicação da criança
                sobre desconforto. A participação dos pais ou cuidadores é fundamental, pois eles podem fornecer
                informações valiosas sobre mudanças no comportamento da criança que podem indicar desconforto ou dor. A
                documentação deve ser detalhada e incluir observações específicas sobre o comportamento da criança,
                resposta aos cuidados e evolução dos fatores de risco identificados.
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
                  <strong>Data:</strong> 25/03/2024 - 10:00h
                  <br />
                  <strong>Paciente:</strong> L.M.S., 8 anos, feminino, internada na UTIP há 2 dias por traumatismo
                  cranioencefálico grave
                </p>

                <p className="text-nursing-charcoal leading-relaxed mb-4">
                  <strong>Avaliação pela Escala de Braden Q:</strong>
                  <br />
                  Realizada avaliação do risco para úlcera por pressão utilizando a Escala de Braden Q. Mobilidade: 1
                  ponto (completamente imóvel) - paciente sedada e em ventilação mecânica, sem movimentação espontânea,
                  dependente de mudanças de decúbito realizadas pela equipe. Atividade: 1 ponto (acamada) - confinada ao
                  leito devido ao estado neurológico crítico e necessidade de ventilação mecânica. Percepção sensorial:
                  1 ponto (completamente limitada) - não responde a estímulos dolorosos devido ao nível diminuído de
                  consciência secundário ao traumatismo e sedação contínua. Umidade: 2 pontos (muito úmida) - pele
                  frequentemente úmida devido à sudorese relacionada ao quadro neurológico e uso de dispositivos de
                  aquecimento, necessitando troca de roupas de cama pelo menos uma vez por turno. Fricção e
                  cisalhamento: 1 ponto (problema) - requer assistência máxima para movimentação, com risco elevado de
                  fricção durante mudanças de decúbito devido ao estado de inconsciência. Nutrição: 2 pontos
                  (provavelmente inadequada) - alimentação enteral por sonda nasoenteral, recebendo menos que a
                  quantidade ideal devido a intolerância gástrica intermitente. Perfusão tissular e oxigenação: 2 pontos
                  (comprometida) - apresenta instabilidade hemodinâmica com necessidade de drogas vasoativas, tempo de
                  enchimento capilar de 4 segundos.
                </p>

                <p className="text-nursing-charcoal leading-relaxed mb-4">
                  <strong>Pontuação total: 10 pontos - Alto Risco</strong>
                  <br />
                  Com base na pontuação obtida, a paciente apresenta alto risco para desenvolvimento de úlceras por
                  pressão, necessitando de implementação imediata de medidas preventivas intensivas específicas para a
                  população pediátrica.
                </p>

                <p className="text-nursing-charcoal leading-relaxed mb-4">
                  <strong>Intervenções de Enfermagem Implementadas:</strong>
                  <br />
                  Instituído protocolo intensivo de prevenção de úlceras por pressão pediátrico com mudanças de decúbito
                  a cada 2 horas, utilizando cronograma rigoroso e técnicas adequadas ao peso corporal da criança (28
                  kg). Instalado colchão de ar pediátrico com pressão alternada e células de baixa pressão específico
                  para o peso da paciente. Realizada inspeção completa da pele a cada 4 horas, identificando hiperemia
                  reativa em região occipital devido ao posicionamento prolongado em decúbito dorsal, sem solução de
                  continuidade. Aplicados coxins de gel em proeminências ósseas (calcâneos, cotovelos, região occipital)
                  adequados ao tamanho corporal da criança. Implementado protocolo de higiene com produtos neutros
                  específicos para pele pediátrica, secagem cuidadosa e aplicação de hidratante hipoalergênico.
                  Posicionamento alternado incluindo decúbito lateral direito e esquerdo com angulação de 30 graus,
                  utilizando rolos e coxins para manter alinhamento corporal adequado. Orientada equipe sobre técnicas
                  específicas de movimentação para crianças em estado crítico.
                </p>

                <p className="text-nursing-charcoal leading-relaxed">
                  <strong>Condutas e Reavaliação:</strong>
                  <br />
                  Programada reavaliação da Escala de Braden Q a cada 48 horas ou sempre que houver mudança
                  significativa no quadro neurológico ou hemodinâmico. Solicitada avaliação da equipe de estomaterapia
                  pediátrica para orientações específicas sobre prevenção em pacientes neurológicos críticos.
                  Implementado registro fotográfico das áreas de hiperemia para acompanhamento evolutivo. Orientados os
                  pais sobre a importância das medidas preventivas e como podem colaborar durante as visitas,
                  respeitando as limitações do ambiente de terapia intensiva. Solicitada reavaliação nutricional para
                  otimização da terapia nutricional enteral, visando melhorar a tolerância gástrica e adequar o aporte
                  calórico-proteico às necessidades da criança em estado crítico. Programada discussão em round
                  multiprofissional sobre estratégias adicionais de prevenção considerando a gravidade do caso e tempo
                  prolongado de internação previsto.
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
                    Curley, M. A., Razmus, I. S., Roberts, K. E., & Wypij, D. (2003). Predicting pressure ulcer risk in
                    pediatric patients: the Braden Q Scale. Nursing Research, 52(1), 22-33.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-nursing-gold rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    Noonan, C., Quigley, S., & Curley, M. A. (2011). Using the Braden Q Scale to predict pressure ulcer
                    risk in pediatric patients. Journal of Pediatric Nursing, 26(6), 566-575.
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
                    Sociedade Brasileira de Pediatria. Manual de Prevenção de Lesões por Pressão em Pediatria. Rio de
                    Janeiro: SBP, 2019.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-nursing-gold rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    National Pressure Injury Advisory Panel (NPIAP). Prevention and Treatment of Pressure Injuries:
                    Clinical Practice Guideline. 2019.
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
