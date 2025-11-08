import React, { useEffect } from "react";
import { ImportantNotice } from "@/components/section/ImportantNotice";
import { useLocation, useNavigate } from "react-router-dom";
import { Paragraph } from "@/components/ui/textos/Paragraph";
import H1 from "@/components/ui/textos/H1";
import TextToSpeechButton from "@/components/tts/TextToSpeechButton";
import Button from "@/components/ui/button/Button";
import { steps } from "@/data/steps-guide";
import Subtitle from "@/components/ui/textos/Subtitle";
import { H3 } from "@/components/ui/textos/H3";

const Guide: React.FC = () => {

  const navigate = useNavigate();
  
  const {pathname} = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  

  return (
    <div className="bg-background py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 flex flex-col items-center justify-center">
          <H1>
            Como Acessar o Site do Hospital das Clínicas
          </H1>
          <Subtitle> 
             Encontre respostas para as perguntas mais comuns sobre os serviços
            do Hospital das Clínicas
          </Subtitle>
          <div className="mt-5">
            <TextToSpeechButton colorIsBlue text="Como Acessar o Site do Hospital das Clínicas? Siga este guia passo a passo para acessar o site oficial e marcar
            suas consultas" />
          </div>
        </div>

        {/* Important Notice */}
        <ImportantNotice text="Certifique-se de ter uma conexão com a internet funcionando antes de
          começar. Se você tiver dúvidas, peça ajuda a um familiar ou amigo." title="Importante!" />

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
                  <H3>
                    {step.title}
                  </H3>
                  <Paragraph>
                    {step.description}
                  </Paragraph>
                  <div className="bg-accent py-3 rounded-lg">
                    <p className="text-md text-accent-foreground">
                      <b>Dica:</b> {step.tip}
                    </p>
                  </div>
                  <div className="text-start flex flex-col items-start gap-5 lg:flex lg:flex-row lg:items-center lg:justify-between">
                  {step.link === true && (
                     <div className='mt-4'>
                      <Button className='text-white' size='sm'><a href={step.url} target='_blank'> Acessar por aqui →</a> </Button>
                    </div>
                   )}
                    <TextToSpeechButton colorIsBlue text={`${step.title}. ${step.description}. Dica: ${step.tip} `} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Help */}
        <div className="mt-12 bg-surface rounded-xl p-8 shadow-md border border-border">
          <H3 isStronger={true}>
            Precisa de Mais Ajuda?
          </H3>
          <Paragraph>
            Se você seguiu todos os passos e ainda tem dificuldades, não se
            preocupe! Temos outras formas de ajudar você.
          </Paragraph>
          <div className="mb-5 flex justify-start">
            <TextToSpeechButton colorIsBlue text="Precisa de Mais Ajuda? Se você seguiu todos os passos e ainda tem dificuldades, não se
            preocupe! Temos outras formas de ajudar você. Osnúmero de telefone estão aqui embaixo. " />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg">
              <h4 className="font-semibold text-foreground mb-2 text-md">
                Telefone de Suporte
              </h4>
              <Paragraph>
                Ligue para nossa central de ajuda:
              </Paragraph>
              <p className="text-blue-700 font-bold text-lg">(11) 2661-0000</p>
            </div>
            <div className="bg-secondary/5 p-4 rounded-lg">
              <h4 className="font-semibold text-foreground mb-2">
                Agendar por Telefone
              </h4>
              <Paragraph>
                Também pode agendar direto pelo telefone:
              </Paragraph>
              <p className="text-blue-700 font-bold text-lg">(11) 2661-6000</p>
            </div>
          </div>
          <div className="mb-5 flex justify-start"> 
            <TextToSpeechButton colorIsBlue text="Você pode ligar para nossa central de ajuda ou agendar direto pelo telefone no número: (11) 2661-6000" />
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={() => window.history.back()} variant="outline">
            ← Voltar
          </Button>
          <Button
            className="text-white"
            onClick={() => navigate('/consulta')}
          >
            Próximo: Como Agendar →
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Guide;
