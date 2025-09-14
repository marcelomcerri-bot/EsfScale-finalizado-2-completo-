import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, FileText, Globe, Building, Users } from "lucide-react"

export default function ReferencesPage() {
  const referenceCategories = [
    {
      title: "Órgãos Regulamentadores",
      icon: Building,
      description: "Diretrizes e resoluções oficiais dos órgãos de classe",
      color: "bg-blue-50 text-blue-700 border-blue-200",
      references: [
        {
          title: "Conselho Federal de Enfermagem (COFEN)",
          description: "Resoluções e diretrizes para a prática de enfermagem no Brasil",
          url: "https://www.cofen.gov.br",
          type: "Órgão Oficial",
        },
        {
          title: "Conselhos Regionais de Enfermagem (COREN)",
          description: "Normas regionais e protocolos específicos por estado",
          url: "https://www.coren-sp.gov.br",
          type: "Órgão Regional",
        },
        {
          title: "Ministério da Saúde",
          description: "Protocolos clínicos e diretrizes terapêuticas nacionais",
          url: "https://www.gov.br/saude",
          type: "Órgão Federal",
        },
      ],
    },
    {
      title: "Literatura Científica",
      icon: BookOpen,
      description: "Artigos científicos e publicações acadêmicas validadas",
      color: "bg-green-50 text-green-700 border-green-200",
      references: [
        {
          title: "Revista Brasileira de Enfermagem (REBEn)",
          description: "Principal periódico científico de enfermagem do Brasil",
          url: "https://www.scielo.br/reben",
          type: "Periódico Científico",
        },
        {
          title: "Revista Latino-Americana de Enfermagem",
          description: "Publicações científicas em enfermagem para América Latina",
          url: "https://www.scielo.br/rlae",
          type: "Periódico Científico",
        },
        {
          title: "Acta Paulista de Enfermagem",
          description: "Revista científica da Escola Paulista de Enfermagem",
          url: "https://www.scielo.br/ape",
          type: "Periódico Científico",
        },
      ],
    },
    {
      title: "Bases de Dados Internacionais",
      icon: Globe,
      description: "Fontes internacionais de evidências científicas",
      color: "bg-purple-50 text-purple-700 border-purple-200",
      references: [
        {
          title: "PubMed/MEDLINE",
          description: "Base de dados biomédica da National Library of Medicine",
          url: "https://pubmed.ncbi.nlm.nih.gov",
          type: "Base de Dados",
        },
        {
          title: "Cochrane Library",
          description: "Revisões sistemáticas e meta-análises em saúde",
          url: "https://www.cochranelibrary.com",
          type: "Base de Dados",
        },
        {
          title: "CINAHL (Cumulative Index to Nursing and Allied Health Literature)",
          description: "Base especializada em enfermagem e ciências da saúde",
          url: "https://www.ebsco.com/products/research-databases/cinahl-database",
          type: "Base de Dados",
        },
      ],
    },
    {
      title: "Organizações Profissionais",
      icon: Users,
      description: "Associações e sociedades científicas de enfermagem",
      color: "bg-orange-50 text-orange-700 border-orange-200",
      references: [
        {
          title: "Associação Brasileira de Enfermagem (ABEn)",
          description: "Principal associação científica de enfermagem do Brasil",
          url: "https://www.abennacional.org.br",
          type: "Associação Científica",
        },
        {
          title: "International Council of Nurses (ICN)",
          description: "Conselho Internacional de Enfermeiros",
          url: "https://www.icn.ch",
          type: "Organização Internacional",
        },
        {
          title: "Sociedade Brasileira de Enfermeiros de Centro Cirúrgico (SOBECC)",
          description: "Sociedade especializada em enfermagem perioperatória",
          url: "https://www.sobecc.org.br",
          type: "Sociedade Especializada",
        },
      ],
    },
  ]

  const specificReferences = [
    {
      category: "Escalas de Dor",
      references: [
        "Huskisson, E. C. (1974). Measurement of pain. The Lancet, 304(7889), 1127-1131.",
        "Wong, D. L., & Baker, C. M. (1988). Pain in children: comparison of assessment scales. Pediatric Nursing, 14(1), 9-17.",
        "Merkel, S. I., Voepel-Lewis, T., Shayevitz, J. R., & Malviya, S. (1997). The FLACC: a behavioral scale for scoring postoperative pain in young children. Pediatric Nursing, 23(3), 293-297.",
        "Payen, J. F., Bru, O., Bosson, J. L., et al. (2001). Assessing pain in critically ill sedated patients by using a behavioral pain scale. Critical Care Medicine, 29(12), 2258-2263.",
      ],
    },
    {
      category: "Escalas de Risco de Quedas",
      references: [
        "Morse, J. M., Black, C., Oberle, K., & Donahue, P. (1989). A prospective study to identify the fall-prone patient. Social Science & Medicine, 28(1), 81-86.",
        "Downton, J. H. (1993). Falls in the elderly. London: Edward Arnold.",
        "Hendrich, A. L., Bender, P. S., & Nyhuis, A. (2003). Validation of the Hendrich II Fall Risk Model: a large concurrent case/control study of hospitalized patients. Applied Nursing Research, 16(1), 9-21.",
      ],
    },
    {
      category: "Escalas de Úlcera por Pressão",
      references: [
        "Braden, B., & Bergstrom, N. (1987). A conceptual schema for the study of the etiology of pressure sores. Rehabilitation Nursing, 12(1), 8-12.",
        "Norton, D., McLaren, R., & Exton-Smith, A. N. (1975). An investigation of geriatric nursing problems in hospital. Edinburgh: Churchill Livingstone.",
        "Waterlow, J. (1985). Pressure sores: a risk assessment card. Nursing Times, 81(48), 49-55.",
      ],
    },
    {
      category: "Escalas Neurológicas",
      references: [
        "Teasdale, G., & Jennett, B. (1974). Assessment of coma and impaired consciousness: a practical scale. The Lancet, 304(7872), 81-84.",
        "Ramsay, M. A., Savege, T. M., Simpson, B. R., & Goodwin, R. (1974). Controlled sedation with alphaxalone-alphadolone. British Medical Journal, 2(5920), 656-659.",
        "Sessler, C. N., Gosnell, M. S., Grap, M. J., et al. (2002). The Richmond Agitation-Sedation Scale: validity and reliability in adult intensive care unit patients. American Journal of Respiratory and Critical Care Medicine, 166(10), 1338-1344.",
      ],
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Referências Científicas</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Todas as escalas apresentadas no EnfScale são baseadas em evidências científicas sólidas e seguem as
              diretrizes oficiais dos órgãos regulamentadores da enfermagem no Brasil.
            </p>
          </div>

          {/* Reference Categories */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-center mb-8">Fontes de Referência</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {referenceCategories.map((category) => (
                <Card key={category.title} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${category.color}`}>
                        <category.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{category.title}</CardTitle>
                        <CardDescription>{category.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {category.references.map((ref, index) => (
                        <div key={index} className="border-l-2 border-primary/20 pl-4">
                          <div className="flex items-start justify-between gap-2">
                            <div className="flex-1">
                              <h4 className="font-medium text-sm">{ref.title}</h4>
                              <p className="text-xs text-muted-foreground mt-1">{ref.description}</p>
                            </div>
                            <Badge variant="outline" className="text-xs shrink-0">
                              {ref.type}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Specific References by Category */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-center mb-8">Referências Específicas por Categoria</h2>
            <div className="max-w-4xl mx-auto space-y-8">
              {specificReferences.map((section) => (
                <Card key={section.category}>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <FileText className="h-5 w-5 text-primary" />
                      <CardTitle className="text-xl">{section.category}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {section.references.map((reference, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                            <span className="text-xs font-semibold text-primary">{index + 1}</span>
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed">{reference}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Methodology Section */}
          <div className="mb-16">
            <Card className="max-w-4xl mx-auto bg-gradient-to-br from-primary/5 to-accent/5">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Metodologia de Seleção</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    A seleção das escalas incluídas no EnfScale seguiu critérios rigorosos de qualidade científica e
                    relevância clínica para a prática de enfermagem no Brasil. Foram considerados os seguintes aspectos:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-primary">Critérios de Inclusão:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Validação científica comprovada</li>
                        <li>• Uso estabelecido na prática clínica</li>
                        <li>• Recomendação por órgãos oficiais</li>
                        <li>• Aplicabilidade no contexto brasileiro</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-primary">Fontes Priorizadas:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Diretrizes do COFEN e COREN</li>
                        <li>• Protocolos do Ministério da Saúde</li>
                        <li>• Literatura científica indexada</li>
                        <li>• Consensos de especialistas</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Disclaimer */}
          <div className="text-center">
            <Card className="max-w-3xl mx-auto bg-muted/30">
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-4">Importante</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  As informações apresentadas no EnfScale têm caráter educativo e de referência científica. A aplicação
                  das escalas deve sempre considerar o contexto clínico específico, as diretrizes institucionais e o
                  julgamento clínico do profissional de enfermagem. Recomenda-se sempre consultar as fontes originais e
                  manter-se atualizado com as versões mais recentes das escalas e suas respectivas diretrizes de
                  aplicação.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
