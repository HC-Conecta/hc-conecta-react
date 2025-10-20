import { Contact } from "@/interfaces/global";

export const contacts: Contact[] = [
    {
      type: "phone",
      label: "Agendamento de Consultas",
      value: "(11) 2661-6000",
      description: "Segunda a sexta, das 7h às 17h",
      text: "Para agendar consultas, ligue para (11) 2661-6000, de segunda a sexta, das 7h às 17h.",
    },
    {
      type: "phone",
      label: "Suporte Técnico",
      value: "(11) 2661-0000",
      description: "Segunda a sexta, das 8h às 18h",
      text: "Para suporte técnico, entre em contato pelo número (11) 2661-0000, de segunda a sexta, das 8h às 18h.",
    },
    {
      type: "phone",
      label: "Emergência",
      value: "192",
      description: "SAMU - 24 horas por dia",
      text: "Em caso de emergência, ligue para o SAMU no número 192, disponível 24 horas por dia.",
    },
    {
      type: "email",
      label: "Email de Suporte",
      value: "suporte@hc.fm.usp.br",
      description: "Resposta em até 48 horas",
      text: "Para suporte, envie um e-mail para suporte@hc.fm.usp.br ou utilize o formulário abaixo. Resposta em até 48 horas.",
    },
    {
      type: "email",
      label: "Email Geral",
      value: "contato@hc.fm.usp.br",
      description: "Para informações gerais",
      text: "Para informações gerais, envie um e-mail para contato@hc.fm.usp.br.",
    },
    {
      type: "address",
      label: "Endereço Principal",
      value: "Rua Dr. Ovídio Pires de Campos, 225",
      description: "Cerqueira César, São Paulo - SP",
      text: "Endereço principal: Rua Dr. Ovídio Pires de Campos, 225, Cerqueira César, São Paulo - SP.",
    },
  ];