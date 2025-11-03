import { FaClock, MdDateRange } from "@/icons/index";
import { FaBuilding } from "react-icons/fa6";
import CancelButton from "../buttons/CancelButton";
import PostponeButton from "../buttons/PostponeButton";

type AppointmentCardProps = {
  titulo: string;
  hora: string;
  fecha: string;
  edificio: string;
  motivo: string;
  estado: string;
};

export default function AppointmentCard({
  titulo,
  hora,
  fecha,
  edificio,
  motivo,
  estado,
}: AppointmentCardProps) {
  return (
    <div
      className="bg-blue-50 border-l-4 relative border-blue-900 p-4 flex flex-col items-center space-y-3 justify-center max-w-70 rounded-lg
       transition-transform"
    >
      <div className="bg-blue-900 rounded-lg text-white font-bold absolute -translate-y-3  top-0 px-2 py-1">
        {estado}
      </div>
      <div className="flex justify-center items-center grow">
        <p className="text-xl font-bold text-blue-900 text-center">{titulo}</p>
      </div>

      <div className="flex flex-col space-y-2">
        <div className="flex gap-x-2 items-center">
          <FaClock />
          <p>{hora}</p>
        </div>

        <div className="flex gap-x-2 items-center">
          <MdDateRange />
          <p>{fecha}</p>
        </div>

        <div className="flex gap-x-2 items-center">
          <FaBuilding />
          <p>{edificio}</p>
        </div>
      </div>

      <div>
        <p className="text-lg text-gray-700 font-bold">{"Motivo"}</p>
        <p className="text-gray-500">{motivo}</p>
      </div>

      <div className="flex flex-wrap gap-2 justify-center">
        <CancelButton text="Cancelar" onClick={() => {}} />
        <PostponeButton text="Posponer" onClick={() => {}} />
      </div>
    </div>
  );
}
