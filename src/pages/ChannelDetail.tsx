import { FC, Fragment } from "react";
import { useParams } from "react-router-dom";
import {
  useGetChannelDetailQuery,
  useGetChannelVideoQuery,
} from "../App/fetchData/fetchVideo";
import { formatSubscriberCount } from "../utils/formateNumberSubscribe";
import { formatViewCount } from "../utils/formateViews";
import Videos from "../components/Videos";
import Video from "../components/Video";

interface Iprops {}

const ChannelDetail: FC<Iprops> = ({}) => {
  const { id } = useParams();
  const {
    data: channelDetail,
    isLoading,
    isError,
    error,
  } = useGetChannelDetailQuery(id || "");
  const {
    data: channelVideo,
    isLoading: isFetchingVideo,
    isError: isErrorVideo,
  } = useGetChannelVideoQuery(id || "");
  document.title = channelDetail?.items[0]?.brandingSettings?.channel?.title;
  return (
    <>
      <div className="w-full h-screen pb-4  overflow-y-scroll no-scrollbar">
        <div className="container mx-auto my-5 px-3  lg:px-14">
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <div className="w-full flex flex-col relative space-y-6">
              <div className={`w-full  z-0 h-48  rounded-xl`}>
                <img
                  // srcSet="https://yt3.googleusercontent.com/-Or7GB_ClmKbq1CtTF-y_JrMive-Y4XVLhKCgssJ2LJVWXnEn2G1XQaSCF1kIjTomBM3gyoy"
                  src={
                    channelDetail?.items[0]?.brandingSettings?.image
                      ?.bannerExternalUrl
                  }
                  className="w-full z-0 object-cover object-center h-full"
                  alt="brand"
                />
              </div>

              <div className="flex flex-col md:flex-row text-center md:text-start gap-3 md:gap-10 items-center ">
                <img
                  src={channelDetail?.items[0]?.snippet?.thumbnails?.high?.url}
                  srcSet={
                    channelDetail?.items[0]?.snippet?.thumbnails?.high?.url
                  }
                  alt=""
                  className=" h-28 w-28 rounded-full "
                />
                <div className="flex  flex-col space-y-2">
                  <p className=" text-2xl  text-lime-50 font-extrabold">
                    {channelDetail?.items[0]?.brandingSettings?.channel?.title}
                  </p>
                  <p className="text-sm  text-gray-400 font-medium w-fit mx-auto md:mx-0 flex gap-2">
                    <span>{channelDetail?.items[0]?.snippet?.customUrl}</span>*
                    <span>
                      {formatSubscriberCount(
                        channelDetail?.items[0]?.statistics?.subscriberCount
                      )}{" "}
                      subscribers
                    </span>
                    *
                    <span>
                      {channelDetail?.items[0]?.statistics?.videoCount} videos
                    </span>
                    *
                    <span>
                      {formatViewCount(
                        channelDetail?.items[0]?.statistics?.viewCount
                      )}{" "}
                      View
                    </span>
                  </p>
                  <p className=" text-sm  text-gray-400 font-medium w-[80%] h-24 overflow-y-clip mx-auto md:mx-0 ">
                    {
                      channelDetail?.items[0]?.brandingSettings?.channel
                        ?.description
                    }
                  </p>
                </div>
              </div>
            </div>
          )}

          {isFetchingVideo ? (
            <p>Loading Video...</p>
          ) : (
            <div className=" mt-14">
              <ul className="no-scrollbar mx-auto border-b-[1px] w-[80%] border-[#aaa8a8] p-2 flex gap-3">
                <li className=" px-5 py-3 text-base font-medium rounded-full backdrop-blur-sm bg-white/10 text-white">
                  Videos
                </li>

                <li className=" px-5 py-3 text-base font-medium rounded-full backdrop-blur-sm hover:bg-white/10 hover:text-white text-gray-400">
                  PlayLists
                </li>
              </ul>
              <div className="flex flex-row mt-6 justify-center gap-6 flex-wrap">
                {channelVideo?.items.map((item: any, idx: any) => (
                  <Fragment key={idx}>
                    {item?.id?.videoId && <Video video={item} />}
                  </Fragment>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ChannelDetail;
