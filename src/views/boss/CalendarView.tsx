import { useState } from "react";
import { Calendar, dateFnsLocalizer, Views, type View } from "react-big-calendar";
import type { Event as RBCEvent } from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
import { es } from "date-fns/locale";
import "react-big-calendar/lib/css/react-big-calendar.css";

const locales = { es };
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

interface EventType extends RBCEvent {
  title: string;
  start: Date;
  end: Date;
  color?: string;
}

const events: EventType[] = [
  {
    title: "Reunión con el equipo",
    start: new Date(2025, 10, 5, 10, 0),
    end: new Date(2025, 10, 5, 11, 0),
    color: "#3B82F6",
  },
  {
    title: "Entrega del proyecto",
    start: new Date(2025, 10, 10, 15, 0),
    end: new Date(2025, 10, 10, 16, 0),
    color: "#10B981",
  },
];

const EventComponent = ({ event }: { event: EventType }) => (
  <div
    className="text-white text-xs px-2 py-1 rounded"
    style={{ backgroundColor: event.color || "#2563EB" }}
  >
    {event.title}
  </div>
);

export default function CalendarView() {
  const [date, setDate] = useState(new Date());
  const [view, setView] = useState<View>(Views.MONTH);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Calendario de eventos
      </h2>

      <div className="bg-white rounded-lg shadow border border-gray-200 p-4">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          components={{ event: EventComponent }}
          view={view}
          date={date}
          onView={setView}
          onNavigate={setDate}
          views={["month", "week", "day"]}
          messages={{
            next: "Siguiente",
            previous: "Anterior",
            today: "Hoy",
            month: "Mes",
            week: "Semana",
            day: "Día",
          }}
          style={{ height: 600 }}
        />
      </div>
    </div>
  );
}
