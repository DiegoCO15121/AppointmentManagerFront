import type { IconType } from "react-icons";
import { FaPlus } from "@/icons/index";

type DashboardCardProps = {
  title: string;
  description: string;
  Icon: IconType;
};

export default function DashboardAddCard({
  title,
  description,
  Icon,
}: DashboardCardProps) {
  return (
    <div
      className="bg-blue-50 border-3 border-blue-900 p-4 flex flex-col gap-3 justify-center max-w-70 rounded-lg 
      hover:scale-105 transition-transform hover:shadow-lg"
    >
      <div className="flex justify-between items-center">
        <p className="text-xl font-bold text-blue-900 text-center">{title}</p>
        <Icon className="w-9 h-9 text-blue-900" />
      </div>
      <p className="text-lg text-gray-500 text-center">{description}</p>

      <button className="text-white flex gap-3 py-2 px-3 rounded-lg bg-blue-900 hover:bg-blue-800 hover:cursor-pointer justify-center items-center">
        <FaPlus className="w-4 h-4" />
        <p className="uppercase font-bold">Añadir</p>
      </button>
    </div>
  );
}
