import React, { useEffect, useState } from "react";
import { useStateShareContext } from "../../../Context/StateContext";
import { ImageSquare, Trash, X } from "phosphor-react";
import Vini from "../../../assets/Default_pfp.jpg";

const EditPFPForm = () => {
  useEffect(() => {
    setUpload(imageURL);
  }, []);
  const {
    setShowEditPFPModal,
    setShowDeleteProfilePhotoModal,
    selectedFile,
    setSelectedFile,
    imageURL,
    setImageURL,
    upload,
    setUpload,
  } = useStateShareContext();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      const url = URL.createObjectURL(file);
      // setImageURL(url);
      setUpload(url);
    }
  };
  const handleUpload = () => {
    if (selectedFile) {
      // Implement the file upload logic here, e.g., sending to a server
      setImageURL(upload);
      console.log("Selected file:", selectedFile);
      alert("Uploaded");
    } else {
      alert("No file selected!");
    }
  };

  const handlePhotoDelete = () => {
    setShowDeleteProfilePhotoModal(true);
  };

  return (
    <div
      className="absolute w-full md:w-[56%] h-[25rem] md:h-[30rem] rounded-lg  px-2 left-[50%]
 translate-x-[-50%] top-[5%] bg-bgcolor dark:bg-darkMode-body
  dark:text-darkMode-text     
 "
    >
      <div>
        {/* header */}
        <div className="flex justify-between items-center py-3 px-4 ">
          <p className="text-xl font-semibold">Profile photo</p>
          {/* cancel button */}
          <button
            onClick={() => setShowEditPFPModal(false)}
            className="rounded-full hover:bg-neutral-200 dark:hover:bg-gray-600 p-2"
          >
            <X size={24} />
          </button>
        </div>
        {/* display the profile picture */}
        <div className="h-[16rem] md:h-[21.4rem] flex justify-center">
          <div className="size-[14rem] md:size-[19rem] rounded-full overflow-hidden border-2 border-gray-300 flex items-center justify-center">
            <img
              className="h-full w-full object-cover object-center"
              src={!selectedFile ? Vini : upload}
              alt="Profile Preview"
            />
          </div>
        </div>
        {/* footer */}
        <div
          className=" h-[4.5rem] text-black dark:text-darkMode-text flex items-center justify-around 
        px-5 border-t-neutral-300 dark:border-t-neutral-500 border-t-[1px]"
        >
          <div>
            <input
              type="file"
              id="fileInput"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
            <button
              onClick={() => document.getElementById("fileInput").click()}
              className="h-full px-2 flex flex-col items-center justify-center hover:bg-neutral-200 dark:hover:bg-gray-600 font-medium py-1"
            >
              <span>
                <ImageSquare size={25} weight="fill" />
              </span>
              <span>Upload new</span>
            </button>
            {selectedFile && (
              <div className="mt-2 flex gap-2">
                <button
                  onClick={handleUpload}
                  className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600"
                >
                  Upload
                </button>
                <button
                  onClick={() => {
                    setUpload("");
                  }}
                  className="bg-gray-500 text-white py-1 px-3 rounded hover:bg-gray-600"
                >
                  Remove
                </button>
              </div>
            )}
          </div>
          {/* <form action="">
            <input type="file" />
          </form> */}
          <button
            onClick={handlePhotoDelete}
            className="h-full px-2 flex flex-col items-center hover:bg-neutral-200
           dark:hover:bg-gray-600 justify-center rounded-lg font-medium  py-1"
          >
            <span>
              <Trash size={25} weight="fill" />
            </span>
            <span>Delete</span>
          </button>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default EditPFPForm;
