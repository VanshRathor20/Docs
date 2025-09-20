import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { MdDownloadForOffline } from "react-icons/md";
import { IoIosCloseCircle } from "react-icons/io";
import { motion } from "motion/react";

const Card = ({ data, reference }) => {
  return (
    <motion.div
      drag whileDrag={{scale:1}} dragElastic={1.2} dragTransition={{bounceStiffness:400,bounceDamping:20}}
      dragConstraints={reference} 
      className="flex-shrink-0 relative w-60 h-72 rounded-[35px] bg-zinc-600 text-[#FFFFFF] px-8 py-10 overflow-hidden"
    >
      <FaRegFileAlt></FaRegFileAlt>
      <p className="text-sm font-semibold leading-tight mt-5">{data.desc}</p>

      <div className="absolute bottom-0 w-full h-10 left-0  mb-13 ">
        <div className="flex justify-between items-center px-8 mb-4">
          <h5>{data.filesize}</h5>
          {data.close ? (
            <IoIosCloseCircle />
          ) : (
            <MdDownloadForOffline size="20" />
          )}
        </div>

        {/* green download bar  */}
        <div
          className={`flex w-full ${
            data.tag.tagColor === "blue" ? "bg-blue-400" : "bg-green-400"
          } h-13 rounded-b-2xl justify-center items-center`}
        >
          <h3 className="text-white font-semibold">{data.tag.tagTitle}</h3>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;