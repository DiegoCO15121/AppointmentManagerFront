import CalendarView from "@/components/boss/CalendarView";

export default function BossScheduleView() {
  return (
    <div className="flex flex-col space-y-10">
      <div className="flex flex-col gap-3">
        <h1 className="text-4xl text-gray-600 font-bold">Horario</h1>
        <p className="text-gray-500 text-xl">Visualiza tus proximas citas</p>
      </div>

      <div className="min-h-scree">
        <CalendarView />
      </div>
    </div>
  );
}
