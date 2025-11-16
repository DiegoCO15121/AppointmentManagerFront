import AddAreaModal from "@/components/admin/modals/AreaModal";
import ModalLayout from "@/components/general/modal/ModalLayout";
import { useAppStore } from "@/store/useAppStore";
import { FaPlus } from "@/icons/index";
import AreaCardAdmin from "@/components/admin/cards/AreaCardAdmin";
import { useGetAreas } from "@/hooks/area/useGetAreas";
import type { AreaType } from "@/types/area/area.types";

export default function AdminAreasView() {
  const { setIsOpen, openModal, modal, setCurrentArea } = useAppStore();
  const { areasArray } = useGetAreas();

  const handleArea = () => {
    setIsOpen();
    openModal("add-area");
  };

  const handleEdit = (area: AreaType) => {
    setIsOpen();
    openModal("edit-area");
    setCurrentArea(area)
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
          {areasArray?.map((area) => (
            <AreaCardAdmin key={area.id} area={area} onClickEdit={() =>  handleEdit(area)} />
          ))}
        </div>
      </div>
      <ModalLayout>
        {modal === "edit-area" && <AddAreaModal />}
        {modal === "add-area" && <AddAreaModal />}
      </ModalLayout>
    </>
  );
}
