import { Link } from "react-router-dom";

export function Error() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2">
      <h1 className="text-4xl font-bold">Ops, algo deu errado...</h1>
      <p className="text-accent-foreground">
        Um erro aconteceu na aplicação, abaixo veja detalhes
      </p>

      <p className="text-accent-foreground">
        Volta para o{" "}
        <Link to={"/"} className="text-sky-500 dark:text-sky-400">
          Dashboard
        </Link>
      </p>
    </div>
  );
}
