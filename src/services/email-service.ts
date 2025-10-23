import emailjs from "@emailjs/browser";
 
interface SendEmailProps {
  form: React.RefObject<HTMLFormElement>;
  onSuccess?: () => void;
  onError?: (error) => void;
}


const sendEmailService = ({form, onSuccess, onError}: SendEmailProps) => {


    const serviceID: string = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID: string = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey: string = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceID || !templateID || !publicKey) {
      console.error("Error! Env variables not found.");
      throw new Error("Missing environment variables");
    }

    if (!form.current) {
      console.error("Error! Form reference is null.");
      throw new Error("Form reference not found");
    };

    try {
      emailjs.sendForm(serviceID, templateID, form.current, publicKey);
      onSuccess?.();
    } catch (error) {
      console.error("Error sending email:", error);
      onError?.(error);
    }
  };


  export default sendEmailService;