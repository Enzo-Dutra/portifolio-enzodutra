export function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        
        <p className="text-primary font-mono text-sm mb-2 text-center">04.</p>
        
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
          Certificações
        </h2>

        <div className="bg-card border border-border rounded-xl p-6 transition flex items-center gap-6 hover:shadow-xl hover:-translate-y-1">
          <img
            src="/aws.png"
            alt="AWS Cloud Practitioner"
            className="w-20 h-20 object-contain drop-shadow-md"
          />

          <div>
            <h3 className="text-xl font-semibold text-foreground">
              AWS Certified Cloud Practitioner
            </h3>

            <p className="text-muted-foreground mt-1">
              Amazon Web Services • 2025
            </p>

            <p className="text-muted-foreground text-sm mt-3 max-w-xl">
              Certificação que valida conhecimentos fundamentais em cloud,
              incluindo serviços AWS, arquitetura básica e boas práticas.
            </p>

            <a
            href="https://www.credly.com/badges/1c17e9b4-77fb-4936-8143-88e3dd53b269/public_url"
            className="inline-block mt-4 text-sm text-primary hover:underline">
                 Ver credencial →
            </a>
          </div>

        </div>

      </div>
    </section>
  )
}