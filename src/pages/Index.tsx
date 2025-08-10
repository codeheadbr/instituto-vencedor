import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";
import AboutSection from "@/components/site/AboutSection";
import HowItWorks from "@/components/site/HowItWorks";
import FinalCTA from "@/components/site/FinalCTA";
import Footer from "@/components/site/Footer";
import { Helmet } from "react-helmet-async";

const Index = () => {
  const canonical = typeof window !== 'undefined' ? window.location.origin + '/' : '/';
  return (
    <div>
      <Helmet>
        <title>Instituto Vencedor | Transformando oportunidades em vitórias</title>
        <meta name="description" content="Educação, esporte e comunidade. Inscreva-se no Instituto Vencedor e transforme oportunidades em vitórias." />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content="Instituto Vencedor" />
        <meta property="og:description" content="Educação, esporte e comunidade para transformar vidas." />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Instituto Vencedor",
          url: canonical,
          sameAs: ["https://instagram.com/", "https://facebook.com/"],
          logo: "/src/assets/logo-instituto.png",
          description: "Instituto focado em educação, esporte e comunidade."
        })}</script>
      </Helmet>
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <HowItWorks />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
