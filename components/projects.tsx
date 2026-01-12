import { ExternalLink, Github, Folder } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    title: "EscovAção",
    description:
      "Aplicativo desenvolvido em Android Studio com Java, focado na educação de saúde bucal das crianças em um app gamificado!",
    tags: ["Java", "Android Studio", "XML"],
    image: "/escovacao.png",
    github: "https://github.com/Enzo-Dutra/EscovAcao",
  },
  {
    title: "PagVan",
    description: "Sistema web completo com foco em ajudar os motoristas de Van Escolar do Brasil a gerenciar seus alunos de forma tecnológica e autonoma.",
    tags: ["PHP", "MySQL", "HTML", "CSS"],
    image: "/pagvan.png",
    github: "https://github.com/Enzo-Dutra/PagVan",
  },
  {
    title: "Portifólio",
    description: "Meu portifólio completamente personalizado",
    tags: ["Python", "Automação", "Data"],
    image: "/portifolio.png",
    github: "https://github.com/Enzo-Dutra",
  },
]

export function Projects() {
  return (
    <section id="projetos" className="py-24 px-6 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-2">04.</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Projetos</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Alguns projetos desenvolvidos durante meus estudos. Você pode substituir as imagens pelos seus próprios
            projetos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg overflow-hidden group hover:border-primary/50 hover:scale-105 hover:-translate-y-2 transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-primary/20"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <Link
                    href={project.github}
                    target="_blank"
                    className="p-2 bg-card rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </Link>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Folder className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold text-foreground">{project.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="https://github.com/Enzo-Dutra"
            target="_blank"
            className="inline-flex items-center gap-2 text-primary hover:text-foreground transition-colors font-medium"
          >
            Ver mais no GitHub
            <ExternalLink className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
