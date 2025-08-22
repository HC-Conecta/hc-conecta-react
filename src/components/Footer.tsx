import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Phone, Mail } from 'lucide-react';
import { LiFooter } from './LiFooter';

const Footer: React.FC = () => {

  const navigate = useNavigate();

  return (
    <footer className="bg-blue-700 border-t border-border mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-full p-4 relative right-14 bg-gradient-primary rounded-lg flex items-center justify-start">
                <img className='h-14' src="/logo-hc-conecta.png" alt="Logo HC Conecta" />
              </div>
            </div>
            <p className=" text-white/90">
              Site desenvolvido para facilitar o acesso de pessoas idosas aos serviços do Hospital das Clínicas.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white/90 mb-4">
              Links Úteis
            </h3>
            <ul className="space-y-2">
              <LiFooter onClick={() => navigate("/guide")}>
                Como Acessar o Site
              </LiFooter>
              <LiFooter onClick={() => navigate("/appointment")}>
                Agendar Consultas
              </LiFooter>
              <LiFooter onClick={() => navigate("/doubt")}>
                Dúvidas Frequentes
              </LiFooter>
              <LiFooter onClick={() => navigate("/support")}>
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
                <span className="text-white/90">(11) 2661-0000</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 text-white/90">
                  <Mail/>
                </div>
                <span className="text-white/90">suporte@hc.fm.usp.br</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center ">
          <p className="text-white/90">
            © 2024 HC Conecta - Guia de Acesso. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;