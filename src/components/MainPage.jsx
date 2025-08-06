import React from "react";
import { FaRegFilePdf } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa6";
import { IoPlayForward, IoPlayBack } from "react-icons/io5";
import { FaPause } from "react-icons/fa";
import { useState } from "react";
import { IoExit } from "react-icons/io5";
import { MdOutlineDriveFolderUpload } from "react-icons/md";

const MainPage = () => {
  const [playclicked, setPlayClicked] = useState(false);
  return (
    <>
      <div className="bg-background min-h-[100vh] text-white font-poppins">
        <div className="flex items-center justify-between">
          <div className="flex flex-row gap-3 sm:gap-5 items-center px-4 sm:px-8 py-4 sm:py-7">
            <img
              src="/Pdf_reader_logo.svg"
              alt="Pdf Reader Logo"
              className="w-12 sm:w-16"
            />
            <p className="text-2xl sm:text-4xl font-bold">Pdf Reader</p>
          </div>
          <div className="p-3 sm:px-7 sm:py-2 border-primary border-2  mr-[15px] sm:mr-[80px] rounded-full sm:rounded-lg hover:cursor-pointer">
          <MdOutlineDriveFolderUpload color="#BFCC3E" size={25}/>
          </div>
        </div>
        <div className="flex flex-row justify-between px-4 sm:px-20 py-3 sm:py-5">
          <div className="flex flex-row gap-2 sm:gap-5 items-center">
            <FaRegFilePdf
              color="#E7FF00"
              size={30}
              className="sm:text-[30px]"
            />
            <p className="text-lg sm:text-xl">Last Apprenticeship</p>
          </div>
          <button className="hidden sm:inline-block font-medium border-solid border-danger border-2 px-10 py-2 rounded-lg text-danger hover:text-black hover:bg-danger transition-colors duration-300">
            Exit
          </button>
          <button className="sm:hidden p-3 rounded-full border-2 border-danger hover:bg-danger transition-colors duration-300">
            <IoExit className="text-danger hover:text-black" size={24} />
          </button>
        </div>
        <div className="bg-light-background text-lg sm:text-2xl h-[400px] sm:h-[350px] w-[95%] sm:w-[90%] mx-auto rounded-xl p-5 relative">
          <div className="absolute inset-x-0 top-0 h-16 sm:h-20 rounded-xl z-10 bg-gradient-to-b from-light-background to-transparent pointer-events-none"></div>

          <div className="h-full overflow-y-auto scrollbar-hide">
            <p className="px-3 sm:px-7">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
          <div className="absolute inset-x-0 rounded-xl bottom-0 h-16 sm:h-20 bg-gradient-to-t from-light-background to-transparent"></div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-0 mt-6 sm:mt-10 px-4 sm:px-0">
          <div className="flex flex-row items-center gap-6 sm:gap-10">
            <IoPlayBack
              color="#BFCC3E"
              size={28}
              className="cursor-pointer sm:text-[32px]"
            />
            <div
              className="p-4 sm:p-5 bg-primary rounded-full cursor-pointer"
              onClick={() => setPlayClicked(!playclicked)}
            >
              {playclicked ? (
                <FaPause color="black" size={28} className="sm:text-[32px]" />
              ) : (
                <FaPlay color="black" size={28} className="sm:text-[32px]" />
              )}
            </div>
            <IoPlayForward
              color="#BFCC3E"
              size={28}
              className="cursor-pointer sm:text-[32px]"
            />
          </div>
          <p className="text-center sm:absolute sm:right-0 sm:pr-24 text-lg sm:text-xl">
            Page <strong className="text-primary">40</strong> of 600
          </p>
        </div>
      </div>
    </>
  );
};

export default MainPage;
