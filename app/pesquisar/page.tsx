"use client"

import { useState, useMemo, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, X } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"

// Dados das escalas para busca
const scales = [
  // Escalas de Dor
  {
    id: "eva",
    name: "Escala Visual Analógica (EVA)",
    category: "dor",
    description: "Avaliação subjetiva da intensidade da dor através de linha visual",
    keywords: ["dor", "visual", "analógica", "eva"],
  },
  {
    id: "escala-numerica-dor",
    name: "Escala Numérica de Dor",
    category: "dor",
    description: "Avaliação da dor através de números de 0 a 10",
    keywords: ["dor", "numérica", "números", "0-10"],
  },
  {
    id: "wong-baker",
    name: "Escala de Faces de Wong-Baker",
    category: "dor",
    description: "Avaliação da dor através de faces expressivas para crianças",
    keywords: ["dor", "faces", "wong", "baker", "crianças", "pediátrica"],
  },
  {
    id: "flacc",
    name: "Escala FLACC",
    category: "dor",
    description: "Avaliação da dor em crianças através de comportamentos observáveis",
    keywords: ["dor", "flacc", "crianças", "comportamental", "pediátrica"],
  },
  {
    id: "faces-criancas",
    name: "Escala de Faces de Dor para Crianças",
    category: "dor",
    description: "Avaliação da dor pediátrica através de expressões faciais",
    keywords: ["dor", "faces", "crianças", "pediátrica", "expressões"],
  },
  {
    id: "cries",
    name: "Escala CRIES",
    category: "dor",
    description: "Avaliação da dor em neonatos e lactentes",
    keywords: ["dor", "cries", "neonatos", "lactentes", "bebês"],
  },
  {
    id: "oucher",
    name: "Escala de Oucher",
    category: "dor",
    description: "Avaliação da dor em crianças com componente visual e numérico",
    keywords: ["dor", "oucher", "crianças", "visual", "numérico"],
  },
  {
    id: "bps",
    name: "Behavioral Pain Scale (BPS)",
    category: "dor",
    description: "Avaliação da dor em pacientes críticos sedados",
    keywords: ["dor", "bps", "behavioral", "críticos", "sedados", "uti"],
  },
  {
    id: "cpot",
    name: "Critical-Care Pain Observation Tool (CPOT)",
    category: "dor",
    description: "Ferramenta de observação da dor em cuidados críticos",
    keywords: ["dor", "cpot", "críticos", "observação", "uti"],
  },

  // Escalas de Risco de Quedas
  {
    id: "morse",
    name: "Escala de Morse",
    category: "quedas",
    description: "Avaliação do risco de quedas em pacientes hospitalizados",
    keywords: ["quedas", "morse", "risco", "hospitalização"],
  },
  {
    id: "downton",
    name: "Escala de Downton",
    category: "quedas",
    description: "Identificação de fatores de risco para quedas",
    keywords: ["quedas", "downton", "risco", "fatores"],
  },
  {
    id: "hendrich",
    name: "Escala de Hendrich II",
    category: "quedas",
    description: "Avaliação multifatorial do risco de quedas",
    keywords: ["quedas", "hendrich", "risco", "multifatorial"],
  },

  // Escalas de Úlcera por Pressão
  {
    id: "braden",
    name: "Escala de Braden",
    category: "ulcera-pressao",
    description: "Avaliação do risco de desenvolvimento de úlceras por pressão",
    keywords: ["úlcera", "pressão", "braden", "risco", "lesão"],
  },
  {
    id: "norton",
    name: "Escala de Norton",
    category: "ulcera-pressao",
    description: "Avaliação do risco de lesões por pressão",
    keywords: ["úlcera", "pressão", "norton", "risco", "lesão"],
  },
  {
    id: "waterlow",
    name: "Escala de Waterlow",
    category: "ulcera-pressao",
    description: "Avaliação abrangente do risco de úlceras por pressão",
    keywords: ["úlcera", "pressão", "waterlow", "risco", "abrangente"],
  },
  {
    id: "braden-q",
    name: "Escala de Braden Q",
    category: "ulcera-pressao",
    description: "Avaliação do risco de úlceras por pressão em crianças",
    keywords: ["úlcera", "pressão", "braden", "crianças", "pediátrica"],
  },
  {
    id: "pusap",
    name: "Escala de PUSAP",
    category: "ulcera-pressao",
    description: "Avaliação do risco de úlceras por pressão em pediatria",
    keywords: ["úlcera", "pressão", "pusap", "pediatria", "crianças"],
  },

  // Escalas Neurológicas
  {
    id: "glasgow",
    name: "Escala de Coma de Glasgow",
    category: "neurologica",
    description: "Avaliação do nível de consciência",
    keywords: ["glasgow", "coma", "consciência", "neurológica"],
  },
  {
    id: "glasgow-pediatrica",
    name: "Escala de Glasgow Modificada para Crianças",
    category: "neurologica",
    description: "Avaliação neurológica adaptada para pediatria",
    keywords: ["glasgow", "crianças", "pediátrica", "neurológica", "consciência"],
  },
  {
    id: "ramsay",
    name: "Escala de Ramsay",
    category: "neurologica",
    description: "Avaliação do nível de sedação",
    keywords: ["ramsay", "sedação", "consciência"],
  },
  {
    id: "rass",
    name: "Escala de RASS",
    category: "neurologica",
    description: "Avaliação da agitação e sedação",
    keywords: ["rass", "agitação", "sedação", "richmond"],
  },
  {
    id: "hunt-hess",
    name: "Escala de Hunt e Hess",
    category: "neurologica",
    description: "Classificação da hemorragia subaracnóidea",
    keywords: ["hunt", "hess", "hemorragia", "subaracnóidea"],
  },

  // Escalas Funcionais
  {
    id: "katz",
    name: "Índice de Katz",
    category: "funcional",
    description: "Avaliação das atividades básicas de vida diária",
    keywords: ["katz", "funcional", "atividades", "vida diária", "independência"],
  },
  {
    id: "barthel",
    name: "Índice de Barthel",
    category: "funcional",
    description: "Medida de independência funcional",
    keywords: ["barthel", "funcional", "independência", "atividades"],
  },
  {
    id: "mif",
    name: "Medida de Independência Funcional (MIF)",
    category: "funcional",
    description: "Avaliação abrangente da capacidade funcional",
    keywords: ["mif", "independência", "funcional", "capacidade"],
  },

  // Outras Escalas
  {
    id: "man",
    name: "Mini Avaliação Nutricional (MAN)",
    category: "outras",
    description: "Avaliação do estado nutricional",
    keywords: ["nutricional", "man", "nutrição", "estado"],
  },
  {
    id: "edimburgo",
    name: "Escala de Edimburgo",
    category: "outras",
    description: "Avaliação da depressão pós-parto",
    keywords: ["edimburgo", "depressão", "pós-parto", "materna"],
  },
  {
    id: "borg",
    name: "Escala de Borg",
    category: "outras",
    description: "Avaliação da percepção subjetiva do esforço",
    keywords: ["borg", "esforço", "percepção", "exercício"],
  },
  {
    id: "tiss",
    name: "Escala de TISS",
    category: "outras",
    description: "Therapeutic Intervention Scoring System",
    keywords: ["tiss", "terapêutica", "intervenção", "uti"],
  },
  {
    id: "nyha",
    name: "Escala de NYHA",
    category: "outras",
    description: "Classificação funcional da insuficiência cardíaca",
    keywords: ["nyha", "cardíaca", "insuficiência", "funcional"],
  },
  {
    id: "apgar",
    name: "Escala de Apgar",
    category: "outras",
    description: "Avaliação da vitalidade do recém-nascido",
    keywords: ["apgar", "recém-nascido", "vitalidade", "neonatal"],
  },
  {
    id: "mrc",
    name: "Escala de Dispneia do Medical Research Council",
    category: "outras",
    description: "Avaliação da dispneia funcional",
    keywords: ["dispneia", "mrc", "respiratória", "funcional"],
  },
  {
    id: "aldrete",
    name: "Escala de Aldrete e Kroulik",
    category: "outras",
    description: "Avaliação da recuperação pós-anestésica",
    keywords: ["aldrete", "kroulik", "pós-anestésica", "recuperação"],
  },
]

