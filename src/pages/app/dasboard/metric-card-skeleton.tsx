import { Skeleton } from "@/components/ui/skeleton";

export function MetricCardSkeleton() {
  return (
    <>
      <Skeleton className="h-8 w-36 mt-1" />
      <Skeleton className="h-7 w-52" />
    </>
  );
}
