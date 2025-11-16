import { useGetSecurityEmails } from "@/hooks/securityEmail/useGetSecurityEmails";
import { FaSearch } from "@/icons/index";
import { useState, type ChangeEvent } from "react";
import SecurityEmailCard from "../cards/SecurityEmailCard";

export default function AdminSecurityAccounts() {
  const [search, setSearch] = useState("");
  const { securityEmails } = useGetSecurityEmails({ search });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div className="space-y-5">
      <div className="space-y-3">
        <form className="relative flex w-full flex-col space-y-3 items-center">
          <input
            type="text"
            className="w-full border-2 border-gray-500 rounded-lg p-2"
            onChange={handleChange}
          />
          <button
            type="button"
            className="absolute right-0 translate-y-2.5 -translate-x-2 bg-whites"
          >
            <FaSearch className="w-6 h-6 text-gray-500" />
          </button>
        </form>
      </div>

      {securityEmails  && (
        <div className="flex flex-col space-y-4">
          {securityEmails.map((email) => (
            <SecurityEmailCard securityEmail={email} />
          ))}
        </div>
      )}
    </div>
  );
}
