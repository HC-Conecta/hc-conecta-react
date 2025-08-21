import React, { useState } from 'react';
import { FAQ } from '../types/global';

const Doubt: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs: FAQ[] = [
    {
      question: "Preciso de cadastro para agendar uma consulta?",
      answer: "Sim, você precisa estar cadastrado no sistema do Hospital das Clínicas. Se é a primeira vez, você pode se cadastrar no próprio site ou presencialmente no hospital. Leve seus documentos: RG, CPF e cartão do SUS."
    },
    {
      question: "Como faço se esquecer minha senha?",
      answer: "No site, clique em 'Esqueci minha senha' na página de login. Digite seu CPF ou número de cadastro e siga as instruções. Se tiver dificuldades, ligue para (11) 2661-6000 para receber ajuda."
    },
    {
      question: "Posso agendar consulta para outra pessoa?",
      answer: "Sim, você pode agendar para familiares, mas precisa ter os dados da pessoa (nome completo, CPF, RG e número do cartão SUS). Para menores de idade, um responsável legal deve fazer o agendamento."
    },
    {
      question: "Quanto tempo antes posso agendar uma consulta?",
      answer: "Você pode agendar consultas com até 60 dias de antecedência. Para algumas especialidades, o tempo de espera pode ser maior. Consultas de urgência têm prioridade."
    },
    {
      question: "Como cancelo ou remarco uma consulta?",
      answer: "Entre no site com seu login, vá em 'Minhas Consultas' e clique em 'Cancelar' ou 'Remarcar'. Você também pode ligar para (11) 2661-6000. Cancele com pelo menos 24 horas de antecedência."
    },
    {
      question: "Preciso chegar com antecedência no hospital?",
      answer: "Sim, chegue pelo menos 30 minutos antes da consulta. Isso permite tempo para confirmação do agendamento, atualização de dados e localização do consultório."
    },
    {
      question: "Quais documentos devo levar na consulta?",
      answer: "Sempre leve: RG, CPF, cartão do SUS, comprovante de agendamento (pode ser impresso ou no celular), exames anteriores e lista de medicamentos que você toma."
    },
    {
      question: "O que faço se o site não funcionar?",
      answer: "Primeiro, verifique sua conexão com a internet. Tente fechar e abrir o navegador novamente. Se ainda não funcionar, ligue para (11) 2661-6000 para agendar por telefone."
    },
    {
      question: "Posso agendar exames pelo site?",
      answer: "Alguns exames podem ser agendados online, mas geralmente você precisa ter uma solicitação médica. Entre no site e procure a seção 'Agendamento de Exames' ou ligue para informações específicas."
    },
    {
      question: "Como vejo o resultado dos meus exames?",
      answer: "No site, entre na sua conta e procure 'Resultados de Exames' ou 'Meus Exames'. Você também pode retirar presencialmente no hospital com um documento de identificação."
    }
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-background py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-6">
            Dúvidas Frequentes
          </h1>
          <p className="text-xl text-muted-foreground">
            Encontre respostas para as perguntas mais comuns sobre os serviços do Hospital das Clínicas
          </p>
        </div>

        {/* Search Help */}
        <div className="bg-accent rounded-lg p-6 mb-8">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-6 h-6 text-primary">
              <svg fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
            </div>
            <h2 className="text-lg font-semibold text-foreground">
              Não encontrou sua dúvida?
            </h2>
          </div>
          <p className="text-muted-foreground mb-4">
            Entre em contato conosco! Nossa equipe está pronta para ajudar você.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a 
              href="tel:1126616000" 
              className="inline-flex items-center justify-center px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              📞 (11) 2661-6000
            </a>
            <a 
              href="/support" 
              className="inline-flex items-center justify-center px-4 py-2 border border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors"
            >
              💬 Página de Suporte
            </a>
          </div>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-surface rounded-lg shadow-md border border-border overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left hover:bg-accent transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-foreground pr-4">
                    {faq.question}
                  </h3>
                  <div className={`w-6 h-6 text-primary transition-transform duration-200 ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`}>
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </button>
              
              {activeIndex === index && (
                <div className="px-6 pb-4">
                  <div className="border-t border-border pt-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
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
            <p className="text-muted-foreground mb-4">
              Acesse nossos guias passo a passo para usar os serviços online.
            </p>
            <a 
              href="/guide" 
              className="text-primary hover:text-primary/80 font-medium"
            >
              Ver Guias →
            </a>
          </div>

          <div className="bg-secondary/5 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-foreground mb-3">
              📞 Agendamento por Telefone
            </h3>
            <p className="text-muted-foreground mb-4">
              Prefere agendar por telefone? Ligue para nossa central.
            </p>
            <a 
              href="tel:1126616000" 
              className="text-secondary hover:text-secondary/80 font-medium"
            >
              (11) 2661-6000
            </a>
          </div>
        </div>

        {/* Emergency Notice */}
        <div className="mt-8 bg-error/10 border border-error/20 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 text-error mt-1">
              <svg fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Em caso de emergência</h3>
              <p className="text-muted-foreground">
                Para emergências médicas, dirija-se imediatamente ao Pronto Socorro do Hospital das Clínicas 
                ou ligue para o SAMU: <strong className="text-error">192</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doubt;