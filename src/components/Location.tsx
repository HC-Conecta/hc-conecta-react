import { Ilocations } from "@/interfaces/global";
import Button from "./Button";
import { Paragraph } from "./Paragraph";
import { MapIcon } from "lucide-react";
import TextToSpeechButton from "@/components/TTS/TextToSpeechButton";

const Location = () => {

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

    return (
        <section className="py-16 flex flex-col items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-2">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Onde encontrar o Hospital das Clínicas
          </h2>
          <p className="text-xl text-muted-foreground mb-5 max-w-4xl">
            O Hospital das Clínicas está localizado em uma região de fácil
            acesso. Veja abaixo o endereço completo e as opções de transporte.
          </p>
        </div>
        <div className="mb-5"> 
          <TextToSpeechButton colorIsBlue text="Onde encontrar o Hospital das Clínicas? O Hospital das Clínicas está localizado em uma região de fácil acesso. Veja abaixo o endereço completo e as opções de transporte." />
        </div>
        {locations.length > 0 &&
          locations.map((location) => (
            <div
              key={location.id}
              className={`flex flex-col lg:flex-row p-6 justify-center gap-5 md:gap-20 xl:gap-32 items-center max-w-5xl ${location.invertStyle === true ? "lg:flex-row-reverse" : ""}`}
            >
              <figure>
                <img
                  className="rounded-xl w-[25rem] xl:w-[28rem]"
                  src={location.img}
                  alt={location.title}
                />
              </figure>
              <div id="mapa" className="flex flex-col max-w-md items-start justify-center text-start">
                <h3 className="font-semibold text-xl text-foreground mb-1 text-blue-700">
                  {location.title}
                </h3>
                <div className="flex flex-col">
                  <div className="flex gap-2 items-center">
                    <i className="relative bottom-1">
                      {" "}
                      <MapIcon />
                    </i>
                    <Paragraph>
                      {" "}
                      <b>{location.street}</b>{" "}
                    </Paragraph>
                  </div>
                  <Paragraph>{location.description} </Paragraph>
                </div>
                <div className="flex flex-col items-start gap-5 lg:flex lg:flex-row lg:justify-center lg:items-center lg:gap-20">
                  <Button className="text-white mt-5" size="md">
                  <a href={location.map} target="_blank">
                    {" "}
                    Acessar no Mapa →
                  </a>{" "}
                </Button>
                 <div className=""> 
                    <TextToSpeechButton colorIsBlue text={`${location.title}. Endereço: ${location.street}. Descrição: ${location.description} `} />
                  </div>
                </div>
              </div>
            </div>
          ))}
      </section>
    )
}

export default Location;