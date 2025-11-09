import AreaCard from "@/components/admin/AreaCard";

export default function AdminAreasView() {
  return (
    <div className="flex flex-col space-y-10">
      <div className="flex flex-col gap-3">
        <h1 className="text-4xl text-gray-600 font-bold">Áreas</h1>
        <p className="text-gray-500 text-xl">
          Administra las áreas de la universidad
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
        <AreaCard title="Departamento de Ingeniería" description="Departamento de Ingeniería de Sistemas y Computación" boss="Dr. María Gonzáles" />
        <AreaCard title="Departamento de Ingeniería" description="Departamento de Ingeniería de Sistemas y Computación" boss="Dr. María Gonzáles" />
        <AreaCard title="Departamento de Ingeniería" description="Departamento de Ingeniería de Sistemas y Computación" boss="Dr. María Gonzáles" />
        <AreaCard title="Departamento de Ingeniería" description="Departamento de Ingeniería de Sistemas y Computación" boss="Dr. María Gonzáles" />
      </div>
    </div>
  );
}
