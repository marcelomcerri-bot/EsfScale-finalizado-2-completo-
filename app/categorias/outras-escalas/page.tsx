import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Stethoscope, ChevronRight, Activity, ArrowLeft, Target, Zap, Shield, Heart, Baby, Users } from "lucide-react"
import Link from "next/link"

export default function OutrasEscalasPage() {
  const specializedScales = [
    {
      id: "mini-avaliacao-nutricional",
      name: "Mini Avaliação Nutricional",
      englishName: "Mini Nutritional Assessment (MNA)",
      description:
        "Ferramenta de triagem e avaliação nutricional desenvolvida especificamente para idosos, permitindo identificar desnutrição ou risco nutricional através de medidas antropométricas, avaliação global, questões dietéticas e avaliação subjetiva.",
      population: "Idosos",
      context: "Avaliação Nutricional",
      scoring: "0-30 pontos",
      interpretation: "Normal (24-30), Risco (17-23.5), Desnutrição (<17)",
      clinicalApplication:
        "Triagem nutricional em idosos institucionalizados e ambulatoriais, identificação precoce de risco nutricional, monitoramento da eficácia de intervenções nutricionais.",
      nursingEvolution:
        "Paciente idoso de 78 anos apresentou MNA de 16 pontos, indicando desnutrição. Implementadas intervenções nutricionais com suplementação proteica e acompanhamento dietético. Reavaliação em 30 dias demonstrou melhora para 20 pontos.",
      icon: Users,
      href: "/escalas/mini-avaliacao-nutricional",
    },
    {
      id: "escala-edimburgo",
      name: "Escala de Edimburgo",
      englishName: "Edinburgh Postnatal Depression Scale (EPDS)",
      description:
        "Instrumento de rastreamento para depressão pós-parto, composto por dez questões que avaliam sintomas depressivos nas últimas duas semanas, sendo amplamente utilizado para identificação precoce de depressão puerperal.",
      population: "Puérperas",
      context: "Saúde Mental Materna",
      scoring: "0-30 pontos",
      interpretation: "≥10 pontos indica risco de depressão pós-parto",
      clinicalApplication:
        "Rastreamento de depressão pós-parto, identificação precoce de transtornos do humor no puerpério, orientação para encaminhamento especializado.",
      nursingEvolution:
        "Puérpera de 25 anos, 15 dias pós-parto, apresentou EPDS de 14 pontos. Identificados sintomas de tristeza, ansiedade e dificuldade de concentração. Encaminhada para acompanhamento psicológico e implementado plano de cuidados com apoio familiar.",
      icon: Heart,
      href: "/escalas/escala-edimburgo",
    },
    {
      id: "escala-borg",
      name: "Escala de Borg",
      englishName: "Borg Rating of Perceived Exertion Scale",
      description:
        "Escala subjetiva para avaliação da percepção de esforço durante atividade física, permitindo monitorar a intensidade do exercício e orientar prescrições de atividade física seguras e eficazes.",
      population: "Adultos em atividade física",
      context: "Avaliação de Esforço",
      scoring: "6-20 pontos (Escala original) ou 0-10 pontos (Escala modificada)",
      interpretation: "6-9: Muito leve, 10-12: Leve, 13-14: Moderado, 15-17: Intenso, 18-20: Muito intenso",
      clinicalApplication:
        "Prescrição de exercícios em reabilitação cardíaca, monitoramento de intensidade em programas de atividade física, avaliação de tolerância ao esforço.",
      nursingEvolution:
        "Paciente em reabilitação cardíaca iniciou exercícios com Borg 11 (leve). Progressão gradual permitiu alcançar Borg 13-14 (moderado) após 4 semanas, demonstrando melhora da capacidade funcional.",
      icon: Activity,
      href: "/escalas/escala-borg",
    },
    {
      id: "escala-nyha",
      name: "Escala de NYHA",
      englishName: "New York Heart Association Functional Classification",
      description:
        "Classificação funcional para insuficiência cardíaca que categoriza pacientes com base na limitação de atividade física causada por sintomas cardíacos, sendo fundamental para estratificação de risco e orientação terapêutica.",
      population: "Pacientes cardiopatas",
      context: "Função Cardíaca",
      scoring: "Classe I a IV",
      interpretation: "I: Sem limitação, II: Limitação leve, III: Limitação moderada, IV: Limitação severa",
      clinicalApplication:
        "Estratificação de risco em insuficiência cardíaca, orientação terapêutica, monitoramento da progressão da doença, indicação para procedimentos invasivos.",
      nursingEvolution:
        "Paciente com insuficiência cardíaca apresentava NYHA III com dispneia aos pequenos esforços. Após otimização medicamentosa e orientações de autocuidado, evoluiu para NYHA II em 3 meses.",
      icon: Heart,
      href: "/escalas/escala-nyha",
    },
    {
      id: "escala-apgar",
      name: "Escala de Apgar",
      englishName: "Apgar Score",
      description:
        "Método padronizado para avaliação rápida da condição do recém-nascido imediatamente após o nascimento, avaliando cinco parâmetros vitais: frequência cardíaca, esforço respiratório, tônus muscular, irritabilidade reflexa e cor da pele.",
      population: "Recém-nascidos",
      context: "Avaliação Neonatal",
      scoring: "0-10 pontos (0-2 pontos por parâmetro)",
      interpretation: "8-10: Excelente, 4-7: Moderadamente deprimido, 0-3: Severamente deprimido",
      clinicalApplication:
        "Avaliação imediata da vitalidade neonatal, identificação de necessidade de reanimação, documentação da transição fetal-neonatal.",
      nursingEvolution:
        "RN a termo apresentou Apgar 7 no 1º minuto (FC>100, respiração irregular, tônus diminuído) e 9 no 5º minuto após aspiração e estímulo tátil, demonstrando boa adaptação neonatal.",
      icon: Baby,
      href: "/escalas/escala-apgar",
    },
    {
      id: "escala-aldrete-kroulik",
      name: "Escala de Aldrete e Kroulik",
      englishName: "Aldrete Post-Anesthetic Recovery Score",
      description:
        "Escala utilizada para avaliação da recuperação pós-anestésica, avaliando atividade motora, respiração, circulação, consciência e saturação de oxigênio para determinar quando o paciente está apto para alta da sala de recuperação.",
      population: "Pacientes pós-cirúrgicos",
      context: "Recuperação Pós-Anestésica",
      scoring: "0-10 pontos (0-2 pontos por parâmetro)",
      interpretation: "≥9 pontos: Apto para alta da sala de recuperação",
      clinicalApplication:
        "Avaliação sistemática da recuperação anestésica, critério para alta da sala de recuperação, identificação de complicações pós-operatórias imediatas.",
      nursingEvolution:
        "Paciente pós-cirurgia abdominal apresentou Aldrete 8 na admissão da recuperação. Após 2 horas, atingiu pontuação 10, sendo liberado para enfermaria com sinais vitais estáveis.",
      icon: Activity,
      href: "/escalas/escala-aldrete-kroulik",
    },
  ]

  const contextGroups = [
    {
      title: "Avaliação Nutricional e Metabólica",
      description: "Escalas para avaliação do estado nutricional e metabólico",
      scales: specializedScales.filter((scale) => scale.context.includes("Nutricional")),
      gradient: "from-green-50 to-emerald-50",
      iconColor: "text-green-600",
      borderColor: "border-green-200",
    },
    {
      title: "Saúde Mental e Psicossocial",
      description: "Instrumentos para avaliação de aspectos psicológicos e sociais",
      scales: specializedScales.filter((scale) => scale.context.includes("Mental")),
      gradient: "from-purple-50 to-indigo-50",
      iconColor: "text-purple-600",
      borderColor: "border-purple-200",
    },
    {
      title: "Avaliação Funcional e Física",
      description: "Ferramentas para avaliação da capacidade funcional e física",
      scales: specializedScales.filter(
        (scale) => scale.context.includes("Esforço") || scale.context.includes("Cardíaca"),
      ),
      gradient: "from-blue-50 to-cyan-50",
      iconColor: "text-blue-600",
      borderColor: "border-blue-200",
    },
    {
      title: "Cuidados Perioperatórios e Neonatais",
      description: "Escalas para avaliação em contextos perioperatórios e neonatais",
      scales: specializedScales.filter(
        (scale) => scale.context.includes("Neonatal") || scale.context.includes("Anestésica"),
      ),
      gradient: "from-orange-50 to-red-50",
      iconColor: "text-orange-600",
      borderColor: "border-orange-200",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Button asChild variant="ghost" className="mb-4 -ml-4">
              <Link href="/categorias">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar às Categorias
              </Link>
            </Button>
          </div>

          <div className="text-center mb-16 animate-fade-in">
            <div className="flex justify-center mb-6">
              <div className="p-6 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl border-2 border-purple-200">
                <Stethoscope className="h-12 w-12 text-purple-600" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Outras Escalas Especializadas</h1>
            <p className="text-xl text-muted-foreground max-w-5xl mx-auto leading-relaxed">
              Esta categoria abrange escalas especializadas utilizadas em contextos específicos da prática de
              enfermagem, incluindo avaliação nutricional, saúde mental materna, capacidade funcional, avaliação
              neonatal e recuperação pós-anestésica. Estas ferramentas são fundamentais para uma abordagem
              multidimensional do cuidado, permitindo avaliações precisas em diferentes populações e contextos clínicos.
              A utilização adequada destas escalas contribui para a integralidade do cuidado e a identificação precoce
              de riscos e necessidades específicas.
            </p>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12 animate-slide-up">Escalas por Área de Aplicação</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {contextGroups.map((group, index) => (
                <Card
                  key={group.title}
                  className={`hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border-2 ${group.borderColor} bg-gradient-to-br ${group.gradient} animate-scale-in`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl">{group.title}</CardTitle>
                      <Badge variant="secondary" className="bg-white/80 text-gray-700 font-semibold">
                        {group.scales.length} escalas
                      </Badge>
                    </div>
                    <CardDescription className="text-base text-gray-600">{group.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {group.scales.map((scale) => (
                        <div
                          key={scale.id}
                          className="flex items-center gap-3 p-4 rounded-xl bg-white/60 hover:bg-white/80 transition-all duration-300 group/item"
                        >
                          <scale.icon className="h-5 w-5 text-primary shrink-0 group-hover/item:scale-110 transition-transform" />
                          <div className="flex-1 min-w-0">
                            <h4 className="font-medium text-sm group-hover/item:text-primary transition-colors">
                              {scale.name}
                            </h4>
                            <p className="text-xs text-muted-foreground">{scale.population}</p>
                          </div>
                          <Button
                            asChild
                            variant="ghost"
                            size="sm"
                            className="opacity-0 group-hover/item:opacity-100 transition-opacity"
                          >
                            <Link href={scale.href}>
                              <ChevronRight className="h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12 animate-slide-up">Todas as Escalas Especializadas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {specializedScales.map((scale, index) => (
                <Card
                  key={scale.id}
                  className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-indigo-50 animate-scale-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <CardHeader>
                    <div className="flex items-start gap-3">
                      <div className="p-3 bg-white/80 rounded-xl shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <scale.icon className="h-6 w-6 text-purple-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300 line-clamp-2">
                          {scale.name}
                        </CardTitle>
                        <p className="text-xs text-muted-foreground mb-1">{scale.englishName}</p>
                        <Badge variant="outline" className="mt-2 text-xs bg-white/60">
                          {scale.population}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm leading-relaxed mb-4 line-clamp-3 text-gray-600">
                      {scale.description}
                    </CardDescription>
                    <div className="space-y-2 mb-6">
                      <div className="flex justify-between text-xs">
                        <span className="font-medium text-gray-700">Pontuação:</span>
                        <span className="text-gray-600">{scale.scoring}</span>
                      </div>
                      <div className="text-xs">
                        <span className="font-medium text-gray-700">Interpretação:</span>
                        <p className="text-gray-600 mt-1 line-clamp-2">{scale.interpretation}</p>
                      </div>
                    </div>
                    <Button asChild className="w-full shadow-md hover:shadow-lg transition-all duration-300">
                      <Link href={scale.href}>
                        Ver Detalhes Completos
                        <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="text-center animate-slide-up">
            <Card className="max-w-5xl mx-auto bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-primary/10">
              <CardContent className="pt-12 pb-12">
                <h3 className="text-3xl font-bold mb-6">Importância das Escalas Especializadas</h3>
                <p className="text-muted-foreground leading-relaxed mb-10 text-lg">
                  As escalas especializadas representam ferramentas fundamentais para avaliações específicas em
                  diferentes contextos clínicos e populações. Cada instrumento foi desenvolvido para atender
                  necessidades particulares da prática assistencial, fornecendo medidas objetivas e padronizadas para
                  condições ou situações que requerem avaliação especializada. A utilização adequada dessas escalas
                  permite identificação precoce de riscos, monitoramento de condições específicas, orientação de
                  intervenções terapêuticas e avaliação de resultados, contribuindo significativamente para a qualidade
                  e segurança do cuidado prestado.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Target className="h-10 w-10 text-primary" />
                    </div>
                    <h4 className="font-semibold text-lg mb-2">Precisão Diagnóstica</h4>
                    <p className="text-muted-foreground">Avaliação objetiva e padronizada</p>
                  </div>
                  <div className="text-center">
                    <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Zap className="h-10 w-10 text-primary" />
                    </div>
                    <h4 className="font-semibold text-lg mb-2">Tomada de Decisão</h4>
                    <p className="text-muted-foreground">Orientação clínica baseada em dados</p>
                  </div>
                  <div className="text-center">
                    <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Shield className="h-10 w-10 text-primary" />
                    </div>
                    <h4 className="font-semibold text-lg mb-2">Segurança Assistencial</h4>
                    <p className="text-muted-foreground">Prevenção de eventos adversos</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
