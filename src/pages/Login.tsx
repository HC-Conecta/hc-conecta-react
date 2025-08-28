import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import H1 from "@/components/H1";
import Button from "@/components/Button";
import { Paragraph } from "@/components/Paragraph";
import { FileUser, Lock, Mail } from "lucide-react";
import InputLogin from "@/components/InputLogin";
import { NameValues } from "@/types/global";
import { useForm } from "react-hook-form";

const Login = () => {
  const location = useLocation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NameValues>();

  const onSubmit = (data: NameValues) => {
    alert(JSON.stringify(data));
    navigate("/home");
  };

  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen p-5 flex flex-col items-center justify-center bg-gray-100 gap-10">
      <div className="flex flex-col items-center">
        <H1 gradient={true}>Bem-vindo de volta</H1>
        <Paragraph>Entre na sua conta para continuar</Paragraph>
      </div>
      <div className="bg-surface rounded-xl p-8 shadow-md border border-border">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-2">Entrar</h2>
          <Paragraph>Digite suas credenciais para acessar sua conta</Paragraph>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="flex flex-col gap-6">
            {/* CPF */}
            <InputLogin
              register={register}
              requiredInput={true}
              icon={
                <FileUser
                  size={20}
                  className="absolute left-3 top-12 text-gray-500"
                />
              }
              id="cpf"
              label="CPF *"
              placeholder="132.123.213-21"
              name="cpf"
              type="text"
              errors={errors}
            />
            {/* Password */}
            <InputLogin
              register={register}
              requiredInput={true}
              passwordExist={true}
              icon={
                <Lock
                  size={20}
                  className="absolute left-3 top-12 text-gray-500"
                />
              }
              id="password"
              label="Senha *"
              placeholder="Digite sua senha"
              name="password"
              type="password"
              errors={errors}
            />
          </div>
          {/* Submit Button */}
          <div className="flex w-full flex-col sm:flex-row gap-4">
            <Button type="submit" size="lg" className="text-white w-full">
              Entrar
            </Button>
          </div>
          <div className="text-center mt-4 flex gap-2 justify-center">
            <p className="text-lg text-muted-foreground">Não tem uma conta?</p>
            <button
              type="button"
              className="text-lg text-blue-700 font-medium hover:underline"
            >
              Criar Conta
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
