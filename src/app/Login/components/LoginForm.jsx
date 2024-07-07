import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const LoginForm = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();

  const handleUserLogin = (e) => {
    e.preventDefault();
    toast.success("Login successful");
    navigate("/home");
  };
  return (
    <form onSubmit={handleUserLogin} className="lg:w-[35rem] w-full px-5">
      <h1 className="text-center text-[2.5rem] font-prompt">Login</h1>
      <div className="mb-3 mt-5">
        <label className=" text-[1rem] font-semibold">
          Username <span className="text-red-600">*</span>
        </label>
        <input
          onChange={(e) => setUsername(e.target.value)}
          className="text-[1rem] shadow-[0_0_4px_rgba(0,0,0,0.3)] mt-2 outline-none h-[3rem] pl-3 w-full rounded-lg"
          type="text"
          value={username}
          name="username"
          placeholder="Enter Employee No."
        ></input>
      </div>
      <div className="mb-3 mt-5">
        <label className=" text-[1rem] font-semibold">
          Password <span className="text-red-600">*</span>
        </label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          className="text-[1rem] shadow-[0_0_4px_rgba(0,0,0,0.3)] mt-2 outline-none h-[3rem] pl-3 w-full rounded-lg"
          type="password"
          value={password}
          name="password"
          placeholder="Enter password"
        ></input>
        <p className="text-[1rem] mt-1 ">Password is case sensitive</p>
      </div>
      <div className="pb-5">
        <button
          type="submit"
          className="shadow-[0_0_4px_rgba(0,0,0,0.15)] w-full text-center text-xl  transition-colors 
                duration-300 hover:bg-neutral-600 bg-chocolate mt-5 text-white rounded-lg py-2 "
        >
          Login
        </button>
      </div>
      <div className="flex flex-col md:flex-row items-center md:justify-between px-12 md:px-4">
        <NavLink
          to="/forgot-password"
          className="text-[1rem] md:inline block underline mb-2 md:mb-0 hover:text-blue-700 transition-colors duration-300"
          href="#"
        >
          Forgot Password?
        </NavLink>
        <a
          onClick={() => navigate("/signup")}
          className="text-[1rem] underline hover:text-blue-700 transition-colors duration-300 "
          href="#"
        >
          Create An Account
        </a>
      </div>
    </form>
  );
};

export default LoginForm;
