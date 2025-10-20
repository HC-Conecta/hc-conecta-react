import React, { useEffect } from "react";
import Button from "../../components/ui/button/Button";
import { ImportantNotice } from "@/components/section/ImportantNotice";
import { LiTips } from "@/components/section/LiTips";
import { useLocation, useNavigate } from "react-router-dom";
import H1 from "@/components/ui/textos/H1";
import { ISteps } from "@/interfaces/global";
import { Paragraph } from "@/components/ui/textos/Paragraph";
import TextToSpeechButton from "@/components/tts/TextToSpeechButton";
import { steps } from "@/data/steps";
import { requiredDocuments } from "@/data/required-documents";

const Appointment: React.FC = () => {

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);


  const navigate = useNavigate();

  return (
    <div className="bg-background py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 flex flex-col items-center justify-center">
          <H1>Como Agendar sua Consulta</H1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Siga este guia passo a passo para agendar sua consulta médica no
            Hospital das Clínicas de forma fácil e rápida
          </p>
          <div className="mt-5">
            <TextToSpeechButton
              colorIsBlue
              text="Como Agendar sua Consulta! Siga este guia passo a passo para agendar sua consulta médica no Hospital das Clínicas de forma fácil e rápida"
            />
          </div>
        </div>

        {/* Important Notice */}
        <ImportantNotice
          text=" Você precisa estar cadastrado no sistema do Hospital das Clínicas. 
          Se é sua primeira vez, procure o setor de cadastro no hospital com seus documentos."
          title="Antes De Começar"
        />

        {/* Steps */}
        <div className="space-y-8 mb-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-8">
            Passo a Passo para Agendar
          </h2>

          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-surface rounded-xl p-6 shadow-md border border-border"
            >
              <div className="flex items-start space-x-4">
                <div className="text-4xl">{step.icon}</div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-lg">
                    {step.description}
                  </p>
                  <div className="bg-accent py-4 rounded-lg">
                    <h4 className="font-medium text-foreground mb-2">
                      Detalhes importantes:
                    </h4>
                    <ul className="space-y-1 py-3">
                      {step.details.map((detail, detailIndex) => (
                        <li
                          key={detailIndex}
                          className="flex items-start space-x-2"
                        >
                          <span className="text-sm mt-1">•</span>
                          <span className="text-muted-foreground text-lg">
                            {detail}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <div className="text-start flex flex-col items-start gap-5 lg:flex lg:flex-row lg:items-center lg:justify-between">
                      {step.existButton === true && (
                        <div className="mt-5">
                          <Button
                            className="text-white"
                            size="sm"
                          >
                            <a target="_blank" href={`${step.url}`}> {step.button} → </a>
                          </Button>
                        </div>
                      )}
                      <TextToSpeechButton
                        colorIsBlue
                        text={`${step.title}. ${
                          step.description
                        }. Detalhes importantes: ${step.details.map(
                          (e: string) => e + ";"
                        )} `}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Required Documents */}
        <div className="bg-surface rounded-xl p-8 shadow-md border border-border mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
            <span className="text-3xl mr-3">📋</span>
            Documentos Necessários
          </h2>
          <p className="text-muted-foreground mb-6 text-lg">
            No dia da consulta, não esqueça de levar estes documentos:
          </p>
          <div className="grid md:grid-cols-2 gap-3">
            {requiredDocuments.map((doc, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 p-3 bg-accent rounded-lg"
              >
                <div className="w-5 h-5 text-success text-blue-700">
                  <svg fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-foreground text-lg">{doc}</span>
              </div>
            ))}
          </div>
          <div className="mt-5 flex items-start">
            <TextToSpeechButton
              colorIsBlue
              text="Documentos Necessários! No dia da consulta, não esqueça de levar estes documentos: RG; CPF; Cartão do SUS; Comprovante de agendamento; Exames anteriores (se tiver) e Lista dos medicamentos que você toma"
            />
          </div>
        </div>

        {/* Alternative Methods */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-primary/5 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
              <span className="text-2xl mr-2">📞</span>
              Agendamento por Telefone
            </h3>
            <Paragraph>
              Prefere agendar falando com alguma pessoa? Ligue para nossa
              central de agendamento.
            </Paragraph>
            <div className="space-y-2">
              <p className="text-blue-700 font-bold text-lg">(11) 2661-6000</p>
              <p className="text-muted-foreground ">
                <b> Horário: Segunda a sexta, das 7h às 17h </b>
              </p>
            </div>
            <div className="mt-5 flex items-start">
              <TextToSpeechButton
                colorIsBlue
                text="Agendamento por Telefone! Prefere agendar falando com alguma pessoa? Ligue para nossa
              central de agendamento no número: (11) 2661-6000 no horário de Segunda a sexta, das 7h às 17h "
              />
            </div>
          </div>

          <div className="bg-secondary/5 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
              <span className="text-2xl mr-2">🏥</span>
              Agendamento Presencial
            </h3>
            <Paragraph>
              Você também pode agendar pessoalmente no hospital. Procure o setor
              de agendamento.
            </Paragraph>
            <div className="space-y-2">
              <p className="text-blue-700 font-bold text-lg">
                Recepção Central
              </p>
              <p className="text-muted-foreground">
                <b> Horário: Segunda a sexta, das 6h às 18h </b>
              </p>
            </div>
            <div className="mt-5 flex items-start">
              <TextToSpeechButton
                colorIsBlue
                text="Agendamento Presencial! Você também pode agendar pessoalmente no hospital. Procure o setor
              de agendamento. Recepção Central no horário de Segunda a sexta, das 6h às 18h"
              />
            </div>
          </div>
        </div>

        {/* Tips */}
        <div className="bg-success/10 border border-success/20 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
            <span className="text-2xl mr-2">💡</span>
            Dicas Importantes
          </h3>
          <ul className="space-y-3">
            <LiTips> Chegue 30 minutos antes da consulta </LiTips>
            <LiTips>
              {" "}
              Se não puder comparecer, cancele com 24h de antecedência{" "}
            </LiTips>
            <LiTips> Traga uma lista com suas dúvidas para o médico </LiTips>
            <LiTips> Anote as orientações que o médico der </LiTips>
          </ul>
          <div className="mt-5 flex items-start">
            <TextToSpeechButton
              colorIsBlue
              text="Dicas Importantes! Chegue 30 minutos antes da consulta; Se não puder comparecer, cancele com 24h de antecedência; Traga uma lista com suas dúvidas para o médico; Anote as orientações que o médico der"
            />
          </div>
        </div>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={() => window.history.back()} variant="outline">
            ← Voltar
          </Button>
          <Button
            className="text-white"
            onClick={() => navigate('/duvida')}
          >
            Ver Dúvidas Frequentes →
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
