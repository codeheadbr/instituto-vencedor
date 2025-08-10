import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-instituto.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section id="inicio" className="relative">
      <div className="absolute inset-0" aria-hidden="true" style={{ background: "var(--gradient-hero)" }} />
      <div className="relative container mx-auto grid gap-8 md:grid-cols-2 items-center py-16 md:py-24">
        <div className="flex justify-center md:justify-start">
          <img src={logo} alt="Logo Instituto Vencedor" className="h-24 md:h-32 w-auto" loading="eager" />
        </div>
        <div>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">Transformando oportunidades em vitórias</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-prose">O Instituto Vencedor promove educação, esporte e comunidade para jovens, oferecendo oportunidades reais de desenvolvimento.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/inscricao"><Button size="xl">Inscreva-se</Button></Link>
            <Link to="/aluno"><Button variant="contrast" size="xl">Área do aluno</Button></Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
