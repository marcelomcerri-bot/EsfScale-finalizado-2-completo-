import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Image
                src="/green-tree-logo.png"
                alt="EnfScale Logo"
                width={24}
                height={24}
                className="text-primary"
                priority
              />
              <span className="text-lg font-bold text-primary">EnfScale</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Ferramenta completa de referência para escalas de avaliação de enfermagem utilizadas no Brasil.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">Links Rápidos</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/categorias" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Categorias
              </Link>
              <Link href="/pesquisar" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Pesquisar Escalas
              </Link>
              <Link href="/sobre" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Sobre o Projeto
              </Link>
              <Link href="/referencias" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Referências
              </Link>
            </nav>
          </div>

          {/* Contact and Credits */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">Créditos</h3>
            <div className="text-sm text-muted-foreground space-y-2">
              <p>
                <strong>Site criado por:</strong>
              </p>
              <p>Marcelo Marques Cerri</p>
              <p>Beatriz Sodré dos Santos</p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
            {/* Updated year from 2024 to 2025 */}
            <p className="text-xs text-muted-foreground">© 2025 EnfScale. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
