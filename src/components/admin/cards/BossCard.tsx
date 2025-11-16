import DeleteButtonIcon from "@/components/general/buttons/DeleteButtonIcon";
import EditButtonIcon from "@/components/general/buttons/EditButtonIcon";
import { useAppStore } from "@/store/useAppStore";
import type { BossType } from "@/types/index";

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
          <DeleteButtonIcon />
          <EditButtonIcon onClick={() => handleEdit(boss)} />
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
