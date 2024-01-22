import { FC, Fragment } from "react";
import { useGetVideoQuery } from "../App/fetchData/fetchVideo";
import Video from "./Video";
import { useSelector } from "react-redux";

interface Iprops {}

const Videos: FC<Iprops> = ({}) => {
  const category = useSelector((state: any) => state.categorys.category);

  const { data, isLoading, isError } = useGetVideoQuery(category);

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <>
      <div className="flex flex-row justify-center gap-3 flex-wrap">
        {data?.items.map((item: any, idx: any) => (
          <Fragment key={idx}>
            {item?.id?.videoId && <Video video={item} />}
          </Fragment>
        ))}
      </div>
    </>
  );
};

export default Videos;
