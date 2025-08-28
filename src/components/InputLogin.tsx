import { Eye, EyeClosed } from "lucide-react";
import { useState } from "react";

type InputLoginProps = {
  label: string;
  placeholder: string;
  icon: React.ReactNode;
  type?: string;
  id: string;
  name: string;
  value?: string;
  passwordExist?: boolean;
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
        type={passwordExist && !showPassword ? "text" : type}
        id={id}
        name={name}
        className="w-full px-10 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        placeholder={placeholder}
        value={value}
      />
    </div>
  );
};

export default InputLogin;
