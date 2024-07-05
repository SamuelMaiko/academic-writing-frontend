import React from "react";
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
  const navigate = useNavigate();

  const handleUserSignUp = (e) => {
    e.preventDefault();
    navigate("/login");
  };
  return (
    <form onSubmit={handleUserSignUp} className="w-[35rem] px-5">
      <h1 className="text-center text-[2.3rem] font-prompt">SignUp</h1>
      <div className="mb-3 mt-5">
        <label className=" text-[1rem] font-semibold">
          Registration number <span className="text-red-600">*</span>
        </label>
        <input
          className="text-[1rem] shadow-[0_0_4px_rgba(0,0,0,0.3)] mt-2 outline-none h-[3rem] pl-3 w-full rounded-lg"
          type="text"
          value=""
          name="regNo"
          placeholder="Enter Employee No."
        ></input>
      </div>
      <div className="mb-3 mt-5">
        <label className=" text-[1rem] font-semibold">
          Password <span className="text-red-600">*</span>
        </label>
        <input
          className="text-[1rem] shadow-[0_0_4px_rgba(0,0,0,0.3)] mt-2 outline-none h-[3rem] pl-3 w-full rounded-lg"
          type="text"
          value=""
          name="password"
          placeholder="Enter Password"
        ></input>
      </div>
      <div className="mb-3 mt-5">
        <label className=" text-[1rem] font-semibold ">
          Confirm Password <span className="text-red-600">*</span>
        </label>
        <input
          className="text-[1rem] shadow-[0_0_4px_rgba(0,0,0,0.3)] mt-2 outline-none h-[3rem]
                 pl-3 w-full rounded-lg"
          type="password"
          value=""
          name="confirmPassword"
          placeholder="Confirm Password"
        ></input>
        {/* <p className='text-sm mt-1'>Password is case sensitive</p> */}
      </div>
      <div className="pb-5">
        <button
          type="submit"
          className="shadow-[0_0_4px_rgba(0,0,0,0.15)] w-full text-center text-xl  hover:bg-hover 
                transition-colors duration-300 bg-chocolate mt-5 text-white rounded-lg py-2 "
        >
          SignUp
        </button>
      </div>
      <div className="flex pl-4">
        <p className="text-[1rem]" href="#">
          Already Have An Account?{" "}
        </p>
        <a
          onClick={() => navigate("/login")}
          className="no-underline text-[1rem] ml-2 font-semibold hover:text-hover transition-colors duration-300"
          href="#"
        >
          Login
        </a>
      </div>
    </form>
  );
};

export default SignUpForm;
