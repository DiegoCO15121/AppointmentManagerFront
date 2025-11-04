type Appointment = {
  titulo: string;
  hora: string;
  fecha: string;
  edificio: string;
  motivo: string;
  estado: string;
};

export const appointmentCards: Appointment[] = [
  {
    titulo: "Escuela de ingeniería y arquitectura",
    hora: "14:00 - 15:00",
    fecha: "30 de Octubre de 2025",
    edificio: "Edificio G",
    motivo: "Consulta sobre programa de maestría.",
    estado: "Aprobado",
  },
  {
    titulo: "Buñuelos",
    hora: "14:00 - 15:00",
    fecha: "22 de Noviembre de 2025",
    edificio: "Edificio M",
    motivo: "Curso navideño de buñuelos.",
    estado: "Pendiente",
  },
  {
    titulo: "Rollo navideño",
    hora: "9:00 - 14:00",
    fecha: "29 de Noviembre de 2025",
    edificio: "Edificio M",
    motivo: "Curso navideño de rollo navideño.",
    estado: "Pendiente",
  },
];

export const areas = [
  { id: 1, area: "Ciencias de la Salud" },
  { id: 2, area: "Ingenierías y Arquitectura" },
  { id: 3, area: "Ciencias Sociales y Humanidades" },
  { id: 4, area: "Económico Administrativas" },
];


export const dataChart = [
  {status: "Aprobadas", appointments: 5, color: "oklch(79.2% 0.209 151.711)"},
  {status: "Pendientes", appointments: 2, color: "oklch(85.2% 0.199 91.936)"},
  {status: "Canceladas", appointments: 3, color: "oklch(63.7% 0.237 25.331)"},
  {status: "Pospuestas", appointments: 1, color: "oklch(75% 0.183 55.934)"},
]