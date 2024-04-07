import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import { IoMdMenu } from "react-icons/io";

export default function MyDrawer({ endpoint }) {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerContent = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        <ListItem disablePadding>
          <ul className="flex flex-col w-full  text-xl font-semibold opacity-80 gap-1">
            <li
              className={`${
                endpoint === "hero-section" && "text-red-500"
              } hover:bg-red-400 py-1 hover:text-slate-300 px-3`}
            >
              <a href="/#hero-section">Home</a>
            </li>
            <li
              className={`${
                endpoint === "footer" && "text-red-500"
              } hover:bg-red-400 py-1 hover:text-slate-300 px-3`}
            >
              <a href="/#footer">Page</a>
            </li>
            <li
              className={`${
                endpoint === "features" && "text-red-500"
              } hover:bg-red-400 py-1 hover:text-slate-300 px-3`}
            >
              <a href="/#features">Features</a>
            </li>
            <li
              className={`${
                endpoint === "how-it's-works" && "text-red-500"
              } hover:bg-red-400 py-1 hover:text-slate-300 px-3`}
            >
              <a href="/#how-it's-works">How it Works</a>
            </li>
            <li
              className={`${
                endpoint === "app-screenshot" && "text-red-500"
              } hover:bg-red-400 py-1 hover:text-slate-300 px-3`}
            >
              <a href="/#app-screenshot">Screenshot</a>
            </li>
            <li
              className={`${
                endpoint === "membership-pricing" && "text-red-500"
              } hover:bg-red-400 py-1 hover:text-slate-300 px-3`}
            >
              <a href="/#membership-pricing">Pricing</a>
            </li>
            <li className="flex items-center px-3 mt-3">
              <button className="text-white bg-red-500 rounded-md px-5 pt-2 pb-3 ">
                Dounload
              </button>
            </li>
          </ul>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <button onClick={toggleDrawer(true)} className="text-3xl text-red-500 font-bold">
        <IoMdMenu />
      </button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <a href="/">
          <div className="flex items-center w-[40%] py-2 px-3">
            <img
              src="https://www.svgrepo.com/show/499962/music.svg"
              className="h-6 mr-3 sm:h-9"
              alt="Landwind Logo"
            />
            <h1 className="text-3xl font-serif font-bold text-red-500 ml-[-10px]">
              Music<span className="text-4xl text-indigo-500">.</span>
              <span className="  text-stone-700">Hub</span>
            </h1>
          </div>
        </a>
        <Divider/>
        {DrawerContent}
      </Drawer>
    </div>
  );
}