const categories = [
  { value: "todas", label: "Todas as Categorias" },
  { value: "dor", label: "Escalas de Dor" },
  { value: "quedas", label: "Risco de Quedas" },
  { value: "ulcera-pressao", label: "Úlcera por Pressão" },
  { value: "neurologica", label: "Avaliação Neurológica" },
  { value: "funcional", label: "Avaliação Funcional" },
  { value: "outras", label: "Outras Escalas" },
]

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("todas")
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const queryParam = urlParams.get("q")
    if (queryParam) {
      setSearchTerm(queryParam)
    }
  }, [])

  const filteredScales = useMemo(() => {
    return scales.filter((scale) => {
      const matchesSearch =
        searchTerm === "" ||
        scale.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        scale.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        scale.keywords.some((keyword) => keyword.toLowerCase().includes(searchTerm.toLowerCase()))

      const matchesCategory = selectedCategory === "todas" || scale.category === selectedCategory

      return matchesSearch && matchesCategory
    })
  }, [searchTerm, selectedCategory])

  const clearFilters = () => {
    setSearchTerm("")
    setSelectedCategory("todas")
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Pesquisar Escalas</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Encontre rapidamente as escalas de avaliação por nome, categoria ou palavras-chave
            </p>
          </div>

          {/* Search and Filters */}
          <div className="max-w-4xl mx-auto mb-8 space-y-4">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Digite o nome da escala, categoria ou palavra-chave..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 h-12 text-lg"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-full sm:w-[250px]">
                    <SelectValue placeholder="Selecione uma categoria" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category.value} value={category.value}>
                        {category.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {(searchTerm || selectedCategory !== "todas") && (
                <Button variant="outline" onClick={clearFilters} className="w-full sm:w-auto bg-transparent">
                  <X className="h-4 w-4 mr-2" />
                  Limpar Filtros
                </Button>
              )}
            </div>
          </div>

          {/* Results */}
          <div className="max-w-6xl mx-auto">
            {/* Results Count */}
            <div className="mb-6">
              <p className="text-muted-foreground">
                {filteredScales.length === 0
                  ? "Nenhuma escala encontrada"
                  : `${filteredScales.length} escala${filteredScales.length !== 1 ? "s" : ""} encontrada${filteredScales.length !== 1 ? "s" : ""}`}
              </p>
            </div>

            {/* Results Grid */}
            {filteredScales.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredScales.map((scale) => (
                  <Card
                    key={scale.id}
                    className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between gap-2">
                        <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-2">
                          {scale.name}
                        </CardTitle>
                        <Badge variant="secondary" className="shrink-0">
                          {categories
                            .find((cat) => cat.value === scale.category)
                            ?.label.replace("Escalas de ", "")
                            .replace("Avaliação ", "")}
                        </Badge>
                      </div>
                      <CardDescription className="line-clamp-3">{scale.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button asChild variant="ghost" className="w-full justify-between group-hover:bg-primary/5">
                        <Link href={`/escalas/${scale.id}`}>
                          Ver Detalhes
                          <Search className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="mx-auto w-24 h-24 bg-muted rounded-full flex items-center justify-center mb-4">
                  <Search className="h-12 w-12 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Nenhuma escala encontrada</h3>
                <p className="text-muted-foreground mb-4">
                  Tente ajustar os termos de busca ou filtros para encontrar o que procura
                </p>
                <Button onClick={clearFilters} variant="outline">
                  Limpar Filtros
                </Button>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
