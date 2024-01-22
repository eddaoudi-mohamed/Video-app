import { FC } from "react";
import { Link } from "react-router-dom";
import { categories, logo } from "../utils/constant";
import HeadNavbar from "./HeadNavbar";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../App/SliceCategory/categorySlice";
interface Iprops {
  setStatusSideBar: (value: string) => void;
  statusSideBar: string;
}

const SideBar: FC<Iprops> = ({ statusSideBar, setStatusSideBar }) => {
  const category = useSelector((state: any) => state.categorys.category);
  const dispatch = useDispatch();
  const handlerCategory = (cat: string) => {
    dispatch(setCategory(cat));
  };
  return (
    <>
      <div
        className={` h-screen z-40 w-52 ${statusSideBar}   inset-0 fixed  border-r-[1px]  overflow-scroll border-[#aaa8a8] bg-[#0e0d0d] opacity-100 `}
      >
        <HeadNavbar setStatusSideBar={setStatusSideBar} />
        <div className=" px-2  mb-6 w-full">
          <div className="flex flex-col my-5 space-y-3 px-4 w-full">
            {categories.map((item) => {
              const isActive = item.name == category;
              return (
                <div
                  onClick={() => handlerCategory(item.name)}
                  key={item.name}
                  className={
                    isActive
                      ? `flex flex-row items-center px-5 py-2 cursor-pointer  rounded-lg backdrop-blur-sm bg-white/10 text-white`
                      : "flex flex-row items-center px-5 py-2 cursor-pointer  rounded-lg backdrop-blur-sm hover:bg-white/10 text-white"
                  }
                >
                  {item.icon}
                  <p className=" pl-3 text-lime-50 "> {item.name} </p>
                </div>
              );
            })}
          </div>
          <div className=" h-14">
            <p className="text-white text-center px-8 ">Crypto 2024</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
