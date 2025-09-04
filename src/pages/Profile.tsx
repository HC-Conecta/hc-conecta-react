import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import { FormData, Contact, NameValues, IprofileData } from "../interfaces/global";
import {
  Lock,
  FileUser,
  Pin,
  Pencil,
  X,
  Save,
  Baby,
} from "lucide-react";
import H1 from "@/components/H1";
import { Paragraph } from "@/components/Paragraph";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate, useParams } from "react-router-dom";
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

  const maskPassword = (password: string) => {
    let add: string = "";
    for(let i: number = 0; i < password.length; i++) {
        add += "•";
    } 
    return add
  }

  const {id} = useParams();

  const [profile, setProfile] = useState<IprofileData | null>(null);

  const BASE_URL: string = `http://localhost:3000/posts/${id}`;

  useEffect(() => {
    const getProfile = async () => {
      const response = await fetch(BASE_URL, {method: 'GET'});
      if(response.status != 200) {
        console.error('Failed to Get profile:', response.statusText);
      } else {
        const data = await response.json();
        setProfile(data);
      }
    };
    getProfile();
  }, [id])

  const [showButton, setShowButton] = useState<boolean>(true);

  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="p-5 flex flex-col items-center justify-center gap-10 mb-10 mt-10">
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
           {profile ? (
              <div key={profile.id} className="flex flex-col gap-6">
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
                  value={!showButton ? profile.cpf : ""}
                  className="w-full px-10 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder={profile.cpf}
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
                  disabled={showButton == true}
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
                  placeholder={profile.age.toString()}
                  name="age"
                  type="number"
                  errors={errors}
                  value={!showButton ? profile.age.toString() : ""}
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
                  placeholder={maskPassword(profile.password)}
                  name="password"
                  type="password"
                  errors={errors}
                  value={!showButton ? profile.password : ""}
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
           ): ""}
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
