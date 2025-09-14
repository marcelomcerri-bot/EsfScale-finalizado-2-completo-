"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { AlertTriangle, BookOpen, FileText, Users, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function WaterlowPage() {
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
            <h1 className="text-4xl font-bold text-nursing-forest mb-4 text-balance">Escala de Waterlow</h1>
            <p className="text-lg text-nursing-sage leading-relaxed max-w-3xl mx-auto">
              Escala abrangente para avaliação do risco de úlceras por pressão, desenvolvida por Judy Waterlow em 1985
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
                A Escala de Waterlow foi desenvolvida para proporcionar uma avaliação mais abrangente e detalhada do
                risco de desenvolvimento de úlceras por pressão, incorporando fatores de risco adicionais não
                contemplados em escalas anteriores. Esta ferramenta avalia múltiplos parâmetros que influenciam
                diretamente na integridade da pele e na capacidade de cicatrização, incluindo aspectos nutricionais,
                circulatórios, neurológicos e medicamentosos. A escala é aplicada em diversos contextos clínicos, desde
                unidades de terapia intensiva até cuidados domiciliares, sendo particularmente útil em pacientes com
                condições clínicas complexas e múltiplas comorbidades. Sua aplicação permite identificar precocemente
                pacientes em risco, facilitando a implementação de medidas preventivas específicas e individualizadas. A
                Escala de Waterlow é especialmente valorizada por sua capacidade de detectar riscos em populações
                específicas, como pacientes cirúrgicos, oncológicos e geriátricos, onde fatores adicionais podem
                influenciar significativamente o desenvolvimento de lesões cutâneas.
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
                A Escala de Waterlow avalia dez parâmetros principais, cada um com diferentes pontuações baseadas na
                gravidade ou presença de fatores de risco. Diferentemente de outras escalas, pontuações mais altas
                indicam maior risco, e a avaliação inclui fatores específicos que podem ser somados quando presentes
                simultaneamente.
              </p>

              <div className="space-y-6">
                <div className="bg-nursing-mint/10 p-4 rounded-lg">
                  <h4 className="font-semibold text-nursing-forest mb-2">1. Constituição Física/Peso para Altura</h4>
                  <p className="text-nursing-charcoal mb-2">Avalia o índice de massa corporal e constituição física:</p>
                  <ul className="list-disc list-inside text-nursing-charcoal space-y-1 ml-4">
                    <li>
                      <strong>0 pontos - Média:</strong> IMC entre 20-24,9 kg/m²
                    </li>
                    <li>
                      <strong>1 ponto - Acima da média:</strong> IMC entre 25-29,9 kg/m²
                    </li>
                    <li>
                      <strong>2 pontos - Obeso:</strong> IMC &gt;= 30 kg/m²
                    </li>
                    <li>
                      <strong>3 pontos - Abaixo da média:</strong> IMC &lt; 20 kg/m²
                    </li>
                  </ul>
                </div>

                <div className="bg-nursing-mint/10 p-4 rounded-lg">
                  <h4 className="font-semibold text-nursing-forest mb-2">2. Tipo de Pele/Áreas de Risco Visual</h4>
                  <p className="text-nursing-charcoal mb-2">Avalia a condição atual da pele:</p>
                  <ul className="list-disc list-inside text-nursing-charcoal space-y-1 ml-4">
                    <li>
                      <strong>0 pontos - Saudável:</strong> Pele íntegra, sem alterações
                    </li>
                    <li>
                      <strong>1 ponto - Ressecada:</strong> Pele seca, descamativa
                    </li>
                    <li>
                      <strong>1 ponto - Edemaciada:</strong> Presença de edema
                    </li>
                    <li>
                      <strong>2 pontos - Pegajosa:</strong> Pele úmida, sudorética
                    </li>
                    <li>
                      <strong>3 pontos - Descolorida:</strong> Alterações de coloração, manchas
                    </li>
                    <li>
                      <strong>3 pontos - Rachada:</strong> Fissuras, lesões menores
                    </li>
                  </ul>
                </div>

                <div className="bg-nursing-mint/10 p-4 rounded-lg">
                  <h4 className="font-semibold text-nursing-forest mb-2">3. Sexo/Idade</h4>
                  <p className="text-nursing-charcoal mb-2">Considera fatores demográficos:</p>
                  <ul className="list-disc list-inside text-nursing-charcoal space-y-1 ml-4">
                    <li>
                      <strong>1 ponto - Masculino:</strong> Sexo masculino
                    </li>
                    <li>
                      <strong>2 pontos - Feminino:</strong> Sexo feminino
                    </li>
                    <li>
                      <strong>1 ponto - 14-49 anos:</strong> Adulto jovem
                    </li>
                    <li>
                      <strong>2 pontos - 50-64 anos:</strong> Meia idade
                    </li>
                    <li>
                      <strong>3 pontos - 65-74 anos:</strong> Idoso
                    </li>
                    <li>
                      <strong>4 pontos - 75-80 anos:</strong> Idoso avançado
                    </li>
                    <li>
                      <strong>5 pontos - &gt;81 anos:</strong> Muito idoso
                    </li>
                  </ul>
                </div>

                <div className="bg-nursing-mint/10 p-4 rounded-lg">
                  <h4 className="font-semibold text-nursing-forest mb-2">4. Continência</h4>
                  <p className="text-nursing-charcoal mb-2">Avalia o controle dos esfíncteres:</p>
                  <ul className="list-disc list-inside text-nursing-charcoal space-y-1 ml-4">
                    <li>
                      <strong>0 pontos - Completa/Cateterizada:</strong> Controle total ou cateter
                    </li>
                    <li>
                      <strong>1 ponto - Ocasional incontinência:</strong> Episódios esporádicos
                    </li>
                    <li>
                      <strong>2 pontos - Cateter/Incontinência urinária:</strong> Cateter ou incontinência urinária
                    </li>
                    <li>
                      <strong>3 pontos - Incontinência dupla:</strong> Urinária e fecal
                    </li>
                  </ul>
                </div>

                <div className="bg-nursing-mint/10 p-4 rounded-lg">
                  <h4 className="font-semibold text-nursing-forest mb-2">5. Mobilidade</h4>
                  <p className="text-nursing-charcoal mb-2">Avalia a capacidade de movimento:</p>
                  <ul className="list-disc list-inside text-nursing-charcoal space-y-1 ml-4">
                    <li>
                      <strong>0 pontos - Totalmente móvel:</strong> Movimenta-se livremente
                    </li>
                    <li>
                      <strong>1 ponto - Inquieto/Agitado:</strong> Movimento excessivo
                    </li>
                    <li>
                      <strong>2 pontos - Apatia:</strong> Pouco movimento espontâneo
                    </li>
                    <li>
                      <strong>3 pontos - Restrito:</strong> Limitação significativa
                    </li>
                    <li>
                      <strong>4 pontos - Inerte:</strong> Sem movimento voluntário
                    </li>
                    <li>
                      <strong>5 pontos - Tração:</strong> Em tração ortopédica
                    </li>
                  </ul>
                </div>

                <div className="bg-nursing-mint/10 p-4 rounded-lg">
                  <h4 className="font-semibold text-nursing-forest mb-2">6. Apetite</h4>
                  <p className="text-nursing-charcoal mb-2">Avalia o estado nutricional:</p>
                  <ul className="list-disc list-inside text-nursing-charcoal space-y-1 ml-4">
                    <li>
                      <strong>0 pontos - Médio:</strong> Alimentação adequada
                    </li>
                    <li>
                      <strong>1 ponto - Pobre:</strong> Ingestão reduzida
                    </li>
                    <li>
                      <strong>2 pontos - Sonda nasogástrica:</strong> Alimentação enteral
                    </li>
                    <li>
                      <strong>3 pontos - Sonda enteral:</strong> Alimentação enteral
                    </li>
                    <li>
                      <strong>3 pontos - Líquidos apenas:</strong> Dieta líquida exclusiva
                    </li>
                    <li>
                      <strong>3 pontos - Anorexia:</strong> Recusa alimentar
                    </li>
                  </ul>
                </div>

                <div className="bg-nursing-mint/10 p-4 rounded-lg">
                  <h4 className="font-semibold text-nursing-forest mb-2">7. Medicação</h4>
                  <p className="text-nursing-charcoal mb-2">Considera medicamentos que afetam a pele:</p>
                  <ul className="list-disc list-inside text-nursing-charcoal space-y-1 ml-4">
                    <li>
                      <strong>4 pontos - Citotóxicos:</strong> Quimioterápicos
                    </li>
                    <li>
                      <strong>4 pontos - Altas doses de esteroides:</strong> Corticosteroides
                    </li>
                    <li>
                      <strong>4 pontos - Anti-inflamatórios:</strong> AINEs
                    </li>
                  </ul>
                </div>

                <div className="bg-nursing-mint/10 p-4 rounded-lg">
                  <h4 className="font-semibold text-nursing-forest mb-2">8. Cirurgia/Trauma</h4>
                  <p className="text-nursing-charcoal mb-2">Avalia procedimentos recentes:</p>
                  <ul className="list-disc list-inside text-nursing-charcoal space-y-1 ml-4">
                    <li>
                      <strong>5 pontos - Ortopédica/Medula espinhal:</strong> Cirurgias de alto risco
                    </li>
                    <li>
                      <strong>5 pontos - Mais de 2 horas na mesa:</strong> Cirurgia prolongada
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
                A pontuação da Escala de Waterlow é obtida pela soma de todos os fatores de risco presentes.
                Diferentemente de outras escalas, pontuações mais altas indicam maior risco, e não há limite máximo
                definido, pois múltiplos fatores podem coexistir.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Baixo Risco (≤10 pontos)</h4>
                  <p className="text-green-700 text-sm leading-relaxed">
                    Pacientes com pontuação igual ou inferior a 10 pontos apresentam baixo risco para desenvolvimento de
                    úlceras por pressão. Requerem cuidados preventivos básicos, orientações sobre mobilização e
                    reavaliação periódica conforme protocolo institucional.
                  </p>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-2">Risco Moderado (11-15 pontos)</h4>
                  <p className="text-yellow-700 text-sm leading-relaxed">
                    Pontuação entre 11 e 15 pontos indica risco moderado. Necessitam de mudanças de decúbito regulares,
                    cuidados preventivos com a pele, uso de dispositivos de alívio de pressão quando indicado e
                    reavaliação frequente.
                  </p>
                </div>

                <div className="bg-orange-50 border border-orange-200 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-800 mb-2">Alto Risco (16-20 pontos)</h4>
                  <p className="text-orange-700 text-sm leading-relaxed">
                    Pacientes com pontuação entre 16 e 20 pontos apresentam alto risco. Requerem intervenções
                    preventivas intensivas, mudanças de decúbito frequentes, superfícies especiais de redistribuição de
                    pressão e monitorização rigorosa.
                  </p>
                </div>

                <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-2">Risco Muito Alto (&gt;20 pontos)</h4>
                  <p className="text-red-700 text-sm leading-relaxed">
                    Pontuação superior a 20 pontos indica risco muito alto. Necessitam de cuidados intensivos,
                    superfícies de alta tecnologia, mudanças de decúbito a cada 2 horas, cuidados especializados com a
                    pele e avaliação diária da integridade cutânea.
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
                A aplicação da Escala de Waterlow requer avaliação criteriosa de cada parâmetro, considerando que
                múltiplos fatores podem estar presentes simultaneamente no mesmo paciente. A avaliação deve ser
                realizada por enfermeiros experientes, preferencialmente nas primeiras 8 horas de admissão, e reavaliada
                sempre que houver mudança significativa no estado clínico. Durante a aplicação, é fundamental realizar
                exame físico completo, incluindo inspeção detalhada da pele, avaliação do estado nutricional, revisão da
                história clínica e medicamentosa, e análise dos fatores de risco específicos. A escala permite
                identificação precoce de pacientes em risco elevado, facilitando a implementação de medidas preventivas
                individualizadas e baseadas em evidências. É importante documentar não apenas a pontuação total, mas
                também quais fatores de risco estão presentes, permitindo intervenções direcionadas e monitorização
                específica. A reavaliação deve ser sistemática, especialmente após procedimentos cirúrgicos, mudanças na
                medicação, alterações no estado nutricional ou mobilidade, garantindo adequação contínua das medidas
                preventivas implementadas.
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
                  <strong>Data:</strong> 20/03/2024 - 08:00h
                  <br />
                  <strong>Paciente:</strong> J.A.S., 82 anos, masculino, internado na UTI há 5 dias por sepse de foco
                  pulmonar
                </p>

                <p className="text-nursing-charcoal leading-relaxed mb-4">
                  <strong>Avaliação pela Escala de Waterlow:</strong>
                  <br />
                  Realizada avaliação do risco para úlcera por pressão utilizando a Escala de Waterlow. Constituição
                  física: 3 pontos (abaixo da média) - paciente apresenta IMC de 18,5 kg/m², com perda ponderal
                  significativa durante a internação. Tipo de pele: 2 pontos (pegajosa) - pele sudorética devido ao
                  quadro febril, com sudorese profusa principalmente em região dorsal e axilar. Sexo/Idade: 1 ponto
                  (masculino) + 5 pontos (&gt;81 anos) = 6 pontos - paciente do sexo masculino com 82 anos de idade.
                  Continência: 2 pontos (cateter/incontinência urinária) - em uso de cateter vesical de demora há 4
                  dias, apresenta incontinência fecal ocasional. Mobilidade: 4 pontos (inerte) - paciente sedado, sem
                  movimentação voluntária, dependente de ventilação mecânica. Apetite: 2 pontos (sonda nasogástrica) -
                  alimentação enteral exclusiva por sonda nasoenteral. Medicação: 4 pontos (anti-inflamatórios) - em uso
                  de corticosteroides em altas doses para tratamento do choque séptico.
                </p>

                <p className="text-nursing-charcoal leading-relaxed mb-4">
                  <strong>Pontuação total: 23 pontos - Risco Muito Alto</strong>
                  <br />
                  Com base na pontuação obtida, o paciente apresenta risco muito alto para desenvolvimento de úlceras
                  por pressão, necessitando de implementação imediata de medidas preventivas intensivas e monitorização
                  rigorosa da integridade cutânea.
                </p>

                <p className="text-nursing-charcoal leading-relaxed mb-4">
                  <strong>Intervenções de Enfermagem Implementadas:</strong>
                  <br />
                  Instituído protocolo intensivo de prevenção de úlceras por pressão com mudanças de decúbito a cada 2
                  horas, utilizando cronograma rigoroso alternando decúbito dorsal, lateral direito e lateral esquerdo
                  com angulação de 30 graus. Instalado colchão de ar com pressão alternada e células de baixa pressão
                  para redistribuição adequada do peso corporal. Realizada inspeção completa da pele a cada turno,
                  identificando hiperemia não reativa em região sacral grau I, com área de aproximadamente 3x2 cm, e
                  hiperemia reativa em calcâneos bilateralmente. Aplicado filme transparente em região sacral como
                  barreira protetiva e coxins em calcâneos para alívio total da pressão. Implementado protocolo de
                  higiene rigorosa com produtos neutros, secagem cuidadosa e aplicação de hidratante específico para
                  pele sensível. Orientada equipe multiprofissional sobre a criticidade do caso e necessidade de
                  cuidados especializados.
                </p>

                <p className="text-nursing-charcoal leading-relaxed">
                  <strong>Condutas e Reavaliação:</strong>
                  <br />
                  Programada reavaliação da Escala de Waterlow diariamente devido ao alto risco e instabilidade clínica
                  do paciente. Solicitada avaliação da equipe de estomaterapia para orientações específicas sobre
                  cuidados com a lesão em região sacral e otimização das medidas preventivas. Implementado registro
                  fotográfico da lesão para acompanhamento evolutivo. Orientada equipe sobre sinais de progressão da
                  lesão e importância da comunicação imediata de qualquer alteração. Solicitada reavaliação nutricional
                  para adequação da terapia nutricional, visando otimização do processo de cicatrização e prevenção de
                  novas lesões. Familiares orientados sobre a gravidade do quadro e importância das medidas preventivas
                  implementadas.
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
                    Waterlow, J. (1985). Pressure sores: a risk assessment card. Nursing Times, 81(48), 49-55.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-nursing-gold rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    Waterlow, J. (2005). Waterlow Pressure Ulcer Prevention/Treatment Policy. Revised edition.
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
                    European Pressure Ulcer Advisory Panel (EPUAP). Prevention and Treatment of Pressure Ulcers: Quick
                    Reference Guide. 2019.
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
