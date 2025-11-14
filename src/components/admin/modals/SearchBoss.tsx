import { FaSearch } from "@/icons/index";
import BossCard from "../BossCard";
import { useState, type ChangeEvent } from "react";
import { useGetBosses } from "@/hooks/boss/useGetBosses";

export default function SearchBoss() {
  const [search, setSearch] = useState("");
  const { bossArray } = useGetBosses({ search });

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div className="space-y-5">
      <div className="space-y-3">
        <h2 className="text-gray-500 font-bold text-xl">
          Buscar Administrador de Área
        </h2>
        <form className="relative flex w-full flex-col space-y-3 items-center">
          <input
            type="text"
            className="w-full border-2 border-gray-500 rounded-lg p-2"
            onChange={handleOnChange}
          />
          <button
            type="button"
            className="absolute right-0 translate-y-2.5 -translate-x-2 bg-whites"
          >
            <FaSearch className="w-6 h-6 text-gray-500" />
          </button>
        </form>
      </div>

      {bossArray && search.trim() !== "" && (
        <div className="flex flex-col space-y-4">
          {bossArray.map((boss) => (
            <BossCard key={boss.userId} boss={boss} />
          ))}
        </div>
      )}
    </div>
  );
}
