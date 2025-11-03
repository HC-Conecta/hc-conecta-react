import React, { useEffect, useState } from "react";
import { ChevronDown, CircleQuestionMark } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "@/components/ui/button/Button";
import { ImportantNotice } from "@/components/section/ImportantNotice";
import H1 from "@/components/ui/textos/H1";
import { Paragraph } from "@/components/ui/textos/Paragraph";
import TextToSpeechButton from "@/components/tts/TextToSpeechButton";
import { faqs } from "@/data/faqs";
import Subtitle from "@/components/ui/textos/Subtitle";
import { H3 } from "@/components/ui/textos/H3";

const Doubt: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const navigate = useNavigate();

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-background py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 flex flex-col items-center justify-center">
          <H1>Dúvidas Frequentes</H1>
          <Subtitle> 
             Encontre respostas para as perguntas mais comuns sobre os serviços
            do Hospital das Clínicas
          </Subtitle>
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
          <Paragraph>
            Entre em contato conosco! Nossa equipe está pronta para ajudar você.
          </Paragraph>
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
                  <Paragraph>
                    {faq.question}
                  </Paragraph>
                  <div
                    className={`w-6 h-6 text-primary transition-transform duration-200 ${
                      activeIndex === index ? "rotate-180" : ""
                    }`}
                  >
                    <ChevronDown />
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
            <H3 isStronger={true}>
              📚 Guias Úteis
            </H3>
            <Paragraph>
              Acesse nossos guias passo a passo para usar os serviços online.
            </Paragraph>
            <Button
              size="sm"
              onClick={() => navigate("/guia")}
              className="text-white hover:text-primary/80 font-medium mt-4"
            >
              Ver Guias →
            </Button>
            <div className="mt-5 flex items-start py-3">
              <TextToSpeechButton colorIsBlue text="Guias Úteis! Acesse nossos guias passo a passo para usar os serviços online. " />
            </div>
          </div>

          <div className="bg-secondary/5 rounded-lg p-6">
            <H3 isStronger={true}>
              📞 Agendamento por Telefone
            </H3>
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
