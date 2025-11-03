export const validatePassword = (password: string) => {
  const requirements = [
    { label: "Mínimo 8 caracteres", valid: password.length >= 8 },
    { label: "Una mayúscula", valid: /[A-Z]/.test(password) },
    { label: "Una minúscula", valid: /[a-z]/.test(password) },
    { label: "Un número", valid: /\d/.test(password) },
    { label: "Un carácter especial", valid: /[@$!%*?&#]/.test(password) },
  ];

  const failed = requirements.filter((r) => !r.valid);

  if (failed.length === 0) return true;

  return failed.map((r) => r.label).join(", ");
};

export const arePasswordsEquals = (value: string, password: string) => {
  return value === password || "Las contraseñas no coindicen";
};
