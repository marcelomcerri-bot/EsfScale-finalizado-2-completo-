import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Baby, ArrowLeft, FileText, AlertCircle, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function WongBakerScalePage() {
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
            <span>Escala de Faces de Wong-Baker</span>
          </div>

          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-blue-50 rounded-full">
                <Baby className="h-8 w-8 text-blue-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Escala de Faces de Wong-Baker</h1>
            <div className="flex justify-center gap-2 mb-4">
              <Badge variant="secondary" className="bg-blue-50 text-blue-700">
                Avaliação da Dor Pediátrica
              </Badge>
              <Badge variant="outline">Crianças de 3 a 18 anos</Badge>
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
                  Escala de Faces de Dor de Wong-Baker (FACES Pain Rating Scale) - Wong-Baker FACES Pain Rating Scale
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Finalidade e Objetivo:</h3>
                <p className="text-muted-foreground leading-relaxed">
                  A Escala de Faces de Wong-Baker é um instrumento visual desenvolvido especificamente para avaliação da
                  dor em população pediátrica, utilizando seis expressões faciais que representam diferentes níveis de
                  intensidade dolorosa. Esta escala foi criada para superar as limitações de comunicação verbal das
                  crianças, permitindo que expressem sua dor através da identificação com faces que variam de muito
                  feliz a muito triste e chorando. A escala é aplicada em crianças de 3 a 18 anos de idade, sendo
                  especialmente útil para aquelas que ainda não desenvolveram completamente habilidades verbais ou
                  numéricas para quantificar sua dor. A FACES é indicada para avaliação da dor aguda e crônica em
                  diversos contextos pediátricos, incluindo emergências, pós-operatório, procedimentos invasivos,
                  oncologia pediátrica e situações ambulatoriais. Sua aplicação facilita a comunicação entre criança,
                  família e equipe de saúde, promovendo um cuidado mais humanizado e efetivo no manejo da dor infantil.
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
                A Escala de Faces de Wong-Baker consiste em seis faces desenhadas de forma simples e clara,
                representando diferentes expressões emocionais associadas à intensidade da dor. A primeira face (0)
                mostra uma expressão muito feliz e sorridente, representando "sem dor". A segunda face (2) apresenta uma
                expressão neutra e ligeiramente desconfortável, indicando "dor leve". A terceira face (4) demonstra
                desconforto mais evidente, representando "dor moderada". A quarta face (6) mostra uma expressão de dor
                mais intensa com sobrancelhas franzidas. A quinta face (8) apresenta uma expressão de dor severa com
                boca aberta. A sexta e última face (10) mostra uma expressão de extremo sofrimento com lágrimas,
                representando "a pior dor possível".
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Cada face está associada a um valor numérico par (0, 2, 4, 6, 8, 10), facilitando a documentação e
                comunicação entre profissionais. As faces são apresentadas horizontalmente, da esquerda para a direita,
                em ordem crescente de intensidade dolorosa. O design das faces foi cuidadosamente desenvolvido para ser
                culturalmente neutro e facilmente compreensível por crianças de diferentes backgrounds culturais e
                socioeconômicos. As expressões faciais são universalmente reconhecíveis e não requerem habilidades de
                leitura ou conhecimento numérico avançado.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                A aplicação da escala requer que o profissional de enfermagem apresente as faces à criança e explique de
                forma simples e adequada à idade que cada face representa como uma pessoa se sente quando tem diferentes
                níveis de dor. É fundamental usar linguagem apropriada para a faixa etária, como "esta face está muito
                feliz porque não tem dor nenhuma" para a face 0, e "esta face está muito triste e chorando porque tem
                muita dor" para a face 10. A criança deve ser encorajada a apontar ou indicar qual face melhor
                representa como ela se sente no momento da avaliação.
              </p>
            </CardContent>
          </Card>

          {/* Visual Scale Representation */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Representação Visual da Escala</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-muted/30 p-6 rounded-lg">
                <div className="grid grid-cols-3 md:grid-cols-6 gap-4 text-center">
                  <div className="space-y-2">
                    <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center text-2xl">
                      😊
                    </div>
                    <div className="text-sm font-semibold">0</div>
                    <div className="text-xs text-muted-foreground">Sem dor</div>
                  </div>
                  <div className="space-y-2">
                    <div className="w-16 h-16 mx-auto bg-green-50 rounded-full flex items-center justify-center text-2xl">
                      🙂
                    </div>
                    <div className="text-sm font-semibold">2</div>
                    <div className="text-xs text-muted-foreground">Dor leve</div>
                  </div>
                  <div className="space-y-2">
                    <div className="w-16 h-16 mx-auto bg-yellow-50 rounded-full flex items-center justify-center text-2xl">
                      😐
                    </div>
                    <div className="text-sm font-semibold">4</div>
                    <div className="text-xs text-muted-foreground">Dor moderada</div>
                  </div>
                  <div className="space-y-2">
                    <div className="w-16 h-16 mx-auto bg-orange-50 rounded-full flex items-center justify-center text-2xl">
                      😟
                    </div>
                    <div className="text-sm font-semibold">6</div>
                    <div className="text-xs text-muted-foreground">Dor intensa</div>
                  </div>
                  <div className="space-y-2">
                    <div className="w-16 h-16 mx-auto bg-red-50 rounded-full flex items-center justify-center text-2xl">
                      😢
                    </div>
                    <div className="text-sm font-semibold">8</div>
                    <div className="text-xs text-muted-foreground">Dor muito intensa</div>
                  </div>
                  <div className="space-y-2">
                    <div className="w-16 h-16 mx-auto bg-red-100 rounded-full flex items-center justify-center text-2xl">
                      😭
                    </div>
                    <div className="text-sm font-semibold">10</div>
                    <div className="text-xs text-muted-foreground">Pior dor possível</div>
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
                    A pontuação da Escala de Faces de Wong-Baker utiliza valores pares de 0 a 10 (0, 2, 4, 6, 8, 10). A
                    criança escolhe a face que melhor representa sua dor atual, e o valor numérico correspondente é
                    registrado. Esta pontuação em números pares facilita a conversão para outras escalas numéricas e
                    permite comparação com instrumentos de avaliação da dor utilizados em adultos.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Interpretação das Faixas de Pontuação:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        <h4 className="font-semibold text-green-800">0 - 2: Dor Leve ou Ausente</h4>
                      </div>
                      <p className="text-sm text-green-700">
                        A criança apresenta ausência de dor ou desconforto mínimo que não interfere em suas atividades
                        normais como brincar, comer ou dormir. Pode manter comportamento habitual e interação social
                        adequada. Geralmente não requer intervenções farmacológicas, podendo ser manejada com medidas de
                        conforto, distração ou analgésicos simples se necessário.
                      </p>
                    </div>

                    <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                      <div className="flex items-center gap-2 mb-2">
                        <AlertCircle className="h-5 w-5 text-yellow-600" />
                        <h4 className="font-semibold text-yellow-800">4 - 6: Dor Moderada</h4>
                      </div>
                      <p className="text-sm text-yellow-700">
                        A criança demonstra desconforto evidente que interfere parcialmente em suas atividades. Pode
                        apresentar irritabilidade, redução do apetite, alterações no padrão de sono e menor interesse em
                        brincar. Requer intervenção farmacológica adequada, técnicas de distração e medidas de conforto.
                        O monitoramento deve ser mais frequente para avaliar resposta às intervenções.
                      </p>
                    </div>

                    <div className="p-4 bg-red-50 rounded-lg border border-red-200 md:col-span-2">
                      <div className="flex items-center gap-2 mb-2">
                        <AlertCircle className="h-5 w-5 text-red-600" />
                        <h4 className="font-semibold text-red-800">8 - 10: Dor Intensa/Severa</h4>
                      </div>
                      <p className="text-sm text-red-700">
                        A criança apresenta sofrimento significativo com interferência importante em todas as atividades
                        de vida diária. Pode demonstrar choro inconsolável, agitação, recusa alimentar, alterações do
                        sono e comportamento de regressão. Requer intervenção farmacológica imediata e potente,
                        avaliação médica urgente, implementação de múltiplas estratégias de alívio da dor e suporte
                        emocional intensivo para criança e família. Pontuação 10 indica emergência álgica que demanda
                        ação imediata.
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
                    A aplicação da Escala de Faces de Wong-Baker requer abordagem lúdica e adequada ao desenvolvimento
                    infantil. O enfermeiro deve apresentar-se de forma acolhedora, estabelecer rapport com a criança e
                    explicar o procedimento de forma simples e tranquilizadora. É fundamental mostrar as faces à criança
                    e explicar que cada uma representa como uma pessoa se sente quando tem diferentes tipos de dor,
                    usando linguagem apropriada para a idade. O profissional deve permitir que a criança observe todas
                    as faces antes de fazer sua escolha e encorajá-la a apontar ou verbalizar qual face melhor
                    representa como ela se sente.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Durante a aplicação, é essencial observar comportamentos não verbais da criança, como expressão
                    facial, postura corporal, movimentos de proteção, choro, agitação ou retraimento. A presença dos
                    pais ou cuidadores pode ser benéfica para tranquilizar a criança, mas é importante orientá-los a não
                    influenciar a resposta. A escala deve ser aplicada em ambiente adequado, com privacidade e conforto,
                    preferencialmente quando a criança está calma e receptiva. A reavaliação deve ser frequente,
                    especialmente após intervenções analgésicas ou procedimentos dolorosos.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Cuidados Durante a Aplicação:</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Adaptar a linguagem ao nível de desenvolvimento cognitivo e emocional da criança</li>
                    <li>Estabelecer vínculo de confiança antes da aplicação da escala</li>
                    <li>Apresentar as faces de forma clara e permitir tempo adequado para observação</li>
                    <li>Explicar que não existem respostas certas ou erradas, apenas o que a criança sente</li>
                    <li>Evitar influenciar a resposta através de sugestões ou expressões faciais</li>
                    <li>
                      Considerar fatores como medo, ansiedade ou presença de estranhos que podem afetar a resposta
                    </li>
                    <li>Observar congruência entre a face escolhida e comportamentos não verbais apresentados</li>
                    <li>Documentar não apenas a pontuação, mas também comportamentos observados</li>
                    <li>Reavaliar se houver inconsistências entre a escolha da face e manifestações clínicas</li>
                    <li>
                      Envolver os pais/cuidadores no processo, orientando-os sobre a importância da avaliação da dor
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
                    <strong>Data/Hora:</strong> 18/03/2024 - 16:30h
                  </p>
                  <p>
                    <strong>Paciente:</strong> L.M.F., 7 anos, sexo feminino, internada na pediatria para apendicectomia
                    (POI - 2º dia)
                  </p>

                  <div className="border-l-4 border-primary pl-4">
                    <p className="mb-2">
                      <strong>Avaliação da Dor - Escala de Faces de Wong-Baker:</strong>
                    </p>
                    <p className="mb-2">
                      Criança consciente, orientada, colaborativa, acompanhada pela mãe. Aplicada Escala de Faces de
                      Wong-Baker para avaliação da dor pós-operatória. Apresentadas as seis faces à criança, explicando
                      de forma lúdica que cada face mostra como uma pessoa se sente quando tem diferentes tipos de dor.
                      Criança demonstrou compreender as orientações, observou atentamente todas as faces antes de fazer
                      sua escolha.
                    </p>
                    <p className="mb-2">
                      <strong>Resultado:</strong> Face escolhida = 6 (dor intensa)
                    </p>
                    <p className="mb-2">
                      <strong>Comportamentos observados:</strong> Criança aponta para a face número 6, referindo "esta
                      aqui, porque minha barriga está doendo muito". Apresenta expressão facial de desconforto, posição
                      antálgica com flexão das pernas sobre o abdome, movimentos cautelosos, solicita frequentemente a
                      presença da mãe. Aceita carinho e demonstra alívio temporário com distração, mas retorna
                      rapidamente ao comportamento de dor.
                    </p>
                  </div>

                  <div className="border-l-4 border-accent pl-4">
                    <p className="mb-2">
                      <strong>Intervenções de Enfermagem Implementadas:</strong>
                    </p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Administrado Dipirona 15mg/kg (210mg) VO conforme prescrição médica às 16:45h</li>
                      <li>Posicionamento confortável com apoio de travesseiros</li>
                      <li>Aplicação de compressa morna em região lombar por 15 minutos</li>
                      <li>Técnicas de distração com livro de histórias e brinquedos favoritos</li>
                      <li>Ambiente mantido calmo com presença contínua da mãe</li>
                      <li>Orientações à mãe sobre sinais de dor e importância da comunicação</li>
                      <li>Exercícios respiratórios lúdicos ("soprar bolhas de sabão")</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-green-500 pl-4">
                    <p className="mb-2">
                      <strong>Reavaliação (18:00h):</strong>
                    </p>
                    <p className="mb-2">Reaplicada Escala de Faces após 1h15min da medicação analgésica.</p>
                    <p className="mb-2">
                      <strong>Resultado:</strong> Face escolhida = 2 (dor leve)
                    </p>
                    <p className="mb-2">
                      Criança aponta para a face número 2, referindo "agora está melhor, só dói um pouquinho". Expressão
                      facial mais relaxada, consegue movimentar-se no leito com menor desconforto, aceita brincar com
                      brinquedos oferecidos, interage mais com a equipe. Mãe relata que a filha está mais tranquila e
                      conseguiu tomar um pouco de suco.
                    </p>
                  </div>

                  <div className="border-l-4 border-orange-500 pl-4">
                    <p className="mb-2">
                      <strong>Reavaliação (22:00h):</strong>
                    </p>
                    <p className="mb-2">Avaliação noturna conforme protocolo pediátrico.</p>
                    <p className="mb-2">
                      <strong>Resultado:</strong> Face escolhida = 4 (dor moderada)
                    </p>
                    <p className="mb-2">
                      Criança escolhe a face número 4, referindo que "a barriga voltou a doer mais". Apresenta
                      inquietação, dificuldade para adormecer, solicita colo da mãe. Observa-se que a dor aumenta quando
                      tenta mudar de posição no leito.
                    </p>
                  </div>

                  <div className="border-l-4 border-blue-500 pl-4">
                    <p className="mb-2">
                      <strong>Condutas e Planejamento:</strong>
                    </p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Manter avaliação da dor através da Escala de Faces a cada 4 horas e SOS</li>
                      <li>Administrar analgesia conforme prescrição quando face escolhida ≥ 4</li>
                      <li>Continuar técnicas de distração e conforto não farmacológicas</li>
                      <li>Orientar mãe sobre importância de comunicar sinais de dor da criança</li>
                      <li>Estimular deambulação precoce conforme tolerância e orientação médica</li>
                      <li>Comunicar pediatra se face escolhida persistir ≥ 6 após intervenções</li>
                      <li>Documentar todas as avaliações e comportamentos observados</li>
                      <li>Manter ambiente lúdico e acolhedor para reduzir ansiedade</li>
                    </ul>
                  </div>

                  <p className="mt-4">
                    <strong>Enfermeiro Responsável:</strong> Ana Carolina Mendes - COREN-MG 345678
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
                    <li>Sociedade Brasileira de Pediatria - Avaliação e tratamento da dor em pediatria</li>
                    <li>COREN-SP - Parecer Técnico sobre avaliação da dor em pediatria</li>
                    <li>
                      Conselho Nacional dos Direitos da Criança e do Adolescente - Direitos da criança hospitalizada
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Literatura Científica:</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 text-sm">
                    <li>
                      Wong, D. L., & Baker, C. M. (1988). Pain in children: comparison of assessment scales. Pediatric
                      Nursing, 14(1), 9-17.
                    </li>
                    <li>
                      Hockenberry, M. J., & Wilson, D. (2018). Wong's nursing care of infants and children. Elsevier
                      Health Sciences.
                    </li>
                    <li>
                      Tomlinson, D., von Baeyer, C. L., Stinson, J. N., & Sung, L. (2010). A systematic review of faces
                      scales for the self-report of pain intensity in children. Pediatrics, 126(5), e1168-e1198.
                    </li>
                    <li>
                      Claro, M. T. (1993). Escala de faces para avaliação da dor em crianças: etapa preliminar. Revista
                      da Escola de Enfermagem da USP, 27(2), 270-283.
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
