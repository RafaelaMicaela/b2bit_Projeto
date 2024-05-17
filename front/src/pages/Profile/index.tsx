import Img from "../../assets/perfil.png";

const Profile = () => {
  return (
    <div className="bg-customBg flex justify-center items-center h-screen ">
      <div className=" bg-customWhite flex-col flex justify-center items-center w-[356px] h-[315px] gap-0 rounded-lg shadow-lg">
        <div className="flex flex-col justify-center items-center">
          <h5 className=" font-muito text-[12px] font-normal whitespace-nowrap mb-2 ">
            Profile picture
          </h5>
          <img
            src={Img}
            alt="Descrição da Imagem"
            className="w-[75px] h-[75px] "
          />
        </div>
        <div className="grid grid-cols-1 gap-2">
          <label
            className=" w-[73px] h-[12px] gap-0 font-nunito text-[14px] font-normal text-left"
            htmlFor="name"
          >
            Your <span className="font-bold">Name</span>
          </label>
          <input
            className=" w-[296px] h-[44px]  gap-0 rounded[-8px] mt-1 p-2  border-gray-300 rounded bg-gray-200"
            type="text"
            placeholder="Christine James"
          />

          <label
            className=" w-[73px] h-[12px] gap-0 font-nunito text-[14px] font-normal text-left whitespace-nowrap "
            htmlFor="email"
          >
            Your <span className="font-bold">E-mail</span>
          </label>
          <input
            className=" w-[296px] h-[44px] gap-0 rounded[-8px] mt-1 p-2  border-gray-300 rounded bg-gray-200"
            type="text"
            placeholder="christinejames@gmail.com"
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
