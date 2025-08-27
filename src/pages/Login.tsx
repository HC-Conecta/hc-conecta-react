import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import H1 from "@/components/H1";
import Button from "@/components/Button";
import { Paragraph } from "@/components/Paragraph";
import { Mail } from "lucide-react";

const Login = () => {
  const location = useLocation();

  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen p-5 flex flex-col items-center justify-center bg-gray-100 gap-10">
      <div className="flex flex-col items-center gap-3">
        <H1 gradient={true}>Bem-vindo de volta</H1>
        <Paragraph>Entre na sua conta para continuar</Paragraph>
      </div>
      <div className="bg-surface rounded-xl p-8 shadow-md border border-border">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">Entrar</h2>
          <Paragraph>Digite suas credenciais para acessar sua conta</Paragraph>
        </div>

        <form className="space-y-6">
          <div className="flex flex-col gap-6">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-md font-medium text-foreground mb-2"
              >
                E-mail *
              </label>
              <input
                type="text"
                id="email"
                name="email"
                className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="seu@email.com"
                
              />
            </div>
            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-md font-medium text-foreground mb-2"
              >
                Senha *
              </label>
              <input
                type="text"
                id="password"
                name="password"
                className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Digite sua senha"
              />
            </div>
          </div>
          {/* Submit Button */}
          <div className="flex w-full flex-col sm:flex-row gap-4">
            <Button
            onClick={() => navigate("/home")}
            type="submit" size="lg" className="text-white w-full">
              Entrar
            </Button>
          </div>
          <div className="text-center mt-4 flex gap-2 justify-center">
            <p className="text-lg text-muted-foreground">
              Não tem uma conta?
            </p>
            <button
              type="button"
              className="text-lg text-blue-700 font-medium hover:underline"
              onClick={() => navigate("/register")}
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
