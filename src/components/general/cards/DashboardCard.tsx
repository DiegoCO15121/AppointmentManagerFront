import type { IconType } from "react-icons";
import CardButton from "../buttons/CardButton";

type DashboardCardProps = {
  title: string;
  description: string;
  buttonText: string;
  Icon: IconType;
  link: string;
};

export default function DashboardCard({
  title,
  description,
  buttonText,
  Icon,
  link,
}: DashboardCardProps) {
  return (
    <div
      className="bg-blue-50 border-3 border-blue-900 p-4 flex flex-col gap-3 justify-center max-w-70 rounded-lg hover:scale-105 
    transition-transform"
    >
      <div className="flex justify-between items-center">
        <p className="text-xl font-bold text-blue-900">{title}</p>
        <Icon className="w-7 h-7 text-blue-900" />
      </div>
      <p className="text-lg text-gray-500 text-center">{description}</p>
      <CardButton text={buttonText} link={link} />
    </div>
  );
}
