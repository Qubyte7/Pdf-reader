import { FaRegFilePdf } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa6";
import { IoPlayForward, IoPlayBack } from "react-icons/io5";
import { FaPause } from "react-icons/fa";
import { useState } from "react";
import { IoExit } from "react-icons/io5";


function App() {
  const [playclicked, setPlayClicked] = useState(false);
  return (
    <>
      <div className="bg-background h-[100vh] text-white font-poppins">
        <div className="flex flex-row gap-5 items-center px-8 py-7">
          <img
            src="/Pdf_reader_logo.svg"
            alt="Pdf Reader Logo"
            className="w-16"
          />
          <p className="text-4xl font-bold">Pdf Reader</p>
        </div>
        <div className="flex flex-row justify-between px-20 py-5">
          <div className="flex flex-row gap-5 items-center">
            <FaRegFilePdf color="#E7FF00" size={30} />
            <p className="text-xl">Last Apprenticeship</p>
          </div>
          <button className="font-medium border-solid border-danger border-2 px-10 py-2 rounded-lg text-danger hover:text-black hover:bg-danger transition-colors duration-300">
            Exit
          </button>
        </div>
        <div className="bg-light-background text-2xl h-[350px] w-[90%] mx-auto rounded-xl p-5 relative">
          <div className="absolute inset-x-0 top-0 h-20 rounded-xl z-10 bg-gradient-to-b from-light-background to-transparent pointer-events-none"></div>

          <div className="h-full overflow-y-auto scrollbar-hide">
            <p className="px-7">
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
          <div className="absolute inset-x-0 rounded-xl bottom-0 h-20 bg-gradient-to-t from-light-background to-transparent"></div>
        </div>
        <div className="flex items-center justify-center mt-10">
        <div className="flex flex-row items-center gap-10">
          <IoPlayBack color="#BFCC3E" size={32} className="cursor-pointer"/>
          <div className="p-5 bg-primary rounded-full cursor-pointer" onClick={() => setPlayClicked(!playclicked)}>
            {
              playclicked
                ? <FaPause color="black" className="" size={32}  />
                : <FaPlay color="black" className="" size={32}  />
            }
          </div>
          <IoPlayForward color="#BFCC3E" size={32} className="cursor-pointer" />
        </div>
        <p className="absolute right-0 pr-24 text-xl">Page <strong className="text-primary"> 40 </strong> of 600</p>
        </div>
      </div>
    </>
  );
}

export default App;
