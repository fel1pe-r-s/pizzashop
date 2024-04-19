import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, X } from "lucide-react";

export function OrderTableFilters() {
    return (
        <>
            <form className="flex items-center gap-2">
                <span className="text-sm font-semibold">Filtros</span>
                <Input
                    className="h-8 w-auto"
                    type="text"
                    placeholder="ID do pedido"
                />
                <Input
                    className="h-8 w-[320px]"
                    type="text"
                    placeholder="Nome do cliente"
                />
                <Select defaultValue={'all'}>
                    <SelectTrigger className="h-8 w-[180px]">
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">Todos status</SelectItem>
                        <SelectItem value="pending">Pendente</SelectItem>
                        <SelectItem value="cancelled">Cancelado</SelectItem>
                        <SelectItem value="processing">Em preparo</SelectItem>
                        <SelectItem value="delivering">Em entrega</SelectItem>
                        <SelectItem value="delivered">Entregue</SelectItem>
                    </SelectContent>
                </Select>
                <Button type="submit" variant={"secondary"} size={"xs"}>
                    <Search className="w-4 h-4 mr-2" />
                    Filtrar resultados
                </Button>
                <Button type="button" variant={"outline"} size={"xs"}>
                    <X className="w-4 h-4 mr-2" />
                    Remover filtrar
                </Button>
            </form></>
    )
}