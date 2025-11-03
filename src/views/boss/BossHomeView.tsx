import AppointmentCard from "@/components/general/cards/AppointmentCard";
import DashboardCard from "@/components/general/cards/DashboardCard";
import { bossLinks } from "@/data/boss";
import { appointmentCards } from "@/data/info";
import { MdDateRange, FaCalendarAlt  } from "@/icons/index";

export default function BossHomeView() {
    const pendingAppointmens = appointmentCards.filter(appointment => appointment.estado === "Pendiente")
  return (
    <div className="flex flex-col space-y-10">
          <div className="flex flex-col gap-3">
            <h1 className="text-4xl text-gray-600 font-bold">
              Bienvenido, usuario123!
            </h1>
            <p className="text-gray-500 text-xl">
              Departamento de Ingenierías y Arquitectura
            </p>
          </div>
    
          <div className="flex flex-col space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-10 xl:gap-x-30 gap-y-6 xl:gap-y-0 mx-auto">
              <DashboardCard
                title="Administrar Citas"
                description="Pospón, elimina o aprueba tus solicitudees de citas."
                buttonText="Administrar"
                Icon={MdDateRange}
                link={bossLinks[1]["link"]}
              />
              <DashboardCard
                title="Horario"
                description="Administra de forma sencilla su horario en el sistema."
                buttonText="Administrar"
                Icon={FaCalendarAlt}
                link={bossLinks[2]["link"]}
              />
            </div>
    
            <hr className="border border-gray-200 w-full" />
    
            <div className="flex flex-col space-y-10">
              <h2 className="text-3xl text-gray-600 font-bold">Citas Recientes</h2>
    
              {pendingAppointmens.length === 0 ? (
                <p className="text-gray-500 text-center text-2xl font-semibold">
                  No tienes citas recientes
                </p>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mx-auto">
                  {pendingAppointmens.map((appointment) => (
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
  )
}
