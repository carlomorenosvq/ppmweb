import { useForm } from "react-hook-form";
import { useAuth } from "../contexto/auth.context";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

//Página de registro, pedirá nombre de usuario, email y contraseña
//Si ya tiene cuenta el usuario podrá navegar directamente a Login
function RegisterPage() {
  const { register, handleSubmit, formState: {errors} } = useForm();
  const { signup, isAuthenticated, errors: registerErrors } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/tasks");
  }, [isAuthenticated]);

  const onSubmit = handleSubmit(async (values) => {
    await signup(values);
  });
  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
      {
        registerErrors.map((error, i) => (
          <div className="bg-red-500 p-2 text-white" key={i}> 
            {error}
          </div>
        ))
      }
      <h1 className="text-2xl font-bold">Registrarse</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          {...register("username", { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          placeholder="Nombre de usuario"
        />
        {errors.username && (<p className="text-red-500 ">El nombre es obligatorio</p>)}
        <input
          type="email"
          {...register("email", { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          placeholder="Email"
        />
        {errors.email && (<p className="text-red-500" >El correo es obligatorio</p>)}
        <input
          type="password"
          {...register("password", { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          placeholder="Contraseña"
        />
        {errors.password && (<p className="text-red-500" >La Contraseña es obligatoria</p>)}
        <button type="submit">Registrarse</button>
      </form>
      <p className="flex gap-x-2 justify-between mt-10">
          ¿Ya tienes cuenta?
          <Link to="/login" className="white">
            Login
          </Link>
        </p>
        </div>  
    </div>
  );
}
export default RegisterPage;
