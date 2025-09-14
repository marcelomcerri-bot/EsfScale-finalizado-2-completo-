"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { ArrowLeft, Shield, AlertTriangle, CheckCircle, FileText, BookOpen, Users } from "lucide-react"
import Link from "next/link"

export default function BradenPage() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="min-h-screen bg-gradient-to-br from-nursing-mint via-white to-nursing-sage/10">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Button variant="ghost" asChild className="mb-4 text-nursing-forest hover:bg-nursing-mint/20">
            <Link href="/categorias/ulcera-pressao">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar para Úlcera por Pressão
            </Link>
          </Button>

          <div className="flex items-center mb-4">
            <Shield className="h-10 w-10 text-nursing-forest mr-4" />
            <div>
              <h1 className="text-3xl font-bold text-nursing-forest">Escala de Braden</h1>
              <p className="text-nursing-forest/70">Braden Scale for Predicting Pressure Sore Risk</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            <Badge className="bg-nursing-forest text-white">Risco de Úlcera por Pressão</Badge>
            <Badge variant="outline" className="border-nursing-sage text-nursing-forest">
              Adultos Hospitalizados
            </Badge>
            <Badge variant="outline" className="border-nursing-sage text-nursing-forest">
              6-23 pontos
            </Badge>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-white/50 border border-nursing-sage/20">
            <TabsTrigger
              value="overview"
              className="data-[state=active]:bg-nursing-forest data-[state=active]:text-white"
            >
              Visão Geral
            </TabsTrigger>
            <TabsTrigger
              value="application"
              className="data-[state=active]:bg-nursing-forest data-[state=active]:text-white"
            >
              Aplicação
            </TabsTrigger>
            <TabsTrigger
              value="example"
              className="data-[state=active]:bg-nursing-forest data-[state=active]:text-white"
            >
              Exemplo Prático
            </TabsTrigger>
            <TabsTrigger
              value="references"
              className="data-[state=active]:bg-nursing-forest data-[state=active]:text-white"
            >
              Referências
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <Card className="border-nursing-sage/20 bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-nursing-forest flex items-center">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Finalidade e Objetivo
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-lg text-nursing-forest/80 max-w-none">
                <p className="leading-relaxed">
                  A Escala de Braden (Braden Scale for Predicting Pressure Sore Risk) é o instrumento de avaliação do
                  risco de úlceras por pressão mais amplamente utilizado e validado mundialmente, desenvolvido por
                  Barbara Braden e Nancy Bergstrom em 1987. Esta escala tem como objetivo principal identificar
                  pacientes com maior probabilidade de desenvolver úlceras por pressão durante a hospitalização ou em
                  outros ambientes de cuidado, permitindo a implementação precoce de medidas preventivas específicas e
                  individualizadas. A ferramenta foi desenvolvida com base em uma compreensão abrangente da
                  fisiopatologia das úlceras por pressão, considerando os fatores de risco mais significativos
                  identificados através de extensas pesquisas científicas.
                </p>
                <p className="leading-relaxed">
                  A aplicação da Escala de Braden é indicada para todos os pacientes adultos hospitalizados,
                  independentemente da idade, diagnóstico ou unidade de internação, sendo especialmente importante em
                  pacientes acamados, com mobilidade reduzida, idosos, desnutridos, com alterações na percepção
                  sensorial, incontinentes, ou em uso de medicamentos que possam afetar a perfusão tecidual. A escala é
                  amplamente utilizada em unidades de terapia intensiva, unidades de internação geral, centros
                  cirúrgicos, unidades de emergência, instituições de longa permanência e cuidados domiciliares. Sua
                  aplicação deve ser realizada na admissão do paciente e reavaliada a cada 24-48 horas, ou sempre que
                  houver mudanças significativas no estado clínico, alterações na mobilidade, modificações no estado
                  nutricional, ou mudanças na condição da pele.
                </p>
              </CardContent>
            </Card>

            <Card className="border-nursing-sage/20 bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-nursing-forest flex items-center">
                  <FileText className="mr-2 h-5 w-5" />
                  Descrição Completa da Escala
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid gap-4">
                    <div className="border border-nursing-sage/20 rounded-lg p-4 bg-nursing-mint/10">
                      <h4 className="font-semibold text-nursing-forest mb-2">1. Percepção Sensorial</h4>
                      <div className="space-y-2 text-nursing-forest/80">
                        <p>
                          <strong>Completamente limitada (1 ponto):</strong> Não responde a estímulos dolorosos devido a
                          diminuição do nível de consciência ou sedação, ou capacidade limitada de sentir dor na maior
                          parte do corpo
                        </p>
                        <p>
                          <strong>Muito limitada (2 pontos):</strong> Responde somente a estímulos dolorosos, não
                          consegue comunicar desconforto exceto através de gemidos, agitação, ou capacidade limitada de
                          sentir dor ou desconforto em 1 ou 2 extremidades
                        </p>
                        <p>
                          <strong>Levemente limitada (3 pontos):</strong> Responde a comandos verbais, mas nem sempre
                          consegue comunicar desconforto ou necessidade de mudança de posição, ou tem alguma deficiência
                          sensorial que limita a capacidade de sentir dor ou desconforto em 1 ou 2 extremidades
                        </p>
                        <p>
                          <strong>Nenhuma limitação (4 pontos):</strong> Responde a comandos verbais, não tem déficit
                          sensorial que limitaria a capacidade de sentir ou verbalizar dor ou desconforto
                        </p>
                      </div>
                    </div>

                    <div className="border border-nursing-sage/20 rounded-lg p-4 bg-nursing-mint/10">
                      <h4 className="font-semibold text-nursing-forest mb-2">2. Umidade</h4>
                      <div className="space-y-2 text-nursing-forest/80">
                        <p>
                          <strong>Constantemente úmida (1 ponto):</strong> A pele é mantida úmida quase constantemente
                          por transpiração, urina, etc. Umidade é detectada sempre que o paciente é movido ou
                          reposicionado
                        </p>
                        <p>
                          <strong>Muito úmida (2 pontos):</strong> A pele está frequentemente, mas nem sempre úmida. A
                          roupa de cama deve ser trocada pelo menos uma vez por turno
                        </p>
                        <p>
                          <strong>Ocasionalmente úmida (3 pontos):</strong> A pele está ocasionalmente úmida,
                          necessitando uma troca extra de roupa de cama aproximadamente uma vez por dia
                        </p>
                        <p>
                          <strong>Raramente úmida (4 pontos):</strong> A pele está geralmente seca, a roupa de cama só é
                          trocada nos horários de rotina
                        </p>
                      </div>
                    </div>

                    <div className="border border-nursing-sage/20 rounded-lg p-4 bg-nursing-mint/10">
                      <h4 className="font-semibold text-nursing-forest mb-2">3. Atividade</h4>
                      <div className="space-y-2 text-nursing-forest/80">
                        <p>
                          <strong>Acamado (1 ponto):</strong> Confinado ao leito
                        </p>
                        <p>
                          <strong>Confinado à cadeira (2 pontos):</strong> A capacidade de andar está severamente
                          limitada ou inexistente. Não consegue sustentar o próprio peso e/ou deve ser ajudado a
                          sentar-se na cadeira ou cadeira de rodas
                        </p>
                        <p>
                          <strong>Anda ocasionalmente (3 pontos):</strong> Anda ocasionalmente durante o dia, embora
                          distâncias muito curtas, com ou sem assistência. Passa a maior parte de cada turno na cama ou
                          cadeira
                        </p>
                        <p>
                          <strong>Anda frequentemente (4 pontos):</strong> Anda fora do quarto pelo menos duas vezes por
                          dia e dentro do quarto pelo menos uma vez a cada 2 horas durante as horas em que está acordado
                        </p>
                      </div>
                    </div>

                    <div className="border border-nursing-sage/20 rounded-lg p-4 bg-nursing-mint/10">
                      <h4 className="font-semibold text-nursing-forest mb-2">4. Mobilidade</h4>
                      <div className="space-y-2 text-nursing-forest/80">
                        <p>
                          <strong>Completamente imóvel (1 ponto):</strong> Não faz nem mesmo pequenas mudanças na
                          posição do corpo ou extremidades sem ajuda
                        </p>
                        <p>
                          <strong>Muito limitada (2 pontos):</strong> Faz pequenas mudanças ocasionais na posição do
                          corpo ou extremidades, mas é incapaz de fazer mudanças frequentes ou significativas sozinho
                        </p>
                        <p>
                          <strong>Levemente limitada (3 pontos):</strong> Faz mudanças frequentes, embora pequenas, na
                          posição do corpo ou extremidades sozinho
                        </p>
                        <p>
                          <strong>Nenhuma limitação (4 pontos):</strong> Faz mudanças importantes e frequentes na
                          posição sem assistência
                        </p>
                      </div>
                    </div>

                    <div className="border border-nursing-sage/20 rounded-lg p-4 bg-nursing-mint/10">
                      <h4 className="font-semibold text-nursing-forest mb-2">5. Nutrição</h4>
                      <div className="space-y-2 text-nursing-forest/80">
                        <p>
                          <strong>Muito pobre (1 ponto):</strong> Nunca come uma refeição completa. Raramente come mais
                          que 1/3 de qualquer comida oferecida. Come 2 porções ou menos de proteína por dia. Toma pouco
                          líquido. Não aceita suplemento alimentar líquido
                        </p>
                        <p>
                          <strong>Provavelmente inadequada (2 pontos):</strong> Raramente come uma refeição completa e
                          geralmente come cerca da metade da comida oferecida. Ingestão de proteína inclui somente 3
                          porções de carne ou laticínios por dia
                        </p>
                        <p>
                          <strong>Adequada (3 pontos):</strong> Come mais da metade da maioria das refeições. Come um
                          total de 4 porções de proteína por dia. Ocasionalmente recusará uma refeição, mas geralmente
                          aceitará um suplemento oferecido
                        </p>
                        <p>
                          <strong>Excelente (4 pontos):</strong> Come a maior parte de cada refeição. Nunca recusa uma
                          refeição. Geralmente come um total de 4 ou mais porções de carne e laticínios
                        </p>
                      </div>
                    </div>

                    <div className="border border-nursing-sage/20 rounded-lg p-4 bg-nursing-mint/10">
                      <h4 className="font-semibold text-nursing-forest mb-2">6. Fricção e Cisalhamento</h4>
                      <div className="space-y-2 text-nursing-forest/80">
                        <p>
                          <strong>Problema (1 ponto):</strong> Requer assistência moderada a máxima para mover-se. É
                          impossível levantar completamente sem esfregar contra os lençóis. Frequentemente escorrega na
                          cama ou cadeira, requerendo reposicionamento frequente com assistência máxima
                        </p>
                        <p>
                          <strong>Problema em potencial (2 pontos):</strong> Move-se debilmente ou requer assistência
                          mínima. Durante o movimento, a pele provavelmente esfrega contra os lençóis, cadeira ou outros
                          dispositivos
                        </p>
                        <p>
                          <strong>Nenhum problema (3 pontos):</strong> Move-se independentemente na cama e na cadeira e
                          tem força muscular suficiente para levantar-se completamente durante o movimento
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-nursing-sage/20 bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-nursing-forest flex items-center">
                  <AlertTriangle className="mr-2 h-5 w-5" />
                  Pontuação e Interpretação
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid gap-4">
                    <Alert className="border-red-200 bg-red-50">
                      <AlertTriangle className="h-4 w-4 text-red-600" />
                      <AlertDescription className="text-red-800">
                        <strong>Alto Risco (≤9 pontos):</strong> Paciente apresenta alto risco de desenvolver úlceras
                        por pressão. Implementar medidas preventivas intensivas, incluindo mudanças de decúbito a cada 2
                        horas, uso de superfícies de redistribuição de pressão, cuidados rigorosos com a pele,
                        monitorização nutricional e hidratação adequada.
                      </AlertDescription>
                    </Alert>

                    <Alert className="border-yellow-200 bg-yellow-50">
                      <AlertTriangle className="h-4 w-4 text-yellow-600" />
                      <AlertDescription className="text-yellow-800">
                        <strong>Risco Moderado (10-12 pontos):</strong> Paciente apresenta risco moderado de desenvolver
                        úlceras por pressão. Implementar medidas preventivas padrão, incluindo mudanças de decúbito
                        regulares, proteção de proeminências ósseas, cuidados com a pele e avaliação nutricional.
                      </AlertDescription>
                    </Alert>

                    <Alert className="border-blue-200 bg-blue-50">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <AlertDescription className="text-blue-800">
                        <strong>Baixo Risco (13-14 pontos):</strong> Paciente apresenta baixo risco de desenvolver
                        úlceras por pressão. Implementar medidas preventivas básicas, incluindo inspeção diária da pele,
                        hidratação adequada e orientações sobre mobilização.
                      </AlertDescription>
                    </Alert>

                    <Alert className="border-green-200 bg-green-50">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <AlertDescription className="text-green-800">
                        <strong>Sem Risco (15-23 pontos):</strong> Paciente não apresenta risco significativo de
                        desenvolver úlceras por pressão. Manter cuidados básicos com a pele e monitorização de rotina.
                      </AlertDescription>
                    </Alert>
                  </div>

                  <div className="bg-nursing-mint/20 p-4 rounded-lg">
                    <h4 className="font-semibold text-nursing-forest mb-2">Pontuação Total Possível</h4>
                    <p className="text-nursing-forest/80">
                      A pontuação total da Escala de Braden varia de 6 a 23 pontos, sendo calculada pela soma dos pontos
                      obtidos em cada um dos seis parâmetros avaliados. Quanto menor a pontuação, maior o risco de
                      desenvolvimento de úlceras por pressão.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="application" className="space-y-6">
            <Card className="border-nursing-sage/20 bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-nursing-forest flex items-center">
                  <Users className="mr-2 h-5 w-5" />
                  Aplicação Prática na Enfermagem
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-lg text-nursing-forest/80 max-w-none">
                <p className="leading-relaxed">
                  A aplicação da Escala de Braden na prática de enfermagem requer uma abordagem sistemática e baseada em
                  evidências, considerando que esta ferramenta é o padrão-ouro para avaliação do risco de úlceras por
                  pressão. O processo de avaliação deve ser iniciado preferencialmente nas primeiras 8 horas após a
                  admissão do paciente, sendo realizado por enfermeiro com conhecimento adequado sobre a fisiopatologia
                  das úlceras por pressão e experiência na aplicação de instrumentos de avaliação clínica. É fundamental
                  que o profissional responsável pela avaliação tenha habilidades de observação clínica apurada,
                  capacidade de realizar exame físico detalhado da pele e conhecimento sobre os fatores de risco
                  intrínsecos e extrínsecos para o desenvolvimento de lesões por pressão.
                </p>
                <p className="leading-relaxed">
                  Durante a aplicação da escala, o enfermeiro deve realizar uma avaliação abrangente que inclui exame
                  físico completo da pele, avaliação neurológica focada na percepção sensorial, avaliação do estado
                  nutricional através de parâmetros antropométricos e laboratoriais, observação direta da mobilidade e
                  atividade do paciente, avaliação do grau de umidade da pele e identificação de fatores que possam
                  causar fricção e cisalhamento. A avaliação da percepção sensorial deve incluir testes de sensibilidade
                  tátil, dolorosa e vibratória, especialmente em pacientes com alterações neurológicas, diabetes
                  mellitus ou em uso de sedativos.
                </p>
                <p className="leading-relaxed">
                  A reavaliação deve ser realizada a cada 24-48 horas durante toda a internação, ou sempre que houver
                  mudanças significativas no estado clínico do paciente, alterações na mobilidade, modificações no
                  estado nutricional, mudanças no nível de consciência, início ou suspensão de medicamentos que possam
                  afetar a perfusão tecidual, ou desenvolvimento de incontinência. Os resultados devem ser documentados
                  de forma clara no prontuário, incluindo a pontuação de cada parâmetro, a pontuação total, a
                  classificação do risco e o plano de cuidados preventivos implementado. É essencial que os resultados
                  sejam comunicados a toda a equipe multiprofissional para garantir a continuidade e efetividade das
                  medidas preventivas.
                </p>
              </CardContent>
            </Card>

            <Card className="border-nursing-sage/20 bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-nursing-forest">Intervenções de Enfermagem por Nível de Risco</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="border border-green-200 rounded-lg p-4 bg-green-50">
                    <h4 className="font-semibold text-green-800 mb-3">Sem Risco (15-23 pontos)</h4>
                    <ul className="space-y-2 text-green-700">
                      <li>• Inspeção diária da pele durante o banho</li>
                      <li>• Manutenção da hidratação adequada da pele</li>
                      <li>• Orientações sobre mobilização e mudanças de posição</li>
                      <li>• Educação do paciente e família sobre prevenção</li>
                      <li>• Reavaliação a cada 48-72 horas</li>
                    </ul>
                  </div>

                  <div className="border border-blue-200 rounded-lg p-4 bg-blue-50">
                    <h4 className="font-semibold text-blue-800 mb-3">Baixo Risco (13-14 pontos)</h4>
                    <ul className="space-y-2 text-blue-700">
                      <li>• Implementar todas as medidas do grupo sem risco</li>
                      <li>• Mudanças de decúbito a cada 4 horas</li>
                      <li>• Uso de travesseiros para proteção de proeminências ósseas</li>
                      <li>• Manutenção da pele limpa e seca</li>
                      <li>• Avaliação nutricional básica</li>
                      <li>• Reavaliação a cada 48 horas</li>
                    </ul>
                  </div>

                  <div className="border border-yellow-200 rounded-lg p-4 bg-yellow-50">
                    <h4 className="font-semibold text-yellow-800 mb-3">Risco Moderado (10-12 pontos)</h4>
                    <ul className="space-y-2 text-yellow-700">
                      <li>• Implementar todas as medidas dos grupos anteriores</li>
                      <li>• Mudanças de decúbito a cada 3 horas</li>
                      <li>• Uso de colchão de espuma de alta densidade</li>
                      <li>• Proteção rigorosa de proeminências ósseas</li>
                      <li>• Avaliação nutricional detalhada</li>
                      <li>• Cuidados especiais com incontinência</li>
                      <li>• Reavaliação diária</li>
                    </ul>
                  </div>

                  <div className="border border-red-200 rounded-lg p-4 bg-red-50">
                    <h4 className="font-semibold text-red-800 mb-3">Alto Risco (≤9 pontos)</h4>
                    <ul className="space-y-2 text-red-700">
                      <li>• Implementar todas as medidas dos grupos anteriores</li>
                      <li>• Mudanças de decúbito a cada 2 horas (ou menos se necessário)</li>
                      <li>• Uso de superfície de redistribuição de pressão (colchão pneumático)</li>
                      <li>• Proteção intensiva de todas as proeminências ósseas</li>
                      <li>• Cuidados rigorosos com a pele (limpeza suave, hidratação)</li>
                      <li>• Suporte nutricional intensivo</li>
                      <li>• Manejo rigoroso da incontinência</li>
                      <li>• Técnicas adequadas de transferência para evitar cisalhamento</li>
                      <li>• Monitorização contínua da perfusão tecidual</li>
                      <li>• Reavaliação a cada 12-24 horas</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="example" className="space-y-6">
            <Card className="border-nursing-sage/20 bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-nursing-forest flex items-center">
                  <FileText className="mr-2 h-5 w-5" />
                  Exemplo Detalhado de Evolução de Enfermagem
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <div className="space-y-4 font-mono text-sm">
                    <div className="border-b border-gray-300 pb-2">
                      <strong>EVOLUÇÃO DE ENFERMAGEM</strong>
                      <br />
                      Data: 28/03/2024 - Horário: 14:20h
                      <br />
                      Paciente: Antônio José Silva - Leito: 215B
                      <br />
                      Enfermeiro(a): Luciana Santos Oliveira - COREN-SP 456789
                    </div>

                    <div>
                      <strong>AVALIAÇÃO DO RISCO DE ÚLCERA POR PRESSÃO - ESCALA DE BRADEN:</strong>
                      <br />
                      <br />
                      <strong>1. Percepção Sensorial:</strong> MUITO LIMITADA (2 pontos)
                      <br />
                      Paciente em pós-operatório de cirurgia abdominal de grande porte, sob efeito de analgesia
                      controlada. Responde a estímulos dolorosos, mas apresenta dificuldade para comunicar desconforto
                      de forma clara. Demonstra agitação quando desconfortável, mas não consegue verbalizar
                      especificamente a localização ou intensidade do desconforto. Sedação leve presente devido à
                      medicação analgésica.
                      <br />
                      <br />
                      <strong>2. Umidade:</strong> MUITO ÚMIDA (2 pontos)
                      <br />
                      Paciente apresenta sudorese profusa devido ao quadro febril (Tax: 38,2°C). Pele frequentemente
                      úmida, especialmente na região dorsal e axilar. Roupa de cama necessita ser trocada pelo menos uma
                      vez por turno devido à umidade excessiva. Não apresenta incontinência urinária ou fecal, mas a
                      transpiração mantém a pele constantemente úmida.
                      <br />
                      <br />
                      <strong>3. Atividade:</strong> ACAMADO (1 ponto)
                      <br />
                      Paciente restrito ao leito devido ao pós-operatório imediato de cirurgia abdominal. Apresenta
                      drenos abdominais, cateter vesical de demora e acesso venoso central, limitando significativamente
                      a mobilidade. Não consegue sair do leito sem auxílio e está em repouso absoluto conforme
                      prescrição médica.
                      <br />
                      <br />
                      <strong>4. Mobilidade:</strong> MUITO LIMITADA (2 pontos)
                      <br />
                      Paciente consegue fazer pequenas mudanças ocasionais na posição do corpo com auxílio, mas é
                      incapaz de realizar mudanças frequentes ou significativas sozinho. Apresenta dor abdominal que
                      limita os movimentos. Consegue mover levemente as extremidades, mas necessita auxílio para
                      qualquer mudança de posição no leito.
                      <br />
                      <br />
                      <strong>5. Nutrição:</strong> PROVAVELMENTE INADEQUADA (2 pontos)
                      <br />
                      Paciente em jejum nas primeiras 24 horas pós-operatórias, recebendo apenas hidratação venosa.
                      Iniciada dieta líquida há 12 horas, mas apresenta náuseas e aceita apenas pequenas quantidades.
                      Come aproximadamente 30% da dieta oferecida. Albumina sérica: 2,8 g/dL (valor baixo). Perda de
                      peso de 3 kg nos últimos 7 dias devido ao período pré-operatório.
                      <br />
                      <br />
                      <strong>6. Fricção e Cisalhamento:</strong> PROBLEMA (1 ponto)
                      <br />
                      Paciente requer assistência máxima para qualquer movimentação no leito devido à dor abdominal e
                      presença de dispositivos (drenos, cateteres). Durante as mudanças de posição, há tendência de
                      escorregar no leito devido à sudorese e dificuldade de cooperação. Necessita reposicionamento
                      frequente com auxílio de dois profissionais para evitar fricção excessiva.
                      <br />
                      <br />
                      <strong>PONTUAÇÃO TOTAL: 10 pontos</strong>
                      <br />
                      <strong>CLASSIFICAÇÃO: RISCO MODERADO</strong>
                      <br />
                      <br />
                      <strong>INTERPRETAÇÃO CLÍNICA:</strong>
                      <br />
                      Paciente de 68 anos em pós-operatório imediato apresenta múltiplos fatores de risco para
                      desenvolvimento de úlceras por pressão, incluindo limitação da percepção sensorial devido à
                      sedação, pele constantemente úmida por sudorese, restrição completa ao leito, mobilidade muito
                      limitada, estado nutricional comprometido e alto risco de fricção/cisalhamento. A pontuação de 10
                      pontos indica risco moderado, necessitando implementação de medidas preventivas específicas e
                      monitorização rigorosa.
                      <br />
                      <br />
                      <strong>INTERVENÇÕES DE ENFERMAGEM IMPLEMENTADAS:</strong>
                      <br />- Mudanças de decúbito rigorosamente a cada 3 horas com auxílio de dois profissionais
                      <br />- Uso de colchão de espuma de alta densidade
                      <br />- Proteção de proeminências ósseas com coxins e travesseiros
                      <br />- Inspeção completa da pele a cada mudança de decúbito
                      <br />- Manutenção da pele limpa e seca, com troca frequente de roupas
                      <br />- Hidratação da pele com loção hidratante após higiene
                      <br />- Técnicas adequadas de transferência para minimizar cisalhamento
                      <br />- Elevação da cabeceira limitada a 30 graus para reduzir cisalhamento
                      <br />- Controle rigoroso da temperatura corporal para reduzir sudorese
                      <br />- Estímulo à aceitação da dieta e comunicação com nutricionista
                      <br />- Monitorização de parâmetros laboratoriais (albumina, hemoglobina)
                      <br />- Educação da equipe sobre técnicas de posicionamento
                      <br />
                      <br />
                      <strong>OBSERVAÇÕES CLÍNICAS:</strong>
                      <br />
                      Pele íntegra em todas as regiões avaliadas, sem sinais de hiperemia ou lesões. Região sacral e
                      calcâneos com atenção especial devido ao maior risco. Paciente colaborativo dentro de suas
                      limitações, compreende as orientações fornecidas. Familiares orientados sobre a importância das
                      medidas preventivas. Sinais vitais: PA 120/80 mmHg, FC 92 bpm, Tax 38,2°C, SatO2 96%.
                      <br />
                      <br />
                      <strong>CONDUTAS ADOTADAS:</strong>
                      <br />- Manutenção rigorosa do cronograma de mudanças de decúbito
                      <br />- Monitorização contínua da integridade da pele
                      <br />- Reavaliação diária com a Escala de Braden
                      <br />- Comunicação com equipe médica sobre estado nutricional
                      <br />- Seguimento com nutricionista para otimização da dieta
                      <br />- Controle da dor para facilitar mobilização
                      <br />- Documentação detalhada de todas as intervenções
                      <br />
                      <br />
                      <strong>REFERÊNCIA:</strong> Protocolo Institucional de Prevenção de Úlceras por Pressão. Braden
                      Scale - Braden, B. & Bergstrom, N. (1987).
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="references" className="space-y-6">
            <Card className="border-nursing-sage/20 bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-nursing-forest flex items-center">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Referências Oficiais e Científicas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-nursing-forest mb-3">Referências Primárias</h4>
                    <div className="space-y-3 text-nursing-forest/80">
                      <p>
                        <strong>Braden, B., & Bergstrom, N. (1987).</strong> A conceptual schema for the study of the
                        etiology of pressure sores. <em>Rehabilitation Nursing, 12</em>(1), 8-12.
                      </p>
                      <p>
                        <strong>Bergstrom, N., Braden, B. J., Laguzza, A., & Holman, V. (1987).</strong> The Braden
                        Scale for Predicting Pressure Sore Risk. <em>Nursing Research, 36</em>(4), 205-210.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-nursing-forest mb-3">Estudos de Validação no Brasil</h4>
                    <div className="space-y-3 text-nursing-forest/80">
                      <p>
                        <strong>Paranhos, W. Y., & Santos, V. L. C. G. (1999).</strong> Avaliação de risco para úlceras
                        de pressão por meio da Escala de Braden, na língua portuguesa.{" "}
                        <em>Revista da Escola de Enfermagem da USP, 33</em>(especial), 191-206.
                      </p>
                      <p>
                        <strong>Serpa, L. F., et al. (2011).</strong> Validade preditiva da Escala de Braden para o
                        risco de desenvolvimento de úlcera por pressão, em pacientes críticos.{" "}
                        <em>Revista Latino-Americana de Enfermagem, 19</em>(1), 50-57.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-nursing-forest mb-3">Normas e Protocolos Nacionais</h4>
                    <div className="space-y-3 text-nursing-forest/80">
                      <p>
                        <strong>Ministério da Saúde. (2013).</strong> Protocolo para Prevenção de Úlcera por Pressão.
                        Programa Nacional de Segurança do Paciente. Brasília: MS.
                      </p>
                      <p>
                        <strong>Agência Nacional de Vigilância Sanitária - ANVISA. (2017).</strong> Nota Técnica GVIMS/
                        GGTES nº 03/2017: Práticas seguras para prevenção de Lesão por Pressão em serviços de saúde.
                        Brasília: ANVISA.
                      </p>
                      <p>
                        <strong>Conselho Federal de Enfermagem - COFEN. (2018).</strong> Resolução COFEN nº 567/2018.
                        Regulamenta a atuação da Equipe de Enfermagem no cuidado aos pacientes com feridas.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-nursing-forest mb-3">Diretrizes Internacionais</h4>
                    <div className="space-y-3 text-nursing-forest/80">
                      <p>
                        <strong>National Pressure Ulcer Advisory Panel (NPUAP). (2016).</strong> Prevention and
                        Treatment of Pressure Ulcers/Injuries: Clinical Practice Guideline. 3rd Edition.
                      </p>
                      <p>
                        <strong>European Pressure Ulcer Advisory Panel (EPUAP). (2019).</strong> Prevention and
                        treatment of pressure ulcers/injuries: Quick Reference Guide. 3rd Edition.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-nursing-forest mb-3">Estudos de Meta-análise</h4>
                    <div className="space-y-3 text-nursing-forest/80">
                      <p>
                        <strong>Pancorbo-Hidalgo, P. L., et al. (2006).</strong> Risk assessment scales for pressure
                        ulcer prevention: a systematic review. <em>Journal of Advanced Nursing, 54</em>(1), 94-110.
                      </p>
                      <p>
                        <strong>Wei, M., et al. (2020).</strong> Effectiveness of the Braden Scale in predicting
                        pressure injuries: A systematic review and meta-analysis.{" "}
                        <em>International Journal of Nursing Studies, 110</em>, 103700.
                      </p>
                    </div>
                  </div>

                  <div className="bg-nursing-mint/20 p-4 rounded-lg">
                    <h4 className="font-semibold text-nursing-forest mb-2">Nota Importante</h4>
                    <p className="text-nursing-forest/80 text-sm">
                      A Escala de Braden é o instrumento mais amplamente validado e utilizado mundialmente para
                      avaliação do risco de úlceras por pressão. Todas as referências citadas são baseadas em evidências
                      científicas sólidas e estudos multicêntricos. Para implementação adequada, consulte sempre os
                      protocolos institucionais e as diretrizes do COFEN/COREN de sua região.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
