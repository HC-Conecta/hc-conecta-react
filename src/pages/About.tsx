import React from 'react';
import { Developer } from '../types/global';
import H1 from "@/components/H1";

const About: React.FC = () => {
  const developers: Developer[] = [
    {
      name: "Ana Silva",
      role: "Desenvolvedora Frontend",
      description: "Especialista em React e acessibilidade web. Focada em criar interfaces simples e intuitivas para todos os usuários."
    },
    {
      name: "Carlos Santos",
      role: "Designer UX/UI",
      description: "Designer com experiência em projetos voltados para acessibilidade e usabilidade para pessoas idosas."
    },
    {
      name: "Maria Oliveira",
      role: "Desenvolvedora Full Stack",
      description: "Especialista em TypeScript e desenvolvimento de sistemas de saúde, com foco em soluções acessíveis."
    }
  ];

  return (
    <div className="bg-background py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <H1>
            Sobre Nosso Projeto
          </H1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Somos uma equipe dedicada a tornar os serviços de saúde mais acessíveis 
            para pessoas idosas e com dificuldades tecnológicas.
          </p>
        </div>

        {/* Mission */}
        <div className="bg-surface rounded-xl p-8 shadow-md border border-border mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Nossa Missão
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Criar um ambiente digital inclusivo e acessível que permita a todas as pessoas, 
            independentemente de sua familiaridade com a tecnologia, acessarem facilmente 
            os serviços do Hospital das Clínicas. Acreditamos que o acesso à saúde deve 
            ser simples, claro e livre de barreiras tecnológicas.
          </p>
        </div>

        {/* Team */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Conheça Nossa Equipe
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {developers.map((developer, index) => (
              <div 
                key={index}
                className="bg-surface rounded-xl p-6 shadow-md border border-border text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">
                    {developer.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {developer.name}
                </h3>
                <p className="text-primary font-medium mb-3">
                  {developer.role}
                </p>
                <p className="text-muted-foreground">
                  {developer.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="bg-accent rounded-xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
            Nossos Valores
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 text-primary mt-1">
                <svg fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Acessibilidade</h3>
                <p className="text-muted-foreground">Criamos soluções que todos podem usar, independente da idade ou habilidade tecnológica.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 text-primary mt-1">
                <svg fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Empatia</h3>
                <p className="text-muted-foreground">Entendemos as dificuldades e criamos soluções pensando no usuário em primeiro lugar.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 text-primary mt-1">
                <svg fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Simplicidade</h3>
                <p className="text-muted-foreground">Mantemos tudo simples e direto, sem complicações desnecessárias.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 text-primary mt-1">
                <svg fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Suporte</h3>
                <p className="text-muted-foreground">Oferecemos ajuda personalizada sempre que necessário.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Quer Saber Mais?
          </h2>
          <p className="text-muted-foreground mb-6">
            Entre em contato conosco para sugestões, dúvidas ou feedback sobre nosso projeto.
          </p>
          <a 
            href="mailto:equipe@hc-guia.com.br"
            className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <span className="text-lg font-medium">equipe@hc-guia.com.br</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;