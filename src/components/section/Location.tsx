import { Ilocations } from "@/interfaces/global";
import Button from "../ui/button/Button";
import { Paragraph } from "../ui/textos/Paragraph";
import { MapIcon } from "lucide-react";
import TextToSpeechButton from "@/components/tts/TextToSpeechButton";
import locations from "@/data/location";

const Location = () => {

    return (
        <section className=" flex flex-col items-center justify-center">
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