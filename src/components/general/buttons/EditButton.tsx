import type { MouseEventHandler } from "react";
import { FaEdit } from "@/icons/index";

type EditButtonProps = {
  onClick?: MouseEventHandler<HTMLButtonElement>;
};


export default function EditButton({onClick} : EditButtonProps) {
  return (
    <button
          onClick={onClick}
          className="group/button relative overflow-hidden bg-yellow-500 px-3 py-2 rounded-lg hover:cursor-pointer"
        >
          <span className="w-full flex justify-center gap-3 relative z-10 transition-colors duration-300">
            <FaEdit className="w-4 h-4 text-white" />
            <p className="text-xs font-bold text-white uppercase">Editar</p>
          </span>
    
          <span
            className="absolute inset-0 z-0 opacity-0 transition-opacity duration-500 ease-in-out pointer-events-none
          bg-linear-to-t from-yellow-500 to-yellow-600 group-hover/button:opacity-100"
          />
        </button>
  )
}
