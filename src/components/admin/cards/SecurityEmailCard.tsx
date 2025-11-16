import type { SecurityEmailType } from "@/types/securityAccount/security.types";
import DeleteButtonIcon from "../../general/buttons/DeleteButtonIcon";
import EditButtonIcon from "../../general/buttons/EditButtonIcon";
import { useState } from "react";
import EditSecurityEmailCard from "./EditSecurityEmailCard";
import { useQueryClient } from "@tanstack/react-query";

type SecurityEmailCardProps = {
  securityEmail: SecurityEmailType;
};

export default function SecurityEmailCard({
  securityEmail,
}: SecurityEmailCardProps) {
  const [edit, setEdit] = useState(false);
  const queryClient = useQueryClient();  

  const handleEdit = () => {
    queryClient.invalidateQueries({queryKey: ["getSecurityEmail"]})
    setEdit(!edit)
  }

  return (
    <div>
      <div className="bg-slate-100 rounded-lg shadow-lg p-3 flex flex-col space-y-2">
        <div className="flex justify-between items-center flex-col md:flex-row space-y-3 md:space-y-0">
          <p className="text-xl text-gray-700 font-bold">
            {securityEmail.email}
          </p>

          <div className="bg-blue-800 w-full md:w-px md:h-10 border border-blue-800 " />

          <div className="flex justify-center items-center gap-5">
            <DeleteButtonIcon />
            <EditButtonIcon onClick={handleEdit} />
          </div>
        </div>
      </div>

      {edit && (
        <EditSecurityEmailCard setEdit={setEdit} emailId={securityEmail.id} />
      )}
    </div>
  );
}
