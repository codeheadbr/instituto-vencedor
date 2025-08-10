import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border mt-20">
      <div className="container mx-auto py-10 grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="text-lg font-semibold mb-2">Instituto Vencedor</h3>
          <p className="text-sm text-muted-foreground">Educação, esporte e comunidade para transformar oportunidades em vitórias.</p>
        </div>
        <nav className="grid gap-2" aria-label="Links do rodapé">
          <a href="/#sobre" className="hover:opacity-90 transition-opacity">Sobre</a>
          <Link to="/inscricao" className="hover:opacity-90 transition-opacity">Inscrição</Link>
          <Link to="/aluno" className="hover:opacity-90 transition-opacity">Área do aluno</Link>
          <a href="#contato" className="hover:opacity-90 transition-opacity">Contato</a>
        </nav>
        <div className="flex items-center gap-4">
          <a href="#" aria-label="Instagram" className="hover:opacity-90 transition-opacity"><Instagram /></a>
          <a href="#" aria-label="Facebook" className="hover:opacity-90 transition-opacity"><Facebook /></a>
          <a href="mailto:contato@institutovencedor.org" aria-label="E-mail" className="hover:opacity-90 transition-opacity"><Mail /></a>
        </div>
      </div>
      <div className="border-t border-border py-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Instituto Vencedor. Todos os direitos reservados.
      </div>
    </footer>
  );
};

export default Footer;
