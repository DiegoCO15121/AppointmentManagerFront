
import { useGetBosses } from "@/hooks/boss/useGetBosses";
import { FaTrashAlt, FaEdit } from "@/icons/index";
import { useAppStore } from "@/store/useAppStore";
import type { BossType } from "@/types/index";

export default function TableAdmin() {
  const { setIsOpen, openModal, setCurrentBoss } = useAppStore();
  const { bossArray } = useGetBosses();

  const handleEdit = (boss: BossType) => {
    setIsOpen();
    openModal("edit-boss");
    setCurrentBoss(boss);
  };

  const handleDelete = (bossId: BossType["userId"]) => {};

  return (
    <table className="border-spacing-2.5 w-full">
      <thead className="bg-blue-900 text-white font-bold ">
        <tr>
          <th className="border border-blue-900 border-r-white px-3 py-2">
            Nombre
          </th>
          <th className="border border-blue-900 border-r-white px-3 py-2">
            Correo
          </th>
          <th className="border border-blue-900 border-r-white px-3 py-2">
            Área
          </th>
          <th className="border border-blue-900 border-l-white px-3 py-2">
            Acciones
          </th>
        </tr>
      </thead>

      <tbody>
        {bossArray &&
          bossArray.map((boss) => (
            <tr key={boss.userId}>
              <td className="px-3 py-2 border-blue-900 border">{`${boss.names} ${boss.lastName} ${boss.secondLastName}`}</td>
              <td className="px-3 py-2 border-blue-900 border">{boss.email}</td>
              <td className="px-3 py-2 border-blue-900 border">
                {boss.area.name}
              </td>
              <td className="gap-3 px-3 py-2 border-blue-900 border">
                <div className="flex flex-col md:flex-row justify-center items-center gap-5">
                  <button
                    onClick={() => handleDelete(boss.userId)}
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
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}
