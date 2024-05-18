import { useState } from "react";
import LogoImg from "./../../assets/B2Bit Logo.png";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { SERVICE_URL, setRefreshToken, setToken } from "../../api/auth";
import { ToastContainer } from "react-toastify";

const Login = () => {
  const [isLogged, setIsLogged] = useState(false);
  const [formIsInvalid, setFormIsInvalid] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const logar = () => {
    if (email.trim() == "" || password.trim() == "") {
      setFormIsInvalid(true)
      return;
    }

    axios
      .post(
        `${SERVICE_URL}auth/login/`,
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json;version=v1_web",
          },
        }
      )
      .then(
        ({ data }) => {
          setToken(data.tokens.access);
          setRefreshToken(data.tokens.refresh);
          setIsLogged(true)
        },
        () => {
          setFormIsInvalid(true)
        }
      );
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <ToastContainer />
      <div className="flex justify-center items-center  w-[438px] h-[534px]  rounded-[18px] shadow-shadow-login">
        <div>
          <div className="flex justify-center items-center w-full">
            <img src={LogoImg} alt="Logo b2Bit" />
          </div>
          {/*<form className="flex flex-col gap-0 ">*/}
          <div className="flex flex-col gap-0">
            <label className="mt-8 font-bold"> E-mail</label>
            <input
              value={email}
              type="email"
              placeholder="@gmail.com"
              className="w-[385.88px] h-[54.25px] mt-1 p-2  border-gray-300 rounded bg-gray-100"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="mt-3 font-bold">Password</label>
            <input
              value={password}
              type="password"
              placeholder="****************"
              className="w-[385.88px]  h-[54.25px] mt-1 p-2  border-gray-300 rounded bg-gray-100"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="submit"
              className="w-[385.88px] h-[54px] mt-4 rounded-[9px]  bg-[#02274F] text-[#FAFAFA] font-nunito font-bold text-[18px]  text-center"
              onClick={() => logar()}
            >
              Sign In
            </button>
          </div>
          {formIsInvalid && (<span>Usuario ou senha invalida</span>)}
          {/* </form> */}
        </div>
      </div>
      {isLogged && <Navigate to={"/user"} />}
    </div>
  );
};
export default Login;
