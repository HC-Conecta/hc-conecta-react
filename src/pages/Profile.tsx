import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import { FormData, Contact, NameValues } from "../interfaces/global";
import {
  Phone,
  Mail,
  MapPin,
  Lock,
  FileUser,
  Pin,
  Pencil,
  X,
  Save,
} from "lucide-react";
import H1 from "@/components/H1";
import { Paragraph } from "@/components/Paragraph";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import InputLogin from "@/components/InputLogin";
import { cpfMask } from "@/utils/cpfMask";

const Profile: React.FC = () => {
  const location = useLocation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NameValues>();

  const onSubmit = (data: NameValues) => {
    if (data) {
      data.cpf = data.cpf.replace(/\D/g, "");
      alert(JSON.stringify(data));
      navigate("/home");
    } else {
      alert("error submit");
    }
  };

  const [showButton, setShowButton] = useState<boolean>(true);

  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="bg-background py-16">
      <div className="flex flex-col items-center justify-center gap-10">
        <div className="flex flex-col items-center">
          <H1 gradient={true}>Informações Pessoais</H1>
          <Paragraph>Gerencie suas informações de perfil</Paragraph>
        </div>
        <div className="bg-surface rounded-xl p-8 shadow-md border border-border">
          <div className="mb-8">
            <div className="flex  items-center justify-between">
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Alterar Perfil
              </h2>
              <div>
                <Button
                  onClick={() => setShowButton(false)}
                  className={`flex justify-between items-center gap-3 ${
                    showButton != true && "hidden"
                  }`}
                  variant="outline"
                  size="sm"
                >
                  <i>
                    {" "}
                    <Pencil size={20} />
                  </i>
                  Editar{" "}
                </Button>
                <Button
                  onClick={() => setShowButton(true)}
                  className={`${
                    showButton == false
                      ? "flex justify-between items-center gap-3"
                      : "hidden"
                  }`}
                  variant="outline"
                  size="sm"
                >
                  <i>
                    {" "}
                    <X size={20} />
                  </i>
                  Cancelar{" "}
                </Button>
              </div>
            </div>

            <Paragraph>Atualize suas informações de perfil abaixo</Paragraph>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="flex flex-col gap-6">
              {/* CPF */}
              <div className="flex flex-col gap-2 relative">
                {/* CPF */}
                <label className="block text-md font-medium text-foreground">
                  Alterar CPF *
                </label>
                <FileUser
                  size={20}
                  className="absolute left-3 top-12 text-gray-500"
                />
                <input
                  disabled={showButton == true}
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
              {/* Password */}
              <div className="flex flex-col gap-2">
                {/* Password */}
                <InputLogin
                  disabled={showButton == true}
                  register={register}
                  passwordExist={showButton != true}
                  rules={{ required: true, minLength: 8 }}
                  icon={
                    <Lock
                      size={20}
                      className="absolute left-3 top-12 text-gray-500"
                    />
                  }
                  id="password"
                  label="Alterar Senha *"
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
            {showButton != true && (
              <div className="flex w-full flex-col sm:flex-row gap-4">
                <Button type="submit" size="lg" className="text-white w-full flex justify-center gap-3 items-center">
                    <i> <Save size={20} /></i>
                  Salvar
                </Button>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
