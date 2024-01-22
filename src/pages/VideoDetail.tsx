import { FC, Fragment, useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom";
import {
  useGetChannelDetailQuery,
  useGetRelatedVideoQuery,
  useGetVideoDetailQuery,
} from "../App/fetchData/fetchVideo";
import Video from "../components/Video";
import VideoForList from "../components/VideoForList";
import { formatSubscriberCount } from "../utils/formateNumberSubscribe";
import { formatViewCount } from "../utils/formateViews";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { formatSocialMediaDate } from "../utils/formateDate";
interface Iprops {}

const VideoDetail: FC<Iprops> = ({}) => {
  const [showmore, setShowmore] = useState("overflow-hidden h-24");

  const { id } = useParams();

  const {
    data: relatedVideo,
    isLoading: isLoadingVideoRelated,
  } = useGetRelatedVideoQuery(id || "");
  const {
    data: videoDetail,
    isLoading: isLoadingVideo,
  } = useGetVideoDetailQuery(id || "");
  const {
    data: channelDetail,
    isLoading,
    isError,
    error,
  } = useGetChannelDetailQuery(videoDetail?.items[0]?.snippet?.channelId || "");

  if (isLoadingVideoRelated || isLoadingVideo || isLoading)
    return <h1 className="h-screen text-center">LOADING...</h1>;
  document.title = videoDetail?.items[0]?.snippet?.title;

  return (
    <>
      <div className="w-full h-screen pb-4  overflow-y-scroll no-scrollbar">
        <div className="pt-0 flex  mx-auto flex-col lg:flex-row">
          <div className=" flex-1 p-3">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              // style={{
              //   width: "100%",
              //   height: "77vh",
              // }}
              controls
            />
            <div className="mt-4 flex flex-col space-y-3 ">
              {isLoadingVideo ? (
                <h1 className="text-white">Loading...</h1>
              ) : (
                <>
                  <p className=" text-lime-50 text-xl font-extrabold">
                    {videoDetail?.items[0]?.snippet?.title}
                  </p>
                  {channelDetail && channelDetail?.items ? (
                    <div className="flex justify-between items-center px-4 py-2">
                      <Link
                        to={`/channel/${videoDetail?.items[0]?.snippet?.channelId}`}
                        className="flex flex-row text-start gap-3 md:gap-10 items-center "
                      >
                        <img
                          src={
                            channelDetail?.items[0]?.snippet?.thumbnails?.high
                              ?.url
                          }
                          alt=""
                          className=" h-14 w-14 rounded-full "
                        />
                        <div className="flex  flex-col space-y-1 justify-start">
                          <p className=" text-lg  text-lime-50 font-extrabold">
                            {
                              channelDetail?.items[0]?.brandingSettings?.channel
                                ?.title
                            }
                          </p>
                          <p className="text-sm text-lime-50">
                            {formatSubscriberCount(
                              channelDetail?.items[0]?.statistics
                                ?.subscriberCount || 0
                            )}{" "}
                            subscribers
                          </p>
                        </div>
                      </Link>
                      <div className="flex gap-3 items-center">
                        <p className="cursor-pointer flex items-center justify-around px-6 py-1 rounded-full backdrop-blur-sm bg-white/10 text-white">
                          <ThumbUpIcon className=" w-24   pt-0 pb-1 pr-1" />
                          {videoDetail?.items[0]?.statistics?.likeCount}{" "}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <p>404 NOT FOUND</p>
                  )}

                  <div className="w-full mt-3 p-3 cursor-pointer  rounded-md backdrop-blur-sm bg-white/10 text-white">
                    <div className="flex gap-3 text-sm">
                      <p>
                        {formatViewCount(
                          videoDetail?.items[0]?.statistics?.viewCount
                        )}
                      </p>
                      <p>
                        {formatSocialMediaDate(
                          videoDetail?.items[0]?.snippet?.publishedAt
                        )}
                      </p>
                    </div>

                    <p className={`${showmore}`}>
                      {videoDetail?.items[0]?.snippet?.description}...
                    </p>
                    <button
                      className=" cursor-pointer"
                      onClick={() =>
                        setShowmore((preve) =>
                          preve == "overflow-hidden h-24"
                            ? ""
                            : "overflow-hidden h-24"
                        )
                      }
                    >
                      ...more
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
          <div className=" p-3 pt-0 mt-5 md:mt-0">
            {" "}
            <div className="flex flex-col justify-center gap-3 overflow-y-scroll">
              {isLoadingVideoRelated ? (
                <h1>Loading...</h1>
              ) : (
                relatedVideo?.items.map((item: any, idx: any) => (
                  <Fragment key={idx}>
                    {item?.id?.videoId && <VideoForList video={item} />}
                  </Fragment>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoDetail;
