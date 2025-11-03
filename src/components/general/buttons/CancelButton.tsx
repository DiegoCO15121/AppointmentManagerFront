

type CardButtonProps = {
  text: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>
};

export default function CancelButton({ text, onClick }: CardButtonProps) {
  return (
    <button
    onClick={onClick}
      className="group relative overflow-hidden rounded-lg bg-red-600 text-white text-center font-bold px-4 py-2 hover:cursor-pointer"
    >
      <span className="text-sm relative z-10 transition-colors duration-30 uppercase">
        {text}
      </span>
      <span
        className="absolute inset-0 z-0 opacity-0 transition-opacity duration-300 ease-in-out
               pointer-events-none bg-linear-to-t from-red-600 to-red-400
               group-hover:opacity-100"
      />
    </button>
  );
}
