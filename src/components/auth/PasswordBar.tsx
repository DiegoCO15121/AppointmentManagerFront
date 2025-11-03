import PasswordStrengthBar from "react-password-strength-bar";
import { FaCheck, ImCross } from "@/icons/index";

type PasswordBarProps = {
  password: string;
};

export default function PasswordSBar({ password }: PasswordBarProps) {
  const requirements = [
    { label: "Mínimo 8 caracteres", valid: password?.length >= 8 },
    { label: "Una mayúscula", valid: /[A-Z]/.test(password || "") },
    { label: "Una minúscula", valid: /[a-z]/.test(password || "") },
    { label: "Un número", valid: /\d/.test(password || "") },
    { label: "Un carácter especial", valid: /[@$!%*?&#]/.test(password || "") },
  ];

  const allValid = requirements.every((req) => req.valid);

  return (
    <>
      <PasswordStrengthBar
        password={password}
        minLength={4}
        scoreWords={
          allValid
            ? ["Débil", "Débil", "Ok", "Fuerte", "Fuerte"]
            : ["Débil", "Débil", "Ok", "Bien", "Fuerte"]
        }
        shortScoreWord={"Muy corta"}
        barColors={["#ddd", "#ef4836", "#FF0000", "#00AAFF", "#06CC00"]}
      />

      <ul className="text-sm space-y-1">
        {requirements.map((req, index) => (
          <li
            key={index}
            className={`flex items-center gap-2 ${
              req.valid ? "text-green-600" : "text-red-500"
            }`}
          >
            {req.valid ? (
              <FaCheck className="w-2 h-2" />
            ) : (
              <ImCross className="w-2 h-2" />
            )}
            {req.label}
          </li>
        ))}
      </ul>
    </>
  );
}
