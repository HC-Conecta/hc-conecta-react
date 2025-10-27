import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Paragraph } from "@/components/ui/textos/Paragraph";
import Location from "@/components/section/Location";
import TextToSpeechButton from "@/components/tts/TextToSpeechButton";
import Button from "@/components/ui/button/Button";
import H2 from "@/components/ui/textos/H2";
import { H3 } from "@/components/ui/textos/H3";
import SectionCardHome from "@/components/section/Section-card-home";

const Home: React.FC = () => {
  const { pathname } = useLocation();

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="bg-white/70">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-500 to-blue-700 h-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div id="welcome">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-emerald-400"> HC Conecta </span> - Guia para
              o
              <br />
              Hospital das Clínicas
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Ajudamos você a acessar os serviços de saúde de forma fácil e
              clara.
              <br />
              Criado especialmente para pessoas que têm dificuldades com a
              internet.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => navigate("/guia")}
              id="btn-passos"
              size="lg"
              className="bg-blue-700 hover:bg-blue-800 text-primary w-full sm:w-auto"
            >
              Como Acessar o Site
            </Button>
            <Button
              onClick={() => navigate("/consulta")}
              variant="outline"
              size="lg"
              className="border-white text-white w-full sm:w-auto"
            >
              Agendar Consulta
            </Button>
          </div>
        </div>
      </section>

      <SectionCardHome />

      {/* CTA Section */}
      <section className="py-16 flex flex-col gap-20 items-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-2">
          <div>
            <H2>Precisa de Ajuda Personalizada?</H2>
            <p className="text-xl text-muted-foreground mb-8">
              Nossa equipe de suporte está pronta para ajudar você por telefone
              ou email
            </p>
            <Button
              onClick={() => navigate("/suporte")}
              className="text-white"
              size="lg"
            >
              Falar com Suporte
            </Button>
          </div>
          <div className="mt-5">
            <TextToSpeechButton
              colorIsBlue
              text="Precisa de Ajuda Personalizada? Nossa equipe de suporte está pronta para ajudar você por telefone ou email "
            />
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-2">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Onde encontrar o Hospital das Clínicas
          </h2>
          <p className="text-xl text-muted-foreground mb-5 max-w-4xl">
            O Hospital das Clínicas está localizado em uma região de fácil
            acesso. Veja abaixo o endereço completo e as opções de transporte.
          </p>
          <div>
            <TextToSpeechButton
              colorIsBlue
              text="Onde encontrar o Hospital das Clínicas? O Hospital das Clínicas está localizado em uma região de fácil acesso. Veja abaixo o endereço completo e as opções de transporte."
            />
          </div>
        </div>
      </section>
      <Location />
    </div>
  );
};

export default Home;
