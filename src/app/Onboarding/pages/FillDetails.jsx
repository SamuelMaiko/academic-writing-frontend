import React from "react";
import FillDetailsForm from "../components/FillDetailsForm";

const FillDetails = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center">
        <h1 className="font-semibold text-3xl">Fill Your Details</h1>
        <p className="font-medium my-4">
          Input your personal details for account setup.
        </p>
      </div>
      <div className="flex w-full mt-4">
        <FillDetailsForm />
      </div>
    </div>
  );
};

export default FillDetails;
