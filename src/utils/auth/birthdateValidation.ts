export function birthdateValidation(value: string): string | true {
  const fecha = new Date(value);
  const hoy = new Date();

  if (fecha > hoy) {
    return "La fecha de nacimiento no puede ser futura.";
  }

  const hace120Anios = new Date();
  hace120Anios.setFullYear(hoy.getFullYear() - 90);

  if (fecha < hace120Anios) {
    return "La fecha de nacimiento no puede ser tan antigua.";
  }

  let edad = hoy.getFullYear() - fecha.getFullYear();
  
  const mes = hoy.getMonth() - fecha.getMonth();
  if (mes < 0 || (mes === 0 && hoy.getDate() < fecha.getDate())) {
    edad--;
  }

  if (edad < 18) {
    return "Debes ser mayor de 18 años.";
  }

  return true;
}
