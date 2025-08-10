import { useState } from "react";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { setToken } from "@/lib/auth";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);

  const requestCode = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/login/request-code", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email }) });
      if (!res.ok) throw new Error();
      toast({ title: "Código enviado", description: "Verifique seu e-mail." });
    } catch {
      toast({ title: "Erro", description: "Não foi possível enviar o código.", variant: "destructive" as any });
    } finally {
      setLoading(false);
    }
  };

  const submit = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/login", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email, code }) });
      if (!res.ok) throw new Error();
      const data = await res.json();
      if (data?.token) {
        setToken(data.token);
        window.location.href = "/aluno";
      } else {
        throw new Error();
      }
    } catch {
      toast({ title: "Erro", description: "Login inválido.", variant: "destructive" as any });
    } finally {
      setLoading(false);
    }
  };

  const canonical = typeof window !== 'undefined' ? window.location.origin + '/login' : '/login';

  return (
    <div>
      <Helmet>
        <title>Login | Instituto Vencedor</title>
        <meta name="description" content="Acesse a área do aluno via código de 6 dígitos enviado por e-mail." />
        <link rel="canonical" href={canonical} />
      </Helmet>
      <Header />
      <main className="container mx-auto py-12">
        <h1 className="text-3xl font-bold mb-6">Login</h1>
        <div className="grid gap-4 max-w-md">
          <div className="grid gap-2">
            <Label htmlFor="email">E-mail</Label>
            <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} aria-label="E-mail para login" />
          </div>
          <div className="grid gap-2">
            <Label>Código de 6 dígitos</Label>
            <InputOTP maxLength={6} value={code} onChange={setCode} aria-label="Código de 6 dígitos">
              <InputOTPGroup>
                {Array.from({ length: 6 }).map((_, i) => (
                  <InputOTPSlot key={i} index={i} />
                ))}
              </InputOTPGroup>
            </InputOTP>
          </div>
          <div className="flex gap-3 pt-2">
            <Button variant="contrast" onClick={requestCode} disabled={loading || !email}>Enviar código</Button>
            <Button onClick={submit} disabled={loading || code.length !== 6}>Entrar</Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
