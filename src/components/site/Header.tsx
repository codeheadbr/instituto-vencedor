import { Link } from "react-router-dom";
import logo from "@/assets/logo-instituto.png";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-3">
        <div className="flex items-center gap-3">
          <Link to="/" aria-label="Ir para a página inicial">
            <img src={logo} alt="Logo Instituto Vencedor" className="h-10 w-auto" loading="eager" />
          </Link>
          <span className="sr-only">Instituto Vencedor</span>
        </div>
        <nav aria-label="Navegação principal" className="hidden md:flex items-center gap-6">
          <a href="/#inicio" className="hover:opacity-90 transition-opacity">Início</a>
          <a href="/#sobre" className="hover:opacity-90 transition-opacity">Sobre</a>
          <Link to="/inscricao" className="hover:opacity-90 transition-opacity">Inscrição</Link>
          <Link to="/aluno" className="hover:opacity-90 transition-opacity">Área do Aluno</Link>
        </nav>
        <div className="hidden md:block">
          <Link to="/inscricao">
            <Button size="lg">Inscreva-se</Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
