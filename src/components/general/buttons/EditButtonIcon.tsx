import { FaEdit } from "@/icons/index";
import type { MouseEventHandler } from "react";

type EditButtonIconProps = {
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export default function EditButtonIcon({ onClick }: EditButtonIconProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="p-3 rounded-lg border border-gray-400 text-gray-500 hover:bg-yellow-100 hover:text-yellow-500 hover:border-yellow-500 transition-colors"
    >
      <FaEdit className="w-4 h-4" />
    </button>
  );
}
