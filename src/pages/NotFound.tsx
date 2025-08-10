import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const NotFound = () => {
  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", window.location.pathname);
  }, []);

  const canonical = typeof window !== 'undefined' ? window.location.href : '/404';

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <Helmet>
        <title>Página não encontrada | Instituto Vencedor</title>
        <meta name="description" content="A página que você procura não foi encontrada." />
        <link rel="canonical" href={canonical} />
      </Helmet>
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">404</h1>
        <p className="text-lg text-muted-foreground mb-6">Oops! Página não encontrada</p>
        <Link to="/" className="underline hover:opacity-90">Voltar ao início</Link>
      </div>
    </div>
  );
};

export default NotFound;
