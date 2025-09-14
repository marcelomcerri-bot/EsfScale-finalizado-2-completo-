import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Smile, ArrowLeft, FileText, AlertCircle, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function FacesPainScalePage() {
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
            <span>Escala de Faces de Dor para Crianças</span>
          </div>

          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-purple-50 rounded-full">
                <Smile className="h-8 w-8 text-purple-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Escala de Faces de Dor para Crianças</h1>
            <div className="flex justify-center gap-2 mb-4">
              <Badge variant="secondary" className="bg-purple-50 text-purple-700">
                Avaliação Visual da Dor
              </Badge>
              <Badge variant="outline">Crianças de 4 a 12 anos</Badge>
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
                  Escala de Faces de Dor para Crianças (Children's Faces Pain Scale - FPS-R)
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Finalidade e Objetivo:</h3>
                <p className="text-muted-foreground leading-relaxed">
                  A Escala de Faces de Dor para Crianças é um instrumento de autoavaliação desenvolvido especificamente
                  para permitir que crianças em idade escolar comuniquem a intensidade de sua dor de forma visual e
                  intuitiva. Esta escala utiliza representações faciais que expressam diferentes níveis de dor, desde
                  ausência total de dor até dor máxima, permitindo que a criança identifique qual face melhor representa
                  sua experiência dolorosa atual. O instrumento foi desenvolvido considerando a capacidade cognitiva e
                  de comunicação das crianças entre 4 e 12 anos, idade em que já possuem desenvolvimento suficiente para
                  compreender conceitos abstratos como intensidade e conseguem fazer correlações entre representações
                  visuais e suas sensações internas. A escala é aplicada em diversos contextos clínicos, incluindo
                  avaliação de dor aguda pós-operatória, dor crônica, dor relacionada a procedimentos médicos,
                  emergências pediátricas e acompanhamento ambulatorial. Sua utilização permite uma comunicação mais
                  efetiva entre a criança, família e equipe de saúde, facilitando a implementação de intervenções
                  analgésicas apropriadas e o monitoramento da eficácia do tratamento da dor. A escala também serve como
                  ferramenta educativa, ajudando as crianças a desenvolverem vocabulário e consciência sobre suas
                  sensações dolorosas.
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
              <p className="text-muted-foreground leading-relaxed mb-6">
                A Escala de Faces de Dor para Crianças consiste em uma série de seis faces desenhadas que representam
                diferentes intensidades de dor, organizadas em ordem crescente de desconforto. Cada face é numerada de 0
                a 5, correspondendo a diferentes níveis de intensidade dolorosa. As faces são apresentadas em uma linha
                horizontal, permitindo que a criança visualize toda a progressão da dor de forma clara e compreensível.
                O design das faces é simples e universalmente reconhecível, evitando características culturais
                específicas que possam interferir na interpretação.
              </p>

              <div className="space-y-6">
                <div className="bg-muted/30 p-6 rounded-lg">
                  <h3 className="font-semibold mb-4 text-center">Descrição das Faces:</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3 p-3 bg-white/50 rounded">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-2xl">
                        😊
                      </div>
                      <div>
                        <Badge variant="outline" className="mb-1">
                          Face 0
                        </Badge>
                        <p className="text-sm text-muted-foreground">
                          <strong>Sem dor:</strong> Face sorridente, expressão feliz e relaxada, indicando ausência
                          completa de dor.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-white/50 rounded">
                      <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center text-2xl">
                        🙂
                      </div>
                      <div>
                        <Badge variant="outline" className="mb-1">
                          Face 1
                        </Badge>
                        <p className="text-sm text-muted-foreground">
                          <strong>Dor muito leve:</strong> Face neutra com leve expressão de desconforto, quase
                          imperceptível.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-white/50 rounded">
                      <div className="w-12 h-12 bg-yellow-50 rounded-full flex items-center justify-center text-2xl">
                        😐
                      </div>
                      <div>
                        <Badge variant="outline" className="mb-1">
                          Face 2
                        </Badge>
                        <p className="text-sm text-muted-foreground">
                          <strong>Dor leve:</strong> Face neutra com expressão ligeiramente preocupada, desconforto
                          perceptível.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-white/50 rounded">
                      <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center text-2xl">
                        😟
                      </div>
                      <div>
                        <Badge variant="outline" className="mb-1">
                          Face 3
                        </Badge>
                        <p className="text-sm text-muted-foreground">
                          <strong>Dor moderada:</strong> Face com expressão de desconforto evidente, sobrancelhas
                          franzidas.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-white/50 rounded">
                      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-2xl">
                        😣
                      </div>
                      <div>
                        <Badge variant="outline" className="mb-1">
                          Face 4
                        </Badge>
                        <p className="text-sm text-muted-foreground">
                          <strong>Dor intensa:</strong> Face com expressão de sofrimento, olhos fechados, desconforto
                          significativo.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-white/50 rounded">
                      <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-2xl">
                        😭
                      </div>
                      <div>
                        <Badge variant="outline" className="mb-1">
                          Face 5
                        </Badge>
                        <p className="text-sm text-muted-foreground">
                          <strong>Dor máxima:</strong> Face chorando, expressão de sofrimento extremo, dor insuportável.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Instruções para Aplicação:</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    A aplicação da escala deve ser feita de forma clara e compreensível para a criança. O profissional
                    deve explicar que cada face representa uma pessoa que sente diferentes quantidades de dor, desde
                    nenhuma dor até muita dor. É importante enfatizar que a criança deve escolher a face que melhor
                    representa como ela se sente neste momento específico.
                  </p>
                  <div className="bg-white/50 p-3 rounded">
                    <p className="text-sm font-medium mb-2">Instrução padrão para a criança:</p>
                    <p className="text-sm italic text-muted-foreground">
                      "Estas faces mostram o quanto algo pode doer. Esta face (apontar para a face 0) mostra uma pessoa
                      que não tem dor nenhuma. Esta face (apontar para a face 1) mostra uma pessoa que tem só um
                      pouquinho de dor. Esta face (apontar para a face 2) tem um pouco mais de dor. Esta face (apontar
                      para a face 3) tem ainda mais dor. Esta face (apontar para a face 4) tem muita dor. Esta face
                      (apontar para a face 5) tem a maior dor possível, embora você não precise estar chorando para
                      sentir essa dor. Qual face mostra melhor o quanto você está sentindo dor agora?"
                    </p>
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
                    A pontuação da Escala de Faces de Dor varia de 0 a 5, correspondendo diretamente à face escolhida
                    pela criança. Cada face representa um nível específico de intensidade dolorosa, permitindo uma
                    avaliação quantitativa da experiência subjetiva da dor. A pontuação é obtida através da
                    identificação da face selecionada pela criança, sendo registrada como o número correspondente à face
                    escolhida. Para fins de correlação com outras escalas numéricas de dor, a pontuação pode ser
                    convertida multiplicando-se por 2, resultando em uma escala de 0 a 10 pontos.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Interpretação das Pontuações:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        <h4 className="font-semibold text-green-800">0 - 1: Sem Dor ou Dor Mínima</h4>
                      </div>
                      <p className="text-sm text-green-700">
                        A criança indica ausência de dor ou desconforto mínimo que não interfere em suas atividades
                        normais. Geralmente não requer intervenções farmacológicas específicas, podendo ser manejada com
                        medidas de conforto e distração. A criança mantém comportamento normal para sua idade, participa
                        de atividades lúdicas e interage adequadamente com o ambiente.
                      </p>
                    </div>

                    <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                      <div className="flex items-center gap-2 mb-2">
                        <AlertCircle className="h-5 w-5 text-yellow-600" />
                        <h4 className="font-semibold text-yellow-800">2 - 3: Dor Leve a Moderada</h4>
                      </div>
                      <p className="text-sm text-yellow-700">
                        A criança relata dor que causa desconforto perceptível e pode interferir parcialmente em algumas
                        atividades. Requer atenção e implementação de medidas analgésicas apropriadas, combinadas com
                        técnicas não farmacológicas de alívio da dor. Necessita monitoramento regular para avaliar
                        resposta às intervenções e prevenir progressão para níveis mais intensos.
                      </p>
                    </div>

                    <div className="p-4 bg-red-50 rounded-lg border border-red-200 md:col-span-2">
                      <div className="flex items-center gap-2 mb-2">
                        <AlertCircle className="h-5 w-5 text-red-600" />
                        <h4 className="font-semibold text-red-800">4 - 5: Dor Intensa a Severa</h4>
                      </div>
                      <p className="text-sm text-red-700">
                        A criança indica dor significativa que interfere substancialmente em suas atividades, bem-estar
                        e qualidade de vida. Requer intervenção analgésica imediata e potente, avaliação médica para
                        investigação de causas e implementação de múltiplas estratégias de alívio da dor. Pontuação 5
                        indica emergência álgica que demanda ação imediata, reavaliação frequente e possível ajuste do
                        plano terapêutico. Pode estar associada a alterações comportamentais, recusa alimentar,
                        distúrbios do sono e ansiedade.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                  <h3 className="font-semibold mb-2 text-amber-800">Considerações Especiais:</h3>
                  <ul className="list-disc list-inside text-sm text-amber-700 space-y-1">
                    <li>Crianças podem escolher faces baseadas em experiências emocionais além da dor física</li>
                    <li>Importante correlacionar com observações comportamentais e sinais vitais</li>
                    <li>Considerar fatores culturais e individuais na interpretação das escolhas</li>
                    <li>Reavaliar frequentemente, especialmente após intervenções analgésicas</li>
                    <li>Documentar contexto da avaliação (procedimentos, medicações, ambiente)</li>
                  </ul>
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
                    A aplicação da Escala de Faces de Dor requer ambiente adequado e abordagem apropriada para a idade
                    da criança. O enfermeiro deve posicionar-se na altura dos olhos da criança, estabelecer rapport e
                    explicar o procedimento de forma clara e tranquilizadora. É fundamental apresentar a escala de forma
                    que todas as faces sejam claramente visíveis, preferencialmente em material impresso ou digital de
                    boa qualidade. A explicação deve ser feita de forma lúdica e compreensível, utilizando linguagem
                    apropriada para a idade e desenvolvimento cognitivo da criança.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Durante a aplicação, é importante dar tempo suficiente para que a criança observe todas as faces e
                    faça sua escolha sem pressão. O profissional deve evitar influenciar a resposta através de gestos,
                    expressões faciais ou comentários direcionados. Após a escolha da criança, é recomendável confirmar
                    a seleção perguntando novamente qual face ela escolheu, garantindo que a resposta seja consistente.
                    A presença dos pais ou cuidadores pode ser benéfica para tranquilizar a criança, mas deve-se
                    orientá-los a não influenciar a resposta.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Cuidados Durante a Aplicação:</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Estabelecer ambiente calmo e privativo para a avaliação</li>
                    <li>Posicionar-se na altura dos olhos da criança para facilitar comunicação</li>
                    <li>Utilizar linguagem simples e apropriada para a idade da criança</li>
                    <li>Apresentar a escala de forma clara, com todas as faces visíveis simultaneamente</li>
                    <li>Dar tempo adequado para que a criança observe e escolha sem pressão</li>
                    <li>Evitar influenciar a resposta através de gestos ou comentários direcionados</li>
                    <li>Confirmar a escolha da criança para garantir consistência da resposta</li>
                    <li>Considerar fatores emocionais que podem influenciar a percepção da dor</li>
                    <li>Correlacionar a autoavaliação com observações comportamentais objetivas</li>
                    <li>Documentar não apenas a pontuação, mas também observações contextuais</li>
                    <li>Reavaliar em intervalos apropriados, especialmente após intervenções</li>
                    <li>Orientar pais/cuidadores sobre a importância da avaliação honesta da dor</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Intervenções Baseadas na Pontuação:</h3>
                  <div className="space-y-3">
                    <div className="bg-green-50 p-3 rounded border border-green-200">
                      <h4 className="font-medium text-green-800 mb-1">Pontuação 0-1 (Sem dor/Dor mínima):</h4>
                      <p className="text-sm text-green-700">
                        Manter medidas de conforto, estimular atividades lúdicas apropriadas, monitoramento de rotina,
                        orientações preventivas aos cuidadores.
                      </p>
                    </div>
                    <div className="bg-yellow-50 p-3 rounded border border-yellow-200">
                      <h4 className="font-medium text-yellow-800 mb-1">Pontuação 2-3 (Dor leve/moderada):</h4>
                      <p className="text-sm text-yellow-700">
                        Implementar medidas não farmacológicas (distração, relaxamento, posicionamento), considerar
                        analgésicos conforme prescrição, aumentar frequência de avaliação.
                      </p>
                    </div>
                    <div className="bg-red-50 p-3 rounded border border-red-200">
                      <h4 className="font-medium text-red-800 mb-1">Pontuação 4-5 (Dor intensa/severa):</h4>
                      <p className="text-sm text-red-700">
                        Intervenção analgésica imediata, comunicação médica urgente, implementação de múltiplas
                        estratégias de alívio, monitoramento contínuo, reavaliação frequente.
                      </p>
                    </div>
                  </div>
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
                    <strong>Data/Hora:</strong> 18/04/2024 - 10:15h
                  </p>
                  <p>
                    <strong>Paciente:</strong> L.M.S., 7 anos, sexo feminino, internada na pediatria para apendicectomia
                    (POI - 2º dia)
                  </p>

                  <div className="border-l-4 border-primary pl-4">
                    <p className="mb-2">
                      <strong>Avaliação da Dor - Escala de Faces:</strong>
                    </p>
                    <p className="mb-2">
                      Criança acordada, acompanhada pela avó materna. Aplicada Escala de Faces de Dor conforme protocolo
                      pediátrico. Apresentada a escala impressa em papel, com explicação clara sobre cada face e seu
                      significado.
                    </p>

                    <div className="bg-white/50 p-3 rounded mb-3">
                      <p className="mb-2">
                        <strong>Processo de Aplicação:</strong>
                      </p>
                      <p className="text-xs mb-2">
                        Posicionei-me na altura dos olhos da criança, estabeleci contato visual e expliquei: "Vou
                        mostrar algumas carinhas que mostram diferentes quantidades de dor. Você vai me dizer qual
                        carinha mostra melhor como você está se sentindo agora." Apresentei a escala e expliquei cada
                        face individualmente, desde a face sorridente (sem dor) até a face chorando (dor máxima).
                      </p>
                      <p className="text-xs mb-2">
                        A criança observou atentamente todas as faces por aproximadamente 30 segundos, apontou para a
                        face número 3 e disse: "Esta aqui, porque minha barriga ainda dói um pouco, mas não tanto quanto
                        ontem." Confirmei a escolha perguntando novamente, e ela manteve a mesma resposta.
                      </p>
                    </div>

                    <p className="mb-2">
                      <strong>Resultado:</strong> Escala de Faces = 3 (dor moderada)
                    </p>
                    <p className="mb-2">
                      <strong>Observações complementares:</strong> Criança verbaliza dor localizada em região abdominal,
                      principalmente ao movimentar-se no leito. Apresenta-se colaborativa durante a avaliação, mantém
                      posição antálgica (semifowler com pernas fletidas), aceita líquidos oferecidos. Avó relata que a
                      neta dormiu melhor durante a noite comparado ao primeiro dia pós-operatório.
                    </p>
                  </div>

                  <div className="border-l-4 border-accent pl-4">
                    <p className="mb-2">
                      <strong>Intervenções de Enfermagem Implementadas:</strong>
                    </p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Administrado Dipirona 15mg/kg (300mg) EV + Paracetamol 15mg/kg (210mg) VO às 10:30h</li>
                      <li>Orientado posicionamento confortável com apoio de travesseiros</li>
                      <li>Aplicadas técnicas de distração com livros de colorir e música infantil</li>
                      <li>Estimulada deambulação precoce conforme tolerância e prescrição médica</li>
                      <li>Oferecidos líquidos claros conforme aceitação (água, chá, suco diluído)</li>
                      <li>Orientações à avó sobre sinais de alerta e importância da comunicação da dor</li>
                      <li>Ambiente mantido calmo com iluminação adequada para descanso</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-green-500 pl-4">
                    <p className="mb-2">
                      <strong>Reavaliação (14:30h):</strong>
                    </p>
                    <p className="mb-2">Reaplicada Escala de Faces após 4 horas da medicação analgésica.</p>

                    <div className="bg-white/50 p-3 rounded mb-3">
                      <p className="mb-2">
                        <strong>Nova Avaliação:</strong>
                      </p>
                      <p className="text-xs mb-2">
                        Criança mais ativa no leito, brincando com boneca trazida de casa. Ao apresentar novamente a
                        escala, observou rapidamente e apontou para a face número 1, dizendo: "Agora está bem melhor, só
                        dói um pouquinho quando eu me mexo muito." Confirmada a escolha, manteve a mesma resposta.
                      </p>
                    </div>

                    <p className="mb-2">
                      <strong>Resultado:</strong> Escala de Faces = 1 (dor mínima)
                    </p>
                    <p className="mb-2">
                      Criança apresenta melhora significativa da dor. Consegue movimentar-se no leito com maior
                      facilidade, aceita deambulação assistida até o banheiro, alimenta-se adequadamente (dieta líquida
                      completa). Avó relata que a neta está mais animada e solicitou para assistir desenho animado.
                    </p>
                  </div>

                  <div className="border-l-4 border-orange-500 pl-4">
                    <p className="mb-2">
                      <strong>Reavaliação (22:00h):</strong>
                    </p>
                    <p className="mb-2">Avaliação noturna de rotina.</p>
                    <p className="mb-2">
                      <strong>Resultado:</strong> Escala de Faces = 2 (dor leve)
                    </p>
                    <p className="mb-2">
                      Criança relata leve aumento da dor no período noturno, principalmente relacionado ao cansaço do
                      dia. Escolheu a face número 2, explicando: "Dói um pouquinho mais agora, mas consigo dormir."
                      Apresenta-se sonolenta, mas cooperativa durante a avaliação.
                    </p>
                  </div>

                  <div className="border-l-4 border-blue-500 pl-4">
                    <p className="mb-2">
                      <strong>Condutas e Planejamento:</strong>
                    </p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Manter avaliação da dor através da Escala de Faces a cada 6 horas e SOS</li>
                      <li>Administrar analgesia conforme prescrição quando pontuação ≥ 3</li>
                      <li>Continuar estímulo à deambulação precoce e atividades lúdicas</li>
                      <li>Progredir dieta conforme tolerância e prescrição médica</li>
                      <li>Orientar criança e avó sobre importância da comunicação honesta da dor</li>
                      <li>Implementar técnicas não farmacológicas de alívio da dor (distração, relaxamento)</li>
                      <li>Comunicar pediatra se pontuação persistir ≥ 4 após intervenções</li>
                      <li>Preparar para alta hospitalar conforme evolução clínica favorável</li>
                      <li>Orientações de alta incluindo manejo da dor domiciliar</li>
                    </ul>
                  </div>

                  <p className="mt-4">
                    <strong>Enfermeira Responsável:</strong> Ana Paula Rodrigues - COREN-SP 234567
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
                    <li>
                      Sociedade Brasileira de Pediatria - Diretrizes para avaliação e tratamento da dor em pediatria
                    </li>
                    <li>Ministério da Saúde - Política Nacional de Atenção Integral à Saúde da Criança</li>
                    <li>COREN-SP - Parecer Técnico sobre avaliação da dor em crianças</li>
                    <li>
                      Conselho Nacional dos Direitos da Criança e do Adolescente - Direitos da criança hospitalizada
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Literatura Científica:</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 text-sm">
                    <li>
                      Bieri, D., Reeve, R. A., Champion, G. D., Addicoat, L., & Ziegler, J. B. (1990). The Faces Pain
                      Scale for the self-assessment of the severity of pain experienced by children: development,
                      initial validation, and preliminary investigation for ratio scale properties. Pain, 41(2),
                      139-150.
                    </li>
                    <li>
                      Hicks, C. L., von Baeyer, C. L., Spafford, P. A., van Korlaar, I., & Goodenough, B. (2001). The
                      Faces Pain Scale–Revised: toward a common metric in pediatric pain measurement. Pain, 93(2),
                      173-183.
                    </li>
                    <li>
                      Tomlinson, D., von Baeyer, C. L., Stinson, J. N., & Sung, L. (2010). A systematic review of faces
                      scales for the self-report of pain intensity in children. Pediatrics, 126(5), e1168-e1198.
                    </li>
                    <li>
                      Silva, F. C., & Thuler, L. C. S. (2008). Cross-cultural adaptation and translation of two pain
                      assessment tools in children and adolescents. Jornal de Pediatria, 84(4), 344-349.
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
