import { FC, Fragment } from "react";
import { useParams } from "react-router-dom";
import { useGetVideoQuery } from "../App/fetchData/fetchVideo";
import Video from "../components/Video";

interface Iprops {}

const SearchFeed: FC<Iprops> = ({}) => {
  const { searchTeram } = useParams();

  const { data, isLoading, isError } = useGetVideoQuery(searchTeram);

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <>
      <div className="w-full h-screen pb-4  overflow-y-scroll no-scrollbar">
        <div className="flex flex-row justify-center gap-3 flex-wrap">
          {isLoading ? (
            <h1>Loading...</h1>
          ) : (
            data?.items.map((item: any, idx: any) => (
              <Fragment key={idx}>
                {item?.id?.videoId && <Video video={item} />}
              </Fragment>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default SearchFeed;
