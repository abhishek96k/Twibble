import React from "react";
import Image from "next/image";
import { BiMessageRounded, BiUpload } from "react-icons/bi";
import { FaRetweet } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";

const FeedCard: React.FC = () => {
  return (
    <div className="border border-l-0 border-r-0 border-b-0 border-gray-600 p-5 hover:bg-slate-900 transition-all cursor-pointer">
      <div className="grid grid-cols-12">
        <div className="col-span-1 p-1">
          <Image
            src={"https://avatars.githubusercontent.com/u/54280252?v=5"}
            alt="user-image"
            height={50}
            width={50}
            className="rounded-full"
          />
        </div>
        <div className="col-span-11 m-1">
          <h5 className="font-semibold">Abhishek</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime sit
            alias natus recusandae esse incidunt molestias hic aut praesentium
            rerum.
          </p>
          <div className="flex justify-between mt-5 text-xl items-center">
            <div>
              <BiMessageRounded />
            </div>
            <div>
              <FaRetweet />
            </div>
            <div>
              <AiOutlineHeart />
            </div>
            <div>
              <BiUpload />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
