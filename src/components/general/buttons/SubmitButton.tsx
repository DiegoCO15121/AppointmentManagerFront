import { FaPlus } from "@/icons/index";

type SubmitButtonProps = {
  text: string;
};

export default function SubmitButton({ text }: SubmitButtonProps) {
  return (
    <button className="group/submit relative bg-blue-900 text-white font-bold rounded-lg px-3 py-2 overflow-hidden 
    hover:cursor-pointer w-full flex justify-center">
      <span className="relative z-10 flex items-center gap-3 transition-colors duration-300">
        <FaPlus className="w-3 h-3" />
        <p className="text-sm uppercase">{text}</p>
      </span>
      <span
        className="absolute inset-0 z-0 opacity-0 transition-opacity duration-500 ease-in-out pointer-events-none 
      bg-linear-to-t from-blue-900 to-blue-800 group-hover/submit:opacity-100"
      />
    </button>
  );
}
