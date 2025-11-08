import TextToSpeechButton from "@/components/tts/TextToSpeechButton";
import { ShieldAlert } from "lucide-react";

type ImportantNoticeProps = {
    text: string,
    title: string
};
export const ImportantNotice = ({text, title}: ImportantNoticeProps) => {
  return (
    <div>
      <div className="bg-warning/10 bg-yellow-200 border border-warning/20 rounded-lg p-6 mb-8">
        <div className="flex items-start space-x-3">
          <div className="mt-1">
          <ShieldAlert size={24} strokeWidth={2.75}  className="w-full h-full text-warning" />
          </div>
          <div className="flex flex-col items-start w-full">
            <h3 className=" font-semibold text-foreground mb-2"> {title} </h3>
            <p className="text-muted-foreground text-lg">
              {text}
            </p>
            <div className="mt-5">
             <TextToSpeechButton colorIsBlue={false} text={text} />
          </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};
