import DeleteButton from "../general/buttons/DeleteButton";
import EditButton from "../general/buttons/EditButton";

type AreaCardProps = {
  title: string;
  description: string;
  boss: string;
};

export default function AreaCard({ title, description, boss }: AreaCardProps) {
  return (
    <div
      className="p-5 rounded-lg border-3 bg-blue-50 hover:bg-blue-900 border-blue-900 
    transition-all group hover:shadow-2xl hover:scale-105 space-y-7 "
    >
      <div>
        <p className="text-lg font-bold text-gray-500 group-hover:text-white">
          {title}
        </p>
        <p className="text-sm text-gray-400 group-hover:text-white">
          {description}
        </p>
      </div>

      <div>
        <p className="text-sm font-bold text-gray-500 group-hover:text-white">Jefe de Departamento:</p>
        <p className="text-sm text-gray-400 group-hover:text-white">{boss}</p>
      </div>

      <div className="flex justify-center gap-5 items-center">
        <DeleteButton />
        <EditButton />
      </div>
    </div>
  );
}
