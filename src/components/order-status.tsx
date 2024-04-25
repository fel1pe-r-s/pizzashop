type OrderStatus =
  | "pending"
  | "cancelled"
  | "processing"
  | "delivering"
  | "delivered";

interface OrderStatusProps {
  status: OrderStatus;
}

const orderStatusMap: Record<OrderStatus, string> = {
  pending: "pending",
  cancelled: "cancelled",
  delivered: "delivered",
  delivering: "delivering",
  processing: "processing",
};

export function OrderStatus({ status }: OrderStatusProps) {
  return (
    <div className="flex items-center gap-2">
      {status === "pending" && (
        <span className="h-2 w-2 rounded-full bg-slate-400" />
      )}

      {status === "cancelled" && (
        <span className="h-2 w-2 rounded-full bg-rose-500" />
      )}

      {status === "delivered" && (
        <span className="h-2 w-2 rounded-full bg-emerald-500" />
      )}

      {["processing", "delivering"].includes(status) && (
        <span className="h-2 w-2 rounded-full bg-amber-400" />
      )}

      <span> {orderStatusMap[status]}</span>
    </div>
  );
}
