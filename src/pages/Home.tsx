import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { Paragraph } from "@/components/Paragraph";
import { Ilocations } from "@/types/global";
import { MapIcon } from "lucide-react";

const Home: React.FC = () => {
  const { pathname } = useLocation();

  const navigate = useNavigate();

  const locations: Ilocations[] = [
    {
      id: 1,
      title: "Hospital das Clínicas de São Paulo (HC - USP)",
      street: "Rua Teodoro Sampaio, 561 - Pinheiros, São Paulo - SP.",
      img: "/img-location/img-hc1.png",
      description:
        "O HC da Universidade de São Paulo é o maior complexo hospitalar da América Latina. Ele é referência no atendimento à saúde e pesquisa.",
      map: "https://www.bing.com/maps?pglt=2083&q=Hospital+das+Cl%C3%ADnicas+de+S%C3%A3o+Paulo+(HC+-+USP)&cvid=726eb1385d0a439ea72b1dd893d55c1f&gs_lcrp=EgRlZGdlKgYIABBFGDsyBggAEEUYOzIGCAEQRRg8MgYIAhBFGDwyBggDEEUYPNIBBzI1NWowajGoAgCwAgA&FORM=ANNTA1&ucpdpc=UCPD&DAF0=1&PC=U531",
    },
    {
      id: 2,
      title: "Hospital das Clínicas de Ribeirão Preto (HC - USP)",
      street: "Av. Bandeirantes, 3900 - Ribeirão Preto - SP.",
      img: "/img-hc2.png",
      description:
        "O HC de Ribeirão Preto, ligado à Universidade de São Paulo, é um centro de excelência em atendimento à saúde e realiza diversas pesquisas clínicas e científicas.",
      map: "https://www.bing.com/maps?pglt=2083&q=Hospital+das+Cl%C3%ADnicas+de+Ribeir%C3%A3o+Preto&cvid=8ccbc7777d2c43e589246ba585983981&DAF0=1&PC=U531",
      invertStyle: true
    },
    {
      id: 3,
      title: "Hospital das Clínicas de Porto Alegre (HCPA)",
      street: "Rua Ramiro Barcelos, 2350 - Porto Alegre - RS.",
      img: "/img-hc3.png",
      description:
        "O HCPA é um hospital de referência no Rio Grande do Sul, oferecendo atendimento médico em diversas especialidades e realizando pesquisas avançadas na área da saúde.",
      map: "https://www.bing.com/maps?pglt=2083&q=Hospital+das+Cl%C3%ADnicas+de+Porto+Alegre&cvid=cf1758e3b8084fcdb86d48c2423b8cbb&DAF0=1&PC=U531",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="bg-white/70">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-500 to-blue-700 h-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            HC Conecta - Guia para o
            <br />
            <span className="text-emerald-400">Hospital das Clínicas</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Ajudamos você a acessar os serviços de saúde de forma fácil e clara.
            <br />
            Criado especialmente para pessoas que têm dificuldades com a
            internet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/guide">
              <Button
                size="lg"
                className="bg-blue-700 hover:bg-blue-800 text-primary w-full sm:w-auto"
              >
                Como Acessar o Site
              </Button>
            </Link>
            <Link to="/appointment">
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white w-full sm:w-auto"
              >
                Agendar Consulta
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Como Podemos Ajudar Você?
            </h2>
            <p className="text-xl text-muted-foreground">
              Oferecemos guias simples e suporte para facilitar o seu acesso aos
              serviços de saúde
            </p>
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
              <Link to="/guide">
                <Button
                  className="bg-blue-700 text-white hover:bg-blue-800 w-full mt-4 sm:w-auto"
                  size="sm"
                >
                  Ver Guia
                </Button>
              </Link>
            </div>

            {/* Card 2 */}
            <div className="bg-surface rounded-xl p-6 shadow-md border border-border hover:shadow-lg transition-shadow">
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
              <Link to="/appointment">
                <Button
                  className="bg-blue-700 text-white hover:bg-blue-800  mt-4 w-full sm:w-auto"
                  size="sm"
                >
                  Aprender
                </Button>
              </Link>
            </div>

            {/* Card 3 */}
            <div className="bg-surface rounded-xl p-6 shadow-md border border-border hover:shadow-lg transition-shadow">
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
              <Button
                onClick={() => navigate("/doubt")}
                className="bg-blue-700 text-white hover:bg-blue-800  mt-4 w-full sm:w-auto"
                size="sm"
              >
                Ver Dúvidas
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Precisa de Ajuda Personalizada?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Nossa equipe de suporte está pronta para ajudar você por telefone ou
            email
          </p>
          <Button
            onClick={() => navigate("/support")}
            className="text-white"
            size="lg"
          >
            Falar com Suporte
          </Button>
        </div>
      </section>

      {/* HC location */}
      <section className="py-16 flex flex-col items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-2">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Onde encontrar o Hospital das Clínicas
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-4xl">
            O Hospital das Clínicas está localizado em uma região de fácil
            acesso. Veja abaixo o endereço completo e as opções de transporte.
          </p>
        </div>
        {locations.length > 0 &&
          locations.map((location) => (
            <div
              key={location.id}
              className={`flex flex-col md:flex-row p-6 justify-center gap-5 md:gap-20 items-center ${location.invertStyle === true ? "md:flex-row-reverse" : ""}`}
            >
              <figure>
                <img
                  className="rounded-xl w-[25rem]"
                  src={location.img}
                  alt={location.title}
                />
              </figure>
              <div className="flex flex-col max-w-sm items-start justify-center text-start">
                <h3 className="font-semibold text-xl text-foreground mb-1 text-blue-700">
                  {location.title}
                </h3>
                <div className="flex flex-col">
                  <div className="flex gap-2 items-center">
                    <i className="relative bottom-1">
                      {" "}
                      <MapIcon />
                    </i>
                    <Paragraph>
                      {" "}
                      <b>{location.street}</b>{" "}
                    </Paragraph>
                  </div>
                  <p className="text-md text-muted-foreground text-start">
                    {location.description}
                  </p>
                </div>
                <Button className="text-white mt-5" size="sm">
                  <a href={location.map} target="_blank">
                    {" "}
                    Acessar no Mapa →
                  </a>{" "}
                </Button>
              </div>
            </div>
          ))}
      </section>
    </div>
  );
};

export default Home;
