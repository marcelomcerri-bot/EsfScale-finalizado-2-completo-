import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Heart, ArrowLeft, FileText, AlertCircle, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function NumericPainScalePage() {
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
            <span>Escala Numérica de Dor</span>
          </div>

          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-red-50 rounded-full">
                <Heart className="h-8 w-8 text-red-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Escala Numérica de Dor</h1>
            <div className="flex justify-center gap-2 mb-4">
              <Badge variant="secondary" className="bg-red-50 text-red-700">
                Avaliação da Dor
              </Badge>
              <Badge variant="outline">Adultos e Crianças ≥ 8 anos</Badge>
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
                  Escala Numérica de Avaliação da Dor (END) - Numeric Rating Scale (NRS)
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Finalidade e Objetivo:</h3>
                <p className="text-muted-foreground leading-relaxed">
                  A Escala Numérica de Dor é um instrumento unidimensional simples e eficaz para mensuração da
                  intensidade da dor através de números inteiros de 0 a 10. Esta escala foi desenvolvida para permitir
                  uma avaliação rápida e objetiva da dor em pacientes que compreendem conceitos numéricos e são capazes
                  de quantificar sua experiência dolorosa. A END é aplicada em adultos e crianças a partir de 8 anos de
                  idade, sendo especialmente útil em contextos onde é necessária uma comunicação clara e direta sobre a
                  intensidade da dor. A escala é indicada para avaliação da dor aguda e crônica em diversas situações
                  clínicas, incluindo emergências, pós-operatório, ambulatórios, unidades de internação e cuidados
                  domiciliares. Sua simplicidade permite aplicação por diferentes profissionais de saúde e facilita a
                  comunicação entre paciente e equipe multiprofissional.
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
                A Escala Numérica de Dor consiste em uma sequência de números inteiros de 0 a 10, onde 0 representa
                "ausência total de dor" ou "sem dor" e 10 representa "a pior dor imaginável" ou "dor insuportável". Os
                números podem ser apresentados horizontalmente (0-1-2-3-4-5-6-7-8-9-10) ou verticalmente, dependendo da
                preferência institucional e do contexto de aplicação. A escala pode ser apresentada verbalmente,
                visualmente em papel ou formato digital, ou através de dispositivos eletrônicos.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A aplicação da escala requer que o profissional de enfermagem explique ao paciente que ele deve escolher
                um número de 0 a 10 que melhor represente a intensidade de sua dor no momento atual da avaliação. É
                fundamental esclarecer que 0 significa ausência completa de dor e 10 representa a pior dor que o
                paciente pode imaginar. O paciente deve ser orientado a considerar apenas a dor presente no momento da
                avaliação, não a dor média do dia ou a pior dor já experimentada anteriormente.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                A END oferece vantagens significativas em relação a outras escalas devido à sua simplicidade de
                aplicação e compreensão. Não requer materiais específicos além da comunicação verbal, pode ser aplicada
                rapidamente mesmo em situações de urgência, e permite fácil documentação e comunicação entre
                profissionais. A escala é particularmente útil para pacientes com limitações visuais, desde que
                mantenham capacidade cognitiva adequada para compreender conceitos numéricos. Além disso, a END facilita
                o monitoramento da evolução da dor ao longo do tempo e a avaliação da eficácia de intervenções
                terapêuticas.
              </p>
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
                    A pontuação da Escala Numérica de Dor varia de 0 a 10, utilizando apenas números inteiros. O
                    paciente deve escolher um único número que melhor represente sua dor atual. Não são aceitas frações
                    ou números decimais, mantendo a simplicidade da escala. A pontuação deve ser registrada exatamente
                    como referida pelo paciente, sem interpretações ou aproximações por parte do profissional.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Interpretação das Faixas de Pontuação:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        <h4 className="font-semibold text-green-800">0 - 3: Dor Leve</h4>
                      </div>
                      <p className="text-sm text-green-700">
                        Dor de baixa intensidade que permite ao paciente manter suas atividades normais com mínimo
                        desconforto. O paciente consegue dormir adequadamente e realizar tarefas cotidianas sem
                        limitações significativas. Geralmente não requer intervenções farmacológicas potentes, podendo
                        ser manejada com analgésicos simples, medidas não farmacológicas ou técnicas de conforto.
                      </p>
                    </div>

                    <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                      <div className="flex items-center gap-2 mb-2">
                        <AlertCircle className="h-5 w-5 text-yellow-600" />
                        <h4 className="font-semibold text-yellow-800">4 - 6: Dor Moderada</h4>
                      </div>
                      <p className="text-sm text-yellow-700">
                        Dor de intensidade média que interfere nas atividades de vida diária e pode afetar o sono. O
                        paciente apresenta limitações funcionais parciais e desconforto que requer atenção. Necessita
                        intervenção farmacológica adequada, monitoramento regular e possível combinação de estratégias
                        farmacológicas e não farmacológicas para controle efetivo.
                      </p>
                    </div>

                    <div className="p-4 bg-red-50 rounded-lg border border-red-200 md:col-span-2">
                      <div className="flex items-center gap-2 mb-2">
                        <AlertCircle className="h-5 w-5 text-red-600" />
                        <h4 className="font-semibold text-red-800">7 - 10: Dor Intensa/Severa</h4>
                      </div>
                      <p className="text-sm text-red-700">
                        Dor de alta intensidade que interfere drasticamente nas atividades de vida diária, sono e
                        bem-estar geral. O paciente apresenta limitações funcionais importantes, sofrimento
                        significativo e pode demonstrar sinais autonômicos como alterações na pressão arterial,
                        frequência cardíaca e respiratória. Requer intervenção farmacológica imediata e potente,
                        avaliação médica urgente para ajuste terapêutico e implementação de múltiplas estratégias de
                        alívio da dor. Pontuações 9-10 indicam dor extrema que pode estar associada a situações de
                        emergência médica.
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
                    A aplicação da Escala Numérica de Dor deve ser realizada de forma padronizada e sistemática. O
                    enfermeiro deve abordar o paciente em ambiente adequado, explicando claramente o objetivo da
                    avaliação e como a escala funciona. É essencial que o profissional utilize sempre a mesma linguagem
                    e abordagem, perguntando: "Em uma escala de 0 a 10, onde 0 significa ausência total de dor e 10
                    representa a pior dor imaginável, que número melhor representa sua dor neste momento?". O
                    profissional deve aguardar a resposta do paciente sem pressa ou pressão, permitindo tempo adequado
                    para reflexão.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Durante a aplicação, é importante observar a congruência entre a pontuação referida e os sinais não
                    verbais apresentados pelo paciente, como expressão facial, postura corporal, movimentos de proteção,
                    gemidos ou inquietação. Discrepâncias significativas devem ser investigadas e documentadas. A escala
                    deve ser aplicada em intervalos regulares conforme protocolo institucional, tipicamente a cada 4-6
                    horas em pacientes hospitalizados, antes e após procedimentos dolorosos, e sempre antes e após
                    administração de analgésicos para avaliar eficácia terapêutica.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Cuidados Durante a Aplicação:</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>
                      Verificar se o paciente compreende conceitos numéricos e é capaz de quantificar experiências
                    </li>
                    <li>
                      Certificar-se de que o paciente entende que deve considerar apenas a dor atual, no momento da
                      avaliação
                    </li>
                    <li>
                      Explicar claramente o significado dos extremos da escala (0 = sem dor, 10 = pior dor imaginável)
                    </li>
                    <li>Evitar influenciar a resposta através de sugestões, expressões faciais ou comentários</li>
                    <li>Permitir tempo adequado para o paciente processar a pergunta e formular sua resposta</li>
                    <li>Registrar exatamente o número referido pelo paciente, sem aproximações ou interpretações</li>
                    <li>
                      Considerar fatores culturais, educacionais e cognitivos que podem influenciar a compreensão da
                      escala
                    </li>
                    <li>Observar e documentar sinais não verbais que complementem a avaliação numérica</li>
                    <li>Reavaliar se houver inconsistências entre a pontuação e manifestações clínicas observadas</li>
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
                    <strong>Data/Hora:</strong> 22/03/2024 - 08:00h
                  </p>
                  <p>
                    <strong>Paciente:</strong> A.P.S., 62 anos, sexo masculino, internado na clínica médica com
                    diagnóstico de artrite reumatoide em atividade
                  </p>

                  <div className="border-l-4 border-primary pl-4">
                    <p className="mb-2">
                      <strong>Avaliação da Dor - Escala Numérica de Dor (END):</strong>
                    </p>
                    <p className="mb-2">
                      Paciente consciente, orientado, colaborativo. Aplicada Escala Numérica para avaliação da dor
                      articular. Explicado ao paciente que deveria escolher um número de 0 a 10, onde 0 representa
                      ausência de dor e 10 a pior dor imaginável, considerando apenas a dor atual.
                    </p>
                    <p className="mb-2">
                      <strong>Resultado:</strong> END = 8 (dor intensa)
                    </p>
                    <p className="mb-2">
                      <strong>Características da dor:</strong> Paciente relata dor intensa em articulações das mãos,
                      punhos e joelhos, de caráter latejante e queimação, com rigidez matinal pronunciada há
                      aproximadamente 2 horas. Refere que a dor piorou durante a madrugada, interferindo no sono.
                      Observa-se edema e rubor em articulações metacarpofalangeanas bilateralmente, limitação da
                      amplitude de movimento, expressão facial de desconforto e posição antálgica das mãos.
                    </p>
                  </div>

                  <div className="border-l-4 border-accent pl-4">
                    <p className="mb-2">
                      <strong>Intervenções de Enfermagem Implementadas:</strong>
                    </p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Administrado Ibuprofeno 600mg VO conforme prescrição médica às 08:15h</li>
                      <li>Aplicação de compressa morna nas articulações afetadas por 15 minutos</li>
                      <li>Posicionamento das mãos em posição funcional com apoio de travesseiros</li>
                      <li>Orientações sobre exercícios de amplitude de movimento passivos</li>
                      <li>Ambiente mantido aquecido e confortável</li>
                      <li>Orientado sobre importância do repouso articular durante fase aguda</li>
                      <li>
                        Comunicado médico assistente sobre intensidade da dor para avaliação de ajuste terapêutico
                      </li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-green-500 pl-4">
                    <p className="mb-2">
                      <strong>Reavaliação (10:00h):</strong>
                    </p>
                    <p className="mb-2">Reaplicada END após 1h45min da administração da medicação anti-inflamatória.</p>
                    <p className="mb-2">
                      <strong>Resultado:</strong> END = 5 (dor moderada)
                    </p>
                    <p className="mb-2">
                      Paciente refere melhora parcial da dor, principalmente redução da sensação de queimação. Mantém
                      limitação de movimento, mas consegue realizar pequenos movimentos das mãos com menor desconforto.
                      Expressão facial mais relaxada, aceita realizar exercícios passivos orientados.
                    </p>
                  </div>

                  <div className="border-l-4 border-orange-500 pl-4">
                    <p className="mb-2">
                      <strong>Reavaliação (14:00h):</strong>
                    </p>
                    <p className="mb-2">Nova avaliação conforme protocolo institucional (6/6h).</p>
                    <p className="mb-2">
                      <strong>Resultado:</strong> END = 6 (dor moderada)
                    </p>
                    <p className="mb-2">
                      Paciente relata leve piora da dor após tentativa de deambulação. Refere que a dor aumenta com
                      movimento e melhora com repouso. Solicita nova medicação para dor.
                    </p>
                  </div>

                  <div className="border-l-4 border-blue-500 pl-4">
                    <p className="mb-2">
                      <strong>Condutas e Planejamento:</strong>
                    </p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Manter avaliação da dor através da END a cada 6 horas e SOS</li>
                      <li>Administrar medicação analgésica/anti-inflamatória conforme prescrição (END ≥ 4)</li>
                      <li>Continuar aplicação de calor local 3x/dia</li>
                      <li>Estimular exercícios passivos e ativos assistidos conforme tolerância</li>
                      <li>Orientar paciente sobre sinais de melhora e piora do quadro álgico</li>
                      <li>Solicitar avaliação médica se END persistir ≥ 7 após intervenções</li>
                      <li>Encaminhar para fisioterapia quando fase aguda estiver controlada</li>
                    </ul>
                  </div>

                  <p className="mt-4">
                    <strong>Enfermeiro Responsável:</strong> Maria Fernanda Costa - COREN-RJ 234567
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
                    <li>Ministério da Saúde - Manual de Cuidados Paliativos (2020): Avaliação e controle da dor</li>
                    <li>COREN-SP - Parecer Técnico nº 15/2015: Dor como 5º sinal vital</li>
                    <li>Sociedade Brasileira para Estudo da Dor (SBED) - Consenso sobre dor</li>
                    <li>ANVISA - RDC nº 36/2013: Segurança do paciente em serviços de saúde</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Literatura Científica:</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 text-sm">
                    <li>
                      Downie, W. W., Leatham, P. A., Rhind, V. M., Wright, V., Branco, J. A., & Anderson, J. A. (1978).
                      Studies with pain rating scales. Annals of the Rheumatic Diseases, 37(4), 378-381.
                    </li>
                    <li>
                      Jensen, M. P., Karoly, P., & Braver, S. (1986). The measurement of clinical pain intensity: a
                      comparison of six methods. Pain, 27(1), 117-126.
                    </li>
                    <li>
                      Ferreira-Valente, M. A., Pais-Ribeiro, J. L., & Jensen, M. P. (2011). Validity of four pain
                      intensity rating scales. Pain, 152(10), 2399-2404.
                    </li>
                    <li>
                      Pimenta, C. A. M., & Teixeira, M. J. (1996). Questionário de dor McGill: proposta de adaptação
                      para a língua portuguesa. Revista da Escola de Enfermagem da USP, 30(3), 473-483.
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
