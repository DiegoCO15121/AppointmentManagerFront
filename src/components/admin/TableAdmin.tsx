import { adminArea } from "@/data/info";
import { FaTrashAlt, FaEdit } from "@/icons/index";
import { useAppStore } from "@/store/useAppStore";

export default function TableAdmin() {
  const { setIsOpen, openModal } = useAppStore();

  const handleEdit = () => {
    setIsOpen();
    openModal("edit-boss");
  };

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
        {adminArea.map((admin) => (
          <tr key={admin.email}>
            <td className="px-3 py-2 border-blue-900 border">{admin.name} </td>
            <td className="px-3 py-2 border-blue-900 border">{admin.email} </td>
            <td className="px-3 py-2 border-blue-900 border">Ingenieria y arquitectura </td>
            <td className="gap-3 px-3 py-2 border-blue-900 border">
              <div className="flex flex-col md:flex-row justify-center items-center gap-5">
                <button
                  type="button"
                  className="rounded-lg border border-gray-400 text-gray-500 hover:bg-red-200 hover:text-red-500 hover:border-red-500 transition-colors p-3"
                >
                  <FaTrashAlt className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={handleEdit}
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
