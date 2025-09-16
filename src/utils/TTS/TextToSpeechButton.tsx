// components/TextToSpeechButton.tsx
import React, { useState } from 'react';
import TextToSpeech from 'react-text-to-speech';

const TextToSpeechButton: React.FC<{ text: string }> = ({ text }) => {
  const [isSpeaking, setIsSpeaking] = useState(false);

  const speakText = () => {
    // Se já estiver falando, não faz nada
    if (isSpeaking) return;

    setIsSpeaking(true);

    // Criar uma instância SpeechSynthesisUtterance com o texto
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'pt-BR'; // Defina o idioma como português
    utterance.onend = () => {
      setIsSpeaking(false); // Quando o áudio terminar, o estado volta ao normal
    };

    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className='relative top-2 text-blue-700 flex flex-row-reverse items-center gap-2'>
      <button onClick={speakText} disabled={isSpeaking}>
        {isSpeaking ? 'Falando...' : 'Ouvir Texto'}
      </button>
      {/* Usando react-text-to-speech */}
      <TextToSpeech
        text={text}
        rate={1}
        pitch={1}
        volume={1}
        lang="pt-BR"
      />
    </div>
  );
};

export default TextToSpeechButton;
