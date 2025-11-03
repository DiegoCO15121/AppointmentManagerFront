import { Link } from "react-router-dom";

type CardButtonProps = {
  text: string;
  link: string;
};

export default function CardButton({ text, link }: CardButtonProps) {
  return (
    <Link
      to={link}
      className="group relative overflow-hidden rounded-lg bg-blue-900 text-white text-center font-bold px-4 py-3 hover:cursor-pointer"
    >
      <span className="text-sm relative z-10 transition-colors duration-30 uppercase">
        {text}
      </span>
      <span
        className="absolute inset-0 z-0 opacity-0 transition-opacity duration-300 ease-in-out
               pointer-events-none bg-linear-to-t from-blue-900 to-sky-600
               group-hover:opacity-100"
      />
    </Link>
  );
}
