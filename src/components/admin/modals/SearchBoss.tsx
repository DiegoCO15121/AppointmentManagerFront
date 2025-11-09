import { FaSearch } from "@/icons/index";

export default function SearchBoss() {
  return (
    <div>
      <form className="relative flex w-11/12 ">
        <input
          type="text"
          className="w-full border-2 border-gray-500 rounded-lg p-2"
        />
        <button className="absolute right-0 translate-y-2.5 -translate-x-2 hover:cursor-pointer">
          <FaSearch className="w-6 h-6 text-gray-500" />
        </button>
      </form>
    </div>
  );
}
