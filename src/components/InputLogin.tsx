import { NameValues } from "@/types/global";
import { cpfMask } from "@/utils/cpfMask";
import { Eye, EyeClosed } from "lucide-react";
import { useState } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";

type InputLoginProps = {
  label: string;
  placeholder: string;
  icon: React.ReactNode;
  type?: string;
  id: string;
  name: keyof NameValues;
  value?: string;
  passwordExist?: boolean;
  register?: UseFormRegister<NameValues>;
  errors?: FieldErrors<NameValues>;
  requiredInput?: boolean;
};

const InputLogin = ({
  label,
  placeholder,
  icon,
  type,
  id,
  name,
  value,
  passwordExist,
  register,
  errors,
  requiredInput = false,
}: InputLoginProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(true);

  const handleClick = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative">
      <label
        htmlFor="password"
        className="block text-md font-medium text-foreground mb-2"
      >
        {label}
      </label>
      {icon}

      {passwordExist && (
        <button
          onClick={() => handleClick()}
          type="button"
          className="absolute right-3 top-12 text-gray-500 cursor-pointer z-50"
        >
          {showPassword ? <EyeClosed size={20} /> : <Eye size={20} />}
        </button>
      )}

      <input
        {...(register ? register(name, { required: requiredInput }) : {})}
        type={passwordExist && !showPassword ? "text" : type}
        id={id}
        name={name}
        className="w-full px-10 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        placeholder={placeholder}
        value={value}
      />
      {errors && errors[name] && (
        <p className="text-red-500 font-medium text-sm mt-2">
          {label.replace("*", "")} é obrigatório.
        </p>
      )}
    </div>
  );
};

export default InputLogin;
