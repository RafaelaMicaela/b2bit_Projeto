const Profile = () => {
  return (
    <div className=" w-[356px] h-[315px] top-[165px] left-[549px] bg-[#FDFDFD] gap-0">
      <div className="w-[77px] h-[77px] top-[195px] left-[686px] gap-0 rounded-tl-[8px]">
        {/* Profile Picture */}
      </div>
      <div>
        <label
          className=" w-[73px] h-[12px] top-[386px] left-[579px] gap-0 font-nunito text-[14px] font-normal leading-[12px] text-left"
          htmlFor="email"
        >
          Your <span className="font-bold bg-[#262626]">E-mail</span>
        </label>
        <input
          className=" w-[296px] h-[44px] top-[322px] left-[579px] gap-0 rounded-tl-[8px] bg-[#F4F4F4] "
          type="text"
        />
      </div>
    </div>
  );
};


export default Profile