import { Code, Database, Smartphone, Users } from "lucide-react"

const highlights = [
  {
    icon: Code,
    title: "Desenvolvimento Web",
    description: "HTML, CSS, JavaScript, PHP",
  },
  {
    icon: Smartphone,
    title: "Mobile",
    description: "Android Studio, Java",
  },
  {
    icon: Database,
    title: "Banco de Dados",
    description: "MySQL, Modelagem UML",
  },
  {
    icon: Users,
    title: "Metodologias",
    description: "Scrum, Kanban, Sprints",
  },
]

export function About() {
  return (
    <section id="sobre" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-primary font-mono text-sm mb-2">01.</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Sobre Mim</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Sou estudante de <span className="text-foreground font-medium">Técnico em Informática</span> no Colégio
                Eniac, com previsão de conclusão em Dezembro de 2026. Tenho paixão por tecnologia e desenvolvimento de
                software.
              </p>
              <p>
                Busco aplicar meus conhecimentos em{" "}
                <span className="text-foreground font-medium">lógica de programação</span>, banco de dados e
                desenvolvimento mobile, contribuindo com soluções criativas e evoluindo tecnicamente em um ambiente
                desafiador.
              </p>
              <p>
                Possuo conhecimentos em diversas linguagens de programação como Python, Java, JavaScript e PHP, além de
                experiência com ferramentas de versionamento como Git e GitHub.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors"
              >
                <item.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
