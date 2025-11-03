import AppointmentCard from "@/components/general/cards/AppointmentCard";
import AreaCard from "@/components/general/cards/AreaCard";
import { appointmentCards, areas } from "@/data/info";

export default function UserAppointmentsView() {
  return (
    <div className="flex flex-col space-y-10">
      <div className="flex flex-col space-y-3">
        <h1 className="text-4xl text-gray-600 font-bold">Administrar Citas</h1>
        <p>
          Pospón, elimina o agrega otra cita en tu agenda. Rellena y verifica
          tus datos.
        </p>
      </div>

      <div className="flex flex-col space-y-6">
        <h2 className="text-3xl text-gray-600 font-bold">
          Areas de la Universidad
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-5">
          {areas.map((area) => (
            <AreaCard area={area.area} key={area.id} />
          ))}
        </div>
      </div>

      <hr className="border border-gray-200 w-full" />

      <div className="flex flex-col space-y-10">
        <h2 className="text-3xl text-gray-600 font-bold">Citas</h2>

        {appointmentCards.length === 0 ? (
          <p className="text-gray-500 text-center text-2xl font-semibold">
            No has agendado ninguna cita aún
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mx-auto">
            {appointmentCards.map((appointment) => (
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
