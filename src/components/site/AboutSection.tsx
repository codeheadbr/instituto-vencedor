import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Trophy, Users } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="sobre" className="container mx-auto py-16 md:py-20">
      <div className="grid gap-8 md:grid-cols-2 items-start">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">Sobre o Instituto</h2>
          <p className="mt-4 text-muted-foreground max-w-prose">
            Nossa missão é formar cidadãos por meio da educação, do esporte e do fortalecimento da comunidade. Atendemos jovens e suas famílias com
            atividades educativas, esportivas e sociais que desenvolvem habilidades para a vida.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          <Card className="bg-card border-border">
            <CardContent className="pt-6 text-center">
              <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary"><GraduationCap /></div>
              <h3 className="font-semibold">Educação</h3>
            </CardContent>
          </Card>
          <Card className="bg-card border-border">
            <CardContent className="pt-6 text-center">
              <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary"><Trophy /></div>
              <h3 className="font-semibold">Esporte</h3>
            </CardContent>
          </Card>
          <Card className="bg-card border-border">
            <CardContent className="pt-6 text-center">
              <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary"><Users /></div>
              <h3 className="font-semibold">Comunidade</h3>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
