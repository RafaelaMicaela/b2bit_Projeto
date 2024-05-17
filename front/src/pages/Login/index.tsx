import { useState } from "react";
import LogoImg from "./../../assets/B2Bit Logo.png";
import { Navigate } from "react-router-dom";

const Login = () => {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex justify-center items-center  w-[438px] h-[534px]  rounded-[18px] shadow-shadow-login">
        <div>
          <div className="flex justify-center items-center w-full">
            <img src={LogoImg} alt="Logo b2Bit" />
          </div>
          <form className="flex flex-col gap-0 ">
            <label className="mt-8 font-bold"> E-mail</label>
            <input
              type="email"
              placeholder="@gmail.com"
              className="w-[385.88px] h-[54.25px] mt-1 p-2  border-gray-300 rounded bg-gray-100"
            />
            <label className="mt-3 font-bold">Password</label>
            <input
              type="password"
              placeholder="****************"
              className="w-[385.88px]  h-[54.25px] mt-1 p-2  border-gray-300 rounded bg-gray-100"
            />
            <button
              type="submit"
              className="w-[385.88px] h-[54px] mt-4 rounded-[9px]  bg-[#02274F] text-[#FAFAFA] font-nunito font-bold text-[18px]  text-center"
              onClick={() => setIsLogged(true)}
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
      {isLogged && <Navigate to={"/user"} />}
    </div>
  );
};
export default Login;
