import React from "react";
import ContactInfoDetail from "./ContactInfoDetail";
import { Phone, EnvelopeSimple, LinkedinLogo } from "phosphor-react";

const ContactInfo = () => {
  return (
    <div
      className="mt-3 min-h-[6rem] mx-auto flex flex-col justify-center p-5 
      shadow-[2px_2px_13px_rgba(0,0,0,0.3)] dark:shadow-gray-600 bg-white
       w-[95%] rounded-[1rem] dark:text-darkMode-text dark:bg-darkMode-body"
    >
      <h1 className="text-lg font-semibold mb-3">Contact Information</h1>
      <ContactInfoDetail
        icon={<Phone size={24} />}
        title="Phone"
        detail="0123456789"
      />
      <ContactInfoDetail
        icon={<EnvelopeSimple size={24} />}
        title="Email"
        detail="dwayne@gmail.com"
      />
      <ContactInfoDetail
        icon={<LinkedinLogo size={24} />}
        title="LinkedIn"
        detail="dwayne@gmail.com"
      />
    </div>
  );
};

export default ContactInfo;
