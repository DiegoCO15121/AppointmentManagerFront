import AddAreaModal from "@/components/admin/modals/AddAreaModal";
import AddBossModal from "@/components/admin/modals/AddBossModal";
import SearchBoss from "@/components/admin/modals/SearchBoss";
import TableAdmin from "@/components/admin/TableAdmin";
import DashboardAddCard from "@/components/general/cards/DashboardAddCard";
import ModalLayout from "@/components/general/modal/ModalLayout";
import { FaBuilding, FaUserPlus, MdPersonSearch } from "@/icons/index";
import { useAppStore } from "@/store/useAppStore";

export default function AdminHomeView() {
  const {setIsOpen, openModal, modal} = useAppStore();

  const handleClick = () => {
    setIsOpen();
    openModal("search-boss");
  }
  return (
    <>
    <div className="flex flex-col space-y-10">
      <div className="flex flex-col space-y-3">
        <h1 className="text-4xl text-gray-600 font-bold">
          Bienvenido, usuario123!
        </h1>
        <p className="text-gray-500 text-xl">
          Explora eventos universitarios y agenda citas con diferentes
          departamentos
        </p>
      </div>

      <div className="flex flex-col space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-10 xl:gap-x-30 gap-y-6 xl:gap-y-0 mx-auto">
          <DashboardAddCard
          id={"create-boss"}
            title="Agregar Administradores de Áreas"
            description="Agrega a los encargados de cada área para gestionar sus citas."
            Icon={FaUserPlus}
          />
          <DashboardAddCard
          id={"create-area"}
            title="Agregar Áreas"
            description="Agrega áreas en donde se puedan agendar citas."
            Icon={FaBuilding}
          />
        </div>

        <hr className="border border-gray-200 w-full" />

        <div className="space-y-10 flex flex-col overflow-x-auto w-full">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="flex flex-col space-y-3">
              <h2 className="text-gray-600 font-bold text-3xl">
                Administra Jefes de Cada Área
              </h2>
              <p className="text-gray-600 text-xl">
                Visualiza, edita o elimina a los jefes de cada Área
              </p>
            </div>

            <div>
              <button
              type="button"
              onClick={handleClick}
                className="bg-blue-50 border-2 border-blue-900 px-3 py-2 text-gray-500 text-sm uppercase 
              flex justify-center gap-3 hover:cursor-pointer font-bold items-center rounded-lg hover:bg-blue-900 
              hover:text-white transition-colors hover:shadow-lg"
              >
                <MdPersonSearch className="w-5 h-5" />
                <p>Buscar Jefe</p>
              </button>
            </div>
          </div>

          <TableAdmin />
        </div>
      </div>
    </div>

    <ModalLayout>
      {modal === "create-boss" && <AddBossModal />}
      {modal === "create-area" && <AddAreaModal />}
      {modal === "search-boss" && <SearchBoss />}
      {modal === null && <div>asdfa</div>}
    </ModalLayout>
    </>
  );
}
