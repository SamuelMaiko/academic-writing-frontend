import React from "react";
import Chimp from "../../../assets/gpt-redesign-5.webp";
import { Download } from "lucide-react";
import { useStateShareContext } from "../../../Context/StateContext";

const ImageBlock = () => {
  const { setShowCarouselModal } = useStateShareContext();
  const handleDownload = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      onClick={() => setShowCarouselModal(true)}
      className="relative size-[6rem] cursor-pointer hover:bg-gray-400 overflow-hidden"
    >
      <img className="h-full w-full " src={Chimp} alt="" />
      <div
        className="bg-transparent hover:bg-[rgba(0,0,0,0.2)] transition-colors duration-300 
      absolute inset-0 z-10 size-full"
      ></div>
      {/* download icon */}
      <a
        href="http://localhost:8000/api/download-images/1/"
        download="wallpaperflare.com_wallpaper_1.jpg"
      >
        <Download
          size={20}
          className="absolute top-1 right-1 text-white z-20"
          onClick={handleDownload}
        />
      </a>
    </div>
  );
};

export default ImageBlock;
