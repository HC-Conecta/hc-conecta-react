import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { Paragraph } from "@/components/Paragraph";
import Location from "@/components/Location";
import TextToSpeechButton from "@/components/TTS/TextToSpeechButton";

const Home: React.FC = () => {
  const { pathname } = useLocation();

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const [isJoyrideOpen, setIsJoyrideOpen] = useState<boolean>(false);

  useEffect(() => {
    const tourCompleted = localStorage.getItem("tourCompleted");
    if (!tourCompleted) {
      setIsJoyrideOpen(true);
    }
  }, []);

  const handleJoyrideCallBack = (data) => {
    const { status } = data;

    if (status === "finished" || status === "skipped") {
      localStorage.setItem("tourCompleted", "true");
      setIsJoyrideOpen(false);
    }
  };

  return (
    <div className="bg-white/70">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-500 to-blue-700 h-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div id="welcome">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-emerald-400"> HC Conecta </span> - Guia para o
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

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 flex flex-col items-center justify-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Como Podemos Ajudar Você?
            </h2>
            <p className="text-xl text-muted-foreground">
              Oferecemos guias simples e suporte para facilitar o seu acesso aos
              serviços de saúde.
            </p>
            <div className="mt-5">
              <TextToSpeechButton
                id="btn-audio"
                colorIsBlue
                text="Como Podemos Ajudar Você? Oferecemos guias simples e suporte para facilitar o seu acesso aos serviços de saúde."
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-surface rounded-xl p-6 shadow-md border border-border hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8 text-blue-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Passo a Passo Simples
              </h3>
              <Paragraph>
                Explicações claras e detalhadas para acessar o site do Hospital
                das Clínicas.
              </Paragraph>
              <div className="flex flex-col lg:flex-row gap-5 items-start lg:items-center lg:justify-between">
                <Button
                  onClick={() => navigate("/guia")}
                  className="bg-blue-700 text-white hover:bg-blue-800 w-full mt-4 sm:w-auto"
                  size="sm"
                >
                  Ver Guia
                </Button>
                <div>
                  <TextToSpeechButton
                    colorIsBlue
                    text="Passo a Passo Simples!  Explicações claras e detalhadas para acessar o site do Hospital
                  das Clínicas."
                  />
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div
              id="card-consulta"
              className="bg-surface rounded-xl p-6 shadow-md border border-border hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8 text-blue-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Agendar Consultas
              </h3>
              <Paragraph>
                Aprenda como marcar suas consultas médicas de forma fácil e
                rápida.
              </Paragraph>
              <div className="flex flex-col lg:flex-row gap-5 items-start lg:items-center lg:justify-between">
                <Button
                  onClick={() => navigate("/consulta")}
                  className="bg-blue-700 text-white hover:bg-blue-800  mt-4 w-full sm:w-auto"
                  size="sm"
                >
                  Aprender
                </Button>
                <div>
                  <TextToSpeechButton
                    colorIsBlue
                    text="Agendar Consultas! Aprenda como marcar suas consultas médicas de forma fácil e
                rápida."
                  />
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div
              id="card-duvidas"
              className="bg-surface rounded-xl p-6 shadow-md border border-border hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8 text-blue-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Tire suas Dúvidas
              </h3>
              <Paragraph>
                Encontre respostas para as perguntas mais comuns sobre o
                Hospital das Clínicas.
              </Paragraph>
              <div className="flex flex-col lg:flex-row gap-5 items-start lg:items-center lg:justify-between">
                <Button
                  onClick={() => navigate("/duvida")}
                  className="bg-blue-700 text-white hover:bg-blue-800  mt-4 w-full sm:w-auto"
                  size="sm"
                >
                  Ver Dúvidas
                </Button>
                <div>
                  <TextToSpeechButton
                    colorIsBlue
                    text="Tire suas Dúvidas! Encontre respostas para as perguntas mais comuns sobre o
                Hospital das Clínicas."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 flex flex-col gap-5 items-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Precisa de Ajuda Personalizada?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Nossa equipe de suporte está pronta para ajudar você por telefone ou
            email
          </p>
          <Button
            onClick={() => navigate("/suporte")}
            className="text-white"
            size="lg"
          >
            Falar com Suporte
          </Button>
        </div>
        <div>
          <TextToSpeechButton
            colorIsBlue
            text="Precisa de Ajuda Personalizada? Nossa equipe de suporte está pronta para ajudar você por telefone ou email "
          />
        </div>
      </section>
      <Location />
      
    </div>
  );
};

export default Home;
