// components/TextToSpeechButton.tsx
import React, { useState } from "react";
import TextToSpeech from "react-text-to-speech";

interface ItextToSpeechButton {
  text: string,
  colorIsBlue: boolean,
  id?: string
}

const TextToSpeechButton = ({ text, colorIsBlue = true, id }: ItextToSpeechButton ) => {

  const [isSpeaking, setIsSpeaking] = useState<boolean>(null);

  const speakText = () => {
    setTimeout(() => {
      if (isSpeaking) return;

      setIsSpeaking(true);
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "pt-BR";
      utterance.onend = () => {
        setIsSpeaking(false);
      };

      window.speechSynthesis.speak(utterance);
    }, 500);
  };

  return (
    <div id={id} className={`relative top-2 flex flex-row-reverse items-center gap-2 font-semibold ${colorIsBlue ? "text-blue-700" : ""}`}>
      <button onClick={speakText} disabled={isSpeaking}>
        {isSpeaking ? "Falando..." : "Ouvir Texto"}
      </button>

      <TextToSpeech text={text} rate={1} pitch={1} volume={1} lang="pt-BR" />
    </div>
  );
};

export default TextToSpeechButton;
