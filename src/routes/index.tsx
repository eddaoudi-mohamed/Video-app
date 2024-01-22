import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "../pages/Layout";
import Feed from "../pages/Feed";
import VideoDetail from "../pages/VideoDetail";
import ChannelDetail from "../pages/ChannelDetail";
import SearchFeed from "../pages/SearchFeed";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<Feed />} />
        <Route path="video/:id" element={<VideoDetail />} />
        <Route path="channel/:id" element={<ChannelDetail />} />
        <Route path="search/:searchTeram" element={<SearchFeed />} />
      </Route>
    </>
  )
);
