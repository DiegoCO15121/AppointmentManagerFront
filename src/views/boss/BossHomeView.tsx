import BarChartComponent from "@/components/boss/BarChartComponent";
import AppointmentCard from "@/components/general/cards/AppointmentCard";
import { MdDateRange, FaCalendarAlt } from "@/icons/index";
import { appointmentCards } from "@/data/info";
import { Link } from "react-router-dom";

export default function BossHomeView() {
  const pendingAppointmens = appointmentCards.filter(
    (appointment) => appointment.estado === "Pendiente"
  );
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
        <div className="flex flex-col space-y-10">
          <h2 className="text-3xl text-gray-600 font-bold">
            Solicitudes de Citas Más Recientes
          </h2>

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

        <hr className="border border-gray-200 w-full" />

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-y-10 xl:gap-x-10">
          <div className="border border-gray-300 rounded-lg p-5 shadow-xl xl:col-start-3 xl:col-end-4 xl:row-start-1 space-y-5 h-50 w-70 mx-auto xl:mx-auto ">
            <p className="text-gray-500 text-xl font-bold">Acciones Rápidas</p>
            <div className="flex flex-col gap-4">
              <Link
                to={""}
                className="text-blue-900 hover:bg-blue-800 hover:text-white transition-colors rounded-lg border border-blue-900 p-2"
              >
                <div className="w-full flex gap-4 items-center ">
                  <FaCalendarAlt />
                  <p>Gestionar Citas</p>
                </div>
              </Link>

              <Link
                to={""}
                className="text-blue-900 hover:bg-blue-800 hover:text-white transition-colors rounded-lg border border-blue-900 p-2"
              >
                <div className="w-full flex gap-4 items-center">
                  <MdDateRange />
                  <p>Ver Horario </p>
                </div>
              </Link>
            </div>
          </div>

          <div className="col-span-2 border border-gray-300 rounded-lg p-5 shadow-xl xl:col-start-1 xl:col-end-3">
            <BarChartComponent />
          </div>
        </div>
      </div>
    </div>
  );
}
