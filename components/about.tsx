import { Code, Database, Smartphone, Cloud } from "lucide-react"

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
    icon: Cloud,
    title: "Cloud",
    description: "AWS Services, Arquitetura em Nuvem",
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
            Eniac, com previsão de conclusão em Dezembro de 2026. Tenho paixão por tecnologia, desenvolvimento de
            software e computação em nuvem.
          </p>
          <p>
            Atualmente, atuo como <span className="text-foreground font-medium">estagiário de TI na UPD8:</span>, onde
            acompanho projetos reais com foco em <span className="text-foreground font-medium">Cloud Computing</span>{" "}
            utilizando AWS. Tenho contato com serviços como EC2, S3 e IAM, além de conceitos de arquitetura em nuvem,
            escalabilidade e boas práticas de desenvolvimento.
          </p>
          <p>
            Possuo experiência com desenvolvimento web e banco de dados, além de conhecimentos em linguagens como
            Python, Java, JavaScript e PHP, utilizando ferramentas como Git e GitHub para versionamento. Busco evoluir
            para a área de arquitetura de soluções em cloud.
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
