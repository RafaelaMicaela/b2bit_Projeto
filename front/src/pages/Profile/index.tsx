import { Navigate } from "react-router-dom";
import Img from "../../assets/perfil.png";
import { Button } from "../../components/Button";
import { useState } from "react";
import { removeToken } from "../../api/auth";

const Profile = () => {
  const [isLogged, setIsLogged] = useState(true);

  return (
    <div className="bg-customBg flex justify-center items-center h-screen ">
      <nav className="fixed top-0 w-full h-[70px] bg-white shadow-sm flex items-center px-4 z-50">
        <div className="flex justify-center items-center px-4 py-2 ml-auto mb-5">
          <Button
            onClick={() => {
              removeToken();
              setIsLogged(false);
            }}
          >
            Logout
          </Button>
        </div>
      </nav>
      <div className=" bg-white flex-col flex justify-center items-center w-[356px] h-[315px] gap-0 rounded-lg shadow-lg">
        <div className="flex flex-col justify-center items-center">
          <h5 className=" font-normal text-[12px]  whitespace-nowrap mb-2">
            Profile picture
          </h5>
          <div>
            <img
              src={Img}
              alt="Imagem do Perfil"
              className="w-[56px] h-[56px] rounded-[8px]"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-2 mt-5">
          <label
            className=" w-[73px] h-[12px] gap-0  font-munito text-[14px] font-normal text-left"
            htmlFor="name"
          >
            Your <span className="font-bold">Name</span>
          </label>
          <input
            className=" w-[296px] h-[44px] gap-0 rounded[-8px] mt-1 p-2  border-gray-300 rounded bg-customWhite2 disabled-input custom-placeholder"
            type="text"
            placeholder="Christine James"
          />

          <label
            className=" w-[73px] h-[12px] gap-0 font-munito text-[14px] font-normal text-left whitespace-nowrap "
            htmlFor="email"
          >
            Your <span className="font-bold">E-mail</span>
          </label>
          <input
            className=" w-[296px] h-[44px] gap-0 rounded[-8px] mt-1 p-2  border-gray-300 rounded bg-customWhite2 disabled-input custom-placeholder"
            type="text"
            placeholder="christinejames@gmail.com"
          />
        </div>
      </div>
      {!isLogged && <Navigate to={"/"} />}
    </div>
  );
};

export default Profile;
