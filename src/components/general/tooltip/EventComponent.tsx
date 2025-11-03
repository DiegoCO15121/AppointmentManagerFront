import React from "react";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

interface EventType {
  title: string;
  start: Date;
  end: Date;
  color?: string;
}

export const EventComponent: React.FC<{ event: EventType }> = ({ event }) => {
  const tooltipId = `tooltip-${event.title.replace(/\s+/g, "-").toLowerCase()}`;

  // Construimos HTML seguro y simple para data-tooltip-html
  const html = `
    <div style="display:flex;flex-direction:column;font-family:Inter, sans-serif;">
      <div style="font-weight:600;font-size:0.875rem;margin:0;">${escapeHtml(event.title)}</div>
      <div style="color:#d1d5db;font-size:0.75rem;margin-top:4px;">
        ${formatTime(event.start)} — ${formatTime(event.end)}
      </div>
    </div>
  `;

  return (
    <>
      <div
        className="text-white text-xs px-2 py-1 rounded cursor-pointer transition-colors truncate"
        style={{ backgroundColor: event.color || "#2563EB" }}
        data-tooltip-id={tooltipId}
        data-tooltip-html={html}
        data-tooltip-place="top"
      >
        {event.title}
      </div>

      <Tooltip
        id={tooltipId}
        className="rbc-tooltip"
        style={{
          backgroundColor: "#0f172a",
          color: "#fff",
          fontSize: "0.75rem",
          border: "1px solid #374151", 
          borderRadius: "0.6rem",
          padding: "0.5rem 0.75rem",
          boxShadow: "0 6px 18px rgba(2,6,23,0.6)",
        }}
        arrowColor="#0f172a"
        opacity={1}
        noArrow={false}
      />
    </>
  );
};

function formatTime(d: Date) {
  return d.toLocaleTimeString("es-MX", { hour: "2-digit", minute: "2-digit" });
}

function escapeHtml(unsafe: string) {
  return String(unsafe)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
