import React, { useEffect, useRef, useState } from "react";
import Button from "../components/Button";
import { 
  Contact, 
  emailData} from "../interfaces/global";
import { Phone, Mail, MapPin } from "lucide-react";
import H1 from "@/components/H1";
import { Paragraph } from "@/components/Paragraph";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { phoneMask } from "@/utils/phoneMask";

const Support: React.FC = () => {

  const [emailSubmit, setEmailSubmit] = useState<boolean>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [notNullExists, setNotNullExists] = useState<boolean>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<emailData>();

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const contacts: Contact[] = [
    {
      type: "phone",
      label: "Agendamento de Consultas",
      value: "(11) 2661-6000",
      description: "Segunda a sexta, das 7h às 17h",
    },
    {
      type: "phone",
      label: "Suporte Técnico",
      value: "(11) 2661-0000",
      description: "Segunda a sexta, das 8h às 18h",
    },
    {
      type: "phone",
      label: "Emergência",
      value: "192",
      description: "SAMU - 24 horas por dia",
    },
    {
      type: "email",
      label: "Email de Suporte",
      value: "suporte@hc.fm.usp.br",
      description: "Resposta em até 48 horas",
    },
    {
      type: "email",
      label: "Email Geral",
      value: "contato@hc.fm.usp.br",
      description: "Para informações gerais",
    },
    {
      type: "address",
      label: "Endereço Principal",
      value: "Rua Dr. Ovídio Pires de Campos, 225",
      description: "Cerqueira César, São Paulo - SP",
    },
  ];

  const timeMessageUpdate = () => {
    setTimeout(() => {
      setIsLoading(prev => !prev);
    }, 2000)
  }

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = () => {
    setIsLoading(!isLoading);

    timeMessageUpdate()

    const serviceID: string = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID: string = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey: string = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if(!serviceID || !templateID || !publicKey) {
      setNotNullExists(true);
      console.error("Error! Env variables not found.");
      return;
    } else setNotNullExists(false);

      if (!form.current) return;
      
      emailjs.sendForm(serviceID, templateID, form.current!, publicKey).then(
        () => {
          setEmailSubmit(true);
          form.current?.reset();
        },
        (error) => {
          setEmailSubmit(false);
          console.error(error);
      
        });
    };

  return (
    <div className="bg-background py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <H1>Suporte e Contato</H1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Estamos aqui para ajudar você. Entre em contato conosco por
            telefone, email ou use o formulário abaixo
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {contacts.map((contact, index) => (
            <div
              key={index}
              className="bg-surface rounded-lg p-6 shadow-md border border-border"
            >
              <div className="flex items-start space-x-3 mb-4">
                <div className="w-8 h-8 text-primary">
                  {contact.type === "phone" && (
                    <Phone className="text-blue-700" />
                  )}
                  {contact.type === "email" && (
                    <Mail className="text-blue-700" />
                  )}
                  {contact.type === "address" && (
                    <MapPin className="text-blue-700" />
                  )}
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1 text-blue-700">
                    {contact.label}
                  </h3>
                  <p className="text-primary font-bold text-lg mb-1">
                    {contact.value}
                  </p>
                  <p className="text-md text-muted-foreground">
                    {contact.description}
                  </p>
                </div>
              </div>

              {contact.type === "phone" && (
                <Button
                  variant="outline"
                  className="inline-flex items-center justify-center w-full mt-3 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Ligar Agora
                </Button>
              )}

              {contact.type === "email" && (
                <Button
                  variant="outline"
                  className="inline-flex items-center justify-center w-full mt-3 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Enviar Email
                </Button>
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
            <Paragraph>
              Preencha o formulário abaixo e nossa equipe entrará em contato com
              você em breve.
            </Paragraph>
          </div>

          <form ref={form} onSubmit={handleSubmit(sendEmail)} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-md font-medium text-foreground mb-2"
                >
                  Nome completo *
                </label>
                <input
                  {...register("name", { required: true })}
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Digite seu nome completo"
                />
                {errors.name?.type === "required" && (
                  <p className="text-red-500 font-semibold mt-2">
                    {" "}
                    Nome é obrigátorio!
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-md font-medium text-foreground mb-2"
                >
                  Email
                </label>
                <input
                  {...register("email", { required: true })}
                  type="text"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="seu@email.com"
                />
                {errors.email?.type === "required" && (
                  <p className="text-red-500 font-semibold mt-2">
                    {" "}
                    Email é obrigátorio!
                  </p>
                )}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Phone */}
              <div>
                <label
                  htmlFor="telephone"
                  className="block text-md font-medium text-foreground mb-2"
                >
                  Telefone
                </label>
                <input
                  {...register("telephone", { required: true })}
                  type="telephone"
                  id="telephone"
                  name="telephone"
                  maxLength={15}
                  onChange={(e) => {
                    e.target.value = phoneMask(e.target.value);
                  }}
                  className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="(11) 99999-9999"
                />
                {errors.telephone?.type === "required" && (
                  <p className="text-red-500 font-semibold mt-2">
                    {" "}
                    Telefone é obrigátorio!
                  </p>
                )}
              </div>

              {/* Service Type - WIP */}
              <div>
                <label
                  htmlFor="serviceType"
                  className="block text-md font-medium text-foreground mb-2"
                >
                  Tipo de ajuda
                </label>
                <select
                  {...register("serviceType", {
                    required: true,
                    validate: (value) => value !== "Selecione uma opção",
                  })}
                  id="serviceType"
                  name="serviceType"
                  className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">Selecione uma opção</option>
                  <option value="agendamento">Ajuda com agendamento</option>
                  <option value="site">Dificuldades com o site</option>
                  <option value="cancelamento">
                    Cancelar/remarcar consulta
                  </option>
                  <option value="cadastro">Problemas com cadastro</option>
                  <option value="geral">Informações gerais</option>
                  <option value="outros">Outros</option>
                </select>
                {errors.serviceType?.type === "required" && (
                  <p className="text-red-500 font-semibold mt-2">
                    {" "}
                    Você precisa selcionar uma opção!
                  </p>
                )}
              </div>
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-md font-medium text-foreground mb-2"
              >
                Descreva sua dúvida ou problema *
              </label>
              <textarea
                {...register("message", { required: true })}
                id="message"
                name="message"
                rows={5}
                className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-vertical"
                placeholder="Explique detalhadamente qual ajuda você precisa..."
              />
              {errors.message?.type === "required" && (
                <p className="text-red-500 font-semibold mt-2">
                  {" "}
                  Dúvida ou problema é obrigátorio!
                </p>
              )}
            </div>

            {/* Checkbox */}
            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                id="needsHelp"
                name="needsHelp"
                className="mt-1 w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
              />
              <label
                htmlFor="needsHelp"
                className="text-md text-muted-foreground"
              >
                Preciso de ajuda urgente (entraremos em contato no mesmo dia)
              </label>
            </div>

            {/* Submit Button */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                type="submit"
                size="lg"
                className="flex-grow sm:flex-grow-0 text-white"
              >
                {!isLoading ? "Enviar Mensagem" : "Enviando Mensagem..." }
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
          <div>
            {emailSubmit && (
                <div className="mt-8 text-green-500 font-medium text-sm">
                 Mensagem enviada com sucesso! 🎉
                </div>
              )}
            {emailSubmit === false && (
              <div className="mt-8 text-red-500 font-medium text-sm">
                   Oops! Não conseguimos enviar sua mensagem, tente de novo.
              </div>
            )}

            {notNullExists && (
              <div className="mt-8 text-red-500 font-medium text-sm">
                   Ocorreu um erro inesperado, tente novamente mais tarde!
              </div>
            )}
          </div>
        </div>

        {/* Additional Help */}
        <div className="mt-12 bg-accent rounded-lg p-8">
          <h3 className="text-xl font-bold text-foreground mb-4 text-center">
            Outras Formas de Obter Ajuda
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl mb-2">👥</div>
              <h4 className="font-semibold text-foreground mb-2 text-lg">
                Peça Ajuda a um Familiar
              </h4>
              <p className="text-lg text-muted-foreground">
                Um familiar pode ajudar você a navegar no site ou fazer o
                agendamento
              </p>
            </div>
            <div>
              <div className="text-3xl mb-2">🏥</div>
              <h4 className="font-semibold text-foreground mb-2 text-lg">
                Vá Pessoalmente
              </h4>
              <p className="text-lg text-muted-foreground">
                Você pode agendar presencialmente no hospital, no setor de
                agendamento
              </p>
            </div>
            <div>
              <div className="text-3xl mb-2">📚</div>
              <h4 className="font-semibold text-foreground mb-2 text-lg">
                Consulte os Guias
              </h4>
              <p className="text-lg text-muted-foreground">
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
