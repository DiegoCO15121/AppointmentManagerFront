import type { MouseEventHandler } from "react";
import { FaTrashAlt } from "@/icons/index";

type DeleteButtonProps = {
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export default function DeleteButton({ onClick }: DeleteButtonProps) {
  return (
    <button
      onClick={onClick}
      className="group/button relative overflow-hidden bg-red-500 px-3 py-2 rounded-lg hover:cursor-pointer"
    >
      <span className="w-full flex justify-center gap-3 relative z-10 transition-colors duration-300">
        <FaTrashAlt className="w-4 h-4 text-white" />
        <p className="text-xs font-bold text-white uppercase">Eliminar</p>
      </span>

      <span
        className="absolute inset-0 z-0 opacity-0 transition-opacity duration-500 ease-in-out pointer-events-none
      bg-linear-to-t from-red-500 to-red-700 group-hover/button:opacity-100"
      />
    </button>
  );
}
