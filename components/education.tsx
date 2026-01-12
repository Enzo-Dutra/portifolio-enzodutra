import { GraduationCap, Award, Languages } from "lucide-react"

const courses = [
  {
    title: "BootCamp Kafnet - Deluge Script",
    institution: "Eniac / Kafnet",
    duration: "10h",
    date: "Abril/2025",
  },
  {
    title: "Trilha - Linguagem de Programação Python",
    institution: "Fundação Bradesco",
    duration: "53h",
    date: "Julho/2024",
  },
]

export function Education() {
  return (
    <section id="formacao" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-2">03.</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Formação</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Academic Formation */}
          <div className="md:col-span-2">
            <div className="bg-card border border-border rounded-lg p-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Técnico em Informática Integrado ao Ensino Médio
                  </h3>
                  <p className="text-primary font-medium mb-2">Colégio Eniac - Guarulhos/SP</p>
                  <p className="text-muted-foreground text-sm">Conclusão prevista: Dezembro/2026</p>
                </div>
              </div>
            </div>

            {/* Courses */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                Cursos Complementares
              </h3>
              <div className="space-y-4">
                {courses.map((course) => (
                  <div
                    key={course.title}
                    className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors"
                  >
                    <h4 className="font-semibold text-foreground mb-1">{course.title}</h4>
                    <p className="text-primary text-sm mb-2">{course.institution}</p>
                    <div className="flex gap-4 text-sm text-muted-foreground">
                      <span>{course.duration}</span>
                      <span>•</span>
                      <span>{course.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Languages */}
          <div>
            <div className="bg-card border border-border rounded-lg p-8 h-fit">
              <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
                <Languages className="w-5 h-5 text-primary" />
                Idiomas
              </h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-foreground font-medium">Português</span>
                    <span className="text-primary text-sm">Nativo</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full w-full" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-foreground font-medium">Inglês</span>
                    <span className="text-primary text-sm">Intermediário</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full w-[60%]" />
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">Leitura e Escrita técnica</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
