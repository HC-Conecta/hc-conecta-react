import React, { useEffect } from "react";
import Button from "../components/Button";
import { ImportantNotice } from "@/components/ImportantNotice";
import { useLocation, useNavigate } from "react-router-dom";
import { Paragraph } from "@/components/Paragraph";
import H1 from "@/components/H1";

const Guide: React.FC = () => {

  const navigate = useNavigate();
  
  const {pathname} = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  

  const steps = [
    {
      number: 1,
      title: "Abra seu navegador",
      description:
        "Clique no ícone do navegador (Internet Explorer, Chrome, Firefox ou Safari) na sua área de trabalho ou menu iniciar.",
      tip: "O ícone geralmente parece com uma bússola ou tem as cores azul, verde, laranja ou vermelho.",
      buttonColor: true,
    },
    {
      number: 2,
      title: "Digite o endereço",
      description:
        "Na barra de endereços (caixa branca no topo), digite: www.hc.fm.usp.br",
      tip: "Certifique-se de digitar exatamente como mostrado, incluindo os pontos.",
      buttonColor: false,
    },
    {
      number: 3,
      title: "Pressione Enter",
      description:
        "Depois de digitar o endereço, pressione a tecla Enter no seu teclado ou clique no botão 'Ir' ou na lupa.",
      tip: "A tecla Enter é a tecla maior do lado direito do teclado, geralmente com uma seta.",
      buttonColor: true,
    },
    {
      number: 4,
      title: "Aguarde o carregamento",
      description:
        "O site irá carregar. Pode demorar alguns segundos. Você verá o logo do Hospital das Clínicas.",
      tip: "Se o site não carregar, verifique se você digitou o endereço corretamente.",
      buttonColor: false,
    },
    {
      number: 5,
      title: "Encontre 'Agendamento'",
      description:
        "Procure na página principal um link ou botão com o texto 'Agendamento' ou 'Marcar Consulta'.",
      tip: "Geralmente fica no menu superior ou no centro da página principal.",
      buttonColor: true,
    },
    {
      number: 6,
      title: "Clique em Agendamento",
      description:
        "Clique uma vez no link 'Agendamento'. Isso abrirá a página onde você pode marcar sua consulta.",
      tip: "Se você clicar duas vezes muito rápido, pode abrir duas páginas. Clique apenas uma vez.",
      buttonColor: false,
    },
  ];

  return (
    <div className="bg-background py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <H1>
            Como Acessar o Site do Hospital das Clínicas
          </H1>
          <p className="text-xl text-muted-foreground">
            Siga este guia passo a passo para acessar o site oficial e marcar
            suas consultas
          </p>
        </div>

        {/* Important Notice */}
        <ImportantNotice title="Importante!">
          Certifique-se de ter uma conexão com a internet funcionando antes de
          começar. Se você tiver dúvidas, peça ajuda a um familiar ou amigo.
        </ImportantNotice>

        {/* Steps */}
        <div className="space-y-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-surface rounded-xl p-6 shadow-md border border-border"
            >
              <div className="flex items-start space-x-4">
                <div
                  className={`w-12 h-12  rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0 ${
                    step.buttonColor ? "bg-blue-700" : "bg-emerald-400"
                  }`}
                >
                  {step.number}
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <Paragraph>
                    {step.description}
                  </Paragraph>
                  <div className="bg-accent py-3 rounded-lg">
                    <p className="text-sm text-accent-foreground">
                      <strong>Dica:</strong> {step.tip}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Help */}
        <div className="mt-12 bg-surface rounded-xl p-8 shadow-md border border-border">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Precisa de Mais Ajuda?
          </h2>
          <p className="text-muted-foreground mb-6">
            Se você seguiu todos os passos e ainda tem dificuldades, não se
            preocupe! Temos outras formas de ajudar você.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-primary/5 p-4 rounded-lg">
              <h3 className="font-semibold text-foreground mb-2">
                Telefone de Suporte
              </h3>
              <p className="text-muted-foreground mb-2">
                Ligue para nossa central de ajuda:
              </p>
              <p className="text-blue-700 font-bold text-lg">(11) 2661-0000</p>
            </div>
            <div className="bg-secondary/5 p-4 rounded-lg">
              <h3 className="font-semibold text-foreground mb-2">
                Agendar por Telefone
              </h3>
              <p className="text-muted-foreground mb-2">
                Também pode agendar direto pelo telefone:
              </p>
              <p className="text-blue-700 font-bold text-lg">(11) 2661-6000</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={() => window.history.back()} variant="outline">
            ← Voltar
          </Button>
          <Button
            className="text-white"
            onClick={() => navigate('/appointment')}
          >
            Próximo: Como Agendar →
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Guide;
