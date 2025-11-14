import { useAppStore } from "@/store/useAppStore";
import type { BossType } from "@/types/index";
import { FaEdit, FaTrashAlt } from "@/icons/index";

type BossCardProps = {
  boss: BossType;
};

export default function BossCard({ boss }: BossCardProps) {
  const { openModal, setCurrentBoss } = useAppStore();

  const handleEdit = (boss: BossType) => {
    openModal("edit-boss");
    setCurrentBoss(boss);
  };

  const handleDelete = (bossId: BossType["userId"]) => {};

  return (
    <div className="bg-slate-100 rounded-lg shadow-lg p-3 flex flex-col space-y-2">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-xl text-gray-700 font-bold">
            {boss.names} {boss.lastName} {boss.secondLastName}
          </p>
          <p className="text-md text-gray-600">{boss.email}</p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-5">
          <button
            onClick={() => {}}
            type="button"
            className="rounded-lg border border-gray-400 text-gray-500 hover:bg-red-200 hover:text-red-500 hover:border-red-500 transition-colors p-3"
          >
            <FaTrashAlt className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => handleEdit(boss)}
            className="p-3 rounded-lg border border-gray-400 text-gray-500 hover:bg-yellow-100 hover:text-yellow-500 hover:border-yellow-500 transition-colors"
          >
            <FaEdit className="w-4 h-4" />
          </button>
        </div>
      </div>
      <hr className="text-blue-800" />
      <div className="flex justify-between">
        <p className="font-bold text-gray-500">{boss.area.name}</p>
        <p className="font-bold text-blue-900 capitalize">{boss.adminRole}</p>
      </div>
    </div>
  );
}
