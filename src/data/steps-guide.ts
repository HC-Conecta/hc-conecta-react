import { ISteps } from "@/interfaces/global";

export const steps: ISteps[] = [
    {
      number: 1,
      title: "Abra seu navegador",
      description:
        "Clique no ícone do navegador (Internet Explorer, Chrome, Firefox ou Safari) na sua área de trabalho ou menu iniciar.",
      tip: "O ícone geralmente parece com uma bússola ou tem as cores azul, verde, laranja ou vermelho.",
      buttonColor: true,
    },
    {
      number: 2,
      title: "Digite o endereço",
      description:
        "Na barra de endereços (caixa branca no topo), digite: hc.fm.usp.br",
      tip: "Certifique-se de digitar exatamente como mostrado, incluindo os pontos.",
      buttonColor: false,
      link: true,
      url: "https://www.hc.fm.usp.br/hc/portal/"
    },
    {
      number: 3,
      title: "Pressione Enter",
      description:
        "Depois de digitar o endereço, pressione a tecla Enter no seu teclado ou clique no botão 'Ir' ou na lupa.",
      tip: "A tecla Enter é a tecla maior do lado direito do teclado, geralmente com uma seta.",
      buttonColor: true,
    },
    {
      number: 4,
      title: "Aguarde o carregamento",
      description:
        "O site irá carregar. Pode demorar alguns segundos. Você verá o logo do Hospital das Clínicas.",
      tip: "Se o site não carregar, verifique se você digitou o endereço corretamente.",
      buttonColor: false,
    },
    {
      number: 5,
      title: "Encontre 'Agendamento'",
      description:
        "Procure na página principal um link ou botão com o texto 'Agendamento' ou 'Marcar Consulta'.",
      tip: "Geralmente fica no menu superior ou no centro da página principal.",
      buttonColor: true,
      link: true,
      url: "https://app.agenda.globalhealth.mv/agendar/?key=hcsp"
    },
    {
      number: 6,
      title: "Clique em Agendamento",
      description:
        "Clique uma vez no link 'Agendamento'. Isso abrirá a página onde você pode marcar sua consulta.",
      tip: "Se você clicar duas vezes muito rápido, pode abrir duas páginas. Clique apenas uma vez.",
      buttonColor: false,
    },
  ];