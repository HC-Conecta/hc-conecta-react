import TextToSpeechButton from "../tts/TextToSpeechButton";
import { LiTips } from "./LiTips";

const TipsAppointment = () => {
  return (
    <div className="bg-success/10 border border-success/20 rounded-lg p-6 mb-8">
      <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
        <span className="text-2xl mr-2">💡</span>
        Dicas Importantes
      </h3>
      <ul className="space-y-3">
        <LiTips> Chegue 30 minutos antes da consulta </LiTips>
        <LiTips>
          {" "}
          Se não puder comparecer, cancele com 24h de antecedência{" "}
        </LiTips>
        <LiTips> Traga uma lista com suas dúvidas para o médico </LiTips>
        <LiTips> Anote as orientações que o médico der </LiTips>
      </ul>
      <div className="mt-5 flex items-start">
        <TextToSpeechButton
          colorIsBlue
          text="Dicas Importantes! Chegue 30 minutos antes da consulta; Se não puder comparecer, cancele com 24h de antecedência; Traga uma lista com suas dúvidas para o médico; Anote as orientações que o médico der"
        />
      </div>
    </div>
  );
};

export default TipsAppointment;
