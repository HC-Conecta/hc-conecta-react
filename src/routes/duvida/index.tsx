import React, { useEffect, useState } from "react";
import { FAQ } from "../interfaces/global";
import { CircleQuestionMark } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "@/components/Button";
import { ImportantNotice } from "@/components/ImportantNotice";
import H1 from "@/components/textos/H1";
import { Paragraph } from "@/components/textos/Paragraph";
import TextToSpeechButton from "@/components/TTS/TextToSpeechButton";

const Doubt: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const navigate = useNavigate();

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const faqs: FAQ[] = [
    {
      question: "Preciso de cadastro para agendar uma consulta?",
      answer:
        "Sim, você precisa estar cadastrado no sistema do Hospital das Clínicas. Se é a primeira vez, você pode se cadastrar no próprio site ou presencialmente no hospital. Leve seus documentos: RG, CPF e cartão do SUS.",
    },
    {
      question: "Como faço se esquecer minha senha?",
      answer:
        "No site, clique em 'Esqueci minha senha' na página de login. Digite seu CPF ou número de cadastro e siga as instruções. Se tiver dificuldades, ligue para (11) 2661-6000 para receber ajuda.",
    },
    {
      question: "Posso agendar consulta para outra pessoa?",
      answer:
        "Sim, você pode agendar para familiares, mas precisa ter os dados da pessoa (nome completo, CPF, RG e número do cartão SUS). Para menores de idade, um responsável legal deve fazer o agendamento.",
    },
    {
      question: "Quanto tempo antes posso agendar uma consulta?",
      answer:
        "Você pode agendar consultas com até 60 dias de antecedência. Para algumas especialidades, o tempo de espera pode ser maior. Consultas de urgência têm prioridade.",
    },
    {
      question: "Como cancelo ou remarco uma consulta?",
      answer:
        "Entre no site com seu login, vá em 'Minhas Consultas' e clique em 'Cancelar' ou 'Remarcar'. Você também pode ligar para (11) 2661-6000. Cancele com pelo menos 24 horas de antecedência.",
    },
    {
      question: "Preciso chegar com antecedência no hospital?",
      answer:
        "Sim, chegue pelo menos 30 minutos antes da consulta. Isso permite tempo para confirmação do agendamento, atualização de dados e localização do consultório.",
    },
    {
      question: "Quais documentos devo levar na consulta?",
      answer:
        "Sempre leve: RG, CPF, cartão do SUS, comprovante de agendamento (pode ser impresso ou no celular), exames anteriores e lista de medicamentos que você toma.",
    },
    {
      question: "O que faço se o site não funcionar?",
      answer:
        "Primeiro, verifique sua conexão com a internet. Tente fechar e abrir o navegador novamente. Se ainda não funcionar, ligue para (11) 2661-6000 para agendar por telefone.",
    },
    {
      question: "Posso agendar exames pelo site?",
      answer:
        "Alguns exames podem ser agendados online, mas geralmente você precisa ter uma solicitação médica. Entre no site e procure a seção 'Agendamento de Exames' ou ligue para informações específicas.",
    },
    {
      question: "Como vejo o resultado dos meus exames?",
      answer:
        "No site, entre na sua conta e procure 'Resultados de Exames' ou 'Meus Exames'. Você também pode retirar presencialmente no hospital com um documento de identificação.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-background py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 flex flex-col items-center justify-center">
          <H1>Dúvidas Frequentes</H1>
          <p className="text-xl text-muted-foreground">
            Encontre respostas para as perguntas mais comuns sobre os serviços
            do Hospital das Clínicas
          </p>
          <div className="mt-5">
            <TextToSpeechButton
              colorIsBlue
              text="Dúvidas Frequentes! Encontre respostas para as perguntas mais comuns sobre os serviços
            do Hospital das Clínicas"
            />
          </div>
        </div>
        {/* Emergency Notice */}
        <div className="mt-10">
          <ImportantNotice
            text="Para emergências médicas, dirija-se imediatamente ao Pronto Socorro do Hospital das Clínicas ou ligue para o SAMU: 192."
            title="Em caso de emergência"
          />
        </div>

        {/* Search Help */}
        <div className="bg-accent rounded-lg p-6 mb-8">
          <div className="flex items-center space-x-3 mb-3">
            <div>
              <CircleQuestionMark className="text-blue-700" strokeWidth={2} />
            </div>
            <h2 className="text-lg text-blue-700 font-semibold text-foreground">
              Não encontrou sua dúvida?
            </h2>
          </div>
          <p className="text-muted-foreground mb-4 text-lg">
            Entre em contato conosco! Nossa equipe está pronta para ajudar você.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mt-7">
            <a href="tel:1126616000" className="flex items-center font-bold">
              📞 (11) 2661-6000
            </a>
            <Button
              size="sm"
              onClick={() => navigate("/suporte")}
              className="inline-flex items-center justify-center px-4 py-2 border border-primary text-white rounded-lg bg-blue-700"
            >
              💬 Página de Suporte
            </Button>
          </div>
          <div className="mt-5 flex items-start">
            <TextToSpeechButton
              colorIsBlue
              text="Não encontrou sua dúvida?  Entre em contato conosco! Nossa equipe está pronta para ajudar você no nímero (11) 2661-6000"
            />
          </div>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-surface rounded-lg shadow-md border border-border overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left hover:bg-accent transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-foreground pr-4">
                    {faq.question}
                  </h3>
                  <div
                    className={`w-6 h-6 text-primary transition-transform duration-200 ${
                      activeIndex === index ? "rotate-180" : ""
                    }`}
                  >
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </button>

              {activeIndex === index && (
                <div className="px-6 pb-4">
                  <div className="border-t border-border pt-4">
                    <Paragraph>{faq.answer}</Paragraph>
                  </div>
                  <div className="mt-5 flex items-start py-3">
                    <TextToSpeechButton colorIsBlue text={`${faq.answer}`} />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Additional Resources */}
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="bg-primary/5 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-foreground mb-3">
              📚 Guias Úteis
            </h3>
            <Paragraph>
              Acesse nossos guias passo a passo para usar os serviços online.
            </Paragraph>
            <Button
              size="sm"
              onClick={() => navigate("/guia")}
              className="text-white hover:text-primary/80 font-medium"
            >
              Ver Guias →
            </Button>
            <div className="mt-5 flex items-start py-3">
              <TextToSpeechButton colorIsBlue text="Guias Úteis! Acesse nossos guias passo a passo para usar os serviços online. " />
            </div>
          </div>

          <div className="bg-secondary/5 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-foreground mb-3">
              📞 Agendamento por Telefone
            </h3>
            <Paragraph>
              Prefere agendar por telefone? Ligue para nossa central.
            </Paragraph>
            <a
              href="tel:1126616000"
              className="text-blue-700 font-bold hover:text-secondary/80 text-md"
            >
              (11) 2661-6000
            </a>
            <div className="mt-5 flex items-start py-3">
              <TextToSpeechButton colorIsBlue text="Agendamento por Telefone! Prefere agendar por telefone? Ligue para nossa central no número (11) 2661-6000" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doubt;
