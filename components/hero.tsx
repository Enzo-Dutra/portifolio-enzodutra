import { Github, Linkedin, Mail, MapPin, ArrowDown } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <p className="text-primary font-mono text-sm mb-4">Olá, me chamo</p>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4 text-balance">Enzo Bezerra Dutra</h1>
          <h2 className="text-2xl md:text-3xl text-muted-foreground font-medium mb-6">Desenvolvedor de Sistemas</h2>
          <p className="text-muted-foreground leading-relaxed mb-8 max-w-lg">
            Busco oportunidade de estágio ou posição júnior na área de Informática. Desejo aplicar conhecimentos em
            lógica de programação, banco de dados e desenvolvimento mobile, contribuindo com soluções criativas.
          </p>

          <div className="flex items-center gap-2 text-muted-foreground mb-8">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">Guarulhos, SP - Brasil</span>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="mailto:judoca.enzo@gmail.com"
              className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              Contato
            </Link>
            <Link
              href="https://github.com/Enzo-Dutra"
              target="_blank"
              className="border border-border px-6 py-3 rounded-lg font-medium hover:bg-secondary transition-colors flex items-center gap-2"
            >
              <Github className="w-4 h-4" />
              GitHub
            </Link>
          </div>

          <div className="flex items-center gap-6 mt-12">
            <Link
              href="https://github.com/Enzo-Dutra"
              target="_blank"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-6 h-6" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/enzodutra"
              target="_blank"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </Link>
            <Link
              href="mailto:judoca.enzo@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-6 h-6" />
            </Link>
          </div>
        </div>

        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
              <Image
                src="/enzo.jpg"
                alt="Enzo Bezerra Dutra"
                width={280}
                height={280}
                className="rounded-full object-cover border-4 border-primary/20"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-card border border-border rounded-lg p-3 shadow-lg">
              <p className="text-xs text-muted-foreground">Disponível para</p>
              <p className="text-sm font-medium text-primary">Estágio</p>
            </div>
          </div>
        </div>
      </div>

      <Link
        href="#sobre"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
      >
        <ArrowDown className="w-6 h-6" />
      </Link>
    </section>
  )
}
