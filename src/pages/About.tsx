import React from 'react';
import { Developer } from '../types/global';
import H1 from "@/components/H1";
import { CircleCheck, CircleUser, Heart, Lightbulb, Mail } from 'lucide-react';
import { Paragraph } from '@/components/Paragraph';

const About: React.FC = () => {
  const developers: Developer[] = [
    {
      name: "Enrico Delesporte",
      role: "Desenvolvedor Back-end",
      description: "Desenvolvedor back-end responsável pela implementação do back-end, banco de dados, e ajuda no front-end. ",
      image: "/enrico-image.png"
    },
    {
      name: "Vitor Dias",
      role: "Desenvolvedor Back-end",
      description: "Desenvolvedor Back-End com atuação principal na estrutura do back-end, banco de dados e suporte ao front-end.",
      image: "/vitor-image.png"
    },
    {
      name: "Iago Liziero",
      role: "Desenvolvedor Full Stack",
      description: "Desenvolvedor Full Stack responsável pela implementação do front-end, protótipos do site, e ajuda no back-end.",
      image: "/iago-image.png"
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
        <div className="rounded-xl p-8 shadow-md border border-border mb-16">
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
                className="bg-surface rounded-xl items-center justify-center p-6 shadow-md border border-border text-center hover:shadow-lg transition-shadow"
              >
                <div className="bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                   <div className='w-44 h-44 rounded-full overflow-hidden border-4 border-white'>
                    <img
                      src={developer.image}
                      alt={developer.name}
                    />
                  </div>
                </div>
                <h3 className="text-xl text-blue-700 font-semibold text-foreground mb-2">
                  {developer.name}
                </h3>
                <p className="text-lg font-medium mb-3">
                  {developer.role}
                </p>
                <p className="text-muted-foreground text-md">
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
                <CircleCheck className="text-blue-700" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1 text-lg">Acessibilidade</h3>
                <Paragraph>
                  Criamos soluções que todos podem usar, independente da idade ou habilidade tecnológica.
                </Paragraph>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 text-primary mt-1">
                <Heart className="text-blue-700" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1 text-lg">Empatia</h3>
                <Paragraph>
                  Entendemos as dificuldades e criamos soluções pensando no usuário em primeiro lugar.
                </Paragraph>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 text-primary mt-1">
                <Lightbulb className="text-blue-700"/>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1 text-lg">Simplicidade</h3>
                <Paragraph>
                  Mantemos tudo simples e direto, sem complicações desnecessárias.
                </Paragraph>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 text-primary mt-1">
                <CircleUser className="text-blue-700"/>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1 text-lg">Suporte</h3>
                <Paragraph>
                  Oferecemos ajuda personalizada sempre que necessário.
                </Paragraph>
              </div>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Quer Saber Mais?
          </h2>
          <Paragraph>
             Entre em contato conosco para sugestões, dúvidas ou feedback sobre nosso projeto.
          </Paragraph>
          <a 
            href="mailto:equipe@hc-guia.com.br"
            className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors"
          >
           <Mail className="w-5 h-5 text-blue-700"/>
            <span className="text-lg text-blue-700 font-medium">equipe@hc-guia.com.br</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;