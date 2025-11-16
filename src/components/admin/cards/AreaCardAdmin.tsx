import DeleteButton from "@/components/general/buttons/DeleteButton";
import EditButton from "@/components/general/buttons/EditButton";
import type { AreaSchemaWithAdmin } from "@/types/area/area.types";
import type { MouseEventHandler } from "react";
import { MdBadge, MdEmail } from "react-icons/md";

type AreaCardProps = {
  area: AreaSchemaWithAdmin;
  onClickDelete?: MouseEventHandler<HTMLButtonElement> | undefined;
  onClickEdit?: MouseEventHandler<HTMLButtonElement> | undefined;
};

export default function AreaCardAdmin({
  area,
  onClickDelete,
  onClickEdit,
}: AreaCardProps) {
  return (
    <div
      className="p-5 rounded-lg border-3 bg-blue-50 hover:bg-blue-900 border-blue-900 
    transition-all group hover:shadow-2xl hover:scale-105 space-y-3 flex flex-col"
    >
      <div className="grow">
        <p className="text-xl font-bold text-gray-700 group-hover:text-white">
          {area.name}
        </p>
      </div>

      {area.universityAdmins.length !== 0 && (
        <div>
          <p className="text-lg font-bold text-gray-600 group-hover:text-white">
            Jefes del Área:
          </p>

          <div className="space-y-1">
            {area.universityAdmins.map((admin) => (
              <div key={admin.userId} className="flex flex-col border-l-2 border-blue-800 pl-1 group-hover:border-white">
                <div className="flex gap-2 items-center text-gray-500 group-hover:text-white">
                  <MdBadge className="w-5 h-5 " />
                  <p className="text-md ">
                    {admin.names} {admin.lastName} {admin.secondLastName}
                  </p>
                </div>

                <div className="flex gap-2 items-center text-gray-500 group-hover:text-white">
                  <MdEmail className="w-5 h-5" />
                  <p className="text-md">{admin.email}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="flex justify-center gap-5 items-center">
        <DeleteButton onClick={onClickDelete} />
        <EditButton onClick={onClickEdit} />
      </div>
    </div>
  );
}
