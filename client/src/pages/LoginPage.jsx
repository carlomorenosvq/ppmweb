import { useForm } from "react-hook-form";
import { useAuth } from "../contexto/auth.context";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";


//Login page, funciones necesarias para el lofin y solo sera necesario el email y la contraseña
//tambien como en la página de registro si no hay cuenta creada podrá navegar a RegisterPage
function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signin, errors: signinErrors, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const onSubmit = handleSubmit((data) => {
    signin(data);
  });
  
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/tasks");
    }
  }, [isAuthenticated]);


  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
        {signinErrors.map((error, i) => (
          <div className="bg-red-500 p-2 text-white text-center my-2" key={i}>
            {error}
          </div>
        ))}
        <h1 className="text-2xl font-bold">Iniciar sesión</h1>

        <form onSubmit={onSubmit}>
          <input
            type="email"
            {...register("email", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="Email"
          />
          {errors.email && (
            <p className="text-red-500">El correo es obligatorio</p>
          )}
          <input
            type="password"
            {...register("password", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="Contraseña"
          />
          {errors.password && (
            <p className="text-red-500">La Contraseña es obligatoria</p>
          )}

          
            <button type="submit">Login</button>
          
          
        
        </form>
        <p className="flex gap-x-2 justify-between mt-5">
          ¿No estas registrado?
          <Link to="/register" className="white">
            Registrate
          </Link>
        </p>
      </div>
    </div>
  );
}
export default LoginPage;
