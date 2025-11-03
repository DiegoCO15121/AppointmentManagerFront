import { useState } from "react";
import {
  Calendar,
  dateFnsLocalizer,
  Views,
  type View,
} from "react-big-calendar";
import type { Event as RBCEvent } from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
import { es } from "date-fns/locale";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { EventComponent } from "../general/tooltip/EventComponent";


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
    title: "Consulta sobre programa de maestría",
    start: new Date(2025, 10, 5, 10, 0),
    end: new Date(2025, 10, 5, 11, 0),
    color: "#3B82F6",
  },
  {
    title: "Curso navideño de rollo navideño",
    start: new Date(2025, 10, 10, 15, 0),
    end: new Date(2025, 10, 10, 16, 0),
    color: "#10B981",
  },
];

export default function CalendarView() {
  const [date, setDate] = useState(new Date());
  const [view, setView] = useState<View>(Views.MONTH);

  return (
    <div className="bg-white rounded-lg shadow border border-gray-200 p-4">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        // DESHABILITAR tooltip por defecto del calendario (evita title del navegador)
        tooltipAccessor={() => ""}
        // registrar nuestro componente de evento
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
  );
}
