
const ModalLogin = () => {
  return (
    <div className="w-[438px] h-[534px] p-[55px_26.25px_40.13px_25.88px] rounded-tl-[18px] opacity-0 bg-gray-100">
      <form className="flex flex-col gap-0">
        <label className="opacity-0">
          E-mail
          <input
            type="email"
            placeholder="@gmail.com"
            className="w-[385.88px] h-[23px] mt-2 p-2 border border-gray-300 rounded"
          />
        </label>
        <label className="opacity-0 mt-8">
          Password
          <input
            type="password"
            placeholder="****************"
            className="w-[385.88px] h-[85.5px] mt-2 p-2 border border-gray-300 rounded"
          />
        </label>
        <button
          type="submit"
          className="w-[385.88px] h-[54px] mt-8 p-[14.63px_0px_15.75px_0px] rounded-tl-[9px] bg-[#02274F] text-[#FAFAFA] font-nunito font-bold text-[18px] leading-[56.25px] text-center"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default ModalLogin;
