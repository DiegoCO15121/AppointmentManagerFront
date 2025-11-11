import { IoIosReturnLeft } from "@/icons/index";
import { useNavigate } from "react-router-dom";

export default function NotFoundView() {
  const navigate = useNavigate();

  return (
    <div className="w-screen h-screen flex justify-center items-center flex-col xl:flex-row gap-y-10 gap-x-30">
      <h1 className="text-9xl font-extrabold text-blue-900 opacity-20 md:text-[288px]">
        404
      </h1>

      <div className="space-y-10 flex flex-col items-center">
        <div className="p-3 bg-slate-200 rounded-3xl text-blue-900 uppercase font-bold w-fit text-xl">
          Error 404
        </div>

        <p className="font-black text-6xl text-center text-gray-700">
          Página No Encontrada
        </p>

        <p className="text-gray-500 text-xl max-w-2xl text-center">
          Lo sentimos, la página que está buscando no existe o ha sido movida.
          Le invitamos a explorar otras secciones de nuestro sitio web.
        </p>

        <div className="flex max-w-2xl space-x-5 ">
          {/* <button
            onClick={() => navigate("/home", { replace: true })}
            className="group relative px-4 py-2 font-bold text-white bg-blue-900 rounded-lg flex gap-3 items-center hover:cursor-pointer"
          >
            <FaHome className="w-5 h-5 relative z-10" />
            <p className="relative z-10">Home</p>
            <span
              className="absolute inset-0 z-0 opacity-0 transition-opacity duration-300 ease-in-out
               pointer-events-none bg-linear-to-t from-blue-900  to-blue-800
               group-hover:opacity-100 rounded-lg"
            />
          </button> */}

          <button
            onClick={() => navigate(-1)}
            className="group relative px-4 py-2 font-bold text-blue-900 bg-white border border-blue-900 rounded-lg flex gap-3 items-center hover:cursor-pointer"
          >
            <IoIosReturnLeft className="w-5 h-5 relative z-10" />
            <p className="relative z-10">Regresar</p>
            <span
              className="absolute inset-0 z-0 opacity-0 transition-opacity duration-300 ease-in-out
              pointer-events-none bg-linear-to-t from-white to-blue-100 
              group-hover:opacity-100 rounded-lg"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
