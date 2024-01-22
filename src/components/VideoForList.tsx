import { CheckCircle } from "@mui/icons-material";
import { FC } from "react";
import { Link } from "react-router-dom";
import { formatSocialMediaDate } from "../utils/formateDate";

interface IvideoDetail {
  height: number;
  url: string;
  width: number;
}

interface Ivideo {
  id: {
    videoId: string;
  };
  snippet: {
    channelId: string;
    channelTitle: string;
    description: string;
    liveBroadcastContent: string;
    title: string;
    publishTime: string;
    publishedAt: string;
    thumbnails: {
      default: IvideoDetail;
      high: IvideoDetail;
      medium: IvideoDetail;
    };
  };
}

interface Iprops {
  video: Ivideo;
}

const VideoForList: FC<Iprops> = ({ video }) => {
  return (
    <>
      <Link
        to={`/video/${video.id.videoId}`}
        className="flex flex-row w-[100%] lg:w-[355px]"
      >
        <img
          className=" rounded-xl w-[350px] shadow-sm h-[150px]  lg:h-[120px] shadow-slate-200"
          src={video?.snippet?.thumbnails?.high?.url}
          alt=""
        />

        <div className=" h-[100px]  w-[90%] pl-3">
          <p className=" text-lime-50 text-sm w-full  ">
            {video?.snippet?.title.slice(0, 60) || ""}{" "}
          </p>
          <p className=" text-gray-500 text-sm pt-1 font-serif">
            {video?.snippet?.channelTitle}{" "}
            <CheckCircle
              className="text-gray-400 ml-1"
              sx={{ width: "15px", height: "15px" }}
            />
          </p>
          <p className="text-gray-500 text-sm pt-1  ">
            {" "}
            {formatSocialMediaDate(video.snippet.publishedAt)}
          </p>
        </div>
      </Link>
    </>
  );
};

export default VideoForList;
