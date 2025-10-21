import { useLocation, useNavigate } from "react-router-dom";
import H1 from "@/components/ui/textos/H1";
import Button from "@/components/ui/button/Button";
import { Paragraph } from "@/components/ui/textos/Paragraph";
import { Baby, FileUser, Lock, User } from "lucide-react";
import InputLogin from "@/components/ui/input/InputLogin";
import { useForm } from "react-hook-form";
import {NameValues } from "@/interfaces/global";
import { cpfMask } from "@/utils/mask/cpfMask";

const Register = () => {
  const location = useLocation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NameValues>();
  

  const onSubmit = async (data: NameValues) => {
    if (data) {
      data.cpf = data.cpf.replace(/\D/g, "");
      
      const BASE_URL: string = `${import.meta.env.VITE_API_URL}`;

      const allData: NameValues = {
        ...data,
        name: data.name.charAt(0).toUpperCase() + data.name.slice(1),
      }

      try {
        const response = await fetch(BASE_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(allData), 
        });

        if(response.status != 201) {
          console.error('Failed to create post:', response.statusText);
        } else {
          navigate("/login");
          const data = await response.json();
          return data;
        }
      } catch(error) {
        console.log(`Error create User: ${error}`);
      }

    } else {
      alert("Erro no cadastro, tente novamente.");
    }
  };

  const navigate = useNavigate();

  return (
    <div className="min-h-screen p-5 flex flex-col items-center justify-center bg-gray-100 gap-10">
      <section className="mt-10 mb-10">
        <div className="flex flex-col items-center mb-10">
          <H1 gradient={true}>Criar Conta</H1>
          <Paragraph>Junte-se a nós hoje mesmo</Paragraph>
        </div>
        <div className="bg-surface rounded-xl p-8 shadow-md border border-border">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Cadastro
            </h2>
            <Paragraph>Preencha os dados abaixo para criar sua conta</Paragraph>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="flex flex-col gap-6 mb">

            <div className="flex flex-col gap-2">
                {/* NAME */}
                <InputLogin
                  register={register}
                  rules={{
                    required: true}}
                  icon={
                    <User
                      size={20}
                      className="absolute left-3 top-12 text-gray-500"
                    />
                  }
                  id="nome"
                  label="Nome *"
                  placeholder="Seu Nome"
                  name="name"
                  type="text"
                  errors={errors}
                />
                {errors.name?.type === "required" && (
                  <p className="text-red-500 font-medium text-sm">
                    Nome é obrigatório.
                  </p>
                )}
              </div>

              {/* CPF */}
              <div className="flex flex-col gap-2 relative">
                {/* CPF */}
                <label className="block text-md font-medium text-foreground">
                  CPF *
                </label>
                <FileUser
                  size={20}
                  className="absolute left-3 top-12 text-gray-500"
                />
                <input
                  {...register("cpf", { required: true, maxLength: 14 })}
                  onChange={(e) => {
                    e.target.value = cpfMask(e.target.value);
                  }}
                  type="text"
                  id="cpf"
                  name="cpf"
                  className="w-full px-10 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="123.456.789-00"
                />
                {errors.cpf?.type === "required" && (
                  <p className="text-red-500 font-medium text-sm">
                    CPF é obrigatório.
                  </p>
                )}
                {errors.cpf?.type === "maxLength" && (
                  <p className="text-red-500 font-medium text-sm">
                    Máximo de 11 caracteres permitido.
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-2">
                {/* AGE */}
                <InputLogin
                  register={register}
                  rules={{
                    required: true,
                    validate: (value: number) => value > 15 && value <= 120,
                  }}
                  icon={
                    <Baby
                      size={20}
                      className="absolute left-3 top-12 text-gray-500"
                    />
                  }
                  id="age"
                  label="Idade *"
                  placeholder="Sua Idade"
                  name="age"
                  type="number"
                  errors={errors}
                />
                {errors.age?.type === "required" && (
                  <p className="text-red-500 font-medium text-sm">
                    Idade é obrigatório.
                  </p>
                )}

                {errors.age?.type === "validate" && (
                  <p className="text-red-500 font-medium text-sm">
                    Idade deve ser entre 16 e 120 anos
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-2">
                {/* Password */}
                <InputLogin
                  register={register}
                  passwordExist={true}
                  rules={{ required: true, minLength: 8 }}
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
                {errors.password?.type === "required" && (
                  <p className="text-red-500 font-medium text-sm">
                    Senha é obrigatório.
                  </p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-500 font-medium text-sm">
                    Mínimo de 8 caracteres.
                  </p>
                )}
              </div>
            </div>
            {/* Submit Button */}
            <div className="flex w-full flex-col sm:flex-row gap-4">
              <Button type="submit" size="lg" className="text-white w-full">
                Entrar
              </Button>
            </div>
            <div className="text-center mt-4 flex gap-2 justify-center">
              <p className="text-lg text-muted-foreground">Já tem uma conta?</p>
              <button
                type="button"
                className="text-lg text-blue-700 font-medium hover:underline"
                onClick={() => navigate("/login")}
              >
                Fazer login
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Register;
function CharAt(arg0: number) {
  throw new Error("Function not implemented.");
}

