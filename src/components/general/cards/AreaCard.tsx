import CardButton from "../buttons/CardButton";

type AreaCardProps = {
  area: string;
};

export default function AreaCard({ area }: AreaCardProps) {
  return (
    <div className="border-3 border-blue-900 rounded-lg p-3 flex flex-col items-center space-y-3 hover:scale-105 transition-transform">
      <p className="text-lg text-gray-600 uppercase font-bold text-center flex-1">{area}</p>
      <CardButton text="Agendar Cita" />
    </div>
  );
}
