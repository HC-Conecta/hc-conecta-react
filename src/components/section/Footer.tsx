import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Phone, Mail, MoveUp, ChevronUp } from 'lucide-react';
import { LiFooter } from './LiFooter';
import { Paragraph } from '../ui/textos/Paragraph';

const Footer: React.FC = () => {

  const navigate = useNavigate();

  return (
    <footer className="bg-gradient-to-br from-blue-500 to-blue-700 border-t border-border mt-16 scroll-smooth">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col justify-center">
        <div className='flex justify-center relative left-1 transform -translate-x-1/2 animate-bounce'>
          <button className='flex flex-col items-center mb-8 text-white hover:text-white/90' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <span>
              <ChevronUp className='h-10 w-10'/>
            </span>
            <Paragraph>
              Voltar Para o Topo
            </Paragraph>
            </button>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between gap-8">
          {/* Brand */}
          <div className="flex flex-col items-start">
            <div className="flex items-center space-x-20 mb-4">
              <div className="w-full relative p-2 right-5 bg-gradient-primary rounded-lg flex items-center justify-start">
                <img className='h-20' src="/logo-hc-conecta-v2.png" alt="Logo HC Conecta" />
              </div>
            </div>
            <p className="text-white/90 md:max-w-80 text-lg">
              Site desenvolvido para facilitar o acesso de pessoas com dificuldades aos serviços do Hospital das Clínicas.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white/90 mb-4">
              Links Úteis
            </h3>
            <ul className="space-y-2">
              <LiFooter onClick={() => navigate("/guia")}>
                Como Acessar o Site
              </LiFooter>
              <LiFooter onClick={() => navigate("/consulta")}>
                Agendar Consultas
              </LiFooter>
              <LiFooter onClick={() => navigate("/duvida")}>
                Dúvidas Frequentes
              </LiFooter>
              <LiFooter onClick={() => navigate("/suporte")}>
                Suporte e Contato
              </LiFooter>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white/90 mb-4">
              Precisa de Ajuda?
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 text-white/90">
                  <Phone />
                </div>
                <span className="text-white/90 text-lg">(11) 2661-0000</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 text-white/90">
                  <Mail/>
                </div>
                <span className="text-white/90 text-lg">suporte@hc.fm.usp.br</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center ">
          <p className="text-white/90">
            © 2025 HC Conecta - Guia de Acesso. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;