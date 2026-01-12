import { Mail, Phone, MapPin, Send, Linkedin, Github } from "lucide-react"
import Link from "next/link"

export function Contact() {
  return (
    <section id="contato" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-2">05.</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Entre em Contato</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Estou em busca de novas oportunidades! Se você tem uma vaga de estágio ou posição júnior disponível, ficarei
            feliz em conversar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <Link
              href="mailto:judoca.enzo@gmail.com"
              className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors group"
            >
              <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="text-foreground font-medium">judoca.enzo@gmail.com</p>
              </div>
            </Link>

            <Link
              href="tel:+5511947278060"
              className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors group"
            >
              <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Telefone</p>
                <p className="text-foreground font-medium">(11) 94727-8060</p>
              </div>
            </Link>

            <div className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg">
              <div className="p-3 bg-primary/10 rounded-lg">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Localização</p>
                <p className="text-foreground font-medium">Vila Rio – Guarulhos/SP</p>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-8">
            <h3 className="font-semibold text-foreground mb-6">Redes Sociais</h3>
            <div className="space-y-4">
              <Link
                href="https://www.linkedin.com/in/enzodutra"
                target="_blank"
                className="flex items-center gap-4 p-4 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors group"
              >
                <Linkedin className="w-6 h-6 text-primary" />
                <div>
                  <p className="text-foreground font-medium">LinkedIn</p>
                  <p className="text-sm text-muted-foreground">linkedin.com/in/enzodutra</p>
                </div>
              </Link>

              <Link
                href="https://github.com/Enzo-Dutra"
                target="_blank"
                className="flex items-center gap-4 p-4 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors group"
              >
                <Github className="w-6 h-6 text-primary" />
                <div>
                  <p className="text-foreground font-medium">GitHub</p>
                  <p className="text-sm text-muted-foreground">github.com/Enzo-Dutra</p>
                </div>
              </Link>
            </div>

            <Link
              href="mailto:judoca.enzo@gmail.com"
              className="mt-8 w-full bg-primary text-primary-foreground py-3 rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              Enviar Email
            </Link>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-24 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Enzo Bezerra Dutra. Todos os direitos reservados.
          </p>
          <p className="text-muted-foreground/50 text-xs mt-2">Desenvolvido com Next.js e Tailwind CSS</p>
        </div>
      </div>
    </section>
  )
}
