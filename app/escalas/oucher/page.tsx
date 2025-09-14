import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ImageIcon, ArrowLeft, FileText, AlertCircle, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function OucherScalePage() {
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
            <span>Escala de Oucher</span>
          </div>

          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-indigo-50 rounded-full">
                <ImageIcon className="h-8 w-8 text-indigo-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Escala de Oucher</h1>
            <div className="flex justify-center gap-2 mb-4">
              <Badge variant="secondary" className="bg-indigo-50 text-indigo-700">
                Avaliação Fotográfica da Dor
              </Badge>
              <Badge variant="outline">Crianças de 3 a 12 anos</Badge>
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
                <p className="text-muted-foreground">Escala de Oucher (Oucher Pain Scale)</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Finalidade e Objetivo:</h3>
                <p className="text-muted-foreground leading-relaxed">
                  A Escala de Oucher é um instrumento inovador de autoavaliação da dor desenvolvido especificamente para
                  crianças, utilizando fotografias reais de crianças expressando diferentes níveis de dor combinadas com
                  uma escala numérica vertical. Esta escala foi criada reconhecendo que as crianças podem ter
                  dificuldades para compreender conceitos abstratos de intensidade, mas conseguem relacionar-se
                  facilmente com imagens de outras crianças em situações similares. O instrumento apresenta duas versões
                  lado a lado: uma escala fotográfica mostrando seis fotografias de uma criança real expressando
                  diferentes níveis de dor, desde nenhuma dor até dor máxima, e uma escala numérica de 0 a 100 para
                  crianças que já desenvolveram habilidades numéricas adequadas. A Escala de Oucher é aplicada em
                  crianças de 3 a 12 anos de idade, sendo especialmente útil para aquelas que ainda não dominam
                  completamente conceitos numéricos abstratos ou que se beneficiam de representações visuais concretas.
                  A escala é indicada para avaliação da dor aguda e crônica em diversos contextos clínicos, incluindo
                  pós-operatório pediátrico, procedimentos médicos, emergências, dor relacionada a doenças crônicas e
                  acompanhamento ambulatorial. Sua utilização permite uma comunicação mais efetiva sobre a experiência
                  dolorosa, considerando as particularidades do desenvolvimento cognitivo infantil e facilitando a
                  implementação de intervenções analgésicas apropriadas. A escala também possui versões culturalmente
                  adaptadas, com fotografias de crianças de diferentes etnias, reconhecendo a importância da
                  identificação cultural na avaliação da dor pediátrica.
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
                A Escala de Oucher consiste em um pôster vertical que apresenta duas escalas paralelas: uma escala
                fotográfica à esquerda e uma escala numérica à direita. A escala fotográfica mostra seis fotografias
                coloridas de uma criança real, organizadas verticalmente em ordem crescente de intensidade de dor. As
                fotografias capturam expressões faciais autênticas de dor, desde uma expressão neutra e sorridente até
                expressões de sofrimento intenso. A escala numérica, posicionada ao lado direito, apresenta números de 0
                a 100 em intervalos de 10, permitindo que crianças com habilidades numéricas mais desenvolvidas
                quantifiquem sua dor de forma mais precisa.
              </p>

              <div className="space-y-6">
                <div className="bg-muted/30 p-6 rounded-lg">
                  <h3 className="font-semibold mb-4 text-center">Descrição das Fotografias (Escala Fotográfica):</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3 p-3 bg-white/50 rounded">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-2xl">
                        😊
                      </div>
                      <div>
                        <Badge variant="outline" className="mb-1">
                          Foto 1 (Base)
                        </Badge>
                        <p className="text-sm text-muted-foreground">
                          <strong>Sem dor:</strong> Criança com expressão facial neutra e relaxada, sorrindo levemente,
                          indicando ausência completa de dor ou desconforto.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-white/50 rounded">
                      <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center text-2xl">
                        🙂
                      </div>
                      <div>
                        <Badge variant="outline" className="mb-1">
                          Foto 2
                        </Badge>
                        <p className="text-sm text-muted-foreground">
                          <strong>Dor muito leve:</strong> Criança com expressão ligeiramente alterada, mas ainda
                          confortável, com mínimos sinais de desconforto.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-white/50 rounded">
                      <div className="w-12 h-12 bg-yellow-50 rounded-full flex items-center justify-center text-2xl">
                        😐
                      </div>
                      <div>
                        <Badge variant="outline" className="mb-1">
                          Foto 3
                        </Badge>
                        <p className="text-sm text-muted-foreground">
                          <strong>Dor leve:</strong> Criança com expressão de desconforto perceptível, sobrancelhas
                          ligeiramente franzidas, mas ainda controlável.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-white/50 rounded">
                      <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center text-2xl">
                        😟
                      </div>
                      <div>
                        <Badge variant="outline" className="mb-1">
                          Foto 4
                        </Badge>
                        <p className="text-sm text-muted-foreground">
                          <strong>Dor moderada:</strong> Criança com expressão de desconforto evidente, franzir da testa
                          mais pronunciado, sinais claros de dor.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-white/50 rounded">
                      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-2xl">
                        😣
                      </div>
                      <div>
                        <Badge variant="outline" className="mb-1">
                          Foto 5
                        </Badge>
                        <p className="text-sm text-muted-foreground">
                          <strong>Dor intensa:</strong> Criança com expressão de sofrimento significativo, olhos
                          fechados ou semicerrados, desconforto evidente.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-white/50 rounded">
                      <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-2xl">
                        😭
                      </div>
                      <div>
                        <Badge variant="outline" className="mb-1">
                          Foto 6 (Topo)
                        </Badge>
                        <p className="text-sm text-muted-foreground">
                          <strong>Dor máxima:</strong> Criança com expressão de sofrimento extremo, choro evidente,
                          máxima intensidade de dor possível.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Escala Numérica (0-100):</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    A escala numérica vertical apresenta números de 0 a 100, posicionados ao lado direito das
                    fotografias. O número 0 (na base) corresponde a "sem dor" e o número 100 (no topo) corresponde à
                    "pior dor possível". Esta escala é utilizada para crianças que já possuem compreensão numérica
                    adequada e conseguem quantificar sua experiência dolorosa de forma mais precisa.
                  </p>
                  <div className="bg-white/50 p-3 rounded">
                    <p className="text-sm font-medium mb-2">Correspondência Foto-Numérica:</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Foto 1 = 0 (sem dor)</li>
                      <li>• Foto 2 = 20 (dor muito leve)</li>
                      <li>• Foto 3 = 40 (dor leve)</li>
                      <li>• Foto 4 = 60 (dor moderada)</li>
                      <li>• Foto 5 = 80 (dor intensa)</li>
                      <li>• Foto 6 = 100 (dor máxima)</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Instruções para Aplicação:</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    A aplicação da Escala de Oucher deve ser feita de forma clara, permitindo que a criança escolha
                    entre a escala fotográfica ou numérica, dependendo de sua preferência e capacidade de compreensão. O
                    profissional deve explicar que as fotografias mostram crianças sentindo diferentes quantidades de
                    dor.
                  </p>
                  <div className="bg-white/50 p-3 rounded">
                    <p className="text-sm font-medium mb-2">Instrução padrão para a criança:</p>
                    <p className="text-sm italic text-muted-foreground">
                      "Esta é a Escala de Oucher. Ela mostra fotografias de crianças que estão sentindo diferentes
                      quantidades de dor. A criança na parte de baixo não está sentindo dor nenhuma. A criança no topo
                      está sentindo a pior dor possível. Aponte para a fotografia que mostra o quanto de dor você está
                      sentindo agora. Se você souber contar até 100, pode usar os números do lado direito para me dizer
                      o quanto dói."
                    </p>
                  </div>
                </div>

                <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                  <h3 className="font-semibold mb-2 text-amber-800">Versões Culturalmente Adaptadas:</h3>
                  <p className="text-sm text-amber-700 mb-2">
                    A Escala de Oucher possui versões com fotografias de crianças de diferentes etnias para melhor
                    identificação cultural:
                  </p>
                  <ul className="list-disc list-inside text-sm text-amber-700 space-y-1">
                    <li>Versão Caucasiana (original)</li>
                    <li>Versão Afro-americana</li>
                    <li>Versão Hispânica</li>
                    <li>Versões adaptadas para outras culturas conforme necessidade local</li>
                  </ul>
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
                    A pontuação da Escala de Oucher pode ser obtida de duas formas: através da escala fotográfica
                    (pontuação de 0 a 5, correspondente às seis fotografias) ou através da escala numérica (pontuação de
                    0 a 100). Para crianças que utilizam a escala fotográfica, a pontuação corresponde ao número da
                    fotografia escolhida (0 a 5). Para crianças que utilizam a escala numérica, a pontuação é o número
                    exato indicado pela criança (0 a 100). Para fins de padronização e comparação, as pontuações
                    fotográficas podem ser convertidas para a escala de 0 a 100 multiplicando-se por 20, ou para a
                    escala de 0 a 10 multiplicando-se por 2.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Interpretação das Pontuações:</h3>

                  <div className="mb-4">
                    <h4 className="font-medium mb-2">Escala Fotográfica (0-5):</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                        <div className="flex items-center gap-2 mb-2">
                          <CheckCircle className="h-5 w-5 text-green-600" />
                          <h4 className="font-semibold text-green-800">0 - 1: Sem Dor ou Dor Mínima</h4>
                        </div>
                        <p className="text-sm text-green-700">
                          A criança indica ausência de dor ou desconforto mínimo através da escolha das fotografias 1 ou
                          2. Mantém atividades normais para sua idade, não requer intervenções farmacológicas
                          específicas, podendo ser manejada com medidas de conforto não farmacológicas.
                        </p>
                      </div>

                      <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                        <div className="flex items-center gap-2 mb-2">
                          <AlertCircle className="h-5 w-5 text-yellow-600" />
                          <h4 className="font-semibold text-yellow-800">2 - 3: Dor Leve a Moderada</h4>
                        </div>
                        <p className="text-sm text-yellow-700">
                          A criança relata dor que causa desconforto perceptível através das fotografias 3 ou 4. Requer
                          atenção e implementação de medidas analgésicas apropriadas, combinadas com técnicas não
                          farmacológicas de alívio da dor.
                        </p>
                      </div>

                      <div className="p-4 bg-red-50 rounded-lg border border-red-200 md:col-span-2">
                        <div className="flex items-center gap-2 mb-2">
                          <AlertCircle className="h-5 w-5 text-red-600" />
                          <h4 className="font-semibold text-red-800">4 - 5: Dor Intensa a Severa</h4>
                        </div>
                        <p className="text-sm text-red-700">
                          A criança indica dor significativa através das fotografias 5 ou 6, que interfere
                          substancialmente em suas atividades e bem-estar. Requer intervenção analgésica imediata e
                          potente, avaliação médica e implementação de múltiplas estratégias de alívio da dor.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Escala Numérica (0-100):</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="p-3 bg-green-50 rounded border border-green-200">
                        <h5 className="font-medium text-green-800 mb-1">0 - 30: Dor Leve</h5>
                        <p className="text-xs text-green-700">
                          Dor mínima que não interfere significativamente nas atividades diárias da criança.
                        </p>
                      </div>
                      <div className="p-3 bg-yellow-50 rounded border border-yellow-200">
                        <h5 className="font-medium text-yellow-800 mb-1">31 - 70: Dor Moderada</h5>
                        <p className="text-xs text-yellow-700">
                          Dor que interfere parcialmente nas atividades e requer intervenção analgésica.
                        </p>
                      </div>
                      <div className="p-3 bg-red-50 rounded border border-red-200">
                        <h5 className="font-medium text-red-800 mb-1">71 - 100: Dor Severa</h5>
                        <p className="text-xs text-red-700">
                          Dor intensa que requer intervenção imediata e monitoramento contínuo.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
                  <h3 className="font-semibold mb-2 text-indigo-800">Considerações Especiais:</h3>
                  <ul className="list-disc list-inside text-sm text-indigo-700 space-y-1">
                    <li>Permitir que a criança escolha entre escala fotográfica ou numérica</li>
                    <li>Considerar identificação cultural com as fotografias apresentadas</li>
                    <li>Correlacionar com observações comportamentais e sinais vitais</li>
                    <li>Considerar fatores emocionais que podem influenciar a percepção</li>
                    <li>Reavaliar frequentemente, especialmente após intervenções</li>
                    <li>Documentar qual escala foi utilizada (fotográfica ou numérica)</li>
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
                    A aplicação da Escala de Oucher requer ambiente adequado e apresentação clara do instrumento. O
                    enfermeiro deve posicionar a escala de forma que a criança possa visualizar claramente todas as
                    fotografias e números, preferencialmente em altura adequada para a criança. É fundamental
                    estabelecer rapport com a criança antes da aplicação, explicando o procedimento de forma
                    tranquilizadora e apropriada para sua idade. A escolha entre escala fotográfica ou numérica deve ser
                    oferecida à criança, respeitando sua preferência e capacidade de compreensão.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Durante a aplicação, é importante dar tempo suficiente para que a criança observe todas as opções
                    disponíveis e faça sua escolha sem pressão. O profissional deve evitar influenciar a resposta
                    através de gestos, expressões faciais ou comentários direcionados. Para crianças que escolhem a
                    escala numérica, deve-se confirmar sua compreensão dos números e permitir que indiquem qualquer
                    valor entre 0 e 100, não apenas os números marcados na escala.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Cuidados Durante a Aplicação:</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Apresentar a escala em altura adequada para visualização da criança</li>
                    <li>Estabelecer ambiente calmo e privativo para a avaliação</li>
                    <li>Explicar claramente o significado das fotografias e números</li>
                    <li>Permitir que a criança escolha entre escala fotográfica ou numérica</li>
                    <li>Dar tempo adequado para observação e escolha sem pressão</li>
                    <li>Evitar influenciar a resposta através de gestos ou comentários</li>
                    <li>Confirmar a escolha da criança para garantir consistência</li>
                    <li>Considerar identificação cultural com as fotografias apresentadas</li>
                    <li>Correlacionar a autoavaliação com observações comportamentais</li>
                    <li>Documentar qual escala foi utilizada e observações contextuais</li>
                    <li>Reavaliar em intervalos apropriados após intervenções</li>
                    <li>Orientar pais/cuidadores sobre a importância da avaliação honesta</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Critérios para Escolha da Escala:</h3>
                  <div className="space-y-3">
                    <div className="bg-blue-50 p-3 rounded border border-blue-200">
                      <h4 className="font-medium text-blue-800 mb-1">Escala Fotográfica (recomendada para):</h4>
                      <ul className="text-sm text-blue-700 list-disc list-inside space-y-1">
                        <li>Crianças de 3 a 7 anos</li>
                        <li>Crianças com dificuldades de compreensão numérica</li>
                        <li>Crianças que preferem representações visuais</li>
                        <li>Situações onde a identificação com imagens é importante</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-3 rounded border border-green-200">
                      <h4 className="font-medium text-green-800 mb-1">Escala Numérica (recomendada para):</h4>
                      <ul className="text-sm text-green-700 list-disc list-inside space-y-1">
                        <li>Crianças de 8 a 12 anos com habilidades numéricas desenvolvidas</li>
                        <li>Crianças que preferem quantificação precisa</li>
                        <li>Situações que requerem maior precisão na avaliação</li>
                        <li>Acompanhamento longitudinal com medidas mais sensíveis</li>
                      </ul>
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
                    <strong>Data/Hora:</strong> 12/06/2024 - 15:45h
                  </p>
                  <p>
                    <strong>Paciente:</strong> R.S.L., 8 anos, sexo feminino, internada na pediatria para tratamento de
                    osteomielite em fêmur direito (5º dia de internação)
                  </p>

                  <div className="border-l-4 border-primary pl-4">
                    <p className="mb-2">
                      <strong>Avaliação da Dor - Escala de Oucher:</strong>
                    </p>
                    <p className="mb-2">
                      Criança acordada, acompanhada pela mãe. Aplicada Escala de Oucher conforme protocolo pediátrico.
                      Apresentada a escala em suporte adequado, posicionada na altura dos olhos da criança para
                      visualização clara de todas as fotografias e números.
                    </p>

                    <div className="bg-white/50 p-3 rounded mb-3">
                      <p className="mb-2">
                        <strong>Processo de Aplicação:</strong>
                      </p>
                      <p className="text-xs mb-2">
                        Expliquei à criança: "Esta é a Escala de Oucher. Ela mostra fotografias de crianças sentindo
                        diferentes quantidades de dor. A criança na parte de baixo não sente dor nenhuma, e a do topo
                        sente a pior dor possível. Você pode escolher uma fotografia ou usar os números do lado, o que
                        preferir."
                      </p>
                      <p className="text-xs mb-2">
                        A criança observou atentamente tanto as fotografias quanto os números por aproximadamente 1
                        minuto. Demonstrou compreensão numérica adequada e escolheu utilizar a escala numérica. Apontou
                        para o número 70 e disse: "Minha perna dói bastante, principalmente quando eu mexo. É mais ou
                        menos aqui." Confirmei a escolha e ela manteve a mesma resposta.
                      </p>
                    </div>

                    <p className="mb-2">
                      <strong>Resultado:</strong> Escala de Oucher = 70/100 (escala numérica - dor severa)
                    </p>
                    <p className="mb-2">
                      <strong>Observações complementares:</strong> Criança verbaliza dor localizada em região do fêmur
                      direito, exacerbada pelo movimento. Apresenta-se colaborativa durante a avaliação, mantém membro
                      inferior direito imobilizado, evita movimentação ativa. Refere que a dor "melhorou um pouco"
                      comparado aos primeiros dias, mas ainda é "muito forte". Mãe confirma que a filha tem dormido
                      melhor, mas ainda acorda durante a noite com dor.
                    </p>
                  </div>

                  <div className="border-l-4 border-accent pl-4">
                    <p className="mb-2">
                      <strong>Intervenções de Enfermagem Implementadas:</strong>
                    </p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Comunicado pediatra sobre pontuação elevada para reavaliação da analgesia</li>
                      <li>Administrado Tramadol 2mg/kg (32mg) EV + Paracetamol 15mg/kg (240mg) VO às 16:00h</li>
                      <li>Mantida imobilização do membro com tala gessada conforme prescrição ortopédica</li>
                      <li>Posicionamento confortável com elevação do membro afetado</li>
                      <li>Aplicadas técnicas de distração com jogos eletrônicos e livros</li>
                      <li>Estimuladas atividades no leito que não envolvam movimentação do membro</li>
                      <li>Orientações à mãe sobre sinais de piora da dor e importância da comunicação</li>
                      <li>Ambiente mantido calmo, com controle de ruídos e iluminação adequada</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-green-500 pl-4">
                    <p className="mb-2">
                      <strong>Reavaliação (19:30h):</strong>
                    </p>
                    <p className="mb-2">Reaplicada Escala de Oucher após 3h30min da medicação analgésica.</p>

                    <div className="bg-white/50 p-3 rounded mb-3">
                      <p className="mb-2">
                        <strong>Nova Avaliação:</strong>
                      </p>
                      <p className="text-xs mb-2">
                        Criança mais relaxada, brincando com tablet no leito. Ao apresentar novamente a Escala de
                        Oucher, escolheu continuar usando a escala numérica. Observou rapidamente e apontou para o
                        número 40, dizendo: "Agora está bem melhor, dói menos. Consigo mexer um pouquinho sem doer
                        tanto." Confirmada a escolha, manteve a mesma resposta.
                      </p>
                    </div>

                    <p className="mb-2">
                      <strong>Resultado:</strong> Escala de Oucher = 40/100 (escala numérica - dor moderada)
                    </p>
                    <p className="mb-2">
                      Criança apresenta melhora significativa da dor. Consegue movimentar-se no leito com maior
                      facilidade, aceita atividades lúdicas, alimenta-se adequadamente. Demonstra maior interação
                      social, conversando mais com a equipe e familiares. Mãe relata que a filha está "mais animada" e
                      pediu para assistir filme.
                    </p>
                  </div>

                  <div className="border-l-4 border-orange-500 pl-4">
                    <p className="mb-2">
                      <strong>Reavaliação (23:00h):</strong>
                    </p>
                    <p className="mb-2">Avaliação noturna de rotina.</p>
                    <p className="mb-2">
                      <strong>Resultado:</strong> Escala de Oucher = 50/100 (escala numérica - dor moderada)
                    </p>
                    <p className="mb-2">
                      Criança relata leve aumento da dor no período noturno. Escolheu o número 50, explicando: "Dói um
                      pouco mais agora porque estou cansada, mas não é como antes." Apresenta-se sonolenta, mas
                      cooperativa durante a avaliação. Consegue encontrar posição confortável para dormir.
                    </p>
                  </div>

                  <div className="border-l-4 border-blue-500 pl-4">
                    <p className="mb-2">
                      <strong>Condutas e Planejamento:</strong>
                    </p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Manter avaliação da dor através da Escala de Oucher a cada 6 horas e SOS</li>
                      <li>Administrar analgesia conforme prescrição quando pontuação ≥ 60</li>
                      <li>Continuar imobilização e cuidados ortopédicos conforme protocolo</li>
                      <li>Estimular atividades lúdicas adequadas que não comprometam o tratamento</li>
                      <li>Orientar criança sobre importância da comunicação honesta da dor</li>
                      <li>Implementar técnicas não farmacológicas de alívio da dor</li>
                      <li>Comunicar pediatra se pontuação persistir ≥ 70 após intervenções</li>
                      <li>Preparar para fisioterapia conforme evolução e liberação médica</li>
                      <li>Orientações de cuidados domiciliares para continuidade do tratamento</li>
                      <li>Apoio psicológico à criança e família durante o processo de recuperação</li>
                    </ul>
                  </div>

                  <p className="mt-4">
                    <strong>Enfermeira Responsável:</strong> Juliana Costa Santos - COREN-MG 567890
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
                    <li>COREN-SP - Parecer Técnico sobre instrumentos de avaliação da dor pediátrica</li>
                    <li>
                      Conselho Nacional dos Direitos da Criança e do Adolescente - Direitos da criança hospitalizada
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Literatura Científica:</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 text-sm">
                    <li>
                      Beyer, J. E., Denyes, M. J., & Villarruel, A. M. (1992). The creation, validation, and continuing
                      development of the Oucher: a measure of pain intensity in children. Journal of Pediatric Nursing,
                      7(5), 335-346.
                    </li>
                    <li>
                      Villarruel, A. M., & Denyes, M. J. (1991). Pain assessment in children: theoretical and empirical
                      validity. Advances in Nursing Science, 14(2), 32-41.
                    </li>
                    <li>
                      Beyer, J. E., & Knott, C. B. (1998). Construct validity estimation for the African-American and
                      Hispanic versions of the Oucher Scale. Journal of Pediatric Nursing, 13(1), 20-31.
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
