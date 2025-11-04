import { dataChart } from "@/data/info";
import {
  BarChart, XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Bar,
  ResponsiveContainer,
  Cell
} from "recharts";

export default function BarChartComponent({
  isAnimationActive = true,
}: {
  isAnimationActive?: boolean;
}) {
  return (
    <ResponsiveContainer width={"100%"} aspect={1.618} maxHeight={500}>
      <BarChart data={dataChart}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="status" />
        <YAxis width="auto" />
        <Tooltip />
        <Bar
          dataKey="appointments"
          fill="#8884d8"
          isAnimationActive={isAnimationActive}
        >
          {dataChart.map((d, i) => (
            <Cell key={`cell-${i}`} fill={d.color} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
