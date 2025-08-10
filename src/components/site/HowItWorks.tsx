import { Card, CardContent } from "@/components/ui/card";

const steps = [
  { title: "Preencha sua inscrição", desc: "Envie seus dados básicos no formulário." },
  { title: "Aguarde contato", desc: "Nossa equipe retornará com as próximas etapas." },
  { title: "Participe das turmas", desc: "Confirme sua vaga e comece sua jornada." },
];

const HowItWorks = () => {
  return (
    <section className="container mx-auto py-12 md:py-16">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Como funciona</h2>
      <div className="grid gap-4 md:grid-cols-3">
        {steps.map((s, i) => (
          <Card key={s.title}>
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-accent-foreground font-bold">{i + 1}</div>
                <div>
                  <h3 className="font-semibold">{s.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{s.desc}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
