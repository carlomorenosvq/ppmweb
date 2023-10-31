import { Link } from "react-router-dom";
import { useAuth } from "../contexto/auth.context";
import { ButtonLink } from "./ui/ButtonLink";

export function Navbar() {
  const { isAuthenticated, logout, user } = useAuth();
  console.log(isAuthenticated, user)

  return (
    <nav className="bg-black-700 my-3 flex justify-between py-5 px-10 rounded-lg">
      <Link to="/">
                  Inicio
              </Link>
      <h1 className="text-2xl font-bold">
        <Link to={isAuthenticated ? "/tasks" : "/"}></Link>
      </h1>
      <ul className="flex gap-x-2">
        {isAuthenticated ? (
          <>
            <li>
              Bienvenido { user.username}
            </li>
            <li>
              <ButtonLink to="/add-task">Añadir Tarea</ButtonLink>
            </li>
            <li>
              <Link to="/" onClick={() => logout()}>
                  Cerrar Sesión
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <ButtonLink to="/login">Login</ButtonLink>
            </li>
            <li>
              <ButtonLink to="/register">Registrate</ButtonLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
