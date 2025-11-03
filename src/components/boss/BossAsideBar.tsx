import { appointmentCards } from "@/data/info";
import AppointmentCard from "../general/cards/AppointmentCard";

export default function BossAsideBar() {
  const appointmentsApproved =
    appointmentCards.filter(
      (appointment) => appointment.estado === "Aprobado"
    ) ?? [];
  return (
    <div className="w-full h-full px-10 py-5 flex flex-col space-y-5 items-center mt-25">
      <h3 className="text-white font-bold text-2xl text-center">
        Próximas citas
      </h3>

      <div className="space-y-4 overflow-y-auto h-11/12">
        {appointmentsApproved.length === 0 ? (
          <p className="text-gray-500 text-center text-2xl font-semibold">
            No tienes citas próximas
          </p>
        ) : (
          <div className="space-y-6 overflow-y-auto h-3/4 pt-3">
            {appointmentsApproved.map((appointment) => (
              <AppointmentCard
                key={appointment.titulo}
                titulo={appointment.titulo}
                hora={appointment.hora}
                fecha={appointment.fecha}
                edificio={appointment.edificio}
                motivo={appointment.motivo}
                estado={appointment.estado}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
