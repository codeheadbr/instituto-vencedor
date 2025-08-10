import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FinalCTA = () => {
  return (
    <section className="container mx-auto py-12">
      <div className="rounded-xl bg-accent text-accent-foreground p-8 md:p-10 shadow" role="region" aria-label="Chamada final para inscrição">
        <div className="grid gap-4 md:grid-cols-2 md:items-center">
          <h2 className="text-2xl md:text-3xl font-bold">Garanta sua inscrição hoje</h2>
          <div className="md:justify-self-end">
            <Link to="/inscricao"><Button size="lg" className="bg-background text-foreground hover:bg-background/90">Inscreva-se</Button></Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
