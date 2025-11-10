import AreaCard from "@/components/admin/AreaCard";
import AddAreaModal from "@/components/admin/modals/AreaModal";
import ModalLayout from "@/components/general/modal/ModalLayout";
import { useAppStore } from "@/store/useAppStore";
import { FaPlus } from "@/icons/index";

export default function AdminAreasView() {
  const { setIsOpen, openModal, modal } = useAppStore();

  const handleArea = () => {
    setIsOpen();
    openModal("add-area");
  };

  const handleEdit = () => {
    setIsOpen();
    openModal("edit-area");
    console.log("first")
  };


  return (
    <>
      <div className="flex flex-col space-y-10">
        <div className="flex flex-col gap-3 justify-between md:flex-row md:items-center">
          <div>
            <h1 className="text-4xl text-gray-600 font-bold">Áreas</h1>
            <p className="text-gray-500 text-xl">
              Administra las áreas de la universidad
            </p>
          </div>

          <button
            type="button"
            onClick={handleArea}
            className="bg-blue-50 border-2 border-blue-900 px-3 py-2 text-gray-500 text-sm uppercase 
                      flex justify-center gap-3 hover:cursor-pointer font-bold items-center rounded-lg hover:bg-blue-900 
                      hover:text-white transition-colors hover:shadow-lg"
          >
            <FaPlus className="w-5 h-5" />
            <p>Agregar Área</p>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          <AreaCard
            title="Departamento de Ingeniería"
            description="Departamento de Ingeniería de Sistemas y Computación"
            boss="Dr. María Gonzáles"
            onClickEdit={handleEdit}
          />
          <AreaCard
            title="Departamento de Ingeniería"
            description="Departamento de Ingeniería de Sistemas y Computación"
            boss="Dr. María Gonzáles"
          />
          <AreaCard
            title="Departamento de Ingeniería"
            description="Departamento de Ingeniería de Sistemas y Computación"
            boss="Dr. María Gonzáles"
          />
          <AreaCard
            title="Departamento de Ingeniería"
            description="Departamento de Ingeniería de Sistemas y Computación"
            boss="Dr. María Gonzáles"
          />
        </div>
      </div>
      <ModalLayout>
        {modal === "edit-area" && <AddAreaModal />}
        {modal === "add-area" && <AddAreaModal />}
    
        </ModalLayout>
    </>
  );
}
