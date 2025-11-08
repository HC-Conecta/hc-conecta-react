import { useNavigate } from "react-router-dom";
import { Paragraph } from "../ui/textos/Paragraph";
import { H3 } from "../ui/textos/H3";
import Button from "../ui/button/Button";
import TextToSpeechButton from "../tts/TextToSpeechButton";
import { LucideProps } from "lucide-react";

interface IFeatureCard {
    onClick: () => void,
    h3: string,
    icon: React.ComponentType<LucideProps>,
    paragraph: string,
    buttonChildren: string
};

export const FeatureCard = ({onClick, h3, paragraph, icon: Icon, buttonChildren}: IFeatureCard) => {

  return (
    <div className="bg-surface rounded-xl p-6 shadow-md border border-border hover:shadow-lg transition-shadow">
      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
     {<Icon size={30} className="text-blue-700" />} 
      </div>
      <H3>{h3}</H3>
      <Paragraph>
        {paragraph}
      </Paragraph>
      <div className="flex flex-col lg:flex-row gap-5 items-start lg:items-center lg:justify-between">
        <Button
          onClick={() => onClick()}
          className="bg-blue-700 text-white hover:bg-blue-800 w-full mt-4 sm:w-auto"
          size="sm"
        >
          {buttonChildren}
        </Button>
        <div>
          <TextToSpeechButton
            colorIsBlue
            text={paragraph}
          />
        </div>
      </div>
    </div>
  );
};
