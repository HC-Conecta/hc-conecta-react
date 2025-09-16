// components/TextToSpeechButton.tsx
import React, { useState } from "react";
import TextToSpeech from "react-text-to-speech";

const TextToSpeechButton: React.FC<{ text: string }> = ({ text }) => {
  const [isSpeaking, setIsSpeaking] = useState(false);

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
    <div className="relative top-2 text-blue-700 flex flex-row-reverse items-center gap-2">
      <button onClick={speakText} disabled={isSpeaking}>
        {isSpeaking ? "Falando..." : "Ouvir Texto"}
      </button>

      <TextToSpeech text={text} rate={1} pitch={1} volume={1} lang="pt-BR" />
    </div>
  );
};

export default TextToSpeechButton;
