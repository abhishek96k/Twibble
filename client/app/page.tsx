import React from "react";
import { BiHomeCircle, BiUser } from "react-icons/bi";
import { TbSearch } from "react-icons/tb";
import { CgTwitter } from "react-icons/cg";
import { BsEnvelope, BsBookmark, BsBell, BsTwitter } from "react-icons/bs";
import { CiCircleMore } from "react-icons/ci";
import FeedCard from "@/components/FeedCard";

interface TwitterSidebarButtons {
  title: string;
  icon: React.ReactNode;
}

const sidebarMenuItems: TwitterSidebarButtons[] = [
  {
    title: "Home",
    icon: <BiHomeCircle />,
  },
  {
    title: "Explore",
    icon: <TbSearch />,
  },
  {
    title: "Notifications",
    icon: <BsBell />,
  },
  {
    title: "Messages",
    icon: <BsEnvelope />,
  },
  {
    title: "Bookmarks",
    icon: <BsBookmark />,
  },
  {
    title: "Profile",
    icon: <BiUser />,
  },
  {
    title: "More",
    icon: <CiCircleMore />,
  },
];

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-12 h-screen w-screen px-56">
        <div className="col-span-3 pt-1 px-4">
          <div className="text-4xl hover:bg-gray-800 rounded-full p-2 cursor-pointer h-fit w-fit transition-all">
            <CgTwitter />
          </div>
          <div className="mt-2 text-xl pr-4">
            <ul>
              {sidebarMenuItems.map((item) => (
                <li
                  className="flex justify-start items-center gap-4 hover:bg-gray-800 rounded-full px-5 py-2 w-fit cursor-pointer mt-2"
                  key={item.title}
                >
                  <span className="text-3xl">{item.icon}</span>
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 px-3">
              <button className="bg-[#1A8CD8] p-3 rounded-full w-full">
                <span className="text-lg font-semibold">Post</span>
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-6 border-x-[1px] border h-screen overflow-y-scroll border-gray-600">
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
        </div>
        <div className="col-span-3"></div>
      </div>
    </div>
  );
}
