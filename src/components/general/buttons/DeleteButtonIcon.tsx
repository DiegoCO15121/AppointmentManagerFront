import { FaTrashAlt } from "@/icons/index";
import type { MouseEventHandler } from "react";

type DeleteButtonIconProps = {
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export default function DeleteButtonIcon({ onClick }: DeleteButtonIconProps) {
  return (
    <button
      onClick={onClick}
      type="button"
      className="rounded-lg border border-gray-400 text-gray-500 hover:bg-red-200 hover:text-red-500 hover:border-red-500 transition-colors p-3"
    >
      <FaTrashAlt className="w-4 h-4" />
    </button>
  );
}
