import { Box } from "@mui/material";
import { FC, useState } from "react";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import { Outlet } from "react-router-dom";

interface Iprops {}

const Layout: FC<Iprops> = ({}) => {
  const [statusSideBar, setStatusSideBar] = useState("hidden");

  return (
    <>
      <Box className="bg-zinc-950 text-white">
        <Navbar setStatusSideBar={setStatusSideBar} />

        <SideBar
          statusSideBar={statusSideBar}
          setStatusSideBar={setStatusSideBar}
        />

        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
