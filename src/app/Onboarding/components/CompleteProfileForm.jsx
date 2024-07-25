import React, { useState } from "react";
import { useProgressBarContext } from "../../../Context/ProgressBarContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import instance from "../../../axios/instance";

const CompleteProfileForm = () => {
  const { setProfileDone } = useProgressBarContext();
  const navigate = useNavigate();
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // };

  const [isLoading, setIsLoading] = useState(false);
  const [bio, setBio] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setSuccess("");

    const formData = new FormData();
    formData.append("profile_picture", file);
    formData.append("bio", bio);

    try {
      const response = await instance.put(
        "/onboarding/complete-profile/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // setSuccess(response.data.message);
      toast.success("Profile updated successfully.");
      setProfileDone(true);
      navigate("/onboarding/change-password");
    } catch (error) {
      if (error.response && error.response.status) {
        const status = error.response.status;
        const message = error.response.data.error;
        console.log(error.response.data);

        switch (status) {
          case 400:
            setError(`${message}`);
            break;
          case 500:
            setError(`Server Error: ${message}`);
            break;
          default:
            setError(`Error: ${message}`);
            break;
        }
      } else {
        setError("An unexpected error occurred. Please try again later.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]); // Save the first selected file
  };

  return (
    <form onSubmit={handleSubmit} className="relative w-full ">
      {error && <p className="text-red-500 mt-3">{error}</p>}
      {success && <p className="text-green-500 mb-3">{success}</p>}
      <div className="grid w-full max-w-xs items-center gap-1.5">
        <p className="text-sm">Profile picture</p>
        <input
          id="picture"
          type="file"
          className="flex h-10 w-full rounded-md border border-input bg-blue-100 px-3 py-2 mb-7 text-sm
                 text-gray-400 file:border-0 file:bg-white file:text-gray-600 file:text-sm file:font-medium"
          onChange={handleFileChange}
        />
      </div>
      <div className="relative inline ">
        <textarea
          rows={"5"}
          type="text"
          className="pl-4 border-gray-300 border w-full md:w-[60%] outline-none pt-3"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          required
        />
        <label className="absolute bg-white bottom-[7.95rem] left-4 px-1 text-gray-600 text-sm">
          Bio
        </label>
      </div>
      <button
        type="submit"
        className="px-6 py-3 mt-4 rounded-md bg-blue-500 text-white font-medium block"
        disabled={isLoading}
      >
        {isLoading ? "Submitting..." : "Save"}
      </button>
    </form>
  );
};

export default CompleteProfileForm;
