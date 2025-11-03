import { useNavigate } from "react-router-dom";
import TextToSpeechButton from "../tts/TextToSpeechButton";
import Button from "../ui/button/Button";
import H2 from "../ui/textos/H2";
import { H3 } from "../ui/textos/H3";
import { Paragraph } from "../ui/textos/Paragraph";
import { FeatureCard } from "./Feature-card";
import { Calendar, CircleCheck, MessageCircleQuestionMark } from "lucide-react";


const SectionCardHome = () => {

  const navigate = useNavigate();

  return (
    <>
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 flex flex-col items-center justify-center">
            <H2>Como Podemos Ajudar Você?</H2>
            <p className="text-xl text-muted-foreground mb-8">
              {" "}
              Oferecemos guias simples e suporte para facilitar o seu acesso aos
              serviços de saúde.{" "}
            </p>
            <div>
              <TextToSpeechButton
                id="btn-audio"
                colorIsBlue
                text="Como Podemos Ajudar Você? Oferecemos guias simples e suporte para facilitar o seu acesso aos serviços de saúde."
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <FeatureCard
                buttonChildren="Ver Guia"
                h3="Passo a Passo Simples"
                icon={CircleCheck}
                onClick={() => navigate('/guia')}
                paragraph="Passo a Passo Simples!  Explicações claras e detalhadas para acessar o site do Hospital das Clínicas."
            />

            {/* Card 2 */}
            <FeatureCard
                buttonChildren="Aprender"
                h3="Agendar Consultas"
                icon={Calendar}
                onClick={() => navigate('/consulta')}
                paragraph="Aprenda como marcar suas consultas médicas de forma fácil e
                rápida."
            />
            
                 {/* Card 3 */}
            <FeatureCard
                buttonChildren="Ver Dúvidas"
                h3="Tire suas Dúvidas"
                icon={MessageCircleQuestionMark}
                onClick={() => navigate('/duvida')}
                paragraph="Encontre respostas para as perguntas mais comuns sobre o
                Hospital das Clínicas."
            />
           
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionCardHome;
