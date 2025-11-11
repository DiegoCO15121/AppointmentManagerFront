import AppointmentCard from "@/components/general/cards/AppointmentCard";
import DashboardCard from "@/components/general/cards/DashboardCard";
import { appointmentCards } from "@/data/info";
import { userLinks } from "@/data/user";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { MdDateRange, MdEventNote } from "@/icons/index";

export default function UserHomeView() {
  const { data } = useCurrentUser();

  if (data)
    return (
      <div className="flex flex-col space-y-10">
        <div className="flex flex-col gap-3">
          <h1 className="text-4xl text-gray-600 font-bold">
            Bienvenido, {data.names}!
          </h1>
          <p className="text-gray-500 text-xl">
            Explora eventos universitarios y agenda citas con diferentes
            departamentos
          </p>
        </div>

        <div className="flex flex-col space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-10 xl:gap-x-30 gap-y-6 xl:gap-y-0 mx-auto">
            <DashboardCard
              title="Administrar Citas"
              description="Pospón, elimina o agrega otra cita en tu agenda. Rellena y verifica tus datos."
              buttonText="Administrar"
              Icon={MdDateRange}
              link={userLinks[1]["link"]}
            />
            <DashboardCard
              title="Ver Eventos"
              description="Descubre y regístrate en eventos universitarios."
              buttonText="Ver todo"
              Icon={MdEventNote}
              link={userLinks[2]["link"]}
            />
          </div>

          <hr className="border border-gray-200 w-full" />

          <div className="flex flex-col space-y-10">
            <h2 className="text-3xl text-gray-600 font-bold">
              Citas Recientes
            </h2>

            {appointmentCards.length === 0 ? (
              <p className="text-gray-500 text-center text-2xl font-semibold">
                No tienes citas recientes
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
      </div>
    );
}
