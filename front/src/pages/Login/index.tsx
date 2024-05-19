import { useState } from "react";
import LogoImg from "./../../assets/B2Bit Logo.png";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { SERVICE_URL, setRefreshToken, setToken } from "../../api/auth";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [isLogged, setIsLogged] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const logar = () => {
    if (email.trim() == "" || password.trim() == "") {
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
          setIsLogged(true);
        },
        () => {
          toast.error("Falha no login. Verifique suas credenciais.", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
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

          <div className="flex flex-col gap-0">
            <label className="mt-8 font-bold"> E-mail</label>
            <input
              value={email}
              type="email"
              placeholder="@gmail.com"
              className="w-[385.88px] h-[54.25px] mt-1 p-2 rounded-[9px] border-gray-300  bg-customWhite2"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="mt-5 font-bold">Password</label>
            <input
              value={password}
              type="password"
              placeholder="****************"
              className="w-[385.88px]  h-[54.25px] mt-1 p-2 rounded-[9px] border-gray-300  bg-customWhite2"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="submit"
              className="w-[385.88px] h-[54px] mt-9 rounded-[9px]  bg-[#02274F] text-[#FAFAFA] font-nunito text-[18px]  text-center"
              onClick={() => logar()}
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
      {isLogged && <Navigate to={"/user"} />}
    </div>
  );
};
export default Login;
