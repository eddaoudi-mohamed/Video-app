import { FC, useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { logo } from "../utils/constant";

interface Iprops {
  setStatusSideBar: (value: any) => void;
}

const HeadNavbar: FC<Iprops> = ({ setStatusSideBar }) => {
  return (
    <div
      className={`flex  px-2 py-1 sticky  inset-0 z-10 bg-[#0e0d0d] flex-row justify-between items-center w-full h-14 `}
    >
      <MenuIcon
        className=" text-white cursor-pointer"
        onClick={() => {
          setStatusSideBar((prev: any) =>
            prev == "hidden" ? "block" : "hidden"
          );
        }}
      />
      <Link to={"/"} className="flex block flex-row  items-center">
        <img src={logo} alt="logo" height={35} width={35} />
        <p className=" text-xl text-white font-extrabold">VIDEO</p>
      </Link>
    </div>
  );
};

export default HeadNavbar;
