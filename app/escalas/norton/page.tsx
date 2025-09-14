"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { AlertTriangle, BookOpen, FileText, Users, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function NortonPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-nursing-mint to-white">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <Link href="/categorias/ulcera-pressao">
              <Button variant="outline" className="flex items-center gap-2 hover:bg-nursing-sage/10 bg-transparent">
                <ArrowLeft className="h-4 w-4" />
                Voltar
              </Button>
            </Link>
          </div>

          {/* Header */}
          <div className="text-center mb-8">
            <Badge variant="secondary" className="mb-4 bg-nursing-sage/20 text-nursing-sage border-nursing-sage/30">
              Risco de Úlcera por Pressão
            </Badge>
            <h1 className="text-4xl font-bold text-nursing-forest mb-4 text-balance">Escala de Norton</h1>
            <p className="text-lg text-nursing-sage leading-relaxed max-w-3xl mx-auto">
              Escala pioneira na avaliação do risco de desenvolvimento de úlceras por pressão, desenvolvida por Doreen
              Norton em 1962
            </p>
          </div>

          {/* Finalidade */}
          <Card className="mb-8 border-nursing-sage/20 shadow-lg">
            <CardHeader className="bg-nursing-sage/5">
              <CardTitle className="flex items-center gap-2 text-nursing-forest">
                <AlertTriangle className="h-5 w-5 text-nursing-gold" />
                Finalidade e Objetivo
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-nursing-charcoal leading-relaxed">
                A Escala de Norton foi desenvolvida especificamente para identificar pacientes com risco de desenvolver
                úlceras por pressão, sendo uma das primeiras ferramentas sistematizadas para esta finalidade. Esta
                escala avalia cinco parâmetros fundamentais que influenciam diretamente na integridade da pele e na
                capacidade do organismo de resistir à pressão prolongada. A escala é aplicada principalmente em
                pacientes hospitalizados, especialmente idosos, acamados ou com mobilidade reduzida, permitindo aos
                profissionais de enfermagem implementar medidas preventivas adequadas antes que as lesões se
                desenvolvam. Sua aplicação é indicada para todos os pacientes em risco, independentemente da idade, mas
                demonstra particular eficácia em populações geriátricas e em unidades de cuidados prolongados, onde a
                incidência de úlceras por pressão é historicamente mais elevada.
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
                A Escala de Norton avalia cinco parâmetros distintos, cada um pontuado de 1 a 4 pontos, sendo que
                pontuações mais baixas indicam maior risco. Os parâmetros avaliados são fundamentais para compreender a
                capacidade do paciente de manter a integridade cutânea e sua vulnerabilidade ao desenvolvimento de
                lesões por pressão.
              </p>

              <div className="space-y-6">
                <div className="bg-nursing-mint/10 p-4 rounded-lg">
                  <h4 className="font-semibold text-nursing-forest mb-2">1. Condição Física Geral</h4>
                  <p className="text-nursing-charcoal mb-2">Avalia o estado geral de saúde e vitalidade do paciente:</p>
                  <ul className="list-disc list-inside text-nursing-charcoal space-y-1 ml-4">
                    <li>
                      <strong>4 pontos - Boa:</strong> Paciente em bom estado geral, sem limitações significativas
                    </li>
                    <li>
                      <strong>3 pontos - Regular:</strong> Estado geral satisfatório com algumas limitações
                    </li>
                    <li>
                      <strong>2 pontos - Ruim:</strong> Estado geral comprometido, múltiplas comorbidades
                    </li>
                    <li>
                      <strong>1 ponto - Muito ruim:</strong> Estado crítico, múltiplas disfunções orgânicas
                    </li>
                  </ul>
                </div>

                <div className="bg-nursing-mint/10 p-4 rounded-lg">
                  <h4 className="font-semibold text-nursing-forest mb-2">2. Estado Mental</h4>
                  <p className="text-nursing-charcoal mb-2">Avalia o nível de consciência e capacidade cognitiva:</p>
                  <ul className="list-disc list-inside text-nursing-charcoal space-y-1 ml-4">
                    <li>
                      <strong>4 pontos - Alerta:</strong> Consciente, orientado, colaborativo
                    </li>
                    <li>
                      <strong>3 pontos - Apático:</strong> Pouco interesse, mas responsivo
                    </li>
                    <li>
                      <strong>2 pontos - Confuso:</strong> Desorientado, agitado ocasionalmente
                    </li>
                    <li>
                      <strong>1 ponto - Estupor:</strong> Inconsciente, não responsivo
                    </li>
                  </ul>
                </div>

                <div className="bg-nursing-mint/10 p-4 rounded-lg">
                  <h4 className="font-semibold text-nursing-forest mb-2">3. Atividade</h4>
                  <p className="text-nursing-charcoal mb-2">Avalia o nível de atividade física do paciente:</p>
                  <ul className="list-disc list-inside text-nursing-charcoal space-y-1 ml-4">
                    <li>
                      <strong>4 pontos - Ambulante:</strong> Caminha normalmente, sem limitações
                    </li>
                    <li>
                      <strong>3 pontos - Caminha com ajuda:</strong> Necessita assistência para deambular
                    </li>
                    <li>
                      <strong>2 pontos - Cadeirante:</strong> Confinado à cadeira de rodas
                    </li>
                    <li>
                      <strong>1 ponto - Acamado:</strong> Restrito ao leito permanentemente
                    </li>
                  </ul>
                </div>

                <div className="bg-nursing-mint/10 p-4 rounded-lg">
                  <h4 className="font-semibold text-nursing-forest mb-2">4. Mobilidade</h4>
                  <p className="text-nursing-charcoal mb-2">Avalia a capacidade de mudança de posição:</p>
                  <ul className="list-disc list-inside text-nursing-charcoal space-y-1 ml-4">
                    <li>
                      <strong>4 pontos - Total:</strong> Move-se livremente, muda de posição sem ajuda
                    </li>
                    <li>
                      <strong>3 pontos - Ligeiramente limitada:</strong> Pequenas limitações de movimento
                    </li>
                    <li>
                      <strong>2 pontos - Muito limitada:</strong> Necessita ajuda para mudanças de posição
                    </li>
                    <li>
                      <strong>1 ponto - Imóvel:</strong> Não consegue mudar de posição sem ajuda total
                    </li>
                  </ul>
                </div>

                <div className="bg-nursing-mint/10 p-4 rounded-lg">
                  <h4 className="font-semibold text-nursing-forest mb-2">5. Incontinência</h4>
                  <p className="text-nursing-charcoal mb-2">Avalia o controle dos esfíncteres:</p>
                  <ul className="list-disc list-inside text-nursing-charcoal space-y-1 ml-4">
                    <li>
                      <strong>4 pontos - Ausente:</strong> Controle total dos esfíncteres
                    </li>
                    <li>
                      <strong>3 pontos - Ocasional:</strong> Incontinência esporádica
                    </li>
                    <li>
                      <strong>2 pontos - Urinária ou fecal:</strong> Incontinência de um tipo
                    </li>
                    <li>
                      <strong>1 ponto - Urinária e fecal:</strong> Incontinência dupla
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
                A pontuação total da Escala de Norton varia de 5 a 20 pontos, sendo obtida pela soma dos cinco
                parâmetros avaliados. A interpretação dos resultados orienta as intervenções de enfermagem e a
                frequência de reavaliação necessária para cada paciente.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-2">Alto Risco (5-9 pontos)</h4>
                  <p className="text-red-700 text-sm leading-relaxed">
                    Pacientes com pontuação entre 5 e 9 pontos apresentam alto risco para desenvolvimento de úlceras por
                    pressão. Requerem intervenções preventivas intensivas, mudanças de decúbito a cada 2 horas, uso de
                    superfícies de redistribuição de pressão, cuidados rigorosos com a pele e avaliação diária da
                    integridade cutânea.
                  </p>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-2">Risco Moderado (10-14 pontos)</h4>
                  <p className="text-yellow-700 text-sm leading-relaxed">
                    Pontuação entre 10 e 14 pontos indica risco moderado. Necessitam de mudanças de decúbito regulares a
                    cada 3-4 horas, cuidados preventivos com a pele, uso de dispositivos de alívio de pressão quando
                    indicado e reavaliação periódica do risco.
                  </p>
                </div>

                <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Baixo Risco (15-20 pontos)</h4>
                  <p className="text-green-700 text-sm leading-relaxed">
                    Pacientes com 15 a 20 pontos apresentam baixo risco para úlceras por pressão. Mesmo assim, requerem
                    cuidados preventivos básicos, orientações sobre mobilização, manutenção da higiene adequada e
                    reavaliação periódica conforme protocolo institucional.
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
                A aplicação da Escala de Norton deve ser realizada por enfermeiros capacitados, preferencialmente nas
                primeiras 24 horas de internação e reavaliada conforme protocolo institucional ou sempre que houver
                mudança significativa no estado clínico do paciente. Durante a avaliação, é fundamental observar cada
                parâmetro cuidadosamente, considerando não apenas o estado atual do paciente, mas também sua evolução
                clínica e fatores de risco adicionais. A escala deve ser aplicada em ambiente adequado, com privacidade
                para o paciente, e sempre acompanhada de exame físico completo da pele, identificando áreas de maior
                vulnerabilidade como proeminências ósseas, regiões de maior pressão e locais com alterações de coloração
                ou temperatura. É importante documentar não apenas a pontuação obtida, mas também as observações
                clínicas que justificaram cada pontuação atribuída, facilitando a continuidade do cuidado pela equipe
                multiprofissional. A reavaliação deve ser sistemática e documentada, permitindo o acompanhamento da
                evolução do risco e a adequação das intervenções preventivas implementadas.
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
                  <strong>Data:</strong> 15/03/2024 - 14:30h
                  <br />
                  <strong>Paciente:</strong> M.S.O., 78 anos, internada na enfermaria clínica há 3 dias por pneumonia
                  comunitária
                </p>

                <p className="text-nursing-charcoal leading-relaxed mb-4">
                  <strong>Avaliação pela Escala de Norton:</strong>
                  <br />
                  Realizada avaliação do risco para úlcera por pressão utilizando a Escala de Norton. Condição física
                  geral: 2 pontos (ruim) - paciente apresenta múltiplas comorbidades incluindo diabetes mellitus tipo 2,
                  hipertensão arterial sistêmica e insuficiência cardíaca congestiva, com estado geral comprometido
                  devido ao quadro infeccioso atual. Estado mental: 3 pontos (apático) - paciente consciente e
                  orientada, porém apresenta apatia e sonolência excessiva, com pouco interesse nas atividades,
                  responsiva apenas quando estimulada. Atividade: 1 ponto (acamado) - paciente restrita ao leito devido
                  à dispneia aos mínimos esforços e fraqueza generalizada, não conseguindo manter-se em posição
                  ortostática. Mobilidade: 2 pontos (muito limitada) - necessita de ajuda total da equipe de enfermagem
                  para mudanças de decúbito, apresenta movimentação espontânea limitada dos membros superiores.
                  Incontinência: 2 pontos (urinária) - apresenta incontinência urinária ocasional, principalmente
                  durante o sono, mantém controle fecal preservado.
                </p>

                <p className="text-nursing-charcoal leading-relaxed mb-4">
                  <strong>Pontuação total: 10 pontos - Risco Moderado</strong>
                  <br />
                  Com base na pontuação obtida, a paciente apresenta risco moderado para desenvolvimento de úlceras por
                  pressão, necessitando de implementação de medidas preventivas específicas e monitorização rigorosa da
                  integridade cutânea.
                </p>

                <p className="text-nursing-charcoal leading-relaxed mb-4">
                  <strong>Intervenções de Enfermagem Implementadas:</strong>
                  <br />
                  Instituído protocolo de prevenção de úlceras por pressão com mudanças de decúbito a cada 3 horas,
                  alternando decúbito dorsal, lateral direito e lateral esquerdo, utilizando coxins para alívio de
                  pressão em proeminências ósseas. Realizada inspeção completa da pele, identificando hiperemia reativa
                  em região sacral e calcâneos, sem solução de continuidade. Aplicado hidratante neutro em toda extensão
                  corporal, com atenção especial às áreas de maior risco. Orientada a equipe de enfermagem sobre a
                  importância da mobilização passiva dos membros e estimulação da movimentação ativa quando possível.
                  Instalado colchão pneumático de pressão alternada para redistribuição adequada da pressão corporal.
                </p>

                <p className="text-nursing-charcoal leading-relaxed">
                  <strong>Condutas e Reavaliação:</strong>
                  <br />
                  Programada reavaliação da Escala de Norton em 48 horas ou sempre que houver mudança significativa no
                  quadro clínico. Orientada a equipe sobre sinais de alerta para desenvolvimento de lesões cutâneas e
                  importância da comunicação imediata de qualquer alteração observada. Solicitada avaliação nutricional
                  para otimização do estado nutricional como medida coadjuvante na prevenção de úlceras por pressão.
                  Familiares orientados sobre a importância das medidas preventivas e como podem colaborar no cuidado
                  durante as visitas.
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
                    Norton, D., McLaren, R., & Exton-Smith, A. N. (1962). An investigation of geriatric nursing problems
                    in hospital. London: National Corporation for the Care of Old People.
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
                  <span>Ministério da Saúde. Protocolo para Prevenção de Úlcera por Pressão. Brasília: MS, 2013.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-nursing-gold rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    National Pressure Ulcer Advisory Panel (NPUAP). Prevention and Treatment of Pressure Ulcers:
                    Clinical Practice Guideline. 2014.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-nursing-gold rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    Sociedade Brasileira de Estomaterapia (SOBEST). Classificação das Lesões por Pressão - Consenso
                    NPUAP 2016 - Adaptada Culturalmente para o Brasil. São Paulo: SOBEST, 2016.
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
