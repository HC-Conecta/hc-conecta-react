import React, { useState } from 'react';
import Button from '../components/Button';
import { FormData, Contact } from '../types/global';

const Support: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
    needsHelp: false,
    serviceType: ''
  });

  const contacts: Contact[] = [
    {
      type: 'phone',
      label: 'Agendamento de Consultas',
      value: '(11) 2661-6000',
      description: 'Segunda a sexta, das 7h às 17h'
    },
    {
      type: 'phone',
      label: 'Suporte Técnico',
      value: '(11) 2661-0000',
      description: 'Segunda a sexta, das 8h às 18h'
    },
    {
      type: 'phone',
      label: 'Emergência',
      value: '192',
      description: 'SAMU - 24 horas por dia'
    },
    {
      type: 'email',
      label: 'Email de Suporte',
      value: 'suporte@hc.fm.usp.br',
      description: 'Resposta em até 48 horas'
    },
    {
      type: 'email',
      label: 'Email Geral',
      value: 'contato@hc.fm.usp.br',
      description: 'Para informações gerais'
    },
    {
      type: 'address',
      label: 'Endereço Principal',
      value: 'Rua Dr. Ovídio Pires de Campos, 225',
      description: 'Cerqueira César, São Paulo - SP'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({
        ...prev,
        [name]: checked
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      needsHelp: false,
      serviceType: ''
    });
  };

  return (
    <div className="bg-background py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-6">
            Suporte e Contato
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Estamos aqui para ajudar você. Entre em contato conosco por telefone, email ou use o formulário abaixo
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {contacts.map((contact, index) => (
            <div key={index} className="bg-surface rounded-lg p-6 shadow-md border border-border">
              <div className="flex items-start space-x-3 mb-4">
                <div className="w-8 h-8 text-primary">
                  {contact.type === 'phone' && (
                    <svg fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  )}
                  {contact.type === 'email' && (
                    <svg fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  )}
                  {contact.type === 'address' && (
                    <svg fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    {contact.label}
                  </h3>
                  <p className="text-primary font-bold text-lg mb-1">
                    {contact.value}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {contact.description}
                  </p>
                </div>
              </div>
              
              {contact.type === 'phone' && (
                <a 
                  href={`tel:${contact.value.replace(/\D/g, '')}`}
                  className="inline-flex items-center justify-center w-full mt-3 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Ligar Agora
                </a>
              )}
              
              {contact.type === 'email' && (
                <a 
                  href={`mailto:${contact.value}`}
                  className="inline-flex items-center justify-center w-full mt-3 px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-colors"
                >
                  Enviar Email
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Help Form */}
        <div className="bg-surface rounded-xl p-8 shadow-md border border-border">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Envie sua Mensagem
            </h2>
            <p className="text-muted-foreground">
              Preencha o formulário abaixo e nossa equipe entrará em contato com você em breve.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Nome completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Digite seu nome completo"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="seu@email.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Telefone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="(11) 99999-9999"
                />
              </div>

              {/* Service Type */}
              <div>
                <label htmlFor="serviceType" className="block text-sm font-medium text-foreground mb-2">
                  Tipo de ajuda
                </label>
                <select
                  id="serviceType"
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">Selecione uma opção</option>
                  <option value="agendamento">Ajuda com agendamento</option>
                  <option value="site">Dificuldades com o site</option>
                  <option value="cancelamento">Cancelar/remarcar consulta</option>
                  <option value="cadastro">Problemas com cadastro</option>
                  <option value="geral">Informações gerais</option>
                  <option value="outros">Outros</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                Descreva sua dúvida ou problema *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={5}
                className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-vertical"
                placeholder="Explique detalhadamente qual ajuda você precisa..."
              />
            </div>

            {/* Checkbox */}
            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                id="needsHelp"
                name="needsHelp"
                checked={formData.needsHelp}
                onChange={handleInputChange}
                className="mt-1 w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
              />
              <label htmlFor="needsHelp" className="text-sm text-muted-foreground">
                Preciso de ajuda urgente (entraremos em contato no mesmo dia)
              </label>
            </div>

            {/* Submit Button */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button type="submit" size="lg" className="flex-grow sm:flex-grow-0">
                Enviar Mensagem
              </Button>
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => window.history.back()}
                className="flex-grow sm:flex-grow-0"
              >
                Voltar
              </Button>
            </div>
          </form>
        </div>

        {/* Additional Help */}
        <div className="mt-12 bg-accent rounded-lg p-8">
          <h3 className="text-xl font-bold text-foreground mb-4 text-center">
            Outras Formas de Obter Ajuda
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl mb-2">👥</div>
              <h4 className="font-semibold text-foreground mb-2">Peça Ajuda a um Familiar</h4>
              <p className="text-sm text-muted-foreground">
                Um familiar pode ajudar você a navegar no site ou fazer o agendamento
              </p>
            </div>
            <div>
              <div className="text-3xl mb-2">🏥</div>
              <h4 className="font-semibold text-foreground mb-2">Vá Pessoalmente</h4>
              <p className="text-sm text-muted-foreground">
                Você pode agendar presencialmente no hospital, no setor de agendamento
              </p>
            </div>
            <div>
              <div className="text-3xl mb-2">📚</div>
              <h4 className="font-semibold text-foreground mb-2">Consulte os Guias</h4>
              <p className="text-sm text-muted-foreground">
                Temos guias passo a passo para ajudar você a usar o site
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;