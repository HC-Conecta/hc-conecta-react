import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import {
  NameValues,
  IprofileData,
  IPutProfileData,
} from "../interfaces/global";
import { Lock, FileUser, Pencil, X, Save, Baby, Loader } from "lucide-react";
import H1 from "@/components/H1";
import { Paragraph } from "@/components/Paragraph";
import { useForm } from "react-hook-form";
import { useLocation, useParams } from "react-router-dom";
import InputLogin from "@/components/InputLogin";
import { cpfMask } from "@/utils/cpfMask";

const Profile: React.FC = () => {
  const [profile, setProfile] = useState<IprofileData | null>(null);
  const [cpf, setCpf] = useState<string | null>(null);
  const [age, setAge] = useState<string>(null);
  const [password, setPassword] = useState<string | null>(null);
  const [updateExist, setUpdateExist] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const timeMessageUpdate = () => {
    setTimeout(() => {
      setUpdateExist(prev => !prev);
    }, 2000)
  }

  const location = useLocation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NameValues>();

  const { id } = useParams();

  const BASE_URL: string = `http://localhost:3000/posts/${id}`;

  const onSubmit = (data: NameValues) => {
    if (data) {
      data.cpf = data.cpf.replace(/\D/g, "");

      const dataUpdate: IPutProfileData = {
        cpf: data.cpf,
        age: parseInt(data.age),
        password: data.password,
      };

      const updateUser = async () => {
        try {
          const response = await fetch(BASE_URL, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(dataUpdate),
          });

          if (response.status !== 200) {
            console.error("Failed to update user:", response.statusText);
            setUpdateExist(false);
          } else {
            const data = await response.json();
            setUpdateExist(!updateExist);
            timeMessageUpdate();
            setIsEditing(false); // desativa edição após salvar
            setProfile(data); // atualiza perfil com dados novos
            return data;
          }
        } catch (error) {
          console.log(`Error update User: ${error}`);
        }
      };

      updateUser();
    } else {
      alert("error submit");
    }
  };

  const maskPassword = (password: string) => {
    let add = "";
    for (let i = 0; i < password.length; i++) {
      add += "•";
    }
    return add;
  };

  useEffect(() => {
    const getProfile = async () => {
      const response = await fetch(BASE_URL, { method: "GET" });
      if (response.status !== 200) {
        console.error("Failed to Get profile:", response.statusText);
      } else {
        const data = await response.json();
        setProfile(data);
        setCpf(cpfMask(data.cpf));
        setAge(data.age.toString());
        setPassword(data.password);
      }
    };
    getProfile();
  }, [id]);

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
        {profile ? (
          <div className="bg-surface rounded-xl p-8 shadow-md border border-border">
            <div className="mb-8">
              <div className="flex  items-center justify-between">
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Alterar Perfil
                </h2>
                <div>
                  <Button
                    onClick={() => setIsEditing(true)}
                    className={`flex justify-between items-center gap-3 ${
                      isEditing && "hidden"
                    }`}
                    variant="outline"
                    size="sm"
                  >
                    <Pencil size={20} />
                    Editar
                  </Button>
                  <Button
                    onClick={() => {
                      setIsEditing(false);
                      setCpf(cpfMask(profile.cpf));
                      setAge(profile.age.toString());
                      setPassword(profile.password);
                      setUpdateExist(false);
                    }}
                    className={`flex justify-between items-center gap-3 ${
                      !isEditing && "hidden"
                    }`}
                    variant="outline"
                    size="sm"
                  >
                    <X size={20} />
                    Cancelar
                  </Button>
                </div>
              </div>

              <Paragraph>Atualize suas informações de perfil abaixo</Paragraph>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div key={profile.id} className="flex flex-col gap-6">
                {/* CPF */}
                <div className="flex flex-col gap-2 relative">
                  <label className="block text-md font-medium text-foreground">
                    Alterar CPF *
                  </label>
                  <FileUser
                    size={20}
                    className="absolute left-3 top-12 text-gray-500"
                  />
                  <input
                    disabled={!isEditing}
                    {...register("cpf", { required: false, maxLength: 14 })}
                    onChange={(e) => {
                      setCpf(cpfMask(e.target.value));
                    }}
                    type="text"
                    id="cpf"
                    name="cpf"
                    value={!isEditing ? "" : cpf}
                    className="w-full px-10 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder={cpfMask(profile.cpf)}
                  />
                  {errors.cpf?.type === "maxLength" && (
                    <p className="text-red-500 font-medium text-sm">
                      Máximo de 11 caracteres permitido.
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  {/* AGE */}
                  <InputLogin
                    disabled={!isEditing}
                    register={register}
                    rules={{
                      required: false,
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
                    value={!isEditing ? "" : age}
                    errors={errors}
                    onChange={(e) => {
                      setAge(e.target.value);
                    }}
                  />

                  {errors.age?.type === "validate" && (
                    <p className="text-red-500 font-medium text-sm">
                      Idade deve ser entre 16 e 120 anos
                    </p>
                  )}
                </div>
                {/* Password */}
                <div className="flex flex-col gap-2">
                  <InputLogin
                    disabled={!isEditing}
                    register={register}
                    passwordExist={isEditing}
                    rules={{ required: false, minLength: 8 }}
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
                    value={!isEditing ? "" : password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                  {errors.password?.type === "minLength" && (
                    <p className="text-red-500 font-medium text-sm">
                      Mínimo de 8 caracteres.
                    </p>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              {isEditing && (
                <div className="flex w-full flex-col sm:flex-row gap-4">
                  <Button
                    type="submit"
                    size="lg"
                    className="text-white w-full flex justify-center gap-3 items-center"
                  >
                    <Save size={20} />
                    Salvar
                  </Button>
                </div>
              )}
            </form>
             {updateExist && (
                <div className="mt-8 text-green-500 font-medium text-sm">
                  Alterações salvas com sucesso!
                </div>
              )}
          </div>

        ) : (
          <div className="text-center flex flex-row items-center justify-center gap-3">
            <Loader size={20} className="text-blue-700" />
            <h3 className="text-xl text-muted-foreground font-medium text-blue-700">
              Preparando seu Perfil...
            </h3>
          </div>
        )}
  
      </div>
    </div>
  );
};

export default Profile;
