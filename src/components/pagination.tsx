import { ChevronsLeft, ChevronsRight } from "lucide-react";
import {
  Pagination as PaginationRoot,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./ui/pagination";

export interface PaginationProps {
  pageIndex: number;
  totalCount: number;
  perPage: number;
  onPageChange: (pageIndex: number) => Promise<void> | void;
}
export function Pagination({
  pageIndex,
  perPage,
  totalCount,
  onPageChange,
}: PaginationProps) {
  const pages = Math.ceil(totalCount / perPage) || 1;
  return (
    <div className="flex items-center justify-between">
      <span className="text-sm text-muted-foreground">
        Total de {totalCount} item(s)
      </span>

      <PaginationRoot>
        <div className="flex items-center gap-6 lg:gap-8">
          <div className="text-sm font-medium">
            Página {pageIndex + 1} de {pages}{" "}
          </div>
          <div className="flex items-center gap-2">
            <PaginationContent>
              <PaginationItem>
                <PaginationLink
                  onClick={() => onPageChange(0)}
                  disabled={pageIndex === 0}
                  className="h-8 w-8 p-0"
                >
                  <ChevronsLeft className="w-4 h-4" />
                  <span className="sr-only">Primeira página</span>
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationPrevious
                  onClick={() => onPageChange(pageIndex - 1)}
                  disabled={pageIndex === 0}
                  className="h-8 w-8 p-0"
                />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext
                  onClick={() => onPageChange(pageIndex + 1)}
                  disabled={pages <= pageIndex + 1}
                  className="h-8 w-8 p-0"
                />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  onClick={() => onPageChange(pages - 1)}
                  disabled={pages <= pageIndex + 1}
                  className="h-8 w-8 p-0"
                >
                  <ChevronsRight className="w-4 h-4" />
                  <span className="sr-only">Última página</span>
                </PaginationLink>
              </PaginationItem>
            </PaginationContent>
          </div>
        </div>
      </PaginationRoot>
    </div>
  );
}
