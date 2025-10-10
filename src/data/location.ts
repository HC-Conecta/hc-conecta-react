import { Ilocations } from "@/interfaces/global";

const locations: Ilocations[] = [
    {
      id: 1,
      title: "Hospital das Clínicas de São Paulo (HC - USP)",
      street: "Rua Teodoro Sampaio, 561 - Pinheiros, São Paulo - SP.",
      img: "/img-location/img-hc1.png",
      description:
        "O HC da Universidade de São Paulo é o maior complexo hospitalar da América Latina. Ele é referência no atendimento à saúde e pesquisa.",
      map: "https://www.bing.com/maps?pglt=2083&q=Hospital+das+Cl%C3%ADnicas+de+S%C3%A3o+Paulo+(HC+-+USP)&cvid=726eb1385d0a439ea72b1dd893d55c1f&gs_lcrp=EgRlZGdlKgYIABBFGDsyBggAEEUYOzIGCAEQRRg8MgYIAhBFGDwyBggDEEUYPNIBBzI1NWowajGoAgCwAgA&FORM=ANNTA1&ucpdpc=UCPD&DAF0=1&PC=U531",
    },
    {
      id: 2,
      title: "Hospital das Clínicas de Ribeirão Preto (HC - USP)",
      street: "Av. Bandeirantes, 3900 - Ribeirão Preto - SP.",
      img: "/img-location/img-hc2.png",
      description:
        "O HC de Ribeirão Preto, ligado à Universidade de São Paulo, é um centro de excelência em atendimento à saúde e realiza diversas pesquisas clínicas e científicas.",
      map: "https://www.bing.com/maps?pglt=2083&q=Hospital+das+Cl%C3%ADnicas+de+Ribeir%C3%A3o+Preto&cvid=8ccbc7777d2c43e589246ba585983981&DAF0=1&PC=U531",
      invertStyle: true
    },
    {
      id: 3,
      title: "Hospital das Clínicas de Porto Alegre (HCPA)",
      street: "Rua Ramiro Barcelos, 2350 - Porto Alegre - RS.",
      img: "/img-location/img-hc3.png",
      description:
        "O HCPA é um hospital de referência no Rio Grande do Sul, oferecendo atendimento médico em diversas especialidades e realizando pesquisas avançadas na área da saúde.",
      map: "https://www.bing.com/maps?pglt=2083&q=Hospital+das+Cl%C3%ADnicas+de+Porto+Alegre&cvid=cf1758e3b8084fcdb86d48c2423b8cbb&DAF0=1&PC=U531",
    },
  ];

  export default locations;