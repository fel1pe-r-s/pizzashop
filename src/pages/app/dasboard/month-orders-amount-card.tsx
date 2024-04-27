import { getMonthOrdersAmount } from "@/api/get-month-orders-amount";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { Utensils } from "lucide-react";
import { MetricCardSkeleton } from "./metric-card-skeleton";
export function MonthOrdersAmountCard() {
  const { data: monthOrdersAmountFn } = useQuery({
    queryKey: ["metrics", "month-orders-amount"],
    queryFn: getMonthOrdersAmount,
  });
  return (
    <Card>
      <CardHeader className="flex-row space-y-0 items-center justify-between pb-2">
        <CardTitle className="text-base font-semibold">Pedidos (mês)</CardTitle>
        <Utensils className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        {monthOrdersAmountFn ? (
          <>
            <span className="text-2xl font-bold tracking-tight">
              {monthOrdersAmountFn.amount.toLocaleString("pt-BR")}
            </span>
            <p className="text-xs text-muted-foreground">
              {monthOrdersAmountFn.diffFromLastMonth >= 0 ? (
                <>
                  <span className="text-emerald-500 dark:text-emerald-400">
                    +{monthOrdersAmountFn.diffFromLastMonth}%
                  </span>
                </>
              ) : (
                <>
                  <span className="text-rose-500 dark:text-rose-400">
                    {monthOrdersAmountFn.diffFromLastMonth}%
                  </span>
                </>
              )}{" "}
              em relação ao mês passado
            </p>
          </>
        ) : (
          <MetricCardSkeleton />
        )}
      </CardContent>
    </Card>
  );
}
