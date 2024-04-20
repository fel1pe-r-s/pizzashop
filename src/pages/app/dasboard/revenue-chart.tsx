import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    ResponsiveContainer,
    LineChart,
    XAxis,
    YAxis,
    CartesianGrid,
    Line,
} from "recharts";

import colors from 'tailwindcss/colors'
const data = [
    {
        date: "10/12",
        revenue: 1200,
    },
    {
        date: "11/12",
        revenue: 100,
    },
    {
        date: "12/12",
        revenue: 1600,
    },
    {
        date: "13/12",
        revenue: 200,
    },
    {
        date: "14/12",
        revenue: 1500,
    },
    {
        date: "15/12",
        revenue: 1200,
    },
    {
        date: "16/12",
        revenue: 1200,
    },
    {
        date: "17/12",
        revenue: 1200,
    },
];
export function RevenueChart() {
    return (
        <Card className="col-span-6">
            <CardHeader className="flex-row items-center justify-between pb-8">
                <div className="space-y-1 ">
                    <CardTitle className="text-base font-medium">
                        Receita no período
                    </CardTitle>
                    <CardDescription>Receita diária no periodo</CardDescription>
                </div>
            </CardHeader>
            <CardContent>
                <ResponsiveContainer width="100%" height={240}>
                    <LineChart data={data} style={{ fontSize: 12 }}>
                        <XAxis dy={16} dataKey="date" tickLine={false} axisLine={false} />
                        <YAxis
                            width={80}
                            tickFormatter={(value: number) =>
                                value.toLocaleString("pt-BR", {
                                    style: "currency",
                                    currency: "BRL",
                                })
                            }
                            stroke="#888"
                            axisLine={false}
                            tickLine={false}
                        />
                        <CartesianGrid vertical={false} className="stroke-muted" />
                        <Line stroke={colors.violet['500']} type={"linear"} strokeWidth={2} dataKey={"revenue"} />
                    </LineChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );
}
