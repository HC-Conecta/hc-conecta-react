import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-border mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">HC</span>
              </div>
              <div className="w-full p-4 relative right-14 bg-gradient-primary rounded-lg flex items-center justify-start">
                <img className='h-14' src="/logo-hc-conecta.png" alt="Logo HC Conecta" />
            </div>
            </div>
            <p className=" text-black/80">
              Site desenvolvido para facilitar o acesso de pessoas idosas aos serviços do Hospital das Clínicas.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-black/90 mb-4">
              Links Úteis
            </h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/guide" 
                  className="text-blue-700 transition-colors"
                >
                  Como Acessar o Site
                </Link>
              </li>
              <li>
                <Link 
                  to="/appointment" 
                  className="text-blue-700 transition-colors"
                >
                  Agendar Consultas
                </Link>
              </li>
              <li>
                <Link 
                  to="/doubt" 
                  className="text-blue-700 transition-colors"
                >
                  Dúvidas Frequentes
                </Link>
              </li>
              <li>
                <Link 
                  to="/support" 
                  className="text-blue-700 transition-colors"
                >
                  Suporte e Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-black/90 mb-4">
              Precisa de Ajuda?
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 text-blue-700">
                  <svg fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <span className="text-black/70">(11) 2661-0000</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 text-blue-700">
                  <svg fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <span className="text-black/80">suporte@hc.fm.usp.br</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center ">
          <p className="text-black/80">
            © 2024 HC Conecta - Guia de Acesso. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;