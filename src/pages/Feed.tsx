import { FC } from "react";
import Videos from "../components/Videos";

interface Iprops {}

const Feed: FC<Iprops> = ({}) => {
  return (
    <>
      <div className="w-full h-screen pb-4  overflow-y-scroll no-scrollbar ">
        {/* <h1 className=" text-lg text-red-400 font-extrabold">New Video</h1> */}
        <div className="mx-auto my-4 ">
          <Videos />
        </div>
      </div>
    </>
  );
};

export default Feed;
