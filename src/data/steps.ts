import ISteps from "@/interfaces/ISteps";

export const steps: ISteps[] = [
    {
      icon: "🔐",
      title: "1. Faça seu Login",
      description: "Entre no site do HC e clique em 'Login' ou 'Entrar'",
      details: [
        "Digite seu CPF ou número de cadastro",
        "Digite sua senha",
        "Clique em 'Entrar'",
        "Se esquecer a senha, clique em 'Esqueci minha senha'",
      ],
      button: "Fazer Login",
      existButton: true,
      url: "https://portaldopaciente.hc.fm.usp.br/",
    },
    {
      icon: "📅",
      title: "2. Encontre 'Agendamento'",
      description:
        "Procure e clique no menu 'Agendamento' ou 'Marcar Consulta'",
      details: [
        "O menu geralmente fica no topo da página",
        "Pode estar escrito 'Agendamento', 'Consultas' ou 'Marcar'",
        "Clique apenas uma vez",
        "Aguarde a página carregar",
      ],
      button: "Acessar Agendamentos",
      existButton: true,
      url: "https://app.agenda.globalhealth.mv/agendar/?key=hcsp",
    },
    {
      icon: "👨‍⚕️",
      title: "3. Escolha a Especialidade",
      description: "Selecione o tipo de médico que você precisa consultar",
      details: [
        "Procure na lista a especialidade desejada",
        "Ex: Cardiologia, Dermatologia, Clínica Geral",
        "Se não souber qual, escolha 'Clínica Geral'",
        "Clique na especialidade escolhida",
      ],
    },
    {
      icon: "📍",
      title: "4. Escolha o Local",
      description: "Selecione em qual unidade do HC você quer ser atendido",
      details: [
        "Veja qual unidade é mais próxima de você",
        "Considere a facilidade de transporte",
        "Algumas especialidades só estão disponíveis em certas unidades",
        "Confirme o endereço antes de escolher",
      ],
    },
    {
      icon: "📅",
      title: "5. Escolha Data e Horário",
      description: "Selecione quando você gostaria de ser atendido",
      details: [
        "Veja as datas disponíveis no calendário",
        "Clique na data que funciona para você",
        "Escolha um horário disponível",
        "Considere o tempo para chegar ao hospital",
      ],
    },
    {
      icon: "✅",
      title: "6. Confirme o Agendamento",
      description: "Verifique todos os dados e confirme sua consulta",
      details: [
        "Confira se todos os dados estão corretos",
        "Anote ou imprima o comprovante",
        "Guarde o número do agendamento",
        "Você receberá uma confirmação por email ou SMS",
      ],
    },
  ];