import { Margin } from "@mui/icons-material";
import { FC } from "react";
import { Link } from "react-router-dom";
import { logo } from "../utils/constant";
import SearchBar from "./SearchBar";
import MenuIcon from "@mui/icons-material/Menu";
interface Iprops {
  setStatusSideBar: (value: any) => void;
}

const Navbar: FC<Iprops> = ({ setStatusSideBar }) => {
  return (
    <>
      <div className="sticky top-0 flex flex-row justify-between items-center py-4 px-2 bg-zinc-950">
        <div
          className={`flex  px-2 py-1 flex-row justify-between items-center  h-14 w-40`}
        >
          <MenuIcon
            className=" text-white cursor-pointer"
            onClick={() => {
              setStatusSideBar((prev: string) =>
                prev == "hidden" ? "block" : "hidden"
              );
            }}
          />
          <Link to={"/"} className="flex flex-row  items-center">
            <img src={logo} alt="logo" height={35} width={35} />
            <p className=" text-xl text-white font-extrabold">VIDEO</p>
          </Link>
        </div>
        <SearchBar />
      </div>
    </>
  );
};

export default Navbar;
