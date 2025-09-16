// components/TextToSpeechButton.tsx
import React from 'react';
import TextToSpeech from 'react-text-to-speech';

const TextToSpeechButton: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div className='text-blue-700'>
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
