import { useEffect, useState } from "react";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { getToken, setToken, clearToken } from "@/lib/auth";
import { Helmet } from "react-helmet-async";

interface MeResponse {
  nome: string;
  email: string;
  cpf?: string;
  telefone?: string;
  escola?: string;
  serie?: string;
  dataNascimento?: string;
}

const Aluno = () => {
  const [me, setMe] = useState<MeResponse | null>(null);
  const [telefone, setTelefone] = useState("");
  const [escola, setEscola] = useState("");

  useEffect(() => {
    const token = getToken();
    if (!token) {
      window.location.href = "/login";
      return;
    }
    (async () => {
      try {
        const res = await fetch("/api/me", { headers: { Authorization: `Bearer ${token}` } });
        if (res.status === 401) {
          clearToken();
          window.location.href = "/login";
          return;
        }
        const data: MeResponse = await res.json();
        setMe(data);
        setTelefone(data.telefone || "");
        setEscola(data.escola || "");
      } catch (e) {
        toast({ title: "Erro", description: "Não foi possível carregar seus dados.", variant: "destructive" as any });
      }
    })();
  }, []);

  const salvar = async () => {
    try {
      const token = getToken();
      const res = await fetch("/api/me", {
        method: "PUT",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify({ telefone, escola }),
      });
      if (!res.ok) throw new Error();
      toast({ title: "Dados atualizados" });
    } catch {
      toast({ title: "Erro", description: "Falha ao atualizar.", variant: "destructive" as any });
    }
  };

  const canonical = typeof window !== 'undefined' ? window.location.origin + '/aluno' : '/aluno';

  return (
    <div>
      <Helmet>
        <title>Área do Aluno | Instituto Vencedor</title>
        <meta name="description" content="Visualize e atualize seus dados." />
        <link rel="canonical" href={canonical} />
      </Helmet>
      <Header />
      <main className="container mx-auto py-12">
        <h1 className="text-3xl font-bold mb-6">Área do Aluno</h1>
        {!me ? (
          <p className="text-muted-foreground">Carregando...</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <div><span className="text-muted-foreground">Nome:</span> {me.nome}</div>
              <div><span className="text-muted-foreground">E-mail:</span> {me.email}</div>
              {me.cpf && <div><span className="text-muted-foreground">CPF:</span> {me.cpf}</div>}
              {me.serie && <div><span className="text-muted-foreground">Série:</span> {me.serie}</div>}
              {me.dataNascimento && <div><span className="text-muted-foreground">Nascimento:</span> {me.dataNascimento}</div>}
            </div>
            <div className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="telefone">Telefone</Label>
                <Input id="telefone" value={telefone} onChange={(e) => setTelefone(e.target.value)} />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="escola">Escola</Label>
                <Input id="escola" value={escola} onChange={(e) => setEscola(e.target.value)} />
              </div>
              <div>
                <Button onClick={salvar} size="lg">Salvar</Button>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Aluno;
