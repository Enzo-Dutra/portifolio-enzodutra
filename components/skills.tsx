const skills = {
  linguagens: [
    { name: "Python", level: 75 },
    { name: "Java", level: 70 },
    { name: "JavaScript", level: 65 },
    { name: "PHP", level: 60 },
  ],
  webMobile: [
    { name: "HTML", level: 85 },
    { name: "CSS", level: 80 },
    { name: "Android Studio", level: 65 },
  ],
  ferramentas: [
    { name: "Git/GitHub", level: 70 },
    { name: "MySQL", level: 75 },
    { name: "UML", level: 60 },
  ],
  outros: [
    { name: "Google Workspace", level: 90 },
    { name: "Microsoft Office", level: 85 },
    { name: "Scrum/Kanban", level: 70 },
    { name: "UX/UI (noções)", level: 50 },
  ],
}

export function Skills() {
  return (
    <section id="habilidades" className="py-24 px-6 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-2">02.</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Habilidades Técnicas</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <SkillCategory title="Linguagens" skills={skills.linguagens} />
          <SkillCategory title="Web & Mobile" skills={skills.webMobile} />
          <SkillCategory title="Ferramentas" skills={skills.ferramentas} />
          <SkillCategory title="Outros" skills={skills.outros} />
        </div>
      </div>
    </section>
  )
}

function SkillCategory({ title, skills }: { title: string; skills: { name: string; level: number }[] }) {
  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <h3 className="font-semibold text-foreground mb-6 text-lg">{title}</h3>
      <div className="space-y-4">
        {skills.map((skill) => (
          <div key={skill.name}>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-muted-foreground">{skill.name}</span>
              <span className="text-primary font-mono">{skill.level}%</span>
            </div>
            <div className="h-2 bg-secondary rounded-full overflow-hidden">
              <div
                className="h-full bg-primary rounded-full transition-all duration-1000"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
