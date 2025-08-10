import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import { Helmet } from "react-helmet-async";

const schema = z.object({
  nome: z.string().min(2, "Informe o nome"),
  email: z.string().email("E-mail inválido"),
  cpf: z.string().min(11, "CPF inválido"),
  telefone: z.string().min(8, "Telefone inválido"),
  nomeResponsavel: z.string().min(2, "Informe o responsável"),
  telefoneResponsavel: z.string().min(8, "Telefone inválido"),
  escola: z.string().min(2, "Informe a escola"),
  serie: z.string().min(1, "Informe a série"),
  dataNascimento: z.string().min(10, "Data inválida (dd/mm/aaaa)"),
});

type FormData = z.infer<typeof schema>;

const Inscricao = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      const res = await fetch("/api/cadastrar-aluno", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Falha ao enviar");
      toast({ title: "Inscrição enviada", description: "Em breve entraremos em contato." });
      reset();
    } catch (e) {
      toast({ title: "Erro", description: "Não foi possível enviar sua inscrição.", variant: "destructive" as any });
    }
  };

  const canonical = typeof window !== 'undefined' ? window.location.origin + '/inscricao' : '/inscricao';

  return (
    <div>
      <Helmet>
        <title>Inscrição | Instituto Vencedor</title>
        <meta name="description" content="Formulário de inscrição para o Instituto Vencedor." />
        <link rel="canonical" href={canonical} />
      </Helmet>
      <Header />
      <main className="container mx-auto py-12">
        <h1 className="text-3xl font-bold mb-6">Inscrição</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-5 md:grid-cols-2">
          <div className="grid gap-2">
            <Label htmlFor="nome">Nome completo</Label>
            <Input id="nome" {...register("nome")} aria-invalid={!!errors.nome} />
            {errors.nome && <span className="text-sm text-destructive">{errors.nome.message}</span>}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">E-mail</Label>
            <Input id="email" type="email" {...register("email")} aria-invalid={!!errors.email} />
            {errors.email && <span className="text-sm text-destructive">{errors.email.message}</span>}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="cpf">CPF</Label>
            <Input id="cpf" {...register("cpf")} aria-invalid={!!errors.cpf} />
            {errors.cpf && <span className="text-sm text-destructive">{errors.cpf.message}</span>}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="telefone">Telefone</Label>
            <Input id="telefone" {...register("telefone")} aria-invalid={!!errors.telefone} />
            {errors.telefone && <span className="text-sm text-destructive">{errors.telefone.message}</span>}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="nomeResponsavel">Nome do responsável</Label>
            <Input id="nomeResponsavel" {...register("nomeResponsavel")} aria-invalid={!!errors.nomeResponsavel} />
            {errors.nomeResponsavel && <span className="text-sm text-destructive">{errors.nomeResponsavel.message}</span>}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="telefoneResponsavel">Telefone do responsável</Label>
            <Input id="telefoneResponsavel" {...register("telefoneResponsavel")} aria-invalid={!!errors.telefoneResponsavel} />
            {errors.telefoneResponsavel && <span className="text-sm text-destructive">{errors.telefoneResponsavel.message}</span>}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="escola">Escola</Label>
            <Input id="escola" {...register("escola")} aria-invalid={!!errors.escola} />
            {errors.escola && <span className="text-sm text-destructive">{errors.escola.message}</span>}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="serie">Série</Label>
            <Input id="serie" {...register("serie")} aria-invalid={!!errors.serie} />
            {errors.serie && <span className="text-sm text-destructive">{errors.serie.message}</span>}
          </div>
          <div className="grid gap-2 md:col-span-2">
            <Label htmlFor="dataNascimento">Data de nascimento (dd/mm/aaaa)</Label>
            <Input id="dataNascimento" placeholder="dd/mm/aaaa" {...register("dataNascimento")} aria-invalid={!!errors.dataNascimento} />
            {errors.dataNascimento && <span className="text-sm text-destructive">{errors.dataNascimento.message}</span>}
          </div>
          <div className="md:col-span-2 pt-2">
            <Button size="lg" disabled={isSubmitting} aria-label="Enviar inscrição">{isSubmitting ? "Enviando..." : "Enviar inscrição"}</Button>
          </div>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default Inscricao;
